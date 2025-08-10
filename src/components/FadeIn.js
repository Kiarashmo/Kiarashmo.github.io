import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './FadeIn.module.css';

function FadeIn({ children, delay = 0 }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`${styles.fadeIn} ${inView ? styles.visible : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

export default FadeIn;
