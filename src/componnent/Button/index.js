import React from "react";
import PropTypes from "prop-types";
import '../Button/StyleButton.css'

export default function Button (props){

    const {children, onClick} = props

    return(
        <button className = "btnStyle" onClick={onClick}>{children}</button>
    )
}

Button.prototype ={
    onClick: PropTypes.func.isRequired
}