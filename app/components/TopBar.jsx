export default function TopBar() {
  return (
    <aside className="top-bar d-none d-lg-block bg-navy-dark text-white py-2" aria-label="Quick contact and company registration details">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          {/* Contact details left */}
          <div className="d-flex align-items-center">
            <a href="tel:+923418186681" className="top-bar-link me-4" aria-label="Call Zohaib Khan">
              <i className="bi bi-telephone-fill text-gold me-2"></i>+92 341 8186681
            </a>
            <a href="mailto:info@alraheemassociates.com" className="top-bar-link me-4" aria-label="Email AL-RAHEEM ASSOCIATES">
              <i className="bi bi-envelope-fill text-gold me-2"></i>info@alraheemassociates.com
            </a>
            <span className="text-white-50">
              <i className="bi bi-clock-fill text-gold me-2"></i>Mon - Sat: 9:00 AM - 6:00 PM
            </span>
          </div>

          {/* Registration details right */}
          <div className="d-flex align-items-center">
            <span className="badge bg-gold-subtle text-gold border border-gold-subtle px-3 py-1">
              <i className="bi bi-patch-check-fill me-1"></i> M/s Al-Raheem Associates &bull; KCCI: 150586 &bull; NTN: 5357401-7 (ATL)
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}

