export default function ClientsSection() {
  const clients = [
    { icon: 'bi-building', name: 'Ahtisham Enterprise', type: 'Commercial Client' },
    { icon: 'bi-briefcase-fill', name: 'Zubair Associates', type: 'Commercial Client' },
    { icon: 'bi-houses-fill', name: 'Al-Miraj Group', type: 'Residential Client' },
    { icon: 'bi-house-gear-fill', name: 'Horizon Properties', type: 'Residential Client' },
    { icon: 'bi-buildings', name: 'Metro Urban Developers', type: 'Commercial Client' },
    { icon: 'bi-gem', name: 'Clifton Holdings', type: 'Residential Client' },
  ];

  const testimonials = [
    {
      text: '"AL-RAHEEM ASSOCIATES and their engineering team proved to be exceptional partners during the construction and leasing of our corporate spaces on Shahrah-e-Faisal. Their rigor, strict adherence to quality, and on-schedule delivery established them as a top-tier firm in our book."',
      name: 'Tariq Ahtisham',
      role: 'Managing Director, Ahtisham Enterprise',
    },
    {
      text: '"Collaborating with Mr. Zohaib Khan and his skilled workforce on our Clifton project has been thoroughly professional. What stands out most is their absolute transparency in property assessment, reliable tradesmen, and Zero Cost Escalation policy. Truly trustworthy."',
      name: 'Zubair Farooqi',
      role: 'Principal Executive, Zubair Associates',
    },
    {
      text: '"The structural safety and finishing craftsmanship delivered for Al-Miraj Heights is benchmark quality. When our consultants reviewed the legal documentations and site execution, everything matched statutory codes. We look forward to our next development with them."',
      name: 'Muhammad Miraj',
      role: 'Chairman, Al-Miraj Group',
    },
  ];

  return (
    <section id="clients" className="section-padding section-bg-light" aria-label="Our Esteemed Clients and Testimonials">
      <div className="container">
        <div className="section-header text-center" data-aos="fade-up">
          <span className="section-subtitle">TRUSTED PARTNERSHIPS</span>
          <h2 className="section-title">Our Valued Clients</h2>
          <p className="section-description">
            Proud to partner with leading corporate enterprises, institutional investors, and discerning private property owners across Pakistan.
          </p>
        </div>

        {/* Client Cards Grid */}
        <div className="row g-2 g-md-4" data-aos="fade-up" data-aos-delay="100">
          {clients.map((client, index) => (
            <div className="col-6 col-lg-4" key={index}>
              <div className="client-logo-card">
                <div className="client-icon"><i className={`bi ${client.icon}`}></i></div>
                <div>
                  <h3 className="client-name">{client.name}</h3>
                  <p className="client-type">{client.type}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="testimonials-container" data-aos="fade-up" data-aos-delay="200">
          <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="6000">
            <div className="carousel-inner">
              {testimonials.map((t, index) => (
                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                  <div className="testimonial-card">
                    <div className="testimonial-quote-icon"><i className="bi bi-quote"></i></div>
                    <p className="testimonial-text">{t.text}</p>
                    <div className="testimonial-rating">
                      {[...Array(5)].map((_, i) => <i key={i} className="bi bi-star-fill"></i>)}
                    </div>
                    <div className="testimonial-author-name">{t.name}</div>
                    <div className="testimonial-author-role">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="carousel-indicators position-static mt-4">
              {testimonials.map((_, i) => (
                <button key={i} type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to={i} className={i === 0 ? 'active' : ''} aria-label={`Slide ${i + 1}`}></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

