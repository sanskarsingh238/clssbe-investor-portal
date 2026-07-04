import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Verticals from './components/Verticals.jsx';
import CSRCompliance from './components/CSRCompliance.jsx';
import AboutUs from './components/AboutUs.jsx';
import EventsDashboard from './components/EventsDashboard.jsx';
import QueryForm from './components/QueryForm.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import AuthModal from './components/AuthModal.jsx';

export default function App() {
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream">
      <Navbar onOpenAuth={() => setAuthOpen(true)} />
      <main>
        <Hero />
        <Verticals />
        <CSRCompliance />
        <AboutUs />
        <EventsDashboard onSponsorClick={() => setAuthOpen(true)} />
        <QueryForm />
        <Contact />
      </main>
      <Footer />
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </div>
  );
}
