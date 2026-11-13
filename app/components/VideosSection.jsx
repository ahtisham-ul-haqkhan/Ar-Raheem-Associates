'use client';
import { useState } from 'react';

const videoList = [
  {
    id: 'video-1',
    title: 'Architectural Planning & Blueprint Drafting Consultation',
    desc: 'Exclusive technical consultation with Founder Zohaib Khan and senior architectural team, reviewing structural floor plans, elevations, and municipal approval blueprints for Karachi projects.',
    src: '/videos/project-tour-1.mp4',
    badge: 'Architectural Planning',
    duration: '0:19 sec',
    location: 'Design Studio, Karachi',
    date: 'November 2026',
    poster: '/images/thumb-tour-1.jpg'
  },
  {
    id: 'video-2',
    title: 'Luxury Turnkey Apartment & Interior Walkthrough',
    desc: 'Comprehensive interior walkthrough of a finished luxury residential apartment showcasing modern false ceilings, ambient chandelier lighting, custom CNC woodwork, and turnkey finishing.',
    src: '/videos/project-tour-2.mp4',
    badge: 'Delivered Project',
    duration: '3:07 min',
    location: 'DHA / Clifton, Karachi',
    date: 'November 2026',
    poster: '/images/thumb-tour-2.jpg'
  },
  {
    id: 'video-3',
    title: 'Active Rooftop RCC Slab Casting & Concrete Pouring',
    desc: 'Real-time on-site footage of mechanized concrete hopper lift operations and manual wheelbarrow concrete pouring over Grade-60 steel rebar slab reinforcement.',
    src: '/videos/project-tour-3.mp4',
    badge: 'Active Civil Work',
    duration: '0:20 sec',
    location: 'Active Project Site, Karachi',
    date: 'November 2026',
    poster: '/images/thumb-tour-3.jpg'
  }
];

export default function VideosSection() {
  const [activeVideo, setActiveVideo] = useState(videoList[0]);

  return (
    <section id="videos" className="section-padding video-showcase-section" aria-label="On-Site Construction and Project Progress Videos">
      <div className="container">
        <div className="section-header text-center" data-aos="fade-up">
          <span className="section-subtitle text-gold"><i className="bi bi-camera-video me-1"></i> SITE VISITS &amp; WALKTHROUGHS</span>
          <h2 className="section-title text-white">Live Construction &amp; Development Videos</h2>
          <p className="section-description text-white-50">
            Witness our on-ground execution, structural precision, and real-time site development across Karachi.
          </p>
        </div>

        <div className="row g-4 align-items-start mt-2">
          {/* Main Video Player */}
          <div className="col-lg-7 col-xl-7" data-aos="fade-up" data-aos-delay="100">
            <div className="video-player-wrapper shadow-lg">
              <div className="video-container-ratio position-relative">
                {activeVideo.src ? (
                  <video key={activeVideo.src} controls playsInline preload="metadata" className="main-video-player" poster={activeVideo.poster}>
                    <source src={activeVideo.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="d-flex flex-column align-items-center justify-content-center text-center p-4 h-100 text-white bg-dark">
                    <i className="bi bi-play-circle-fill text-gold display-4 mb-3"></i>
                    <h5 className="fw-bold mb-2">{activeVideo.title}</h5>
                    <p className="text-white-50 mb-3 small" style={{ maxWidth: '420px' }}>{activeVideo.desc}</p>
                    <span className="badge bg-warning text-dark px-3 py-2 fw-semibold">
                      <i className="bi bi-clock-history me-1"></i> Footage In Production
                    </span>
                  </div>
                )}
              </div>

              <div className="video-info-box">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                  <div className="d-flex align-items-center gap-2 flex-wrap">
                    <span className="video-badge"><i className="bi bi-broadcast text-gold"></i> {activeVideo.badge}</span>
                    <span className="video-tag-duration"><i className="bi bi-clock me-1 text-gold"></i> {activeVideo.duration}</span>
                  </div>
                  <div className="text-gold small fw-semibold">
                    <i className="bi bi-geo-alt-fill me-1"></i> {activeVideo.location}
                  </div>
                </div>
                <h3 className="video-info-title">{activeVideo.title}</h3>
                <p className="video-info-desc">{activeVideo.desc}</p>
                <div className="video-cta-group">
                  <a href="https://wa.me/923418186681?text=Salam%20Al-Raheem%20Associates,%20I%20watched%20your%20site%20walkthrough%20video%20and%20want%20to%20consult%20about%20a%20construction%20project." target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-sm px-3 py-2 fw-bold">
                    <i className="bi bi-whatsapp me-1"></i> Discuss Site Visit on WhatsApp
                  </a>
                  <a href="#contact" className="btn btn-outline-light btn-sm px-3 py-2 fw-semibold">
                    <i className="bi bi-chat-dots me-1"></i> Book Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Side Playlist */}
          <div className="col-lg-5 col-xl-5" data-aos="fade-up" data-aos-delay="200">
            <div className="video-playlist-wrapper">
              <div className="d-flex align-items-center justify-content-between mb-1">
                <h4 className="h5 fw-bold text-white mb-0 d-flex align-items-center gap-2">
                  <i className="bi bi-collection-play-fill text-gold"></i>
                  <span>Project Videos</span>
                </h4>
                <span className="badge bg-dark border border-secondary text-gold px-2 py-1 small">{videoList.length} Videos</span>
              </div>

              <div className="video-playlist-items">
                {videoList.map((vid) => {
                  const isSelected = activeVideo.id === vid.id;
                  return (
                    <div
                      key={vid.id}
                      onClick={() => setActiveVideo(vid)}
                      className={`video-side-card ${isSelected ? 'active' : ''}`}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActiveVideo(vid); }}
                    >
                      <div className="video-thumbnail-box">
                        <img src={vid.poster} alt="" loading="lazy"
                          onError={(e) => { e.currentTarget.src = '/images/logo-icon-key.svg'; e.currentTarget.classList.add('p-2'); }}
                        />
                        <div className="video-thumbnail-play">
                          <i className={`bi ${isSelected ? 'bi-play-fill' : 'bi-play'}`}></i>
                        </div>
                      </div>
                      <div className="video-card-content">
                        <div className="video-card-meta mb-1">
                          <span className="video-badge" style={{ fontSize: '0.66rem', padding: '0.15rem 0.45rem' }}>{vid.badge}</span>
                          <span className="video-tag-duration" style={{ fontSize: '0.66rem', padding: '0.15rem 0.45rem' }}>{vid.duration}</span>
                        </div>
                        <h4 className="video-card-title" title={vid.title}>{vid.title}</h4>
                        <div className="video-card-meta">
                          <i className="bi bi-geo-alt-fill text-gold"></i>
                          <span>{vid.location}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="video-notice-box mt-1">
                <div className="d-flex align-items-center gap-2 mb-2 text-gold fw-bold">
                  <i className="bi bi-patch-check-fill fs-5"></i>
                  <span>100% Authentic Site Documentation</span>
                </div>
                <p className="text-white-50 small mb-0" style={{ fontSize: '0.82rem', lineHeight: '1.6' }}>
                  Every video is recorded directly from our active project sites under the personal engineering supervision of <strong className="text-white">Zohaib Khan</strong>. We ensure transparent milestone tracking for our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

