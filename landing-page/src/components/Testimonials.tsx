import React, { useEffect, useState } from 'react';
import { fetchTestimonials } from '../api';
import { Testimonial } from '../types';
import TestimonialItem from './TestimonialItem';

const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const testimonialsData = await fetchTestimonials();
      setTestimonials(testimonialsData);
    };
    fetchData();
  }, []);

  return (
    <section id="testimonials" className="relative my-16 py-10 pt-20 bg-cover bg-center" style={{ backgroundImage: 'url(reviews_bg.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="container mx-auto relative z-10 text-white">
        <p className="text-3xl text-minimal-white mb-4 text-right pre-title">They talk about us!</p>
        <h2 className="text-5xl font-semibold text-right mb-10">Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialItem key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
