import React from "react";
import Img from "../assets/picture.png"
export default function Card(){
    return(
        <article className="card">
           <img className="card__img" src={Img} alt="pop up" />
           <div>
                <h4 className="card__title">Design Portfolio</h4>
           <div  className="card__tools">
                <span>HTML</span>
                <span>CSS</span>
           </div>
           </div>
           </article>
     
    )
}