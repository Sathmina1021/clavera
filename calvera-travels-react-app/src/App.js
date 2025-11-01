import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Destination from './components/Destination';
import DestinationDetail from './components/DestinationDetail';
import AboutUs from './components/AboutUs';
import Tours from './components/Tours';
import Contact from './components/Contact';
import PlanYourTrip from './components/PlanYourTrip';
import Blog from './components/Blog';
import GalleFortBlog from './components/GalleFortBlog';
import UnawatunaBlog from './components/UnawatunaBlog';
import PrivacyPolicy from './components/PrivacyPolicy';
import RulesAndRegulation from './components/TermsAndConditions';
import QA from './components/QA';
import NotFound from './components/NotFound';
import './App.css';
import TermsAndConditions from './components/TermsAndConditions';

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Destination" element={<Destination />} />
            
            {/* 🔥 THIS IS THE CRITICAL FIX 🔥 */}
            {/* The :slug parameter captures the destination name from the URL */}
            <Route path="/Destination/:slug" element={<DestinationDetail />} />
            
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Tours" element={<Tours />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Planyourtrip" element={<PlanYourTrip />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/gallefort" element={<GalleFortBlog />} />
            <Route path="/unawatuna" element={<UnawatunaBlog />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/rules-and-regulation" element={<RulesAndRegulation />} />
            <Route path="/terms-and-condition" element={<TermsAndConditions/>} />
            <Route path="/qa" element={<QA />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
