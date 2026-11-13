export default function Preloader() {
  return (
    <div id="preloader" aria-hidden="true">
      <div className="preloader-inner text-center">
        <div className="preloader-brand-icon-box mb-3 position-relative">
          <img src="images/logo-icon-key.svg" alt="AL-RAHEEM ASSOCIATES Logo" width="85" height="60" className="preloader-logo-img" />
        </div>
        <div className="preloader-brand mb-1">
          <span className="text-gold">AL-RAHEEM</span> ASSOCIATES
        </div>
        <p className="text-white-50 small mb-3 letter-spacing-1">Real Estate &bull; Construction &bull; Investments &bull; Est. 2016</p>
        <div className="preloader-bar-wrap">
          <div className="preloader-progress-bar"></div>
        </div>
      </div>
    </div>
  );
}

