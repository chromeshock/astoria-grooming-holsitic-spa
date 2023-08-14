import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import services from './components/Services';
import Gallery from './components/Gallery';
import ServiceCard from './components/ServicesCard';

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
            <Route path="/Services" element={<services />} />
            <Route path="/card" element={<ServiceCard />} />
          </Routes>
        </div>
         <div>
      <ServiceCard services={services} />
      {/* You can render more cards by looping through your services list and rendering a ServiceCard for each service. */}
    </div>
      </div>
    </Router>
  );
}

export default App;
