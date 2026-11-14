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
          <span className="section-subtitle">ENTERPRISE PROFILE</span>
          <h2 className="section-title">Corporate Governance &amp; Core Strengths</h2>
          <p className="section-description">
            Operating as <strong>M/s Al-Raheem Associates</strong> since 2016, our enterprise adheres to statutory corporate transparency, Karachi Chamber of Commerce certification, and proven execution capacity across Karachi.
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

        {/* Corporate Enterprise Fact Sheet */}
        <div className="process-wrapper process-timeline-wrapper" data-aos="fade-up">
          <div className="text-center mb-4">
            <span className="section-subtitle">EXECUTIVE SUMMARY</span>
            <h3 className="h3 fw-bold text-navy">Corporate Fact Sheet &amp; Governance</h3>
            <p className="text-muted small">Verified corporate registration and operational parameters</p>
          </div>

          <div className="row g-4 process-timeline-row">
            {[
              {
                num: '01',
                icon: 'bi-person-badge-fill',
                title: 'Ownership & Legal Status',
                text: 'Sole Proprietorship under Founder Zohaib Khan, operating as M/s Al-Raheem Associates established in 2016 in Karachi.',
              },
              {
                num: '02',
                icon: 'bi-award-fill',
                title: 'Chamber Statutory Member',
                text: 'Full active member of Karachi Chamber of Commerce & Industry (KCCI Membership # 150586) affiliated with FPCCI.',
              },
              {
                num: '03',
                icon: 'bi-file-earmark-check-fill',
                title: 'Tax Compliance & ATL',
                text: 'Active Taxpayer List (ATL) registered with Federal Board of Revenue (FBR NTN # 5357401-7, Regional Tax Office RTO-I Karachi).',
              },
              {
                num: '04',
                icon: 'bi-building-check',
                title: 'Strategic Keamari HQ',
                text: 'Headquartered at Suite 4, Plot 128, Azan Centre, Keamari Port corridor, managing prime civil and commercial developments.',
              },
            ].map((step, index) => (
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
