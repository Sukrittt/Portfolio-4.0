import { useEffect, useState } from 'react';
import './App.css';
import { useIsTouch } from './hooks/useIsTouch';
import { useCustomCursor } from './hooks/useCustomCursor';
import { useMagnetic } from './hooks/useMagnetic';
import { useScrollReveal } from './hooks/useScrollReveal';
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
  useMagnetic(isTouch);
  const { revealedIds, reveal } = useScrollReveal();

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 650);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app" style={{ cursor: isTouch ? 'auto' : 'none' }}>
      <Grain />
      {!isTouch && <Cursor dotRef={dotRef} ringRef={ringRef} cursorLabel={cursorLabel} />}
      <Preloader loaded={loaded} />
      <Nav />
      <Hero loaded={loaded} />
      <Work reveal={reveal} revealedIds={revealedIds} previewRef={previewRef} isTouch={isTouch} />
      <About reveal={reveal} />
      <Contact reveal={reveal} />
      <Footer />
    </div>
  );
}

export default App;
