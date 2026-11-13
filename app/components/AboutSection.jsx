export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white" aria-label="About AL-RAHEEM ASSOCIATES and Founder Zohaib Khan">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          {/* Left Column: Owner Photo */}
          <div className="col-lg-5" data-aos="fade-right">
            <div className="owner-photo-frame">
              <img src="images/Professional_Suit_Portrait.png" alt="Zohaib Khan - Owner of AL-RAHEEM ASSOCIATES" className="owner-photo" width="550" height="650" loading="lazy" />
              <div className="experience-floating-badge">
                <div className="badge-icon"><i className="bi bi-calendar-check-fill"></i></div>
                <div>
                  <span className="badge-number" style={{ fontSize: '1.7rem', letterSpacing: '-0.5px' }}>EST. 2016</span>
                  <span className="badge-text">Trusted Name in<br />Real Estate &amp; Construction</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio */}
          <div className="col-lg-7" data-aos="fade-left">
            <span className="section-subtitle">ABOUT US</span>
            <h2 className="section-title text-start mb-2">Meet Our Founder</h2>
            <h3 className="h4 fw-bold text-navy mb-1">Zohaib Khan</h3>
            <p className="text-gold fw-semibold mb-3">
              <i className="bi bi-person-badge-fill me-2"></i>Owner &bull; AL-RAHEEM ASSOCIATES
            </p>

            <p className="text-muted mb-3" style={{ fontSize: '1.02rem', lineHeight: '1.7' }}>
              I am the Owner of <strong>AL-RAHEEM ASSOCIATES</strong> (and M/s Al-Raheem Associates), a trusted name in real estate, construction, and investment services established in <strong>2016</strong> in Karachi. We specialize in comprehensive rental and purchasing services, operating on a transparent commission basis to assist clients in finding suitable commercial, industrial, and residential properties.
            </p>
            <p className="text-muted mb-3" style={{ fontSize: '1.02rem', lineHeight: '1.7' }}>
              In addition to real estate, we offer full-scope construction services, mobilizing a seasoned workforce of experienced masons, carpenters, certified electricians, and plumbers to ensure high-quality workmanship for residential and commercial construction needs. With a commitment to excellence and customer satisfaction, we strive to deliver reliable and professional turnkey civil solutions.
            </p>
            <p className="text-muted mb-4" style={{ fontSize: '1.02rem', lineHeight: '1.7' }}>
              We also offer lucrative investment opportunities in real estate, booking of apartments &amp; retail shops, resale of flats, shops &amp; corporate offices, leasing of godowns/warehouses, and accurate property assessments. Headquartered at <strong>Azan Centre, Keamari, Karachi</strong>, our enterprise maintains a steady monthly income and verified corporate standing, certified by the <strong>Karachi Chamber of Commerce &amp; Industry (KCCI #150586)</strong>, <strong>FBR (NTN #5357401-7)</strong>, and <strong>Pakistan Businessmen Association (BP-2670)</strong>.
            </p>

            {/* Vision and Mission Cards */}
            <div className="row g-3 mb-4">
              <div className="col-sm-6">
                <div className="vision-mission-card">
                  <div className="icon"><i className="bi bi-compass-fill"></i></div>
                  <h5>Our Vision</h5>
                  <p>To be acknowledged as Karachi's most transparent and dependable partner in property investments, real estate acquisitions, and quality civil construction.</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="vision-mission-card">
                  <div className="icon"><i className="bi bi-bullseye"></i></div>
                  <h5>Our Mission</h5>
                  <p>To deliver enduring structural excellence through skilled craftsmanship, honest commission-based client guidance, and verified financial transparency.</p>
                </div>
              </div>
            </div>

            <div className="d-flex flex-wrap gap-3">
              <a href="images/fbr-ntn-tax-certificate.pdf" target="_blank" className="btn btn-navy-outline">
                <i className="bi bi-file-earmark-pdf-fill text-gold me-2"></i>Download Tax Certificate (PDF)
              </a>
              <a href="#credentials" className="btn btn-outline-gold">
                <i className="bi bi-shield-check me-2"></i>View Official Credentials
              </a>
            </div>
          </div>
        </div>

        {/* Executive Business Profile & Visiting Card Showcase */}
        <div className="business-profile-showcase mt-5 pt-4 border-top" data-aos="fade-up">
          <div className="row g-4 align-items-center">
            {/* Left: Core Business Capabilities */}
            <div className="col-lg-6">
              <span className="badge bg-gold-dark text-white px-3 py-2 rounded-pill text-uppercase mb-2 border border-gold">
                <i className="bi bi-patch-check-fill text-gold me-1"></i> Established 2016 &bull; Verified Operations
              </span>
              <h3 className="h4 fw-bold text-navy mb-3">Our Core Business Capabilities</h3>
              <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-start gap-3 p-3 bg-light rounded-3 border">
                  <div className="bg-navy text-gold p-2 rounded text-center d-flex align-items-center justify-content-center" style={{ width: '44px', height: '44px', flexShrink: '0' }}>
                    <i className="bi bi-houses-fill fs-5"></i>
                  </div>
                  <div>
                    <h5 className="h6 fw-bold text-navy mb-1">Real Estate Rental &amp; Purchasing (Commission Basis)</h5>
                    <p className="text-muted small mb-0">Assisting corporate and private clients in purchasing, selling, and renting apartments, retail shops, offices, and industrial godowns across Karachi.</p>
                  </div>
                </div>
                <div className="d-flex align-items-start gap-3 p-3 bg-light rounded-3 border">
                  <div className="bg-navy text-gold p-2 rounded text-center d-flex align-items-center justify-content-center" style={{ width: '44px', height: '44px', flexShrink: '0' }}>
                    <i className="bi bi-tools fs-5"></i>
                  </div>
                  <div>
                    <h5 className="h6 fw-bold text-navy mb-1">Civil Construction &amp; Dedicated Skilled Labor Force</h5>
                    <p className="text-muted small mb-0">Mobilizing our in-house team of seasoned masons, master carpenters, certified electricians, and plumbers for superior residential &amp; commercial projects.</p>
                  </div>
                </div>
                <div className="d-flex align-items-start gap-3 p-3 bg-light rounded-3 border">
                  <div className="bg-navy text-gold p-2 rounded text-center d-flex align-items-center justify-content-center" style={{ width: '44px', height: '44px', flexShrink: '0' }}>
                    <i className="bi bi-graph-up-arrow fs-5"></i>
                  </div>
                  <div>
                    <h5 className="h6 fw-bold text-navy mb-1">Property Assessment, Bookings &amp; Investment Opportunities</h5>
                    <p className="text-muted small mb-0">Accurate property assessment &amp; valuation, off-plan apartment &amp; shop bookings, resale services, and profitable real estate investments with steady cashflow.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Official Executive Visiting Card */}
            <div className="col-lg-6">
              <div className="visiting-card-container p-3 p-md-4 bg-white rounded-4 shadow-sm border text-center">
                <div className="d-flex justify-content-between align-items-center mb-3 px-1">
                  <span className="text-navy small fw-bold text-uppercase"><i className="bi bi-person-vcard text-navy me-1"></i>Official Executive Business Card</span>
                  <span className="badge bg-primary text-white"><i className="bi bi-check-circle-fill me-1"></i>Royal Blue Edition</span>
                </div>
                <div className="visiting-card-frame rounded-3 overflow-hidden border shadow-sm position-relative" style={{ cursor: 'pointer' }}
                  data-bs-toggle="modal"
                  data-bs-target="#credentialModal"
                  data-doc-title="AL-RAHEEM ASSOCIATES - Official Executive Business Card"
                  data-doc-number="Proprietor: Zohaib Khan | Keamari, Karachi"
                  data-doc-src="images/visiting-card-blue.svg"
                  data-doc-desc="Official Executive Visiting Card of AL-RAHEEM ASSOCIATES (Royal Blue Edition).">
                  <img src="images/visiting-card-blue.svg" alt="AL-RAHEEM ASSOCIATES Official Executive Visiting Card - Royal Blue" className="img-fluid w-100" style={{ maxHeight: '290px', objectFit: 'contain' }} />
                  <div className="credential-zoom-overlay">
                    <i className="bi bi-zoom-in fs-2 text-white"></i>
                    <span className="text-white fw-semibold">Click to Inspect Card</span>
                  </div>
                </div>
                <div className="d-flex flex-wrap justify-content-between align-items-center mt-3 px-1 gap-2">
                  <small className="text-muted text-start"><i className="bi bi-geo-alt-fill text-gold me-1"></i>Plot 128, Shop 4, Azan Centre, Keamari</small>
                  <a href="https://wa.me/923418186681?text=Hello%20Zohaib%20Khan%2C%20I%20saw%20your%20visiting%20card%20on%20the%20website%20and%20would%20like%20to%20discuss%20a%20property%20or%20construction%20project." target="_blank" rel="noopener noreferrer" className="btn btn-outline-success btn-sm">
                    <i className="bi bi-whatsapp me-1"></i>Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

