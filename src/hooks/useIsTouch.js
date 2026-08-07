import { useState } from 'react';

export function useIsTouch() {
  const [isTouch] = useState(
    () => typeof window !== 'undefined' && window.matchMedia?.('(pointer: coarse)').matches
  );
  return isTouch;
}
