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

  const toggleMode = (destMode) => {
    if (destMode === 'dark' && mode === 'light') {
      setMode('dark')
      setColor('white')
      setBgColor('#1D2951')
      document.body.style.backgroundColor = '#1D2951'
      showAlert('This is Dark Mode', 'success')
      document.title = 'Textutiles - Dark Mode'
    }
    else if (destMode === 'red' && mode === 'light') {
      setMode('red')
      setColor('white')
      setBgColor('#3f0000')
      document.body.style.backgroundColor = '#3f0000'
      showAlert('This is Red Mode', 'success')
      document.title = 'Textutiles - Red Mode'
    }
    else if ((destMode === 'red' && mode === 'red') || (destMode === 'dark' && mode === 'dark')) {
      setMode('light')
      setColor('black')
      setBgColor('white')
      document.body.style.backgroundColor = 'white'
      showAlert('This is Light Mode', 'success')
      document.title = 'Textutiles - Light Mode'
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
