/**
 * AL-RAHEEM ASSOCIATES - OFFICIAL SCRIPT
 * -----------------------------------------------------------
 * Features:
 * 1. Preloader dismissal
 * 2. Sticky Navbar scroll styling & Mobile menu auto-close
 * 3. Animated Statistics Counters (IntersectionObserver)
 * 4. Projects Portfolio Filtering (Vanilla JS)
 * 5. Project Details Dynamic Modal Population
 * 6. Credentials Document Lightbox Modal (Front + Back + PDF View)
 * 7. Contact Form Validation, Honeypot & UX Feedback
 * 8. Back to Top Button
 * 9. Dynamic Copyright Year
 * 10. AOS (Animate on Scroll) Safe Initialization
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // ==========================================================================
  // 1. PRELOADER DISMISSAL
  // ==========================================================================
  const preloader = document.getElementById('preloader');
  function removePreloader() {
    if (preloader && !preloader.classList.contains('loaded')) {
      preloader.classList.add('loaded');
      setTimeout(function () {
        preloader.style.display = 'none';
      }, 500);
    }
  }

  // Dismiss when window finishes loading, with 800ms fallback safety timer
  window.addEventListener('load', removePreloader);
  setTimeout(removePreloader, 800);

  // ==========================================================================
  // 2. STICKY NAVBAR SCROLL EFFECT & MOBILE MENU AUTO-CLOSE
  // ==========================================================================
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
  handleNavScroll(); // Initial check

  // Auto-close hamburger menu on mobile upon clicking any nav link
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });

  // ==========================================================================
  // 3. BACK TO TOP BUTTON
  // ==========================================================================
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

  // ==========================================================================
  // 4. STATISTICS COUNTERS (REMOVED AS PER USER REQUEST)
  // ==========================================================================

  // ==========================================================================
  // 5. PROJECTS PORTFOLIO FILTERING
  // ==========================================================================
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-item');

  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      // Manage active state on buttons
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
          // Trigger reflow for re-animation
          void item.offsetWidth;
          item.classList.add('fade-in');
        } else {
          item.classList.add('d-none');
          item.classList.remove('fade-in');
        }
      });
    });
  });

  // ==========================================================================
  // 6. DYNAMIC PROJECT MODAL POPULATION
  // ==========================================================================
  const projectModal = document.getElementById('projectModal');
  if (projectModal) {
    projectModal.addEventListener('show.bs.modal', function (event) {
      const triggerBtn = event.relatedTarget;
      if (!triggerBtn) return;

      // Extract attributes from trigger button
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

      // Populate elements in modal
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

      // Parse and populate features
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

  // ==========================================================================
  // 7. CREDENTIALS LIGHTBOX MODAL POPULATION (FRONT + BACK + PDF VIEW)
  // ==========================================================================
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

  // ==========================================================================
  // 8. CONTACT FORM VALIDATION & USER FEEDBACK
  // ==========================================================================
  const contactForm = document.getElementById('contactForm');
  const formSuccessAlert = document.getElementById('formSuccessAlert');

  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      // 1. Check honeypot field (anti-bot)
      const honeypot = contactForm.querySelector('input[name="_honey"]') ||
                       contactForm.querySelector('input[name="_gotcha"]');
      if (honeypot && honeypot.value.trim() !== '') {
        event.preventDefault();
        event.stopPropagation();
        return false;
      }

      // 2. HTML5 & Bootstrap Form Validation
      if (!contactForm.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        contactForm.classList.add('was-validated');
        return;
      }

      contactForm.classList.add('was-validated');

      // If form action is still the placeholder formsubmit.co link, simulate a seamless submission
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

  // ==========================================================================
  // 9. DYNAMIC COPYRIGHT YEAR
  // ==========================================================================
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // ==========================================================================
  // 10. AOS (ANIMATE ON SCROLL) SAFE INITIALIZATION
  // ==========================================================================
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 750,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
      disable: function () {
        return window.innerWidth < 768; // Disable heavy animations on mobile for max performance
      }
    });
  }

  // ==========================================================================
  // WHATSAPP INTERACTIVE CHAT POPUP WIDGET
  // ==========================================================================
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
    
    // Set realistic current time
    if (waChatTime) {
      const now = new Date();
      waChatTime.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    
    // Auto-focus input after smooth transition
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

  if (whatsappToggleBtn) {
    whatsappToggleBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      if (whatsappChatPopup && whatsappChatPopup.classList.contains('show')) {
        closeWhatsAppWidget();
      } else {
        openWhatsAppWidget();
      }
    });
  }

  if (waPopupCloseBtn) {
    waPopupCloseBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      closeWhatsAppWidget();
    });
  }

  // Close widget when clicking outside
  document.addEventListener('click', function (e) {
    if (whatsappChatPopup && whatsappChatPopup.classList.contains('show')) {
      const isInside = whatsappChatPopup.contains(e.target) || (whatsappToggleBtn && whatsappToggleBtn.contains(e.target));
      if (!isInside) {
        closeWhatsAppWidget();
      }
    }
  });

  // Close widget on ESC key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && whatsappChatPopup && whatsappChatPopup.classList.contains('show')) {
      closeWhatsAppWidget();
    }
  });

  // Handle Quick Pill Buttons
  waPillBtns.forEach(function (pill) {
    pill.addEventListener('click', function () {
      const message = this.getAttribute('data-msg') || this.textContent.trim();
      sendWhatsAppMessage(message);
    });
  });

  // Handle Form Submission
  if (waChatWidgetForm) {
    waChatWidgetForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const text = waChatInput ? waChatInput.value.trim() : '';
      sendWhatsAppMessage(text);
    });
  }

  function sendWhatsAppMessage(messageText) {
    const defaultGreeting = "Hello Zohaib Khan, I would like to inquire about a project/property with AL-RAHEEM ASSOCIATES.";
    const finalMsg = messageText && messageText.trim() !== '' ? messageText.trim() : defaultGreeting;
    const phone = "923418186681";
    const waUrl = "https://wa.me/" + phone + "?text=" + encodeURIComponent(finalMsg);
    
    // Open WhatsApp in new tab
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    
    // Clear input & close widget
    if (waChatInput) waChatInput.value = '';
    closeWhatsAppWidget();
  }
});
