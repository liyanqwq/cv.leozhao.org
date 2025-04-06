import React from 'react';

// Language proficiency component
const LanguageProficiency = ({ language }) => {
  const getColor = (level) => {
    if (level >= 90) return 'bg-blue-600';
    if (level >= 75) return 'bg-blue-500';
    if (level >= 60) return 'bg-blue-400';
    return 'bg-blue-300';
  };

  return (
    <div className="mb-2">
      <div className="flex justify-between mb-1">
        <span className="font-semibold">{language.name}</span>
        <span className="text-sm text-gray-600">{language.proficiency}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className={`h-2 rounded-full ${getColor(language.level)}`} style={{ width: `${language.level}%` }}></div>
      </div>
    </div>
  );
};

export default LanguageProficiency;