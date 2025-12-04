export function ContactTab() {
  return (
    <div className="tab-content max-w-4xl mx-auto">
      <div 
        className="rounded-2xl p-6 shadow-2xl text-center" 
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      >
        <h2 className="mb-4" style={{ fontSize: '32px', color: '#ffffff' }}>
          📞 Contact & Support
        </h2>
        <div className="space-y-6">
          <div>
            <p className="mb-2" style={{ fontSize: '16px', color: '#ffffff' }}>
              📱 Phone / WhatsApp:
            </p>
            <a 
              href="tel:+918240526447"
              className="hover:opacity-80 transition-opacity"
              style={{ fontSize: '17.6px', color: '#ffffff' }}
            >
              +91-8240526447
            </a>
          </div>
          <div>
            <p className="mb-2" style={{ fontSize: '16px', color: '#ffffff' }}>
              📧 Email:
            </p>
            <a 
              href="mailto:vishnukejriwal1996@gmail.com"
              className="hover:opacity-80 transition-opacity"
              style={{ fontSize: '17.6px', color: '#ffffff' }}
            >
              vishnukejriwal1996@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
