import { useEffect, useState } from 'react';
import './App.css';
import { useIsTouch } from './hooks/useIsTouch';
import { useCustomCursor } from './hooks/useCustomCursor';
import { useInertiaScroll } from './hooks/useInertiaScroll';
import { useMagnetic } from './hooks/useMagnetic';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useHeroWord } from './hooks/useHeroWord';
import { Preloader } from './components/Preloader';
import { Cursor } from './components/Cursor';
import { Grain } from './components/Grain';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Work } from './components/Work';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const isTouch = useIsTouch();
  const [loaded, setLoaded] = useState(false);

  const { dotRef, ringRef, previewRef, cursorLabel } = useCustomCursor(isTouch);
  const { scrollToId } = useInertiaScroll(isTouch);
  useMagnetic(isTouch);
  const { revealedIds, reveal } = useScrollReveal();
  const { word, wordPhase, pauseWord, resumeWord } = useHeroWord();

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 650);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app" style={{ cursor: isTouch ? 'auto' : 'none' }}>
      <Grain />
      {!isTouch && <Cursor dotRef={dotRef} ringRef={ringRef} cursorLabel={cursorLabel} />}
      <Preloader loaded={loaded} />
      <Nav scrollToId={scrollToId} />
      <Hero loaded={loaded} word={word} wordPhase={wordPhase} pauseWord={pauseWord} resumeWord={resumeWord} />
      <Work reveal={reveal} revealedIds={revealedIds} previewRef={previewRef} />
      <About reveal={reveal} />
      <Contact reveal={reveal} />
      <Footer scrollToId={scrollToId} />
    </div>
  );
}

export default App;
