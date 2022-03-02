import React, {useContext} from 'react'
import {Link, useLocation} from 'react-router-dom'
import Modecontext from './context/mode/Modecontext'
const Navbar = () => {
  const location = useLocation();
    const {mode, toggleMode} = useContext(Modecontext)
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${mode==='light'?'light':'dark'} bg-${mode==='light'?'light':'dark'}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">NewsShort</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link  className={`nav-link ${location.pathname==='/about'?'active':''}`}  aria-current="page" to="/about"> About</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/automobile'?'active':''}`} to="/automobile">Automobile</Link>
        </li>
        <li className="nav-item">
          <Link  className={`nav-link ${location.pathname==='/business'?'active':''}`} to="/business">Business</Link>
        </li>
        <li className="nav-item">
          <Link  className={`nav-link ${location.pathname==='/entertainment'?'active':''}`} to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link  className={`nav-link ${location.pathname==='/hatke'?'active':''}`} to="/hatke">Hatke</Link>
        </li>
        <li className="nav-item">
          <Link  className={`nav-link ${location.pathname==='/miscellaneous'?'active':''}`} to="/miscellaneous">Miscellaneous</Link>
        </li>
        <li className="nav-item">
          <Link  className={`nav-link ${location.pathname==='/national'?'active':''}`}  to="/national ">National</Link>
        </li>
        <li className="nav-item">
          <Link  className={`nav-link ${location.pathname==='/politics'?'active':''}`}  to="/politics">Politics</Link>
        </li>
        <li className="nav-item">
          <Link  className={`nav-link ${location.pathname==='/science'?'active':''}`}  to="/science">Science</Link>
        </li>
        <li className="nav-item">
          <Link  className={`nav-link ${location.pathname==='/sports'?'active':''}`}  to="/sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link  className={`nav-link ${location.pathname==='/startup'?'active':''}`}  to="/startup">Startup</Link>
        </li>
        <li className="nav-item">
          <Link  className={`nav-link ${location.pathname==='/technology'?'active':''}`}  to="/technology">Technology</Link>
        </li>
        <li className="nav-item">
          <Link  className={`nav-link ${location.pathname==='/world'?'active':''}`}  to="/world">World</Link>
        </li>
      </ul>
      <i onClick={toggleMode} className={`bi bi-brightness-high${mode==='light'?'':'-fill text-light'}`}></i>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar