import React from 'react'

export default function Footer() {
    return (
        <footer className="footer-box">
            <div className="footer-content">
                <span className="footer-title">Fale com a gente</span>

                <span className="footer-section1 footer-margin">SAC</span>

                <span className="footer-section1">0800 xxx xxxx</span>
                <span className="footer-section1 footer-margin">sac@deoxbank.com</span>
                <hr className="footer-line"></hr>
                <span className="footer-section2">© 2022 Deo X - Banco Digital. CNPJ: 41.471.766/0001-31 </span>

                <span className="footer-section2 footer-address footer-margin">Rua Ana Guedes Vasconcelos, 81, sala 703C, Altiplano Cabo Branco,
                    58046-092 - João Pessoa, PB.</span>
            </div>
        </footer>
    );
};
