import React, { useEffect, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import AgeModal from './components/AgeModal/AgeModal';
import WineDetail from './components/WineDetail/WineDetail';

// Pages
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  const [showAgeModal, setShowAgeModal] = useState(false);

  useEffect(() => {
    const isAgeVerified = document.cookie.includes('ageVerified=true');
    if (!isAgeVerified) {
      setShowAgeModal(true);
    }
  }, []);

  const handleAgeConfirm = () => {
    document.cookie = 'ageVerified=true; max-age=' + 60 * 60 * 24 * 365 + '; path=/';
    setShowAgeModal(false);
  };

  return (
    <ChakraProvider>
      <div className="app-container">
        <Router>
          {showAgeModal && <AgeModal onConfirm={handleAgeConfirm} />}
          <Navbar />
          <div className="app-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/wine/:id" element={<WineDetail />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </ChakraProvider>
  );
}

export default App;
