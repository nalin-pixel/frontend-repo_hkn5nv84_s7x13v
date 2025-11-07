import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const items = [
  {
    tag: 'Branding',
    title: 'Kyoto Kōhī',
    img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1640&auto=format&fit=crop',
  },
  {
    tag: 'Animasi',
    title: 'Transit Lines',
    img: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1640&auto=format&fit=crop',
  },
  {
    tag: 'Ilustrasi',
    title: 'Wabi-Sabi Forms',
    img: 'https://images.unsplash.com/photo-1529336953121-4fdc34a67efb?q=80&w=1640&auto=format&fit=crop',
  },
  {
    tag: 'Konten',
    title: 'Grid Campaign',
    img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1640&auto=format&fit=crop',
  },
];

export default function Showcase() {
  const [active, setActive] = useState(0);

  return (
    <section id="karya" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-neutral-900 md:text-3xl">Karya Terpilih</h2>
            <p className="mt-2 text-neutral-600">Cuplikan proyek dengan komposisi rapi dan aksen merah.</p>
          </div>
          <div className="h-px flex-1 bg-neutral-200" />
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3">
            {items.map((it, idx) => (
              <button
                key={it.title}
                onClick={() => setActive(idx)}
                className={`flex w-full items-start justify-between rounded-xl border p-4 text-left transition ${
                  active === idx
                    ? 'border-red-300 bg-red-50'
                    : 'border-neutral-200 bg-white hover:bg-neutral-50'
                }`}
              >
                <div>
                  <span className={`text-xs ${active === idx ? 'text-red-600' : 'text-neutral-500'}`}>{it.tag}</span>
                  <h3 className="text-lg font-medium text-neutral-900">{it.title}</h3>
                </div>
                <div className={`mt-1 h-2 w-2 rounded-full ${active === idx ? 'bg-red-600' : 'bg-neutral-300'}`} />
              </button>
            ))}
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-neutral-200">
            <AnimatePresence mode="wait">
              <motion.img
                key={items[active].img}
                alt={items[active].title}
                src={items[active].img}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
