import React from 'react'
import { Link } from "react-router-dom";
import logoSpeakWise from "../assets/images/logo-speakwise.png";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-content container">
            <div className="footer-section">
                <h3>SpeakWise</h3>
                <Link to="/" className="logo">
                    <img src={logoSpeakWise} alt="Logo SpeakWise" />
                </Link>
                <p>Transformando o aprendizado do inglês em uma jornada empolgante.</p>
            </div>
            
            <div className="footer-section">
                <h3>Links Rápidos</h3>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#home">Categorias</a></li>
                    <li><Link to="/about">Sobre</Link></li>                    
                </ul>
            </div>
            
            {/* <div className="footer-section">
                <h3>Contato</h3>
                <ul>
                    <li>Email: contato@englishstudy.com</li>
                    <li>Tel: (11) 99999-9999</li>
                    <li>São Paulo, Brasil</li>
                </ul>
            </div> */}
            
            {/* <div className="footer-section">
                <h3>Redes Sociais</h3>
                <div className="social-links">
                    <a href="#" className="social-link">Facebook</a>
                    <a href="#" className="social-link">Instagram</a>
                    <a href="#" className="social-link">YouTube</a>
                </div>
            </div> */}
        </div>
        <div className="footer-bottom">
            <p>&copy; 2025 SpeakWise. Todos os direitos reservados.</p>
        </div>
    </footer>
  )
}

export default Footer