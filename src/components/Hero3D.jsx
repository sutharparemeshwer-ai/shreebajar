import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Hero3D = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 20;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // 1. Soft Circular Particles (No harsh squares!)
    // Create a circular canvas texture for smooth round particles
    const createParticleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');

      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, 'rgba(79, 70, 229, 0.9)');
      gradient.addColorStop(0.4, 'rgba(59, 130, 246, 0.5)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);

      const texture = new THREE.CanvasTexture(canvas);
      return texture;
    };

    const particleTexture = createParticleTexture();

    const particlesCount = 450;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 22;
      posArray[i + 1] = (Math.random() - 0.5) * 22;
      posArray[i + 2] = (Math.random() - 0.5) * 15;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.45,
      map: particleTexture,
      transparent: true,
      opacity: 0.6,
      depthWrite: false,
      blending: THREE.NormalBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // 2. 3D Camera & Marketing Node Objects
    const mainGroup = new THREE.Group();

    // Central Metallic Camera Lens Cylinder / Ring
    const lensGeo = new THREE.TorusGeometry(4.8, 0.6, 32, 100);
    const lensMat = new THREE.MeshPhongMaterial({
      color: 0x4f46e5,
      emissive: 0x3730a3,
      emissiveIntensity: 0.1,
      shininess: 100,
      specular: 0x60a5fa
    });
    const lensMesh = new THREE.Mesh(lensGeo, lensMat);
    lensMesh.rotation.x = Math.PI / 3;
    mainGroup.add(lensMesh);

    // Inner Glowing Aperture Ring
    const innerRingGeo = new THREE.TorusGeometry(3.2, 0.2, 24, 80);
    const innerRingMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.9,
      roughness: 0.1,
      emissive: 0xd97706,
      emissiveIntensity: 0.2
    });
    const innerRingMesh = new THREE.Mesh(innerRingGeo, innerRingMat);
    innerRingMesh.rotation.y = Math.PI / 4;
    mainGroup.add(innerRingMesh);

    // Center Glass Element Sphere
    const glassGeo = new THREE.SphereGeometry(2.2, 32, 32);
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x3b82f6,
      transmission: 0.9,
      opacity: 1,
      transparent: true,
      roughness: 0.05,
      ior: 1.5,
      thickness: 1.2
    });
    const glassMesh = new THREE.Mesh(glassGeo, glassMat);
    mainGroup.add(glassMesh);

    // Outer Floating Satellite Nodes (Representing Shoots, Ads, Web Dev, SEO)
    const nodeCount = 4;
    const nodeColors = [0x4f46e5, 0x10b981, 0xf59e0b, 0x06b6d4];
    const satGroup = new THREE.Group();

    for (let i = 0; i < nodeCount; i++) {
      const angle = (i / nodeCount) * Math.PI * 2;
      const radius = 7.5;

      const satGeo = new THREE.SphereGeometry(0.5, 16, 16);
      const satMat = new THREE.MeshStandardMaterial({
        color: nodeColors[i],
        roughness: 0.2,
        metalness: 0.8
      });
      const satMesh = new THREE.Mesh(satGeo, satMat);
      satMesh.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
      satGroup.add(satMesh);
    }

    mainGroup.add(satGroup);
    scene.add(mainGroup);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x4f46e5, 2.0);
    dirLight1.position.set(10, 15, 10);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xf59e0b, 1.5);
    dirLight2.position.set(-10, -10, -10);
    scene.add(dirLight2);

    // Mouse Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      mouseX = x * 0.001;
      mouseY = y * 0.001;
    };

    window.addEventListener('mousemove', handleMouseMove);

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

    // Animation Loop
    let animationFrameId;
    const startTime = performance.now();

    const animate = () => {
      const elapsedTime = (performance.now() - startTime) * 0.001;

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      mainGroup.rotation.y = elapsedTime * 0.25 + targetX * 1.5;
      mainGroup.rotation.x = elapsedTime * 0.15 + targetY * 1.5;

      satGroup.rotation.z = -elapsedTime * 0.3;
      particlesMesh.rotation.y = elapsedTime * 0.03;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full min-h-[380px] sm:min-h-[480px]" />
  );
};

export default Hero3D;
