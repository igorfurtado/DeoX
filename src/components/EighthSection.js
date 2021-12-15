import React, { useState } from 'react';

export default function SixthSection() {

    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    function saveName(event) {
        let inputName = event.target.value;
        setName(inputName);
    };

    function saveCpf(event) {
        let inputCpf = event.target.value;
        setCpf(inputCpf);
    };

    function saveEmail(event) {
        let inputEmail = event.target.value;
        setEmail(inputEmail);
    };

    function savePhone(event) {
        let inputPhone = event.target.value;
        setPhone(inputPhone);
    };

    function cleanInputs() {
        setTimeout(() => {
            setName("");
            setCpf("");
            setEmail("");
            setPhone("");
        }, 2000);
    };

    return (
        <section className="section-module content" style={{ position: "relative" }}>
            <div className="orange-box-2" style={{ position: "absolute" }}></div>
            <div className="form-container packaging">
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div className="form-box">
                        <div>
                            <h2 className="sora-form-title" style={{ marginBottom: "10px" }}>Quero fazer parte</h2>
                            <h4 className="sora-form-descriptions">Preencha os campos abaixo com<br />os seus dados para iniciar o processo<br /> de abertura de conta.</h4>
                        </div>
                        <form className="form-inputs" id="form-contact" action="https://hotmail.us20.list-manage.com/subscribe/post?u=704f189af161a694eaba5fa5c&amp;id=00344dfba9" method="post" name="mc-embedded-subscribe-form" target="_blank">
                            <input value={name} onChange={saveName} type="text" placeholder="Nome Completo*" required name="NAME"></input>
                            <input value={cpf} onChange={saveCpf} type="text" placeholder="CPF (apenas números)*" required name="CPF"></input>
                            <input value={email} onChange={saveEmail} type="email" placeholder="E-mail*" required name="EMAIL"></input>
                            <input value={phone} onChange={savePhone} type="tel" placeholder="Telefone" name="PHONE"></input>
                            <button className="btn-form" onClick={cleanInputs}>Enviar</button>
                        </form>
                        <div>
                            <h4 className="sora-form-descriptions">Ao continuar, você permite que o banco<br />digital Deo X entre em contato com você<br />pelos canais informados.</h4>
                        </div>
                    </div>
                </div>
                <div className="download-app-container">
                    <div className="download-app">
                        <h2 style={{ lineHeight: "110%" }} className="text-blue title-h2">Baixe o app do Deo X e abra<br />sua conta em poucos<br />minutos.</h2>
                        <div style={{ marginTop: "40px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                            <div>
                                <img className="google-badge" src="./assets/google-play-badge.png" alt="GooglePlay badge"></img>
                            </div>
                            <div>
                                <img className="apple-badge" src="./assets/apple-store-badge.png" alt="Apple Store badge"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

