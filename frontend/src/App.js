import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import ClientsSection from './components/ClientsSection';
import CareersBanner from './components/CareersBanner';
import InvestorSection from './components/InvestorSection';
import Footer from './components/Footer';
import AnimsitionOverlay from './components/AnimsitionOverlay';

const HomePage = () => {
  return (
    <AnimsitionOverlay>
      <div className="bg-[#0d1b1e] min-h-screen">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <ClientsSection />
        <CareersBanner />
        <InvestorSection />
        <Footer />
      </div>
    </AnimsitionOverlay>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
