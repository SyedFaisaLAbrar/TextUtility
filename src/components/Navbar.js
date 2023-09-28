import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar navbar-${props.mode === 'red' || 'dark' ? 'dark':'light'} bg-${props.mode === 'red' || 'dark' ? 'dark':'light'}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">{props.aboutTitle}</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
             
            </ul>
            <div className={`form-check form-switch text-${props.mode === 'dark' || 'red '? 'light':'dark'} mx-2`}>
              <input className="form-check-input" onClick={() => props.toggleMode('red')}  type="checkbox" role="switch" id="toRed"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Red Mode</label>
            </div>
            <div className={`form-check form-switch text-${props.mode === 'dark' || 'red '? 'light':'dark'} mx-2`}>
              <input className="form-check-input" onClick={() => props.toggleMode('dark')}  type="checkbox" role="switch" id="toDark"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
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


