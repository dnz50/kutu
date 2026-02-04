import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Github, Facebook } from 'lucide-react';

const ContactPage = ({ data }) => {
  return (
    <section className="py-24 px-6 w-full bg-blue-50 min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-black text-blue-900 mb-6">Bize Ulaşın</h2>
        <p className="text-slate-600 text-xl mb-16">Sorularınız için bizimle her zaman iletişime geçebilirsiniz.</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <a href={`mailto:${data.email}`} className="bg-white p-10 rounded-3xl shadow-xl hover:-translate-y-2 transition duration-300">
            <Mail className="mx-auto text-blue-600 mb-4" size={40} />
            <h4 className="font-bold text-blue-900 mb-2">E-posta</h4>
            <p className="text-slate-500">{data.email}</p>
          </a>
          <div className="bg-white p-10 rounded-3xl shadow-xl hover:-translate-y-2 transition duration-300">
            <Phone className="mx-auto text-blue-600 mb-4" size={40} />
            <h4 className="font-bold text-blue-900 mb-2">Telefon</h4>
            <p className="text-slate-500">+90 555 000 00 00</p>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-xl hover:-translate-y-2 transition duration-300">
            <MapPin className="mx-auto text-blue-600 mb-4" size={40} />
            <h4 className="font-bold text-blue-900 mb-2">Adres</h4>
            <p className="text-slate-500">Sakarya, Türkiye</p>
          </div>
        </div>

        <div className="mt-20">
          <h4 className="text-2xl font-bold text-blue-900 mb-8">Sosyal Medya</h4>
          <div className="flex justify-center space-x-6">
            <a href={data.igLink} target="_blank" className="p-4 bg-white rounded-full text-pink-600 shadow-lg hover:scale-110 transition"><Instagram size={30} /></a>
            <a href="#" className="p-4 bg-white rounded-full text-blue-700 shadow-lg hover:scale-110 transition"><Linkedin size={30} /></a>
            <a href="#" className="p-4 bg-white rounded-full text-slate-900 shadow-lg hover:scale-110 transition"><Facebook size={30} /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;