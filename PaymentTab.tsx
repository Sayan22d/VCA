export function PaymentTab() {
  return (
    <div className="tab-content max-w-4xl mx-auto">
      <div className="rounded-2xl p-6 shadow-2xl" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
        <h2 className="text-center mb-4" style={{ fontSize: '32px', color: '#ffffff' }}>
          Pay Your Monthly Fees Online
        </h2>
        <p className="text-center mb-8 opacity-90" style={{ fontSize: '16px', color: '#ffffff' }}>
          To continue your learning journey seamlessly, pay your monthly chess academy fee securely through Instamojo. We made the process quick and convenient — just one click to stay enrolled!
        </p>
        
        <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
          <h3 className="mb-4" style={{ fontSize: '19.2px', color: '#f59e0b' }}>
            💠 Payment Details:
          </h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="min-w-32" style={{ fontSize: '14.4px', color: '#ffffff' }}>
                Fee Amount:
              </span>
              <span className="opacity-90" style={{ fontSize: '14.4px', color: '#ffffff' }}>
                ₹4000 (4 classes a month), ₹8000 (8 classes a month), ₹12000 (12 classes a month)
              </span>
            </div>
            <div className="flex items-start">
              <span className="min-w-32" style={{ fontSize: '14.4px', color: '#ffffff' }}>
                Due Date:
              </span>
              <span className="opacity-90" style={{ fontSize: '14.4px', color: '#ffffff' }}>
                1st to 5th of every month
              </span>
            </div>
            <div className="flex items-start">
              <span className="min-w-32" style={{ fontSize: '14.4px', color: '#ffffff' }}>
                Accepted Modes:
              </span>
              <span className="opacity-90" style={{ fontSize: '14.4px', color: '#ffffff' }}>
                UPI • Debit Card • Credit Card • Net Banking
              </span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a 
            href="https://vishnuchessacademy40.mojo.page/chess-fees" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 rounded-lg shadow-lg hover:opacity-90 transition-opacity"
            style={{ fontSize: '16px', backgroundColor: '#f59e0b', color: '#0f172a' }}
          >
            👉 Pay Monthly Fee Now
          </a>
          <p className="mt-4 opacity-75" style={{ fontSize: '13.6px', color: '#ffffff' }}>
            (Safe and secure payment powered by Instamojo)
          </p>
          <p className="mt-6 opacity-90" style={{ fontSize: '14.4px', color: '#ffffff' }}>
            After completing the payment, please share your transaction screenshot on WhatsApp for confirmation.
          </p>
        </div>
      </div>
    </div>
  );
}
