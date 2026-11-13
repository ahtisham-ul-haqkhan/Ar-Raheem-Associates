export default function HeroSection() {
  return (
    <section
      id="home"
      className="hero-section"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1920&q=80')" }}
      aria-label="AL-RAHEEM ASSOCIATES – Karachi Real Estate & Construction Company"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      {/* Schema.org structured data for SEO */}
      <meta itemProp="name" content="AL-RAHEEM ASSOCIATES" />
      <meta itemProp="description" content="Karachi's trusted real estate brokerage, turnkey civil construction, and property investment company. KCCI registered since 2016." />
      <meta itemProp="telephone" content="+923418186681" />
      <meta itemProp="email" content="info@alraheemassociates.com" />
      <meta itemProp="address" content="Azan Centre, Keamari, Karachi, Pakistan" />
      <meta itemProp="foundingDate" content="2016" />
      <link itemProp="url" href="https://www.alraheemassociates.com" />

      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <div className="row align-items-center g-4 g-lg-5">
          {/* Hero Left Column */}
          <div className="col-lg-7 col-xl-7" data-aos="fade-right" data-aos-duration="800">
            <span className="badge bg-gold-dark text-white px-3 py-2 rounded-pill text-uppercase tracking-wider fw-semibold mb-3 border border-gold hero-trust-tag">
              <i className="bi bi-patch-check-fill text-gold me-1" aria-hidden="true"></i> Established 2016 &bull; Real Estate &bull; Construction &bull; Investments
            </span>

            <h1 className="hero-title mb-3" itemProp="slogan">
              Building Trust. <br /><span className="text-gold">Delivering Excellence.</span>
            </h1>

            <p className="hero-subtext mb-4" itemProp="description">
              Karachi's trusted name in real estate brokerage, turnkey civil construction, skilled trade workforce, and property investments established in 2016. Registered as <strong>M/s Al-Raheem Associates</strong> with Karachi Chamber of Commerce (KCCI #150586), FBR (NTN #5357401-7), and Pakistan Businessmen Association (BP-2670).
            </p>

            <div className="d-flex flex-wrap gap-3 mb-4 hero-cta-group">
              <a href="#projects" className="btn btn-gold btn-lg px-4 py-3 fw-bold" aria-label="View AL-RAHEEM ASSOCIATES construction and real estate projects">
                <i className="bi bi-grid-fill me-2" aria-hidden="true"></i>View Our Projects
              </a>
              <a href="#contact" className="btn btn-outline-light btn-lg px-4 py-3 fw-semibold" aria-label="Contact AL-RAHEEM ASSOCIATES for a free quote">
                <i className="bi bi-telephone-outbound-fill me-2" aria-hidden="true"></i>Contact Us
              </a>
            </div>

            <div className="hero-quick-contact d-flex flex-wrap align-items-center gap-3 pt-2 text-white-50">
              <a href="tel:+923418186681" className="text-white text-decoration-none fw-semibold" aria-label="Call Zohaib Khan – AL-RAHEEM ASSOCIATES" itemProp="telephone">
                <i className="bi bi-telephone-fill text-gold me-2" aria-hidden="true"></i>+92 341 8186681
              </a>
              <span className="text-gold opacity-50" aria-hidden="true">&bull;</span>
              <a href="mailto:info@alraheemassociates.com" className="text-white text-decoration-none" aria-label="Email AL-RAHEEM ASSOCIATES" itemProp="email">
                <i className="bi bi-envelope-fill text-gold me-2" aria-hidden="true"></i>info@alraheemassociates.com
              </a>
            </div>
          </div>

          {/* Hero Right Column: Showcase Image Card */}
          <div className="col-lg-5 col-xl-5" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
            <div className="hero-image-showcase">
              <div className="hero-main-card position-relative overflow-hidden rounded-4 shadow-lg">
                <img
                  src="/images/WhatsApp Image 2026-11-13 at 4.18.56 PM.jpeg"
                  alt="Zohaib Khan – Founder & Owner of AL-RAHEEM ASSOCIATES"
                  className="hero-showcase-img"
                  width="600"
                  height="720"
                  style={{ objectFit: 'cover', width: '100%', minHeight: '420px', display: 'block' }}
                />

                <div className="hero-card-overlay">
                  <span className="badge bg-gold text-navy fw-bold mb-1">Karachi Landmark Developments</span>
                  <h2 className="text-white h6 mb-1">AL-RAHEEM ASSOCIATES &bull; Est. 2016</h2>
                  <small className="text-white-50">Keamari &bull; Clifton &bull; Shahrah-e-Faisal &bull; Turnkey Execution</small>
                </div>
              </div>

              {/* Floating Badges */}
              <div className="hero-float-badge badge-top-left shadow" aria-label="Serving Since 2016">
                <div className="float-badge-icon bg-gold text-navy" aria-hidden="true"><i className="bi bi-calendar2-check-fill fs-5"></i></div>
                <div>
                  <span className="float-badge-title">Serving Since 2016</span>
                  <span className="float-badge-sub">AL-RAHEEM ASSOCIATES</span>
                </div>
              </div>

              <div className="hero-float-badge badge-bottom-right shadow" aria-label="KCCI Registered Member">
                <div className="float-badge-icon bg-navy text-gold" aria-hidden="true"><i className="bi bi-patch-check-fill fs-5"></i></div>
                <div>
                  <span className="float-badge-title">KCCI Registered</span>
                  <span className="float-badge-sub">Membership # 150586</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Quick Trust Badges */}
        <div className="hero-trust-badges" data-aos="fade-up" data-aos-delay="250">
          <div className="row g-3">
            <div className="col-md-4">
              <div className="trust-badge-card">
                <div className="trust-badge-icon"><i className="bi bi-award-fill"></i></div>
                <div>
                  <div className="trust-badge-title">Established Since 2016</div>
                  <p className="trust-badge-desc">Proven real estate brokerage, construction, and investment leadership in Karachi</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="trust-badge-card">
                <div className="trust-badge-icon"><i className="bi bi-people-fill"></i></div>
                <div>
                  <div className="trust-badge-title">Skilled Construction Workforce</div>
                  <p className="trust-badge-desc">Dedicated team of experienced masons, carpenters, electricians &amp; plumbers</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="trust-badge-card">
                <div className="trust-badge-icon"><i className="bi bi-shield-shaded"></i></div>
                <div>
                  <div className="trust-badge-title">Chamber &amp; FBR Certified</div>
                  <p className="trust-badge-desc">KCCI Member #150586 &bull; FBR Active Taxpayer NTN #5357401-7 &bull; PBA BP-2670</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
