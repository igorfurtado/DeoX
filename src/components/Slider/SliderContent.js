import React from 'react'

export default function SliderContent({ activeIndex, imageSlider }) {
    return (
        <section>
            {imageSlider.map((slide, index) => <div key={index} className={index === activeIndex ? "slides active" : "inactive"}>
                <img className="slide-image" src={slide.urls} alt=""></img>
                <h2 className="text-blue title-h1-media on-media">Deo X na mídia.</h2>
                <div className="wrapper-media">
                    <blockquote className="box-media">
                        <h3 className="slide-title"><span className="text-orange">|</span>{slide.title}</h3>
                        <p className="slide-text">{slide.description}</p>
                    </blockquote>
                </div>
            </div>
            )}
        </section>
    );
};
