import React from 'react';
import Greeting from '../components/Greeting';
import Hero from '../components/Hero';
import Skills from'../components/Skills';

function Home() {
  return (
    <div>
      <Greeting />
      <Hero />
      <Skills/>
    </div>
  );
}

export default Home;
