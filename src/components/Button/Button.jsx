
import React, { useState, useEffect } from 'react';
import styles from './Button.module.css';

const Button = ({ onClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;

      
      setIsVisible(scrollPosition + windowHeight >= documentHeight);
    };

    
    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={styles.loadMore}
      onClick={onClick}
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      Load more
    </button>
  );
};

export default Button;
