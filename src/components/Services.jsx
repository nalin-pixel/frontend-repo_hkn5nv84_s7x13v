import { Palette, Film, PenTool, LayoutGrid } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Identitas Visual',
    desc: 'Logo, palet warna, tipografi, dan sistem desain yang konsisten.',
  },
  {
    icon: Film,
    title: 'Animasi & Motion',
    desc: 'Animasi minimalis, clean transitions, dan intro/outro untuk brand.',
  },
  {
    icon: PenTool,
    title: 'Ilustrasi Gaya Jepang',
    desc: 'Ilustrasi monokrom dan aksen merah dengan komposisi yang presisi.',
  },
  {
    icon: LayoutGrid,
    title: 'Desain Konten Digital',
    desc: 'Poster, feed sosial, dan materi kampanye dengan grid rapi.',
  },
];

export default function Services() {
  return (
    <section id="layanan" className="mx-auto max-w-6xl px-6 py-16">
      <header className="mb-10 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-neutral-900 md:text-3xl">Layanan</h2>
          <p className="mt-2 text-neutral-600">Solusi seni digital yang fokus pada kejelasan dan fungsi.</p>
        </div>
        <div className="h-px flex-1 bg-neutral-200" />
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group rounded-xl border border-neutral-200 bg-white p-5 transition hover:shadow-sm">
            <div className="mb-4 inline-flex rounded-lg bg-red-50 p-3 text-red-600 ring-1 ring-red-100">
              <Icon size={22} />
            </div>
            <h3 className="text-lg font-medium text-neutral-900">{title}</h3>
            <p className="mt-2 text-sm text-neutral-600">{desc}</p>
            <div className="mt-4 h-0.5 w-0 bg-red-600 transition-all duration-300 group-hover:w-16" />
          </div>
        ))}
      </div>
    </section>
  );
}
