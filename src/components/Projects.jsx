import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Projects = ({ data }) => {
  const [filter, setFilter] = useState('ilk-orta');
  

  return (
    <section id="projects" className="py-24 bg-blue-50 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Filtre Butonları Aynı Kalıyor */}
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* data.projeListesi içindeki her bir eleman için bir kart oluşturuyoruz */}
          {data.projeListesi && data.projeListesi
            .filter(item => item.kategori === filter)
            .map((proje, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-xl border border-blue-100 group">
                <img src={proje.resim} className="h-56 w-full object-cover" alt={proje.baslik} />
                <div className="p-8">
                  <h3 className="font-bold text-xl text-blue-900 mb-2">{proje.baslik}</h3>
                  <p className="text-slate-500 text-sm mb-6">{proje.aciklama}</p>
                  <Link to="/projects" className="w-full py-3 px-5 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition">
                    Keşfet
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;