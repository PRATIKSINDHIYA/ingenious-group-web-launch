import React from 'react';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-up' | 'slide-left' | 'slide-right' | 'scale-in' | 'zoom-in' | 'rotate-in';
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className = '',
  delay = 0,
  animation = 'fade-up',
}) => {
  const animationMap = {
    'fade-up': 'animate-fade-up',
    'slide-left': 'animate-slide-left',
    'slide-right': 'animate-slide-right',
    'scale-in': 'animate-scale-in',
    'zoom-in': 'animate-zoom-in',
    'rotate-in': 'animate-rotate-in',
  };

  return (
    <div
      className={`${animationMap[animation]} ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
