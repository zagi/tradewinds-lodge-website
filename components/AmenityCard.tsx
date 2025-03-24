import React from 'react';
import { Wifi, Coffee, Home, WavesLadder } from 'lucide-react';
import { Amenity } from '@/types';

interface AmenityCardProps {
  amenity: Amenity;
}

const AmenityCard: React.FC<AmenityCardProps> = ({ amenity }) => {
  // Map of available icons
  const iconMap: Record<string, React.ReactNode> = {
    Wifi: <Wifi className="h-6 w-6 text-teal-600" />,
    Coffee: <Coffee className="h-6 w-6 text-teal-600" />,
    Home: <Home className="h-6 w-6 text-teal-600" />,
    WavesLadder: <WavesLadder className="h-6 w-6 text-teal-600" />,
  };

  return (
    <div className="text-center p-6 rounded-lg shadow-xs border border-gray-100 dark:border-gray-600 dark:bg-gray-700 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <div className="inline-flex items-center justify-center p-3 bg-teal-50 dark:bg-teal-900 rounded-full mb-4 transition-all duration-300">
        {iconMap[amenity.icon] || <Home className="h-6 w-6 text-teal-600" />}
      </div>
      <h3 className="text-lg font-semibold mb-2">{amenity.title}</h3>
      <p className="text-gray-600 dark:text-gray-100">{amenity.description}</p>
      <div className="mt-4" dangerouslySetInnerHTML={{ __html: amenity.content }} />
    </div>
  );
};

export default AmenityCard;