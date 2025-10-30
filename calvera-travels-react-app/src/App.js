import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import CTA from "./components/CTA";
import Destination from "./components/Destination";
import DestinationDetail from "./components/DestinationDetail"; 
import AboutUs from "./components/AboutUs";
import Tours from "./components/Tours";
import Contact from "./components/Contact";
import PlanYourTrip from "./components/PlanYourTrip";
import Blog from "./components/Blog";
import PrivacyPolicy from "./components/PrivacyPolicy";
import RulesAndRegulation from "./components/RulesAndRegulation";
import TermsAndCondition from "./components/TermsAndCondition";
import QA from "./components/QA";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Destination" element={<Destination />} />
          <Route path="/Destination/:slug" element={<DestinationDetail />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Tours" element={<Tours />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Planyourtrip" element={<PlanYourTrip />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/rules-and-regulation" element={<RulesAndRegulation />} />
          <Route path="/terms-and-condition" element={<TermsAndCondition />} />
          <Route path="/qa" element={<QA />} />
        </Routes>
        <CTA />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
