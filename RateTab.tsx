export function RateTab() {
  const reviews = [
    '"The instructors at Vishnu Chess Academy provide engaging lessons and help students of all levels. Outstanding training environment." — Verified Review',
    '"Very supportive coaches; my child\'s chess improved a lot. Highly recommend for serious learners." — Student Feedback'
  ];

  return (
    <div className="tab-content max-w-4xl mx-auto space-y-6">
      <div 
        className="rounded-2xl p-6 shadow-2xl text-center" 
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      >
        <h2 className="mb-4" style={{ fontSize: '32px', color: '#ffffff' }}>
          ⭐ Rate & Reviews
        </h2>
        
        <p className="mb-4" style={{ fontSize: '16px', color: '#ffffff' }}>
          Current average rating on Google / public listings: <strong>4.8 / 5</strong>
        </p>
        
        <div className="space-y-4 text-left">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-white/10 p-4 rounded-lg"
            >
              <p style={{ fontSize: '17.6px', color: '#ffffff' }}>
                {review}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      <div 
        className="rounded-2xl p-6 shadow-2xl text-center" 
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      >
        <h2 className="mb-4" style={{ fontSize: '32px', color: '#ffffff' }}>
          📋 Submit Your Review
        </h2>
        
        <p className="mb-4" style={{ fontSize: '16px', color: '#ffffff' }}>
          We value your feedback! Please leave your review by clicking the button below:
        </p>
        
        <button 
          onClick={() => window.open('https://g.page/r/YOUR_GOOGLE_REVIEW_LINK/review', '_blank')}
          className="px-6 py-3 rounded-lg bg-yellow-400/20 text-yellow-300 transition-all hover:bg-yellow-400/30"
        >
          Leave a Review
        </button>
      </div>
    </div>
  );
}
