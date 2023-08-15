import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Gallery from './components/Gallery';

function App() {
  return (
    <Router>
      <div >
        <Navbar />
        <div id='page-body'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/Services" element={<Services />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
