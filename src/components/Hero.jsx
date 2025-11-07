import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden" id="beranda">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Overlay lembut untuk kontras teks (tidak menghalangi interaksi) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/90" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full border border-red-500/30 bg-white/70 px-3 py-1 text-xs font-medium tracking-wide text-red-600">
            Zarman Studio — Seni Digital Minimalis
          </span>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-neutral-900 md:text-6xl">
            Desain Grafis & Animasi
            <span className="text-red-600"> Bergaya Jepang</span>
          </h1>
          <p className="mt-4 text-neutral-600 md:text-lg">
            Visual yang bersih, presisi, dan bermakna. Estetika Jepang dengan sentuhan modern untuk brand yang ingin tampil rapi dan berkarakter.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#kontak"
              className="inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-3 text-white transition-colors hover:bg-red-700"
            >
              Konsultasi Proyek
              <ArrowRight size={18} />
            </a>
            <a
              href="#karya"
              className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-5 py-3 text-neutral-800 transition-colors hover:border-neutral-300"
            >
              Lihat Karya
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
