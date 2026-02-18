import React from 'react';

const HomeHeader = ({ title, subtitle, subtitle2 }) => {
  return (
    <header className="text-center py-12">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">{title}</h1>
      {subtitle && <p className="text-xl text-gray-600">{subtitle}</p>}
      {subtitle2 && <p className="text-lg text-gray-600">{subtitle2}</p>}
      
      {/* Project Information Banner */}
      <div className="mt-8 mx-auto max-w-4xl">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg shadow-sm">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">
                Project Information
              </h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>
                  This is a <strong>full-stack e-commerce project</strong> built for learning <strong>NestJS</strong>.
                </p>
                <p className="mt-1">
                  <strong>Note:</strong> This project is designed for local development and <strong>does not work on Vercel</strong> due to backend requirements.
                </p>
                <p className="mt-1">
                  GitHub Repository: <a href="https://github.com/HomamAlyaghshi/full-stack-E-comerce" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                    HomamAlyaghshi/full-stack-E-comerce
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
