export default function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg sticky-top navbar-custom" id="mainNav" aria-label="Main Navigation">
        <div className="container-fluid px-3 px-lg-4 px-xxl-5 d-flex align-items-center justify-content-between">
          {/* Brand Logo */}
          <a className="navbar-brand d-flex align-items-center" href="#home">
            <img src="images/logo-icon-key.svg" alt="AL-RAHEEM ASSOCIATES Emblem" width="48" height="36" className="me-2 navbar-brand-icon" />
            <div>
              <div className="fw-bold tracking-wide navbar-brand-title"><span className="text-gold">AL-RAHEEM</span> ASSOCIATES</div>
              <div className="navbar-brand-tagline">Real Estate &bull; Construction &bull; Est. 2016</div>
            </div>
          </a>

          {/* Mobile Toggler */}
          <button className="navbar-toggler text-gold border-0 p-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav Links */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
            <ul className="navbar-nav align-items-lg-center mb-0">
              <li className="nav-item"><a className="nav-link active" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
              <li className="nav-item"><a className="nav-link" href="#videos">Videos</a></li>
              <li className="nav-item"><a className="nav-link" href="#clients">Clients</a></li>
              <li className="nav-item"><a className="nav-link" href="#credentials">Credentials</a></li>
              <li className="nav-item"><a className="nav-link" href="#why-us">Why Us</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
              <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
                <a className="btn btn-gold btn-sm px-3 py-2 fw-semibold" href="#contact">
                  <i className="bi bi-chat-dots-fill me-1"></i> Get a Free Quote
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

