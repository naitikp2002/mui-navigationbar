import './App.css';
import DenseAppBar from './DenseAppBar';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router';
import Home from './comp/Home';
import Contact from './comp/Contact';
import About from './comp/About';
function App() {
  return (
    <>
    <div className='Container'>
      <DenseAppBar />
      <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/Home" element={<Home/>}/>
              <Route path="/About" element={<About/>}/>
              <Route path="/Contact" element={<Contact/>}/>
      </Routes>
  </div>
</>
  );
}

export default App;
