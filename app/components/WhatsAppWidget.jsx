export default function WhatsAppWidget() {
  return (
    <div className="whatsapp-widget-container" id="whatsappContainer">

      {/* WhatsApp Interactive Chat Popup Card */}
      <div className="whatsapp-chat-popup shadow-lg" id="whatsappChatPopup" aria-hidden="true" role="dialog" aria-labelledby="waAgentName">
        <div className="wa-popup-header d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-3">
            <div className="wa-avatar-wrap position-relative">
              <img src="images/logo-icon-key.svg" alt="AL-RAHEEM ASSOCIATES" className="wa-avatar-img" />
              <span className="wa-online-indicator" title="Online Now"></span>
            </div>
            <div>
              <h6 className="wa-agent-name mb-0 text-white fw-bold" id="waAgentName">AL-RAHEEM ASSOCIATES</h6>
              <small className="wa-agent-status text-white-50 d-flex align-items-center gap-1">
                <span className="wa-dot-pulse"></span> Online &bull; Direct Support
              </small>
            </div>
          </div>
          <button type="button" className="wa-popup-close-btn" id="waPopupCloseBtn" aria-label="Close WhatsApp chat popup">
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <div className="wa-popup-body">
          <div className="text-center my-2">
            <span className="badge bg-white text-muted px-3 py-1 shadow-xs border" style={{ fontSize: '0.72rem', fontWeight: '500' }}>Today</span>
          </div>
          <div className="wa-chat-bubble">
            <div className="wa-bubble-sender">Zohaib Khan &bull; Founder &amp; Owner</div>
            <p className="wa-bubble-message mb-1">
              Assalam-o-Alaikum! 👋 Welcome to <strong>AL-RAHEEM ASSOCIATES</strong>.<br />
              How can we help you today with property booking, flat/shop rentals, property assessment, or skilled construction labor?
            </p>
            <div className="wa-bubble-time text-end">
              <span id="waChatTime">Just now</span>
              <i className="bi bi-check2-all text-primary ms-1" style={{ fontSize: '0.95rem' }}></i>
            </div>
          </div>

          <div className="wa-quick-pills mt-3">
            <div className="small text-muted fw-semibold mb-2" style={{ fontSize: '0.75rem' }}>QUICK INQUIRY TOPICS:</div>
            <button type="button" className="wa-pill-btn" data-msg="Hello Zohaib Khan, I want to inquire about booking apartments or commercial shops.">
              🏢 Booking Flat/Shop
            </button>
            <button type="button" className="wa-pill-btn" data-msg="Hello Zohaib Khan, I am looking for a flat, shop, or godown for rent in Karachi.">
              🔑 Rental (Flat/Shop/Godown)
            </button>
            <button type="button" className="wa-pill-btn" data-msg="Hello Zohaib Khan, I need skilled construction labor (masons, carpenters, electricians, plumbers).">
              🏗️ Skilled Construction Trade
            </button>
            <button type="button" className="wa-pill-btn" data-msg="Hello Zohaib Khan, I would like to request a professional property assessment.">
              📋 Property Assessment
            </button>
          </div>
        </div>

        <div className="wa-popup-footer">
          <form id="waChatWidgetForm" className="d-flex align-items-center gap-2 m-0 w-100">
            <input type="text" id="waChatInput" className="form-control wa-chat-input" placeholder="Type your message here..." autoComplete="off" aria-label="Type message for WhatsApp" />
            <button type="submit" className="wa-chat-send-btn" id="waChatSendBtn" aria-label="Send WhatsApp message" title="Send via WhatsApp">
              <i className="bi bi-send-fill"></i>
            </button>
          </form>
        </div>
      </div>

      {/* Floating WhatsApp Toggle Button */}
      <button type="button" className="floating-whatsapp" id="whatsappToggleBtn"
        aria-expanded="false" aria-controls="whatsappChatPopup"
        aria-label="Chat with AL-RAHEEM ASSOCIATES on WhatsApp">
        <span className="whatsapp-pulse"></span>
        <i className="bi bi-whatsapp wa-icon-open"></i>
        <i className="bi bi-x-lg wa-icon-close d-none"></i>
      </button>
    </div>
  );
}

