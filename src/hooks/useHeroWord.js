import { useEffect, useRef, useState } from 'react';
import { TAGLINE_WORDS } from '../data/projects';

export function useHeroWord() {
  const [wordIndex, setWordIndex] = useState(0);
  const [wordPhase, setWordPhase] = useState('in');
  const intervalRef = useRef(null);
  const timerRef = useRef(null);

  const advanceWord = () => {
    setWordPhase((phase) => {
      if (phase === 'out') return phase;
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setWordIndex((i) => (i + 1) % TAGLINE_WORDS.length);
        setWordPhase('in');
      }, 220);
      return 'out';
    });
  };

  const pauseWord = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resumeWord = () => {
    if (!intervalRef.current) intervalRef.current = setInterval(advanceWord, 2600);
  };

  useEffect(() => {
    intervalRef.current = setInterval(advanceWord, 2600);
    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timerRef.current);
    };
  }, []);

  return { word: TAGLINE_WORDS[wordIndex], wordPhase, pauseWord, resumeWord };
}
