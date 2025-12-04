export function TeamsTab() {
  const team = [
    {
      name: 'Vishnu Kejriwal',
      role: 'Founder & Head Coach (FIDE Rated)',
      description: 'Visionary leader with 7+ years of coaching experience, specializing in advanced strategy and endgame theory.',
      image: 'https://images.unsplash.com/photo-1571409605349-2c70094d241c?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      borderColor: '#f59e0b',
      shadowColor: 'shadow-yellow-500/50'
    },
    {
      name: 'Priya Sharma',
      role: 'Senior Coach (National Level Player)',
      description: 'Focuses on opening preparation and tournament psychology for competitive players.',
      image: 'https://images.unsplash.com/photo-1563237023-af215a452109?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      borderColor: '#3b82f6',
      shadowColor: 'shadow-blue-500/50'
    },
    {
      name: 'Rohan Gupta',
      role: 'Junior Coach & Basics Expert',
      description: 'Passionate about teaching foundational concepts to beginners and young enthusiasts.',
      image: 'https://images.unsplash.com/photo-1629851410756-32d72e7c050f?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      borderColor: '#10b981',
      shadowColor: 'shadow-green-500/50'
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
        ♟️ Our Expert Team
      </h2>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <div
            key={index}
            className={`text-center p-6 rounded-xl shadow-2xl transition-all duration-300 hover:${member.shadowColor}`}
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
          >
            <img 
              src={member.image} 
              alt={member.name}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              style={{ border: `4px solid ${member.borderColor}` }}
            />
            <h3 style={{ fontSize: '24px', color: index === 0 ? member.borderColor : '#ffffff' }}>
              {member.name}
            </h3>
            <p className="opacity-80 mb-2" style={{ fontSize: '16px', color: '#ffffff' }}>
              {member.role}
            </p>
            <p className="opacity-70" style={{ fontSize: '14.4px', color: '#ffffff' }}>
              {member.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
