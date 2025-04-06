import React, { useState } from 'react';
import { Star } from 'lucide-react';

// Word cloud component for skills using GitHub activity log style
const WordCloud = ({ skills }) => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  
  // Group colors
  const groupColors = {
    Backend: "#4299e1",    // blue-500
    Frontend: "#48bb78",   // green-500
    Framework: "#ed8936",  // orange-500
    Language: "#9f7aea",   // purple-500
    Library: "#f56565",    // red-500
    CSS: "#ecc94b",        // yellow-500
    API: "#667eea",        // indigo-500
    DevOps: "#ed64a6",     // pink-500
    Database: "#4fd1c5"    // teal-500
  };
  
  // Render stars for skill level
  const renderStars = (value) => {
    const starsCount = Math.ceil(value / 20); // Convert percentage to 1-5 stars
    return (
      <div className="flex">
        {Array(5).fill(0).map((_, i) => (
          <Star 
            key={i} 
            className={`w-3 h-3 ${i < starsCount ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
          />
        ))}
      </div>
    );
  };
  
  // Sort skills by value
  const sortedSkills = [...skills].sort((a, b) => b.value - a.value);
  
  // 计算不同强度级别
  const getIntensityLevel = (value) => {
    if (value >= 100) return 4;
    if (value >= 95) return 3.5;
    if (value >= 90) return 3;
    if (value >= 85) return 2;
    if (value >= 80) return 1.5;
    if (value >= 75) return 1;
    return 0;
  };
  
  return (
    <div className="w-full bg-gray-50 rounded-lg px-4 py-8 overflow-visible">
      <div className="flex flex-wrap gap-1 justify-center">
        {sortedSkills.map((skill, index) => {
          // 获取强度级别
          const intensityLevel = getIntensityLevel(skill.value);
          const baseColor = groupColors[skill.group] || '#718096';
          
          return (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              onClick={() => setHoveredSkill(skill.name === hoveredSkill ? null : skill.name)}
            >
              <div 
                className="w-10 h-10 group-hover:opacity-100 group-hover:border group-hover:border-black/60 group-hover:brightness-125 rounded-sm cursor-pointer transition-all duration-100"
                style={{
                  backgroundColor: baseColor,
                  opacity: intensityLevel * 0.2 + 0.2,
                }}
              />
              
              {/* Tooltip showing skill name and rating */}
              <div className="opacity-0 group-hover:opacity-100 absolute -translate-x-1/2 left-1/2 -bottom-16 bg-gray-800 text-white text-xs py-1 px-2 rounded flex flex-col items-center z-20 transition-opacity duration-200 pointer-events-none">
                <span className="whitespace-nowrap font-medium mb-1">{skill.name}</span>
                {renderStars(skill.value)}
                <span className="text-[0.7rem] mt-1 opacity-75">{skill.group}</span>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Legend */}
      <div className="flex items-center justify-center mt-4 text-xs text-gray-600">
        <div className="flex items-center mr-4">
          <div className="w-3 h-3 bg-gray-200 mr-1 rounded-sm"></div>
          <span>Beginner</span>
        </div>
        <div className="flex items-center mr-4">
          <div className="w-3 h-3 bg-gray-400 mr-1 rounded-sm"></div>
          <span>Intermediate</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-gray-600 mr-1 rounded-sm"></div>
          <span>Expert</span>
        </div>
      </div>
      
      {/* Add note for mobile users */}
      <div className="text-xs text-gray-500 text-center mt-2 md:hidden">
        Tap to view skill details
      </div>
    </div>
  );
};

export default WordCloud;