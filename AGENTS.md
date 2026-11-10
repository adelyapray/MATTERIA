# Aturan Kerja AI Agent (AGENTS.md)
1. Teknologi: React + Vite dengan komponen fungsional dan React Hooks (`useState`, `useEffect`). Tanpa backend eksternal dan tanpa menginstal library tambahan.
2. Penyimpanan: Gunakan `localStorage` untuk menyimpan jawaban hipotesis siswa, tabel pengamatan, analisis studi kasus, LKPD, dan skor kuis secara anonim.
3. Struktur File:
   - Data materi kimia wajib dipisahkan di `src/data/chemData.js`.
   - Komponen tampilan disimpan di `src/components/` (`Navbar.jsx`, `HeroSection.jsx`, `TopicCards.jsx`, `Sidebar5E.jsx`, `ModulDetail.jsx`, `Footer.jsx`).
4. Bahasa: Bahasa Indonesia baku, komunikatif, dan sesuai konteks pedagogik kimia.
5. Notasi Kimia: Rumus kimia wajib ditulis dengan benar menggunakan subscript/superscript yang tepat (contoh: H₂O, NaCl, O₂, CO₂). Pastikan "air murni (H₂O)" diklasifikasikan sebagai senyawa, sedangkan "air mineral" sebagai campuran homogen.
6. Batasan: Jangan mengubah `vite.config.js` atau `package.json`, dan jangan melakukan commit Git otomatis.

