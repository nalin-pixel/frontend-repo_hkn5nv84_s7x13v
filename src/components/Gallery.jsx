import { useCallback, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, UploadCloud, Trash2 } from 'lucide-react';

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef(null);

  const onFiles = useCallback((files) => {
    const picked = Array.from(files).filter((f) => f.type.startsWith('image/'));
    const mapped = picked.map((file) => ({
      id: `${file.name}-${file.size}-${file.lastModified}-${Math.random().toString(36).slice(2, 7)}`,
      name: file.name,
      src: URL.createObjectURL(file),
      size: file.size,
    }));
    setImages((prev) => [...mapped, ...prev]);
  }, []);

  const onDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer?.files?.length) onFiles(e.dataTransfer.files);
  }, [onFiles]);

  const onRemove = useCallback((id) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  }, []);

  const hasImages = images.length > 0;

  const variants = useMemo(() => ({
    container: { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.06 } } },
    item: { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } },
  }), []);

  return (
    <section id="galeri" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-neutral-900 md:text-3xl">Galeri Karya Anda</h2>
            <p className="mt-2 text-neutral-600">Unggah hasil desain Anda untuk dipamerkan di halaman ini.</p>
          </div>
          <div className="h-px flex-1 bg-neutral-200" />
        </header>

        <div
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={onDrop}
          className={`relative rounded-2xl border-2 border-dashed p-6 transition ${
            isDragging ? 'border-red-500 bg-red-50/60' : 'border-neutral-200 bg-neutral-50/60'
          }`}
        >
          <div className="flex flex-col items-center justify-center gap-3 text-center">
            <div className="rounded-xl bg-white p-3 text-red-600 ring-1 ring-red-100">
              <UploadCloud size={22} />
            </div>
            <div>
              <p className="text-sm text-neutral-700">
                Seret dan letakkan gambar ke sini, atau
                <button
                  onClick={() => inputRef.current?.click()}
                  className="ml-1 font-medium text-red-600 underline underline-offset-4 hover:text-red-700"
                >
                  pilih berkas
                </button>
              </p>
              <p className="mt-1 text-xs text-neutral-500">Mendukung: JPG, PNG, GIF, WebP (maks. 10MB per file)</p>
            </div>
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => e.target.files && onFiles(e.target.files)}
              className="hidden"
            />
          </div>
        </div>

        <AnimatePresence initial={false}>
          {hasImages && (
            <motion.div
              variants={variants.container}
              initial="hidden"
              animate="show"
              className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
            >
              {images.map((img) => (
                <motion.figure key={img.id} variants={variants.item} className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-white">
                  <img src={img.src} alt={img.name} className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/60 to-transparent p-2 text-xs text-white">
                    <span className="line-clamp-1 flex items-center gap-1 opacity-90"><ImageIcon size={14} />{img.name}</span>
                    <button
                      onClick={() => onRemove(img.id)}
                      className="rounded-md bg-white/90 p-1 text-neutral-800 opacity-0 ring-1 ring-neutral-200 transition hover:bg-white group-hover:opacity-100"
                      aria-label={`Hapus ${img.name}`}
                    >
                      <Trash2 size={14} />
                    </button>
                  </figcaption>
                </motion.figure>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {!hasImages && (
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {[1,2,3,4].map((i) => (
              <div key={i} className="flex h-44 items-center justify-center rounded-xl border border-neutral-200 bg-white/60 text-neutral-400">
                <div className="flex items-center gap-2 text-sm"><ImageIcon size={16} /> Placeholder</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
