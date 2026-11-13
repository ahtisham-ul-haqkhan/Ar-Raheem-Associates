export default function Footer() {
  return (
    <footer className="footer bg-navy text-white pt-5" aria-label="Corporate Footer">
      <div className="container pb-4">
        <div className="row g-4 justify-content-between">
          {/* Col 1: About Firm */}
          <div className="col-lg-4">
            <a className="navbar-brand text-white d-inline-flex align-items-center mb-3" href="#home">
              <img src="images/logo-icon-key.svg" alt="AL-RAHEEM ASSOCIATES Emblem" width="48" height="36" className="me-2" />
              <div>
                <div className="fw-bold tracking-wide" style={{ fontSize: '1.25rem', lineHeight: '1.1' }}><span className="text-gold">AL-RAHEEM</span> ASSOCIATES</div>
                <small className="text-gold-light d-block" style={{ fontSize: '0.72rem', letterSpacing: '0.16em' }}>REAL ESTATE &bull; CONSTRUCTION &bull; EST. 2016</small>
              </div>
            </a>
            <p className="footer-desc">
              Operating as <strong>M/s Al-Raheem Associates</strong>, a trusted corporate name in civil construction, skilled labor workforce, commercial property brokerage, and investments in Karachi since 2016. Officially affiliated with KCCI (#150586), FBR (NTN #5357401-7), and PBA (BP-2670).
            </p>
            <div className="d-flex flex-wrap gap-2 mb-3">
              <span className="badge bg-gold text-dark fw-bold">Est. 2016</span>
              <span className="badge bg-primary text-white">KCCI Member #150586</span>
              <span className="badge bg-success text-white">FBR Active Taxpayer</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="col-6 col-lg-2">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links-list">
              <li><a href="#home"><i className="bi bi-chevron-right text-gold"></i>Home</a></li>
              <li><a href="#about"><i className="bi bi-chevron-right text-gold"></i>About Founder</a></li>
              <li><a href="#services"><i className="bi bi-chevron-right text-gold"></i>Our Services</a></li>
              <li><a href="#projects"><i className="bi bi-chevron-right text-gold"></i>Project Portfolio</a></li>
              <li><a href="#videos"><i className="bi bi-chevron-right text-gold"></i>Site Videos</a></li>
              <li><a href="#clients"><i className="bi bi-chevron-right text-gold"></i>Valued Clients</a></li>
              <li><a href="#credentials"><i className="bi bi-chevron-right text-gold"></i>Credentials</a></li>
              <li><a href="#contact"><i className="bi bi-chevron-right text-gold"></i>Contact Office</a></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="col-6 col-lg-3">
            <h4 className="footer-heading">Our Services</h4>
            <ul className="footer-links-list">
              <li><a href="#services"><i className="bi bi-chevron-right text-gold"></i>Residential &amp; Commercial</a></li>
              <li><a href="#services"><i className="bi bi-chevron-right text-gold"></i>Real Estate Commission Brokerage</a></li>
              <li><a href="#services"><i className="bi bi-chevron-right text-gold"></i>Skilled Construction Workforce</a></li>
              <li><a href="#services"><i className="bi bi-chevron-right text-gold"></i>Apartments &amp; Shops Booking</a></li>
              <li><a href="#services"><i className="bi bi-chevron-right text-gold"></i>Godown &amp; Warehouse Rentals</a></li>
              <li><a href="#services"><i className="bi bi-chevron-right text-gold"></i>Property Assessment &amp; Valuation</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Socials */}
          <div className="col-lg-3">
            <h4 className="footer-heading">Headquarters</h4>
            <div className="footer-contact-item">
              <i className="bi bi-geo-alt-fill"></i>
              <div>Plot No. 128, Shop No. 4, Azan Centre, Near NBP Bank (Keamari Branch), Keamari, Karachi, Sindh 75620, Pakistan</div>
            </div>
            <div className="footer-contact-item">
              <i className="bi bi-telephone-fill"></i>
              <div><a href="tel:+923418186681" className="text-white-50">+92 341 8186681</a></div>
            </div>
            <div className="footer-contact-item">
              <i className="bi bi-envelope-fill"></i>
              <div><a href="mailto:info@alraheemassociates.com" className="text-white-50">info@alraheemassociates.com</a></div>
            </div>
            <div className="footer-contact-item">
              <i className="bi bi-clock-fill"></i>
              <div>Mon - Sat: 9:00 AM - 6:00 PM</div>
            </div>

            <div className="d-flex gap-2 mt-3">
              <a href="https://facebook.com/alraheemassociates" target="_blank" rel="noopener noreferrer" className="top-social-icon" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
              <a href="https://instagram.com/alraheemassociates" target="_blank" rel="noopener noreferrer" className="top-social-icon" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
              <a href="https://linkedin.com/company/alraheemassociates" target="_blank" rel="noopener noreferrer" className="top-social-icon" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Developer Credit Row */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center gy-3">
            {/* Left: Company & Statutory Legal Registration */}
            <div className="col-lg-6 text-center text-lg-start">
              <div className="text-white-50 small mb-1">
                Statutory Firm: <strong>M/s Al-Raheem Associates</strong> &bull; KCCI Reg #150586 &bull; FBR NTN #5357401-7 (ATL) &bull; PBA #BP-2670
              </div>
              <div className="text-white-50 small">
                &copy; <span id="currentYear">2026</span> AL-RAHEEM ASSOCIATES. All Rights Reserved. Founder &amp; Owner: Zohaib Khan.
              </div>
            </div>

            {/* Right: Developer Credit with Portfolio & Direct Contact */}
            <div className="col-lg-6 text-center text-lg-end">
              <div className="d-inline-flex flex-wrap align-items-center justify-content-center justify-content-lg-end gap-2 text-white-50 small">
                <span>Designed &amp; Developed by</span>
                <a
                  href="https://ahtishamdev.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold fw-bold text-decoration-none"
                  title="Visit Ahtisham Ul Haq Khan Portfolio"
                >
                  <i className="bi bi-code-slash me-1"></i>Ahtisham Ul Haq Khan
                </a>
                <span className="text-gold opacity-50">&bull;</span>
                <a
                  href="tel:+923151252016"
                  className="text-white text-decoration-none"
                  title="Call Developer"
                >
                  <i className="bi bi-telephone-fill text-gold me-1"></i>0315 1252016
                </a>
                <a
                  href="https://wa.me/923151252016?text=Hi%20Ahtisham,%20I%20saw%20your%20work%20on%20Al-Raheem%20Associates%20website."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="badge bg-success text-white text-decoration-none px-2 py-1"
                  title="Chat with Developer on WhatsApp"
                >
                  <i className="bi bi-whatsapp me-1"></i>WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
