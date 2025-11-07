import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const fadeUp = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { type: 'spring', stiffness: 140, damping: 18 }
  };

  return (
    <section className="relative h-[90vh] w-full overflow-hidden" id="beranda">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/utrirTwDrFc8TLoE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Overlay sangat tipis agar teks terbaca, tidak menghalangi interaksi */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
        <div className="max-w-2xl">
          <motion.span
            {...fadeUp}
            className="inline-block rounded-full border border-red-500/30 bg-white/70 px-3 py-1 text-xs font-medium tracking-wide text-red-600"
          >
            Zarman Studio — Minimalis, Futuristik, Kartun
          </motion.span>

          <motion.h1
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.05 }}
            className="mt-4 text-4xl font-semibold leading-tight text-neutral-900 md:text-6xl"
          >
            Desain & Animasi
            <span className="text-red-600"> Ala Kartun Minimalis</span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="mt-4 text-neutral-600 md:text-lg"
          >
            Sentuhan kartun yang simpel, bersih, dan ekspresif. Identitas modern dengan nuansa Jepang—ramah, tegas, dan fokus pada esensi.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="#kontak"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-3 text-white transition-colors hover:bg-red-700"
            >
              Konsultasi Proyek
              <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="#karya"
              whileHover={{ y: -1 }}
              whileTap={{ y: 0 }}
              className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-5 py-3 text-neutral-800 transition-colors hover:border-neutral-300"
            >
              Lihat Karya
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
