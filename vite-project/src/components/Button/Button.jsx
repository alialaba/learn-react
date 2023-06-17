import React from "react";
import "./Button.css"


export default function Button({text, onClick, type, className}){
    return <button className="btn" onClick={onClick}>{text}</button>
}