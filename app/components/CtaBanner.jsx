export default function CtaBanner() {
  return (
    <section className="cta-banner-section cta-banner" aria-label="Call to Action">
      <div className="container">
        <div className="row align-items-center justify-content-between g-4">
          <div className="col-lg-8 text-center text-lg-start" data-aos="fade-right">
            <span className="badge bg-gold text-navy fw-bold px-3 py-2 rounded-pill text-uppercase mb-3">Direct Executive Inquiries</span>
            <h2 className="display-6 fw-bold text-white mb-2">Ready to Build or Invest in Your Next Project?</h2>
            <p className="text-white mb-0" style={{ fontSize: '1.08rem', opacity: '0.9' }}>
              Partner with Karachi's trusted, KCCI-certified construction and real estate firm established in 2016. Schedule a consultation directly with Founder Zohaib Khan.
            </p>
          </div>
          <div className="col-lg-4 text-center text-lg-end" data-aos="fade-left">
            <div className="d-flex flex-column flex-sm-row justify-content-lg-end gap-3">
              <a href="#contact" className="btn btn-gold btn-lg px-4 py-3 fw-bold">
                <i className="bi bi-chat-left-dots-fill me-2"></i>Contact Us
              </a>
              <a href="tel:+923418186681" className="btn btn-outline-light btn-lg px-4 py-3 fw-bold">
                <i className="bi bi-telephone-fill text-gold me-2"></i>+92 341 8186681
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

