document.getElementById('btn-cari').addEventListener('click', () => {
  const kata = document.getElementById('input-kata').value.trim().toLowerCase();

  const kamus = {
    // Huruf A
    "ability": { inggris: "Ability", indonesia: "Kemampuan", jerman: "Fähigkeit", arab: "قدرة" },
    "able": { inggris: "Able", indonesia: "Mampu", jerman: "fähig", arab: "قادر" },
    "about": { inggris: "About", indonesia: "Tentang", jerman: "über", arab: "عن" },
    "above": { inggris: "Above", indonesia: "Di atas", jerman: "über", arab: "فوق" },
    "accept": { inggris: "Accept", indonesia: "Menerima", jerman: "akzeptieren", arab: "يقبل" },
    "accident": { inggris: "Accident", indonesia: "Kecelakaan", jerman: "Unfall", arab: "حادث" },
    "account": { inggris: "Account", indonesia: "Akun", jerman: "Konto", arab: "حساب" },
    "achieve": { inggris: "Achieve", indonesia: "Mencapai", jerman: "erreichen", arab: "يحقق" },
    "acknowledge": { inggris: "Acknowledge", indonesia: "Mengakui", jerman: "anerkennen", arab: "يعترف" },
    "across": { inggris: "Across", indonesia: "Melintasi", jerman: "über", arab: "عبر" },

    // Huruf B
    "baby": { inggris: "Baby", indonesia: "Bayi", jerman: "Baby", arab: "طفل" },
    "back": { inggris: "Back", indonesia: "Belakang, punggung", jerman: "Rücken", arab: "ظهر" },
    "bad": { inggris: "Bad", indonesia: "Buruk", jerman: "schlecht", arab: "سيئ" },
    "bag": { inggris: "Bag", indonesia: "Tas", jerman: "Tasche", arab: "حقيبة" },
    "bake": { inggris: "Bake", indonesia: "Memanggang", jerman: "backen", arab: "يخبز" },
    "balance": { inggris: "Balance", indonesia: "Keseimbangan", jerman: "Gleichgewicht", arab: "توازن" },
    "ball": { inggris: "Ball", indonesia: "Bola", jerman: "Ball", arab: "كرة" },
    "banana": { inggris: "Banana", indonesia: "Pisang", jerman: "Banane", arab: "موز" },

    // Huruf C
    "cab": { inggris: "Cab", indonesia: "Taksi", jerman: "Taxi", arab: "سيارة أجرة" },
    "cable": { inggris: "Cable", indonesia: "Kabel", jerman: "Kabel", arab: "كابل" },
    "cafe": { inggris: "Cafe", indonesia: "Kafe", jerman: "Café", arab: "مقهى" },
    "cake": { inggris: "Cake", indonesia: "Kue", jerman: "Kuchen", arab: "كعكة" },
    "calculate": { inggris: "Calculate", indonesia: "Menghitung", jerman: "berechnen", arab: "يحسب" },

    // Huruf D
    "dad": { inggris: "Dad", indonesia: "Ayah", jerman: "Vater", arab: "أب" },
    "daily": { inggris: "Daily", indonesia: "Harian", jerman: "täglich", arab: "يومي" },
    "damage": { inggris: "Damage", indonesia: "Kerusakan", jerman: "Schaden", arab: "ضرر" },
    "dance": { inggris: "Dance", indonesia: "Menari", jerman: "tanzen", arab: "يرقص" },
    "danger": { inggris: "Danger", indonesia: "Bahaya", jerman: "Gefahr", arab: "خطر" }, // ✅ Diperbaiki

    // Huruf E (dan seterusnya tidak perlu diubah)
    "each": { inggris: "Each", indonesia: "Setiap", jerman: "Jeder", arab: "كل" },
    "early": { inggris: "Early", indonesia: "Awal", jerman: "früh", arab: "مبكر" },
    "earth": { inggris: "Earth", indonesia: "Bumi", jerman: "Erde", arab: "الأرض" },
    "east": { inggris: "East", indonesia: "Timur", jerman: "Osten", arab: "الشرق" },
    "easy": { inggris: "Easy", indonesia: "Mudah", jerman: "einfach", arab: "سهل" },

  
    // Huruf F
    "face": { inggris: "Face", indonesia: "Wajah", jerman: "Gesicht", arab: "وجه" },
    "fact": { inggris: "Fact", indonesia: "Fakta", jerman: "Fakt", arab: "حقيقة" },
    "fail": { inggris: "Fail", indonesia: "Gagal", jerman: "scheitern", arab: "يفشل" },
    "fair": { inggris: "Fair", indonesia: "Adil", jerman: "fair", arab: "عادل" },
    "fall": { inggris: "Fall", indonesia: "Jatuh", jerman: "fallen", arab: "يسقط" },

    // Huruf G
    "game": { inggris: "Game", indonesia: "Permainan", jerman: "Spiel", arab: "لعبة" },
    "garden": { inggris: "Garden", indonesia: "Kebun", jerman: "Garten", arab: "حديقة" },
    "gas": { inggris: "Gas", indonesia: "Gas", jerman: "Gas", arab: "غاز" },
    "gate": { inggris: "Gate", indonesia: "Gerbang", jerman: "Tor", arab: "بوابة" },
    "get": { inggris: "Get", indonesia: "Mendapatkan", jerman: "bekommen", arab: "يحصل على" },

    // Huruf H
    "hair": { inggris: "Hair", indonesia: "Rambut", jerman: "Haar", arab: "شعر" },
    "half": { inggris: "Half", indonesia: "Setengah", jerman: "halb", arab: "نصف" },
    "hand": { inggris: "Hand", indonesia: "Tangan", jerman: "Hand", arab: "يد" },
    "happy": { inggris: "Happy", indonesia: "Bahagia", jerman: "glücklich", arab: "سعيد" },
    "hard": { inggris: "Hard", indonesia: "Keras", jerman: "hart", arab: "قاسي" },

    // Huruf I
    "ice": { inggris: "Ice", indonesia: "Es", jerman: "Eis", arab: "ثلج" },
    "idea": { inggris: "Idea", indonesia: "Ide", jerman: "Idee", arab: "فكرة" },
    "if": { inggris: "If", indonesia: "Jika", jerman: "wenn", arab: "إذا" },
    "important": { inggris: "Important", indonesia: "Penting", jerman: "wichtig", arab: "مهم" },
    "interesting": { inggris: "Interesting", indonesia: "Menarik", jerman: "interessant", arab: "مثير للاهتمام" },

    // Huruf J
    "job": { inggris: "Job", indonesia: "Pekerjaan", jerman: "Job", arab: "وظيفة" },
    "join": { inggris: "Join", indonesia: "Bergabung", jerman: "beitreten", arab: "ينضم" },
    "jump": { inggris: "Jump", indonesia: "Melompat", jerman: "springen", arab: "يقفز" },
    "just": { inggris: "Just", indonesia: "Baru saja", jerman: "gerade", arab: "فقط" },

    // Huruf K
    "keep": { inggris: "Keep", indonesia: "Menjaga", jerman: "behalten", arab: "يحافظ على" },
    "key": { inggris: "Key", indonesia: "Kunci", jerman: "Schlüssel", arab: "مفتاح" },
    "kick": { inggris: "Kick", indonesia: "Menendang", jerman: "treten", arab: "يركل" },
    "kind": { inggris: "Kind", indonesia: "Baik hati", jerman: "freundlich", arab: "طيب" },
    "kitchen": { inggris: "Kitchen", indonesia: "Dapur", jerman: "Küche", arab: "مطبخ" },

    // Huruf L
    "land": { inggris: "Land", indonesia: "Tanah", jerman: "Land", arab: "أرض" },
    "language": { inggris: "Language", indonesia: "Bahasa", jerman: "Sprache", arab: "لغة" },
    "large": { inggris: "Large", indonesia: "Besar", jerman: "groß", arab: "كبير" },
    "last": { inggris: "Last", indonesia: "Terakhir", jerman: "letzte", arab: "الأخير" },
    "late": { inggris: "Late", indonesia: "Terlambat", jerman: "spät", arab: "متأخر" },

    // Huruf M
    "machine": { inggris: "Machine", indonesia: "Mesin", jerman: "Maschine", arab: "آلة" },
    "make": { inggris: "Make", indonesia: "Membuat", jerman: "machen", arab: "يصنع" },
    "man": { inggris: "Man", indonesia: "Pria", jerman: "Mann", arab: "رجل" },
    "many": { inggris: "Many", indonesia: "Banyak", jerman: "viele", arab: "كثير" },
    "market": { inggris: "Market", indonesia: "Pasar", jerman: "Markt", arab: "سوق" },

    // Huruf N
    "name": { inggris: "Name", indonesia: "Nama", jerman: "Name", arab: "اسم" },
    "nation": { inggris: "Nation", indonesia: "Bangsa", jerman: "Nation", arab: "أمة" },
    "near": { inggris: "Near", indonesia: "Dekat", jerman: "nahe", arab: "قريب" },
    "necessary": { inggris: "Necessary", indonesia: "Perlu", jerman: "notwendig", arab: "ضروري" },
    "need": { inggris: "Need", indonesia: "Butuh", jerman: "brauchen", arab: "يحتاج" },

    // Huruf O
    "object": { inggris: "Object", indonesia: "Benda", jerman: "Objekt", arab: "شيء" },
    "observe": { inggris: "Observe", indonesia: "Mengamati", jerman: "beobachten", arab: "يراقب" },
    "obtain": { inggris: "Obtain", indonesia: "Mendapatkan", jerman: "erhalten", arab: "يحصل على" },
    "occur": { inggris: "Occur", indonesia: "Terjadi", jerman: "auftreten", arab: "يحدث" },
    "ocean": { inggris: "Ocean", indonesia: "Lautan", jerman: "Ozean", arab: "محيط" },

    // Huruf P
    "page": { inggris: "Page", indonesia: "Halaman", jerman: "Seite", arab: "صفحة" },
    "paint": { inggris: "Paint", indonesia: "Melukis", jerman: "malen", arab: "يرسم" },
    "pair": { inggris: "Pair", indonesia: "Pasangan", jerman: "Paar", arab: "زوج" },
    "paper": { inggris: "Paper", indonesia: "Kertas", jerman: "Papier", arab: "ورقة" },
    "parent": { inggris: "Parent", indonesia: "Orang tua", jerman: "Elternteil", arab: "والد" },

    // Huruf Q
    "quality": { inggris: "Quality", indonesia: "Kualitas", jerman: "Qualität", arab: "جودة" },
    "question": { inggris: "Question", indonesia: "Pertanyaan", jerman: "Frage", arab: "سؤال" },
    "quick": { inggris: "Quick", indonesia: "Cepat", jerman: "schnell", arab: "سريع" },
    "quiet": { inggris: "Quiet", indonesia: "Tenang", jerman: "ruhig", arab: "هادئ" },

    // Huruf R
    "rabbit": { inggris: "Rabbit", indonesia: "Kelinci", jerman: "Kaninchen", arab: "أرنب" },
    "race": { inggris: "Race", indonesia: "Balapan", jerman: "Rennen", arab: "سباق" },
    "radio": { inggris: "Radio", indonesia: "Radio", jerman: "Radio", arab: "راديو" },
    "rain": { inggris: "Rain", indonesia: "Hujan", jerman: "Regen", arab: "مطر" },
    "raise": { inggris: "Raise", indonesia: "Menaikkan", jerman: "erhöhen", arab: "يرفع" },

    // Huruf S
    "sad": { inggris: "Sad", indonesia: "Sedih", jerman: "traurig", arab: "حزين" },
    "safe": { inggris: "Safe", indonesia: "Aman", jerman: "sicher", arab: "آمن" },
    "salt": { inggris: "Salt", indonesia: "Garam", jerman: "Salz", arab: "ملح" },
    "same": { inggris: "Same", indonesia: "Sama", jerman: "gleich", arab: "نفس" },
    "sand": { inggris: "Sand", indonesia: "Pasir", jerman: "Sand", arab: "رمل" },

    // Huruf T
    "table": { inggris: "Table", indonesia: "Meja", jerman: "Tisch", arab: "طاولة" },
    "take": { inggris: "Take", indonesia: "Mengambil", jerman: "nehmen", arab: "يأخذ" },
    "talk": { inggris: "Talk", indonesia: "Berbicara", jerman: "sprechen", arab: "يتحدث" },
    "tall": { inggris: "Tall", indonesia: "Tinggi", jerman: "groß", arab: "طويل" },
    "teach": { inggris: "Teach", indonesia: "Mengajar", jerman: "lehren", arab: "يعلم" },

    // Huruf U
    "under": { inggris: "Under", indonesia: "Di bawah", jerman: "unter", arab: "تحت" },
    "understand": { inggris: "Understand", indonesia: "Mengerti", jerman: "verstehen", arab: "يفهم" },
    "unit": { inggris: "Unit", indonesia: "Unit", jerman: "Einheit", arab: "وحدة" },
    "use": { inggris: "Use", indonesia: "Menggunakan", jerman: "benutzen", arab: "يستخدم" },

    // Huruf V
    "value": { inggris: "Value", indonesia: "Nilai", jerman: "Wert", arab: "قيمة" },
    "visit": { inggris: "Visit", indonesia: "Mengunjungi", jerman: "besuchen", arab: "يزور" },
    "voice": { inggris: "Voice", indonesia: "Suara", jerman: "Stimme", arab: "صوت" },

    // Huruf W
    "wait": { inggris: "Wait", indonesia: "Menunggu", jerman: "warten", arab: "ينتظر" },
    "walk": { inggris: "Walk", indonesia: "Berjalan", jerman: "gehen", arab: "يمشي" },
    "want": { inggris: "Want", indonesia: "Ingin", jerman: "wollen", arab: "يريد" },
    "water": { inggris: "Water", indonesia: "Air", jerman: "Wasser", arab: "ماء" },
    "window": { inggris: "Window", indonesia: "Jendela", jerman: "Fenster", arab: "نافذة" },

    // Huruf X
    "x-ray": { inggris: "X-ray", indonesia: "Sinar-X", jerman: "Röntgen", arab: "أشعة سينية" },

    // Huruf Y
    "yard": { inggris: "Yard", indonesia: "Halaman", jerman: "Hof", arab: "فناء" },
    "year": { inggris: "Year", indonesia: "Tahun", jerman: "Jahr", arab: "سنة" },
    "yellow": { inggris: "Yellow", indonesia: "Kuning", jerman: "gelb", arab: "أصفر" },
    "yes": { inggris: "Yes", indonesia: "Ya", jerman: "Ja", arab: "نعم" },

    // Huruf Z
    "zero": { inggris: "Zero", indonesia: "Nol", jerman: "Null", arab: "صفر" },
    "zoo": { inggris: "Zoo", indonesia: "Kebun binatang", jerman: "Zoo", arab: "حديقة حيوانات" }
  };


  let teks;
  if (kamus[kata]) {
    teks = `Inggris: ${kamus[kata].inggris}\nIndonesia: ${kamus[kata].indonesia}\nJerman: ${kamus[kata].jerman}\nArab: ${kamus[kata].arab}`;
  } else {
    teks = "Maaf, kata tidak ditemukan.";
  }

  document.getElementById('hasil').value = teks;
});
