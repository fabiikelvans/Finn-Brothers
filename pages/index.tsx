import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from "../components/Layout/Layout";
import {Head} from "../seo/Head/Head";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import History from "../components/History/History";
import Qualities from "../components/Qualities/Qualities";
import Ingredient from "../components/Ingredient/Ingredient";
import Featured from "../components/Featured/Featured";
import CTA from "../components/CTA/CTA";
import {useEffect, useRef, useState} from "react";
import Barrel from "../components/Canvas/Barrel/Barrel";

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Audio from "../components/Audio/Audio";

gsap.registerPlugin(ScrollTrigger)

export default function Home() {

    const [main, setMain] = useState()
    const ref = useRef();

    const mainRef = useRef();

    const content = useRef();

    useEffect(() => {
        //@ts-ignore
        setMain(ref.current.children[1])
    }, [main])

  // @ts-ignore
    return (
    <div >
      <Head title='Aster Beauty Shop' description='Aster is an online beauty and cosmetics shop'/>

        {/*<Preloader/>*/}
      <Layout>
          <Audio/>
          <main >
              <div className="canvas3D">
                  <Barrel mainRef={main} />
              </div>

              {/* @ts-ignore*/}
              <div className='scroll-main' ref={ref} >
              <section className="section-one">
                  <Header/>
              </section>
              <section className="section-two">
                  <About/>
              </section>
                  <section className="section-three">
                      <History/>
              </section>
                  <section className="section-four">
                      <Qualities/>
              </section>
                <section className="section-five">
                    <Ingredient/>
                </section>

              </div>
          <Featured/>
          <CTA/>
          </main>
      </Layout>

    </div>

      )
}
