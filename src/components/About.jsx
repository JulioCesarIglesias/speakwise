import React from 'react'
import img01 from "../assets/images/img01.jpg";

const About = () => {
  return (
    <section className="about-section" id="about">
        <div className="container">
            <h2 className="about-title">Sobre o SpeakWise</h2>
            <div className="about-content">
                <div className="about-image">
                    <img src={img01} alt="Studying English" className="about-img"/>
                </div>
                <div className="about-text">
                    {/* <p>O SpeakWise nasceu em 2024 com uma missão clara: tornar o aprendizado do inglês mais acessível e divertido para todos. Nossa plataforma foi desenvolvida por uma equipe de professores e desenvolvedores apaixonados por educação e tecnologia.</p> */}
                    
                    {/* <h3>Nossa Missão</h3>
                    <p>Democratizar o ensino do inglês através de uma plataforma intuitiva e eficiente, focando na experiência prática e no aprendizado progressivo.</p> */}
                    
                    {/* <h3>Por que nos escolher?</h3>
                    <ul className="features-list">
                        <li>Método intuitivo de aprendizado</li>
                        <li>Conteúdo organizado por categorias</li>
                        <li>Pronúncia simplificada</li>
                        <li>Plataforma totalmente gratuita</li>
                        <li>Atualizações constantes de conteúdo</li>
                    </ul> */}

                    <p>A SpeakWise é uma plataforma inovadora criada para ajudar pessoas a expandirem seu vocabulário em inglês de forma prática e intuitiva. Nosso objetivo é tornar o aprendizado de novas palavras mais acessível, interativo e eficiente, permitindo que usuários explorem diferentes categorias de palavras com traduções precisas, pronúncias corretas e contexto de uso.</p><br/>

                    <p>Com uma interface simples e amigável, a SpeakWise permite que os usuários pesquisem palavras, descubram novas categorias e organizem seus estudos de acordo com suas necessidades.</p><br/>

                    <p>Nosso compromisso é oferecer uma ferramenta dinâmica e confiável para auxiliar estudantes, profissionais e qualquer pessoa interessada em aprimorar suas habilidades no idioma inglês. Aprender nunca foi tão fácil e acessível. Junte-se à SpeakWise e eleve seu inglês a um novo nível! </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About