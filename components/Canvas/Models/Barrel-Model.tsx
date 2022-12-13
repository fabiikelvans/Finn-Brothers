import React, { useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { softShadows, useGLTF } from '@react-three/drei';

function BarrelModel({ anim, props }) {

    const ref = useRef()
    useFrame(() => {
        ref.current.position.x = -2 * anim.x
        ref.current.position.y = -1.5 * anim.y
        ref.current.position.z = -1.5 * anim.z
        ref.current.rotation.y = -1.5 * anim.y
    })
    const { nodes, materials } = useGLTF('../../../models/barrel/scene.glb')

    return (
        <group {...props} dispose={null} scale={4}>
            <group position={[0.04, 0, -0.01]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={8}>
                <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                    <mesh ref={ref}>
                        <group position={[0.1, 6.72, 0.1]} rotation={[-Math.PI / 2, 0, 0]} scale={4.48}>
                            <mesh geometry={nodes.Barrel_lambert1_0.geometry} material={materials.lambert1} />
                        </group>
                        <group position={[0.1, -0.15, 0.1]} rotation={[-Math.PI / 2, 0, 0]} scale={[3.82, 3.82, 4.48]}>
                            <mesh geometry={nodes.Bottom_lambert1_0.geometry} material={materials.lambert1} />
                        </group>
                        <group position={[0.1, 6.21, 0.1]} rotation={[-Math.PI / 2, 0, 0]} scale={4.48}>
                            <mesh geometry={nodes.Liquid_lambert1_0.geometry} material={materials.lambert1} />
                        </group>
                        <group position={[0.1, 6.72, 0.1]} rotation={[-Math.PI / 2, 0, 0]} scale={4.48}>
                            <mesh geometry={nodes.Supports_lambert1_0.geometry} material={materials.lambert1} />
                        </group>
                        <group position={[5.4, 3.39, 5.3]} rotation={[2.46, -0.66, -2.03]} scale={[3.82, 3.82, 4.48]}>
                            <mesh geometry={nodes.Lid_lambert1_0.geometry} material={materials.lambert1} />
                        </group>
                    </mesh>
                </group>
            </group>
        </group>
    );
}

export default BarrelModel;