import React, { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { playMarkerSketch } from './SoundManager';
import '../css/scrapbook.css';

const MarkerHighlight = ({ children, color = 'rgba(241, 196, 15, 0.4)', delay = 250 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        playMarkerSketch();
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isInView, delay]);

  return (
    <span
      ref={ref}
      className={`highlighterMark ${isInView ? 'active' : ''}`}
      style={{ '--highlighter-color': color }}
    >
      {children}
    </span>
  );
};

export default MarkerHighlight;
