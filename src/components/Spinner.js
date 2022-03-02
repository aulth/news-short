import React, {useContext} from 'react'
import Modecontext from './context/mode/Modecontext'
const Spinner = () => {
    const {mode} = useContext(Modecontext)
    return (
        <>
            <div className={`spinner-border ${mode==='light'?'text-dark':'text-light'}`} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </>
    )
}

export default Spinner