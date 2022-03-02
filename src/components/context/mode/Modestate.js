import React, {useState} from 'react'
import Modecontext from './Modecontext'
const Modestate = (props) => {
    const [mode, setMode] = useState(localStorage.getItem('mode')?localStorage.getItem('mode'):'light');
    const darkBg = '#212529e0';
    const lightBg = "white";
    const toggleMode = ()=>{
        localStorage.setItem('mode', mode === 'light' ? 'dark': 'light')
        setMode(mode === 'light' ? 'dark': 'light')
    }
  return (
    <Modecontext.Provider value={{mode, toggleMode, darkBg, lightBg}}>
        {props.children}
    </Modecontext.Provider>
  )
}

export default Modestate