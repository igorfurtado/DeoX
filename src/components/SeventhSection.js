import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function FifthSection() {
    return (
        <div className="section-module parallax-section7 bg-seventh-section">
            <div className="grid-seventh-section">
                <div style={{ position: "absolute", width: "100%", height: "100%", overflow: "hidden" }}>
                    <img style={{ width: "100%", height: "100%" }} src="../assets/bg-white-noise.jpg" alt="Light background"></img>
                </div>
                <div className="mockup-description margin-left-desc">
                    <h2 className="title-h2-regular text-blue">Deo X</h2>
                    <h3 className="text-blue title-h1" style={{ marginTop: "25px", lineHeight: "110%" }}>Único, sem tarifas e como você precisa.</h3>
                    <h4 className="title-h4 text-blue" style={{ marginTop: "25px" }} >Abra uma conta digital <span className="text-orange">100% isenta de tarifas</span> e tenha soluções completas para todos os momentos.</h4>
                    <AnchorLink href='#form-contact' style={{ textDecoration: "none" }}><button className="btn-medium title-h5 text-blue" style={{ marginTop: "30px" }}>comece agora</button></AnchorLink>
                </div>
                <div className="mockup-block">
                    <img src="../assets/mockup.png" alt="Mockup app Deo X"></img>
                </div>
            </div>
        </div>
    )
};