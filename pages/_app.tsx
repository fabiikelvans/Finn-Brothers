import '../styles/scss/main.scss'
import type { AppProps } from 'next/app'
// import 'locomotive-scroll/dist/locomotive-scroll.css';

// Swiper CSS Files
import 'swiper/scss';
import 'swiper/scss/navigation';
import {useEffect, useRef} from "react";
import Lenis from "@studio-freight/lenis";

export default function App({ Component, pageProps }: AppProps) {

    useEffect(() => {
        const lenis = new Lenis({
            duration: 2.6,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
            direction: 'vertical', // vertical, horizontal
            gestureDirection: 'vertical', // vertical, horizontal, both
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: true,
            touchMultiplier: 2,
            infinite: false,
        })

//get scroll value
        {/*@ts-ignore*/}
        lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
            console.log({ scroll, limit, velocity, direction, progress })
        })

        function raf(time:any) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    })

  return (
      <>
          <div >
        <Component {...pageProps} />
          </div>

      </>
  )
}
