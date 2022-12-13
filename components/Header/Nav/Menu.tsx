import React, {useEffect, useRef, useState} from 'react';
import { gsap } from "gsap";
import Link from "next/link";
import {
    menuShow,
    menuHide,
    textIntro,
    staggerLinks,
    hoverLink,
    hoverExit
} from "../../../components/animations/gsap/Animate";
import {BiSearch, BiShoppingBag, BiUser} from "react-icons/bi";

import svg from '../../../public/vercel.svg'
import Image from "next/image";

const Images = {
    img1: 'https://images.unsplash.com/photo-1470338745628-171cf53de3a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjEzfHx3aGlza2V5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    img2: 'https://images.unsplash.com/photo-1616962245873-b3a5b774d815?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    img3: 'https://images.unsplash.com/photo-1508253730651-e5ace80a7025?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    img4: 'https://images.unsplash.com/photo-1594386329813-aa717acbba7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    img5: 'https://images.unsplash.com/photo-1574071318537-1c5c7f4b570d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
}

// @ts-ignore
function Menu({state}) {

    //create refs for our DOM elements
    let menuWrapper = useRef(null)
    let show1 = useRef(null)
    let show2 = useRef(null)
    let line1 = useRef(null)
    let line2 = useRef(null)
    let line3 = useRef(null)
    let line4 = useRef(null)
    let image = useRef(null)

    // Colors
    const colors = {
        Sea: Images.img1,
        Sand: Images.img2,
        Peach: Images.img3,
        Tea : Images.img4,
        Miniom: Images.img5
    }

    const [color, setColor] = useState(colors.Sea);

    useEffect(() => {
        setColor(color)
    }, []);

    useEffect(() => {
        // If the menu is open and we click the menu button to close it.
        if (state.clicked === false) {
            // If menu is closed and we want to open it.
            {/*@ts-ignore*/}
            menuHide(show2, show1);
            // Set menu to display none
            gsap.to(menuWrapper, { duration: 1, css: { display: "none" } });
        } else if (
            state.clicked === true ||
            (state.clicked === true && state.initial === null)
        ) {
            // Set menu to display block
            gsap.to(menuWrapper, { duration: 0, css: { display: "block" } });
            //Allow menu to have height of 100%
            gsap.to([show1, show2], {
                duration: 0,
                opacity: 1,
                height: "100%"
            });
            {/*@ts-ignore*/}
            menuShow(show1, show2);
            {/*@ts-ignore*/}
            staggerLinks(line1, line2, line3, line4);
            {/*@ts-ignore*/}
            textIntro(image);
        }
    }, [state]);

    return (
        <div>
            {/*@ts-ignore*/}
            <div ref={(el) => (menuWrapper = el)} className='menu-wrapper'>
                {/*@ts-ignore*/}
                <div ref={(el) => (show1 = el)}
                    className="menu-secondary-background-color"
                ></div>


                {/*@ts-ignore*/}
                <div className="menu" ref={(el) => (show2 = el)}>

                    {/* MENU IMAGE */}
                    {/*@ts-ignore*/}
                    <div className="image-wrapper" ref={(el) => (image = el)}>
                        <Image className='image' src={color} alt="Menu" fill/>
                    </div>

                    {/* BACKGROUND OVERLAY */}
                    <div className="overlay"></div>

                    {/* MENU ITEMS */}
                    <ul className="menu__items">
                        <li
                            onMouseEnter={e => setColor(colors.Sand)}
                            onMouseLeave={e => setColor(colors.Sea)}
                            className="menu__item">
                            <Link href={'#'} >Whisky</Link></li>
                        <li
                            onMouseEnter={e => setColor(colors.Peach)}
                            onMouseLeave={e => setColor(colors.Sea)}
                            className="menu__item" >
                            <Link href={'#'}>Distillers</Link>
                        </li>
                        <li
                            onMouseEnter={e => setColor(colors.Tea)}
                            onMouseLeave={e => setColor(colors.Sea)}
                            className="menu__item" >
                            <Link href={'#'}>Our Story</Link>
                        </li>
                        <li
                            onMouseEnter={e => setColor(colors.Miniom)}
                            onMouseLeave={e => setColor(colors.Sea)}
                            className="menu__item" >
                            <Link href={'#'}>Point of Sale</Link>
                        </li>

                    </ul>

                </div>
            </div>
        </div>
    );
}

export default Menu;