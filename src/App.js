import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import TextTools from './pages/TextTools';
import DevTools from './pages/DevTools';
import Calculators from './pages/Calculators';
import FunTools from './pages/FunTools';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/text-tools" element={<TextTools />} />
            <Route path="/dev-tools" element={<DevTools />} />
            <Route path="/calculators" element={<Calculators />} />
            <Route path="/fun-tools" element={<FunTools />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;