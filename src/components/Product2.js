import React from "react";

function Product2 ({label, imageFile ,alt , name , price }){
    const image = `http://localhost:3000/assets/${imageFile}`;
    return(
        <article>
            <span>{label}</span>
            <img src={image} alt={alt} />
            <p>{name}</p>
            <h4>&euro; {price}</h4>
        </article>
    )
}

export default Product2