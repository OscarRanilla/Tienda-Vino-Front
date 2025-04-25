import React, { useEffect, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import AgeModal from './components/AgeModal/AgeModal';
import WineDetail from './components/WineDetail/WineDetail';
import TopBar from './components/TopBar/TopBar';
import CookieBanner from './components/CookieBanner/CookieBanner';
import Cart from './components/Cart/Cart';
import Dashboard from './components/Dashboard/Dashboard';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

// Pages
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Shipping from './pages/Legal/Shipping';
import Refund from './pages/Legal/Refund';
import Cancel from './pages/Legal/Cancel';
import Privacy  from './pages/Legal/Privacy';
import Cookies  from './pages/Legal/Cookies';
import CustomCookies from './pages/Legal/CustomCookies';
import LegalNotice from './pages/Legal/LegalNotice';

// Context
import { UserProvider } from './Context/UserContext';
import { CartProvider } from './Context/CartContext';

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
        <UserProvider>
          <CartProvider>
          {showAgeModal && <AgeModal onConfirm={handleAgeConfirm} />}
          <TopBar />
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
              <Route path="/cart" element={<Cart />} />  
              {/* Ruta protegida para dashboard */}
              <Route
                  path="/dashboard"
                  element={
                    <PrivateRoute>
                      <Dashboard />
                    </PrivateRoute>
                  }
                />
              {/* …otras rutas legales… */}
              <Route path="/envios" element={<Shipping />} />
              <Route path="/devolucion" element={<Refund />}   />
              <Route path="/cancelacion" element={<Cancel />}   />
              <Route path="/privacidad" element={<Privacy />}  />
              <Route path="/politica-cookies" element={<Cookies />}  />
              <Route path="/personalizar-cookies" element={<CustomCookies />} />
              <Route path="/aviso-legal" element={<LegalNotice />} />
              {/* Catch-all para 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
          <CookieBanner />
          </CartProvider>
          </UserProvider>
        </Router>
      </div>
    </ChakraProvider>
  );
}

export default App;
