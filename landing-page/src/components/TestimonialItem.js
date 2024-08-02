import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const TestimonialItem = ({ testimonial }) => {
  return (
    <div className="p-10 bg-minimal-black bg-opacity-80 rounded-md shadow-md text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <h3 className="text-2xl font-semibold mb-4">{testimonial.title}</h3>
      <div className="flex justify-center mb-4">
        {[...Array(testimonial.rating)].map((_, index) => (
          <FontAwesomeIcon key={index} icon={faStar} className="text-yellow-500" />
        ))}
      </div>
      <p className="italic mb-4">{testimonial.review}</p>
      <div className="flex items-center justify-center">
        <p className="text-gray-300">{testimonial.name}</p>
      </div>
    </div>
  );
};

export default TestimonialItem;
