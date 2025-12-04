import { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: Array<{ src: string; cap: string }>;
  currentIndex: number;
  onClose: () => void;
  onNavigate: (direction: number) => void;
}

export function Lightbox({ images, currentIndex, onClose, onNavigate }: LightboxProps) {
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onNavigate(1);
      } else if (e.key === 'ArrowLeft') {
        onNavigate(-1);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, onNavigate]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    const diffX = touchStartX.current - endX;
    const diffY = touchStartY.current - endY;
    
    const swipeThreshold = 50;
    const isHorizontalSwipe = Math.abs(diffX) > swipeThreshold && Math.abs(diffX) > Math.abs(diffY);
    const isVerticalSwipe = Math.abs(diffY) > swipeThreshold && Math.abs(diffY) > Math.abs(diffX);

    if (isHorizontalSwipe) {
      if (diffX > 0) {
        onNavigate(1); // Swipe left -> next
      } else {
        onNavigate(-1); // Swipe right -> previous
      }
    } else if (isVerticalSwipe && diffY < 0) {
      onClose(); // Swipe down -> close
    }
  };

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 w-full h-full bg-black/95 flex justify-center items-center z-[1000] cursor-pointer"
      onClick={handleBackgroundClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative max-w-[95%] max-h-[95%] flex justify-center items-center pointer-events-none">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].cap}
          className="max-w-full max-h-[100vh] object-contain pointer-events-auto"
          style={{ boxShadow: '0 0 50px rgba(0, 0, 0, 0.5)' }}
        />
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full z-[1010] transition-colors pointer-events-auto"
      >
        <X className="w-6 h-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate(-1);
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 md:flex hidden bg-black/50 hover:bg-black/80 text-white p-3 rounded-full z-[1010] transition-colors pointer-events-auto"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate(1);
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 md:flex hidden bg-black/50 hover:bg-black/80 text-white p-3 rounded-full z-[1010] transition-colors pointer-events-auto"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Mobile navigation buttons */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate(-1);
        }}
        className="md:hidden absolute left-5 bottom-4 bg-black/50 hover:bg-black/80 text-white p-2 rounded-lg z-[1010] transition-colors pointer-events-auto"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate(1);
        }}
        className="md:hidden absolute right-5 bottom-4 bg-black/50 hover:bg-black/80 text-white p-2 rounded-lg z-[1010] transition-colors pointer-events-auto"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-3 text-center pointer-events-none">
        {images[currentIndex].cap}
      </div>
    </div>
  );
}
