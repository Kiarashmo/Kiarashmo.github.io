import React from 'react';
import styles from './styles.module.css';

const CircularProgressBar = ({ level, radius = 40, color = 'var(--ifm-color-primary)' }) => {
  const stroke = 8;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (level / 100) * circumference;

  return (
    <div className={styles.progressBarContainer}>
      <svg
        height={radius * 2}
        width={radius * 2}
        className={styles.progressBar}
      >
        <circle
          stroke="var(--ifm-color-emphasis-200)"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className={styles.progressRing}
        />
      </svg>
      <span className={styles.progressText} style={{ color: color, fontSize: `${radius / 3}px` }}>{`${level}%`}</span>
    </div>
  );
};

export default CircularProgressBar;
