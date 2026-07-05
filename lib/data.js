// Konten terpusat Lumora — marketplace properti.
export const site = {
  name: 'Lumora',
  tagline: 'Temukan rumah impianmu',
  phone: '+62 811 2000 300',
  wa: '628112000300',
  email: 'halo@propertia.id',
  address: 'Jl. Jenderal Sudirman Kav. 52, Jakarta Selatan',
  socials: [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'Facebook', href: 'https://facebook.com' },
    { label: 'TikTok', href: 'https://tiktok.com' },
    { label: 'YouTube', href: 'https://youtube.com' },
  ],
};

export const nav = [
  { label: 'Beranda', href: '/' },
  { label: 'Properti', href: '/properti' },
  { label: 'Tentang', href: '/tentang' },
  { label: 'Kontak', href: '/kontak' },
];

export function formatHarga(n) {
  if (n >= 1e9) return 'Rp ' + (n / 1e9).toLocaleString('id-ID', { maximumFractionDigits: 1 }) + ' M';
  if (n >= 1e6) return 'Rp ' + (n / 1e6).toLocaleString('id-ID', { maximumFractionDigits: 0 }) + ' Jt';
  return 'Rp ' + n.toLocaleString('id-ID');
}

export function waLink(nomor, pesan = '') {
  const num = String(nomor).replace(/\D/g, '').replace(/^0/, '62');
  return `https://wa.me/${num}${pesan ? `?text=${encodeURIComponent(pesan)}` : ''}`;
}

export const stats = [
  { value: '12.500+', label: 'Properti terdaftar' },
  { value: '8.300+', label: 'Keluarga terbantu' },
  { value: '120', label: 'Kota di Indonesia' },
  { value: '450+', label: 'Agen tepercaya' },
];

export const kategori = [
  { jenis: 'Rumah', icon: 'Home' },
  { jenis: 'Apartemen', icon: 'Building2' },
  { jenis: 'Ruko', icon: 'Store' },
  { jenis: 'Tanah', icon: 'Trees' },
  { jenis: 'Villa', icon: 'Palmtree' },
  { jenis: 'Kost', icon: 'BedDouble' },
  { jenis: 'Gudang', icon: 'Warehouse' },
];

export const properti = [
  {
    id: 1, judul: 'Rumah Mewah 2 Lantai Siap Huni di BSD City', jenisProperti: 'Rumah', status: 'Dijual', harga: 2500000000, featured: true,
    spesifikasi: { luasTanah: 200, luasBangunan: 180, kamarTidur: 4, kamarMandi: 3, jumlahLantai: 2 },
    lokasi: { alamat: 'Jl. Boulevard BSD No. 10', kota: 'Tangerang Selatan', kecamatan: 'Serpong' },
    agen: { nama: 'Budi Santoso', nomorHP: '081234567890' },
    media: { foto: ['/images/rm4.jpg', '/images/rm1.jpg', '/images/rm2.jpg'], video: '/videos/rm1.mp4' },
    sertifikat: 'SHM', tahun: 2021,
    deskripsi: 'Hunian modern di kawasan premium BSD City. Desain kontemporer dengan pencahayaan alami melimpah, dekat sekolah internasional, mall, dan akses tol.',
    fasilitas: ['Carport 2 Mobil', 'Taman Pribadi', 'Keamanan 24 Jam', 'Dekat Tol', 'Air PAM', 'Listrik 4400W'],
  },
  {
    id: 2, judul: 'Apartemen Fully Furnished di Jakarta Selatan', jenisProperti: 'Apartemen', status: 'Disewakan', harga: 75000000, featured: true,
    spesifikasi: { luasTanah: 0, luasBangunan: 45, kamarTidur: 2, kamarMandi: 1, jumlahLantai: 1 },
    lokasi: { alamat: 'Jl. Sudirman No. 20', kota: 'Jakarta Selatan', kecamatan: 'Setiabudi' },
    agen: { nama: 'Siti Aisyah', nomorHP: '089876543210' },
    media: { foto: ['/images/rm5.jpg', '/images/rm3.jpg'], video: null },
    sertifikat: 'Strata Title', tahun: 2019,
    deskripsi: 'Unit fully furnished di jantung Jakarta. Cocok untuk profesional muda — tinggal bawa koper. Akses MRT, perkantoran, dan pusat kuliner dalam jangkauan kaki.',
    fasilitas: ['Kolam Renang', 'Gym', 'Akses MRT', 'Furnished', 'Parkir', 'Keamanan 24 Jam'],
  },
  {
    id: 3, judul: 'Ruko 3 Lantai Strategis di Pusat Kota Bandung', jenisProperti: 'Ruko', status: 'Dijual', harga: 1800000000, featured: true,
    spesifikasi: { luasTanah: 150, luasBangunan: 300, kamarTidur: 0, kamarMandi: 2, jumlahLantai: 3 },
    lokasi: { alamat: 'Jl. Asia Afrika No. 15', kota: 'Bandung', kecamatan: 'Lengkong' },
    agen: { nama: 'Andi Wijaya', nomorHP: '081312345678' },
    media: { foto: ['/images/rm6.jpg', '/images/rm2.jpg'], video: null },
    sertifikat: 'SHM', tahun: 2018,
    deskripsi: 'Ruko sudut di jalan utama dengan lalu lintas tinggi — ideal untuk kantor, kafe, atau showroom. Tampak depan lebar dan parkir luas.',
    fasilitas: ['Hook / Sudut', 'Parkir Luas', 'Jalan Utama', 'Listrik 5500W', 'Rolling Door'],
  },
  {
    id: 4, judul: 'Tanah Kavling Siap Bangun di Bogor', jenisProperti: 'Tanah', status: 'Dijual', harga: 500000000, featured: false,
    spesifikasi: { luasTanah: 500, luasBangunan: 0, kamarTidur: 0, kamarMandi: 0, jumlahLantai: 0 },
    lokasi: { alamat: 'Jl. Raya Puncak No. 45', kota: 'Bogor', kecamatan: 'Cisarua' },
    agen: { nama: 'Dewi Lestari', nomorHP: '082134567890' },
    media: { foto: ['/images/rm7.jpg'], video: null },
    sertifikat: 'SHM', tahun: null,
    deskripsi: 'Kavling dataran tinggi dengan udara sejuk dan pemandangan pegunungan — cocok untuk villa atau investasi jangka panjang.',
    fasilitas: ['Pemandangan Gunung', 'Udara Sejuk', 'Akses Mobil', 'Bebas Banjir'],
  },
  {
    id: 5, judul: 'Villa Mewah Tepi Pantai di Bali', jenisProperti: 'Villa', status: 'Dijual', harga: 7500000000, featured: true,
    spesifikasi: { luasTanah: 600, luasBangunan: 400, kamarTidur: 5, kamarMandi: 4, jumlahLantai: 2 },
    lokasi: { alamat: 'Jl. Sunset Road No. 30', kota: 'Denpasar', kecamatan: 'Kuta' },
    agen: { nama: 'Rizky Pratama', nomorHP: '083812345678' },
    media: { foto: ['/images/rm8.jpg', '/images/rm9.jpg', '/images/rm1.jpg'], video: '/videos/rm2.mp4' },
    sertifikat: 'SHM', tahun: 2022,
    deskripsi: 'Villa eksklusif dengan private pool menghadap matahari terbenam. Potensi sewa harian tinggi — investasi properti sekaligus tempat berlibur.',
    fasilitas: ['Private Pool', 'Tepi Pantai', 'Furnished Mewah', 'Smart Home', 'Garden', 'Staff Quarter'],
  },
  {
    id: 6, judul: 'Rumah Cluster Minimalis di Surabaya', jenisProperti: 'Rumah', status: 'Dijual', harga: 1200000000, featured: false,
    spesifikasi: { luasTanah: 120, luasBangunan: 100, kamarTidur: 3, kamarMandi: 2, jumlahLantai: 2 },
    lokasi: { alamat: 'Jl. MERR No. 88', kota: 'Surabaya', kecamatan: 'Rungkut' },
    agen: { nama: 'Lina Hartono', nomorHP: '085678901234' },
    media: { foto: ['/images/rm9.jpg', '/images/rm3.jpg'], video: null },
    sertifikat: 'SHM', tahun: 2020,
    deskripsi: 'Rumah cluster dalam komunitas one-gate system yang aman dan asri. Dekat akses MERR, kampus, dan pusat perbelanjaan.',
    fasilitas: ['One Gate System', 'Carport', 'Dekat Kampus', 'Keamanan 24 Jam', 'Taman'],
  },
  {
    id: 7, judul: 'Kost Eksklusif Dekat Kampus UGM Yogyakarta', jenisProperti: 'Kost', status: 'Disewakan', harga: 2500000, featured: false,
    spesifikasi: { luasTanah: 0, luasBangunan: 20, kamarTidur: 1, kamarMandi: 1, jumlahLantai: 1 },
    lokasi: { alamat: 'Jl. Kaliurang Km 5', kota: 'Yogyakarta', kecamatan: 'Depok' },
    agen: { nama: 'Agus Wibowo', nomorHP: '081223344556' },
    media: { foto: ['/images/rm2.jpg', '/images/rm5.jpg'], video: null },
    sertifikat: '-', tahun: 2021,
    deskripsi: 'Kamar kost eksklusif dengan kamar mandi dalam, AC, dan WiFi cepat. Lingkungan tenang, strategis untuk mahasiswa dan pekerja.',
    fasilitas: ['Kamar Mandi Dalam', 'AC', 'WiFi', 'Dekat Kampus', 'Dapur Bersama', 'Laundry'],
  },
  {
    id: 8, judul: 'Gudang Luas di Kawasan Industri Cikarang', jenisProperti: 'Gudang', status: 'Dijual', harga: 5000000000, featured: false,
    spesifikasi: { luasTanah: 1000, luasBangunan: 800, kamarTidur: 0, kamarMandi: 2, jumlahLantai: 1 },
    lokasi: { alamat: 'Jl. Industri No. 7', kota: 'Bekasi', kecamatan: 'Cikarang' },
    agen: { nama: 'Hendro Saputra', nomorHP: '087777888999' },
    media: { foto: ['/images/rm6.jpg', '/images/rm7.jpg'], video: null },
    sertifikat: 'HGB', tahun: 2017,
    deskripsi: 'Gudang dengan akses kontainer dan plafon tinggi di kawasan industri strategis. Dekat tol dan pelabuhan, ideal untuk logistik & manufaktur.',
    fasilitas: ['Akses Kontainer', 'Plafon Tinggi', 'Dekat Tol', 'Listrik 23kVA', 'Loading Dock'],
  },
  {
    id: 9, judul: 'Rumah Klasik Modern di Menteng Jakarta Pusat', jenisProperti: 'Rumah', status: 'Dijual', harga: 9800000000, featured: true,
    spesifikasi: { luasTanah: 350, luasBangunan: 400, kamarTidur: 5, kamarMandi: 4, jumlahLantai: 2 },
    lokasi: { alamat: 'Jl. Cik Ditiro No. 5', kota: 'Jakarta Pusat', kecamatan: 'Menteng' },
    agen: { nama: 'Maya Anggraini', nomorHP: '081298765432' },
    media: { foto: ['/images/rm1.jpg', '/images/rm8.jpg', '/images/rm4.jpg'], video: null },
    sertifikat: 'SHM', tahun: 2016,
    deskripsi: 'Hunian prestisius di kawasan elite Menteng. Memadukan arsitektur klasik dengan interior modern, halaman luas, dan lokasi tenang namun sentral.',
    fasilitas: ['Halaman Luas', 'Garasi 3 Mobil', 'Kawasan Elite', 'Sumur + PAM', 'Keamanan 24 Jam'],
  },
  {
    id: 10, judul: 'Apartemen Studio Cozy di Bandung', jenisProperti: 'Apartemen', status: 'Disewakan', harga: 36000000, featured: false,
    spesifikasi: { luasTanah: 0, luasBangunan: 28, kamarTidur: 1, kamarMandi: 1, jumlahLantai: 1 },
    lokasi: { alamat: 'Jl. Dago No. 100', kota: 'Bandung', kecamatan: 'Coblong' },
    agen: { nama: 'Fajar Nugroho', nomorHP: '081377788899' },
    media: { foto: ['/images/rm3.jpg', '/images/rm9.jpg'], video: null },
    sertifikat: 'Strata Title', tahun: 2020,
    deskripsi: 'Studio nyaman dengan pemandangan kota, dekat kawasan Dago yang penuh kafe dan factory outlet. Cocok untuk mahasiswa atau pasangan muda.',
    fasilitas: ['Furnished', 'City View', 'Kolam Renang', 'Dekat Kafe', 'WiFi', 'Parkir'],
  },
];

export const jenisList = ['Semua', ...Array.from(new Set(properti.map((p) => p.jenisProperti)))];
export const statusList = ['Semua', 'Dijual', 'Disewakan'];
export const kotaList = ['Semua', ...Array.from(new Set(properti.map((p) => p.lokasi.kota)))];

export const services = [
  { icon: 'Search', title: 'Cari & Beli', desc: 'Ribuan listing terverifikasi dengan filter cerdas untuk menemukan properti yang pas.' },
  { icon: 'Tag', title: 'Jual Properti', desc: 'Pasang iklan gratis dan jangkau ribuan calon pembeli serius setiap hari.' },
  { icon: 'KeyRound', title: 'Sewa Hunian', desc: 'Rumah, apartemen, hingga kost — sewa mudah, transparan, tanpa ribet.' },
  { icon: 'Landmark', title: 'Simulasi KPR', desc: 'Hitung cicilan dan dapatkan rekomendasi bank partner dengan bunga terbaik.' },
  { icon: 'UserCheck', title: 'Agen Tepercaya', desc: 'Didampingi agen profesional bersertifikat di setiap langkah transaksi.' },
  { icon: 'ShieldCheck', title: 'Transaksi Aman', desc: 'Legalitas dicek, dokumen dibantu, pembayaran terlindungi sampai akad.' },
];

export const keunggulan = [
  { title: 'Listing Terverifikasi', desc: 'Setiap properti dicek tim kami agar foto & data sesuai kenyataan.' },
  { title: 'Tanpa Biaya Tersembunyi', desc: 'Harga transparan sejak awal — tidak ada kejutan di belakang.' },
  { title: 'Respon Cepat', desc: 'Terhubung langsung ke agen via WhatsApp dalam hitungan menit.' },
];

export const testimonials = [
  { nama: 'Rina & Doni', peran: 'Pembeli Rumah, BSD', quote: 'Prosesnya gampang banget. Dari cari, survei, sampai akad dibantu agen Lumora. Dapat rumah impian tanpa stres!' },
  { nama: 'Pak Hendra', peran: 'Investor Properti', quote: 'Listing-nya rapi dan terpercaya. Saya sudah beli 2 ruko lewat Lumora, semuanya lancar dan transparan.' },
  { nama: 'Sarah', peran: 'Penyewa Apartemen', quote: 'Cari apartemen sewa jadi cepat. Filternya detail, langsung chat agen via WA, sehari langsung deal.' },
];

export const faqs = [
  { q: 'Apakah memasang iklan properti berbayar?', a: 'Pasang iklan dasar gratis. Tersedia paket premium untuk listing yang ingin tampil lebih menonjol dan menjangkau lebih banyak pembeli.' },
  { q: 'Bagaimana memastikan listing aman & asli?', a: 'Setiap properti melewati verifikasi data dan foto oleh tim kami. Kamu juga didampingi agen bersertifikat saat survei dan transaksi.' },
  { q: 'Apakah bisa simulasi KPR?', a: 'Bisa. Kami menyediakan kalkulator cicilan dan rekomendasi bank partner dengan penawaran bunga terbaik sesuai profilmu.' },
  { q: 'Bagaimana cara menghubungi agen?', a: 'Di setiap halaman properti ada tombol "Hubungi via WhatsApp" yang langsung menghubungkanmu ke agen penanggung jawab listing tersebut.' },
  { q: 'Apakah Lumora melayani luar Jakarta?', a: 'Ya. Kami hadir di 120+ kota di seluruh Indonesia, dari Sumatra hingga Bali dan sekitarnya.' },
];

export const getProperti = (id) => properti.find((p) => String(p.id) === String(id));
export const propertiSerupa = (item, n = 3) =>
  properti.filter((p) => p.id !== item.id && p.jenisProperti === item.jenisProperti).slice(0, n);
