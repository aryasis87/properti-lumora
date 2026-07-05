import Link from 'next/link';
import { House, MapPin, Phone, Mail } from 'lucide-react';
import { site, nav, kategori } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="relative z-10 bg-forest px-4 pt-16 pb-8 text-cream/80 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-cream text-forest"><House size={18} /></span>
              <span className="font-display text-2xl text-cream">Lumora</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">Marketplace properti tepercaya untuk menemukan, menjual, dan menyewa hunian impianmu di seluruh Indonesia.</p>
            <div className="mt-4 flex gap-3">
              {site.socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="rounded-full border border-cream/20 px-3 py-1 text-xs transition hover:bg-cream hover:text-forest">{s.label}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display text-lg text-cream">Navigasi</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.map((l) => <li key={l.href}><Link href={l.href} className="transition hover:text-cream">{l.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg text-cream">Kategori</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {kategori.slice(0, 5).map((k) => <li key={k.jenis}><Link href={`/properti?jenis=${k.jenis}`} className="transition hover:text-cream">{k.jenis}</Link></li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg text-cream">Kontak</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 shrink-0" /> {site.address}</li>
              <li className="flex items-center gap-2"><Phone size={16} /> {site.phone}</li>
              <li className="flex items-center gap-2"><Mail size={16} /> {site.email}</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-cream/15 pt-6 text-center text-sm text-cream/60">© {new Date().getFullYear()} {site.name}. Seluruh hak cipta dilindungi.</div>
      </div>
    </footer>
  );
}
