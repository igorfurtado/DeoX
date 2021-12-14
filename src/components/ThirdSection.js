import React from 'react';
import SeventhSection from './SeventhSection';

export default function ThirdSection() {
    return (
        <section className="section-module parallax-third-section bg-third-section">
            <div className="grid-section3">
                <div className="bg-image-3">
                    <img src="../assets/bg_section3.jpg" alt="Men holding his phone and smiling - Deo X"></img>
                </div>
                <div className="wrapper-section3">
                    <div style={{ position: "absolute", width: "100%", height: "100%" }}>
                        <img className="light-bg-section3" style={{ width: "100%", height: "100%" }} src="../assets/bg-f8faff.jpg" alt="Light background"></img>
                    </div>

                    <div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <h2 className="title-h2 text-blue benefits-title1">Conta digital gratuita, pagamento
                            via QR Code, investimentos, DOC, Ted, seguros e muito mais. </h2>
                        <div className="benefits-title2">
                            <h2 className="title-h2 text-blue">Sem tarifas:</h2>
                            <h3 className="title-h4 text-blue">Seu dinheiro merece ser economizado</h3>
                        </div>
                        <div className="grid-wrapper">
                            <div className="grid-cards">
                                <div className="benefits-card paragraph-poppins">
                                    <p className="paragraph-poppins">Saque <br />sem tarifa</p>
                                    <img className="img-card-benefits" src="../assets/noTax.png" alt="No Tax - Deo X" style={{ marginTop: "-15px" }}></img>
                                </div>
                                <div className="benefits-card paragraph-poppins">
                                    <p className="paragraph-poppins">Programa de pontos sem custo</p>
                                    <img className="img-card-benefits" src="../assets/points-icon.png" alt="Points program - Deo X" style={{ marginTop: "-5px" }}></img>
                                </div>
                                <div className="benefits-card paragraph-poppins">
                                    <p className="paragraph-poppins">Atendimento 24hrs</p>
                                    <img className="img-card-benefits" src="../assets/time-icon.png" alt="24hrs - Deo X" style={{ marginTop: "-10px" }}></img>
                                </div>
                                <div className="benefits-card paragraph-poppins">
                                    <p className="paragraph-poppins">Acesso à plataforma de investimentos</p>
                                    <img className="img-card-benefits" src="../assets/invest-icon.png" alt="Invest - Deo X" style={{ marginTop: "-5px" }}></img>
                                </div>
                                <div className="benefits-card paragraph-poppins">
                                    <p className="paragraph-poppins">Cartão <br />pré-pago</p>
                                    <img className="img-card-benefits" src="../assets/card-icon.png" alt="Cards - Deo X" style={{ marginTop: "-15px" }}></img>
                                </div>
                                <div className="benefits-card paragraph-poppins">
                                    <p className="paragraph-poppins">Consultoria de seguros</p>
                                    <img className="img-card-benefits" src="../assets/security-icon.png" alt="Insurance - Deo X" style={{ marginTop: "-15px" }}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SeventhSection></SeventhSection>
            <div className="mockup">
                <img src="../assets/mockup.png" alt="Mockup app Deo X"></img>
            </div>
        </section>
    )
};
