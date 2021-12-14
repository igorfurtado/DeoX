import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function FirstSection() {
    return (
        <section className=" section-module first-section bg-first-section">
            <div className="margin-section">
                <div style={{ position: "relative", zIndex: "100", marginLeft: "20px" }}>
                    <div className="box-title-1">
                        <h1 className="title-h1 text-blue">Pague, invista e guarde seu dinheiro em um único <span className="text-orange">banco digital.</span></h1>
                    </div>
                    <AnchorLink href='#products' style={{ textDecoration: "none", zIndex: "100" }}><button className="btn-large title-h5 text-blue">Nossos produtos</button></AnchorLink>
                </div>
                <div className="image-bg-1">
                    <img src="./assets/bg_section1.png" alt="Mulher feliz + Deo X"></img>
                </div>
            </div>
        </section>
    )
};
