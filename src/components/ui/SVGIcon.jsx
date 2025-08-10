import React from 'react';
import { motion } from 'framer-motion';

const SVGIcon = ({ children, className = '', animate = true, ...props }) => {
  const MotionSVG = motion.svg;
  
  if (!animate) {
    return (
      <svg className={className} {...props}>
        {children}
      </svg>
    );
  }

  return (
    <MotionSVG
      className={className}
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </MotionSVG>
  );
};

export const CodeIcon = ({ className = "", animate = true }) => (
  <SVGIcon
    className={className}
    animate={animate}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="16,18 22,12 16,6" />
    <polyline points="8,6 2,12 8,18" />
  </SVGIcon>
);

export const DesignIcon = ({ className = "", animate = true }) => (
  <SVGIcon
    className={className}
    animate={animate}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 19l7-7 3 3-7 7-3-3z" />
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
    <path d="M2 2l7.586 7.586" />
    <circle cx="11" cy="11" r="2" />
  </SVGIcon>
);

export const DatabaseIcon = ({ className = "", animate = true }) => (
  <SVGIcon
    className={className}
    animate={animate}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </SVGIcon>
);

export const StarIcon = ({ className = "", animate = true }) => (
  <SVGIcon
    className={className}
    animate={animate}
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
  </SVGIcon>
);

export default SVGIcon;
