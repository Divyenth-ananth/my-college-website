import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function Ground3D() {
    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 50, 100);

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Ground Plane
        const geometry = new THREE.PlaneGeometry(100, 100, 50, 50);
        const material = new THREE.MeshStandardMaterial({ color: 0x4CAF50, wireframe: false });

        const ground = new THREE.Mesh(geometry, material);
        ground.rotation.x = -Math.PI / 2;
        scene.add(ground);

        // Lighting
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(10, 50, 50).normalize();
        scene.add(light);

        // Camera Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;

        // Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        // Cleanup
        return () => {
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} style={{ width: '100vw', height: '100vh' }} />;
}

export default Ground3D;
