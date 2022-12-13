import React, {useRef, useEffect} from 'react';
import * as THREE from 'three';
import {useFrame} from '@react-three/fiber';

function Sphere(props) {
    const mesh = useRef();

    // I don't remember where I found this algorithm,
    // but it gives a nice rainbow gradient around the circle.
    const sphereColor = () => {
        let r, g, b;
        r = parseInt((Math.sin(props.angle - Math.PI) + 1) * 128);
        g = parseInt((Math.sin((props.angle - Math.PI) - 4 * Math.PI / 3) + 1) * 128);
        b = parseInt((Math.sin((props.angle - Math.PI) - 2 * Math.PI / 3) + 1) * 128);
        return new THREE.Color(`rgb(${r}, ${g}, ${b})`);
    }

    /*
    We want the scale of the frequency data (0 - 255) to map to the scale of the spheres.
     */
    function adjustScale(number, inMin, inMax, outMin, outMax) {
        return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    }

    /*
     * Each sphere is getting its own analyzer node.
     * This sets the scale of the spheres as the music plays.
     * Setting the size to every second index of the frequency data.
     */
    function Analyzer({sound}) {
        const analyzer = useRef();

        useEffect(() => {
            analyzer.current = new THREE.AudioAnalyser(sound.current, 128);
        }, [sound]);

        useFrame(() => {
            if (analyzer.current) {
                let data = analyzer.current.getFrequencyData();
                mesh.current.scale.x =
                    mesh.current.scale.y =
                        mesh.current.scale.z =
                            adjustScale(data[props.index * 2], 0, 255, 0.25, 1.5);
            }
        });

        return <></>;
    }

    return (
        <>
            <mesh position={props.position} ref={mesh}>
    <sphereGeometry args={[0.5, 20, 20]}/>
    <meshPhongMaterial color={sphereColor()} />
    </mesh>
    <Analyzer sound={props.sound} />
    </>
);
}

export default Sphere;
