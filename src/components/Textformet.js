import React,{useState} from 'react'



export default function Textformet(props) {

    const handleUpClick = ()=>{
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Convert to UpperCase","Success");
    //    eyta diye title change kora jabe document.title ="jahidul- UpperCase"
    }

    const handleLoClick = ()=>{
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("Convert to LowerCase","Success");
    }


    const handleDeleteClick = ()=>{
        let newtext = "";
        setText(newtext)
        props.showAlert("Your Text is Delete","Success");
    }


    const handleCopy =()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Your Text is Copy","Success");
    }


    const handleSpaces =()=>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Removed Extra Spaces","Success");
      
    }



    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    
    return (

        <>
        <div className="container" style={{color: props.mode==='dark'? 'white':'black'}}>   
            <h1>{props.heading}</h1>  
              <div className="mb-3">
              <textarea className="form-control" value={text} onChange={handleOnChange} 
               style={{backgroundColor:props.mode==='dark'? '#7a5555':'white',color: props.mode==='dark'? 'white':'black'}}  id="myBox" rows="8">                 
              </textarea>
              </div>
              <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
              <button disabled={text.length===0}  className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
              <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleDeleteClick}>Delete Text</button>
              <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
              <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleSpaces}>Extra Space</button>
       


             
        </div>

        <div className="container my-3" style={{color: props.mode==='dark'? 'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).
             length} Words and {text.length}Characters</p>
            <p> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).
            length} Minutes to read </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to Preview!!"}</p>
        </div>
        </>

    )
}
