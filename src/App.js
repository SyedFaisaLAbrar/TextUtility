import { useState } from 'react';
import './App.css'
// import About from './components/About';
import Navbar from './components/Navbar'
import Textform from './components/Textform';
import Alert from './components/Alert';
// import { BrowserRouter as Router,Routes, Route } from 'react-router-dom


function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const [mode, setMode] = useState('light')
  const [color, setColor] = useState('dark')
  const [bgcolor, setBgColor] = useState('light')

  
  const shiftToRed = () => {
    setMode('red')
    setColor('white')
    setBgColor('#3f0000')
    showAlert('This is Red Mode', 'success')
    document.title = 'Textutiles - Red Mode'
  }
  const shiftToGreen = () => {
    setMode('green')
    setColor('white')
    setBgColor('#116d42')
    showAlert('This is Green Mode', 'success')
    document.title = 'Textutiles - Green Mode'
  }
  const shiftToBlue = () => {
    setMode('blue')
    setColor('white')
    setBgColor('#044ebb')
    showAlert('This is Blue Mode', 'success')
    document.title = 'Textutiles - Blue Mode'
  }
  const shiftToWhite = () => {
    setMode('white')
    setColor('black')
    setBgColor('white')
    showAlert('This is White Mode', 'success')
    document.title = 'Textutiles - White Mode'
  }
  const shiftToYellow = () => {
    setMode('yellow')
    setColor('black')
    setBgColor('#e7ad00')
    showAlert('This is Yellow Mode', 'success')
    document.title = 'Textutiles - Yellow Mode'
  }


  const removeBgClasses = () =>{
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-light')
  }
  const toggleMode = (destMode) => {
    removeBgClasses();
    document.body.classList.add('bg-'+destMode)
    if(destMode === 'danger'){
      shiftToRed()
    }
    else if(destMode === 'success'){
      shiftToGreen()
    }
    else if(destMode === 'warning'){
      shiftToYellow()
    }
    else if(destMode === 'primary'){
      shiftToBlue()
    }
    else if(destMode === 'light'){
      shiftToWhite()
    }
  }



  return (
    <>
      {/* <Router> */}
        <Navbar title="Text Utilities" aboutTitle="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-5">
        {/* <Routes> */}
          {/* Its always neccessary to add exact before path. Because react only do partial matching of url
                  like     users/ 
                           users/home  ---->it will render users/ only due to partial matching
          */}
          {/* <Route exact path='/' element={}/> */}
          <Textform heading="Enter Text To Analyze" mode={mode} showAlert={showAlert} color={color} bgcolor={bgcolor} />
          {/* <Route exact path='/about' element={}/> */}
          {/* <About/> */}
        {/* </Routes>   */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
