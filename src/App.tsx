// React import removed as it's not used in this file
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { PreFooter } from './components/PreFooter';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { AboutPage } from './pages/AboutPage';
import { CateringPage } from './pages/CateringPage';
import { ContactPage } from './pages/ContactPage';
import { CorporateEventsPage } from './pages/catering/CorporateEventsPage';
import { PrivatePartiesPage } from './pages/catering/PrivatePartiesPage';
import { WeddingsPage } from './pages/catering/WeddingsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/catering" element={<CateringPage />} />
          <Route path="/catering/corporate" element={<CorporateEventsPage />} />
          <Route path="/catering/private" element={<PrivatePartiesPage />} />
          <Route path="/catering/weddings" element={<WeddingsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <PreFooter />
        <Footer />
      </div>
    </Router>
  );
}

export default App;