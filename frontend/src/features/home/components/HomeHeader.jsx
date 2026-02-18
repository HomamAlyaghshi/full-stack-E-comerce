import React from 'react';

const HomeHeader = ({ title, subtitle, subtitle2 }) => {
  return (
    <header className="text-center py-12">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">{title}</h1>
      {subtitle && <p className="text-xl text-gray-600">{subtitle}</p>}
      {subtitle2 && <p className="text-lg text-gray-600">{subtitle2}</p>}
    </header>
  );
};

export default HomeHeader;
