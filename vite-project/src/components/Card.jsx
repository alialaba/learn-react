import React from "react";
import Img from "../assets/picture.png"
export default function Card({title, tools}){
    return(
        <article className="card">
           <img className="card__img" src={Img} alt="pop up" />
           <div>
                <h4 className="card__title">{title}</h4>
           <div  className="card__tools">
                {tools.map(tool => <span key={tool}>{tool}</span>)}
           </div>
           </div>
           </article>
     
    )
}