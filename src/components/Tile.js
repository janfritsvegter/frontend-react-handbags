import React from 'react';


const Tile = ({image, alt, title,children}) => {
     if (image) {
        return (
            <section>
                <img src={image} alt={alt}/>
            </section>
        );
    } else {
        return(
            <section>
                <h2>{title}</h2>
                {children}
            </section>
        );
    }

};

export default Tile;