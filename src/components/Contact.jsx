import { Mail, Phone, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="kontak" className="bg-red-600/5 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-neutral-900 md:text-3xl">Mulai Kolaborasi</h2>
            <p className="mt-2 text-neutral-700">
              Ceritakan kebutuhan Anda, kami bantu wujudkan visual yang presisi dan bermakna.
            </p>
          </div>
          <div className="h-px flex-1 bg-neutral-200" />
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          <a
            href="mailto:hello@zarmanstudio.com"
            className="group flex items-center gap-4 rounded-xl border border-neutral-200 bg-white p-5 transition hover:shadow-sm"
          >
            <span className="rounded-lg bg-red-50 p-3 text-red-600 ring-1 ring-red-100"><Mail size={20} /></span>
            <div>
              <p className="text-sm text-neutral-500">Email</p>
              <p className="font-medium text-neutral-900">hello@zarmanstudio.com</p>
            </div>
          </a>

          <a
            href="tel:+6281234567890"
            className="group flex items-center gap-4 rounded-xl border border-neutral-200 bg-white p-5 transition hover:shadow-sm"
          >
            <span className="rounded-lg bg-red-50 p-3 text-red-600 ring-1 ring-red-100"><Phone size={20} /></span>
            <div>
              <p className="text-sm text-neutral-500">Telepon</p>
              <p className="font-medium text-neutral-900">+62 812-3456-7890</p>
            </div>
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 rounded-xl border border-neutral-200 bg-white p-5 transition hover:shadow-sm"
          >
            <span className="rounded-lg bg-red-50 p-3 text-red-600 ring-1 ring-red-100"><Instagram size={20} /></span>
            <div>
              <p className="text-sm text-neutral-500">Instagram</p>
              <p className="font-medium text-neutral-900">@zarmanstudio</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
