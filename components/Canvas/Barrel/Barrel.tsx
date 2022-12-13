import React, { useRef, useEffect, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import {OrbitControls, softShadows, useGLTF} from '@react-three/drei'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BarrelModel from "../Models/Barrel-Model";

softShadows()
gsap.registerPlugin(ScrollTrigger)

function Light() {
    const { scene } = useThree()
    const ref = useRef()
    //useHelper(ref, DirectionalLightHelper, 0.5, 'red')
    return (
        <directionalLight
            ref={ref}
            castShadow
            position={[0, 10, 20]}
            intensity={0.9}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
        />
    )
}

function Barrel({ mainRef }) {
    let animable = {
        x: -4,
        y: -0.5,
        z: 1
    }
    let animableSphere = {
        y: 0
    }


    useEffect(() => {
        if (mainRef) {
            const tl1 = gsap.timeline({
                scrollTrigger: {
                    trigger: '.section-one',
                    start: 'top center',
                    endTrigger: '.section-two',
                    end: 'bottom bottom',
                    scrub: 1,
                    markers: true
                }
            })
            tl1.to(animable, {
                x: -8,
                y: 4.8,
                z: -4
            })
            const tl3 = gsap.timeline({
                scrollTrigger: {
                    trigger: '.section-two',
                    start: 'top top',
                    endTrigger: '.section-three',
                    end: 'bottom bottom',
                    markers: true,
                    scrub: 1
                }
            })
            tl3.to(animableSphere, {
                y: 4.5,
                x: -4,
                z: -20
            })

            const tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: '.section-three',
                    start: 'top top',
                    endTrigger: '.section-four',
                    end: 'bottom bottom',
                    markers: true,
                    scrub: 1
                }
            })
            tl2.to(animable, {
                x: -4.2,
                y: 4.5,
                z: 8
            })

            const tl4 = gsap.timeline({
                scrollTrigger: {
                    trigger: '.section-four',
                    start: 'top top',
                    endTrigger: '.section-five',
                    end: 'bottom bottom',
                    markers: true,
                    scrub: 1
                }
            })
            tl4.to(animable, {
                x: -4,
                y: 4.5,
                z: -4
            })
        }
    }, [mainRef])


    return (
        <Canvas camera={{ position: [0, 0, 10] }} >
            <Light />
            <BarrelModel anim={animable}  />
            <OrbitControls enablePan={true} enableZoom={false} />
        </Canvas>
    )
}

export default Barrel;