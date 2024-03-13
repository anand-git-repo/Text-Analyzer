import React, {useState} from 'react'

export default function TextForm(props) {
const upperCase=()=>{
    // console.log("Uppercase clicked"+text);
    let newtext=text.toUpperCase();
    setText(newtext); 
}

const lowerCase=()=>{
    // console.log("Uppercase clicked"+text);
    let newtext=text.toLowerCase();
    setText(newtext); 
}

const clearText=()=>{
    setText("");
}


const isValid = text => /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/.test(text);

const emailExtracter = () => {
    const words = text.split(' ');
    const email = [];
    for (const word of words) {
        if (isValid(word)) {
            email.push(word);
        }
    }
    setText(email.join(', ')); // Join the array to form a string
}

const copyText=()=>{
    var text=document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
}

const removeExtraSpaces=()=>{
    var newtext=text.split(/[ ]+/);
    setText(newtext.join(" "))
}

const handleOnchange=(event)=>{
    // console.log("Handled onchange");
    setText(event.target.value);
}
const [text,setText]=useState("Enter text here")
  return (
    
    <>  
    <div className='container'>
<h1> {props.heading} </h1>
<div className="mb-3">
  <textarea className="form-control" id="myBox" value={text} onChange={handleOnchange} rows="4"></textarea>
</div>
<button className="btn btn-primary mx-3 my-2" onClick={upperCase} >Conver to Upper Case</button>
<button className="btn btn-primary mx-3 my-2" onClick={lowerCase}>Convert to Lower Case</button>
<button className="btn btn-primary mx-3 my-2" onClick={clearText}>Clear Text</button>
<button className="btn btn-primary mx-3 my-2" onClick={emailExtracter}>Get Emails</button>
<button className="btn btn-primary mx-3 my-2" onClick={copyText}>Copy Text</button>
<button className="btn btn-primary mx-3 my-2" onClick={removeExtraSpaces}>Remvove Extra Spaces</button>


    </div>
    <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p> {text.split(" ").length} words and {text.length} characters</p>
        <p> {0.008* (text.split(" ").length)}  Minute to read</p>
        <h2>Preview</h2>
        <p> {text} </p>
        <h2>Emails</h2>
        <p> {text} </p>
    </div>
    </>
  )
}
