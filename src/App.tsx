import React, { useState, useEffect } from 'react';
import Splash from './components/Splash';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-emerald-500 selection:text-black">
      {loading ? (
        <Splash onComplete={() => setLoading(false)} />
      ) : (
        <>
          <AnimatedBackground />
          <Navbar />
          <main>
            <Hero />
            <Experience />
            <Achievements />
            <Skills />
            <Education />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
