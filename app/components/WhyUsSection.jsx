export default function WhyUsSection() {
  const whyPoints = [
    {
      icon: 'bi-patch-check-fill',
      title: 'Officially Registered & Certified',
      text: 'Fully compliant corporate entity registered as M/s Al-Raheem Associates holding official Karachi Chamber of Commerce Membership (KCCI #150586), Active FBR Taxpayer status (NTN #5357401-7), and PBA verification (BP-2670).',
    },
    {
      icon: 'bi-people-fill',
      title: 'Dedicated Skilled Workforce',
      text: 'Supervised by Founder Zohaib Khan, our workforce consists of experienced masons, carpenters, electricians, and plumbers delivering superior structural craftsmanship across Karachi.',
    },
    {
      icon: 'bi-buildings-fill',
      title: 'End-to-End Property Brokerage',
      text: 'Direct booking of apartments and commercial shops, resale of flats and offices, plus comprehensive rental management for shops, godowns, and warehouses.',
    },
    {
      icon: 'bi-cash-stack',
      title: '100% Transparent BOQ & Terms',
      text: 'Clear itemized Bill of Quantities (BOQ), contractual milestone payments, and honest commission rates. We operate on a strict zero-hidden-charges policy for absolute investor security.',
    },
    {
      icon: 'bi-clipboard2-data-fill',
      title: 'Accurate Property Assessment',
      text: 'Comprehensive market valuation, legal documentation audit, and structural integrity analysis ensuring your capital is deployed in high-yield Karachi properties.',
    },
    {
      icon: 'bi-shield-check',
      title: 'Punctual Delivery & Warranty',
      text: 'Disciplined project execution with weekly reporting, guaranteed handover dates, defect liability assistance, and comprehensive post-handover client support.',
    },
  ];

  const processSteps = [
    {
      num: '01', icon: 'bi-chat-left-dots-fill',
      title: 'Consultation & Feasibility',
      text: 'Site inspection, client requirement mapping, municipal zoning review, and preliminary budget framework.',
    },
    {
      num: '02', icon: 'bi-pencil-square',
      title: 'Planning & BOQ Formulation',
      text: 'Architectural layouts, material specifications, transparent itemized BOQ, and statutory documentation review.',
    },
    {
      num: '03', icon: 'bi-hammer',
      title: 'Turnkey Skilled Execution',
      text: 'Structural frame erection, masonry, electrical/plumbing MEP installations by our vetted in-house trade specialists.',
    },
    {
      num: '04', icon: 'bi-key-fill',
      title: 'Snagging & Keys Handover',
      text: 'Joint inspection audit, finishes polishing, warranty documentation, and official keys handover.',
    },
  ];

  return (
    <section id="why-us" className="section-padding section-bg-light" aria-label="Why Choose AL-RAHEEM ASSOCIATES and Our Process">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center" data-aos="fade-up">
          <span className="section-subtitle">OUR ADVANTAGE</span>
          <h2 className="section-title">Why Choose AL-RAHEEM ASSOCIATES</h2>
          <p className="section-description">
            Delivering trusted real estate brokerage, turnkey civil construction, skilled labor workforce, and transparent property development backed by official Chamber and tax compliance.
          </p>
        </div>

        {/* Mobile Swipe Hint Bar for Why Us */}
        <div className="d-flex d-md-none justify-content-between align-items-center mb-3 px-1 text-muted small">
          <span className="d-flex align-items-center gap-1">
            <i className="bi bi-arrow-left-right text-gold"></i>
            <span>Swipe left/right to view advantages</span>
          </span>
          <span className="badge bg-gold-subtle text-gold border border-gold-subtle fw-semibold px-2 py-1">
            6 Pillars
          </span>
        </div>

        {/* 6 Core Value Pillars: Grid on Desktop & Swipe Slider on Mobile */}
        <div className="why-us-track mb-5">
          {whyPoints.map((point, index) => (
            <div className="why-us-track-item" key={index} data-aos="fade-up" data-aos-delay={100 + index * 50}>
              <div className="why-card why-us-card h-100 d-flex flex-column">
                <div className="why-icon why-icon-box"><i className={`bi ${point.icon}`}></i></div>
                <h3 className="why-card-title">{point.title}</h3>
                <p className="why-card-text flex-grow-1">{point.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 4-Step Process Timeline */}
        <div className="process-wrapper process-timeline-wrapper" data-aos="fade-up">
          <div className="text-center mb-4">
            <span className="section-subtitle">TRANSPARENT WORKFLOW</span>
            <h3 className="h3 fw-bold text-navy">Our 4-Step Project Roadmap</h3>
            <p className="text-muted small">From initial consultation to final keys handover</p>
          </div>

          {/* Mobile Swipe Hint Bar for Roadmap */}
          <div className="d-flex d-md-none justify-content-between align-items-center mb-3 px-1 text-muted small">
            <span className="d-flex align-items-center gap-1">
              <i className="bi bi-arrow-left-right text-gold"></i>
              <span>Swipe left/right through roadmap</span>
            </span>
            <span className="badge bg-gold-subtle text-gold border border-gold-subtle fw-semibold px-2 py-1">
              4 Steps
            </span>
          </div>

          <div className="row g-4 process-timeline-row">
            {processSteps.map((step, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <div className="process-card process-step-card h-100">
                  <div className="process-step-number">{step.num}</div>
                  <div className="process-icon-box"><i className={`bi ${step.icon}`}></i></div>
                  <h4 className="process-title process-step-title">{step.title}</h4>
                  <p className="process-desc process-step-text mb-0">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
