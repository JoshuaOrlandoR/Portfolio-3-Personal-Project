import React from 'react';
import Greeting from '../components/Greeting';
import Hero from '../components/Hero';
import Skills from'../components/Skills';
import Testimonials from '../components/Testimonials';

function Home() {
  return (
    <div>
      <Greeting />
      <Hero />
      <Skills/>
      <Testimonials/>
    </div>
  );
}

export default Home;
