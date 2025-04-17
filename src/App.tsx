import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import song from './components/techy.mp3';

function App() {
  const [isMuted, setIsMuted] = useState(true);
  const [audio] = useState(new Audio(song));
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    audio.loop = true;
    return () => {
      audio.pause();
    };
  }, [audio]);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current && cursorDotRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX - 25}px, ${e.clientY - 25}px, 0)`;
        cursorDotRef.current.style.transform = `translate3d(${e.clientX - 4}px, ${e.clientY - 4}px, 0)`;
      }
    };

    document.addEventListener('mousemove', moveCursor);
    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  const toggleMute = () => {
    if (isMuted) {
      audio.play();
    } else {
      audio.pause();
    }
    setIsMuted(!isMuted);
  };

  return (
    <div className="min-h-screen bg-[#0a192f] text-white cursor-none">
      <div 
        ref={cursorRef}
        className="fixed w-12 h-12 border-2 border-emerald-400 rounded-full pointer-events-none z-50 transition-transform duration-100 ease-out mix-blend-difference"
      />
      <div 
        ref={cursorDotRef}
        className="fixed w-2 h-2 bg-emerald-400 rounded-full pointer-events-none z-50 transition-transform duration-100 ease-out"
      />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 transform origin-left z-40"
        style={{ scaleX }}
      />
      <button
        onClick={toggleMute}
        className="fixed bottom-8 right-8 z-40 bg-white/10 p-3 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all"
      >
        {isMuted ? (
          <VolumeX className="w-6 h-6" />
        ) : (
          <Volume2 className="w-6 h-6" />
        )}
      </button>
      <Navbar />
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        <section id="home" className="snap-start">
          <Home />
        </section>
        <section id="about" className="snap-start">
          <About />
        </section>
        <section id="projects" className="snap-start">
          <Projects />
        </section>
        <section id="skills" className="snap-start">
          <Skills />
        </section>
        <section id="contact" className="snap-start">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;