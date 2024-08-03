import React, { useEffect, useState } from 'react';
import { fetchAbout } from '../api';
import { AboutData } from '../types';

interface AboutProps {
  onBookNowClick: () => void;
}

const About: React.FC<AboutProps> = ({ onBookNowClick }) => {
  const [aboutData, setAboutData] = useState<AboutData>({ preTitle: '', title: '', content: '' });

  useEffect(() => {
    const fetchData = async () => {
      const about = await fetchAbout();
      setAboutData(about);
    };
    fetchData();
  }, []);

  return (
    <section id="about" className="container mx-auto my-16 p-4 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 ">
        <img src={aboutData.image?.url} alt={aboutData.title} className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"/>
      </div>
      <div className="md:w-1/2 md:ml-8">
        <p className="text-3xl text-minimal-black mb-4 pre-title text-right">{aboutData.preTitle}</p>
        <h2 className="text-5xl font-semibold text-minimal-black mb-10 text-right">{aboutData.title}</h2>
        <p className="mt-4 text-right">{aboutData.content}</p>
        <button onClick={onBookNowClick} className="float-right bg-minimal-black text-white px-5 py-4 font-semibold rounded-sm mt-10 transition-colors duration-300 hover:bg-minimal-white hover:text-minimal-black">Book Now!</button>
      </div>
    </section>
  );
};

export default About;
