import React from 'react';
import { Star } from 'lucide-react';

// Cyber Security skill visualization component
const CyberSecuritySkills = ({ categories }) => {
  const renderStars = (level) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < level ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
      />
    ));
  };
  
  return (
    <div className="space-y-4">
      {categories.map((category, index) => (
        <div key={index} className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold">{category.name}</h4>
            <div className="flex">
              {renderStars(category.level)}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {category.items.map((item, idx) => (
              <span key={idx} className={`px-3 py-1 rounded-full text-sm ${
                category.name === "Penetration Testing" ? "bg-red-100 text-red-800" :
                category.name === "Digital Forensics" ? "bg-blue-100 text-blue-800" :
                "bg-purple-100 text-purple-800"
              }`}>
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CyberSecuritySkills;