export function Header() {
  return (
    <header className="w-full py-12 px-6 relative overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://www.shutterstock.com/image-illustration/middle-chess-game-3d-rendering-260nw-2131723535.jpg" 
          alt="Chess Benefits" 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            objectPosition: 'top', 
            transform: 'scale(1.2)' 
          }}
        />
        <div 
          className="absolute inset-0" 
          style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)' }}
        />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto flex items-center justify-center gap-6">
        <div className="flex-shrink-0">
          <img 
            src="https://raw.githubusercontent.com/Sayan22d/Vishnu-Chess-Academy/refs/heads/main/upscalemedia-transformed.png" 
            alt="Logo" 
            className="w-32 h-32 object-contain"
          />
        </div>
      
        <div className="text-center">
          <h1 
            className="mb-4"
            style={{ 
              fontSize: '40px', 
              color: '#ffffff', 
              textShadow: '2px 2px 4px rgba(0,0,0,0.4)' 
            }}
          >
            Vishnu Chess Academy
          </h1>
          <p 
            className="italic"
            style={{ 
              fontSize: '16px', 
              color: '#ffffff', 
              backgroundColor: 'rgba(0, 0, 0, 0.4)', 
              padding: '8px 16px', 
              borderRadius: '8px', 
              display: 'inline-block', 
              textShadow: '0 0 20px rgba(251, 191, 36, 0.9), 0 0 40px rgba(251, 191, 36, 0.6), 0 0 60px rgba(251, 191, 36, 0.4)' 
            }}
          >
            "Master Every Move, Shape a Champion Mind."
          </p>
        </div>
      </div>
    </header>
  );
}
