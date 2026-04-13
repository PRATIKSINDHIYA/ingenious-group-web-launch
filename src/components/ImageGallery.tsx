import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title?: string;
}

interface ImageGalleryProps {
  items: GalleryItem[];
  columns?: number;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ items, columns = 3 }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedIndex = items.findIndex(item => item.id === selectedId);

  const handlePrev = () => {
    if (selectedIndex > 0) {
      setSelectedId(items[selectedIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (selectedIndex < items.length - 1) {
      setSelectedId(items[selectedIndex + 1].id);
    }
  };

  const gridColsClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  }[columns as keyof typeof gridColsClass] || 'grid-cols-3';

  return (
    <>
      <div className={`grid ${gridColsClass} gap-6`}>
        {items.map((item, idx) => (
          <div
            key={item.id}
            className="animate-fade-up cursor-pointer group overflow-hidden rounded-xl"
            style={{ animationDelay: `${idx * 0.1}s` }}
            onClick={() => setSelectedId(item.id)}
          >
            <div className="relative overflow-hidden bg-muted rounded-xl aspect-square">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-semibold">View</span>
              </div>
            </div>
            {item.title && (
              <p className="mt-2 font-semibold text-foreground">{item.title}</p>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedId && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedId(null)}
        >
          <div
            className="relative max-w-4xl w-full animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedId(null)}
              className="absolute -top-10 right-0 text-white hover:text-primary transition-colors"
            >
              <X size={32} />
            </button>

            <div className="relative bg-background rounded-xl overflow-hidden">
              <img
                src={items[selectedIndex].src}
                alt={items[selectedIndex].alt}
                className="w-full h-auto animate-image-zoom"
              />

              {selectedIndex > 0 && (
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all"
                >
                  <ChevronLeft size={24} />
                </button>
              )}

              {selectedIndex < items.length - 1 && (
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all"
                >
                  <ChevronRight size={24} />
                </button>
              )}
            </div>

            {items[selectedIndex].title && (
              <p className="text-center text-white mt-4 font-semibold">
                {items[selectedIndex].title}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
