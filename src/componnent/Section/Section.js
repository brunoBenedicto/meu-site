import React,{useState} from "react";
import Button from '../Button/index.js'
import EmBreve from "../EmBreve/EmBreve.js";
import '../Section/Section.css'
import CursosECertificados from "./CursosECertificados.js";
import PortifolioPhotoshop from "./PortifolioPhotoshop.js"

export default function Section(id){
 
    const [conteudo, setConteudo] = useState(<EmBreve/>)
    
    function trocaCursosECertificados(){
        setConteudo(<CursosECertificados/>)
    }
    function trocaPortifolioPhotoshop(){
        setConteudo(<PortifolioPhotoshop/>)
    }
    function trocaEmBreve(){
        setConteudo(<EmBreve/>)
    }
    

    return(
        <>
            <div className="navigation">
                <Button onClick={trocaEmBreve}>
                    Inicio
                </Button>
                <Button  onClick={trocaEmBreve}>
                    Formação academica
                </Button>
                <Button onClick={trocaCursosECertificados}>
                    Cursos e Certificados
                </Button>
                <Button onClick={trocaEmBreve}>
                    Projetos dev
                </Button>
                <Button onClick={trocaPortifolioPhotoshop}>
                    Photoshop
                </Button>
            </div>

            <div className="section">
                {conteudo}       
            </div>
        </>
    )
}