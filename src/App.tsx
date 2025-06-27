import React from 'react';
import Hero from './components/Hero';
import WhatIDo from './components/WhatIDo';
import Testimonials from './components/Testimonials';
import LiveDemo from './components/LiveDemo';
import AboutMe from './components/AboutMe';
import BookCall from './components/BookCall';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhatIDo />
      <Testimonials />
      <LiveDemo />
      <AboutMe />
      <BookCall />
      <Footer />
    </div>
  );
}

export default App;