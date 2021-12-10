import React, { useEffect, useState } from 'react'
import SliderContent from './SliderContent';
import ImagesSlides from './ImagesSlides';
import Arrows from './Arrows';
import Dots from './Dots';
import "./slider.css";

const len = ImagesSlides.length - 1;

export default function Slider() {

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <div className="slider-container">
            <SliderContent activeIndex={activeIndex} imageSlider={ImagesSlides} />
            <Arrows prevSlide={() => setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)}
                nextSlide={() => setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)} />
            <Dots activeIndex={activeIndex} imageSlider={ImagesSlides} onclick={activeIndex => setActiveIndex(activeIndex)} />
        </div>
    )
}
