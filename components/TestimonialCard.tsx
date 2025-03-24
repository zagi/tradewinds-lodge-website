import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { Testimonial } from '@/types';
import { Card, CardContent } from './ui/card';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <Card className="bg-white transition-all duration-300 hover:shadow-md">
      <CardContent className="p-6">
        <div className="flex text-amber-500 mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-amber-500" />
          ))}
        </div>
        <div className="mb-6 text-gray-700" dangerouslySetInnerHTML={{ __html: testimonial.content }} />
        <div className="flex items-center">
          <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
            <Image 
              src={testimonial.image}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-medium">{testimonial.name}</p>
            <p className="text-sm text-gray-600 dark:text-gray-100">{testimonial.role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;