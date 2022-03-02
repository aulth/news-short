import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './components/About';
import Modestate from './components/context/mode/Modestate';
import Home from './components/Home';
function App() {
  return (
   <>
   <Modestate>
   <Router>
   <Navbar/>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/:category" element={<Home/>}/>
       <Route path="/about" element={<About/>}/>
     </Routes>
   </Router>
   </Modestate>
   </>
  );
}

export default App;
