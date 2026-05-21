import './App.css'
import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import TodaysNuggetRow  from './components/HomePage/TodaysNuggetRow.jsx'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import PrivacyPolicy from './components/PrivacyPolicy.jsx'
import TermsOfService from './components/TermsOfService.jsx'
import Disclaimer from './components/Disclaimer.jsx'
import Merch from './components/Merch.jsx'
import Account from './components/Account.jsx'
import SubmitNugget from './components/SubmitNugget.jsx'
import { useEffect } from 'react'
import Categories from './components/HomePage/Categories.jsx'
import MerchSection from './components/HomePage/MerchSection.jsx'
import ExploreCategory from './components/Pages/ExploreCategory.jsx'
import QuoteDetail from './components/Pages/QuoteDetail.jsx'
import DailyNuggetChallenge from './components/Pages/DailyNuggetChallenge.jsx'
import DailyNuggetGames from './components/Pages/DailyNuggetGames.jsx'
import SurvivalMode from './components/Pages/SurvivalMode.jsx'
import RealOrFakeMode from './components/Pages/RealOrFakeMode.jsx'


export default function App() {
  // Scroll to hash fragment on route change
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
            <TodaysNuggetRow />
            <Categories />
            <MerchSection />
          </>
        }/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/submit" element={<SubmitNugget />} />
        <Route path="/account" element={<Account />} />
        <Route path="/games" element={<DailyNuggetGames />} />
        <Route path="/games/daily-challenge" element={<DailyNuggetChallenge />} />
        <Route path="/games/survival" element={<SurvivalMode />} />
        <Route path="/games/real-or-fake" element={<RealOrFakeMode />} />
        <Route path="/daily-nugget-challenge" element={<DailyNuggetChallenge />} />
        <Route path="/explore/:categoryKey/:quoteId" element={<QuoteDetail />} />
        <Route path="/explore/:categoryKey" element={<ExploreCategory />} />
      </Routes>
      <Footer />
    </Router>
  );
}
