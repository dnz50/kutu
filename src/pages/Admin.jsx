import React, { useState } from "react";
import { Plus, Trash2, Save, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

const AdminPage = ({ data, onSave }) => {
  const [form, setForm] = useState(data);
  const navigate = useNavigate();

  const handleSave = async () => {
    await onSave(form);
    navigate("/"); // Kayıt sonrası ana sayfaya gönderir
  };

  const kartEkle = () => {
    const yeni = {
      baslik: "Yeni",
      aciklama: "Açıklama",
      resim: "",
      kategori: "ilk-orta",
    };
    setForm({ ...form, projeListesi: [...(form.projeListesi || []), yeni] });
  };

  const kartSil = (idx) => {
    setForm({
      ...form,
      projeListesi: form.projeListesi.filter((_, i) => i !== idx),
    });
  };

  return (
    <div className="p-8 max-w-5xl mx-auto py-20">
      <div className="flex justify-between items-center mb-10 border-b pb-6">
        <h2 className="text-4xl font-black text-blue-900 uppercase">Panel</h2>
        <button
          onClick={kartEkle}
          className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-blue-700 transition"
        >
          <Plus /> Yeni Kart
        </button>
        <button
          onClick={() => signOut(auth)}
          className="bg-red-500 text-white px-4 py-2 rounded-xl text-xs font-bold"
        >
          Çıkış Yap
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mb-10">
        <div className="bg-white p-8 rounded-3xl shadow-lg space-y-4">
          <h3 className="font-bold text-blue-700 border-b pb-2">
            Genel Metinler
          </h3>
          <textarea
            className="w-full border p-4 rounded-xl h-40"
            value={form.aboutText}
            onChange={(e) => setForm({ ...form, aboutText: e.target.value })}
            placeholder="Hakkımızda Yazısı"
          />
          <input
            className="w-full border p-4 rounded-xl"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="İletişim Email"
          />
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg space-y-4">
          <h3 className="font-bold text-blue-700 border-b pb-2">
            Görseller (Link)
          </h3>
          <input
            className="w-full border p-4 rounded-xl"
            value={form.aboutImg}
            onChange={(e) => setForm({ ...form, aboutImg: e.target.value })}
            placeholder="Hakkımızda Resim URL"
          />
          <input
            className="w-full border p-4 rounded-xl"
            value={form.heroImg1}
            onChange={(e) => setForm({ ...form, heroImg1: e.target.value })}
            placeholder="Hero Resim 1"
          />
          <input
            className="w-full border p-4 rounded-xl"
            value={form.heroImg2}
            onChange={(e) => setForm({ ...form, heroImg2: e.target.value })}
            placeholder="Hero Resim 2"
          />
          <input
            className="w-full border p-4 rounded-xl"
            value={form.heroImg3}
            onChange={(e) => setForm({ ...form, heroImg3: e.target.value })}
            placeholder="Hero Resim 3"
          />
        </div>
      </div>

      <h3 className="text-2xl font-bold text-blue-900 mb-6">Proje Kartları</h3>
      <div className="grid gap-6 mb-10">
        {form.projeListesi?.map((p, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow border flex flex-col md:flex-row gap-4 relative"
          >
            <button
              onClick={() => kartSil(i)}
              className="absolute -top-3 -right-3 bg-red-500 text-white p-2 rounded-full shadow-xl"
            >
              <Trash2 size={16} />
            </button>
            <input
              className="border p-2 rounded flex-1"
              placeholder="Başlık"
              value={p.baslik}
              onChange={(e) => {
                const nl = [...form.projeListesi];
                nl[i].baslik = e.target.value;
                setForm({ ...form, projeListesi: nl });
              }}
            />
            <input
              className="border p-2 rounded flex-1"
              placeholder="Resim"
              value={p.resim || ""}
              onChange={(e) => {
                const nl = [...form.projeListesi];
                nl[i].resim = e.target.value;
                setForm({ ...form, projeListesi: nl });
              }}
            />
            <input
              className="border p-2 flex-1 border-blue-500  rounded-xl focus:border-blue-500"
              placeholder="Kutu Oyunu"
              value={p.aciklama || ""}
              onChange={(e) => {
                const nl = [...form.projeListesi];
                nl[i].aciklama = e.target.value;
                setForm({ ...form, projeListesi: nl });
              }}
            />
           
            <select
              className="border p-2 rounded"
              value={p.kategori}
              onChange={(e) => {
                const nl = [...form.projeListesi];
                nl[i].kategori = e.target.value;
                setForm({ ...form, projeListesi: nl });
              }}
            >
              <option value="ilk-orta">İlk-orta</option>
              <option value="genel">Genel</option>
            </select>
          </div>
        ))}
      </div>

      <button
        onClick={handleSave}
        className="w-full bg-green-600 text-white py-6 rounded-3xl font-black text-2xl shadow-2xl hover:bg-green-700 transition flex items-center justify-center gap-4"
      >
        <Save size={28} /> SİTEYİ GÜNCELLE
      </button>
    </div>
  );
};

export default AdminPage;
