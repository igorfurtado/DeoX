import React from 'react';
import Carousel from "react-elastic-carousel";
import Item from './Item';
import "./styles.css";

export default function ItemSlider() {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
    ];

    return (
        <div style={{ width: "100%", height: "100%" }}>
            <h2 style={{ textAlign: "center" }} className="text-blue title-h2 title-section-2"><span className="text-orange">Tudo</span> que você sempre procurou em um banco digital</h2>
            <div className="App">
                <Carousel breakPoints={breakPoints}>
                    <Item>
                        <div className="font-sora services-card card-size">
                            <div><img src="./assets/pix-logo.png" className="card-font-size" alt="Deo X Pix"></img></div>
                            <h3 className="sora-card">Pix</h3>
                        </div>
                    </Item>
                    <Item>
                        <div className="font-sora services-card card-size">
                            <div><img src="./assets/phone-icon.png" className="card-font-size" alt="Deo X Cel"></img></div>
                            <h3 className="sora-card">DeoX Cel</h3>
                        </div>
                    </Item>
                    <Item>
                        <div className="font-sora services-card card-size" style={{ marginTop: "15px" }}>
                            <div><img src="./assets/bar-code-icon.png" className="card-font-size" alt="Barcode Deo X"></img></div>
                            <h3 className="sora-card">Boletos</h3>
                        </div>
                    </Item>
                    <Item>
                        <div className="font-sora services-card card-size">
                            <div><img src="./assets/ted-icon.png" className="card-font-size" alt="TED icon Deo X"></img></div>
                            <h3 className="sora-card">TED</h3>
                        </div>
                    </Item>
                    <Item>
                        <div className="font-sora services-card card-size">
                            <div><img src="./assets/doc-icon.png" className="card-font-size" alt="DOC icon Deo X"></img></div>
                            <h3 className="sora-card">DOC</h3>
                        </div>
                    </Item>
                    <Item>
                        <div className="font-sora services-card card-size">
                            <div><img src="./assets/qr-code-icon.png" className="card-font-size" alt="Pagamento com QR Code Deo X"></img></div>
                            <h3 className="sora-card">QR Code</h3>
                        </div>
                    </Item>
                    <Item>
                        <div className="font-sora services-card card-size">
                            <div style={{ height: "115px" }}><img src="./assets/open-banking-icon.png" className="card-font-size" alt="Open banking Deo X"></img></div>
                            <h3 className="sora-card open-banking">Open Banking</h3>
                        </div>
                    </Item>
                </Carousel>
            </div>
        </div>
    )
}
