import React from "react";
import '../Header/Header.css'

export default function Header(){
   
    return(
        <>
            <header className="principal">
                <div>
                        <h1>Bruno Benedicto</h1>
                </div>
                <div className="icons">
                        <a href="https://www.linkedin.com/in/bruno-benedicto-18791993/" target="_blank" rel="noopener noreferrer">
                            <img src="https://img.icons8.com/color/48/000000/linkedin.png"/>
                        </a>
                        <a href="https://github.com/brunoBenedicto" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/sf-ultralight/50/ffffff/github.png"/>
                        </a>
                    </div>
            </header>
        </>
    )
}