import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fetchServices } from '../api';
import { Service } from '../types';

const Services: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const servicesData = await fetchServices();
      setServices(servicesData);
    };
    fetchData();
  }, []);

  return (
    <section id="services" className="container mx-auto my-16 p-4">
      <p className="text-3xl text-minimal-black pre-title mb-6">The perfect place to relax</p>
      <h2 className="text-5xl font-semibold text-minimal-black mb-10">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {services.map((service, index) => (
          <div key={index} className="p-10 bg-white shadow-md border border-gray-200 rounded-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <FontAwesomeIcon icon={['fas', service.attributes.icon]} className="text-3xl text-minimal-black mb-4" />
            <h3 className="text-xl font-semibold">{service.attributes.title}</h3>
            <p className="mt-2">{service.attributes.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
