import React from 'react';

const AboutPage = ({ data }) => {
  return (
    <section className="w-full py-24 px-6 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img src={data.aboutImg} className="rounded-[40px] shadow-2xl z-10 relative" alt="Hakkımızda" />
          <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-100 rounded-full -z-10"></div>
        </div>
        <div>
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Biz Kimiz?</span>
          <h2 className="text-5xl font-black text-blue-900 mt-4 mb-8">Vizyonumuz & Misyonumuz</h2>
          <p className="text-slate-600 text-xl leading-relaxed mb-6">{data.aboutText}</p>
          <div className="grid grid-cols-2 gap-6 mt-10">
            <div className="p-6 bg-blue-50 rounded-2xl text-center">
              <h4 className="text-3xl font-bold text-blue-700">10+</h4>
              <p className="text-blue-900 font-semibold">Yıllık Deneyim</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-2xl text-center">
              <h4 className="text-3xl font-bold text-blue-700">200+</h4>
              <p className="text-blue-900 font-semibold">Mutlu Müşteri</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;