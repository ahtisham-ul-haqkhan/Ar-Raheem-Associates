export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-white" aria-label="Contact Information and Inquiry Form">
      <div className="container">
        <div className="section-header text-center" data-aos="fade-up">
          <span className="section-subtitle">GET IN TOUCH</span>
          <h2 className="section-title">Start Your Project Consultation</h2>
          <p className="section-description">
            Reach out to our engineering and real estate team today for project feasibilities, structural audits, or a detailed quotation.
          </p>
        </div>

        <div className="row g-4 g-lg-5">
          {/* Left Column: Contact Info & Google Maps */}
          <div className="col-lg-5" data-aos="fade-right">
            <div className="contact-info-panel h-100 d-flex flex-column justify-content-between">
              <div>
                <h3 className="h4 fw-bold text-navy mb-4">Corporate Office</h3>

                <div className="contact-detail-row">
                  <div className="contact-detail-icon"><i className="bi bi-geo-alt-fill"></i></div>
                  <div>
                    <h4 className="contact-detail-title">Office Address</h4>
                    <p className="contact-detail-value mb-0">
                      Plot No. 128, Shop No. 4, Azan Centre, Near NBP Bank (Keamari Branch), Keamari, Karachi, Sindh, Postal Code 75620, Pakistan
                    </p>
                  </div>
                </div>

                <div className="contact-detail-row">
                  <div className="contact-detail-icon"><i className="bi bi-telephone-fill"></i></div>
                  <div>
                    <h4 className="contact-detail-title">Direct Phone / WhatsApp</h4>
                    <p className="contact-detail-value mb-0">
                      <a href="tel:+923418186681" className="d-block text-navy fw-bold text-decoration-none">+92 341 8186681</a>
                      <a href="https://wa.me/923418186681?text=Hello%20Zohaib%20Khan%2C%20I%20would%20like%20to%20inquire%20about%20a%20property%20or%20construction%20project." target="_blank" rel="noopener noreferrer" className="badge bg-success text-white text-decoration-none mt-1">
                        <i className="bi bi-whatsapp me-1"></i>Chat on WhatsApp
                      </a>
                    </p>
                  </div>
                </div>

                <div className="contact-detail-row">
                  <div className="contact-detail-icon"><i className="bi bi-envelope-fill"></i></div>
                  <div>
                    <h4 className="contact-detail-title">Email Inquiries</h4>
                    <p className="contact-detail-value mb-0">
                      <a href="mailto:info@alraheemassociates.com" className="text-navy text-decoration-none">info@alraheemassociates.com</a>
                    </p>
                    <small className="text-muted">Guaranteed response within 24 business hours</small>
                  </div>
                </div>

                <div className="contact-detail-row">
                  <div className="contact-detail-icon"><i className="bi bi-clock-fill"></i></div>
                  <div>
                    <h4 className="contact-detail-title">Working Hours</h4>
                    <p className="contact-detail-value mb-0">
                      Monday &ndash; Saturday: 9:00 AM &ndash; 6:00 PM<br />
                      <span className="text-muted small">Sunday: Closed (On-call emergency site support available)</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Embedded Google Maps */}
              <div className="contact-map-frame mt-4">
                <iframe
                  src="https://maps.google.com/maps?q=Azan+Centre+Keamari+Karachi+Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%" height="240" style={{ border: '0' }}
                  allowFullScreen="" loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AL-RAHEEM ASSOCIATES Office Location - Keamari, Karachi">
                </iframe>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="col-lg-7" data-aos="fade-left">
            <div className="contact-form-card shadow-sm">
              <h3 className="h4 fw-bold text-navy mb-2">Send Us an Inquiry</h3>
              <p className="text-muted mb-4 small">Fill out the form below. Our project and property team will review your requirements and provide a preliminary feasibility.</p>

              <div id="formSuccessAlert" className="alert alert-success d-none mb-4" role="alert">
                <div className="d-flex align-items-center">
                  <i className="bi bi-check-circle-fill fs-4 me-3 text-success"></i>
                  <div>
                    <h5 className="alert-heading mb-1 fw-bold">Inquiry Sent Successfully!</h5>
                    <p className="mb-0 small">Thank you for contacting AL-RAHEEM ASSOCIATES. Our team has received your details and will contact you promptly.</p>
                  </div>
                </div>
              </div>

              <form action="https://formsubmit.co/info@alraheemassociates.com" method="POST" className="needs-validation" noValidate id="contactForm">
                <div style={{ display: 'none !important' }}>
                  <label htmlFor="honeypot">Leave this blank</label>
                  <input type="text" name="_honey" id="honeypot" tabIndex="-1" autoComplete="off" />
                </div>
                <input type="hidden" name="_subject" value="New Project Inquiry - AL-RAHEEM ASSOCIATES Website" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="contactName" className="form-label">Full Name <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="contactName" name="name" placeholder="e.g. Muhammad Tariq" required />
                    <div className="invalid-feedback">Please provide your full name.</div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="contactEmail" className="form-label">Email Address <span className="text-danger">*</span></label>
                    <input type="email" className="form-control" id="contactEmail" name="email" placeholder="e.g. tariq@example.com" required />
                    <div className="invalid-feedback">Please enter a valid email address.</div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="contactPhone" className="form-label">Phone / WhatsApp <span className="text-danger">*</span></label>
                    <input type="tel" className="form-control" id="contactPhone" name="phone" placeholder="e.g. +92 341 8186681" required />
                    <div className="invalid-feedback">Please enter your contact phone number.</div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="contactService" className="form-label">Service Interested In <span className="text-danger">*</span></label>
                    <select className="form-select" id="contactService" name="service" required>
                      <option value="" defaultValue disabled>Select Service or Inquiry Type</option>
                      <option value="Residential & Commercial Construction">Residential &amp; Commercial Construction</option>
                      <option value="Real Estate Rental & Purchasing (Commission Basis)">Real Estate Rental &amp; Purchasing (Commission Basis)</option>
                      <option value="Dedicated Skilled Labor Force (Masons, Carpenters, Electricians, Plumbers)">Dedicated Skilled Labor Force</option>
                      <option value="Booking Apartments & Shops">Booking Apartments &amp; Shops</option>
                      <option value="Resale & Godown / Warehouse Rentals">Resale &amp; Godown / Warehouse Rentals</option>
                      <option value="Property Assessment & Real Estate Investments">Property Assessment &amp; Real Estate Investments</option>
                    </select>
                    <div className="invalid-feedback">Please select the service of interest.</div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="contactLocation" className="form-label">Project / Property Location <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="contactLocation" name="location" placeholder="e.g. Keamari / Clifton / DHA Phase 8, Karachi" required />
                    <div className="invalid-feedback">Please state the location of the project.</div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="contactBudget" className="form-label">Estimated Budget Range</label>
                    <select className="form-select" id="contactBudget" name="budget">
                      <option value="" defaultValue disabled>Select Expected Budget (PKR)</option>
                      <option value="PKR 5 Million - 15 Million">PKR 5 Million &ndash; 15 Million</option>
                      <option value="PKR 15 Million - 35 Million">PKR 15 Million &ndash; 35 Million</option>
                      <option value="PKR 35 Million - 75 Million">PKR 35 Million &ndash; 75 Million</option>
                      <option value="PKR 75 Million - 150 Million">PKR 75 Million &ndash; 150 Million</option>
                      <option value="Above PKR 150 Million (Commercial / High-Rise)">Above PKR 150 Million (Commercial / High-Rise)</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label htmlFor="contactMessage" className="form-label">Project Brief / Technical Requirements <span className="text-danger">*</span></label>
                    <textarea className="form-control" id="contactMessage" name="message" rows="4" placeholder="Describe your covered area requirements (sq. yds / sq. ft), architectural preferences, expected commencement timeline, or consultation needs..." required></textarea>
                    <div className="invalid-feedback">Please provide details regarding your project requirements.</div>
                  </div>
                  <div className="col-12 mt-4">
                    <button type="submit" className="btn btn-gold btn-lg w-100 py-3 fw-bold">
                      <i className="bi bi-send-fill me-2"></i>Submit Project Inquiry
                    </button>
                    <p className="text-center text-muted small mt-2 mb-0">
                      <i className="bi bi-shield-lock-fill text-gold me-1"></i>Your information is confidential and will never be shared with third parties.
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

