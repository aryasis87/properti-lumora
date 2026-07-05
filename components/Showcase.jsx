'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { properti, formatHarga } from '@/lib/data';

export default function Showcase() {
  const slides = properti.filter((p) => p.featured).slice(0, 4);
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, [slides.length]);
  const cur = slides[i];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {slides.map((s, idx) => (
        <div key={s.id} className={`absolute inset-0 transition-opacity duration-[1200ms] ${idx === i ? 'opacity-100' : 'opacity-0'}`}>
          <Image src={s.media.foto[0]} alt="" fill priority={idx === 0} sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/45" />
        </div>
      ))}

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-between px-6 pb-12 pt-32 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">Koleksi {String(i + 1).padStart(2, '0')} — {String(slides.length).padStart(2, '0')}</p>
          <h1 className="mt-7 font-display text-6xl font-light italic leading-[0.95] text-white md:text-8xl">Ruang yang<br />langka.</h1>
        </div>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/60">{cur.jenisProperti} · {cur.lokasi.kota}</p>
            <Link href={`/properti/${cur.id}`} className="mt-1 block font-display text-2xl text-white transition hover:text-gold md:text-3xl">{cur.judul}</Link>
            <p className="mt-1 font-display text-xl text-gold">{formatHarga(cur.harga)}</p>
          </div>
          <div className="flex items-center gap-3">
            {slides.map((_, idx) => (
              <button key={idx} onClick={() => setI(idx)} aria-label={`Slide ${idx + 1}`} className={`h-1.5 rounded-full transition-all ${idx === i ? 'w-8 bg-gold' : 'w-3 bg-white/40'}`} />
            ))}
            <button onClick={() => setI((v) => (v - 1 + slides.length) % slides.length)} aria-label="Sebelumnya" className="ml-3 grid h-11 w-11 place-items-center rounded-full border border-white/30 text-white transition hover:bg-white hover:text-black"><ArrowLeft size={16} /></button>
            <button onClick={() => setI((v) => (v + 1) % slides.length)} aria-label="Berikutnya" className="grid h-11 w-11 place-items-center rounded-full border border-white/30 text-white transition hover:bg-white hover:text-black"><ArrowRight size={16} /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
