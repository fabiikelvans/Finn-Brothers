import '../styles/scss/main.scss'
import type { AppProps } from 'next/app'
// import 'locomotive-scroll/dist/locomotive-scroll.css';

// Swiper CSS Files
import 'swiper/scss';
import 'swiper/scss/navigation';
import {useEffect, useRef} from "react";

export default function App({ Component, pageProps }: AppProps) {

  return (
      <>
          <div >
        <Component {...pageProps} />
          </div>

      </>
  )
}
