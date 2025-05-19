'use client'
import React, { CSSProperties, ReactNode } from 'react';
import useTilt from '@/app/hooks/tilts/tilts'; // Adjust the path as needed

interface TiltCardProps {
  children: ReactNode;
  styleCss?:CSSProperties;
}

const TiltCard: React.FC<TiltCardProps> = ({ children,styleCss }) => {
  const tiltRef = useTilt({
    max: 20,
    speed: 400,
    glare: false,
    "max-glare": 0.3,
    perspective:1000,
  });

  return (
    <div ref={tiltRef} style={styleCss}>
    
      {children}
     
    </div>
  );
};

export default TiltCard;
