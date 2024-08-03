import React, { useEffect, useState } from 'react';
import { fetchFooter } from '../api';
import { FooterData } from '../types';

const Footer: React.FC = () => {
  const [footerData, setFooterData] = useState<FooterData>({ content: '' });

  useEffect(() => {
    const fetchData = async () => {
      const footer = await fetchFooter();
      setFooterData(footer);
    };
    fetchData();
  }, []);

  return (
    <footer className="bg-minimal-black text-minimal-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>{footerData.content}</p>
      </div>
    </footer>
  );
};

export default Footer;
