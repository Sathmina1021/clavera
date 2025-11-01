// NEW COMPONENT
const ConfirmationPopup = ({ onClose }) => {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        <div className="popup-body" style={{ textAlign: 'center', padding: '80px 50px' }}>
          <h2 style={{ color: '#ea8f32', fontSize: '2.5rem', marginBottom: '20px' }}>
            <i className="fas fa-envelope-open-text" style={{ marginRight: '10px' }}></i>
            Inquiry Received!
          </h2>
          <p style={{ color: '#e9d6b6', fontSize: '1.2rem', marginBottom: '40px', lineHeight: '1.6' }}>
            Thank you for your interest in a Calvera tour package.
            <br />
            **A member of our team will contact you shortly via email** with the next steps and personalized details.
          </p>
          <button onClick={onClose} className="btn-primary" style={{ width: 'auto', padding: '15px 40px' }}>
            <i className="fas fa-arrow-left"></i> Return to Tours
          </button>
        </div>
      </div>
    </div>
  );
};