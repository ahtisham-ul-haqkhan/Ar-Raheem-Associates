"use client";

import React, { useEffect, useState } from 'react';

export default function Home() {
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

  const [activeVideo, setActiveVideo] = useState(videoList[0]);

  useEffect(() => {
    // Dynamic import for Bootstrap and AOS in browser environment
    let AOSInstance = null;

    if (typeof window !== 'undefined') {
      // Import Bootstrap JS bundle
      import('bootstrap/dist/js/bootstrap.bundle.min.js').then((bootstrapModule) => {
        const bootstrap = bootstrapModule.default || bootstrapModule;
        window.bootstrap = bootstrap;
      }).catch(err => console.error('Bootstrap JS load error:', err));

      // Import and initialize AOS
      import('aos').then((AOSModule) => {
        AOSInstance = AOSModule.default || AOSModule;
        AOSInstance.init({
          duration: 750,
          easing: 'ease-out-cubic',
          once: true,
          offset: 60,
          disable: function () {
            return window.innerWidth < 768;
          }
        });
      }).catch(err => console.error('AOS load error:', err));
    }

    // ========================================================================
    // 1. PRELOADER DISMISSAL
    // ========================================================================
    const preloader = document.getElementById('preloader');
    function removePreloader() {
      if (preloader && !preloader.classList.contains('loaded')) {
        preloader.classList.add('loaded');
        setTimeout(function () {
          preloader.style.display = 'none';
        }, 500);
      }
    }
    setTimeout(removePreloader, 800);

    // ========================================================================
    // 2. STICKY NAVBAR SCROLL & MOBILE AUTO-CLOSE
    // ========================================================================
    const mainNav = document.getElementById('mainNav');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navLinks = document.querySelectorAll('.navbar-custom .nav-link, .navbar-custom .btn-gold');

    function handleNavScroll() {
      if (!mainNav) return;
      if (window.scrollY > 40) {
        mainNav.classList.add('navbar-scrolled');
      } else {
        mainNav.classList.remove('navbar-scrolled');
      }
    }

    window.addEventListener('scroll', handleNavScroll, { passive: true });
    handleNavScroll();

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
          if (window.bootstrap && window.bootstrap.Collapse) {
            const bsCollapse = window.bootstrap.Collapse.getInstance(navbarCollapse);
            if (bsCollapse) {
              bsCollapse.hide();
            }
          } else {
            navbarCollapse.classList.remove('show');
          }
        }
      });
    });

    // ========================================================================
    // 3. BACK TO TOP BUTTON
    // ========================================================================
    const backToTopBtn = document.getElementById('backToTopBtn');

    function toggleBackToTop() {
      if (!backToTopBtn) return;
      if (window.scrollY > 350) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }

    window.addEventListener('scroll', toggleBackToTop, { passive: true });
    toggleBackToTop();

    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }

    // ========================================================================
    // 4. PROJECTS PORTFOLIO FILTERING
    // ========================================================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    filterButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        filterButtons.forEach(function (btn) { btn.classList.remove('active'); });
        this.classList.add('active');

        const filterValue = this.getAttribute('data-filter');

        projectItems.forEach(function (item) {
          const itemCategory = item.getAttribute('data-category');
          const itemStatus = item.getAttribute('data-status');

          let isMatch = false;

          if (filterValue === 'all') {
            isMatch = true;
          } else if (filterValue === 'residential' && itemCategory === 'residential') {
            isMatch = true;
          } else if (filterValue === 'commercial' && itemCategory === 'commercial') {
            isMatch = true;
          } else if (filterValue === 'ongoing' && itemStatus === 'ongoing') {
            isMatch = true;
          } else if (filterValue === 'completed' && itemStatus === 'completed') {
            isMatch = true;
          }

          if (isMatch) {
            item.classList.remove('d-none');
            item.classList.remove('fade-in');
            void item.offsetWidth;
            item.classList.add('fade-in');
          } else {
            item.classList.add('d-none');
            item.classList.remove('fade-in');
          }
        });
      });
    });

    // ========================================================================
    // 5. DYNAMIC PROJECT MODAL POPULATION
    // ========================================================================
    const projectModal = document.getElementById('projectModal');
    if (projectModal) {
      projectModal.addEventListener('show.bs.modal', function (event) {
        const triggerBtn = event.relatedTarget;
        if (!triggerBtn) return;

        const title = triggerBtn.getAttribute('data-proj-title') || 'Project Details';
        const client = triggerBtn.getAttribute('data-proj-client') || 'Confidential Client';
        const category = triggerBtn.getAttribute('data-proj-category') || 'Construction';
        const status = triggerBtn.getAttribute('data-proj-status') || 'Completed';
        const statusClass = triggerBtn.getAttribute('data-proj-status-class') || 'bg-success';
        const year = triggerBtn.getAttribute('data-proj-year') || '2025';
        const location = triggerBtn.getAttribute('data-proj-location') || 'Karachi, Pakistan';
        const area = triggerBtn.getAttribute('data-proj-area') || 'N/A';
        const imageSrc = triggerBtn.getAttribute('data-proj-image') || '';
        const description = triggerBtn.getAttribute('data-proj-desc') || 'Project overview and architectural engineering details.';
        const featuresRaw = triggerBtn.getAttribute('data-proj-features') || '';

        const modalTitle = projectModal.querySelector('#modalProjectTitle');
        const modalClient = projectModal.querySelector('#modalProjectClient');
        const modalCategory = projectModal.querySelector('#modalProjectCategory');
        const modalStatus = projectModal.querySelector('#modalProjectStatus');
        const modalYear = projectModal.querySelector('#modalProjectYear');
        const modalLocation = projectModal.querySelector('#modalProjectLocation');
        const modalArea = projectModal.querySelector('#modalProjectArea');
        const modalImage = projectModal.querySelector('#modalProjectImage');
        const modalDesc = projectModal.querySelector('#modalProjectDesc');
        const modalFeaturesList = projectModal.querySelector('#modalProjectFeatures');

        if (modalTitle) modalTitle.textContent = title;
        if (modalClient) modalClient.textContent = client;
        if (modalCategory) modalCategory.textContent = category;
        if (modalStatus) {
          modalStatus.textContent = status;
          modalStatus.className = 'badge ' + statusClass;
        }
        if (modalYear) modalYear.textContent = year;
        if (modalLocation) modalLocation.textContent = location;
        if (modalArea) modalArea.textContent = area;
        if (modalImage && imageSrc) {
          modalImage.src = imageSrc;
          modalImage.alt = title;
        }
        if (modalDesc) modalDesc.textContent = description;

        if (modalFeaturesList) {
          modalFeaturesList.innerHTML = '';
          if (featuresRaw) {
            const features = featuresRaw.split('|');
            features.forEach(function (feat) {
              const trimmed = feat.trim();
              if (trimmed) {
                const li = document.createElement('li');
                li.className = 'mb-2 d-flex align-items-center gap-2 text-muted';
                li.innerHTML = '<i class="bi bi-check-circle-fill text-gold"></i><span>' + trimmed + '</span>';
                modalFeaturesList.appendChild(li);
              }
            });
          }
        }
      });
    }

    // ========================================================================
    // 6. CREDENTIALS LIGHTBOX MODAL POPULATION
    // ========================================================================
    const credentialModal = document.getElementById('credentialModal');
    if (credentialModal) {
      credentialModal.addEventListener('show.bs.modal', function (event) {
        const trigger = event.relatedTarget;
        if (!trigger) return;

        const title = trigger.getAttribute('data-doc-title') || 'Official Document';
        const number = trigger.getAttribute('data-doc-number') || '';
        const src = trigger.getAttribute('data-doc-src') || '';
        const srcBack = trigger.getAttribute('data-doc-src-back') || '';
        const pdf = trigger.getAttribute('data-doc-pdf') || '';
        const desc = trigger.getAttribute('data-doc-desc') || '';

        const modalDocTitle = credentialModal.querySelector('#modalDocTitle');
        const modalDocNumber = credentialModal.querySelector('#modalDocNumber');
        const modalDocImg = credentialModal.querySelector('#modalDocImg');
        const modalDocImgBack = credentialModal.querySelector('#modalDocImgBack');
        const modalColFront = credentialModal.querySelector('#modalColFront');
        const modalColBack = credentialModal.querySelector('#modalColBack');
        const modalBadgeFront = credentialModal.querySelector('#modalBadgeFront');
        const modalBadgeBack = credentialModal.querySelector('#modalBadgeBack');
        const modalDocDesc = credentialModal.querySelector('#modalDocDesc');
        const modalDocDownloadBtn = credentialModal.querySelector('#modalDocDownloadBtn');

        if (modalDocTitle) modalDocTitle.textContent = title;
        if (modalDocNumber) modalDocNumber.textContent = number;
        
        if (modalDocImg && src) {
          modalDocImg.src = src;
          modalDocImg.alt = title;
        }

        if (srcBack) {
          if (modalColFront) modalColFront.className = 'col-12 col-md-6 text-center';
          if (modalColBack) modalColBack.classList.remove('d-none');
          if (modalBadgeFront) modalBadgeFront.classList.remove('d-none');
          if (modalBadgeBack) modalBadgeBack.classList.remove('d-none');
          if (modalDocImgBack) {
            modalDocImgBack.src = srcBack;
            modalDocImgBack.alt = title + ' (Reverse Side)';
            modalDocImgBack.classList.remove('d-none');
          }
        } else {
          if (modalColFront) modalColFront.className = 'col-12 col-lg-10 text-center mx-auto';
          if (modalColBack) modalColBack.classList.add('d-none');
          if (modalBadgeFront) modalBadgeFront.classList.add('d-none');
          if (modalDocImgBack) {
            modalDocImgBack.src = '';
            modalDocImgBack.classList.add('d-none');
          }
        }

        if (modalDocDesc) modalDocDesc.textContent = desc;

        if (modalDocDownloadBtn) {
          if (pdf) {
            modalDocDownloadBtn.href = pdf;
            modalDocDownloadBtn.classList.remove('d-none');
          } else {
            modalDocDownloadBtn.href = '#';
            modalDocDownloadBtn.classList.add('d-none');
          }
        }
      });
    }

    // ========================================================================
    // 7. CONTACT FORM VALIDATION & FEEDBACK
    // ========================================================================
    const contactForm = document.getElementById('contactForm');
    const formSuccessAlert = document.getElementById('formSuccessAlert');

    if (contactForm) {
      contactForm.addEventListener('submit', function (event) {
        const honeypot = contactForm.querySelector('input[name="_honey"]') ||
                         contactForm.querySelector('input[name="_gotcha"]');
        if (honeypot && honeypot.value.trim() !== '') {
          event.preventDefault();
          event.stopPropagation();
          return false;
        }

        if (!contactForm.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          contactForm.classList.add('was-validated');
          return;
        }

        contactForm.classList.add('was-validated');

        const actionUrl = contactForm.getAttribute('action') || '';
        if (actionUrl.includes('info@yourdomain.com') || actionUrl.includes('info@alraheemassociates.com')) {
          event.preventDefault();
          
          const submitBtn = contactForm.querySelector('button[type="submit"]');
          const originalBtnHtml = submitBtn ? submitBtn.innerHTML : 'Submit Inquiry';
          if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Sending Inquiry...';
          }

          setTimeout(function () {
            if (submitBtn) {
              submitBtn.disabled = false;
              submitBtn.innerHTML = originalBtnHtml;
            }
            if (formSuccessAlert) {
              formSuccessAlert.classList.remove('d-none');
              formSuccessAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
            contactForm.reset();
            contactForm.classList.remove('was-validated');
          }, 1200);
        }
      });
    }

    // ========================================================================
    // 8. DYNAMIC COPYRIGHT YEAR
    // ========================================================================
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
      currentYearSpan.textContent = new Date().getFullYear();
    }

    // ========================================================================
    // 9. WHATSAPP CHAT POPUP WIDGET
    // ========================================================================
    const whatsappToggleBtn = document.getElementById('whatsappToggleBtn');
    const whatsappChatPopup = document.getElementById('whatsappChatPopup');
    const waPopupCloseBtn = document.getElementById('waPopupCloseBtn');
    const waChatWidgetForm = document.getElementById('waChatWidgetForm');
    const waChatInput = document.getElementById('waChatInput');
    const waPillBtns = document.querySelectorAll('.wa-pill-btn');
    const waIconOpen = document.querySelector('.wa-icon-open');
    const waIconClose = document.querySelector('.wa-icon-close');
    const waChatTime = document.getElementById('waChatTime');

    function openWhatsAppWidget() {
      if (!whatsappChatPopup) return;
      whatsappChatPopup.classList.add('show');
      whatsappChatPopup.setAttribute('aria-hidden', 'false');
      if (whatsappToggleBtn) {
        whatsappToggleBtn.setAttribute('aria-expanded', 'true');
      }
      if (waIconOpen) waIconOpen.classList.add('d-none');
      if (waIconClose) waIconClose.classList.remove('d-none');
      
      if (waChatTime) {
        const now = new Date();
        waChatTime.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      }
      
      setTimeout(function () {
        if (waChatInput) waChatInput.focus();
      }, 250);
    }

    function closeWhatsAppWidget() {
      if (!whatsappChatPopup) return;
      whatsappChatPopup.classList.remove('show');
      whatsappChatPopup.setAttribute('aria-hidden', 'true');
      if (whatsappToggleBtn) {
        whatsappToggleBtn.setAttribute('aria-expanded', 'false');
      }
      if (waIconOpen) waIconOpen.classList.remove('d-none');
      if (waIconClose) waIconClose.classList.add('d-none');
    }

    function sendWhatsAppMessage(messageText) {
      const defaultGreeting = "Hello Zohaib Khan, I would like to inquire about a project/property with AL-RAHEEM ASSOCIATES.";
      const finalMsg = messageText && messageText.trim() !== '' ? messageText.trim() : defaultGreeting;
      const phone = "923418186681";
      const waUrl = "https://wa.me/" + phone + "?text=" + encodeURIComponent(finalMsg);
      window.open(waUrl, '_blank', 'noopener,noreferrer');
      if (waChatInput) waChatInput.value = '';
      closeWhatsAppWidget();
    }

    if (whatsappToggleBtn) {
      whatsappToggleBtn.onclick = function (e) {
        e.stopPropagation();
        if (whatsappChatPopup && whatsappChatPopup.classList.contains('show')) {
          closeWhatsAppWidget();
        } else {
          openWhatsAppWidget();
        }
      };
    }

    if (waPopupCloseBtn) {
      waPopupCloseBtn.onclick = function (e) {
        e.stopPropagation();
        closeWhatsAppWidget();
      };
    }

    const handleOutsideClick = function (e) {
      if (whatsappChatPopup && whatsappChatPopup.classList.contains('show')) {
        const isInside = whatsappChatPopup.contains(e.target) || (whatsappToggleBtn && whatsappToggleBtn.contains(e.target));
        if (!isInside) {
          closeWhatsAppWidget();
        }
      }
    };
    document.addEventListener('click', handleOutsideClick);

    const handleEscKey = function (e) {
      if (e.key === 'Escape' && whatsappChatPopup && whatsappChatPopup.classList.contains('show')) {
        closeWhatsAppWidget();
      }
    };
    document.addEventListener('keydown', handleEscKey);

    waPillBtns.forEach(function (pill) {
      pill.onclick = function () {
        const message = this.getAttribute('data-msg') || this.textContent.trim();
        sendWhatsAppMessage(message);
      };
    });

    if (waChatWidgetForm) {
      waChatWidgetForm.onsubmit = function (e) {
        e.preventDefault();
        const text = waChatInput ? waChatInput.value.trim() : '';
        sendWhatsAppMessage(text);
      };
    }

    return () => {
      window.removeEventListener('scroll', handleNavScroll);
      window.removeEventListener('scroll', toggleBackToTop);
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, []);

  return (
    <>
      

  {/* ======================================================================
       PAGE PRELOADER (HOUSE & KEY LOGO EMBLEM)
       ====================================================================== */}
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

  {/* ======================================================================
       1. TOP BAR (DESKTOP ONLY)
       ====================================================================== */}
  <aside className="top-bar d-none d-lg-block bg-navy-dark text-white py-2" aria-label="Quick contact and company registration details">
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        {/* Contact details left */}
        <div className="d-flex align-items-center">
          <a href="tel:+923418186681" className="top-bar-link me-4" aria-label="Call Zohaib Khan">
            <i className="bi bi-telephone-fill text-gold me-2"></i>+92 341 8186681
          </a>
          <a href="mailto:info@alraheemassociates.com" className="top-bar-link me-4" aria-label="Email AL-RAHEEM ASSOCIATES">
            <i className="bi bi-envelope-fill text-gold me-2"></i>info@alraheemassociates.com
          </a>
          <span className="text-white-50">
            <i className="bi bi-clock-fill text-gold me-2"></i>Mon - Sat: 9:00 AM - 6:00 PM
          </span>
        </div>

        {/* Registration & Social links right */}
        <div className="d-flex align-items-center gap-3">
          <span className="badge bg-gold-subtle text-gold border border-gold-subtle px-2 py-1">
            <i className="bi bi-patch-check-fill me-1"></i> M/s Al-Raheem Associates &bull; KCCI: 150586 &bull; NTN: 5357401-7 (ATL)
          </span>
          <div className="d-flex gap-2 ms-2">
            <a href="https://facebook.com/alraheemassociates" target="_blank" rel="noopener noreferrer" className="top-social-icon" aria-label="Facebook Page">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://instagram.com/alraheemassociates" target="_blank" rel="noopener noreferrer" className="top-social-icon" aria-label="Instagram Profile">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://linkedin.com/company/alraheemassociates" target="_blank" rel="noopener noreferrer" className="top-social-icon" aria-label="LinkedIn Corporate Profile">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </aside>

  {/* ======================================================================
       2. NAVBAR (STICKY - WITH EXACT HOUSE & KEY LOGO FROM CARD)
       ====================================================================== */}
  <header>
    <nav className="navbar navbar-expand-lg sticky-top navbar-custom" id="mainNav" aria-label="Main Navigation">
      <div className="container-fluid px-3 px-lg-4 px-xxl-5 d-flex align-items-center justify-content-between">
        {/* Brand Logo with Extracted Card Monogram */}
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
            <li className="nav-item">
              <a className="nav-link active" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#videos">Videos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#clients">Clients</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#credentials">Credentials</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#why-us">Why Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
            
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

  {/* ======================================================================
       MAIN CONTENT CONTAINER
       ====================================================================== */}
  <main id="main-content">

    {/* ======================================================================
         3. HERO SECTION (FULL SCREEN BANNER WITH TWO-COLUMN CONTENT)
         ====================================================================== */}
    <section id="home" className="hero-section" style={{"backgroundImage":"url('https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1920&q=80')"}} aria-label="Welcome Banner">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <div className="row align-items-center g-4 g-lg-5">
          {/* Hero Left Column: Copy & CTAs */}
          <div className="col-lg-7 col-xl-7" data-aos="fade-right" data-aos-duration="800">
            {/* Trust Tag */}
            <span className="badge bg-gold-dark text-white px-3 py-2 rounded-pill text-uppercase tracking-wider fw-semibold mb-3 border border-gold hero-trust-tag">
              <i className="bi bi-patch-check-fill text-gold me-1"></i> Established 2016 &bull; Real Estate &bull; Construction &bull; Investments
            </span>

            {/* Main Heading */}
            <h1 className="hero-title mb-3">
              Building Trust. <br /><span className="text-gold">Delivering Excellence.</span>
            </h1>

            {/* Subtext */}
            <p className="hero-subtext mb-4">
              Karachi's trusted name in real estate brokerage, turnkey civil construction, skilled trade workforce, and property investments established in 2016. Registered as <strong>M/s Al-Raheem Associates</strong> with Karachi Chamber of Commerce (KCCI #150586), FBR (NTN #5357401-7), and Pakistan Businessmen Association (BP-2670).
            </p>

            {/* CTA Buttons */}
            <div className="d-flex flex-wrap gap-3 mb-4 hero-cta-group">
              <a href="#projects" className="btn btn-gold btn-lg px-4 py-3 fw-bold">
                <i className="bi bi-grid-fill me-2"></i>View Our Projects
              </a>
              
              <a href="#contact" className="btn btn-outline-light btn-lg px-4 py-3 fw-semibold">
                <i className="bi bi-telephone-outbound-fill me-2"></i>Contact Us
              </a>
            </div>

            {/* Quick Direct Contact Info Line */}
            <div className="hero-quick-contact d-flex flex-wrap align-items-center gap-3 pt-2 text-white-50">
              <a href="tel:+923418186681" className="text-white text-decoration-none fw-semibold">
                <i className="bi bi-telephone-fill text-gold me-2"></i>+92 341 8186681
              </a>
              <span className="text-gold opacity-50">&bull;</span>
              <a href="mailto:info@alraheemassociates.com" className="text-white text-decoration-none">
                <i className="bi bi-envelope-fill text-gold me-2"></i>info@alraheemassociates.com
              </a>
            </div>
          </div>

          {/* Hero Right Column: Landmark Architectural Image Showcase & Floating Badges */}
          <div className="col-lg-5 col-xl-5" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
            <div className="hero-image-showcase">
              <div className="hero-main-card">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85" alt="AL-RAHEEM ASSOCIATES Architectural Landmark" className="hero-showcase-img" width="700" height="520" loading="eager" />
                <div className="hero-card-overlay">
                  <span className="badge bg-gold text-navy fw-bold mb-1">Karachi Landmark Developments</span>
                  <h4 className="text-white h6 mb-1">AL-RAHEEM ASSOCIATES Projects</h4>
                  <small className="text-white-50">Keamari &bull; Clifton &bull; Shahrah-e-Faisal &bull; Turnkey Execution</small>
                </div>
              </div>

              {/* Floating Verified Badge 1 (Top Left) */}
              <div className="hero-float-badge badge-top-left shadow">
                <div className="float-badge-icon bg-gold text-navy">
                  <i className="bi bi-calendar2-check-fill fs-5"></i>
                </div>
                <div>
                  <span className="float-badge-title">Serving Since 2016</span>
                  <span className="float-badge-sub">AL-RAHEEM ASSOCIATES</span>
                </div>
              </div>

              {/* Floating Experience Badge 2 (Bottom Right) */}
              <div className="hero-float-badge badge-bottom-right shadow">
                <div className="float-badge-icon bg-navy text-gold">
                  <i className="bi bi-patch-check-fill fs-5"></i>
                </div>
                <div>
                  <span className="float-badge-title">KCCI Registered</span>
                  <span className="float-badge-sub">Membership # 150586</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Quick Trust Badges in a Row */}
        <div className="hero-trust-badges" data-aos="fade-up" data-aos-delay="250">
          <div className="row g-3">
            <div className="col-md-4">
              <div className="trust-badge-card">
                <div className="trust-badge-icon">
                  <i className="bi bi-award-fill"></i>
                </div>
                <div>
                  <div className="trust-badge-title">Established Since 2016</div>
                  <p className="trust-badge-desc">Proven real estate brokerage, construction, and investment leadership in Karachi</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="trust-badge-card">
                <div className="trust-badge-icon">
                  <i className="bi bi-people-fill"></i>
                </div>
                <div>
                  <div className="trust-badge-title">Skilled Construction Workforce</div>
                  <p className="trust-badge-desc">Dedicated team of experienced masons, carpenters, electricians &amp; plumbers</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="trust-badge-card">
                <div className="trust-badge-icon">
                  <i className="bi bi-shield-shaded"></i>
                </div>
                <div>
                  <div className="trust-badge-title">Chamber &amp; FBR Certified</div>
                  <p className="trust-badge-desc">KCCI Member #150586 &bull; FBR Active Taxpayer NTN #5357401-7 &bull; PBA BP-2670</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ======================================================================
         4. ABOUT / OWNER SECTION (OFFICIAL STATEMENT FROM VISITING CARD & FORMS)
         ====================================================================== */}
    <section id="about" className="section-padding bg-white" aria-label="About AL-RAHEEM ASSOCIATES and Founder Zohaib Khan">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          {/* Left Column: Owner Photo & Established 2016 Badge */}
          <div className="col-lg-5" data-aos="fade-right">
            <div className="owner-photo-frame">
              <img src="images/Professional_Suit_Portrait.png" alt="Zohaib Khan - Owner of AL-RAHEEM ASSOCIATES" className="owner-photo" width="550" height="650" loading="lazy" />
              
              {/* Floating Badge */}
              <div className="experience-floating-badge">
                <div className="badge-icon">
                  <i className="bi bi-calendar-check-fill"></i>
                </div>
                <div>
                  <span className="badge-number" style={{"fontSize":"1.7rem","letterSpacing":"-0.5px"}}>EST. 2016</span>
                  <span className="badge-text">Trusted Name in<br />Real Estate &amp; Construction</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Official Narrative, Vision & Mission */}
          <div className="col-lg-7" data-aos="fade-left">
            <span className="section-subtitle">ABOUT US</span>
            <h2 className="section-title text-start mb-2">Meet Our Founder</h2>
            
            <h3 className="h4 fw-bold text-navy mb-1">Zohaib Khan</h3>
            <p className="text-gold fw-semibold mb-3">
              <i className="bi bi-person-badge-fill me-2"></i>Owner &bull; AL-RAHEEM ASSOCIATES
            </p>

            {/* Authentic Professional Narrative from Official Business Declarations */}
            <p className="text-muted mb-3" style={{"fontSize":"1.02rem","lineHeight":"1.7"}}>
              I am the Owner of <strong>AL-RAHEEM ASSOCIATES</strong> (and M/s Al-Raheem Associates), a trusted name in real estate, construction, and investment services established in <strong>2016</strong> in Karachi. We specialize in comprehensive rental and purchasing services, operating on a transparent commission basis to assist clients in finding suitable commercial, industrial, and residential properties.
            </p>
            <p className="text-muted mb-3" style={{"fontSize":"1.02rem","lineHeight":"1.7"}}>
              In addition to real estate, we offer full-scope construction services, mobilizing a seasoned workforce of experienced masons, carpenters, certified electricians, and plumbers to ensure high-quality workmanship for residential and commercial construction needs. With a commitment to excellence and customer satisfaction, we strive to deliver reliable and professional turnkey civil solutions.
            </p>
            <p className="text-muted mb-4" style={{"fontSize":"1.02rem","lineHeight":"1.7"}}>
              We also offer lucrative investment opportunities in real estate, booking of apartments &amp; retail shops, resale of flats, shops &amp; corporate offices, leasing of godowns/warehouses, and accurate property assessments. Headquartered at <strong>Azan Centre, Keamari, Karachi</strong>, our enterprise maintains a steady monthly income and verified corporate standing, certified by the <strong>Karachi Chamber of Commerce &amp; Industry (KCCI #150586)</strong>, <strong>FBR (NTN #5357401-7)</strong>, and <strong>Pakistan Businessmen Association (BP-2670)</strong>.
            </p>

            {/* Vision and Mission Cards */}
            <div className="row g-3 mb-4">
              <div className="col-sm-6">
                <div className="vision-mission-card">
                  <div className="icon">
                    <i className="bi bi-compass-fill"></i>
                  </div>
                  <h5>Our Vision</h5>
                  <p>To be acknowledged as Karachi's most transparent and dependable partner in property investments, real estate acquisitions, and quality civil construction.</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="vision-mission-card">
                  <div className="icon">
                    <i className="bi bi-bullseye"></i>
                  </div>
                  <h5>Our Mission</h5>
                  <p>To deliver enduring structural excellence through skilled craftsmanship, honest commission-based client guidance, and verified financial transparency.</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="d-flex flex-wrap gap-3">
              <a href="images/fbr-ntn-tax-certificate.pdf" target="_blank" className="btn btn-navy-outline">
                <i className="bi bi-file-earmark-pdf-fill text-gold me-2"></i>Download Tax Certificate (PDF)
              </a>
              <a href="#credentials" className="btn btn-outline-gold">
                <i className="bi bi-shield-check me-2"></i>View Official Credentials
              </a>
            </div>
          </div>
        </div>

        {/* ======================================================================
             EXECUTIVE BUSINESS PROFILE & VISITING CARD SHOWCASE (BLUE EDITION)
             ====================================================================== */}
        <div className="business-profile-showcase mt-5 pt-4 border-top" data-aos="fade-up">
          <div className="row g-4 align-items-center">
            {/* Left: Core Business Capabilities */}
            <div className="col-lg-6">
              <span className="badge bg-gold-dark text-white px-3 py-2 rounded-pill text-uppercase mb-2 border border-gold">
                <i className="bi bi-patch-check-fill text-gold me-1"></i> Established 2016 &bull; Verified Operations
              </span>
              <h3 className="h4 fw-bold text-navy mb-3">Our Core Business Capabilities</h3>
              
              <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-start gap-3 p-3 bg-light rounded-3 border">
                  <div className="bg-navy text-gold p-2 rounded text-center d-flex align-items-center justify-content-center" style={{"width":"44px","height":"44px","flexShrink":"0"}}>
                    <i className="bi bi-houses-fill fs-5"></i>
                  </div>
                  <div>
                    <h5 className="h6 fw-bold text-navy mb-1">Real Estate Rental &amp; Purchasing (Commission Basis)</h5>
                    <p className="text-muted small mb-0">Assisting corporate and private clients in purchasing, selling, and renting apartments, retail shops, offices, and industrial godowns across Karachi.</p>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3 p-3 bg-light rounded-3 border">
                  <div className="bg-navy text-gold p-2 rounded text-center d-flex align-items-center justify-content-center" style={{"width":"44px","height":"44px","flexShrink":"0"}}>
                    <i className="bi bi-tools fs-5"></i>
                  </div>
                  <div>
                    <h5 className="h6 fw-bold text-navy mb-1">Civil Construction &amp; Dedicated Skilled Labor Force</h5>
                    <p className="text-muted small mb-0">Mobilizing our in-house team of seasoned masons, master carpenters, certified electricians, and plumbers for superior residential &amp; commercial projects.</p>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3 p-3 bg-light rounded-3 border">
                  <div className="bg-navy text-gold p-2 rounded text-center d-flex align-items-center justify-content-center" style={{"width":"44px","height":"44px","flexShrink":"0"}}>
                    <i className="bi bi-graph-up-arrow fs-5"></i>
                  </div>
                  <div>
                    <h5 className="h6 fw-bold text-navy mb-1">Property Assessment, Bookings &amp; Investment Opportunities</h5>
                    <p className="text-muted small mb-0">Accurate property assessment &amp; valuation, off-plan apartment &amp; shop bookings, resale services, and profitable real estate investments with steady cashflow.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Official Executive Visiting Card (Royal Blue Edition) */}
            <div className="col-lg-6">
              <div className="visiting-card-container p-3 p-md-4 bg-white rounded-4 shadow-sm border text-center">
                <div className="d-flex justify-content-between align-items-center mb-3 px-1">
                  <span className="text-navy small fw-bold text-uppercase"><i className="bi bi-person-vcard text-navy me-1"></i>Official Executive Business Card</span>
                  <span className="badge bg-primary text-white"><i className="bi bi-check-circle-fill me-1"></i>Royal Blue Edition</span>
                </div>
                
                {/* Interactive Visiting Card with Zoom Action */}
                <div className="visiting-card-frame rounded-3 overflow-hidden border shadow-sm position-relative" style={{"cursor":"pointer"}}
                     data-bs-toggle="modal"
                     data-bs-target="#credentialModal"
                     data-doc-title="AL-RAHEEM ASSOCIATES - Official Executive Business Card"
                     data-doc-number="Proprietor: Zohaib Khan | Keamari, Karachi"
                     data-doc-src="images/visiting-card-blue.svg"
                     data-doc-desc="Official Executive Visiting Card of AL-RAHEEM ASSOCIATES (Royal Blue Edition). Demonstrates commercial operations in booking apartments &amp; shops, resale of flats, shops &amp; offices, rentals of flats, shops &amp; godowns, property assessment, and direct executive contact with Zohaib Khan (+92 341 8186681).">
                  <img src="images/visiting-card-blue.svg" alt="AL-RAHEEM ASSOCIATES Official Executive Visiting Card - Royal Blue" className="img-fluid w-100" style={{"maxHeight":"290px","objectFit":"contain"}} />
                  <div className="credential-zoom-overlay">
                    <i className="bi bi-zoom-in fs-2 text-white"></i>
                    <span className="text-white fw-semibold">Click to Inspect Card</span>
                  </div>
                </div>

                <div className="d-flex flex-wrap justify-content-between align-items-center mt-3 px-1 gap-2">
                  <small className="text-muted text-start"><i className="bi bi-geo-alt-fill text-gold me-1"></i>Plot 128, Shop 4, Azan Centre, Keamari</small>
                  <a href="https://wa.me/923418186681?text=Hello%20Zohaib%20Khan%2C%20I%20saw%20your%20visiting%20card%20on%20the%20website%20and%20would%20like%20to%20discuss%20a%20property%20or%20construction%20project." target="_blank" rel="noopener noreferrer" className="btn btn-outline-success btn-sm">
                    <i className="bi bi-whatsapp me-1"></i>Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ======================================================================
         5. SERVICES SECTION (REFLECTING REAL ESTATE, CONSTRUCTION & LABOR)
         ====================================================================== */}
    <section id="services" className="section-padding section-bg-light" aria-label="Our Real Estate, Construction and Skilled Labor Services">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center" data-aos="fade-up">
          <span className="section-subtitle">WHAT WE DELIVER</span>
          <h2 className="section-title">Comprehensive Construction &amp; Real Estate Services</h2>
          <p className="section-description">
            Established in 2016, AL-RAHEEM ASSOCIATES integrates turnkey civil construction, experienced trade labor, commercial brokerage, and secure property investments under one trusted umbrella.
          </p>
        </div>

        {/* 6 Service Cards */}
        <div className="row g-4">
          {/* Service 1: Residential & Commercial Construction */}
          <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="service-card">
              <div className="service-icon-box">
                <i className="bi bi-building-fill"></i>
              </div>
              <h3 className="service-card-title">Residential &amp; Commercial Construction</h3>
              <p className="service-card-text">
                Custom luxury villas, multi-family residential elevations, and executive commercial buildings engineered with high-strength RCC framing, earthquake resistance, and quality waterproofing.
              </p>
              <a href="#contact" className="service-card-link">
                Inquire Service <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* Service 2: Real Estate Rental & Purchasing (Commission Basis) */}
          <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="150">
            <div className="service-card">
              <div className="service-icon-box">
                <i className="bi bi-houses-fill"></i>
              </div>
              <h3 className="service-card-title">Rental &amp; Purchasing Services</h3>
              <p className="service-card-text">
                Operating on a transparent commission basis to assist private buyers and corporate investors in purchasing, selling, or leasing ideal residential and commercial properties in Karachi.
              </p>
              <a href="#contact" className="service-card-link">
                Inquire Service <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* Service 3: Dedicated Skilled Labor Force */}
          <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="service-card">
              <div className="service-icon-box">
                <i className="bi bi-people-fill"></i>
              </div>
              <h3 className="service-card-title">Skilled Construction Workforce</h3>
              <p className="service-card-text">
                Supplying an experienced, vetted workforce for diverse site projects—including master masons, carpenters, certified electricians, and plumbers ensuring high-quality craftsmanship.
              </p>
              <a href="#contact" className="service-card-link">
                Inquire Service <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* Service 4: Booking Apartments & Shops */}
          <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="250">
            <div className="service-card">
              <div className="service-icon-box">
                <i className="bi bi-bookmark-check-fill"></i>
              </div>
              <h3 className="service-card-title">Booking Apartments &amp; Shops</h3>
              <p className="service-card-text">
                Official booking partners for upcoming residential towers, modern apartment complexes, and high-footfall commercial shopping arcades with verified titles and flexible installments.
              </p>
              <a href="#contact" className="service-card-link">
                Inquire Service <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* Service 5: Godowns, Warehouses & Commercial Resale */}
          <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="300">
            <div className="service-card">
              <div className="service-icon-box">
                <i className="bi bi-shop-window"></i>
              </div>
              <h3 className="service-card-title">Resale &amp; Godown Rentals</h3>
              <p className="service-card-text">
                Specialized leasing and resale of commercial godowns, industrial storage warehouses, retail shops, and corporate office suites situated close to port corridors and business avenues.
              </p>
              <a href="#contact" className="service-card-link">
                Inquire Service <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* Service 6: Property Assessment & Real Estate Investments */}
          <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="350">
            <div className="service-card">
              <div className="service-icon-box">
                <i className="bi bi-graph-up-arrow"></i>
              </div>
              <h3 className="service-card-title">Property Assessment &amp; Investments</h3>
              <p className="service-card-text">
                Professional property valuation, legal documentation audit, and high-yield real estate investment opportunities backed by proven market appreciation and steady monthly income.
              </p>
              <a href="#contact" className="service-card-link">
                Inquire Service <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ======================================================================
         6. PROJECTS PORTFOLIO (WITH VANILLA JS FILTERING & MODAL)
         ====================================================================== */}
    <section id="projects" className="section-padding bg-white" aria-label="Projects Portfolio">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center" data-aos="fade-up">
          <span className="section-subtitle">OUR PORTFOLIO</span>
          <h2 className="section-title">Featured Construction &amp; Development Projects</h2>
          <p className="section-description">
            Explore our diverse portfolio of delivered and ongoing residential, commercial, and property developments across Karachi.
          </p>
        </div>

        {/* Filter Buttons (Vanilla JS Filter Controls) */}
        <div className="portfolio-filters" data-aos="fade-up" data-aos-delay="100">
          <button type="button" className="filter-btn active" data-filter="all">All Projects</button>
          <button type="button" className="filter-btn" data-filter="residential">Residential</button>
          <button type="button" className="filter-btn" data-filter="commercial">Commercial</button>
          <button type="button" className="filter-btn" data-filter="ongoing">Ongoing</button>
          <button type="button" className="filter-btn" data-filter="completed">Completed</button>
        </div>

        {/* Projects Grid (3 per row desktop) */}
        <div className="row g-4" id="projectsContainer">
          {/* Project 1: Ahtisham Enterprise (Commercial) - Completed */}
          <div className="col-md-6 col-lg-4 project-item" data-category="commercial" data-status="completed" data-aos="fade-up" data-aos-delay="100">
            <div className="project-card">
              <div className="project-image-wrapper">
                <div className="project-badges">
                  <span className="project-category-badge">Commercial</span>
                  <span className="project-status-badge badge-status-completed">Completed</span>
                </div>
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" alt="Ahtisham Enterprise Corporate Building - Commercial Project" className="project-img" width="800" height="500" loading="lazy" />
              </div>
              <div className="project-card-body">
                <h3 className="project-card-title">Ahtisham Enterprise</h3>
                <div className="project-meta-location">
                  <i className="bi bi-geo-alt-fill text-gold"></i> Main Shahrah-e-Faisal, Karachi
                </div>
                <div className="project-meta-info">
                  <span className="project-meta-year"><i className="bi bi-calendar3 me-1"></i>2025</span>
                  <button type="button" className="btn project-btn-detail"
                    data-bs-toggle="modal"
                    data-bs-target="#projectModal"
                    data-proj-title="Ahtisham Enterprise Commercial Tower"
                    data-proj-client="Ahtisham Enterprise"
                    data-proj-category="Commercial Buildings"
                    data-proj-status="Completed"
                    data-proj-status-className="bg-success"
                    data-proj-year="2025"
                    data-proj-location="Main Shahrah-e-Faisal, Karachi, Pakistan"
                    data-proj-area="48,500 Sq. Ft."
                    data-proj-image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85"
                    data-proj-desc="A state-of-the-art 9-storey commercial corporate tower executed with modern glass curtain walling, seismic-resistant RCC frame, high-speed passenger elevators, and automated fire suppression systems."
                    data-proj-features="9-Storey RCC Superstructure | Double Basement Executive Parking | Solar Integrated Facade &amp; Smart HVAC | Grade-A Acoustic Corporate Interiors">
                    View Details <i className="bi bi-arrow-up-right ms-1"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2: Zubair Associates (Commercial) - Ongoing */}
          <div className="col-md-6 col-lg-4 project-item" data-category="commercial" data-status="ongoing" data-aos="fade-up" data-aos-delay="150">
            <div className="project-card">
              <div className="project-image-wrapper">
                <div className="project-badges">
                  <span className="project-category-badge">Commercial</span>
                  <span className="project-status-badge badge-status-ongoing">Ongoing</span>
                </div>
                <img src="https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=800&q=80" alt="Zubair Associates Corporate Complex - Commercial Project" className="project-img" width="800" height="500" loading="lazy" />
              </div>
              <div className="project-card-body">
                <h3 className="project-card-title">Zubair Associates</h3>
                <div className="project-meta-location">
                  <i className="bi bi-geo-alt-fill text-gold"></i> Clifton Block 4, Karachi
                </div>
                <div className="project-meta-info">
                  <span className="project-meta-year"><i className="bi bi-calendar3 me-1"></i>2026 (In Progress)</span>
                  <button type="button" className="btn project-btn-detail"
                    data-bs-toggle="modal"
                    data-bs-target="#projectModal"
                    data-proj-title="Zubair Associates Corporate Plaza"
                    data-proj-client="Zubair Associates"
                    data-proj-category="Commercial Buildings"
                    data-proj-status="Ongoing"
                    data-proj-status-className="bg-warning text-dark"
                    data-proj-year="2026"
                    data-proj-location="Clifton Block 4, Karachi, Pakistan"
                    data-proj-area="62,000 Sq. Ft."
                    data-proj-image="https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1200&q=85"
                    data-proj-desc="Flagship executive commercial complex featuring premium showroom concourses on ground level and five executive corporate office floors above. Currently completing structural slab casting on schedule."
                    data-proj-features="Heavy-Duty Foundation with Anti-Saline Concrete | Premium Double-Glazed Facade | 100% Standby Power Infrastructure | Energy Efficient VRF Air-Conditioning System">
                    View Details <i className="bi bi-arrow-up-right ms-1"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3: Al-Miraj Heights (Residential) - Completed */}
          <div className="col-md-6 col-lg-4 project-item" data-category="residential" data-status="completed" data-aos="fade-up" data-aos-delay="200">
            <div className="project-card">
              <div className="project-image-wrapper">
                <div className="project-badges">
                  <span className="project-category-badge">Residential</span>
                  <span className="project-status-badge badge-status-completed">Completed</span>
                </div>
                <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80" alt="Al-Miraj Heights Luxury Apartments - Residential Project" className="project-img" width="800" height="500" loading="lazy" />
              </div>
              <div className="project-card-body">
                <h3 className="project-card-title">Al-Miraj Heights</h3>
                <div className="project-meta-location">
                  <i className="bi bi-geo-alt-fill text-gold"></i> Gulshan-e-Iqbal, Karachi
                </div>
                <div className="project-meta-info">
                  <span className="project-meta-year"><i className="bi bi-calendar3 me-1"></i>2024</span>
                  <button type="button" className="btn project-btn-detail"
                    data-bs-toggle="modal"
                    data-bs-target="#projectModal"
                    data-proj-title="Al-Miraj Heights Luxury Residential Towers"
                    data-proj-client="Al-Miraj Group"
                    data-proj-category="Residential Construction"
                    data-proj-status="Completed"
                    data-proj-status-className="bg-success"
                    data-proj-year="2024"
                    data-proj-location="Gulshan-e-Iqbal Block 10-A, Karachi"
                    data-proj-area="36,000 Sq. Ft."
                    data-proj-image="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85"
                    data-proj-desc="Modern multi-family residential building featuring spacious 3-bed and 4-bed luxury suites, soundproof glazing, underground water reservoir capacity of 40,000 gallons, and rooftop family garden."
                    data-proj-features="Turnkey Residential Superstructure | Anti-Termite &amp; Bitumen Chemical Waterproofing | Imported Spanish Tiling &amp; Custom Ashwood Doors | Modern Rooftop Pergola &amp; Community Space">
                    View Details <i className="bi bi-arrow-up-right ms-1"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Project 4: Horizon Luxury Villas (Residential) - Completed */}
          <div className="col-md-6 col-lg-4 project-item" data-category="residential" data-status="completed" data-aos="fade-up" data-aos-delay="250">
            <div className="project-card">
              <div className="project-image-wrapper">
                <div className="project-badges">
                  <span className="project-category-badge">Residential</span>
                  <span className="project-status-badge badge-status-completed">Completed</span>
                </div>
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="Horizon Luxury Villas - Residential Project" className="project-img" width="800" height="500" loading="lazy" />
              </div>
              <div className="project-card-body">
                <h3 className="project-card-title">Horizon Luxury Villas</h3>
                <div className="project-meta-location">
                  <i className="bi bi-geo-alt-fill text-gold"></i> DHA Phase 8, Karachi
                </div>
                <div className="project-meta-info">
                  <span className="project-meta-year"><i className="bi bi-calendar3 me-1"></i>2025</span>
                  <button type="button" className="btn project-btn-detail"
                    data-bs-toggle="modal"
                    data-bs-target="#projectModal"
                    data-proj-title="Horizon Luxury Villas Enclave"
                    data-proj-client="Horizon Properties"
                    data-proj-category="Residential Construction"
                    data-proj-status="Completed"
                    data-proj-status-className="bg-success"
                    data-proj-year="2025"
                    data-proj-location="DHA Phase 8, Karachi, Pakistan"
                    data-proj-area="18,500 Sq. Ft."
                    data-proj-image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
                    data-proj-desc="A prestigious enclave of custom 500-yard duplex villas designed with contemporary minimalist architecture, bespoke teak woodwork, infinity plunge pools, and German UPVC double-glazed thermal windows."
                    data-proj-features="500 Sq. Yd. Signature Architecture Duplexes | Smart Home Automation &amp; Integrated Security | Custom Landscaping &amp; Infinity Pools | Full Turnkey Designer Interior Finishing">
                    View Details <i className="bi bi-arrow-up-right ms-1"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Project 5: Metro Trade Centre (Commercial) - Completed */}
          <div className="col-md-6 col-lg-4 project-item" data-category="commercial" data-status="completed" data-aos="fade-up" data-aos-delay="300">
            <div className="project-card">
              <div className="project-image-wrapper">
                <div className="project-badges">
                  <span className="project-category-badge">Commercial</span>
                  <span className="project-status-badge badge-status-completed">Completed</span>
                </div>
                <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80" alt="Metro Trade Centre - Commercial Project" className="project-img" width="800" height="500" loading="lazy" />
              </div>
              <div className="project-card-body">
                <h3 className="project-card-title">Metro Trade Centre</h3>
                <div className="project-meta-location">
                  <i className="bi bi-geo-alt-fill text-gold"></i> PECHS Block 2, Karachi
                </div>
                <div className="project-meta-info">
                  <span className="project-meta-year"><i className="bi bi-calendar3 me-1"></i>2023</span>
                  <button type="button" className="btn project-btn-detail"
                    data-bs-toggle="modal"
                    data-bs-target="#projectModal"
                    data-proj-title="Metro Trade Centre Commercial Hub"
                    data-proj-client="Metro Urban Developers"
                    data-proj-category="Commercial Buildings"
                    data-proj-status="Completed"
                    data-proj-status-className="bg-success"
                    data-proj-year="2023"
                    data-proj-location="PECHS Block 2, Karachi, Pakistan"
                    data-proj-area="55,000 Sq. Ft."
                    data-proj-image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85"
                    data-proj-desc="Mixed-use retail concourse and executive commercial suites. Built with heavy-duty structural foundation, post-tensioned floor systems, centralized HVAC shafting, and K-Electric substation integration."
                    data-proj-features="Turnkey Commercial Mixed-Use Retail &amp; Office Hub | Dedicated Multi-Vehicle Subterranean Parking | Integrated Central Building Management System (BMS) | Heavy-Duty Freight &amp; Passenger Elevators">
                    View Details <i className="bi bi-arrow-up-right ms-1"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Project 6: Clifton Royal Residency (Residential) - Ongoing */}
          <div className="col-md-6 col-lg-4 project-item" data-category="residential" data-status="ongoing" data-aos="fade-up" data-aos-delay="350">
            <div className="project-card">
              <div className="project-image-wrapper">
                <div className="project-badges">
                  <span className="project-category-badge">Residential</span>
                  <span className="project-status-badge badge-status-ongoing">Ongoing</span>
                </div>
                <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80" alt="Clifton Royal Residency - Residential Project" className="project-img" width="800" height="500" loading="lazy" />
              </div>
              <div className="project-card-body">
                <h3 className="project-card-title">Clifton Royal Residency</h3>
                <div className="project-meta-location">
                  <i className="bi bi-geo-alt-fill text-gold"></i> Clifton Block 2, Karachi
                </div>
                <div className="project-meta-info">
                  <span className="project-meta-year"><i className="bi bi-calendar3 me-1"></i>2026 (Under Construction)</span>
                  <button type="button" className="btn project-btn-detail"
                    data-bs-toggle="modal"
                    data-bs-target="#projectModal"
                    data-proj-title="Clifton Royal Beachfront Residency"
                    data-proj-client="Clifton Holdings"
                    data-proj-category="Residential Construction"
                    data-proj-status="Ongoing"
                    data-proj-status-className="bg-warning text-dark"
                    data-proj-year="2026"
                    data-proj-location="Clifton Block 2, Karachi, Pakistan"
                    data-proj-area="75,000 Sq. Ft."
                    data-proj-image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85"
                    data-proj-desc="An ultra-luxury 14-storey residential tower currently progressing through the RCC superstructure phase. Designed to withstand coastal maritime salt exposure using sulfate-resistant cement and epoxy-coated steel bars."
                    data-proj-features="Maritime Coastal Anti-Corrosion Engineering | 14-Storey RCC Superstructure with Deep Piling Foundation | Rooftop Recreational Deck &amp; Sky Lounge | Turnkey Finishing Handover in Q4 2026">
                    View Details <i className="bi bi-arrow-up-right ms-1"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ======================================================================
         6B. SITE VIDEOS & WALKTHROUGHS SECTION
         ====================================================================== */}
    <section id="videos" className="section-padding video-showcase-section" aria-label="On-Site Construction and Project Progress Videos">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center" data-aos="fade-up">
          <span className="section-subtitle text-gold"><i className="bi bi-camera-video me-1"></i> SITE VISITS &amp; WALKTHROUGHS</span>
          <h2 className="section-title text-white">Live Construction &amp; Development Videos</h2>
          <p className="section-description text-white-50">
            Witness our on-ground execution, structural precision, and real-time site development across Karachi.
          </p>
        </div>

        <div className="row g-4 align-items-start mt-2">
          {/* Main Cinema Video Player Column */}
          <div className="col-lg-7 col-xl-7" data-aos="fade-up" data-aos-delay="100">
            <div className="video-player-wrapper shadow-lg">
              <div className="video-container-ratio position-relative">
                {activeVideo.src ? (
                  <video
                    key={activeVideo.src}
                    controls
                    playsInline
                    preload="metadata"
                    className="main-video-player"
                    poster={activeVideo.poster}
                  >
                    <source src={activeVideo.src} type="video/mp4" />
                    {activeVideo.fallbackSrc && <source src={activeVideo.fallbackSrc} type="video/mp4" />}
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

              {/* Video Info Details */}
              <div className="video-info-box">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                  <div className="d-flex align-items-center gap-2 flex-wrap">
                    <span className="video-badge">
                      <i className="bi bi-broadcast text-gold"></i> {activeVideo.badge}
                    </span>
                    <span className="video-tag-duration">
                      <i className="bi bi-clock me-1 text-gold"></i> {activeVideo.duration}
                    </span>
                  </div>
                  <div className="text-gold small fw-semibold">
                    <i className="bi bi-geo-alt-fill me-1"></i> {activeVideo.location}
                  </div>
                </div>

                <h3 className="video-info-title">{activeVideo.title}</h3>
                <p className="video-info-desc">
                  {activeVideo.desc}
                </p>

                <div className="video-cta-group">
                  <a
                    href="https://wa.me/923418186681?text=Salam%20Al-Raheem%20Associates,%20I%20watched%20your%20site%20walkthrough%20video%20and%20want%20to%20consult%20about%20a%20construction%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-gold btn-sm px-3 py-2 fw-bold"
                  >
                    <i className="bi bi-whatsapp me-1"></i> Discuss Site Visit on WhatsApp
                  </a>
                  <a href="#contact" className="btn btn-outline-light btn-sm px-3 py-2 fw-semibold">
                    <i className="bi bi-chat-dots me-1"></i> Book Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Side Playlist & Features Column */}
          <div className="col-lg-5 col-xl-5" data-aos="fade-up" data-aos-delay="200">
            <div className="video-playlist-wrapper">
              <div className="d-flex align-items-center justify-content-between mb-1">
                <h4 className="h5 fw-bold text-white mb-0 d-flex align-items-center gap-2">
                  <i className="bi bi-collection-play-fill text-gold"></i>
                  <span>Project Videos</span>
                </h4>
                <span className="badge bg-dark border border-secondary text-gold px-2 py-1 small">
                  {videoList.length} Videos
                </span>
              </div>

              {/* Playlist items grid */}
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
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          setActiveVideo(vid);
                        }
                      }}
                    >
                      <div className="video-thumbnail-box">
                        <img
                          src={vid.poster}
                          alt=""
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.src = '/images/logo-icon-key.svg';
                            e.currentTarget.classList.add('p-2');
                          }}
                        />
                        <div className="video-thumbnail-play">
                          <i className={`bi ${isSelected ? 'bi-play-fill' : 'bi-play'}`}></i>
                        </div>
                      </div>
                      <div className="video-card-content">
                        <div className="video-card-meta mb-1">
                          <span className="video-badge" style={{ fontSize: '0.66rem', padding: '0.15rem 0.45rem' }}>
                            {vid.badge}
                          </span>
                          <span className="video-tag-duration" style={{ fontSize: '0.66rem', padding: '0.15rem 0.45rem' }}>
                            {vid.duration}
                          </span>
                        </div>
                        <h4 className="video-card-title" title={vid.title}>
                          {vid.title}
                        </h4>
                        <div className="video-card-meta">
                          <i className="bi bi-geo-alt-fill text-gold"></i>
                          <span>{vid.location}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Verified Supervision Card */}
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

    {/* ======================================================================
         7. OUR CLIENTS & TESTIMONIALS SECTION
         ====================================================================== */}
    <section id="clients" className="section-padding section-bg-light" aria-label="Our Esteemed Clients and Testimonials">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center" data-aos="fade-up">
          <span className="section-subtitle">TRUSTED PARTNERSHIPS</span>
          <h2 className="section-title">Our Valued Clients</h2>
          <p className="section-description">
            Proud to partner with leading corporate enterprises, institutional investors, and discerning private property owners across Pakistan.
          </p>
        </div>

        {/* Clean Grid of Client Name-Cards with Logo-Style Icons */}
        <div className="row g-2 g-md-4" data-aos="fade-up" data-aos-delay="100">
          <div className="col-6 col-lg-4">
            <div className="client-logo-card">
              <div className="client-icon">
                <i className="bi bi-building"></i>
              </div>
              <div>
                <h3 className="client-name">Ahtisham Enterprise</h3>
                <p className="client-type">Commercial Client</p>
              </div>
            </div>
          </div>

          <div className="col-6 col-lg-4">
            <div className="client-logo-card">
              <div className="client-icon">
                <i className="bi bi-briefcase-fill"></i>
              </div>
              <div>
                <h3 className="client-name">Zubair Associates</h3>
                <p className="client-type">Commercial Client</p>
              </div>
            </div>
          </div>

          <div className="col-6 col-lg-4">
            <div className="client-logo-card">
              <div className="client-icon">
                <i className="bi bi-houses-fill"></i>
              </div>
              <div>
                <h3 className="client-name">Al-Miraj Group</h3>
                <p className="client-type">Residential Client</p>
              </div>
            </div>
          </div>

          <div className="col-6 col-lg-4">
            <div className="client-logo-card">
              <div className="client-icon">
                <i className="bi bi-house-gear-fill"></i>
              </div>
              <div>
                <h3 className="client-name">Horizon Properties</h3>
                <p className="client-type">Residential Client</p>
              </div>
            </div>
          </div>

          <div className="col-6 col-lg-4">
            <div className="client-logo-card">
              <div className="client-icon">
                <i className="bi bi-buildings"></i>
              </div>
              <div>
                <h3 className="client-name">Metro Urban Developers</h3>
                <p className="client-type">Commercial Client</p>
              </div>
            </div>
          </div>

          <div className="col-6 col-lg-4">
            <div className="client-logo-card">
              <div className="client-icon">
                <i className="bi bi-gem"></i>
              </div>
              <div>
                <h3 className="client-name">Clifton Holdings</h3>
                <p className="client-type">Residential Client</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bootstrap Testimonials Carousel (3 Sample Testimonials) */}
        <div className="testimonials-container" data-aos="fade-up" data-aos-delay="200">
          <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="6000">
            <div className="carousel-inner">
              {/* Testimonial 1 */}
              <div className="carousel-item active">
                <div className="testimonial-card">
                  <div className="testimonial-quote-icon">
                    <i className="bi bi-quote"></i>
                  </div>
                  <p className="testimonial-text">
                    &ldquo;AL-RAHEEM ASSOCIATES and their engineering team proved to be exceptional partners during the construction and leasing of our corporate spaces on Shahrah-e-Faisal. Their rigor, strict adherence to quality, and on-schedule delivery established them as a top-tier firm in our book.&rdquo;
                  </p>
                  <div className="testimonial-rating">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <div className="testimonial-author-name">Tariq Ahtisham</div>
                  <div className="testimonial-author-role">Managing Director, Ahtisham Enterprise</div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="carousel-item">
                <div className="testimonial-card">
                  <div className="testimonial-quote-icon">
                    <i className="bi bi-quote"></i>
                  </div>
                  <p className="testimonial-text">
                    &ldquo;Collaborating with Mr. Zohaib Khan and his skilled workforce on our Clifton project has been thoroughly professional. What stands out most is their absolute transparency in property assessment, reliable tradesmen, and Zero Cost Escalation policy. Truly trustworthy.&rdquo;
                  </p>
                  <div className="testimonial-rating">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <div className="testimonial-author-name">Zubair Farooqi</div>
                  <div className="testimonial-author-role">Principal Executive, Zubair Associates</div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="carousel-item">
                <div className="testimonial-card">
                  <div className="testimonial-quote-icon">
                    <i className="bi bi-quote"></i>
                  </div>
                  <p className="testimonial-text">
                    &ldquo;The structural safety and finishing craftsmanship delivered for Al-Miraj Heights is benchmark quality. When our consultants reviewed the legal documentations and site execution, everything matched statutory codes. We look forward to our next development with them.&rdquo;
                  </p>
                  <div className="testimonial-rating">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <div className="testimonial-author-name">Muhammad Miraj</div>
                  <div className="testimonial-author-role">Chairman, Al-Miraj Group</div>
                </div>
              </div>
            </div>

            {/* Indicators */}
            <div className="carousel-indicators position-static mt-4">
              <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ======================================================================
         8. COMPANY CREDENTIALS SECTION (VISA / LEGAL CREDIBILITY)
         ====================================================================== */}
    <section id="credentials" className="section-padding bg-white" aria-label="Official Company Credentials and Legal Registration">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center" data-aos="fade-up">
          <span className="section-subtitle">OFFICIAL LEGAL STANDING</span>
          <h2 className="section-title">Company Credentials &amp; Certifications</h2>
          <p className="section-description">
            <strong>M/s Al-Raheem Associates</strong> operates as an officially registered, chamber-certified, and tax-compliant engineering and development firm in Pakistan. All records are verifiable through respective official portals.
          </p>
        </div>

        {/* Banner with Registration Numbers for Rapid Verification (Great for Visa Officers) */}
        <div className="credentials-banner" data-aos="fade-up" data-aos-delay="100">
          <div className="row g-3 align-items-center">
            <div className="col-12 col-md-6 col-xl-3">
              <div className="credential-meta-item">
                <div className="credential-meta-icon">
                  <i className="bi bi-patch-check-fill text-gold"></i>
                </div>
                <div className="credential-meta-text">
                  <span className="credential-meta-label">KCCI Membership No.</span>
                  <span className="credential-meta-value">150586 (Valid 2027)</span>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-3">
              <div className="credential-meta-item">
                <div className="credential-meta-icon">
                  <i className="bi bi-receipt-cutoff text-gold"></i>
                </div>
                <div className="credential-meta-text">
                  <span className="credential-meta-label">FBR National Tax No.</span>
                  <span className="credential-meta-value">5357401-7 (ATL Active)</span>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-3">
              <div className="credential-meta-item">
                <div className="credential-meta-icon">
                  <i className="bi bi-calendar2-check text-gold"></i>
                </div>
                <div className="credential-meta-text">
                  <span className="credential-meta-label">Year Established</span>
                  <span className="credential-meta-value">Serving Since 2016</span>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-3">
              <div className="credential-meta-item">
                <div className="credential-meta-icon">
                  <i className="bi bi-geo-alt-fill text-gold"></i>
                </div>
                <div className="credential-meta-text">
                  <span className="credential-meta-label">Verified Office Address</span>
                  <span className="credential-meta-value">Azan Centre, Keamari</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Document Cards Grid: KCCI Cert, KCCI Card, FBR NTN, Visiting Card Blue, PBA Card */}
        <div className="row g-4 justify-content-center" data-aos="fade-up" data-aos-delay="200">
          
          {/* Document 1: Karachi Chamber of Commerce Certificate */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="credential-card">
              <div className="credential-thumbnail-box"
                   data-bs-toggle="modal"
                   data-bs-target="#credentialModal"
                   data-doc-title="Karachi Chamber of Commerce &amp; Industry (KCCI) Certificate"
                   data-doc-number="Membership No: 150586 | Serial No: K 302136"
                   data-doc-src="images/kcci-certificate.jpg"
                   data-doc-pdf="images/kcci-membership-certificate.pdf"
                   data-doc-desc="Official Membership Certificate granted by Karachi Chamber of Commerce &amp; Industry (KCCI), affiliated with the Federation of Pakistan Chambers of Commerce &amp; Industry (FPCCI), certifying M/s Al-Raheem Associates as a statutory corporate member valid through 31st March 2027.">
                <img src="images/kcci-certificate.jpg" alt="KCCI Membership Certificate" className="credential-thumbnail-img" width="400" height="560" loading="lazy" />
                <div className="credential-zoom-overlay">
                  <i className="bi bi-zoom-in fs-2"></i>
                  <span className="fw-semibold">Inspect Document</span>
                </div>
              </div>
              <div className="credential-card-body">
                <div className="credential-issuer">Karachi Chamber of Commerce &amp; Industry</div>
                <h3 className="credential-title">KCCI Membership Certificate</h3>
                <p className="credential-desc">Official statutory membership (Reg # 150586) affiliated with FPCCI, valid through 31st March 2027.</p>
                <div className="d-flex gap-2">
                  <button type="button" className="btn btn-navy-outline btn-sm flex-grow-1"
                          data-bs-toggle="modal"
                          data-bs-target="#credentialModal"
                          data-doc-title="Karachi Chamber of Commerce &amp; Industry (KCCI) Certificate"
                          data-doc-number="Membership No: 150586 | Serial No: K 302136"
                          data-doc-src="images/kcci-certificate.jpg"
                          data-doc-pdf="images/kcci-membership-certificate.pdf"
                          data-doc-desc="Official Membership Certificate granted by Karachi Chamber of Commerce &amp; Industry (KCCI), affiliated with the Federation of Pakistan Chambers of Commerce &amp; Industry (FPCCI), certifying M/s Al-Raheem Associates as a statutory corporate member valid through 31st March 2027.">
                    <i className="bi bi-eye me-1"></i>Inspect
                  </button>
                  <a href="images/kcci-membership-certificate.pdf" target="_blank" className="btn btn-outline-secondary btn-sm" title="Download Official PDF">
                    <i className="bi bi-file-earmark-pdf"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Document 2: Karachi Chamber of Commerce Membership Card */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="credential-card">
              <div className="credential-thumbnail-box"
                   data-bs-toggle="modal"
                   data-bs-target="#credentialModal"
                   data-doc-title="KCCI Official Smart Membership Card"
                   data-doc-number="Card No: 150586 | CNIC: 42401-8997962-9"
                   data-doc-src="images/kcci-card-front.jpg"
                   data-doc-src-back="images/kcci-card-back.jpg"
                   data-doc-pdf="images/kcci-membership-card.pdf"
                   data-doc-desc="Statutory Karachi Chamber of Commerce &amp; Industry Smart Card issued to Chief Executive Zohaib Khan for M/s Al-Raheem Associates. Valid through 31st March 2027.">
                <img src="images/kcci-card-front.jpg" alt="KCCI Membership Card Front" className="credential-thumbnail-img" width="400" height="560" loading="lazy" />
                <div className="credential-zoom-overlay">
                  <i className="bi bi-zoom-in fs-2"></i>
                  <span className="fw-semibold">Inspect Card</span>
                </div>
              </div>
              <div className="credential-card-body">
                <div className="credential-issuer">Karachi Chamber of Commerce &amp; Industry</div>
                <h3 className="credential-title">KCCI Official Member Card</h3>
                <p className="credential-desc">Official photographic smart membership identity card issued to Chief Executive Zohaib Khan, valid until 2027.</p>
                <div className="d-flex gap-2">
                  <button type="button" className="btn btn-navy-outline btn-sm flex-grow-1"
                          data-bs-toggle="modal"
                          data-bs-target="#credentialModal"
                          data-doc-title="KCCI Official Smart Membership Card"
                          data-doc-number="Card No: 150586 | CNIC: 42401-8997962-9"
                          data-doc-src="images/kcci-card-front.jpg"
                          data-doc-src-back="images/kcci-card-back.jpg"
                          data-doc-pdf="images/kcci-membership-card.pdf"
                          data-doc-desc="Statutory Karachi Chamber of Commerce &amp; Industry Smart Card issued to Chief Executive Zohaib Khan for M/s Al-Raheem Associates. Valid through 31st March 2027.">
                    <i className="bi bi-eye me-1"></i>Inspect
                  </button>
                  <a href="images/kcci-membership-card.pdf" target="_blank" className="btn btn-outline-secondary btn-sm" title="Download Official PDF">
                    <i className="bi bi-file-earmark-pdf"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Document 3: Federal Board of Revenue NTN Certificate */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="credential-card">
              <div className="credential-thumbnail-box"
                   data-bs-toggle="modal"
                   data-bs-target="#credentialModal"
                   data-doc-title="FBR National Tax Number (NTN) Certificate"
                   data-doc-number="NTN: 5357401-7 | Active Taxpayer (ATL)"
                   data-doc-src="images/cert-ntn.svg"
                   data-doc-pdf="images/fbr-ntn-tax-certificate.pdf"
                   data-doc-desc="Federal Board of Revenue (FBR) Active Taxpayer Online Verification Record and Registration Certificate enrolled under Section 181 of the Income Tax Ordinance 2001 for Principal Business Activity in Civil Construction and Real Estate.">
                <img src="images/cert-ntn.svg" alt="FBR NTN Tax Certificate" className="credential-thumbnail-img" width="400" height="560" loading="lazy" />
                <div className="credential-zoom-overlay">
                  <i className="bi bi-zoom-in fs-2"></i>
                  <span className="fw-semibold">Inspect Document</span>
                </div>
              </div>
              <div className="credential-card-body">
                <div className="credential-issuer">Federal Board of Revenue (FBR)</div>
                <h3 className="credential-title">FBR NTN Tax Certificate</h3>
                <p className="credential-desc">Certified Active Taxpayer (NTN 5357401-7, Reg: 42401-8997962-9) enrolled under Section 181, RTO-I Karachi.</p>
                <div className="d-flex gap-2">
                  <button type="button" className="btn btn-navy-outline btn-sm flex-grow-1"
                          data-bs-toggle="modal"
                          data-bs-target="#credentialModal"
                          data-doc-title="FBR National Tax Number (NTN) Certificate"
                          data-doc-number="NTN: 5357401-7 | Active Taxpayer (ATL)"
                          data-doc-src="images/cert-ntn.svg"
                          data-doc-pdf="images/fbr-ntn-tax-certificate.pdf"
                          data-doc-desc="Federal Board of Revenue (FBR) Active Taxpayer Online Verification Record and Registration Certificate enrolled under Section 181 of the Income Tax Ordinance 2001 for Principal Business Activity in Civil Construction and Real Estate.">
                    <i className="bi bi-eye me-1"></i>Inspect
                  </button>
                  <a href="images/fbr-ntn-tax-certificate.pdf" target="_blank" className="btn btn-outline-secondary btn-sm" title="Download Official PDF">
                    <i className="bi bi-file-earmark-pdf"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Document 4: Pakistan Businessmen Association Verification */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="credential-card">
              <div className="credential-thumbnail-box"
                   data-bs-toggle="modal"
                   data-bs-target="#credentialModal"
                   data-doc-title="Pakistan Businessmen Association (PBA) Verification Certificate"
                   data-doc-number="Businessman No: BP-2670 | Business No: BS-2687"
                   data-doc-src="images/pba-member-card.jpg"
                   data-doc-src-back="images/pba-card-back.jpg"
                   data-doc-pdf="images/pba-businessmen-verification.pdf"
                   data-doc-desc="Statutory Associate Class Businessman Verification Certificate issued by the Pakistan Businessmen Association (Recognized by Government of Pakistan) to Proprietor Zohaib Khan for M/s Al-Raheem Associates, valid through 31st March 2026.">
                <img src="images/pba-member-card.jpg" alt="Pakistan Businessmen Association Verification Card" className="credential-thumbnail-img" width="400" height="560" loading="lazy" />
                <div className="credential-zoom-overlay">
                  <i className="bi bi-zoom-in fs-2"></i>
                  <span className="fw-semibold">Inspect Document</span>
                </div>
              </div>
              <div className="credential-card-body">
                <div className="credential-issuer">Pakistan Businessmen Association</div>
                <h3 className="credential-title">PBA Businessman Verification</h3>
                <p className="credential-desc">Government Recognized Associate Class Membership Certificate (BP-2670 / BS-2687), valid through March 2026.</p>
                <div className="d-flex gap-2">
                  <button type="button" className="btn btn-navy-outline btn-sm flex-grow-1"
                          data-bs-toggle="modal"
                          data-bs-target="#credentialModal"
                          data-doc-title="Pakistan Businessmen Association (PBA) Verification Certificate"
                          data-doc-number="Businessman No: BP-2670 | Business No: BS-2687"
                          data-doc-src="images/pba-member-card.jpg"
                          data-doc-src-back="images/pba-card-back.jpg"
                          data-doc-pdf="images/pba-businessmen-verification.pdf"
                          data-doc-desc="Statutory Associate Class Businessman Verification Certificate issued by the Pakistan Businessmen Association (Recognized by Government of Pakistan) to Proprietor Zohaib Khan for M/s Al-Raheem Associates, valid through 31st March 2026.">
                    <i className="bi bi-eye me-1"></i>Inspect
                  </button>
                  <a href="images/pba-businessmen-verification.pdf" target="_blank" className="btn btn-outline-secondary btn-sm" title="Download Official PDF">
                    <i className="bi bi-file-earmark-pdf"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* ======================================================================
         9. WHY CHOOSE US & HOW WE WORK PROCESS TIMELINE
         ====================================================================== */}
    <section id="why-us" className="section-padding section-bg-light" aria-label="Why Choose AL-RAHEEM ASSOCIATES and Our Process">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center" data-aos="fade-up">
          <span className="section-subtitle">OUR ADVANTAGE</span>
          <h2 className="section-title">Why Choose AL-RAHEEM ASSOCIATES</h2>
          <p className="section-description">
            Delivering trusted real estate brokerage, turnkey civil construction, skilled labor workforce, and transparent property development backed by official Chamber and tax compliance.
          </p>
        </div>

        {/* 6 Core Value Pillars */}
        <div className="row g-4 mb-5">
          {/* Point 1: Registered & Statutory Certified */}
          <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="why-card why-us-card">
              <div className="why-icon why-icon-box">
                <i className="bi bi-patch-check-fill"></i>
              </div>
              <h3 className="why-card-title">Officially Registered &amp; Certified</h3>
              <p className="why-card-text">
                Fully compliant corporate entity registered as <strong>M/s Al-Raheem Associates</strong> holding official Karachi Chamber of Commerce Membership (KCCI #150586), Active FBR Taxpayer status (NTN #5357401-7), and PBA verification (BP-2670).
              </p>
            </div>
          </div>

          {/* Point 2: Experienced Skilled Workforce */}
          <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="150">
            <div className="why-card why-us-card">
              <div className="why-icon why-icon-box">
                <i className="bi bi-people-fill"></i>
              </div>
              <h3 className="why-card-title">Dedicated Skilled Workforce</h3>
              <p className="why-card-text">
                Supervised by Founder Zohaib Khan, our workforce consists of experienced masons, carpenters, electricians, and plumbers delivering superior structural craftsmanship across Karachi.
              </p>
            </div>
          </div>

          {/* Point 3: End-to-End Real Estate Brokerage */}
          <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="why-card why-us-card">
              <div className="why-icon why-icon-box">
                <i className="bi bi-buildings-fill"></i>
              </div>
              <h3 className="why-card-title">End-to-End Property Brokerage</h3>
              <p className="why-card-text">
                Direct booking of apartments and commercial shops, resale of flats and offices, plus comprehensive rental management for shops, godowns, and warehouses.
              </p>
            </div>
          </div>

          {/* Point 4: 100% Transparent BOQ & Commission */}
          <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="250">
            <div className="why-card why-us-card">
              <div className="why-icon why-icon-box">
                <i className="bi bi-cash-stack"></i>
              </div>
              <h3 className="why-card-title">100% Transparent BOQ &amp; Terms</h3>
              <p className="why-card-text">
                Clear itemized Bill of Quantities (BOQ), contractual milestone payments, and honest commission rates. We operate on a strict zero-hidden-charges policy for absolute investor security.
              </p>
            </div>
          </div>

          {/* Point 5: Accurate Property Assessment */}
          <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="300">
            <div className="why-card why-us-card">
              <div className="why-icon why-icon-box">
                <i className="bi bi-clipboard2-data-fill"></i>
              </div>
              <h3 className="why-card-title">Accurate Property Assessment</h3>
              <p className="why-card-text">
                Comprehensive market valuation, legal documentation audit, and structural integrity analysis ensuring your capital is deployed in high-yield Karachi properties.
              </p>
            </div>
          </div>

          {/* Point 6: Punctual Delivery & Handover Support */}
          <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="350">
            <div className="why-card why-us-card">
              <div className="why-icon why-icon-box">
                <i className="bi bi-shield-check"></i>
              </div>
              <h3 className="why-card-title">Punctual Delivery &amp; Warranty</h3>
              <p className="why-card-text">
                Disciplined project execution with weekly reporting, guaranteed handover dates, defect liability assistance, and comprehensive post-handover client support.
              </p>
            </div>
          </div>
        </div>

        {/* 4-Step "How We Work" Process Timeline */}
        <div className="process-wrapper process-timeline-wrapper" data-aos="fade-up">
          <div className="text-center mb-5">
            <span className="section-subtitle">TRANSPARENT WORKFLOW</span>
            <h3 className="h3 fw-bold text-navy">Our 4-Step Project Roadmap</h3>
            <p className="text-muted small">From initial consultation to final keys handover</p>
          </div>

          <div className="row g-4 process-timeline-row">
            {/* Step 1 */}
            <div className="col-md-6 col-lg-3">
              <div className="process-card process-step-card">
                <div className="process-step-number">01</div>
                <div className="process-icon-box">
                  <i className="bi bi-chat-left-dots-fill"></i>
                </div>
                <h4 className="process-title process-step-title">Consultation &amp; Feasibility</h4>
                <p className="process-desc process-step-text">Site inspection, client requirement mapping, municipal zoning review, and preliminary budget framework.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="col-md-6 col-lg-3">
              <div className="process-card process-step-card">
                <div className="process-step-number">02</div>
                <div className="process-icon-box">
                  <i className="bi bi-pencil-square"></i>
                </div>
                <h4 className="process-title process-step-title">Planning &amp; BOQ Formulation</h4>
                <p className="process-desc process-step-text">Architectural layouts, material specifications, transparent itemized BOQ, and statutory documentation review.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="col-md-6 col-lg-3">
              <div className="process-card process-step-card">
                <div className="process-step-number">03</div>
                <div className="process-icon-box">
                  <i className="bi bi-hammer"></i>
                </div>
                <h4 className="process-title process-step-title">Turnkey Skilled Execution</h4>
                <p className="process-desc process-step-text">Structural frame erection, masonry, electrical/plumbing MEP installations by our vetted in-house trade specialists.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="col-md-6 col-lg-3">
              <div className="process-card process-step-card">
                <div className="process-step-number">04</div>
                <div className="process-icon-box">
                  <i className="bi bi-key-fill"></i>
                </div>
                <h4 className="process-title process-step-title">Snagging &amp; Keys Handover</h4>
                <p className="process-desc process-step-text">Joint inspection audit, finishes polishing, warranty documentation, and official keys handover.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ======================================================================
         10. CALL-TO-ACTION BANNER (FULL CONTRAST & RADIANT NAVY GRADIENT)
         ====================================================================== */}
    <section className="cta-banner-section cta-banner" aria-label="Call to Action">
      <div className="container">
        <div className="row align-items-center justify-content-between g-4">
          <div className="col-lg-8 text-center text-lg-start" data-aos="fade-right">
            <span className="badge bg-gold text-navy fw-bold px-3 py-2 rounded-pill text-uppercase mb-3">Direct Executive Inquiries</span>
            <h2 className="display-6 fw-bold text-white mb-2">Ready to Build or Invest in Your Next Project?</h2>
            <p className="text-white mb-0" style={{"fontSize":"1.08rem","opacity":"0.9"}}>
              Partner with Karachi's trusted, KCCI-certified construction and real estate firm established in 2016. Schedule a consultation directly with Founder Zohaib Khan.
            </p>
          </div>
          <div className="col-lg-4 text-center text-lg-end" data-aos="fade-left">
            <div className="d-flex flex-column flex-sm-row justify-content-lg-end gap-3">
              <a href="#contact" className="btn btn-gold btn-lg px-4 py-3 fw-bold">
                <i className="bi bi-chat-left-dots-fill me-2"></i>Contact Us
              </a>
              <a href="tel:+923418186681" className="btn btn-outline-light btn-lg px-4 py-3 fw-bold">
                <i className="bi bi-telephone-fill text-gold me-2"></i>+92 341 8186681
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ======================================================================
         11. CONTACT US SECTION (TWO COLUMNS: DETAILS + FORM)
         ====================================================================== */}
    <section id="contact" className="section-padding bg-white" aria-label="Contact Information and Inquiry Form">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center" data-aos="fade-up">
          <span className="section-subtitle">GET IN TOUCH</span>
          <h2 className="section-title">Start Your Project Consultation</h2>
          <p className="section-description">
            Reach out to our engineering and real estate team today for project feasibilities, structural audits, or a detailed quotation.
          </p>
        </div>

        <div className="row g-4 g-lg-5">
          {/* Left Column: Contact Info & Embedded Google Maps */}
          <div className="col-lg-5" data-aos="fade-right">
            <div className="contact-info-panel h-100 d-flex flex-column justify-content-between">
              <div>
                <h3 className="h4 fw-bold text-navy mb-4">Corporate Office</h3>

                {/* Address */}
                <div className="contact-detail-row">
                  <div className="contact-detail-icon">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>
                  <div>
                    <h4 className="contact-detail-title">Office Address</h4>
                    <p className="contact-detail-value mb-0">
                      Plot No. 128, Shop No. 4, Azan Centre, Near NBP Bank (Keamari Branch), Keamari, Karachi, Sindh, Postal Code 75620, Pakistan
                    </p>
                  </div>
                </div>

                {/* Phone / WhatsApp */}
                <div className="contact-detail-row">
                  <div className="contact-detail-icon">
                    <i className="bi bi-telephone-fill"></i>
                  </div>
                  <div>
                    <h4 className="contact-detail-title">Direct Phone / WhatsApp</h4>
                    <p className="contact-detail-value mb-0">
                      <a href="tel:+923418186681" className="d-block text-navy fw-bold text-decoration-none">+92 341 8186681 (03418186681)</a>
                      <a href="https://wa.me/923418186681?text=Hello%20Zohaib%20Khan%2C%20I%20would%20like%20to%20inquire%20about%20a%20property%20or%20construction%20project." target="_blank" rel="noopener noreferrer" className="badge bg-success text-white text-decoration-none mt-1">
                        <i className="bi bi-whatsapp me-1"></i>Chat on WhatsApp
                      </a>
                    </p>
                    <small className="text-muted d-block mt-1">Office / Alt: +92 333 2179918</small>
                  </div>
                </div>

                {/* Email */}
                <div className="contact-detail-row">
                  <div className="contact-detail-icon">
                    <i className="bi bi-envelope-fill"></i>
                  </div>
                  <div>
                    <h4 className="contact-detail-title">Email Inquiries</h4>
                    <p className="contact-detail-value mb-0">
                      <a href="mailto:info@alraheemassociates.com" className="text-navy text-decoration-none">info@alraheemassociates.com</a>
                    </p>
                    <small className="text-muted">Guaranteed response within 24 business hours</small>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="contact-detail-row">
                  <div className="contact-detail-icon">
                    <i className="bi bi-clock-fill"></i>
                  </div>
                  <div>
                    <h4 className="contact-detail-title">Working Hours</h4>
                    <p className="contact-detail-value mb-0">
                      Monday &ndash; Saturday: 9:00 AM &ndash; 6:00 PM<br />
                      <span className="text-muted small">Sunday: Closed (On-call emergency site support available)</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Embedded Google Maps */}
              <div className="contact-map-frame mt-4">
                <iframe src="https://maps.google.com/maps?q=Azan+Centre+Keamari+Karachi+Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed" width="100%" height="240" style={{"border":"0"}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="AL-RAHEEM ASSOCIATES Office Location - Keamari, Karachi"></iframe>
              </div>
            </div>
          </div>

          {/* Right Column: Bootstrap Contact Form Card */}
          <div className="col-lg-7" data-aos="fade-left">
            <div className="contact-form-card shadow-sm">
              <h3 className="h4 fw-bold text-navy mb-2">Send Us an Inquiry</h3>
              <p className="text-muted mb-4 small">Fill out the form below. Our project and property team will review your requirements and provide a preliminary feasibility.</p>

              {/* Success Alert Message (Shown after submit) */}
              <div id="formSuccessAlert" className="alert alert-success d-none mb-4" role="alert">
                <div className="d-flex align-items-center">
                  <i className="bi bi-check-circle-fill fs-4 me-3 text-success"></i>
                  <div>
                    <h5 className="alert-heading mb-1 fw-bold">Inquiry Sent Successfully!</h5>
                    <p className="mb-0 small">Thank you for contacting AL-RAHEEM ASSOCIATES. Our team has received your details and will contact you promptly.</p>
                  </div>
                </div>
              </div>

              {/* Form with FormSubmit.co Integration */}
              <form action="https://formsubmit.co/info@alraheemassociates.com" method="POST" className="needs-validation" noValidate id="contactForm">
                
                {/* Anti-Spam Honeypot Field (Hidden from real users) */}
                <div style={{"display":"none !important"}}>
                  <label htmlFor="honeypot">Leave this blank</label>
                  <input type="text" name="_honey" id="honeypot" tabIndex="-1" autoComplete="off" />
                </div>

                {/* FormSubmit Configuration Fields */}
                <input type="hidden" name="_subject" value="New Project Inquiry - AL-RAHEEM ASSOCIATES Website" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div className="row g-3">
                  {/* Full Name */}
                  <div className="col-md-6">
                    <label htmlFor="contactName" className="form-label">Full Name <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="contactName" name="name" placeholder="e.g. Muhammad Tariq" required />
                    <div className="invalid-feedback">Please provide your full name.</div>
                  </div>

                  {/* Email Address */}
                  <div className="col-md-6">
                    <label htmlFor="contactEmail" className="form-label">Email Address <span className="text-danger">*</span></label>
                    <input type="email" className="form-control" id="contactEmail" name="email" placeholder="e.g. tariq@example.com" required />
                    <div className="invalid-feedback">Please enter a valid email address.</div>
                  </div>

                  {/* Phone Number */}
                  <div className="col-md-6">
                    <label htmlFor="contactPhone" className="form-label">Phone / WhatsApp <span className="text-danger">*</span></label>
                    <input type="tel" className="form-control" id="contactPhone" name="phone" placeholder="e.g. +92 341 8186681" required />
                    <div className="invalid-feedback">Please enter your contact phone number.</div>
                  </div>

                  {/* Service Interested In */}
                  <div className="col-md-6">
                    <label htmlFor="contactService" className="form-label">Service Interested In <span className="text-danger">*</span></label>
                    <select className="form-select" id="contactService" name="service" required>
                      <option value="" selected disabled>Select Service or Inquiry Type</option>
                      <option value="Residential & Commercial Construction">Residential &amp; Commercial Construction</option>
                      <option value="Real Estate Rental & Purchasing (Commission Basis)">Real Estate Rental &amp; Purchasing (Commission Basis)</option>
                      <option value="Dedicated Skilled Labor Force (Masons, Carpenters, Electricians, Plumbers)">Dedicated Skilled Labor Force (Masons, Carpenters, Electricians, Plumbers)</option>
                      <option value="Booking Apartments & Shops">Booking Apartments &amp; Shops</option>
                      <option value="Resale & Godown / Warehouse Rentals">Resale &amp; Godown / Warehouse Rentals</option>
                      <option value="Property Assessment & Real Estate Investments">Property Assessment &amp; Real Estate Investments</option>
                    </select>
                    <div className="invalid-feedback">Please select the service of interest.</div>
                  </div>

                  {/* Project Location */}
                  <div className="col-md-6">
                    <label htmlFor="contactLocation" className="form-label">Project / Property Location <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="contactLocation" name="location" placeholder="e.g. Keamari / Clifton / DHA Phase 8, Karachi" required />
                    <div className="invalid-feedback">Please state the location of the project.</div>
                  </div>

                  {/* Budget Range */}
                  <div className="col-md-6">
                    <label htmlFor="contactBudget" className="form-label">Estimated Budget Range</label>
                    <select className="form-select" id="contactBudget" name="budget">
                      <option value="" selected disabled>Select Expected Budget (PKR)</option>
                      <option value="PKR 5 Million - 15 Million">PKR 5 Million &ndash; 15 Million</option>
                      <option value="PKR 15 Million - 35 Million">PKR 15 Million &ndash; 35 Million</option>
                      <option value="PKR 35 Million - 75 Million">PKR 35 Million &ndash; 75 Million</option>
                      <option value="PKR 75 Million - 150 Million">PKR 75 Million &ndash; 150 Million</option>
                      <option value="Above PKR 150 Million (Commercial / High-Rise)">Above PKR 150 Million (Commercial / High-Rise)</option>
                    </select>
                  </div>

                  {/* Project Message / Details */}
                  <div className="col-12">
                    <label htmlFor="contactMessage" className="form-label">Project Brief / Technical Requirements <span className="text-danger">*</span></label>
                    <textarea className="form-control" id="contactMessage" name="message" rows="4" placeholder="Describe your covered area requirements (sq. yds / sq. ft), architectural preferences, expected commencement timeline, or consultation needs..." required></textarea>
                    <div className="invalid-feedback">Please provide details regarding your project requirements.</div>
                  </div>

                  {/* Submit Button */}
                  <div className="col-12 mt-4">
                    <button type="submit" className="btn btn-gold btn-lg w-100 py-3 fw-bold">
                      <i className="bi bi-send-fill me-2"></i>Submit Project Inquiry
                    </button>
                    <p className="text-center text-muted small mt-2 mb-0">
                      <i className="bi bi-shield-lock-fill text-gold me-1"></i>Your information is confidential and will never be shared with third parties.
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

  </main>

  {/* ======================================================================
       12. FOOTER (WITH EXTRACTED CARD LOGO)
       ====================================================================== */}
  <footer className="footer bg-navy text-white pt-5" aria-label="Corporate Footer">
    <div className="container pb-4">
      <div className="row g-4 justify-content-between">
        {/* Col 1: About Firm & Extracted Monogram */}
        <div className="col-lg-4">
          <a className="navbar-brand text-white d-inline-flex align-items-center mb-3" href="#home">
            <img src="images/logo-icon-key.svg" alt="AL-RAHEEM ASSOCIATES Emblem" width="48" height="36" className="me-2" />
            <div>
              <div className="fw-bold tracking-wide" style={{"fontSize":"1.25rem","lineHeight":"1.1"}}><span className="text-gold">AL-RAHEEM</span> ASSOCIATES</div>
              <small className="text-gold-light d-block" style={{"fontSize":"0.72rem","letterSpacing":"0.16em"}}>REAL ESTATE &bull; CONSTRUCTION &bull; EST. 2016</small>
            </div>
          </a>
          <p className="footer-desc">
            Operating as <strong>M/s Al-Raheem Associates</strong>, a trusted corporate name in civil construction, skilled labor workforce, commercial property brokerage, and investments in Karachi since 2016. Officially affiliated with Karachi Chamber of Commerce &amp; Industry (KCCI #150586), registered with FBR (NTN #5357401-7), and verified by Pakistan Businessmen Association (BP-2670).
          </p>
          <div className="d-flex flex-wrap gap-2 mb-3">
            <span className="badge bg-gold text-dark fw-bold">Est. 2016</span>
            <span className="badge bg-primary text-white">KCCI Member #150586</span>
            <span className="badge bg-success text-white">FBR Active Taxpayer</span>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="col-6 col-lg-2">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links-list">
            <li><a href="#home"><i className="bi bi-chevron-right text-gold"></i>Home</a></li>
            <li><a href="#about"><i className="bi bi-chevron-right text-gold"></i>About Founder</a></li>
            <li><a href="#services"><i className="bi bi-chevron-right text-gold"></i>Our Services</a></li>
            <li><a href="#projects"><i className="bi bi-chevron-right text-gold"></i>Project Portfolio</a></li>
            <li><a href="#videos"><i className="bi bi-chevron-right text-gold"></i>Site Videos</a></li>
            <li><a href="#clients"><i className="bi bi-chevron-right text-gold"></i>Valued Clients</a></li>
            <li><a href="#credentials"><i className="bi bi-chevron-right text-gold"></i>Credentials</a></li>
            <li><a href="#contact"><i className="bi bi-chevron-right text-gold"></i>Contact Office</a></li>
          </ul>
        </div>

        {/* Col 3: Services */}
        <div className="col-6 col-lg-3">
          <h4 className="footer-heading">Our Services</h4>
          <ul className="footer-links-list">
            <li><a href="#services"><i className="bi bi-chevron-right text-gold"></i>Residential &amp; Commercial</a></li>
            <li><a href="#services"><i className="bi bi-chevron-right text-gold"></i>Real Estate Commission Brokerage</a></li>
            <li><a href="#services"><i className="bi bi-chevron-right text-gold"></i>Skilled Construction Workforce</a></li>
            <li><a href="#services"><i className="bi bi-chevron-right text-gold"></i>Apartments &amp; Shops Booking</a></li>
            <li><a href="#services"><i className="bi bi-chevron-right text-gold"></i>Godown &amp; Warehouse Rentals</a></li>
            <li><a href="#services"><i className="bi bi-chevron-right text-gold"></i>Property Assessment &amp; Valuation</a></li>
          </ul>
        </div>

        {/* Col 4: Contact & Socials */}
        <div className="col-lg-3">
          <h4 className="footer-heading">Headquarters</h4>
          <div className="footer-contact-item">
            <i className="bi bi-geo-alt-fill"></i>
            <div>Plot No. 128, Shop No. 4, Azan Centre, Near NBP Bank (Keamari Branch), Keamari, Karachi, Sindh 75620, Pakistan</div>
          </div>
          <div className="footer-contact-item">
            <i className="bi bi-telephone-fill"></i>
            <div><a href="tel:+923418186681" className="text-white-50">+92 341 8186681</a></div>
          </div>
          <div className="footer-contact-item">
            <i className="bi bi-envelope-fill"></i>
            <div><a href="mailto:info@alraheemassociates.com" className="text-white-50">info@alraheemassociates.com</a></div>
          </div>
          <div className="footer-contact-item">
            <i className="bi bi-clock-fill"></i>
            <div>Mon - Sat: 9:00 AM - 6:00 PM</div>
          </div>

          {/* Social Icons */}
          <div className="d-flex gap-2 mt-3">
            <a href="https://facebook.com/alraheemassociates" target="_blank" rel="noopener noreferrer" className="top-social-icon" aria-label="Facebook">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://instagram.com/alraheemassociates" target="_blank" rel="noopener noreferrer" className="top-social-icon" aria-label="Instagram">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://linkedin.com/company/alraheemassociates" target="_blank" rel="noopener noreferrer" className="top-social-icon" aria-label="LinkedIn">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Copyright & Registration Row */}
    <div className="footer-bottom">
      <div className="container">
        <div className="row align-items-center gy-2">
          <div className="col-md-6 text-center text-md-start">
            <span>Statutory Firm: <strong>M/s Al-Raheem Associates</strong> &bull; KCCI Reg #150586 &bull; FBR NTN #5357401-7 (ATL) &bull; PBA #BP-2670</span>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <span>&copy; <span id="currentYear">2026</span> AL-RAHEEM ASSOCIATES (M/s Al-Raheem Associates). All Rights Reserved. Founder &amp; Owner: Zohaib Khan.</span>
          </div>
        </div>
      </div>
    </div>
  </footer>

  {/* ======================================================================
       MODAL: PROJECT DETAILS (DYNAMIC POPULATION VIA VANILLA JS)
       ====================================================================== */}
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
          <div className="mb-4 rounded-3 overflow-hidden" style={{"maxHeight":"380px","backgroundColor":"var(--primary-navy-dark)"}}>
            <img src="" id="modalProjectImage" alt="Project Image" className="w-100 h-100 object-fit-cover" />
          </div>

          <div className="row g-3 mb-4">
            <div className="col-6 col-sm-3">
              <div className="bg-light p-2 rounded text-center">
                <small className="text-muted d-block text-uppercase" style={{"fontSize":"0.72rem"}}>Category</small>
                <strong className="text-navy" id="modalProjectCategory" style={{"fontSize":"0.9rem"}}>Commercial</strong>
              </div>
            </div>
            <div className="col-6 col-sm-3">
              <div className="bg-light p-2 rounded text-center">
                <small className="text-muted d-block text-uppercase" style={{"fontSize":"0.72rem"}}>Status</small>
                <span className="badge bg-success" id="modalProjectStatus">Completed</span>
              </div>
            </div>
            <div className="col-6 col-sm-3">
              <div className="bg-light p-2 rounded text-center">
                <small className="text-muted d-block text-uppercase" style={{"fontSize":"0.72rem"}}>Year</small>
                <strong className="text-navy" id="modalProjectYear" style={{"fontSize":"0.9rem"}}>2025</strong>
              </div>
            </div>
            <div className="col-6 col-sm-3">
              <div className="bg-light p-2 rounded text-center">
                <small className="text-muted d-block text-uppercase" style={{"fontSize":"0.72rem"}}>Covered Area</small>
                <strong className="text-navy" id="modalProjectArea" style={{"fontSize":"0.9rem"}}>48,000 sq. ft.</strong>
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
              {/* Dynamically populated */}
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

  {/* ======================================================================
       MODAL: CREDENTIALS LIGHTBOX (FULLY RESPONSIVE & MOBILE-FRIENDLY)
       ====================================================================== */}
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
          {/* Document Viewer Frame */}
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
          
          {/* Document Verification Strip & PDF Action */}
          <div className="alert alert-light border d-flex flex-column flex-sm-row align-items-center justify-content-between p-3 mb-3 gap-3">
            <div className="d-flex align-items-center text-navy fw-semibold small text-start">
              <i className="bi bi-shield-fill-check text-success fs-3 me-3 flex-shrink-0"></i>
              <div>
                <span className="d-block text-navy fw-bold" style={{"fontSize":"0.95rem"}}>Official Statutory Verified Record</span>
                <span className="text-muted small">Registered with Karachi Chamber of Commerce / Federal Board of Revenue</span>
              </div>
            </div>
            <a href="#" id="modalDocDownloadBtn" target="_blank" className="btn btn-gold btn-sm px-3 py-2 fw-semibold d-none flex-shrink-0">
              <i className="bi bi-file-earmark-pdf-fill me-1"></i>View / Download Original PDF
            </a>
          </div>

          <div className="bg-white p-3 rounded border">
            <h6 className="text-navy fw-bold mb-1"><i className="bi bi-info-circle text-gold me-2"></i>Legal Document Overview</h6>
            <p className="text-muted text-start mb-0 small" id="modalDocDesc" style={{"lineHeight":"1.6"}}>Detailed legal document description.</p>
          </div>
        </div>
        <div className="modal-footer bg-light px-3 px-md-4 py-2 justify-content-between">
          <span className="text-muted small"><i className="bi bi-geo-alt-fill text-gold me-1"></i>Azan Centre, Keamari, Karachi</span>
          <button type="button" className="btn btn-navy btn-sm px-4 fw-semibold" data-bs-dismiss="modal">Close Document</button>
        </div>
      </div>
    </div>
  </div>

  {/* ======================================================================
       FLOATING ACTIONS (WHATSAPP & BACK TO TOP)
       ====================================================================== */}
  {/* Floating WhatsApp Action Group with Interactive Chat Popup Widget */}
  <div className="whatsapp-widget-container" id="whatsappContainer">
    
    {/* WhatsApp Interactive Chat Popup Card */}
    <div className="whatsapp-chat-popup shadow-lg" id="whatsappChatPopup" aria-hidden="true" role="dialog" aria-labelledby="waAgentName">
      
      {/* Widget Header */}
      <div className="wa-popup-header d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-3">
          <div className="wa-avatar-wrap position-relative">
            <img src="images/logo-icon-key.svg" alt="AL-RAHEEM ASSOCIATES" className="wa-avatar-img" />
            <span className="wa-online-indicator" title="Online Now"></span>
          </div>
          <div>
            <h6 className="wa-agent-name mb-0 text-white fw-bold" id="waAgentName">AL-RAHEEM ASSOCIATES</h6>
            <small className="wa-agent-status text-white-50 d-flex align-items-center gap-1">
              <span className="wa-dot-pulse"></span> Online &bull; Direct Support
            </small>
          </div>
        </div>
        <button type="button" className="wa-popup-close-btn" id="waPopupCloseBtn" aria-label="Close WhatsApp chat popup">
          <i className="bi bi-x-lg"></i>
        </button>
      </div>

      {/* Widget Chat Body with Real WhatsApp Style */}
      <div className="wa-popup-body">
        <div className="text-center my-2">
          <span className="badge bg-white text-muted px-3 py-1 shadow-xs border" style={{"fontSize":"0.72rem","fontWeight":"500"}}>Today</span>
        </div>

        {/* Incoming Message Bubble */}
        <div className="wa-chat-bubble">
          <div className="wa-bubble-sender">Zohaib Khan &bull; Founder &amp; Owner</div>
          <p className="wa-bubble-message mb-1">
            Assalam-o-Alaikum! 👋 Welcome to <strong>AL-RAHEEM ASSOCIATES</strong>.<br />
            How can we help you today with property booking, flat/shop rentals, property assessment, or skilled construction labor?
          </p>
          <div className="wa-bubble-time text-end">
            <span id="waChatTime">Just now</span>
            <i className="bi bi-check2-all text-primary ms-1" style={{"fontSize":"0.95rem"}}></i>
          </div>
        </div>

        {/* Quick Response Suggestion Pills */}
        <div className="wa-quick-pills mt-3">
          <div className="small text-muted fw-semibold mb-2" style={{"fontSize":"0.75rem"}}>QUICK INQUIRY TOPICS:</div>
          <button type="button" className="wa-pill-btn" data-msg="Hello Zohaib Khan, I want to inquire about booking apartments or commercial shops.">
            🏢 Booking Flat/Shop
          </button>
          <button type="button" className="wa-pill-btn" data-msg="Hello Zohaib Khan, I am looking for a flat, shop, or godown for rent in Karachi.">
            🔑 Rental (Flat/Shop/Godown)
          </button>
          <button type="button" className="wa-pill-btn" data-msg="Hello Zohaib Khan, I need skilled construction labor (masons, carpenters, electricians, plumbers).">
            🏗️ Skilled Construction Trade
          </button>
          <button type="button" className="wa-pill-btn" data-msg="Hello Zohaib Khan, I would like to request a professional property assessment.">
            📋 Property Assessment
          </button>
        </div>
      </div>

      {/* Widget Footer / Message Input */}
      <div className="wa-popup-footer">
        <form id="waChatWidgetForm" className="d-flex align-items-center gap-2 m-0 w-100">
          <input type="text"
                 id="waChatInput"
                 className="form-control wa-chat-input"
                 placeholder="Type your message here..."
                 autoComplete="off"
                 aria-label="Type message for WhatsApp" />
          <button type="submit" className="wa-chat-send-btn" id="waChatSendBtn" aria-label="Send WhatsApp message" title="Send via WhatsApp">
            <i className="bi bi-send-fill"></i>
          </button>
        </form>
      </div>
    </div>

    {/* Floating WhatsApp Toggle Button */}
    <button type="button"
            className="floating-whatsapp"
            id="whatsappToggleBtn"
            aria-expanded="false"
            aria-controls="whatsappChatPopup"
            aria-label="Chat with AL-RAHEEM ASSOCIATES on WhatsApp">
      <span className="whatsapp-pulse"></span>
      <i className="bi bi-whatsapp wa-icon-open"></i>
      <i className="bi bi-x-lg wa-icon-close d-none"></i>
    </button>
  </div>

  {/* Back to Top Button */}
  <button type="button" id="backToTopBtn" className="back-to-top" aria-label="Scroll back to top of page">
    <i className="bi bi-arrow-up"></i>
  </button>

  {/* ======================================================================
       SCRIPTS & CDN LIBRARIES
       ====================================================================== */}
  {/* Bootstrap 5.3.3 JS Bundle (Popper included) */}
  
  {/* AOS (Animate on Scroll) JS */}
  
  {/* Custom Application Script */}
  


    </>
  );
}
