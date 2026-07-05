'use client';
import { useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import PropertyCard from '@/components/PropertyCard';
import { properti, statusList, jenisList, kotaList } from '@/lib/data';

const HARGA = [
  { label: 'Semua Harga', v: 'all' },
  { label: '< Rp 500 Jt', v: '5e8' },
  { label: '< Rp 1 M', v: '1e9' },
  { label: '< Rp 2 M', v: '2e9' },
  { label: '< Rp 5 M', v: '5e9' },
  { label: '≥ Rp 5 M', v: 'gt5e9' },
];
const KT = ['Semua', '1', '2', '3', '4'];
const SORT = [{ label: 'Terbaru', v: 'baru' }, { label: 'Harga Termurah', v: 'murah' }, { label: 'Harga Termahal', v: 'mahal' }];

export default function ListingsClient() {
  const sp = useSearchParams();
  const [q, setQ] = useState(sp.get('q') || '');
  const [status, setStatus] = useState(sp.get('status') || 'Semua');
  const [jenis, setJenis] = useState(sp.get('jenis') || 'Semua');
  const [kota, setKota] = useState(sp.get('kota') || 'Semua');
  const [harga, setHarga] = useState('all');
  const [kt, setKt] = useState('Semua');
  const [sort, setSort] = useState('baru');

  const reset = () => { setQ(''); setStatus('Semua'); setJenis('Semua'); setKota('Semua'); setHarga('all'); setKt('Semua'); setSort('baru'); };

  const list = useMemo(() => {
    let r = properti.filter((p) => {
      const text = `${p.judul} ${p.lokasi.kota} ${p.lokasi.kecamatan} ${p.jenisProperti}`.toLowerCase();
      if (q.trim() && !text.includes(q.trim().toLowerCase())) return false;
      if (status !== 'Semua' && p.status !== status) return false;
      if (jenis !== 'Semua' && p.jenisProperti !== jenis) return false;
      if (kota !== 'Semua' && p.lokasi.kota !== kota) return false;
      if (kt !== 'Semua' && p.spesifikasi.kamarTidur < Number(kt)) return false;
      if (harga !== 'all') {
        if (harga === 'gt5e9') { if (p.harga < 5e9) return false; }
        else if (p.harga >= Number(harga)) return false;
      }
      return true;
    });
    if (sort === 'murah') r = [...r].sort((a, b) => a.harga - b.harga);
    else if (sort === 'mahal') r = [...r].sort((a, b) => b.harga - a.harga);
    else r = [...r].sort((a, b) => b.id - a.id);
    return r;
  }, [q, status, jenis, kota, harga, kt, sort]);

  const sel = 'rounded-xl border border-black/10 bg-cream px-3 py-2.5 text-sm text-ink outline-none transition focus:border-forest';
  const active = q || status !== 'Semua' || jenis !== 'Semua' || kota !== 'Semua' || harga !== 'all' || kt !== 'Semua';

  return (
    <section className="relative z-10 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Filter bar */}
        <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-ink"><SlidersHorizontal size={16} /> Filter</div>
          <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-6">
            <div className="relative md:col-span-3 lg:col-span-2">
              <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari lokasi / kata kunci…" className={`${sel} w-full pl-9`} />
            </div>
            <select value={status} onChange={(e) => setStatus(e.target.value)} className={sel} aria-label="Status">{statusList.map((s) => <option key={s} value={s}>{s === 'Semua' ? 'Semua Status' : s}</option>)}</select>
            <select value={jenis} onChange={(e) => setJenis(e.target.value)} className={sel} aria-label="Jenis">{jenisList.map((j) => <option key={j} value={j}>{j === 'Semua' ? 'Semua Jenis' : j}</option>)}</select>
            <select value={kota} onChange={(e) => setKota(e.target.value)} className={sel} aria-label="Kota">{kotaList.map((k) => <option key={k} value={k}>{k === 'Semua' ? 'Semua Kota' : k}</option>)}</select>
            <select value={harga} onChange={(e) => setHarga(e.target.value)} className={sel} aria-label="Harga">{HARGA.map((h) => <option key={h.v} value={h.v}>{h.label}</option>)}</select>
            <select value={kt} onChange={(e) => setKt(e.target.value)} className={sel} aria-label="Kamar tidur">{KT.map((k) => <option key={k} value={k}>{k === 'Semua' ? 'Semua K. Tidur' : `${k}+ Kamar`}</option>)}</select>
          </div>
        </div>

        {/* Result header */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-muted"><span className="font-semibold text-ink">{list.length}</span> properti ditemukan{active && (
            <button onClick={reset} className="ml-3 inline-flex items-center gap-1 text-forest hover:underline"><X size={13} /> reset filter</button>
          )}</p>
          <label className="flex items-center gap-2 text-sm text-muted">Urutkan:
            <select value={sort} onChange={(e) => setSort(e.target.value)} className={sel}>{SORT.map((s) => <option key={s.v} value={s.v}>{s.label}</option>)}</select>
          </label>
        </div>

        {/* Grid */}
        <motion.div layout className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <motion.div key={p.id} layout initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: 0.25 }}>
                <PropertyCard item={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {list.length === 0 && (
          <div className="rounded-2xl border border-dashed border-black/15 bg-white/50 py-20 text-center">
            <p className="font-display text-2xl text-ink">Tidak ada properti yang cocok</p>
            <p className="mt-2 text-muted">Coba ubah atau reset filter pencarianmu.</p>
            <button onClick={reset} className="mt-5 rounded-full bg-forest px-6 py-2.5 text-sm font-semibold text-cream transition hover:bg-forest-soft">Reset filter</button>
          </div>
        )}
      </div>
    </section>
  );
}
