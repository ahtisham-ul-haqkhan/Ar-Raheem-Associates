export default function CredentialsSection() {
  const documents = [
    {
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
    },
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

  return (
    <section id="credentials" className="section-padding bg-white" aria-label="Official Company Credentials and Legal Registration">
      <div className="container">
        <div className="section-header text-center" data-aos="fade-up">
          <span className="section-subtitle">OFFICIAL LEGAL STANDING</span>
          <h2 className="section-title">Company Credentials &amp; Certifications</h2>
          <p className="section-description">
            <strong>M/s Al-Raheem Associates</strong> operates as an officially registered, chamber-certified, and tax-compliant engineering and development firm in Pakistan.
          </p>
        </div>

        {/* Registration Banner */}
        <div className="credentials-banner" data-aos="fade-up" data-aos-delay="100">
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

        {/* Document Cards Grid */}
        <div className="row g-4 justify-content-center" data-aos="fade-up" data-aos-delay="200">
          {documents.map((doc, index) => (
            <div className="col-12 col-sm-6 col-lg-3" key={index}>
              <div className="credential-card">
                <div className="credential-thumbnail-box"
                  data-bs-toggle="modal" data-bs-target="#credentialModal"
                  data-doc-title={doc.modal.title} data-doc-number={doc.modal.number}
                  data-doc-src={doc.modal.src} data-doc-src-back={doc.modal.srcBack || ''}
                  data-doc-pdf={doc.modal.pdf} data-doc-desc={doc.modal.desc}>
                  <img src={doc.img} alt={doc.imgAlt} className="credential-thumbnail-img" width="400" height="560" loading="lazy" />
                  <div className="credential-zoom-overlay">
                    <i className="bi bi-zoom-in fs-2"></i>
                    <span className="fw-semibold">Inspect Document</span>
                  </div>
                </div>
                <div className="credential-card-body">
                  <div className="credential-issuer">{doc.issuer}</div>
                  <h3 className="credential-title">{doc.title}</h3>
                  <p className="credential-desc">{doc.desc}</p>
                  <div className="d-flex gap-2">
                    <button type="button" className="btn btn-navy-outline btn-sm flex-grow-1"
                      data-bs-toggle="modal" data-bs-target="#credentialModal"
                      data-doc-title={doc.modal.title} data-doc-number={doc.modal.number}
                      data-doc-src={doc.modal.src} data-doc-src-back={doc.modal.srcBack || ''}
                      data-doc-pdf={doc.modal.pdf} data-doc-desc={doc.modal.desc}>
                      <i className="bi bi-eye me-1"></i>Inspect
                    </button>
                    <a href={doc.modal.pdf} target="_blank" className="btn btn-outline-secondary btn-sm" title="Download Official PDF">
                      <i className="bi bi-file-earmark-pdf"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

