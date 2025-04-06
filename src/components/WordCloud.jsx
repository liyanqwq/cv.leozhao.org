import React, { useState } from 'react';
import { Star } from 'lucide-react';


// Word cloud component for skills
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
  
  // Calculate positions for word cloud (simple algorithm)
  const calculatePositions = () => {
    // Sort by value (size) for better layout
    const sortedSkills = [...skills].sort((a, b) => b.value - a.value);
    
    const positions = [];
    const centerX = 150;
    const centerY = 150;
    const radiusIncrement = 50;
    let currentRadius = 0;
    let currentAngle = 0;
    let skillsPerCircle = 3;
    
    sortedSkills.forEach((skill, index) => {
      if (index % skillsPerCircle === 0) {
        currentRadius += radiusIncrement;
        currentAngle = 0;
        skillsPerCircle = Math.floor(currentRadius * Math.PI / 30); // Adjust items per circle based on circumference
        skillsPerCircle = Math.max(skillsPerCircle, 3); // Min 3 items per circle
      }
      
      const angleIncrement = (2 * Math.PI) / skillsPerCircle;
      const x = centerX + currentRadius * Math.cos(currentAngle);
      const y = centerY + currentRadius * Math.sin(currentAngle);
      
      positions.push({
        ...skill,
        x,
        y,
        fontSize: 14 + (skill.value / 10)
      });
      
      currentAngle += angleIncrement;
    });
    
    return positions;
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
  
  const positionedSkills = calculatePositions();
  
  return (
    <div className="w-full h-96 relative bg-gray-50 rounded-lg p-4 overflow-hidden">
      <div className="absolute inset-0 touch-none" style={{ pointerEvents: 'none' }}>
        {positionedSkills.map((skill, index) => (
          <div
            key={index}
            className="absolute transition-all duration-300 cursor-pointer select-none"
            style={{
              left: `${skill.x}px`,
              top: `${skill.y}px`,
              fontSize: `${skill.fontSize}px`,
              fontWeight: skill.value > 80 ? 'bold' : 'normal',
              transform: 'translate(-50%, -50%)',
              opacity: hoveredSkill === null || hoveredSkill === skill.name ? 1 : 0.3,
              zIndex: hoveredSkill === skill.name ? 10 : 1,
              pointerEvents: 'auto'
            }}
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
            onClick={() => setHoveredSkill(skill.name === hoveredSkill ? null : skill.name)}
          >
            <span 
              style={{ color: groupColors[skill.group] || '#718096' }}
              className="whitespace-nowrap"
            >
              {skill.name}
            </span>
            {hoveredSkill === skill.name && (
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 bg-gray-800 text-white text-xs py-1 px-2 rounded flex items-center">
                {renderStars(skill.value)}
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Add note for mobile users */}
      <div className="absolute bottom-2 right-2 text-xs text-gray-500 md:hidden">
        Tap skills to see ratings
      </div>
    </div>
  );
};

export default WordCloud;