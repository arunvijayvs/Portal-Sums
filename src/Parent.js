import React, { useState } from "react";
export default function Parent(){
    const[College,setCollege]=useState("SKCET")
    return(
        <div>
            <h1>my class is {College}</h1>
            <button onClick={()=>setCollege("ATRIA")}>click me</button>
        </div>
    )
}