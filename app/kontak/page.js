'use client';
import { useState } from 'react';
import { Mail, Phone, MapPin, Check, MessageCircle, Clock } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { site, waLink } from '@/lib/data';

export default function KontakPage() {
  const [form, setForm] = useState({ nama: '', email: '', telepon: '', pesan: '' });
  const [sent, setSent] = useState(false);
  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => { e.preventDefault(); if (!form.nama.trim() || !form.email.trim() || !form.pesan.trim()) return; setSent(true); };
  const field = 'w-full rounded-xl border border-black/10 bg-cream px-4 py-3 text-sm text-ink outline-none transition focus:border-forest';

  return (
    <main className="relative z-10">
      <PageHeader kicker="Kontak" title="Mari terhubung" subtitle="Ada pertanyaan, masukan, atau butuh bantuan menemukan properti? Tim kami siap membantu." />

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.3fr]">
          {/* Info */}
          <div className="space-y-4">
            <Info icon={MapPin} label="Alamat" value={site.address} />
            <Info icon={Phone} label="Telepon" value={site.phone} href={`tel:${site.phone.replace(/\s/g, '')}`} />
            <Info icon={Mail} label="Email" value={site.email} href={`mailto:${site.email}`} />
            <Info icon={Clock} label="Jam Operasional" value="Senin–Sabtu, 08.00–18.00 WIB" />
            <a href={waLink(site.wa, 'Halo Lumora, saya butuh bantuan.')} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-2xl bg-forest py-3.5 font-semibold text-cream transition hover:bg-forest-soft">
              <MessageCircle size={18} /> Chat WhatsApp
            </a>
          </div>

          {/* Form */}
          <div>
            {sent ? (
              <div className="rounded-3xl border border-black/5 bg-white p-10 text-center shadow-sm">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-forest text-cream"><Check size={28} /></div>
                <h2 className="mt-4 font-display text-2xl text-ink">Pesan terkirim!</h2>
                <p className="mt-1 text-muted">Terima kasih, {form.nama}. Tim kami akan menghubungimu di {form.email} secepatnya.</p>
                <button onClick={() => { setSent(false); setForm({ nama: '', email: '', telepon: '', pesan: '' }); }} className="mt-6 rounded-full border border-black/10 px-6 py-2.5 text-sm font-semibold text-ink transition hover:border-forest hover:text-forest">Kirim lagi</button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4 rounded-3xl border border-black/5 bg-white p-6 shadow-sm md:p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input name="nama" value={form.nama} onChange={handle} placeholder="Nama lengkap" required className={field} />
                  <input type="email" name="email" value={form.email} onChange={handle} placeholder="Email" required className={field} />
                </div>
                <input name="telepon" value={form.telepon} onChange={handle} placeholder="Nomor telepon (opsional)" className={field} />
                <textarea name="pesan" value={form.pesan} onChange={handle} placeholder="Tulis pesanmu…" rows={6} required className={`${field} resize-none`} />
                <button type="submit" className="w-full rounded-xl bg-forest py-3.5 font-semibold text-cream transition hover:bg-forest-soft">Kirim Pesan</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function Info({ icon: Icon, label, value, href }) {
  const inner = (
    <div className="flex items-start gap-4 rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition hover:border-forest/30">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-forest/10 text-forest"><Icon size={20} /></span>
      <div>
        <p className="text-xs uppercase tracking-wide text-muted">{label}</p>
        <p className="mt-0.5 font-semibold text-ink">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
