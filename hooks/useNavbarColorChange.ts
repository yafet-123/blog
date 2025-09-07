import { useState, useEffect } from 'react';

const useNavbarColorChange = (threshold = 80) => {
  const [colorChange, setColorChange] = useState(false);

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= threshold) {
        setColorChange(true);
      } else {
        setColorChange(false);
      }
    };

    window.addEventListener('scroll', changeNavbarColor);

    return () => {
      window.removeEventListener('scroll', changeNavbarColor);
    };
  }, [threshold]);

  return colorChange;
};

export default useNavbarColorChange;
