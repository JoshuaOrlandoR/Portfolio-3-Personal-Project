import React, { useState, useEffect } from 'react';
import './Hero.css';

function Hero() {
    const [greeting, setGreeting] = useState('');
  
    useEffect(() => {
      const text = '  Hello, my name is Joshua'; 
      let index = 0;
      const intervalId = setInterval(() => {
        setGreeting((prevGreeting) => prevGreeting + text[index]);
        index++;
        if (index === text.length-1) {
          clearInterval(intervalId);
        }
      }, 100);
      return () => clearInterval(intervalId);
    }, []);
  
    return (
      <div className="greeting fix-greeting">
        {greeting}
      </div>
    );
  }

export default Hero;