import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MapPin, BedDouble, Bath, Maximize, LandPlot, Layers, FileText, CalendarDays, Check, ArrowLeft, MessageCircle, Phone, ShieldCheck } from 'lucide-react';
import Gallery from '@/components/Gallery';
import PropertyCard from '@/components/PropertyCard';
import Reveal from '@/components/ui/Reveal';
import { properti, getProperti, propertiSerupa, formatHarga, waLink } from '@/lib/data';

export function generateStaticParams() {
  return properti.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const item = getProperti(id);
  return { title: item ? `${item.judul} — Lumora` : 'Properti — Lumora' };
}

export default async function DetailPage({ params }) {
  const { id } = await params;
  const item = getProperti(id);
  if (!item) notFound();

  const s = item.spesifikasi;
  const serupa = propertiSerupa(item);
  const pesan = `Halo ${item.agen.nama}, saya tertarik dengan "${item.judul}" (${formatHarga(item.harga)}) yang saya lihat di Lumora. Apakah masih tersedia?`;
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(`${item.lokasi.alamat}, ${item.lokasi.kota}`)}&output=embed`;

  const specs = [
    s.kamarTidur > 0 && { icon: BedDouble, label: 'Kamar Tidur', val: s.kamarTidur },
    s.kamarMandi > 0 && { icon: Bath, label: 'Kamar Mandi', val: s.kamarMandi },
    s.luasBangunan > 0 && { icon: Maximize, label: 'Luas Bangunan', val: `${s.luasBangunan} m²` },
    s.luasTanah > 0 && { icon: LandPlot, label: 'Luas Tanah', val: `${s.luasTanah} m²` },
    s.jumlahLantai > 0 && { icon: Layers, label: 'Jumlah Lantai', val: s.jumlahLantai },
    item.sertifikat && item.sertifikat !== '-' && { icon: FileText, label: 'Sertifikat', val: item.sertifikat },
    item.tahun && { icon: CalendarDays, label: 'Tahun', val: item.tahun },
  ].filter(Boolean);

  return (
    <main className="relative z-10">
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <Link href="/properti" className="inline-flex items-center gap-1 text-sm text-muted transition hover:text-forest"><ArrowLeft size={15} /> Kembali ke daftar</Link>
        <div className="mt-4 flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <span className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${item.status === 'Dijual' ? 'bg-forest' : 'bg-gold'}`}>{item.status}</span>
              <span className="text-xs font-semibold uppercase tracking-wide text-gold">{item.jenisProperti}</span>
            </div>
            <h1 className="mt-3 max-w-2xl font-display text-3xl leading-tight text-ink md:text-4xl">{item.judul}</h1>
            <p className="mt-2 flex items-center gap-1 text-muted"><MapPin size={16} /> {item.lokasi.alamat}, {item.lokasi.kecamatan}, {item.lokasi.kota}</p>
          </div>
          <div className="text-right">
            <p className="font-display text-3xl text-forest md:text-4xl">{formatHarga(item.harga)}</p>
            {item.status === 'Disewakan' && <p className="text-sm text-muted">harga sewa</p>}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <Gallery foto={item.media.foto} video={item.media.video} judul={item.judul} />
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 sm:px-6 lg:px-8 lg:grid-cols-[1fr_360px]">
        {/* Main */}
        <div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {specs.map((sp) => (
              <div key={sp.label} className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
                <sp.icon size={20} className="text-forest" />
                <p className="mt-2 text-xs text-muted">{sp.label}</p>
                <p className="font-display text-lg text-ink">{sp.val}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-10 font-display text-2xl text-ink">Deskripsi</h2>
          <p className="mt-3 leading-relaxed text-ink/80">{item.deskripsi}</p>

          <h2 className="mt-10 font-display text-2xl text-ink">Fasilitas</h2>
          <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {item.fasilitas.map((f) => (
              <li key={f} className="flex items-center gap-2 text-ink/80"><span className="grid h-6 w-6 place-items-center rounded-full bg-forest/10 text-forest"><Check size={14} /></span> {f}</li>
            ))}
          </ul>

          <h2 className="mt-10 font-display text-2xl text-ink">Lokasi</h2>
          <div className="mt-4 overflow-hidden rounded-2xl border border-black/5 shadow-sm">
            <iframe title="Peta lokasi" src={mapSrc} className="h-72 w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>

        {/* Sidebar agent */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            <p className="text-xs uppercase tracking-wide text-muted">Agen penanggung jawab</p>
            <div className="mt-3 flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-forest font-display text-lg text-cream">{item.agen.nama[0]}</span>
              <div>
                <p className="font-display text-lg text-ink">{item.agen.nama}</p>
                <p className="flex items-center gap-1 text-xs text-forest"><ShieldCheck size={13} /> Agen terverifikasi</p>
              </div>
            </div>
            <a href={waLink(item.agen.nomorHP, pesan)} target="_blank" rel="noopener noreferrer" className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-forest py-3 font-semibold text-cream transition hover:bg-forest-soft">
              <MessageCircle size={18} /> Hubungi via WhatsApp
            </a>
            <a href={`tel:${item.agen.nomorHP}`} className="mt-3 flex items-center justify-center gap-2 rounded-xl border border-black/10 py-3 font-semibold text-ink transition hover:border-forest hover:text-forest">
              <Phone size={16} /> {item.agen.nomorHP}
            </a>
            <p className="mt-4 text-center text-xs text-muted">Sebutkan kamu dari Lumora untuk respon lebih cepat.</p>
          </div>
        </aside>
      </div>

      {/* Serupa */}
      {serupa.length > 0 && (
        <section className="bg-sand/50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal><h2 className="font-display text-3xl text-ink">Properti serupa</h2></Reveal>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {serupa.map((p, i) => <Reveal key={p.id} delay={(i % 3) * 0.08}><PropertyCard item={p} /></Reveal>)}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
