import React from 'react';
import {Head} from "../seo/Head/Head";
import Layout from "../components/Layout/Layout";
import Image from "next/image";

import barley from '../public/images/barley.svg';
import water from '../public/images/water.svg';
import stills from '../public/images/stills.svg';
import casks from '../public/images/casks.svg';
import nature from '../public/images/logo.png';

import product1 from '../public/images/product-1.png';
import product2 from '../public/images/product-2.png';

function Product() {
    return (
        <div>
            <Head title='Aster Beauty Shop' description='Aster is an online beauty and cosmetics shop'/>

            <Layout>
                <div className='product'>
                    <div className="product__wisdom">
                        <div className="overlay">
                            <div className="product-content">
                                <h1>The <span>Wisdom</span> of Nature, distilled.</h1>
                            </div>
                        </div>
                    </div>

                    <div className="product__barley">
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

                    <div className="product__water">
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

                    <div className="product__stills">
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

                    <div className="product__casks">
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

                    <div className="product__nature">
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