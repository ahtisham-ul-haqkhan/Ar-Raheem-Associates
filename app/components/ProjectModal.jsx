export default function ProjectModal() {
  return (
    <div className="modal fade" id="projectModal" tabIndex="-1" aria-labelledby="modalProjectTitle" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <div>
              <h4 className="modal-title h5 text-white fw-bold mb-0" id="modalProjectTitle">Project Title</h4>
              <small className="text-gold" id="modalProjectClient">Client Name</small>
            </div>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="mb-4 rounded-3 overflow-hidden" style={{ maxHeight: '380px', backgroundColor: 'var(--primary-navy-dark)' }}>
              <img src="" id="modalProjectImage" alt="Project Image" className="w-100 h-100 object-fit-cover" />
            </div>
            <div className="row g-3 mb-4">
              <div className="col-6 col-sm-3">
                <div className="bg-light p-2 rounded text-center">
                  <small className="text-muted d-block text-uppercase" style={{ fontSize: '0.72rem' }}>Category</small>
                  <strong className="text-navy" id="modalProjectCategory" style={{ fontSize: '0.9rem' }}>Commercial</strong>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="bg-light p-2 rounded text-center">
                  <small className="text-muted d-block text-uppercase" style={{ fontSize: '0.72rem' }}>Status</small>
                  <span className="badge bg-success" id="modalProjectStatus">Completed</span>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="bg-light p-2 rounded text-center">
                  <small className="text-muted d-block text-uppercase" style={{ fontSize: '0.72rem' }}>Year</small>
                  <strong className="text-navy" id="modalProjectYear" style={{ fontSize: '0.9rem' }}>2025</strong>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="bg-light p-2 rounded text-center">
                  <small className="text-muted d-block text-uppercase" style={{ fontSize: '0.72rem' }}>Covered Area</small>
                  <strong className="text-navy" id="modalProjectArea" style={{ fontSize: '0.9rem' }}>48,000 sq. ft.</strong>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <h5 className="fw-bold text-navy h6">Location</h5>
              <p className="text-muted" id="modalProjectLocation">Shahrah-e-Faisal, Karachi</p>
            </div>
            <div className="mb-3">
              <h5 className="fw-bold text-navy h6">Project Overview &amp; Engineering Scope</h5>
              <p className="text-muted" id="modalProjectDesc">Detailed technical description of this project.</p>
            </div>
            <div>
              <h5 className="fw-bold text-navy h6">Key Engineering Highlights</h5>
              <ul className="list-unstyled mb-0" id="modalProjectFeatures">
                {/* Dynamically populated via JS */}
              </ul>
            </div>
          </div>
          <div className="modal-footer bg-light">
            <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
            <a href="#contact" className="btn btn-gold btn-sm" data-bs-dismiss="modal">Inquire Similar Project</a>
          </div>
        </div>
      </div>
    </div>
  );
}

