import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/admin'); // Giriş başarılıysa admin'e at
    } catch (err) {
      setError("Hatalı e-posta veya şifre!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <div className="max-w-md w-full bg-white p-10 rounded-[2.5rem] shadow-2xl border border-blue-100">
        <h2 className="text-3xl font-black text-blue-900 text-center mb-8">Admin Girişi</h2>
        {error && <p className="bg-red-100 text-red-600 p-3 rounded-xl text-center mb-4 text-sm font-bold">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-6">
          <input 
            type="email" 
            placeholder="E-posta" 
            className="w-full p-4 border rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="Şifre" 
            className="w-full p-4 border rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-2xl font-black text-lg hover:bg-blue-700 shadow-lg transition">
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;