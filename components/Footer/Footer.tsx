import React from 'react';
import Link from "next/link";
import Image from "next/image";

import warning from '../../public/images/18-plus.png';
import barley from "../../public/images/barley.svg";

import logo from '../../public/images/logo.png';


function Footer() {
    return (
        <div className='footer'>
            <div className="footer__top">
                <div className="logo">
                    <div className="image-wrapper">
                    <Image
                        className='image'
                        src={logo}
                        alt="Image"
                        width={140}
                        height={140}
                    />
                    </div>
                </div>
                <div className="links">
                    <ul>
                        <li><Link href={'/'}>Whisky</Link></li>
                        <li><Link href={'/'}>The Distillery</Link></li>
                        <li><Link href={'/'}>Our Story</Link></li>
                        <li><Link href={'/'}>Point of Sale</Link></li>
                        <li><Link href={'/'}>Contact Us</Link></li>
                    </ul>
                </div>
                <div className="newsletter">
                    <h3 className='newsletter-title'>Join the Finn Brothers Exclusive Club</h3>
                    <p className='newsletter-desc'>Join our newsletter and receive all of the latest news from Finn Brothers</p>
                    <div className="newsletter-input">
                        <input type="text" placeholder='Email Address'/>
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>

            <div className="footer__bottom">
                <div className="warning">
                    <div className="image-wrapper">
                        <Image
                            className='image'
                            src={warning}
                            alt="warning"
                            fill
                        />
                    </div>
                    <span>Drink Responsibly</span>
                </div>

                <div className="legal">
                    <ul>
                        <li><Link href={'/'}>Partnerships</Link></li>
                        <li><Link href={'/'}>Terms & Conditions</Link></li>
                        <li><Link href={'/'}>Privacy Policy</Link></li>
                        <li><Link href={'/'}>Cookie Preference</Link></li>
                    </ul>
                </div>

                <div className="social">
                    <ul>
                        <li><Link href={'/'}>Facebook</Link></li>
                        <li><Link href={'/'}>Instagram</Link></li>
                        <li><Link href={'/'}>Twitter</Link></li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Footer;