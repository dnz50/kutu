import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, Menu, X, Globe } from 'lucide-react';

const Navbar = (user) => {
  const [isOpen, setIsOpen] = useState(false); // Menü açık/kapalı kontrolü

  // Menü linklerini tek bir yerde tutalım ki tekrar yazmayalım
  const navLinks = [
    { title: "Anasayfa", path: "/" },
    { title: "Hakkımızda", path: "/about" },
    { title: "Projeler", path: "/projects" },
    { title: "İletişim", path: "/contact" },
  ];

  return (
    <nav className="bg-blue-900 text-white p-4 sticky top-0 z-[100] shadow-xl">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-black italic">
          <Globe className="text-blue-400" /> UDEMAEDU
        </Link>

        {/* MASAÜSTÜ MENÜ (Büyük ekranlarda görünür) */}
        <div className="hidden md:flex space-x-8 font-semibold">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className="hover:text-blue-300 transition">
              {link.title}
            </Link>
          ))}
        </div>

        {/* ADMIN BUTONU VE MOBİL MENÜ BUTONU */}
        <div className="flex items-center gap-4">
          <Link to="/admin" className="hidden md:flex bg-blue-600 px-4 py-2 rounded-full text-xs font-bold uppercase items-center gap-2 hover:bg-blue-500 shadow-lg transition">
            <LayoutDashboard size={16} /> 
          </Link>

          {/* Hamburger İkonu (Sadece mobilde görünür) */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-white focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBİL MENÜ (Sadece isOpen true olduğunda ve mobilde görünür) */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-4 pb-6 space-y-3 bg-blue-800 rounded-b-2xl shadow-2xl">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              onClick={() => setIsOpen(false)} // Tıklayınca menüyü kapat
              className="block py-3 px-4 rounded-xl hover:bg-blue-700 transition font-bold"
            >
              {link.title}
            </Link>
          ))}
          <Link to={user ? "/admin" : "/login"} className="bg-blue-600 px-4 py-2 rounded-full text-xs font-bold uppercase flex items-center gap-2">
  <LayoutDashboard size={16} /> {user ? "Panel" : "Giriş"}
</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;