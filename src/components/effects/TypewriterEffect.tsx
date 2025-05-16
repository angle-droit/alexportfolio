
"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TypewriterEffectProps {
  text: string;
  speed?: number;
  className?: string;
  cursorClassName?: string;
}

export default function TypewriterEffect({
  text,
  speed = 150,
  className,
  cursorClassName,
}: TypewriterEffectProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeoutId);
    } else {
      // Optionally keep cursor blinking after text is fully typed
      const cursorInterval = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 500);
      return () => clearInterval(cursorInterval);
    }
  }, [currentIndex, text, speed]);

  // Blinking cursor effect while typing
  useEffect(() => {
    if (currentIndex < text.length) {
      const cursorBlink = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 500);
      return () => clearInterval(cursorBlink);
    } else {
      setShowCursor(false); // Hide cursor when typing is complete, or keep it blinking (handled above)
    }
  }, [currentIndex, text.length]);


  return (
    <span className={cn("inline-block", className)}>
      {displayedText}
      {showCursor && <span className={cn("inline-block w-px h-[1em] bg-primary ml-1 animate-blink", cursorClassName)}></span>}
    </span>
  );
}
