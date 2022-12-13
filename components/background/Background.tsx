import React from 'react';
import {Canvas} from "@react-three/fiber";
import Particles from "../shaders/bg-articles/Particles";
import {OrbitControls} from "@react-three/drei";

function Background() {
    return (
        <div className='background'>
            <Canvas dpr={2}>
                <color attach="background" args={[0xf5f3fd]} />
                <OrbitControls makeDefault />
                <Particles />
            </Canvas>
        </div>
    );
}

export default Background;