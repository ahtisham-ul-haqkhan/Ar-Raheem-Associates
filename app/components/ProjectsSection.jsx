export default function ProjectsSection() {
  // ─────────────────────────────────────────────────────────────────────────────
  // ⚙️ PROJECT DISPLAY CONFIGURATION
  // ─────────────────────────────────────────────────────────────────────────────
  // Set to 'true' if you only want to display projects with real client photos (currently 1).
  // Set to 'false' (default) to show all 6 projects (Project 1 with real photos + 5 with 3D concepts).
  const SHOW_ONLY_WITH_REAL_PHOTOS = false;

  const allProjects = [
    // ═══════════════════════════════════════════════════════════════════════════
    // PROJECT 1: REAL CLIENT PHOTOS (7 Photos in /public/project-images/)
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: 'project-1',
      category: 'commercial',
      status: 'ongoing',
      hasRealPhotos: true,
      photoCount: 7,
      img: '/project-images/project-1-1.jpeg',
      imgAlt: 'Ahtisham Enterprise Corporate Complex - Live Site Construction',
      title: 'Ahtisham Enterprise Corporate Complex',
      location: 'Main Shahrah-e-Faisal, Karachi',
      year: '2025 - 2026',
      badgeText: '7 Real Site Photos',
      gallery: [
        '/project-images/project-1-1.jpeg',
        '/project-images/project-1-2.jpeg',
        '/project-images/project-1-3.jpeg',
        '/project-images/project-1-4.jpeg',
        '/project-images/project-1-5.jpeg',
        '/project-images/project-1-6.jpeg',
        '/project-images/project-1-7.jpeg',
      ],
      modal: {
        title: 'Ahtisham Enterprise Corporate Complex',
        client: 'Ahtisham Enterprise',
        category: 'Commercial Civil Construction',
        status: 'Active Civil Work',
        statusClass: 'bg-warning text-dark',
        year: '2025 - 2026',
        location: 'Main Shahrah-e-Faisal, Karachi, Pakistan',
        area: '48,500 Sq. Ft.',
        image: '/project-images/project-1-1.jpeg',
        desc: 'Actual on-site civil construction and structural execution by AL-RAHEEM ASSOCIATES. Includes RCC column casting, slab reinforcement with Grade-60 steel, mechanized concrete pouring, and turnkey structural supervision under Founder Zohaib Khan.',
        features: 'On-Site RCC Superstructure Execution | Grade-60 Deformed Bar Reinforcement | Dedicated Skilled Masons & Concrete Crew | Personal Quality Inspection by Zohaib Khan',
      }
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // PROJECT 2: Zubair Associates (Awaiting Client Photos - 3D Render Displayed)
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: 'project-2',
      category: 'commercial',
      status: 'ongoing',
      hasRealPhotos: false,
      photoCount: 1,
      img: 'https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=800&q=80',
      imgAlt: 'Zubair Associates Corporate Complex',
      title: 'Zubair Associates',
      location: 'Clifton Block 4, Karachi',
      year: '2026 (In Progress)',
      badgeText: 'Architectural Concept',
      gallery: [
        'https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1200&q=85',
      ],
      modal: {
        title: 'Zubair Associates Corporate Plaza',
        client: 'Zubair Associates',
        category: 'Commercial Buildings',
        status: 'Ongoing',
        statusClass: 'bg-warning text-dark',
        year: '2026',
        location: 'Clifton Block 4, Karachi, Pakistan',
        area: '62,000 Sq. Ft.',
        image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1200&q=85',
        desc: 'Flagship executive commercial complex featuring premium showroom concourses on ground level and five executive corporate office floors above. Currently completing structural slab casting on schedule.',
        features: 'Heavy-Duty Foundation with Anti-Saline Concrete | Premium Double-Glazed Facade | 100% Standby Power Infrastructure | Energy Efficient VRF Air-Conditioning System',
      }
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // PROJECT 3: Al-Miraj Heights (Awaiting Client Photos - 3D Render Displayed)
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: 'project-3',
      category: 'residential',
      status: 'completed',
      hasRealPhotos: false,
      photoCount: 1,
      img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
      imgAlt: 'Al-Miraj Heights Luxury Apartments',
      title: 'Al-Miraj Heights',
      location: 'Gulshan-e-Iqbal, Karachi',
      year: '2024',
      badgeText: 'Delivered Project',
      gallery: [
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85',
      ],
      modal: {
        title: 'Al-Miraj Heights Luxury Residential Towers',
        client: 'Al-Miraj Group',
        category: 'Residential Construction',
        status: 'Completed',
        statusClass: 'bg-success',
        year: '2024',
        location: 'Gulshan-e-Iqbal Block 10-A, Karachi',
        area: '36,000 Sq. Ft.',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85',
        desc: 'Modern multi-family residential building featuring spacious 3-bed and 4-bed luxury suites, soundproof glazing, underground water reservoir capacity of 40,000 gallons, and rooftop family garden.',
        features: 'Turnkey Residential Superstructure | Anti-Termite & Bitumen Chemical Waterproofing | Imported Spanish Tiling & Custom Ashwood Doors | Modern Rooftop Pergola & Community Space',
      }
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // PROJECT 4: Horizon Luxury Villas (Awaiting Client Photos)
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: 'project-4',
      category: 'residential',
      status: 'completed',
      hasRealPhotos: false,
      photoCount: 1,
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      imgAlt: 'Horizon Luxury Villas',
      title: 'Horizon Luxury Villas',
      location: 'DHA Phase 8, Karachi',
      year: '2025',
      badgeText: 'Delivered Villa',
      gallery: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
      ],
      modal: {
        title: 'Horizon Luxury Villas Enclave',
        client: 'Horizon Properties',
        category: 'Residential Construction',
        status: 'Completed',
        statusClass: 'bg-success',
        year: '2025',
        location: 'DHA Phase 8, Karachi, Pakistan',
        area: '18,500 Sq. Ft.',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
        desc: 'A prestigious enclave of custom 500-yard duplex villas designed with contemporary minimalist architecture, bespoke teak woodwork, infinity plunge pools, and German UPVC double-glazed thermal windows.',
        features: '500 Sq. Yd. Signature Architecture Duplexes | Smart Home Automation & Integrated Security | Custom Landscaping & Infinity Pools | Full Turnkey Designer Interior Finishing',
      }
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // PROJECT 5: Metro Trade Centre (Awaiting Client Photos)
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: 'project-5',
      category: 'commercial',
      status: 'completed',
      hasRealPhotos: false,
      photoCount: 1,
      img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
      imgAlt: 'Metro Trade Centre',
      title: 'Metro Trade Centre',
      location: 'PECHS Block 2, Karachi',
      year: '2023',
      badgeText: 'Delivered Commercial',
      gallery: [
        'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85',
      ],
      modal: {
        title: 'Metro Trade Centre Commercial Hub',
        client: 'Metro Urban Developers',
        category: 'Commercial Buildings',
        status: 'Completed',
        statusClass: 'bg-success',
        year: '2023',
        location: 'PECHS Block 2, Karachi, Pakistan',
        area: '55,000 Sq. Ft.',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85',
        desc: 'Mixed-use retail concourse and executive commercial suites. Built with heavy-duty structural foundation, post-tensioned floor systems, centralized HVAC shafting, and K-Electric substation integration.',
        features: 'Turnkey Commercial Mixed-Use Retail & Office Hub | Dedicated Multi-Vehicle Subterranean Parking | Integrated Central Building Management System (BMS) | Heavy-Duty Freight & Passenger Elevators',
      }
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // PROJECT 6: Clifton Royal Residency (Awaiting Client Photos)
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: 'project-6',
      category: 'residential',
      status: 'ongoing',
      hasRealPhotos: false,
      photoCount: 1,
      img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
      imgAlt: 'Clifton Royal Residency',
      title: 'Clifton Royal Residency',
      location: 'Clifton Block 2, Karachi',
      year: '2026 (Under Construction)',
      badgeText: 'Coastal RCC Engineering',
      gallery: [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
      ],
      modal: {
        title: 'Clifton Royal Beachfront Residency',
        client: 'Clifton Holdings',
        category: 'Residential Construction',
        status: 'Ongoing',
        statusClass: 'bg-warning text-dark',
        year: '2026',
        location: 'Clifton Block 2, Karachi, Pakistan',
        area: '75,000 Sq. Ft.',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
        desc: 'An ultra-luxury 14-storey residential tower currently progressing through the RCC superstructure phase. Designed to withstand coastal maritime salt exposure using sulfate-resistant cement and epoxy-coated steel bars.',
        features: 'Maritime Coastal Anti-Corrosion Engineering | 14-Storey RCC Superstructure with Deep Piling Foundation | Rooftop Recreational Deck & Sky Lounge | Turnkey Finishing Handover in Q4 2026',
      }
    },
  ];

  const projects = SHOW_ONLY_WITH_REAL_PHOTOS
    ? allProjects.filter(p => p.hasRealPhotos)
    : allProjects;

  return (
    <section id="projects" className="section-padding bg-white" aria-label="Projects Portfolio">
      <div className="container">
        <div className="section-header text-center" data-aos="fade-up">
          <span className="section-subtitle">OUR PORTFOLIO</span>
          <h2 className="section-title">Featured Construction &amp; Development Projects</h2>
          <p className="section-description">
            Explore our diverse portfolio of delivered and ongoing residential, commercial, and property developments across Karachi.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="portfolio-filters" data-aos="fade-up" data-aos-delay="100">
          <button type="button" className="filter-btn active" data-filter="all">All Projects</button>
          <button type="button" className="filter-btn" data-filter="residential">Residential</button>
          <button type="button" className="filter-btn" data-filter="commercial">Commercial</button>
          <button type="button" className="filter-btn" data-filter="ongoing">Ongoing</button>
          <button type="button" className="filter-btn" data-filter="completed">Completed</button>
        </div>

        {/* Projects Grid */}
        <div className="row g-4" id="projectsContainer">
          {projects.map((project, index) => (
            <div
              key={project.id || index}
              className="col-md-6 col-lg-4 project-item"
              data-category={project.category}
              data-status={project.status}
              data-aos="fade-up"
              data-aos-delay={100 + index * 50}
            >
              <div className="project-card h-100 d-flex flex-column">
                <div className="project-image-wrapper position-relative">
                  {/* Category & Status Badges */}
                  <div className="project-badges">
                    <span className="project-category-badge">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </span>
                    <span className={`project-status-badge badge-status-${project.status}`}>
                      {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                    </span>
                  </div>

                  {/* Real Photo indicator badge */}
                  {project.hasRealPhotos ? (
                    <span
                      className="position-absolute end-0 bottom-0 m-2 badge bg-gold text-navy fw-bold shadow-sm"
                      style={{ zIndex: 3, fontSize: '0.72rem' }}
                    >
                      <i className="bi bi-camera-fill me-1"></i> {project.badgeText}
                    </span>
                  ) : (
                    <span
                      className="position-absolute end-0 bottom-0 m-2 badge bg-dark bg-opacity-75 text-white-50 fw-normal shadow-sm"
                      style={{ zIndex: 3, fontSize: '0.68rem' }}
                    >
                      <i className="bi bi-image me-1"></i> {project.badgeText}
                    </span>
                  )}

                  <img
                    src={project.img}
                    alt={project.imgAlt}
                    className="project-img"
                    width="800"
                    height="500"
                    loading="lazy"
                  />
                </div>

                <div className="project-card-body d-flex flex-column justify-content-between flex-grow-1">
                  <div>
                    <h3 className="project-card-title">{project.title}</h3>
                    <div className="project-meta-location">
                      <i className="bi bi-geo-alt-fill text-gold"></i> {project.location}
                    </div>
                  </div>

                  <div className="project-meta-info mt-3 pt-2 border-top d-flex justify-content-between align-items-center">
                    <span className="project-meta-year">
                      <i className="bi bi-calendar3 me-1"></i>{project.year}
                    </span>
                    <button
                      type="button"
                      className="btn project-btn-detail"
                      data-bs-toggle="modal"
                      data-bs-target="#projectModal"
                      data-proj-title={project.modal.title}
                      data-proj-client={project.modal.client}
                      data-proj-category={project.modal.category}
                      data-proj-status={project.modal.status}
                      data-proj-status-class={project.modal.statusClass}
                      data-proj-year={project.modal.year}
                      data-proj-location={project.modal.location}
                      data-proj-area={project.modal.area}
                      data-proj-image={project.modal.image}
                      data-proj-gallery={(project.gallery || []).join('|')}
                      data-proj-desc={project.modal.desc}
                      data-proj-features={project.modal.features}
                    >
                      View Details <i className="bi bi-arrow-up-right ms-1"></i>
                    </button>
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
