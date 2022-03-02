import React, {useContext} from 'react'
import { useParams } from 'react-router-dom'
import News from './News'
import Modecontext from './context/mode/Modecontext'
const Home = () => {
    const {mode, darkBg, lightBg} = useContext(Modecontext)
    let {category} = useParams();
    category = category?category:'all';
    document.body.style.background = mode === 'light'? lightBg:darkBg;
  return (
    <>
    <div style={{width:'100%'}} className={`container`}>
        <News category={category}/>
    </div>
    </>
    )
}

export default Home