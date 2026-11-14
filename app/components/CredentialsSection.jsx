export default function CredentialsSection() {
  const kcciCertificate = {
    issuer: 'Karachi Chamber of Commerce & Industry',
    title: 'KCCI Membership Certificate',
    desc: 'Official statutory membership (Reg # 150586) affiliated with FPCCI, valid through 31st March 2027.',
    img: 'images/kcci-certificate.jpg',
    imgAlt: 'KCCI Membership Certificate',
    modal: {
      title: 'Karachi Chamber of Commerce & Industry (KCCI) Certificate',
      number: 'Membership No: 150586 | Serial No: K 302136',
      src: 'images/kcci-certificate.jpg',
      pdf: 'images/kcci-membership-certificate.pdf',
      desc: 'Official Membership Certificate granted by Karachi Chamber of Commerce & Industry (KCCI), affiliated with FPCCI, certifying M/s Al-Raheem Associates as a statutory corporate member valid through 31st March 2027.',
    }
  };

  /* ── PRESERVED IN CODEBASE: Other Credentials (Commented out per profile requirements) ──
  const otherDocuments = [
    {
      issuer: 'Karachi Chamber of Commerce & Industry',
      title: 'KCCI Official Member Card',
      desc: 'Official photographic smart membership identity card issued to Chief Executive Zohaib Khan, valid until 2027.',
      img: 'images/kcci-card-front.jpg',
      imgAlt: 'KCCI Membership Card Front',
      modal: {
        title: 'KCCI Official Smart Membership Card',
        number: 'Card No: 150586 | CNIC: 42401-8997962-9',
        src: 'images/kcci-card-front.jpg',
        srcBack: 'images/kcci-card-back.jpg',
        pdf: 'images/kcci-membership-card.pdf',
        desc: 'Statutory Karachi Chamber of Commerce & Industry Smart Card issued to Chief Executive Zohaib Khan for M/s Al-Raheem Associates. Valid through 31st March 2027.',
      }
    },
    {
      issuer: 'Federal Board of Revenue (FBR)',
      title: 'FBR NTN Tax Certificate',
      desc: 'Certified Active Taxpayer (NTN 5357401-7, Reg: 42401-8997962-9) enrolled under Section 181, RTO-I Karachi.',
      img: 'images/cert-ntn.svg',
      imgAlt: 'FBR NTN Tax Certificate',
      modal: {
        title: 'FBR National Tax Number (NTN) Certificate',
        number: 'NTN: 5357401-7 | Active Taxpayer (ATL)',
        src: 'images/cert-ntn.svg',
        pdf: 'images/fbr-ntn-tax-certificate.pdf',
        desc: 'Federal Board of Revenue (FBR) Active Taxpayer Online Verification Record and Registration Certificate enrolled under Section 181 of the Income Tax Ordinance 2001.',
      }
    },
    {
      issuer: 'Pakistan Businessmen Association',
      title: 'PBA Businessman Verification',
      desc: 'Government Recognized Associate Class Membership Certificate (BP-2670 / BS-2687), valid through March 2026.',
      img: 'images/pba-member-card.jpg',
      imgAlt: 'Pakistan Businessmen Association Verification Card',
      modal: {
        title: 'Pakistan Businessmen Association (PBA) Verification Certificate',
        number: 'Businessman No: BP-2670 | Business No: BS-2687',
        src: 'images/pba-member-card.jpg',
        srcBack: 'images/pba-card-back.jpg',
        pdf: 'images/pba-businessmen-verification.pdf',
        desc: 'Statutory Associate Class Businessman Verification Certificate issued by the Pakistan Businessmen Association (Recognized by Government of Pakistan) to Proprietor Zohaib Khan for M/s Al-Raheem Associates.',
      }
    },
  ];
  ── */

  return (
    <section id="credentials" className="section-padding bg-white" aria-label="Official Company Credentials and Legal Registration">
      <div className="container">
        <div className="section-header text-center" data-aos="fade-up">
          <span className="section-subtitle">OFFICIAL LEGAL STANDING</span>
          <h2 className="section-title">Chamber Certification &amp; Legal Standing</h2>
          <p className="section-description">
            <strong>M/s Al-Raheem Associates</strong> is a statutory corporate member of the Karachi Chamber of Commerce &amp; Industry (KCCI), affiliated with the Federation of Pakistan Chambers of Commerce &amp; Industry (FPCCI).
          </p>
        </div>

        {/* Registration Banner */}
        <div className="credentials-banner mb-4" data-aos="fade-up" data-aos-delay="100">
          <div className="row g-3 align-items-center">
            {[
              { icon: 'bi-patch-check-fill', label: 'KCCI Membership No.', value: '150586 (Valid 2027)' },
              { icon: 'bi-receipt-cutoff', label: 'FBR National Tax No.', value: '5357401-7 (ATL Active)' },
              { icon: 'bi-calendar2-check', label: 'Year Established', value: 'Serving Since 2016' },
              { icon: 'bi-geo-alt-fill', label: 'Verified Office Address', value: 'Azan Centre, Keamari' },
            ].map((item, i) => (
              <div className="col-12 col-md-6 col-xl-3" key={i}>
                <div className="credential-meta-item">
                  <div className="credential-meta-icon"><i className={`bi ${item.icon} text-gold`}></i></div>
                  <div className="credential-meta-text">
                    <span className="credential-meta-label">{item.label}</span>
                    <span className="credential-meta-value">{item.value}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Centered Single Official KCCI Certificate Card */}
        <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200">
          <div className="col-12 col-md-8 col-lg-5 col-xl-4">
            <div className="credential-card shadow-lg border border-gold-subtle text-center">
              <div
                className="credential-thumbnail-box"
                style={{ cursor: 'pointer' }}
                data-bs-toggle="modal"
                data-bs-target="#credentialModal"
                data-doc-title={kcciCertificate.modal.title}
                data-doc-number={kcciCertificate.modal.number}
                data-doc-src={kcciCertificate.modal.src}
                data-doc-src-back=""
                data-doc-pdf={kcciCertificate.modal.pdf}
                data-doc-desc={kcciCertificate.modal.desc}
              >
                <img
                  src={kcciCertificate.img}
                  alt={kcciCertificate.imgAlt}
                  className="credential-thumbnail-img"
                  width="400"
                  height="560"
                  loading="lazy"
                  style={{ maxHeight: '420px', objectFit: 'contain', width: '100%', background: '#f8f9fa' }}
                />
                <div className="credential-zoom-overlay">
                  <i className="bi bi-zoom-in fs-2"></i>
                  <span className="fw-semibold">Click to Inspect Certificate</span>
                </div>
              </div>
              <div className="credential-card-body p-4 text-start">
                <div className="credential-issuer text-gold fw-bold text-uppercase small mb-1">
                  <i className="bi bi-award-fill me-1"></i>{kcciCertificate.issuer}
                </div>
                <h3 className="credential-title h5 fw-bold text-navy mb-2">{kcciCertificate.title}</h3>
                <p className="credential-desc text-muted small mb-3">{kcciCertificate.desc}</p>
                <div className="d-flex gap-2">
                  <button
                    type="button"
                    className="btn btn-navy flex-grow-1 btn-sm py-2 fw-semibold"
                    data-bs-toggle="modal"
                    data-bs-target="#credentialModal"
                    data-doc-title={kcciCertificate.modal.title}
                    data-doc-number={kcciCertificate.modal.number}
                    data-doc-src={kcciCertificate.modal.src}
                    data-doc-src-back=""
                    data-doc-pdf={kcciCertificate.modal.pdf}
                    data-doc-desc={kcciCertificate.modal.desc}
                  >
                    <i className="bi bi-eye me-1"></i>Inspect Full Certificate
                  </button>
                  <a
                    href={kcciCertificate.modal.pdf}
                    target="_blank"
                    className="btn btn-outline-gold btn-sm px-3 py-2"
                    title="Download Official KCCI Certificate PDF"
                  >
                    <i className="bi bi-file-earmark-pdf-fill me-1"></i>PDF
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
