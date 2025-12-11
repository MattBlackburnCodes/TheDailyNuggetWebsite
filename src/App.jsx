import './App.css'
import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import PrivacyPolicy from './components/PrivacyPolicy.jsx'
import { useEffect } from 'react'

export default function App() {
  function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // no hash – go to top on normal page change
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash]);

  return null;
}


  return (
    <Router>
      <Navbar />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <About />
            <Contact />
          </>
        }/>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </Router>
  );
}