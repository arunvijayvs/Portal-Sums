import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

export default function LoginApp() {
  const [name, setName] = useState("");
 const Change=()=>{
    document.write("success");
    return(
        <h1>my name is{name}</h1>
    )
}
  return (
    <div>
    <form>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
    <button onClick={Change}>click me{name}</button>
  
    </div>
  )
}
