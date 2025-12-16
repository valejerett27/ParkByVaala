import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
// import Nosotros from './pages/Nosotros';

import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans leading-none">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            {/* <Route path="/nosotros" element={<Nosotros />} /> */}

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;