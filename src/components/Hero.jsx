import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Carousel verilerini bir diziye topluyoruz
  const slides = [
    { title: data?.heroTitle1 || "Yükleniyor...", img: data?.heroImg1 },
    { title: data?.heroTitle2 || "Modern Tasarımlar", img: data?.heroImg2 },
    { title: data?.heroTitle3 || "Profesyonel Çözümler", img: data?.heroImg3 },
  ].filter(slide => slide.img); // Sadece resmi olanları göster

  // OTOMATİK OYNATMA (Autoplay) - 5 saniyede bir
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (slides.length === 0) return null;

  return (
    <div className="relative h-[650px] w-full group overflow-hidden bg-blue-900">
      {/* Arka Plan Resmi */}
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].img})` }}
        className="w-full h-full bg-center bg-cover duration-1000 ease-in-out transition-all scale-105"
      >
        {/* Karartma Overlay */}
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-r from-blue-900/60 to-transparent"></div>
      </div>

      {/* İçerik */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl max-w-4xl tracking-tight leading-tight">
          {slides[currentIndex].title}
        </h1>
        <div className="flex gap-4">
          <Link to="/projects" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl hover:scale-105">
            Hemen Başla
          </Link>
          <Link to="/about" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-2xl font-bold text-lg transition-all">
            Daha Fazla Bilgi
          </Link>
        </div>
      </div>

      {/* Sol Ok */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/50 transition">
        <ChevronLeft onClick={prevSlide} size={30} />
      </div>

      {/* Sağ Ok */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/50 transition">
        <ChevronRight onClick={nextSlide} size={30} />
      </div>

      {/* Navigasyon Noktaları */}
      <div className="absolute bottom-8 flex justify-center w-full gap-3">
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => setCurrentIndex(slideIndex)}
            className={`transition-all duration-300 cursor-pointer rounded-full ${
              currentIndex === slideIndex ? "bg-white w-8 h-2" : "bg-white/50 w-2 h-2"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;