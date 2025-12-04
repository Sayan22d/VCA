import { useState } from "react";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { AboutTab } from "./components/AboutTab";
import { PaymentTab } from "./components/PaymentTab";
import { ServicesTab } from "./components/ServicesTab";
import { GalleryTab } from "./components/GalleryTab";
import { TeamsTab } from "./components/TeamsTab";
import { ContactTab } from "./components/ContactTab";
import { RateTab } from "./components/RateTab";
import { Footer } from "./components/Footer";
import { Lightbox } from "./components/Lightbox";

export type TabType =
  | "about"
  | "payment"
  | "whychoose"
  | "Photos"
  | "Teams"
  | "contact"
  | "rate";

export default function App() {
  const [currentTab, setCurrentTab] =
    useState<TabType>("about");
  const [lightboxData, setLightboxData] = useState<{
    isOpen: boolean;
    currentIndex: number;
    images: Array<{ src: string; cap: string }>;
  }>({
    isOpen: false,
    currentIndex: 0,
    images: [],
  });

  const openLightbox = (
    images: Array<{ src: string; cap: string }>,
    index: number,
  ) => {
    setLightboxData({
      isOpen: true,
      currentIndex: index,
      images,
    });
  };

  const closeLightbox = () => {
    setLightboxData((prev) => ({ ...prev, isOpen: false }));
  };

  const navigateLightbox = (direction: number) => {
    setLightboxData((prev) => {
      let newIndex = prev.currentIndex + direction;
      if (newIndex < 0) {
        newIndex = prev.images.length - 1;
      } else if (newIndex >= prev.images.length) {
        newIndex = 0;
      }
      return { ...prev, currentIndex: newIndex };
    });
  };

  return (
    <div className="w-full min-h-screen chess-bg">
      <Header />
      <Navigation
        currentTab={currentTab}
        onTabChange={setCurrentTab}
      />

      <div className="w-full py-4 px-6 min-h-screen">
        {currentTab === "about" && <AboutTab />}
        {currentTab === "payment" && <PaymentTab />}
        {currentTab === "whychoose" && <ServicesTab />}
        {currentTab === "Photos" && (
          <GalleryTab openLightbox={openLightbox} />
        )}
        {currentTab === "Teams" && <TeamsTab />}
        {currentTab === "contact" && <ContactTab />}
        {currentTab === "rate" && <RateTab />}
      </div>

      <Footer />

      {lightboxData.isOpen && (
        <Lightbox
          images={lightboxData.images}
          currentIndex={lightboxData.currentIndex}
          onClose={closeLightbox}
          onNavigate={navigateLightbox}
        />
      )}

      <style>{`
        .chess-bg {
          background: 
            linear-gradient(130deg, rgba(15, 23, 42, 0.1) 0%, rgba(30, 41, 59, 0.1) 100%),
            url('https://images.unsplash.com/photo-1654457066813-234e82a5e3e0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hlc3MlMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D');
          background-size: cover, cover;
          background-position: center, center;
          background-attachment: fixed, fixed;
        }
        
        .tab-content {
          animation: fadeIn 0.5s ease;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .feature-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
      `}</style>
    </div>
  );
}