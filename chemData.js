/**
 * MATTERIA - Data Kimia Modul 1
 * Model Pembelajaran: Learning Cycle 5E
 * Topik: Klasifikasi dan Perubahan Materi
 * Target: Siswa SMA Kelas X (Fase E) / SMP
 */

export const chemData = {
  meta: {
    title: "Klasifikasi dan Perubahan Materi",
    subject: "Kimia SMA Fase E / SMP",
    curriculum: "Kurikulum Merdeka",
    model: "Learning Cycle 5E",
    author: "Tim Pengembang Web Kimia Kelompok 2"
  },

  tujuanPembelajaran: [
    "Menjelaskan pengertian materi dan membedakan wujud materi (padat, cair, dan gas) berdasarkan karakteristik makroskopis serta susunan dan pergerakan partikel submikroskopik.",
    "Mengklasifikasikan berbagai contoh zat di lingkungan sekitar ke dalam unsur, senyawa, dan campuran (homogen dan heterogen) dengan benar.",
    "Membedakan konsep senyawa murni seperti air murni (H₂O) dengan campuran homogen seperti air mineral secara konseptual dan empiris.",
    "Menganalisis perbedaan perubahan fisika dan perubahan kimia melalui pengamatan fenomena sehari-hari serta pembentukan zat baru.",
    "Mengembangkan keterampilan penyelidikan ilmiah, berpikir kritis, dan merumuskan hipotesis melalui simulasi interaktif PhET dan studi kasus kontekstual."
  ],

  topics: [
    {
      id: "wujud-partikel",
      title: "1. Wujud & Susunan Partikel Materi",
      description: "Memahami keadaan materi (padat, cair, gas) secara makroskopis dan bagaimana susunan, jarak, serta pergerakan partikel submikroskopiknya.",
      badge: "Submikroskopik",
      color: "#0288d1"
    },
    {
      id: "klasifikasi-materi",
      title: "2. Klasifikasi Materi: Unsur, Senyawa, Campuran",
      description: "Membedakan zat tunggal (unsur seperti Au & Al, senyawa seperti H₂O & NaCl) dengan campuran (larutan homogen vs campuran heterogen).",
      badge: "Klasifikasi Zat",
      color: "#2e7d32"
    },
    {
      id: "perubahan-materi",
      title: "3. Perubahan Fisika & Perubahan Kimia",
      description: "Mengidentifikasi ciri-ciri perubahan fisika (reversibel, tanpa zat baru) dan perubahan kimia (terbentuk zat baru, warna, endapan, gas, energi).",
      badge: "Reaksi & Fenomena",
      color: "#ed6c02"
    }
  ],

  learningCycleSteps: [
    { key: "engage", name: "1. Engage", label: "Apersepsi & Fenomena", desc: "Membangkitkan rasa ingin tahu lewat fenomena es mencair." },
    { key: "explore", name: "2. Explore", label: "Eksplorasi PhET", desc: "Menyelidiki partikel materi secara visual di laboratorium virtual." },
    { key: "explain", name: "3. Explain", label: "Konsep & Teori", desc: "Membedah teori kimia, tabel partikel, dan sumber primer." },
    { key: "elaborate", name: "4. Elaborate", label: "Studi Kasus & LKPD", desc: "Menerapkan konsep pada kasus nyata di rumah dan lingkungan." },
    { key: "evaluate", name: "5. Evaluate", label: "Kuis Mandiri", desc: "Menguji pemahaman dengan umpan balik didaktis langsung." }
  ],

  engage: {
    bannerTitle: "Engage: Jelajahi Rahasia Materi di Sekitarmu!",
    subtitle: "Mengapa Es Bisa Mencair Sendiri?",
    videoUrl: "https://www.youtube.com/embed/5c3s9t6mK2w",
    phenomenonTitle: "Fenomena Nyata: Es Batu di Atas Meja",
    phenomenonNarrative: 
      "Bayangkan kamu meletakkan sebongkah es batu di atas piring kecil di meja belajarmu. Tanpa kamu panaskan di atas kompor atau diberi api sedikit pun, perlahan-lahan es yang keras dan dingin itu mulai meneteskan air, mengecil, hingga akhirnya seluruhnya berubah menjadi genangan air cair bersuhu ruang.\n\n" +
      "Secara kasat mata (makroskopis), wujud zat tersebut berubah dari padat menjadi cair. Namun, apa yang sebenarnya terjadi pada tingkat submikroskopik (atom dan molekul penyusunnya)? Apakah molekul H₂O di dalam es bertambah banyak, pecah, atau bergerak lebih cepat? Mengapa es bisa menyerap kalor dari udara ruangan padahal tidak tersentuh api sama sekali?",
    promptHypothesis: "Tuliskan dugaan atau hipotesis awalmu sebelum kita menyelidiki pergerakan partikel materi di laboratorium virtual:"
  },

  explore: {
    bannerTitle: "Explore: Amati Sendiri Partikel Penyusun Materi!",
    subtitle: "Laboratorium Virtual Interaktif Partikel Zat",
    phetUrl: "https://phet.colorado.edu/sims/html/states-of-matter-basics/latest/states-of-matter-basics_all.html",
    guidelines: [
      {
        title: "Panduan Eksplorasi Wujud Materi",
        badge: "Tab 1: States",
        steps: [
          "Buka simulasi di bawah ini, lalu pilih tab 'States' (Wujud).",
          "Pilih jenis atom/molekul yang ingin kamu amati: Neon, Argon, Oksigen, atau Air (H₂O).",
          "Amati susunan dan pergerakan partikel pada wujud Solid (Padat), Liquid (Cair), dan Gas (Gas).",
          "Catat perbedaan kerapatan (jarak antarpartikel) dan tingkat kebebasan bergerak antarpartikel pada masing-masing wujud."
        ]
      },
      {
        title: "Panduan Eksplorasi Perubahan",
        badge: "Tab 2: Phase Changes",
        steps: [
          "Beralih ke tab 'Phase Changes' (Perubahan Wujud) pada simulasi.",
          "Pilih molekul 'Air' (Water / H₂O).",
          "Gunakan tuas pengatur suhu di bagian bawah wadah untuk memanaskan (Heat) dan mendinginkan (Cool) sistem.",
          "Amati dan catat apa yang terjadi pada susunan, pergerakan partikel, serta indikator suhu saat es (Solid) dipanaskan menjadi air (Liquid) lalu uap (Gas)."
        ]
      }
    ],
    observationPrompts: {
      nameLabel: "Nama Lengkap Siswa:",
      solidObservationLabel: "Hasil Pengamatan Wujud Padat, Cair, dan Gas (Jarak & Gerak Partikel):",
      phaseChangeObservationLabel: "Hasil Pengamatan Perubahan Wujud Saat Dipanaskan/Didinginkan (Pengaruh Kalor):"
    }
  },

  explain: {
    bannerTitle: "Explain: Mengenali Klasifikasi dan Perubahan Materi",
    subtitle: "Kajian Konseptual Materi, Representasi Partikel, dan Klasifikasi Kimia",
    pengertianMateri: 
      "Dalam ilmu kimia, materi (matter) didefinisikan sebagai segala sesuatu yang memiliki massa dan menempati ruang (memiliki volume). Semua benda yang ada di alam semesta—mulai dari udara yang kita hirup, air yang kita minum, hingga layar gawai yang sedang kamu tatap—merupakan materi. Materi dapat dikaji melalui tiga level representasi kimia: level makroskopis (fenomena teramati), level submikroskopik (partikel atom, molekul, ion), dan level simbolik (rumus kimia dan persamaan reaksi).",
    
    tabelPartikel: {
      title: "Wujud Materi dan Susunan Partikelnya",
      headers: ["Wujud Materi", "Susunan & Gaya Tarik Partikel", "Bentuk & Volume"],
      rows: [
        {
          wujud: "Padat (Solid)",
          susunan: "Tersusun sangat rapat, teratur, dan gaya tarik antarpartikel sangat kuat. Partikel hanya bergetar di tempatnya.",
          sifat: "Bentuk dan volume tetap (tidak mengikuti bentuk wadahnya)."
        },
        {
          wujud: "Cair (Liquid)",
          susunan: "Tersusun agak berjauhan, susunan kurang teratur, gaya tarik antarpartikel sedang. Partikel dapat meluncur dan berpindah tempat secara terbatas.",
          sifat: "Volume tetap, tetapi bentuk berubah mengikuti wadah yang ditempatinya."
        },
        {
          wujud: "Gas (Gas)",
          susunan: "Tersusun sangat berjauhan, bergerak sangat cepat dan bebas ke segala arah, gaya tarik antarpartikel sangat lemah (dapat diabaikan).",
          sifat: "Bentuk dan volume berubah-ubah memenuhi seluruh ruang wadah."
        }
      ]
    },

    klasifikasiMateri: {
      title: "Klasifikasi Materi: Unsur, Senyawa, dan Campuran",
      sections: [
        {
          name: "1. Unsur (Element)",
          desc: "Zat tunggal murni yang paling sederhana dan tidak dapat diuraikan lagi menjadi zat lain yang lebih sederhana melalui reaksi kimia biasa. Unsur hanya terdiri dari satu jenis atom.",
          contoh: "Emas murni (Au), perak murni (Ag), aluminium (Al), tembaga (Cu), gas oksigen (O₂), dan gas nitrogen (N₂)."
        },
        {
          name: "2. Senyawa (Compound)",
          desc: "Zat tunggal yang terbentuk dari gabungan dua atau lebih jenis unsur berbeda yang terikat secara kimiawi dengan perbandingan massa tertentu dan tetap. Sifat senyawa sangat berbeda dari sifat unsur-unsur penyusunnya dan hanya dapat dipisahkan kembali melalui reaksi kimia.",
          contoh: "Air murni (H₂O) yang tersusun atas hidrogen dan oksigen; Garam dapur murni (NaCl) dari natrium dan klorin; Karbon dioksida (CO₂); Gula sukrosa (C₁₂H₂₂O₁₁).",
          catatanKritis: "Penting: Air murni (H₂O) adalah senyawa murni karena hanya terdiri dari ikatan molekul H₂O dengan rasio hidrogen dan oksigen 2:1. Sebaliknya, air mineral kemasan adalah campuran homogen karena mengandung H₂O bersama berbagai ion mineral terlarut (seperti Ca²⁺, Mg²⁺, Na⁺, Cl⁻) tanpa ikatan kimia antar keduanya."
        },
        {
          name: "3. Campuran (Mixture)",
          desc: "Penggabungan dua zat murni atau lebih tanpa melalui reaksi kimia dan perbandingan komponennya tidak tetap. Masing-masing zat penyusunnya masih mempertahankan sifat asalnya dan dapat dipisahkan secara fisika (filtrasi, evaporasi, distilasi, kromatografi).",
          subtypes: [
            {
              type: "Campuran Homogen (Larutan)",
              detail: "Campuran yang partikel penyusunnya tercampur merata secara sempurna hingga batas antarzat tidak dapat dibedakan lagi bahkan dengan mikroskop biasa. Contoh: larutan gula, larutan teh manis yang tersaring, air mineral, udara bersih, paduan logam kuningan (Cu dan Zn)."
            },
            {
              type: "Campuran Heterogen (Suspensi & Koloid)",
              detail: "Campuran yang zat-zat penyusunnya tidak tercampur merata sehingga masih terlihat batas fase yang jelas antar komponennya. Contoh: campuran kopi bubuk dengan air (kopi tubruk yang menyisakan ampas), campuran air dengan minyak tanah, susu, es cendol, dan air sungai berlumpur."
            }
          ]
        }
      ]
    },

    perubahanMateri: {
      title: "Perubahan Fisika vs Perubahan Kimia",
      perubahanFisika: {
        definisi: "Perubahan materi yang hanya mengubah wujud, ukuran, atau bentuk fisik zat tanpa menghasilkan zat kimia baru. Komposisi molekul penyusunnya tetap sama dan umumnya bersifat reversibel (dapat kembali ke wujud semula).",
        indikator: ["Perubahan wujud (mencair, membeku, menguap, mengembun, menyublim)", "Perubahan ukuran (penghalusan beras jadi tepung)", "Perubahan bentuk (pembengkokan kawat kawat tembaga, kayu diukir jadi meja)"],
        contoh: "Es batu mencair menjadi air (H₂O solid → H₂O liquid), air menguap saat dijemur, cokelat meleleh di tangan, lilin meleleh terkena panas."
      },
      perubahanKimia: {
        definisi: "Perubahan materi yang menghasilkan satu atau lebih zat jenis baru dengan sifat kimia yang berbeda dari zat semula. Terjadi pemutusan dan pembentukan ikatan kimia baru, serta umumnya bersifat ireversibel (sukar kembali ke bentuk semula).",
        indikator: ["Terbentuknya endapan baru (presipitasi)", "Terjadinya perubahan warna yang permanen", "Timbulnya gas (gelembung/bau baru)", "Terjadinya perubahan suhu/pelepasan kalor (eksoterm/endoterm)"],
        contoh: "Besi berkarat (Fe + O₂ + H₂O → Fe₂O₃·xH₂O), kertas dibakar menjadi abu dan asap CO₂, nasi menjadi basi akibat aktivitas bakteri, telur digoreng (denaturasi protein irreversibel)."
      }
    },

    representasiPerhitungan: {
      title: "Representasi & Prinsip Kekekalan Massa (Hukum Lavoisier)",
      desc: "Dalam sistem tertutup, massa materi sebelum dan sesudah perubahan kimia maupun fisika adalah tetap.",
      contohKasus: "Sebagai contoh, 18 gram es batu (H₂O) jika mencair seluruhnya dalam wadah tertutup akan tetap menghasilkan tepat 18 gram air cair. Demikian pula pada reaksi pembentukan senyawa air: 2 gram gas hidrogen (H₂) bereaksi sempurna dengan 16 gram gas oksigen (O₂) akan menghasilkan tepat 18 gram senyawa air murni (H₂O)."
    },

    sumberPustaka: [
      {
        citation: "Brown, T. L., LeMay, H. E., Bursten, B. E., Murphy, C., & Woodward, P. (2018). Chemistry: The Central Science (14th ed.). Pearson.",
        note: "Rujukan utama klasifikasi materi, wujud zat, sifat partikel gas-cair-padat, dan representasi submikroskopik."
      },
      {
        citation: "Chang, R. (2010). Chemistry (10th ed.). McGraw-Hill.",
        note: "Rujukan klasifikasi unsur, senyawa, campuran homogen-heterogen, serta kriteria perubahan fisika dan kimia."
      }
    ]
  },

  elaborate: {
    bannerTitle: "Elaborate: Tantangan Studi Kasus Materi!",
    subtitle: "Penerapan Konsep Kimia pada Lingkungan Rumah dan Kehidupan Sehari-hari",
    
    studiKasus1: {
      title: "Studi Kasus 1: Klasifikasi Benda di Sekitar Rumah",
      deskripsi: "Perhatikan tabel klasifikasi benda-benda yang biasa kita temui di rumah berikut ini:",
      tabelBenda: [
        { kategori: "Alat masak dari logam", contoh: "Panci aluminium (Al), sendok stainless steel (paduan Fe, Cr, Ni)" },
        { kategori: "Bahan dapur", contoh: "Garam dapur (NaCl), gula pasir (C₁₂H₂₂O₁₁), air murni (H₂O)" },
        { kategori: "Minuman", contoh: "Teh manis, kopi susu, air kelapa" },
        { kategori: "Perhiasan", contoh: "Cincin emas murni (Au), kalung perak (Ag)" },
        { kategori: "Sampah organik + anorganik", contoh: "Sisa sayur, botol plastik (polimer sintetik), kertas (selulosa)" }
      ],
      pertanyaanPemandu: [
        {
          id: "q1",
          soal: "1. Dari daftar di atas, manakah yang tergolong unsur? Jelaskan ciri khasnya (hanya terdiri dari satu jenis atom)!"
        },
        {
          id: "q2",
          soal: "2. Air murni (H₂O) tergolong senyawa, sedangkan air mineral tergolong campuran. Mengapa air murni (H₂O) disebut senyawa dan bukan campuran?"
        },
        {
          id: "q3",
          soal: "3. Teh manis dan kopi susu termasuk campuran homogen atau heterogen? Berikan alasan berdasarkan tampilan fisiknya!"
        },
        {
          id: "q4",
          soal: "4. Cari 3 benda lain di rumahmu yang belum disebutkan di tabel, lalu klasifikasikan apakah termasuk unsur, senyawa, atau campuran!"
        }
      ]
    },

    studiKasus2: {
      title: "Studi Kasus 2: 'Mengapa Bisa Terjadi?' (Analisis Perubahan Materi)",
      deskripsi: "Terdapat 7 fenomena perubahan materi yang kerap terjadi di sekeliling kita:",
      daftarPeristiwa: [
        { id: 1, icon: "🔍", text: "Telur digoreng di atas wajan" },
        { id: 2, icon: "🧊", text: "Es batu mencair di dalam gelas" },
        { id: 3, icon: "🔥", text: "Kertas dibakar menjadi abu hitam dan asap" },
        { id: 4, icon: "🚲", text: "Besi atau rantai sepeda berkarat terkena hujan" },
        { id: 5, icon: "🍚", text: "Nasi yang dibiarkan berhari-hari menjadi basi dan berlendir" },
        { id: 6, icon: "💨", text: "Air basah pada pakaian menguap saat dijemur di bawah terik matahari" },
        { id: 7, icon: "🍫", text: "Cokelat batangan meleleh saat dipegang di telapak tangan" }
      ],
      pertanyaanPemandu: [
        {
          id: "cq1",
          soal: "1. Apa ciri utama yang membedakan perubahan fisika dan perubahan kimia?"
        },
        {
          id: "cq2",
          soal: "2. Pada peristiwa yang kamu pilih, apakah terbentuk zat baru? Bagaimana kamu tahu?"
        },
        {
          id: "cq3",
          soal: "3. Apakah perubahan tersebut bisa dibalik ke bentuk semula (reversibel)? Jelaskan!"
        }
      ]
    },

    lkpdInfo: {
      title: "Ruang Unggah Tugas & Laporan LKPD Siswa",
      formatRequirements: [
        "Identitas Siswa: Nama Lengkap & Nomor Absen / Kelas.",
        "Foto atau dokumentasi benda atau peristiwa nyata yang diamati di lingkungan rumah.",
        "Jawaban lengkap LKPD Bagian A (Studi Kasus 1 Klasifikasi) dan Bagian B (Studi Kasus 2 Perubahan Materi).",
        "Batas waktu pengumpulan laporan: 30 November 2026."
      ]
    }
  },

  evaluate: {
    bannerTitle: "Evaluate: Uji Pemahamanmu (Quiz)!",
    subtitle: "Kuis Diagnostik & Konseptual Mandiri dengan Umpan Balik Didaktis",
    instruction: "Kerjakan 5 soal pilihan ganda berikut untuk mengevaluasi pemahamanmu mengenai Wujud Zat, Klasifikasi Materi, dan Perubahan Materi. Klik pilihan jawaban yang menurutmu paling tepat, lalu tekan tombol 'Kirim & Cek Hasil Kuis'.",
    quizQuestions: [
      {
        id: 1,
        question: "Berdasarkan susunan partikel submikroskopiknya, wujud zat yang memiliki gaya tarik antarpartikel sangat lemah, jarak antarpartikel sangat berjauhan, serta bentuk dan volume selalu berubah memenuhi wadahnya adalah...",
        options: [
          "Padat (Solid)",
          "Cair (Liquid)",
          "Gas (Gas)",
          "Plasma Murni"
        ],
        correctIndex: 2,
        explanation: "Gas memiliki partikel yang tersusun sangat berjauhan dengan gaya tarik antarpartikel yang sangat lemah (hampir dapat diabaikan), sehingga partikel gas bebas bergerak cepat ke segala arah dan mengisi seluruh ruang serta volume wadahnya."
      },
      {
        id: 2,
        question: "Di laboratorium kimia, tersedia botol bertuliskan 'Air Murni (H₂O)' dan sebotol 'Air Mineral Kemasan'. Pernyataan klasifikasi materi berikut yang paling tepat secara ilmiah adalah...",
        options: [
          "Keduanya merupakan senyawa karena sama-sama berupa cairan bening yang tidak berwarna.",
          "Air murni (H₂O) adalah senyawa karena tersusun atas molekul H₂O berikatan kimia tetap, sedangkan air mineral adalah campuran homogen karena mengandung ion mineral terlarut tanpa ikatan kimia antarzat.",
          "Air mineral adalah senyawa murni karena sehat diminum, sedangkan air murni adalah unsur hidrogen dan oksigen yang terpisah.",
          "Keduanya merupakan campuran heterogen karena memiliki fase zat yang tidak stabil bila didiamkan berhari-hari."
        ],
        correctIndex: 1,
        explanation: "Air murni (H₂O) adalah senyawa murni (zat tunggal) dengan perbandingan atom H dan O yang tetap (2:1) yang terikat secara kimia. Sementara air mineral adalah campuran homogen (larutan), karena di dalam air tersebut terlarut berbagai mineral (seperti Ca²⁺, Mg²⁺, Na⁺, Cl⁻) secara merata tanpa reaksi kimia."
      },
      {
        id: 3,
        question: "Perhatikan beberapa zat berikut: (1) Cincin emas murni 24 karat (Au), (2) Garam dapur murni (NaCl), (3) Larutan teh manis tersaring, (4) Panci aluminium (Al). Kelompok yang seluruhnya tergolong sebagai 'UNSUR' adalah...",
        options: [
          "(1) dan (2)",
          "(1) dan (4)",
          "(2) dan (3)",
          "(3) dan (4)"
        ],
        correctIndex: 1,
        explanation: "Emas (Au) dan Aluminium (Al) adalah unsur karena merupakan zat tunggal yang hanya tersusun dari satu jenis atom dan tidak dapat diuraikan lagi secara reaksi kimia biasa. Sebaliknya, garam dapur (NaCl) adalah senyawa, dan teh manis adalah campuran homogen."
      },
      {
        id: 4,
        question: "Seorang siswa mengamati beberapa peristiwa: (1) Es batu di atas piring meleleh menjadi air, (2) Besi pagar yang tidak dicat berubah kecokelatan dan keropos (berkarat), (3) Gula pasir dilarutkan ke dalam segelas air hangat, (4) Selembar kertas dibakar menjadi abu dan asap. Peristiwa yang tergolong ke dalam PERUBAHAN KIMIA adalah...",
        options: [
          "(1) dan (3)",
          "(1) dan (2)",
          "(2) dan (4)",
          "(3) dan (4)"
        ],
        correctIndex: 2,
        explanation: "Perubahan kimia menghasilkan zat baru yang sifatnya berbeda dari zat semula. Perkaratan besi (terbentuk oksida besi Fe₂O₃·xH₂O) dan pembakaran kertas (terbentuk abu karbon dan gas CO₂/H₂O) adalah perubahan kimia. Sedangkan es meleleh dan pelarutan gula adalah perubahan fisika karena tidak menghasilkan zat baru."
      },
      {
        id: 5,
        question: "Ketika es batu (H₂O) mencair menjadi air pada suhu ruang, representasi perubahan partikel yang sebenarnya terjadi adalah...",
        options: [
          "Molekul H₂O terurai menjadi gas hidrogen (H₂) dan gas oksigen (O₂).",
          "Partikel H₂O menyerap kalor dari lingkungan sehingga bergerak lebih lincah dan jarak antarpartikel sedikit meregang, namun identitas molekul tetap H₂O.",
          "Partikel es bertambah banyak jumlahnya karena menyerap udara di sekeliling piring.",
          "Ikatan kovalen antara atom hidrogen dan oksigen di dalam molekul terputus seluruhnya."
        ],
        correctIndex: 1,
        explanation: "Mencair adalah perubahan fisika. Es menyerap energi kalor dari lingkungan, menyebabkan getaran partikel H₂O semakin kuat hingga keluar dari kisi kristal padatnya menjadi cairan yang lebih bebas meluncur, tetapi struktur kimia molekulnya tetap berupa H₂O (tidak terjadi penguraian ikatan kovalen H-O)."
      }
    ]
  }
};

