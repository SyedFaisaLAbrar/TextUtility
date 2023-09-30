import React,{useState} from 'react'

export default function Textform(props) {

    const [text, setText] = useState('Enter text here.');

    const handleOnChange = (event) =>{
        setText(event.target.value)
    }

    const handleOnClick = () =>{
        setText(text.toUpperCase())
        if(text.length > 0){
            props.showAlert('Converted To UpperCase.','success')
        }
    }
    const handleOnClick2 = () =>{
        setText(text.toLowerCase())
        if(text.length > 0){
            props.showAlert('Converted To LowerCase.','success')
        }
    }
    const handleSpaces = () =>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(' '))
        if(text.length > 0){
            props.showAlert('All extra spaces removed.','success')
        }
    }
    const handleClear = () =>{
        setText('')
        if(text.length > 0){
            props.showAlert('Textbox Cleared.','success')
        }
    }
    const getNumberOfWords = (t) =>{
        let collection = t.split(/\s+/);
        let counter=0;
        collection.forEach((x)=>{
            if(x !== '' && x !== '.' && x!== ','){
                counter+=1;
            }
        })
        return counter;
    }
    
    
    return (
        <>
            <div className="container" style={{color : props.color}}>
                {/* {console.log(props.color)} */}
                <h1>{props.heading}</h1>
                <label HTMLfor="mybox" className="form-label">Text Here</label>
                <div className='mb-3'>
                    <textarea className="form-control" style={{backgroundColor: props.bgcolor , color : props.color}} value={text} onChange={handleOnChange} id="mybox" rows="6"></textarea>
                </div>
                <button className="btn shadow-sm mx-1 my-1"  style={{backgroundColor: props.bgcolor, color : props.color}} onClick={handleOnClick}>To Uppercase</button>
                <button className="btn shadow-sm mx-3 my-1"  style={{backgroundColor: props.bgcolor, color : props.color}} onClick={handleOnClick2}>To Lowercase</button>
                <button className="btn shadow-sm mx-3 my-1"  style={{backgroundColor: props.bgcolor, color : props.color}} onClick={handleSpaces}>Remove Extra Spaces</button>
                <button className="btn shadow-sm mx-3 my-1"  style={{backgroundColor: props.bgcolor, color : props.color}} onClick={handleClear}>Clear Textbox</button>
            </div>

            <div className="container my-4" style={{color : props.color}}>
                <h1>Text Summary</h1>
                <div className=" p-3 mb-4 mt-4 rounded shadow-sm" style={{backgroundColor: props.bgcolor , color : props.color}}>
                    <strong><h6>Words {getNumberOfWords(text)} &nbsp;&nbsp;&nbsp;&nbsp; Characters {text.length}</h6></strong>
                </div>
                <p>{0.008 * text.split(" ").length} Minute Read</p>
                <h2>Preview</h2>
                <div className="container shadow-sm rounded mt-10 p-4" style={{backgroundColor: props.bgcolor , color : props.color}}>
                    <p>{text.length>0 ? text : 'Enter text in above box to preview here..'}</p>
                </div>
            </div>
        </>
    )
}
