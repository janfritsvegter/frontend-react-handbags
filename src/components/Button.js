import React from "react";

function Button({ title , disabled , clickBehaviour}) {
    function functionOne(){ console.log("Dit is functie 1");}
    function functionTwo(txt){console.log(txt);}
    return (
        <button type="button" disabled={disabled}
                onClick={()=>{
                    if(clickBehaviour ==="one"){
                        functionOne();
                    }else if(clickBehaviour ==="two"){
                        functionTwo("Dit is functie 2");
                    }else{
                        console.log({clickBehaviour});
                    }
                }}>
            {title}
        </button>
    )
}

export default Button;