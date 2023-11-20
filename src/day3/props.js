import React from "react";
export default function PropsFunctional(Props){
    return(
        <div>
            my name is {Props.name}
        </div>
    );
}

PropsFunctional.defaultProps={
name:"Sachin"
}
