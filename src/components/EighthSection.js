import React from 'react';

export default function SixthSection() {
    return (
        <section className="section-module content" style={{ position: "relative" }}>
            <div className="orange-box-2" style={{ position: "absolute" }}></div>
            <div className="form-container packaging">
                <div className="form-box">
                    <div>
                        <h2 className="sora-form-title" style={{ marginBottom: "10px" }}>Quero fazer parte</h2>
                        <h4 className="sora-form-descriptions">Preencha os campos abaixo com<br />os seus dados para iniciar o processo<br /> de abertura de conta.</h4>
                    </div>
                    <div className="form-inputs" id="form-contact">
                        <input type="text" placeholder="Nome Completo*" required></input>
                        <input type="number" placeholder="CPF*" required></input>
                        <input type="email" placeholder="E-mail*" required></input>
                        <input type="tel" placeholder="Telefone"></input>
                        <button className="btn-form">Enviar</button>
                    </div>
                    <div>
                        <h4 className="sora-form-descriptions">Ao continuar, você permite que o banco<br />digital Deo X entre em contato com você<br />pelos canais informados.</h4>
                    </div>
                </div>
                <div className="download-app-container">
                    <div className="download-app">
                        <h2 style={{ lineHeight: "110%" }} className="text-blue title-h2">Baixe o app do Deo X e abra<br />sua conta em poucos<br />minutos.</h2>
                        <div style={{ marginTop: "40px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                            <div>
                                <img style={{ width: "275px" }} src="../assets/google-play-badge.png" alt="GooglePlay badge"></img>
                            </div>
                            <div>
                                <img style={{ width: "240px" }} src="../assets/apple-store-badge.png" alt="Apple Store badge"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
