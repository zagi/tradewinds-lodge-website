import React, { useEffect, useState } from 'react';
import { fetchHero } from '../api';
import { HeroData } from '../types';

interface HeroProps {
  onBookNowClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookNowClick }) => {
  const [heroData, setHeroData] = useState<HeroData>({ preTitle: '', title: '', subtitle: '' });

  useEffect(() => {
    const fetchData = async () => {
      const hero = await fetchHero();
      setHeroData(hero);
    };
    fetchData();
  }, []);

  return (
    <section id="hero" className="relative h-screen bg-cover bg-center flex flex-col items-center justify-center text-center text-white" style={{ backgroundImage: `url(http://localhost:1337${heroData.backgroundImage?.data.attributes.url})` }}>
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10">
        <p className="pre-title text-4xl mb-4">{heroData.preTitle}</p>
        <h1 className="text-6xl font-bold mb-6 transition-transform duration-300 hover:scale-105">{heroData.title}</h1>
        <p className="text-xl mb-6">{heroData.subtitle}</p>
        <button onClick={onBookNowClick} className="bg-minimal-white text-minimal-black px-5 py-4 font-semibold rounded-sm transition-colors duration-300 hover:bg-minimal-black hover:text-minimal-white">Book Now!</button>
      </div>
    </section>
  );
};

export default Hero;
