import React from "react";

function Product ({label, image ,alt , name , price }){
    return(
        <article>
            <span>{label}</span>
            <img src={image} alt={alt} />
            <p>{name}</p>
            <h4>&euro; {price}</h4>
        </article>
    )
}

export default Product