import React from 'react';
import { Star } from 'lucide-react';

interface RatingProps {
  value: number;
  count?: number;
  size?: 'sm' | 'md';
  showCount?: boolean;
}

const Rating: React.FC<RatingProps> = ({ 
  value, 
  count,
  size = 'md',
  showCount = true
}) => {
  const maxStars = 5;
  const filledStars = Math.round(value);
  
  const sizeClass = size === 'sm' ? 'w-3 h-3' : 'w-4 h-4';
  
  return (
    <div className="flex items-center">
      <div className="flex">
        {[...Array(maxStars)].map((_, i) => (
          <Star
            key={i}
            className={`${sizeClass} ${
              i < filledStars
                ? 'text-yellow-400 fill-yellow-400'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      
      {showCount && count !== undefined && (
        <span className={`text-gray-600 ml-1 ${size === 'sm' ? 'text-xs' : 'text-sm'}`}>
          ({count})
        </span>
      )}
    </div>
  );
};

export default Rating;