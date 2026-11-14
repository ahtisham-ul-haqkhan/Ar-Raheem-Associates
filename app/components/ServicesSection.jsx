export default function ServicesSection() {
  const services = [
    {
      icon: 'bi-building-fill',
      title: 'Residential & Commercial Construction',
      text: 'Custom luxury villas, multi-family residential elevations, and executive commercial buildings engineered with high-strength RCC framing, earthquake resistance, and quality waterproofing.',
    },
    {
      icon: 'bi-houses-fill',
      title: 'Rental & Purchasing Services',
      text: 'Operating on a transparent commission basis to assist private buyers and corporate investors in purchasing, selling, or leasing ideal residential and commercial properties in Karachi.',
    },
    {
      icon: 'bi-people-fill',
      title: 'Skilled Construction Workforce',
      text: 'Supplying an experienced, vetted workforce for diverse site projects—including master masons, carpenters, certified electricians, and plumbers ensuring high-quality craftsmanship.',
    },
    {
      icon: 'bi-bookmark-check-fill',
      title: 'Booking Apartments & Shops',
      text: 'Official booking partners for upcoming residential towers, modern apartment complexes, and high-footfall commercial shopping arcades with verified titles and flexible installments.',
    },
    {
      icon: 'bi-shop-window',
      title: 'Resale & Godown Rentals',
      text: 'Specialized leasing and resale of commercial godowns, industrial storage warehouses, retail shops, and corporate office suites situated close to port corridors and business avenues.',
    },
    {
      icon: 'bi-graph-up-arrow',
      title: 'Property Assessment & Investments',
      text: 'Professional property valuation, legal documentation audit, and high-yield real estate investment opportunities backed by proven market appreciation and steady monthly income.',
    },
  ];

  return (
    <section id="services" className="section-padding section-bg-light" aria-label="Our Real Estate, Construction and Skilled Labor Services">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center" data-aos="fade-up">
          <span className="section-subtitle">WHAT WE DELIVER</span>
          <h2 className="section-title">Comprehensive Construction &amp; Real Estate Services</h2>
          <p className="section-description">
            Established in 2016, AL-RAHEEM ASSOCIATES integrates turnkey civil construction, experienced trade labor, commercial brokerage, and secure property investments under one trusted umbrella.
          </p>
        </div>

        {/* Mobile Swipe Hint Bar */}
        <div className="d-flex d-md-none justify-content-between align-items-center mb-3 px-1 text-muted small">
          <span className="d-flex align-items-center gap-1">
            <i className="bi bi-arrow-left-right text-gold"></i>
            <span>Swipe left/right to view services</span>
          </span>
          <span className="badge bg-gold-subtle text-gold border border-gold-subtle fw-semibold px-2 py-1">
            6 Services
          </span>
        </div>

        {/* Services Track: Desktop Grid (3x2) & Mobile Swipe Slider */}
        <div className="services-track">
          {services.map((service, index) => (
            <div className="services-track-item" key={index} data-aos="fade-up" data-aos-delay={100 + index * 50}>
              <div className="service-card h-100 d-flex flex-column justify-content-between">
                <div>
                  <div className="service-icon-box">
                    <i className={`bi ${service.icon}`}></i>
                  </div>
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-text">{service.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
