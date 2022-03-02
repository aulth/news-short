import React, { useContext } from 'react'
import Modecontext from './context/mode/Modecontext';
const About = () => {
  const { mode, darkBg, lightBg } = useContext(Modecontext)
  document.body.style.background = mode === 'light' ? lightBg : darkBg;
  return (
    <div style={{ width: '100%' }} className={`container my-2 ${mode === 'light' ? "text-dark" : 'text-light'}`}>
      <div className='container'>
        <h4>Categories of news available : </h4>
        <ul>
          <li>All</li>
          <li>Automobile</li>
          <li>Business</li>
          <li>Entertainment</li>
          <li>Hatke</li>
          <li>Miscellaneous</li>
          <li>National</li>
          <li>Politics</li>
          <li>Science</li>
          <li>Sports</li>
          <li>Startup</li>
          <li>Technology</li>
          <li>World</li>
        </ul>
      </div>
      <div>
        <div className="container">
          All news are fetched from <a href="https://inshorts.com/" target="_blank" rel="noreferrer">Inshorts</a>
          <br />
          <p>Created with <i style={{ color: 'red' }} className="bi bi-heart-fill"></i> by <a style={{ textDecoration: 'none' }} href="https://aulth.github.io/usman">Mohd Usman</a></p>

        </div>
      </div>
    </div>
  )
}

export default About