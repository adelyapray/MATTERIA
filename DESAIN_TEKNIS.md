# Desain Teknis Arsitektur React MATTERIA
- Data Layer (`src/data/chemData.js`): Menyimpan objek data murni untuk seluruh tahap 5E, tabel wujud zat, tabel studi kasus, soal evaluasi, dan referensi ilmiah.
- Component Layer (`src/components/`): `Navbar.jsx`, `HeroSection.jsx`, `TopicCards.jsx`, `Sidebar5E.jsx`, `ModulDetail.jsx`, dan `Footer.jsx`.
- State & Storage: State navigasi aktif (`beranda` vs tahapan 5E) dikelola di `App.jsx`, sedangkan input belajar siswa disimpan di `localStorage`.

