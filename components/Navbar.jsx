'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Search, Menu, X } from 'lucide-react';
import { nav, site, waLink } from '@/lib/data';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    h();
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  const go = (e) => { e.preventDefault(); router.push('/properti' + (q.trim() ? `?q=${encodeURIComponent(q.trim())}` : '')); };
  const active = (href) => (href === '/' ? pathname === '/' : !!pathname && pathname.startsWith(href));

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'border-b border-white/10 bg-[#0d0b07]/90 py-3 backdrop-blur-xl' : 'py-5'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 lg:px-10">
        <Link href="/" className="font-display text-2xl tracking-wide text-white">Lumora</Link>

        <div className="hidden flex-1 justify-center md:flex">
          {scrolled ? (
            <form onSubmit={go} className="flex w-full max-w-md items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2">
              <Search size={15} className="text-gold" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari lokasi atau properti…" className="w-full bg-transparent text-sm text-white placeholder-white/40 outline-none" />
            </form>
          ) : (
            <nav className="flex gap-9 text-sm tracking-wide">
              {nav.map((l) => <Link key={l.href} href={l.href} className={active(l.href) ? 'text-gold' : 'text-white/80 transition hover:text-white'}>{l.label}</Link>)}
            </nav>
          )}
        </div>

        <a href={waLink(site.wa, 'Halo Lumora, saya tertarik dengan koleksi properti.')} target="_blank" rel="noopener noreferrer" className="hidden rounded-full border border-gold/50 px-5 py-2 text-sm text-gold transition hover:bg-gold hover:text-black md:block">Pasang Iklan</a>

        <button className="text-white md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#0d0b07] px-6 py-4 md:hidden">
          {nav.map((l) => <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className={`block py-2 text-sm ${active(l.href) ? 'text-gold' : 'text-white/80'}`}>{l.label}</Link>)}
        </div>
      )}
    </header>
  );
}
