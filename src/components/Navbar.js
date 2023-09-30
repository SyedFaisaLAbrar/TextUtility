import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar navbar-${props.mode === 'red' || 'dark' ? 'dark':'light'} bg-${props.mode === 'red' || 'dark' ? 'dark':'light'}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.aboutTitle}</Link>
              </li>
             
            </ul>
            <div className="btn btn-primary rounded mx-3" onClick={()=>{props.toggleMode('primary')}} style={{width:"40px",height:"18px"}}></div>
            <div className="btn btn-warning rounded mx-3" onClick={()=>{props.toggleMode('warning')}} style={{width:"40px",height:"18px"}}></div>
            <div className="btn btn-success rounded mx-3" onClick={()=>{props.toggleMode('success')}} style={{width:"40px",height:"18px"}}></div>
            <div className="btn btn-danger rounded mx-3" onClick={()=>{props.toggleMode('danger')}} style={{width:"40px",height:"18px"}}></div>
            <div className="btn btn-light rounded mx-3" onClick={()=>{props.toggleMode('light')}} style={{width:"40px",height:"18px"}}></div>
            
            {/* <div className={`form-check form-switch text-${props.mode === 'dark' || 'red '? 'light':'dark'} mx-2`}>
              <input className="form-check-input" onClick={() => props.toggleMode('red')}  type="checkbox" role="switch" id="toRed"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Red Mode</label>
            </div>
            <div className={`form-check form-switch text-${props.mode === 'dark' || 'red '? 'light':'dark'} mx-2`}>
              <input className="form-check-input" onClick={() => props.toggleMode('dark')}  type="checkbox" role="switch" id="toDark"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div> */}
          </div>
        </div>
      </nav>

    </>
  )
}

Navbar.propTypes = {
  title : PropTypes.string.isRequired,
  aboutTitle : PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title : 'Set Title Here',
  aboutTitle : 'Set About Us'
}


