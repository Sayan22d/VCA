interface GalleryTabProps {
  openLightbox: (images: Array<{ src: string; cap: string }>, index: number) => void;
}

export function GalleryTab({ openLightbox }: GalleryTabProps) {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1541334991136-11f8b80b2d56?q=80&w=3000",
      cap: "Intense Focus in a Tournament"
    },
    {
      src: "https://images.unsplash.com/photo-1616781297184-75c123f81e28?q=80&w=3000",
      cap: "Group Class Strategic Discussion"
    },
    {
      src: "https://images.unsplash.com/photo-1598256561571-0ce331e4af78?q=80&w=3000",
      cap: "One-on-One Personalized Training"
    },
    {
      src: "https://images.unsplash.com/photo-1593855581177-d352c803023e?q=80&w=3000",
      cap: "Celebrating Our Champions! 🏆"
    },
    {
      src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=3000",
      cap: "Our Seamless Online Sessions"
    },
    {
      src: "https://images.unsplash.com/photo-1571409605349-2c70094d241c?q=80&w=3000",
      cap: "Casual Play and Learning"
    }
  ];

  return (
    <div className="tab-content max-w-6xl mx-auto">
      <h2
        className="text-center mb-6"
        style={{ 
          fontSize: '32px', 
          color: '#ffffff', 
          textShadow: '2px 2px 4px rgba(0,0,0,0.8)' 
        }}
      >
        📸 Academy Gallery
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
            style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
            onClick={() => openLightbox(galleryImages, index)}
          >
            <img src={img.src} alt={img.cap} className="w-full h-48 object-cover" />
            <p className="p-2 text-center" style={{ color: '#ffffff', fontSize: '14px' }}>
              {img.cap}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
