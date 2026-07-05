import { Suspense } from 'react';
import PageHeader from '@/components/PageHeader';
import ListingsClient from '@/components/ListingsClient';

export const metadata = { title: 'Properti — Lumora' };

export default function PropertiPage() {
  return (
    <main>
      <PageHeader kicker="Katalog" title="Jelajahi properti" subtitle="Saring berdasarkan status, jenis, kota, harga, dan jumlah kamar untuk menemukan yang paling pas." />
      <Suspense fallback={<div className="px-6 py-20 text-center text-muted">Memuat…</div>}>
        <ListingsClient />
      </Suspense>
    </main>
  );
}
