import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home }   from './pages/Home/Home';
import './styles/index.css';
import './styles/animations.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Phase 2 routes */}
        {/* <Route path="/map"    element={<HeritageMap />} /> */}
        {/* <Route path="/bounty" element={<TruthBounty />} /> */}
        {/* <Route path="/radar"  element={<PulseRadar />} />  */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
