import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, HeartHandshake, Sparkles, ArrowRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/ui/Reveal';
import { stats, keunggulan } from '@/lib/data';

export const metadata = { title: 'Tentang — Lumora' };

const nilai = [
  { icon: ShieldCheck, title: 'Tepercaya', desc: 'Legalitas dan data setiap listing kami verifikasi demi ketenanganmu.' },
  { icon: HeartHandshake, title: 'Berpihak pada Klien', desc: 'Kepentinganmu yang utama — dari konsultasi hingga serah terima kunci.' },
  { icon: Sparkles, title: 'Berorientasi Kualitas', desc: 'Pengalaman mencari properti yang rapi, modern, dan menyenangkan.' },
];

export default function TentangPage() {
  return (
    <main className="relative z-10">
      <PageHeader kicker="Tentang Kami" title="Membantu setiap orang menemukan tempat pulang" subtitle="Lumora hadir untuk membuat proses jual, beli, dan sewa properti di Indonesia menjadi mudah, transparan, dan tepercaya." />

      {/* Story */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
              <Image src="/images/rm5.jpg" alt="Tentang Lumora" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Cerita kami</p>
            <h2 className="mt-2 font-display text-3xl text-ink md:text-4xl">Dari sebuah masalah sederhana</h2>
            <div className="mt-5 space-y-4 leading-relaxed text-ink/80">
              <p>Mencari properti seharusnya tidak membingungkan. Terlalu banyak listing palsu, harga tidak transparan, dan proses yang berbelit membuat banyak orang lelah sebelum menemukan rumah yang tepat.</p>
              <p>Lumora dibangun untuk mengubah itu — menghadirkan listing terverifikasi, harga yang jujur, dan agen profesional yang benar-benar mendampingi. Kini ribuan keluarga telah menemukan hunian impian mereka bersama kami.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="px-4 pb-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-black/5 bg-black/5 shadow-sm md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white px-6 py-8 text-center">
              <p className="font-display text-3xl text-forest md:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Nilai */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="text-center"><h2 className="font-display text-3xl text-ink md:text-4xl">Nilai yang kami pegang</h2></Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {nilai.map((n, i) => (
              <Reveal key={n.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-black/5 bg-white p-7 text-center shadow-sm">
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-forest/10 text-forest"><n.icon size={26} /></span>
                  <h3 className="mt-4 font-display text-xl text-ink">{n.title}</h3>
                  <p className="mt-2 text-muted">{n.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-7xl">
          <div className="rounded-3xl bg-forest px-8 py-14 text-center text-cream">
            <h2 className="mx-auto max-w-2xl font-display text-3xl md:text-4xl">Mulai perjalanan propertimu hari ini</h2>
            <Link href="/properti" className="mt-7 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3 font-semibold text-ink transition hover:opacity-90">Jelajahi Properti <ArrowRight size={16} /></Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
