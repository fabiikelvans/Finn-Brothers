import React, {useRef} from 'react';
import {Head} from "../seo/Head/Head";
import Layout from "../components/Layout/Layout";
import Image from "next/image";

import { useIsomorphicLayoutEffect } from 'usehooks-ts';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {gsap} from "gsap";

import barley from '../public/images/barley.svg';
import water from '../public/images/water.svg';
import stills from '../public/images/stills.svg';
import casks from '../public/images/casks.svg';
import nature from '../public/images/logo.png';

import product1 from '../public/images/product-1.png';
import product2 from '../public/images/product-2.png';

function Product() {

    gsap.registerPlugin(ScrollTrigger);

    const t1 = gsap.timeline();

    let scrollRef = useRef(null);

    useIsomorphicLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.utils.toArray('.section').forEach((section, i) => {
                ScrollTrigger.create({
                    trigger: section,
                    start: 'top top',
                    pin: true,
                    pinSpacing: false
                })
            })
        }, scrollRef); // <- scopes all selector text to the root element

        return () => ctx.revert();
    }, );
    return (
        <div>
            <Head title='Aster Beauty Shop' description='Aster is an online beauty and cosmetics shop'/>

            <Layout>
                <div className='product' ref={scrollRef}>
                    <div className="product__wisdom section">
                        <div className="overlay">
                            <div className="product-content">
                                <h1>The <span>Wisdom</span> of Nature, distilled.</h1>
                            </div>
                        </div>
                    </div>

                    <div className="product__barley section">
                        <div className="overlay">
                            <div className="product-content">
                                <div className="image-wrapper">
                                    <Image
                                        className='image'
                                        src={barley}
                                        alt="Image"
                                        width={140}
                                        height={140}
                                    />
                                </div>
                                    <h1>Locally grown <span>barley</span>, the core of our whiskies.</h1>
                            </div>
                        </div>
                    </div>

                    <div className="product__water section">
                        <div className="overlay">
                            <div className="product-content">
                                <div className="image-wrapper">
                                    <Image
                                        className='image'
                                        src={water}
                                        alt="Image"
                                        width={140}
                                        height={140}
                                    />
                                </div>

                                <h1>The purest <span>water</span>, flowing underneath our distillery.</h1>
                            </div>
                        </div>
                    </div>

                    <div className="product__stills section">
                        <div className="overlay">
                            <div className="product-content">
                                <div className="image-wrapper">
                                    <Image
                                        className='image'
                                        src={stills}
                                        alt="Image"
                                        width={140}
                                        height={140}
                                    />
                                </div>
                                <h1>Our mythical <span>stills</span>, born in Speyside.</h1>
                            </div>
                        </div>
                    </div>

                    <div className="product__casks section">
                        <div className="overlay">
                            <div className="product-content">
                                <div className="image-wrapper">
                                    <Image
                                        className='image'
                                        src={casks}
                                        alt="Image"
                                        width={140}
                                        height={140}
                                    />
                                </div>
                                <h1>Years of quiet maturation in high quality <span>casks</span>.</h1>
                            </div>
                        </div>
                    </div>

                    <div className="product__nature section">
                        <div className="overlay">
                            <div className="product-content">
                                <div className="image-wrapper">
                                    <Image
                                        className='image'
                                        src={nature}
                                        alt="Image"
                                        width={140}
                                        height={140}
                                    />
                                </div>
                                <h1>Inspired by <span>nature</span>, enhanced by experience and an unusual will.</h1>
                            </div>
                        </div>
                    </div>

                    <div className="product__nature section"></div>

                    <div className="product__button"></div>
                    <div className="product__images">

                        <div className="product__images-1">
                            <div className="image-wrapper">
                                <Image
                                    className='image'
                                    src={product1}
                                    alt="Image"
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                        </div>

                        <div className="product__images-2">
                            <div className="image-wrapper">
                                <Image
                                    className='image'
                                    src={product2}
                                    alt="Image"
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </Layout>
        </div>
    );
}

export default Product;