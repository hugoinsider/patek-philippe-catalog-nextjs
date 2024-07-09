"use client"

import React from 'react'
import Slider from "react-slick";

interface IBanner {
    url:string
}

const bannerList : IBanner[] = [
    {
        url: '/Banner_9b06269a-3bcb-486e-97dd-c414e7835068.webp'
    },
    {
        url: '/banner_1920.jpg'
    },
    {
        url: '/patekphilippe_5740_1G_001.jpg'
    }
]

interface ICardImageProps {
    url:string
}

const CardImage = ({ url }:ICardImageProps) => (
    <div
        className='bg-center bg-no-repeat bg-cover w-full h-[550px] z-10'
        style={{
            backgroundImage: `url("${url}")`
        }}>
    </div>
)

export function Banner() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <></>,
        prevArrow: <></>
    };

    return (
        <section className='w-full'>
            <Slider {...settings}>
                {bannerList?.map((props, idx) => <CardImage key={idx} {...props} />)}
            </Slider>
        </section>
    )
}