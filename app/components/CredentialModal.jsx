export default function CredentialModal() {
  return (
    <div className="modal fade" id="credentialModal" tabIndex="-1" aria-labelledby="modalDocTitle" aria-hidden="true">
      <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content shadow-lg border-0">
          <div className="modal-header bg-navy text-white px-3 px-md-4 py-3">
            <div className="d-flex align-items-center gap-2">
              <i className="bi bi-patch-check-fill text-gold fs-4"></i>
              <div>
                <h4 className="modal-title h5 text-white fw-bold mb-0" id="modalDocTitle">Document Title</h4>
                <small className="text-gold" id="modalDocNumber">Registration Number</small>
              </div>
            </div>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body p-3 p-md-4">
            <div className="modal-doc-viewer p-2 p-md-3 mb-3">
              <div className="row g-3 justify-content-center align-items-center" id="modalDocRow">
                <div className="col-12 text-center" id="modalColFront">
                  <span className="badge bg-navy text-white px-3 py-1 mb-2 d-none" id="modalBadgeFront">Document Front</span>
                  <div className="modal-img-wrap rounded-2 shadow-sm border p-2 bg-white">
                    <img src="" id="modalDocImg" alt="Official Document" className="img-fluid" />
                  </div>
                </div>
                <div className="col-12 col-md-6 text-center d-none" id="modalColBack">
                  <span className="badge bg-gold text-dark px-3 py-1 mb-2" id="modalBadgeBack">Document Reverse / Back</span>
                  <div className="modal-img-wrap rounded-2 shadow-sm border p-2 bg-white">
                    <img src="" id="modalDocImgBack" alt="Official Document Reverse" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>

            <div className="alert alert-light border d-flex flex-column flex-sm-row align-items-center justify-content-between p-3 mb-3 gap-3">
              <div className="d-flex align-items-center text-navy fw-semibold small text-start">
                <i className="bi bi-shield-fill-check text-success fs-3 me-3 flex-shrink-0"></i>
                <div>
                  <span className="d-block text-navy fw-bold" style={{ fontSize: '0.95rem' }}>Official Statutory Verified Record</span>
                  <span className="text-muted small">Registered with Karachi Chamber of Commerce / Federal Board of Revenue</span>
                </div>
              </div>
              <a href="#" id="modalDocDownloadBtn" target="_blank" className="btn btn-gold btn-sm px-3 py-2 fw-semibold d-none flex-shrink-0">
                <i className="bi bi-file-earmark-pdf-fill me-1"></i>View / Download Original PDF
              </a>
            </div>

            <div className="bg-white p-3 rounded border">
              <h6 className="text-navy fw-bold mb-1"><i className="bi bi-info-circle text-gold me-2"></i>Legal Document Overview</h6>
              <p className="text-muted text-start mb-0 small" id="modalDocDesc" style={{ lineHeight: '1.6' }}>Detailed legal document description.</p>
            </div>
          </div>
          <div className="modal-footer bg-light px-3 px-md-4 py-2 justify-content-between">
            <span className="text-muted small"><i className="bi bi-geo-alt-fill text-gold me-1"></i>Azan Centre, Keamari, Karachi</span>
            <button type="button" className="btn btn-navy btn-sm px-4 fw-semibold" data-bs-dismiss="modal">Close Document</button>
          </div>
        </div>
      </div>
    </div>
  );
}

