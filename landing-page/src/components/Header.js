import React, { useEffect, useState } from 'react';
import { fetchHeader, fetchMenu } from '../api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Header = ({ onMenuClick }) => {
  const [headerData, setHeaderData] = useState({});
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const header = await fetchHeader();
      const menu = await fetchMenu();
      setHeaderData(header);
      setMenuItems(menu);
    };
    fetchData();
  }, []);

  return (
    <header className="fixed w-full z-40 p-4 py-6 transition duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-semibold text-minimal-white">{headerData.title}</h1>
        <nav className="flex-grow text-center">
          <ul className="inline-flex space-x-4 text-minimal-white">
            {menuItems.map(item => (
              <li key={item.id}><a href={item.targetId} className="hover:text-minimal-gray" onClick={(e) => onMenuClick(e, item.targetId)}>{item.label}</a></li>
            ))}
          </ul>
        </nav>
        <div className="flex space-x-4 text-minimal-white">
          <a href={headerData.facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-minimal-gray">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href={headerData.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-minimal-gray">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
