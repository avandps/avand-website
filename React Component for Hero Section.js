// React Component for Hero Section
import { useState, useEffect } from 'react';

const Hero = () => {
  const [greeting, setGreeting] = useState('Build your future');
  
  return (
    <section className="relative h-[90vh] flex items-center bg-[#0b2f2e] overflow-hidden">
      <div className="container mx-auto px-8 z-10 grid lg:grid-cols-2 gap-12">
        <div className="animate-fade-in">
          <span className="text-[#c9b07a] font-semibold tracking-widest uppercase">Expert Mortgage Broker Alfredton</span>
          <h1 className="text-5xl lg:text-7xl font-bold text-[#f4ecd8] mt-4 leading-tight">
            {greeting} <br /> with confidence.
          </h1>
          <p className="text-lg text-[#f4ecd8]/80 mt-6 max-w-lg">
            AVAND Home Loans compares multiple lenders to find you the perfect mortgage in Ballarat and beyond.
          </p>
          <div className="mt-10 flex gap-4">
            <button className="bg-gradient-to-r from-[#c9b07a] to-[#f0e1b3] px-8 py-4 rounded-full font-bold text-[#082524]">
              Start My Application
            </button>
            <button className="border border-[#c9b07a] text-[#c9b07a] px-8 py-4 rounded-full font-bold">
              View Rates
            </button>
          </div>
        </div>
      </div>
      {/* Dynamic background element */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-[#082524] skew-x-12 translate-x-20 hidden lg:block" />
    </section>
  );
};