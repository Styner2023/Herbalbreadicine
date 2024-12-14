import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Products } from '../components/Products';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Products />
    </>
  );
};