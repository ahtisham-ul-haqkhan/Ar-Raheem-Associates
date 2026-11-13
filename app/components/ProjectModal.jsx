export default function ProjectModal() {
  return (
    <div className="modal fade" id="projectModal" tabIndex="-1" aria-labelledby="modalProjectTitle" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content shadow-lg border-0">
          <div className="modal-header bg-navy text-white px-3 px-md-4 py-3">
            <div>
              <h4 className="modal-title h5 text-white fw-bold mb-0" id="modalProjectTitle">Project Title</h4>
              <small className="text-gold" id="modalProjectClient">Client Name</small>
            </div>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body p-3 p-md-4">
            {/* Main Featured Photo */}
            <div className="mb-3 rounded-3 overflow-hidden position-relative shadow-sm" style={{ maxHeight: '380px', backgroundColor: 'var(--primary-navy-dark)' }}>
              <img src="" id="modalProjectImage" alt="Project Image" className="w-100 object-fit-cover" style={{ maxHeight: '380px' }} />
            </div>

            {/* Multi-Photo Gallery Strip (shown when project has multiple photos) */}
            <div id="modalProjectGalleryWrap" className="mb-4 d-none p-2 bg-light rounded-3 border">
              <div className="d-flex align-items-center justify-content-between mb-2 px-1">
                <small className="text-navy fw-bold text-uppercase" style={{ fontSize: '0.75rem' }}>
                  <i className="bi bi-images text-gold me-1"></i> Actual Site Gallery (<span id="modalGalleryCount">0</span> Photos)
                </small>
                <small className="text-muted" style={{ fontSize: '0.72rem' }}>Click any thumbnail to preview</small>
              </div>
              <div id="modalProjectGallery" className="d-flex gap-2 overflow-auto pb-1" style={{ scrollbarWidth: 'thin' }}>
                {/* Dynamically populated via JS */}
              </div>
            </div>

            {/* Quick Specs */}
            <div className="row g-3 mb-4">
              <div className="col-6 col-sm-3">
                <div className="bg-light p-2 rounded text-center border">
                  <small className="text-muted d-block text-uppercase" style={{ fontSize: '0.72rem' }}>Category</small>
                  <strong className="text-navy" id="modalProjectCategory" style={{ fontSize: '0.9rem' }}>Commercial</strong>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="bg-light p-2 rounded text-center border">
                  <small className="text-muted d-block text-uppercase" style={{ fontSize: '0.72rem' }}>Status</small>
                  <span className="badge bg-success" id="modalProjectStatus">Completed</span>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="bg-light p-2 rounded text-center border">
                  <small className="text-muted d-block text-uppercase" style={{ fontSize: '0.72rem' }}>Year</small>
                  <strong className="text-navy" id="modalProjectYear" style={{ fontSize: '0.9rem' }}>2025</strong>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="bg-light p-2 rounded text-center border">
                  <small className="text-muted d-block text-uppercase" style={{ fontSize: '0.72rem' }}>Covered Area</small>
                  <strong className="text-navy" id="modalProjectArea" style={{ fontSize: '0.9rem' }}>48,000 sq. ft.</strong>
                </div>
              </div>
            </div>

            <div className="mb-3">
              <h5 className="fw-bold text-navy h6"><i className="bi bi-geo-alt-fill text-gold me-1"></i> Location</h5>
              <p className="text-muted" id="modalProjectLocation">Shahrah-e-Faisal, Karachi</p>
            </div>

            <div className="mb-3">
              <h5 className="fw-bold text-navy h6"><i className="bi bi-clipboard2-check-fill text-gold me-1"></i> Project Overview &amp; Engineering Scope</h5>
              <p className="text-muted" id="modalProjectDesc">Detailed technical description of this project.</p>
            </div>

            <div>
              <h5 className="fw-bold text-navy h6"><i className="bi bi-check-circle-fill text-gold me-1"></i> Key Engineering Highlights</h5>
              <ul className="list-unstyled mb-0" id="modalProjectFeatures">
                {/* Dynamically populated via JS */}
              </ul>
            </div>
          </div>
          <div className="modal-footer bg-light px-3 px-md-4 py-2 justify-content-between">
            <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
            <a href="#contact" className="btn btn-gold btn-sm" data-bs-dismiss="modal">
              <i className="bi bi-chat-dots-fill me-1"></i> Inquire Similar Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
