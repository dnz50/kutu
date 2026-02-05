import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';

const Home = ({ data }) => {
  return (
    <div className='w-full'>
      <Hero data={data} />
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4 tracking-tight">Hoş Geldiniz</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Akıl zeka oyunlarında sınırları zorluyoruz. Beyin gelişimini en üst seviyeye taşıyoruz.</p>
        </div>
      </div>
      <Projects data={data} />
    </div>
  );
};

export default Home;