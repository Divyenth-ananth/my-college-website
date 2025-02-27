import React, { useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { PointerLockControls, Stars, useTexture } from '@react-three/drei'
import * as THREE from 'three'

function Ground() {
    const texture = useTexture('/textures/grass.jpeg')
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping
    texture.repeat.set(100, 100)

    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
            <planeGeometry args={[500, 500]} />
            <meshStandardMaterial map={texture} />
        </mesh>
    )
}

function PlayerControls({ speed = 15 }) {
    const { camera } = useThree()
    const [keys, setKeys] = useState({
        forward: false,
        backward: false,
        left: false,
        right: false
    })

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.code === 'KeyW') setKeys((k) => ({ ...k, forward: true }))
            if (e.code === 'KeyS') setKeys((k) => ({ ...k, backward: true }))
            if (e.code === 'KeyA') setKeys((k) => ({ ...k, left: true }))
            if (e.code === 'KeyD') setKeys((k) => ({ ...k, right: true }))
        }

        const handleKeyUp = (e) => {
            if (e.code === 'KeyW') setKeys((k) => ({ ...k, forward: false }))
            if (e.code === 'KeyS') setKeys((k) => ({ ...k, backward: false }))
            if (e.code === 'KeyA') setKeys((k) => ({ ...k, left: false }))
            if (e.code === 'KeyD') setKeys((k) => ({ ...k, right: false }))
        }

        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
            window.removeEventListener('keyup', handleKeyUp)
        }
    }, [])

    useFrame((_, delta) => {
        const direction = new THREE.Vector3()
        const cameraDirection = new THREE.Vector3()
        camera.getWorldDirection(cameraDirection)

        const forward = new THREE.Vector3(cameraDirection.x, 0, cameraDirection.z).normalize()
        const strafe = new THREE.Vector3().crossVectors(camera.up, forward).normalize()

        if (keys.forward) direction.add(forward)
        if (keys.backward) direction.sub(forward)
        if (keys.left) direction.add(strafe)
        if (keys.right) direction.sub(strafe)

        direction.normalize().multiplyScalar(speed * delta)
        camera.position.add(direction)
    })

    return null
}

const ThreeScene = () => {
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <Stars radius={120} depth={60} count={5000} factor={4} saturation={0} fade />
                <Ground />
                <PlayerControls />
                <PointerLockControls />
            </Canvas>
        </div>
    )
}

export default ThreeScene
