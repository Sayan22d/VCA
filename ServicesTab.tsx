export function ServicesTab() {
  const features = [
    {
      title: 'Experienced Coaching',
      description: 'Learn from a qualified chess coach with professional tournament experience and a proven training methodology.'
    },
    {
      title: 'Structured Learning Path',
      description: 'A clear and progressive curriculum designed to take students from basics to advanced mastery.'
    },
    {
      title: 'Regular Tournaments',
      description: 'Participate in weekly practice games and competitive tournaments to build confidence and improve rating.'
    },
    {
      title: 'Personalized Feedback',
      description: 'Get detailed game analysis and tailored improvement plans to speed up your progress.'
    },
    {
      title: 'Flexible Sessions',
      description: 'Choose between online or offline classes based on your schedule and convenience.'
    },
    {
      title: 'Supportive Community',
      description: 'Join a friendly and motivating chess community that encourages consistent learning and growth.'
    }
  ];

  return (
    <div className="tab-content max-w-5xl mx-auto">
      <h2 
        className="text-center mb-6"
        style={{ 
          fontSize: '32px', 
          color: '#ffffff', 
          textShadow: '2px 2px 4px rgba(0,0,0,0.8)' 
        }}
      >
        🏅 Why Choose Us
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="feature-card rounded-xl p-6 shadow-lg"
            style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
          >
            <h3 className="mb-2" style={{ fontSize: '17.6px', color: '#ffffff' }}>
              {feature.title}
            </h3>
            <p style={{ fontSize: '14.4px', color: '#ffffff' }}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
