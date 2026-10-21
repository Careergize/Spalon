import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md', 
}) => {
  const imgHeights = {
    sm: 'h-8',
    md: 'h-10 sm:h-11',
    lg: 'h-12 sm:h-14'
  };

  return (
    <div className={`flex items-center select-none ${className}`}>
      {/* Official Spalon Logo */}
      <div className="relative group">
        <img
          src="/images/spalon_logo_retina.png"
          alt="Spalon - Professional Beauty Parlour (Ladies & Kids)"
          className={`${imgHeights[size]} w-auto object-contain rounded-lg shadow-sm group-hover:scale-105 transition-transform duration-300 border border-white/20`}
        />
      </div>
    </div>
  );
};
