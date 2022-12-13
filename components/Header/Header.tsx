import React, {useEffect, useRef} from 'react';
import Image from "next/image";
import {contentIntro} from "../animations/gsap/Animate";



function Header() {
    let scrollRef = useRef(null);

    useEffect(() => {
        contentIntro(scrollRef)

    }, []);

    return (
        <div className='header' ref={(el) => (scrollRef= el)}>
           <div className="header__title" >
               <h1>HONEY, <br/> MEET <br/> WHEATED <br/> BOURBON.</h1>
           </div>
           <div className="header__subtitle">
               <p>Born of nine generations</p>
           </div>
        </div>
    );
}

export default Header;