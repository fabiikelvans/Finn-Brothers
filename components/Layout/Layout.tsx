import React, {ReactNode} from 'react';
import Lenis from '@studio-freight/lenis'
// @ts-ignore
import { useFrame, useIsTouchDevice, useLayoutEffect } from '@studio-freight/hamo'
import Nav from "../Header/Nav/Nav";
import Footer from "../Footer/Footer";
import {useStore} from "../../lib/store";
import {useRouter} from "next/router";

type Props = {
    children?: ReactNode,
    dark?: boolean
}


function Layout({ children , dark } : Props) {

    const [lenis, setLenis] = useStore((state) => [state.lenis, state.setLenis])
    const router = useRouter();

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            smoothTouch: false,
            touchMultiplier: 2,
        })
        setLenis(lenis)

        return () => {
            lenis.destroy()
            setLenis(null)
        }
    }, []);

    // @ts-ignore
    useFrame((time) => {
        lenis?.raf(time)
    }, [])

    return (
        <div className='noise'>
            <Nav dark={dark}/>
            {children}
            <Footer/>
        </div>
    );
}

export default Layout;