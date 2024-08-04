import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Rooms from './components/Rooms';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import { fetchMenu } from './api';
import { MenuItem } from './types';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const menu = await fetchMenu();
      setMenuItems(menu);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (window.scrollY > 50) {
        header?.classList.add('bg-minimal-black', 'opacity-90');
      } else {
        header?.classList.remove('bg-minimal-black', 'opacity-90');
      }

      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookNowClick = () => {
    window.location.href = 'https://booking.com';
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    event.preventDefault();
    const headerHeight = document.querySelector('header')?.offsetHeight || 0;
    const targetElement = document.querySelector(`#${targetId}`) as HTMLElement;
    const targetPosition = targetElement?.offsetTop - headerHeight || 0;

    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
  };

  // use ENUM for this instead of switch
  const renderComponent = (componentType: string) => {
    switch (componentType) {
      case 'about':
        return <About onBookNowClick={handleBookNowClick} />;
      case 'gallery':
        return <Gallery />;
      case 'rooms':
        return <Rooms />;
      case 'services':
        return <Services />;
      case 'testimonials':
        return <Testimonials />;
      case 'contact':
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <Header onMenuClick={handleMenuClick} menuItems={menuItems} />
      <Hero onBookNowClick={handleBookNowClick} />
      {menuItems.map(item => (
        <section key={item.id} id={item.attributes.targetId}>
          {renderComponent(item.attributes.componentType)}
        </section>
      ))}
      <Footer />
      <ScrollToTopButton showScrollTop={showScrollTop} scrollToTop={scrollToTop} />
    </div>
  );
};

export default App;
