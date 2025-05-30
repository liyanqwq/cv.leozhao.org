import React, { useState } from 'react';
import { Star } from 'lucide-react';

// Word cloud component for skills using GitHub activity log style
const WordCloud = ({ skills }) => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  
  // Group colors
  const groupColors = {
    Backend: "bg-blue-800",    // blue-500
    Frontend: "bg-green-800",   // green-500
    Framework: "bg-orange-800",  // orange-500
    Language: "bg-purple-800",   // purple-500
    Library: "bg-red-800",    // red-500
    CSS: "bg-yellow-800",        // yellow-500
    API: "bg-indigo-800",        // indigo-500
    DevOps: "bg-pink-800",     // pink-500
    Database: "bg-teal-800"    // teal-500
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
      <div className="flex flex-wrap gap-1 justify-center lg:justify-start">
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
                className="w-10 h-10 group-hover:opacity-100 group-hover:border group-hover:border-black/60 group-hover:brightness-125 rounded-xl cursor-pointer transition-all duration-100"
                style={{
                  background: `url(https://skillicons.dev/icons?theme=light&i=${skill.icon})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center center',
                  backgroundSize: '100%',
                  opacity: intensityLevel * 0.2 + 0.2,
                }}
              />
              
              {/* Tooltip showing skill name and rating */}
              <div className={`opacity-0 group-hover:opacity-100 absolute -translate-x-1/2 left-1/2 -bottom-16 ${baseColor} text-white text-xs py-1 px-2 rounded flex flex-col items-center z-20 transition-opacity duration-200 pointer-events-none`}>
                <span className="whitespace-nowrap font-medium mb-1">{skill.name}</span>
                {renderStars(skill.value)}
                <span className="text-[0.7rem] mt-1 opacity-75">{skill.groupTitle}</span>
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