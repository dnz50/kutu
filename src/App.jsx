import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { db, auth } from './firebaseConfig';
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

// Bileşenler ve Sayfalar
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/About';
import ProjectsPage from './pages/Project';
import ContactPage from './pages/Contact';
import AdminPage from './pages/Admin';
import LoginPage from './pages/Login'; 

function App() {
  const [data, setData] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Firebase Verilerini Çek
    const fetchData = async () => {
      const snap = await getDoc(doc(db, "ayarlar", "site"));
      if (snap.exists()) setData(snap.data());
    };
    fetchData();

    // 2. Kullanıcı Oturumunu Takip Et
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleUpdate = async (updatedData) => {
    await updateDoc(doc(db, "ayarlar", "site"), updatedData);
    setData(updatedData);
    alert("Site Başarıyla Güncellendi!");
  };

  if (loading || !data) return <div className="h-screen flex items-center justify-center text-blue-600 font-bold italic">UDEMAEDU YÜKLENİYOR...</div>;

  return (
    <Router>
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <Navbar user={user} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home data={data} />} />
            <Route path="/about" element={<AboutPage data={data} />} />
            <Route path="/projects" element={<ProjectsPage data={data} />} />
            <Route path="/contact" element={<ContactPage data={data} />} />
            
            {/* LOGIN ROTASI - Hatanın çözümü burası */}
            <Route path="/login" element={<LoginPage />} />
            
            {/* KORUMALI ADMİN ROTASI */}
            <Route 
              path="/admin" 
              element={user ? <AdminPage data={data} onSave={handleUpdate} /> : <Navigate to="/login" />} 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;