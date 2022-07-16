import React from 'react';
import '../Card/Card.css';


export const  CardC =({urlImg, titulo, urlLinkDesafio, tituloDesafio, descricao}) =>{
     
    return(
        <div className="cardPhotoshop">
            <div className="imgPhotoshop">
                <img src={urlImg} alt=""/>
            </div>
            <div className="containerDescrição">
            <h2>
                {titulo}
            </h2>
            <h4>
                Desafio: 
                <a href={urlLinkDesafio}>
                    {tituloDesafio}
                </a>
            </h4>
            <p>
                {descricao}
            </p>
        </div> 
        </div>
    )
}
