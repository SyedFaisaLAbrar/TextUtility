import React,{useState} from 'react'

export default function Textform(props) {

    const handleOnChange = (event) =>{
        setText(event.target.value)
    }

    const handleOnClick = () =>{
        setText(text.toUpperCase())
        props.showAlert('Converted To UpperCase.','success')
    }
    const handleOnClick2 = () =>{
        setText(text.toLowerCase())
        props.showAlert('Converted To LowerCase.','success')
    }
    const handleSpaces = () =>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(' '))
        props.showAlert('All extra spaces removed.','success')
    }
    const handleClear = () =>{
        setText('')
        props.showAlert('Textbox Cleared.','success')
    }
    const getNumberOfWords = (t) =>{
        let collection = t.split(' ');
        let counter=0;
        collection.forEach((x)=>{
            if(x !== '' && x !== '.' && x!== ','){
                counter+=1;
            }
        })
        return counter;
    }
    
    const [text, setText] = useState('Enter text here.');
    return (
        <>
            <div className="container" style={{color : props.color}}>
                <h1>{props.heading}</h1>
                <label for="mybox" className="form-label">Text Here</label>
                <div className='mb-3'>
                    <textarea className="form-control" style={{backgroundColor: props.bgcolor , color : props.color}} value={text} onChange={handleOnChange} id="mybox" rows="6"></textarea>
                </div>
                <button className="btn btn-primary my-6 mx-1" onClick={handleOnClick}>To Uppercase</button>
                <button className="btn btn-primary my-6 mx-3" onClick={handleOnClick2}>To Lowercase</button>
                <button className="btn btn-primary my-6 mx-3" onClick={handleSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary my-6 mx-3" onClick={handleClear}>Clear Textbox</button>
            </div>

            <div className="container my-4" style={{backgroundColor: props.bgcolor, color : props.color}}>
                <h1>Text Summary</h1>
                <p>Words {getNumberOfWords(text)} - Characters {text.length}</p>
                <p>{0.008 * text.split(" ").length} Minute Read</p>
                <h2>Preview</h2>
                <p>{text.length>0 ? text : 'Enter text in above box to preview here..'}</p>
            </div>
        </>
    )
}
