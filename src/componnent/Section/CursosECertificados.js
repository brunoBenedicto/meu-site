import React from "react";
import SlideDio from "../SlideDio/SlideDio.js";
import SlideUdemy from "../SlideUdemy/SlideUdemy.js";

 
export default function CursosECertificados(){
    return(
        <>
            <h1 className="ContainerSlide">Cursos e Certificados</h1>
            
            <div className="ContainerSlide">
                <h2>Dio - Digital Inovation One</h2>
                <p>
                    Otima plataforma para estudos, ja que alem das aulas ainda força o aprendizado atraves da pratica com desafios de codigos e de projetos. Conheci esta plataforma atraves de um bootcamp DECOLA_TECH_III da Avanade, a partir dai desenvolvi bastante meus conhecimentos em frontend, atualmente tenho dedicado meu tempo nesta plataforma com os conteudos sobre ReacJS.  
                </p>
                <SlideDio/>
                
            </div>
            <div className="ContainerSlide">
                <h2>Udemy</h2>
                <p>
                      A Udemy fornece Cursos dos mais diversos e geralmente cabem no bolso, sempre que aparece pormoção dou uma conferida la, Resultado... ainda tem uns 15 cursos não concluidos la, logo logo disponibilizarei os certificados aqui.
                </p>
                <SlideUdemy/>
                
            </div>
        </>
    )
}