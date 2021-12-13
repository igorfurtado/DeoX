import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function FirstSection() {
    return (
        <section className=" section-module parallax bg-first-section">
            <div className="margin-section">
                <div className="box-title-1">
                    <h1 className="title-h1 text-blue">Pague, invista e guarde seu dinheiro em um único <br></br> <span className="text-orange">banco digital.</span></h1>
                </div>
                <AnchorLink href='#products' style={{ textDecoration: "none" }}><button className="btn-large title-h5 text-blue">Nossos produtos</button></AnchorLink>
                <div className="image-bg-1">
                    <img src="./assets/bg_section1.png" alt="Mulher feliz + Deo X"></img>
                </div>
            </div>
        </section>
    )
};
