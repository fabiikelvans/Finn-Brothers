import React, {useCallback, useEffect, useRef, useState} from 'react';
import { SVGProps } from "react"
import FeaturedItem from "./FeaturedItem";

// Import Images
import img1 from '../../public/images/1.png';
import img2 from '../../public/images/2.png';
import img3 from '../../public/images/3.png';
import img4 from '../../public/images/4.png';
import img5 from '../../public/images/5.png';


// Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Pagination} from "swiper";
import {BsArrowLeftCircle, BsArrowRightCircle} from "react-icons/bs";
import {GiSpottedArrowhead} from "react-icons/gi";
SwiperCore.use([Pagination]);


function Featured() {

    // SLIDER SETTINGS
    const sliderRef = useRef<SwiperCore>(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        // @ts-ignore
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        // @ts-ignore
        sliderRef.current.swiper.slideNext();
    }, []);


    // Active Index

    const [currentSlide, setCurrentSlide] = useState(0);

    const [isLeftDisabled, setIsLeftDisabled] = useState(true);
    const [isRightDisabled, setIsRightDisabled] = useState(false);

    const updateIndex = useCallback(
        // @ts-ignore
        () => setCurrentSlide(sliderRef.current.swiper.realIndex),
        []
    );

    // Add eventlisteners for swiper after initializing
    useEffect(() => {
        // @ts-ignore
        const swiperInstance = sliderRef.current.swiper;

        if (swiperInstance) {
            swiperInstance.on("slideChange", updateIndex);
        }

        return () => {
            if (swiperInstance) {
                swiperInstance.off("slideChange", updateIndex);
            }
        };
    }, [updateIndex])


    // @ts-ignore
    // @ts-ignore
    return (
        <div className='featured'>
            <div className="featured__header">
                <h1>Featured</h1>
            </div>

            <div className="featured__arrows">
                <div className="featured__arrows-prev" >
                    <GiSpottedArrowhead onClick={handlePrev} />
                </div>
                <div className="featured__arrows-next" >
                    <GiSpottedArrowhead  onClick={handleNext}/>

                </div>
            </div>
            <div className="featured__wrapper">

                {/*@ts-ignore*/}
                <Swiper ref={sliderRef}
                        spaceBetween={50}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 2000 }}
                        navigation={false}
                        breakpoints={{
                            500: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            992: {
                                slidesPerView: 3,
                            },
                        }}
                >
                    <SwiperSlide>
                        {/*@ts-ignore*/}
                        <FeaturedItem image={img2}
                            name={'Yellow Spot'}
                            desc={
                            'Four grain bourbon finished with a toasted American Oak spire\n'
                            }
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        {/*@ts-ignore*/}
                        <FeaturedItem image={img1}
                            name={'Bush Mills'}
                            desc={'Rye whiskey finished with a charred American Oak spire'}
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        {/*@ts-ignore*/}
                        <FeaturedItem image={img4}
                            name={'Green Spot'}
                            desc={'Bourbon finished with a Cabernet infused French Oak spire'}
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        {/*@ts-ignore*/}
                        <FeaturedItem image={img5}
                            name={'Manca rella'}
                            desc={'Bourbon finished with a coffee infused French Oak spire'}
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        {/*@ts-ignore*/}
                        <FeaturedItem image={img3}
                                      name={'Ben Riach'}
                                      desc={'Bourbon finished with a coffee infused French Oak spire'}
                        />
                    </SwiperSlide>
                </Swiper>
            </div>

        </div>
    );
}

export default Featured;