import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Interactive3DGlobe = ({ height = '400px' }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    const globeGroup = new THREE.Group();

    // 1. Outer Wireframe Sphere
    const sphereGeo = new THREE.SphereGeometry(7, 36, 36);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      wireframe: true,
      transparent: true,
      opacity: 0.25
    });
    const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
    globeGroup.add(sphereMesh);

    // 2. Inner Glowing Core Sphere
    const coreGeo = new THREE.SphereGeometry(6.6, 32, 32);
    const coreMat = new THREE.MeshPhongMaterial({
      color: 0x0f172a,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.15,
      shininess: 90
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    globeGroup.add(coreMesh);

    // 3. Location Pin Nodes (Merchant Nodes across India & Global)
    const nodeLocations = [
      { lat: 28.6139, lon: 77.209, name: 'Delhi NCR Hub' },
      { lat: 19.076, lon: 72.8777, name: 'Mumbai Commercial Center' },
      { lat: 12.9716, lon: 77.5946, name: 'Bengaluru Tech HQ' },
      { lat: 22.5726, lon: 88.3639, name: 'Kolkata Regional Hub' },
      { lat: 13.0827, lon: 80.2707, name: 'Chennai Express Hub' },
      { lat: 23.0225, lon: 72.5714, name: 'Ahmedabad Textile Center' },
      { lat: 25.3176, lon: 82.9739, name: 'Varanasi Silk Cluster' },
    ];

    const convertLatLonToVector3 = (lat, lon, radius) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      const x = -(radius * Math.sin(phi) * Math.cos(theta));
      const z = radius * Math.sin(phi) * Math.sin(theta);
      const y = radius * Math.cos(phi);
      return new THREE.Vector3(x, y, z);
    };

    nodeLocations.forEach((loc) => {
      const pos = convertLatLonToVector3(loc.lat, loc.lon, 7.1);

      // Node marker sphere
      const nodeGeo = new THREE.SphereGeometry(0.25, 16, 16);
      const nodeMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.copy(pos);
      globeGroup.add(nodeMesh);

      // Glowing Aura Ring around node
      const ringGeo = new THREE.RingGeometry(0.3, 0.45, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x10b981,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.8
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.position.copy(pos);
      ringMesh.lookAt(new THREE.Vector3(0, 0, 0));
      globeGroup.add(ringMesh);
    });

    scene.add(globeGroup);

    // Ambient & Directional Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x10b981, 1.5);
    dirLight.position.set(20, 20, 20);
    scene.add(dirLight);

    // Mouse Drag Rotation logic
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const handleMouseDown = (e) => {
      isDragging = true;
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const deltaMove = {
        x: e.clientX - previousMousePosition.x,
        y: e.clientY - previousMousePosition.y
      };

      globeGroup.rotation.y += deltaMove.x * 0.008;
      globeGroup.rotation.x += deltaMove.y * 0.008;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const domElem = containerRef.current;
    domElem.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    // Animation Loop
    let animationFrameId;
    const animate = () => {
      if (!isDragging) {
        globeGroup.rotation.y += 0.004;
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Resize listener
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      domElem.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full rounded-2xl glass-panel p-2 overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-emerald-500/30 text-xs text-emerald-400 font-medium z-10 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
        Interactive 3D SK Marketing Network Globe (Drag to Rotate)
      </div>
      <div ref={containerRef} style={{ height }} className="w-full cursor-grab active:cursor-grabbing" />
    </div>
  );
};

export default Interactive3DGlobe;
