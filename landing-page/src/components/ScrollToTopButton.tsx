import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

interface ScrollToTopButtonProps {
    showScrollTop: boolean;
    scrollToTop: () => void;
  }
  
  const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ showScrollTop, scrollToTop }) => {
    if (!showScrollTop) {
      return null;
    }
  return (
    showScrollTop && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-10 bg-minimal-black text-minimal-white p-2 z-40 rounded-sm opacity-40 hover:opacity-80 shadow-lg transition-opacity duration-300"
      >
        <FontAwesomeIcon icon={faChevronUp} size="lg" />
      </button>
    )
  );
};

export default ScrollToTopButton;
