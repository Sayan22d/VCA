import type { TabType } from '../App';

interface NavigationProps {
  currentTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export function Navigation({ currentTab, onTabChange }: NavigationProps) {
  const tabs = [
    { id: 'about' as TabType, label: '🧠 About' },
    { id: 'payment' as TabType, label: '💳 Payments' },
    { id: 'whychoose' as TabType, label: '🏅 Services' },
    { id: 'Photos' as TabType, label: '📸 Gallery' },
    { id: 'Teams' as TabType, label: '🎭 Teams' },
    { id: 'contact' as TabType, label: '📞 Enquiry' },
    { id: 'rate' as TabType, label: '⭐ Rate Us' }
  ];

  return (
    <nav className="w-full px-4 py-3 sticky top-0 z-50 bg-[rgba(0,0,0,0.9)] backdrop-blur-md shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex-shrink-0">
          <img 
            src="https://raw.githubusercontent.com/Sayan22d/Vishnu-Chess-Academy/refs/heads/main/upscalemedia-transformed.png"
            alt="Academy Logo"
            className="w-15 h-14 object-contain"
          />
        </div>
        
        <div className="flex justify-start mx-2 overflow-x-auto gap-2 md:gap-4 md:mx-4 scrollbar-hide">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`px-4 py-2 md:px-6 md:py-3 rounded-lg whitespace-nowrap text-white transition-all duration-300 ${
                currentTab === tab.id 
                  ? 'bg-white/10' 
                  : 'bg-white/5 hover:bg-white/10'
              }`}
              style={{
                color: currentTab === tab.id ? '#f59e0b' : '#ffffff',
                position: 'relative'
              }}
            >
              {tab.label}
              {currentTab === tab.id && (
                <span 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-0.5 bg-yellow-500 rounded-full"
                />
              )}
            </button>
          ))}
        </div>
        
        <div className="w-8 h-8 flex-shrink-0" />
      </div>
    </nav>
  );
}
