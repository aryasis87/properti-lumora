'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

export default function Gallery({ foto = [], video, judul }) {
  const items = [...foto.map((src) => ({ type: 'img', src })), ...(video ? [{ type: 'video', src: video }] : [])];
  const [active, setActive] = useState(0);
  const cur = items[active] || items[0];

  return (
    <div>
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-sand shadow-sm">
        {cur.type === 'img'
          ? <Image src={cur.src} alt={judul} fill priority sizes="(max-width:1024px) 100vw, 70vw" className="object-cover" />
          : <video src={cur.src} controls className="h-full w-full object-cover" />}
      </div>
      {items.length > 1 && (
        <div className="mt-3 flex flex-wrap gap-3">
          {items.map((it, i) => (
            <button key={i} onClick={() => setActive(i)} aria-label={`Media ${i + 1}`} className={`relative h-20 w-28 overflow-hidden rounded-xl ring-2 transition ${i === active ? 'ring-forest' : 'ring-transparent hover:ring-forest/40'}`}>
              {it.type === 'img'
                ? <Image src={it.src} alt="" fill sizes="120px" className="object-cover" />
                : <span className="flex h-full w-full items-center justify-center gap-1 bg-forest text-xs font-semibold text-cream"><Play size={14} /> Video</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
