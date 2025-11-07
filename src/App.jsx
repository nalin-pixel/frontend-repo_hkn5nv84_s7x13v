import Hero from './components/Hero';
import Services from './components/Services';
import Showcase from './components/Showcase';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Effects from './components/Effects';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Effects />
      {/* Simple top bar */}
      <header className="sticky top-0 z-40 w-full border-b border-neutral-200 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#beranda" className="flex items-center gap-2 font-semibold tracking-wide">
            <span className="inline-block h-3 w-3 rounded-sm bg-red-600" />
            Zarman Studio
          </a>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#layanan" className="text-neutral-600 hover:text-neutral-900">Layanan</a>
            <a href="#karya" className="text-neutral-600 hover:text-neutral-900">Karya</a>
            <a href="#galeri" className="text-neutral-600 hover:text-neutral-900">Galeri</a>
            <a href="#kontak" className="text-neutral-600 hover:text-neutral-900">Kontak</a>
          </nav>
          <a
            href="#kontak"
            className="hidden rounded-full bg-red-600 px-4 py-2 text-sm text-white transition hover:bg-red-700 md:inline-block"
          >
            Konsultasi
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <div data-parallax="30"><Services /></div>
        <div data-parallax="24"><Showcase /></div>
        <Gallery />
        <Contact />
      </main>

      <footer className="border-t border-neutral-200 bg-white py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-sm text-neutral-600">© {new Date().getFullYear()} Zarman Studio. Semua hak dilindungi.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#beranda" className="text-neutral-600 hover:text-neutral-900">Beranda</a>
            <a href="#layanan" className="text-neutral-600 hover:text-neutral-900">Layanan</a>
            <a href="#karya" className="text-neutral-600 hover:text-neutral-900">Karya</a>
            <a href="#galeri" className="text-neutral-600 hover:text-neutral-900">Galeri</a>
            <a href="#kontak" className="text-neutral-600 hover:text-neutral-900">Kontak</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
