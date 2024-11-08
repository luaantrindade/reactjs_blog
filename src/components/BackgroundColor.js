// src/components/Layout.js
import React from 'react';

const BackgrounColor = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-glassBlue to-glassPurple">
      {children}
    </div>
  );
};

export default BackgrounColor;
