import Reveal from './ui/Reveal';

// Header halaman: pita forest + judul serif.
export default function PageHeader({ kicker, title, subtitle }) {
  return (
    <section className="relative z-10 bg-forest px-4 pt-28 pb-16 text-cream sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          {kicker && <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">{kicker}</p>}
          <h1 className="max-w-3xl font-display text-4xl leading-tight md:text-6xl">{title}</h1>
          {subtitle && <p className="mt-4 max-w-2xl text-cream/75">{subtitle}</p>}
        </Reveal>
      </div>
    </section>
  );
}
