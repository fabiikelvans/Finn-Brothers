import React, {useState} from 'react';
import Link from "next/link";
import {BiSearch, BiShoppingBag, BiUser} from "react-icons/bi";
import {HiMenu, HiOutlineMenuAlt3} from "react-icons/hi";
import {CgClose} from "react-icons/cg";
import Menu from "./Menu";
import Image from "next/image";

import logo from "../../../public/images/logo.png";

interface Props {
    dark?: boolean
    initial?: boolean | null;
}

function Nav( {dark} : Props) {

    // State of our Menu
    const [state, setState] = useState({
        initial: false,
        clicked: null,
        menuName: <HiOutlineMenuAlt3 />
    });

    // State of our button
    const [disabled, setDisabled] = useState(false);

    // Toggle menu
    const handleMenu = () => {
        disableMenu();
        if (state.initial === false) {
            setState({
                // @ts-ignore
                initial: null,
                // @ts-ignore
                clicked: true,
                menuName: <CgClose/>
            });
        } else if (state.clicked === true) {
            setState({
                // @ts-ignore
                clicked: !state.clicked,
                menuName: <HiOutlineMenuAlt3 />
            });
        } else if (state.clicked === false) {
            setState({
                // @ts-ignore
                clicked: !state.clicked,
                menuName: <CgClose/>
            });
        }
    };

    //Determine if out menu button should be disabled
    const disableMenu = () => {
        setDisabled(!disabled);
        setTimeout(() => {
            setDisabled(false);
        }, 1200);
    };



    return (
        <div className={`nav ${dark ? 'nav-dark' : ''} `}>

            <button className="nav__toggle" disabled={disabled} onClick={handleMenu}>
                <div className='nav__toggle-icon'>
                    {state.menuName}
                </div>
            </button>


                <div className="nav__logo">
                    <Link href={'/'}>
                        <div className="image-wrapper">
                            <Image
                                className='image'
                                src={logo}
                                alt="Image"
                                width={140}
                                height={140}
                            />
                        </div>
                    </Link>
                </div>


            <div>


            <div className="nav__account">
                    <div className="cart">
                        <BiShoppingBag/>
                        <div className='cart-count'>
                            <p>2</p>
                        </div>
                    </div>
                </div>

            {/*Menu Component*/}
                <Menu state={state}/>
            </div>


        </div>
    );
}

export default Nav;