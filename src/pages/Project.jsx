import React, { useState } from 'react';

const ProjectsPage = ({ data }) => {
  const [filter, setFilter] = useState('ilk-orta');
  const projeler = data?.projeListesi || [];

  return (
    <section className="py-24 px-6 w-full bg-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Başlık Alanı */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-blue-900 mb-4">Portfolyomuz</h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Akıl ve zeka oyunlarında sınırları zorluyoruz. İşte bugüne kadar imza attığımız çalışmalardan bazıları.
          </p>
        </div>

        {/* Filtreleme Butonları (2 Ayrı Seçenek) */}
        <div className="flex justify-center mb-16 ">
          <div className="inline-flex bg-blue-50 p-2 rounded-2xl shadow-inner">
            {['ilk-orta', 'genel'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-10 py-3 rounded-xl font-bold transition-all duration-300 capitalize ${
                  filter === cat 
                    ? 'bg-blue-600 text-white shadow-lg scale-105' 
                    : 'text-blue-600 hover:bg-blue-100'
                }`}
              >
                {cat} Yaş Grubu
              </button>
            ))}
          </div>
        </div>

        {/* Proje Kartları Alanı */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projeler
            .filter((item) => item.kategori === filter)
            .map((proje, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-blue-50 group hover:-translate-y-4 transition-all duration-500">
                <div className="relative rounded-2xl h-64 overflow-hidden">
                  <img 
                    src={proje.resim || "https://picsum.photos/400/300"} 
                    className="w-full h-full rounded-2xl object-cover group-hover:scale-110 transition duration-700" 
                    alt={proje.baslik} 
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase">
                    {proje.kategori}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-bold text-2xl text-blue-900 mb-3">{proje.baslik}</h3>
                  <p className="text-slate-500 leading-relaxed mb-6">{proje.aciklama}</p>
                  <a href='https://www.shopier.com/udemaedu' target='blank' className="w-full py-3 px-5 bg-blue-900 text-white rounded-2xl font-bold hover:bg-blue-700 transition shadow-lg">
                    Keşfet
                  </a>
                </div>
              </div>
            ))}
        </div>

        {/* Eğer o kategoride proje yoksa gösterilecek mesaj */}
        {projeler.filter(p => p.kategori === filter).length === 0 && (
          <div className="text-center py-20 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
            <p className="text-slate-400 text-xl italic">Bu kategoride henüz bir çalışma eklenmedi.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsPage;