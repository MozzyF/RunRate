"use client";

import React from 'react';

interface ForecastToggleProps {
  isAIForecast: boolean;
  onToggle: (isAI: boolean) => void;
}

export const ForecastToggle: React.FC<ForecastToggleProps> = ({ isAIForecast, onToggle }) => {
  return (
    <div className="flex items-center space-x-4">
      <span className="text-sm font-medium text-gray-700">Forecast Mode:</span>
      <div className="flex rounded-md shadow-sm">
        <button
          type="button"
          className={`relative inline-flex items-center px-4 py-2 rounded-l-md border text-sm font-medium ${
            !isAIForecast
              ? 'bg-indigo-600 text-white border-indigo-600'
              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
          }`}
          onClick={() => onToggle(false)}
        >
          Manual
        </button>
        <button
          type="button"
          className={`relative inline-flex items-center px-4 py-2 rounded-r-md border text-sm font-medium ${
            isAIForecast
              ? 'bg-indigo-600 text-white border-indigo-600'
              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
          }`}
          onClick={() => onToggle(true)}
        >
          AI-Powered
        </button>
      </div>
    </div>
  );
}; 