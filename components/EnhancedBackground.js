import React from 'react';

const EnhancedBackground = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full bg-white">
      {/* Subtle blockchain-inspired overlay */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Hexagon pattern */}
          <path
            d="M0,0 L100,0 L150,86.6 L100,173.2 L0,173.2 L-50,86.6 Z"
            fill="none"
            stroke="#4188F8"
            strokeWidth="0.5"
            strokeOpacity="0.3"
            transform="scale(2.5)"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              from="0 0"
              to="150 260"
              dur="60s"
              repeatCount="indefinite"
            />
          </path>
          {/* Connecting lines */}
          <g strokeWidth="0.5" stroke="#4188F8" strokeOpacity="0.5">
            <line x1="0" y1="0" x2="1000" y2="1000">
              <animateTransform
                attributeName="transform"
                type="translate"
                from="-1000 0"
                to="0 0"
                dur="40s"
                repeatCount="indefinite"
              />
            </line>
            <line x1="1000" y1="0" x2="0" y2="1000">
              <animateTransform
                attributeName="transform"
                type="translate"
                from="0 -1000"
                to="0 0"
                dur="40s"
                repeatCount="indefinite"
              />
            </line>
          </g>
        </svg>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default EnhancedBackground;