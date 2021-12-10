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
        <div>
            <h1 style={{ textAlign: "center", marginTop: "65px", padding: " 0 120px" }} className="text-blue title-h2"><span className="text-orange">Tudo</span> que você sempre procurou em um banco digital</h1>
            <div className="App">
                <Carousel breakPoints={breakPoints}>
                    <Item>
                        <div className="font-sora services-card">
                            <div><img src="./assets/pix-logo.png" style={{ width: "90px" }} alt="Deo X Pix"></img></div>
                            <h3 className="sora-card">Pix</h3>
                        </div>
                    </Item>
                    <Item>
                        <div className="font-sora services-card">
                            <div><img src="./assets/phone-icon.png" style={{ width: "100px" }} alt="Deo X Cel"></img></div>
                            <h3 className="sora-card">Deo X Cel</h3>
                        </div>
                    </Item>
                    <Item>
                        <div className="font-sora services-card" style={{ marginTop: "15px" }}>
                            <div><img src="./assets/bar-code-icon.png" style={{ width: "90px" }} alt="Barcode Deo X"></img></div>
                            <h3 className="sora-card">Boletos</h3>
                        </div>
                    </Item>
                    <Item>
                        <div className="font-sora services-card">
                            <div><img src="./assets/ted-icon.png" style={{ width: "90px" }} alt="TED icon Deo X"></img></div>
                            <h3 className="sora-card">TED</h3>
                        </div>
                    </Item>
                    <Item>
                        <div className="font-sora services-card">
                            <div><img src="./assets/doc-icon.png" style={{ width: "90px" }} alt="DOC icon Deo X"></img></div>
                            <h3 className="sora-card">DOC</h3>
                        </div>
                    </Item>
                    <Item>
                        <div className="font-sora services-card">
                            <div><img src="./assets/qr-code-icon.png" style={{ width: "90px" }} alt="Pagamento com QR Code Deo X"></img></div>
                            <h3 className="sora-card">QR Code</h3>
                        </div>
                    </Item>
                    <Item>
                        <div className="font-sora services-card">
                            <div style={{ height: "115px" }}><img src="./assets/open-banking-icon.png" style={{ width: "90px" }} alt="Open banking Deo X"></img></div>
                            <h3 className="sora-card" style={{ fontSize: "30px" }}>Open Banking</h3>
                        </div>
                    </Item>
                </Carousel>
            </div>
        </div>
    )
}
