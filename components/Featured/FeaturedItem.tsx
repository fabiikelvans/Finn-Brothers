import React from 'react';
import Image from "next/image";
import Button from "../Button/Button";

interface Props {
    image: string ;
    name: string;
    desc: string;
}

function FeaturedItem({ image, name, desc } : Props) {
    // @ts-ignore
    return (
        <div className='featured__item'>

            <div className="featured__item-image">
                <div className="image-wrapper">
                    <Image
                        className='image'
                        src={image}
                        alt="Image"
                        width={350}
                        height={600}
                    />
                </div>
            </div>

            <div className="featured__item-content">
                <h1>{name}</h1>
                <p>{desc}</p>
            </div>
        </div>
    );
}

export default FeaturedItem;