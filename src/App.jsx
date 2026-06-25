import './App.css'
import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import NuggetGuide from './components/NuggetGuide.jsx'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import PrivacyPolicy from './components/PrivacyPolicy.jsx'
import TermsOfService from './components/TermsOfService.jsx'
import Disclaimer from './components/Disclaimer.jsx'
import Account from './components/Account.jsx'
import SubmitNugget from './components/SubmitNugget.jsx'
import { useEffect } from 'react'
import Categories from './components/HomePage/Categories.jsx'
import CommunityNuggets from './components/HomePage/CommunityNuggets.jsx'
import NuggetArchivePreview from './components/HomePage/NuggetArchivePreview.jsx'
import OriginalValueSection from './components/HomePage/OriginalValueSection.jsx'
import CommunityNuggetCategory from './components/Pages/CommunityNuggetCategory.jsx'
import ExploreCategory from './components/Pages/ExploreCategory.jsx'
import QuoteDetail from './components/Pages/QuoteDetail.jsx'
import DailyNuggetChallenge from './components/Pages/DailyNuggetChallenge.jsx'
import DailyNuggetGames from './components/Pages/DailyNuggetGames.jsx'
import SurvivalMode from './components/Pages/SurvivalMode.jsx'
import RealOrFakeMode from './components/Pages/RealOrFakeMode.jsx'
import EditorialPage from './components/Pages/EditorialPage.jsx'
import SearchResults from './components/Pages/SearchResults.jsx'
import AdMobBanner from './components/AdMobBanner.jsx'


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
            <NuggetArchivePreview />
            <OriginalValueSection />
            <Categories />
          </>
        }/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/how-daily-nuggets-work" element={<EditorialPage pageKey="how-daily-nuggets-work" />} />
        <Route path="/about-chick-e-nugget" element={<EditorialPage pageKey="about-chick-e-nugget" />} />
        <Route path="/daily-motivation-habit" element={<EditorialPage pageKey="daily-motivation-habit" />} />
        <Route path="/community-nuggets-guide" element={<EditorialPage pageKey="community-nuggets-guide" />} />
        <Route path="/merch" element={<Navigate to="/" replace />} />
        <Route path="/submit" element={<SubmitNugget />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/account" element={<Account />} />
        <Route path="/games" element={<DailyNuggetGames />} />
        <Route path="/games/daily-challenge" element={<DailyNuggetChallenge />} />
        <Route path="/games/survival" element={<SurvivalMode />} />
        <Route path="/games/real-or-fake" element={<RealOrFakeMode />} />
        <Route path="/daily-nugget-challenge" element={<DailyNuggetChallenge />} />
        <Route path="/explore/community-nuggets/:communityCategoryKey" element={<CommunityNuggetCategory />} />
        <Route path="/explore/community-nuggets" element={<CommunityNuggets />} />
        <Route path="/explore/:categoryKey/:quoteId" element={<QuoteDetail />} />
        <Route path="/explore/:categoryKey" element={<ExploreCategory />} />
      </Routes>
      <NuggetGuide />
      <AdMobBanner />
      <Footer />
    </Router>
  );
}
