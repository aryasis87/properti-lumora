import Image from 'next/image';
import Link from 'next/link';
import { BedDouble, Bath, Maximize, MapPin } from 'lucide-react';
import { formatHarga } from '@/lib/data';

export default function PropertyCard({ item }) {
  const s = item.spesifikasi;
  const luas = s.luasBangunan || s.luasTanah;
  return (
    <Link href={`/properti/${item.id}`} className="group block overflow-hidden rounded-lg border border-white/10 bg-sand transition duration-300 hover:-translate-y-1 hover:border-gold/50">
      <div className="relative h-60 overflow-hidden">
        <Image src={item.media.foto[0]} alt={item.judul} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <span className="absolute left-4 top-4 rounded-sm border border-gold/50 bg-black/50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-gold backdrop-blur">{item.status}</span>
      </div>
      <div className="p-5">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-gold">{item.jenisProperti}</p>
        <h3 className="mt-1.5 line-clamp-2 font-display text-2xl leading-tight text-ink">{item.judul}</h3>
        <p className="mt-2 flex items-center gap-1 text-sm text-muted"><MapPin size={14} /> {item.lokasi.kecamatan}, {item.lokasi.kota}</p>
        <div className="mt-4 flex items-center gap-4 border-t border-white/10 pt-3 text-sm text-ink/70">
          {s.kamarTidur > 0 && <span className="flex items-center gap-1"><BedDouble size={15} /> {s.kamarTidur}</span>}
          {s.kamarMandi > 0 && <span className="flex items-center gap-1"><Bath size={15} /> {s.kamarMandi}</span>}
          <span className="flex items-center gap-1"><Maximize size={15} /> {luas} m²</span>
        </div>
        <p className="mt-3 font-display text-2xl text-gold">{formatHarga(item.harga)}</p>
      </div>
    </Link>
  );
}
