import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, BedDouble, Bath, Maximize, CalendarCheck, Phone } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import Showcase from '@/components/Showcase';
import { site, properti, formatHarga, waLink } from '@/lib/data';

export default function HomePage() {
  const koleksi = properti.slice(0, 8);

  return (
    <main className="relative z-10">
      {/* Full-screen showcase */}
      <Showcase />

      {/* Statement */}
      <section className="px-6 py-28 text-center sm:py-36">
        <Reveal className="mx-auto max-w-3xl">
          <span className="mx-auto mb-8 block h-px w-16 bg-gold" />
          <p className="font-display text-3xl font-light italic leading-snug text-ink md:text-4xl">
            Hunian langka untuk mereka yang menghargai ruang, cahaya, dan ketenangan.
          </p>
        </Reveal>
      </section>

      {/* Gallery */}
      <section className="px-6 pb-28 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <div className="mb-14 flex items-end justify-between border-b border-white/10 pb-6">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-gold">Koleksi</p>
                <h2 className="mt-3 font-display text-4xl font-light text-ink md:text-6xl">Properti pilihan</h2>
              </div>
              <Link href="/properti" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-ink transition hover:text-gold">Lihat semua <ArrowUpRight size={15} /></Link>
            </div>
          </Reveal>

          <div className="grid gap-x-10 gap-y-20 md:grid-cols-2">
            {koleksi.map((p, i) => (
              <Reveal key={p.id} delay={(i % 2) * 0.1}>
                <Link href={`/properti/${p.id}`} className={`group block ${i % 3 === 0 ? 'md:col-span-2' : ''}`}>
                  <div className={`relative overflow-hidden ${i % 3 === 0 ? 'aspect-[16/8]' : 'aspect-[4/3]'}`}>
                    <Image src={p.media.foto[0]} alt={p.judul} fill sizes={i % 3 === 0 ? '100vw' : '(max-width:768px) 100vw, 50vw'} className="object-cover transition duration-[900ms] group-hover:scale-[1.04]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                    <span className="absolute left-5 top-5 border border-gold/40 bg-black/40 px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-gold backdrop-blur">{p.status}</span>
                  </div>
                  <div className="mt-5 flex items-baseline justify-between gap-4">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-gold">{p.jenisProperti} · {p.lokasi.kota}</p>
                      <h3 className="mt-1.5 font-display text-2xl font-light text-ink transition group-hover:text-gold md:text-3xl">{p.judul}</h3>
                    </div>
                    <p className="shrink-0 font-display text-2xl text-gold">{formatHarga(p.harga)}</p>
                  </div>
                  <div className="mt-3 flex gap-6 border-t border-white/10 pt-3 text-sm text-ink/60">
                    {p.spesifikasi.kamarTidur > 0 && <span className="flex items-center gap-1.5"><BedDouble size={15} /> {p.spesifikasi.kamarTidur}</span>}
                    {p.spesifikasi.kamarMandi > 0 && <span className="flex items-center gap-1.5"><Bath size={15} /> {p.spesifikasi.kamarMandi}</span>}
                    <span className="flex items-center gap-1.5"><Maximize size={15} /> {p.spesifikasi.luasBangunan || p.spesifikasi.luasTanah} m²</span>
                    <span className="ml-auto flex items-center gap-1 text-ink transition group-hover:text-gold">Detail <ArrowUpRight size={14} /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Private enquiry */}
      <section className="px-6 py-28 text-center">
        <Reveal className="mx-auto max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold"><CalendarCheck size={15} /> Layanan Privat</span>
          <h2 className="mt-6 font-display text-4xl font-light leading-tight text-ink md:text-6xl">Atur kunjungan privat Anda</h2>
          <p className="mx-auto mt-5 max-w-md text-muted">Konselor properti kami siap mendampingi tur eksklusif ke hunian pilihan, sesuai waktu Anda.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a href={waLink(site.wa, 'Halo Lumora, saya ingin menjadwalkan kunjungan privat.')} target="_blank" rel="noopener noreferrer" className="bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-wide text-[#13100b] transition hover:bg-[#d8b876]">Hubungi Konselor</a>
            <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 border border-white/20 px-8 py-4 text-sm uppercase tracking-wide text-ink transition hover:border-gold hover:text-gold"><Phone size={15} /> {site.phone}</a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
