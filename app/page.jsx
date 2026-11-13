"use client";

import { useEffect } from 'react';

// ── Section Components ────────────────────────────────────────────────────────
import Preloader         from './components/Preloader';
import TopBar            from './components/TopBar';
import Navbar            from './components/Navbar';
import HeroSection       from './components/HeroSection';
import AboutSection      from './components/AboutSection';
import ServicesSection   from './components/ServicesSection';
import ProjectsSection   from './components/ProjectsSection';
import VideosSection     from './components/VideosSection';
import ClientsSection    from './components/ClientsSection';
import CredentialsSection from './components/CredentialsSection';
import WhyUsSection      from './components/WhyUsSection';
import CtaBanner         from './components/CtaBanner';
import ContactSection    from './components/ContactSection';
import Footer            from './components/Footer';
// ── Modals & Widgets ──────────────────────────────────────────────────────────
import ProjectModal      from './components/ProjectModal';
import CredentialModal   from './components/CredentialModal';
import WhatsAppWidget    from './components/WhatsAppWidget';

export default function Home() {
  useEffect(() => {
    let AOSInstance = null;

    if (typeof window !== 'undefined') {
      // Bootstrap JS
      import('bootstrap/dist/js/bootstrap.bundle.min.js').then((mod) => {
        window.bootstrap = mod.default || mod;
      }).catch(err => console.error('Bootstrap JS load error:', err));

      // AOS (Animate on Scroll)
      import('aos').then((mod) => {
        AOSInstance = mod.default || mod;
        AOSInstance.init({ duration: 750, easing: 'ease-out-cubic', once: true, offset: 60,
          disable: () => window.innerWidth < 768 });
      }).catch(err => console.error('AOS load error:', err));
    }

    // ── 1. PRELOADER ─────────────────────────────────────────────────────────
    const preloader = document.getElementById('preloader');
    function removePreloader() {
      if (preloader && !preloader.classList.contains('loaded')) {
        preloader.classList.add('loaded');
        setTimeout(() => { preloader.style.display = 'none'; }, 500);
      }
    }
    setTimeout(removePreloader, 800);

    // ── 2. STICKY NAVBAR SCROLL & MOBILE AUTO-CLOSE ───────────────────────────
    const mainNav = document.getElementById('mainNav');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navLinks = document.querySelectorAll('.navbar-custom .nav-link, .navbar-custom .btn-gold');

    function handleNavScroll() {
      if (!mainNav) return;
      mainNav.classList.toggle('navbar-scrolled', window.scrollY > 40);
    }
    window.addEventListener('scroll', handleNavScroll, { passive: true });
    handleNavScroll();

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
          const bsCollapse = window.bootstrap?.Collapse?.getInstance(navbarCollapse);
          bsCollapse ? bsCollapse.hide() : navbarCollapse.classList.remove('show');
        }
      });
    });

    // ── 3. BACK TO TOP BUTTON ─────────────────────────────────────────────────
    const backToTopBtn = document.getElementById('backToTopBtn');
    function toggleBackToTop() {
      if (!backToTopBtn) return;
      backToTopBtn.classList.toggle('show', window.scrollY > 350);
    }
    window.addEventListener('scroll', toggleBackToTop, { passive: true });
    toggleBackToTop();
    backToTopBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ── 4. PROJECTS PORTFOLIO FILTERING ──────────────────────────────────────
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    filterButtons.forEach((button) => {
      button.addEventListener('click', function () {
        filterButtons.forEach((btn) => btn.classList.remove('active'));
        this.classList.add('active');
        const filterValue = this.getAttribute('data-filter');
        projectItems.forEach((item) => {
          const cat = item.getAttribute('data-category');
          const stat = item.getAttribute('data-status');
          const isMatch = filterValue === 'all' || filterValue === cat || filterValue === stat;
          if (isMatch) {
            item.classList.remove('d-none', 'fade-in');
            void item.offsetWidth;
            item.classList.add('fade-in');
          } else {
            item.classList.add('d-none');
            item.classList.remove('fade-in');
          }
        });
      });
    });

    // ── 5. DYNAMIC PROJECT MODAL POPULATION ──────────────────────────────────
    const projectModal = document.getElementById('projectModal');
    if (projectModal) {
      projectModal.addEventListener('show.bs.modal', (event) => {
        const btn = event.relatedTarget;
        if (!btn) return;
        const get = (attr) => btn.getAttribute(attr) || '';
        projectModal.querySelector('#modalProjectTitle').textContent   = get('data-proj-title') || 'Project Details';
        projectModal.querySelector('#modalProjectClient').textContent  = get('data-proj-client') || 'Confidential Client';
        projectModal.querySelector('#modalProjectCategory').textContent = get('data-proj-category') || 'Construction';
        const statusEl = projectModal.querySelector('#modalProjectStatus');
        statusEl.textContent = get('data-proj-status') || 'Completed';
        statusEl.className   = 'badge ' + (get('data-proj-status-class') || 'bg-success');
        projectModal.querySelector('#modalProjectYear').textContent     = get('data-proj-year') || '2025';
        projectModal.querySelector('#modalProjectLocation').textContent = get('data-proj-location') || 'Karachi, Pakistan';
        projectModal.querySelector('#modalProjectArea').textContent     = get('data-proj-area') || 'N/A';
        projectModal.querySelector('#modalProjectDesc').textContent     = get('data-proj-desc') || '';
        const img = projectModal.querySelector('#modalProjectImage');
        if (img && get('data-proj-image')) { img.src = get('data-proj-image'); img.alt = get('data-proj-title'); }
        const list = projectModal.querySelector('#modalProjectFeatures');
        list.innerHTML = '';
        get('data-proj-features').split('|').forEach((feat) => {
          const f = feat.trim();
          if (f) {
            const li = document.createElement('li');
            li.className = 'mb-2 d-flex align-items-center gap-2 text-muted';
            li.innerHTML = `<i class="bi bi-check-circle-fill text-gold"></i><span>${f}</span>`;
            list.appendChild(li);
          }
        });
      });
    }

    // ── 6. CREDENTIALS LIGHTBOX MODAL POPULATION ─────────────────────────────
    const credentialModal = document.getElementById('credentialModal');
    if (credentialModal) {
      credentialModal.addEventListener('show.bs.modal', (event) => {
        const trigger = event.relatedTarget;
        if (!trigger) return;
        const get = (attr) => trigger.getAttribute(attr) || '';
        credentialModal.querySelector('#modalDocTitle').textContent  = get('data-doc-title') || 'Official Document';
        credentialModal.querySelector('#modalDocNumber').textContent = get('data-doc-number');
        const docImg = credentialModal.querySelector('#modalDocImg');
        if (docImg && get('data-doc-src')) { docImg.src = get('data-doc-src'); docImg.alt = get('data-doc-title'); }
        const srcBack    = get('data-doc-src-back');
        const colFront   = credentialModal.querySelector('#modalColFront');
        const colBack    = credentialModal.querySelector('#modalColBack');
        const badgeFront = credentialModal.querySelector('#modalBadgeFront');
        const badgeBack  = credentialModal.querySelector('#modalBadgeBack');
        const imgBack    = credentialModal.querySelector('#modalDocImgBack');
        if (srcBack) {
          colFront?.setAttribute('class', 'col-12 col-md-6 text-center');
          colBack?.classList.remove('d-none');
          badgeFront?.classList.remove('d-none');
          badgeBack?.classList.remove('d-none');
          if (imgBack) { imgBack.src = srcBack; imgBack.alt = get('data-doc-title') + ' (Reverse Side)'; imgBack.classList.remove('d-none'); }
        } else {
          colFront?.setAttribute('class', 'col-12 col-lg-10 text-center mx-auto');
          colBack?.classList.add('d-none');
          badgeFront?.classList.add('d-none');
          if (imgBack) { imgBack.src = ''; imgBack.classList.add('d-none'); }
        }
        credentialModal.querySelector('#modalDocDesc').textContent = get('data-doc-desc');
        const dlBtn = credentialModal.querySelector('#modalDocDownloadBtn');
        if (dlBtn) {
          const pdf = get('data-doc-pdf');
          dlBtn.href = pdf || '#';
          pdf ? dlBtn.classList.remove('d-none') : dlBtn.classList.add('d-none');
        }
      });
    }

    // ── 7. CONTACT FORM VALIDATION & FEEDBACK ────────────────────────────────
    const contactForm = document.getElementById('contactForm');
    const formSuccessAlert = document.getElementById('formSuccessAlert');
    if (contactForm) {
      contactForm.addEventListener('submit', (event) => {
        const honeypot = contactForm.querySelector('input[name="_honey"]');
        if (honeypot && honeypot.value.trim() !== '') { event.preventDefault(); return false; }
        if (!contactForm.checkValidity()) { event.preventDefault(); contactForm.classList.add('was-validated'); return; }
        contactForm.classList.add('was-validated');
        const actionUrl = contactForm.getAttribute('action') || '';
        if (actionUrl.includes('info@alraheemassociates.com')) {
          event.preventDefault();
          const submitBtn = contactForm.querySelector('button[type="submit"]');
          const originalHtml = submitBtn?.innerHTML || 'Submit Inquiry';
          if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Sending Inquiry...';
          }
          setTimeout(() => {
            if (submitBtn) { submitBtn.disabled = false; submitBtn.innerHTML = originalHtml; }
            if (formSuccessAlert) { formSuccessAlert.classList.remove('d-none'); formSuccessAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }
            contactForm.reset();
            contactForm.classList.remove('was-validated');
          }, 1200);
        }
      });
    }

    // ── 8. DYNAMIC COPYRIGHT YEAR ─────────────────────────────────────────────
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // ── 9. WHATSAPP CHAT POPUP WIDGET ─────────────────────────────────────────
    const whatsappToggleBtn  = document.getElementById('whatsappToggleBtn');
    const whatsappChatPopup  = document.getElementById('whatsappChatPopup');
    const waPopupCloseBtn    = document.getElementById('waPopupCloseBtn');
    const waChatWidgetForm   = document.getElementById('waChatWidgetForm');
    const waChatInput        = document.getElementById('waChatInput');
    const waPillBtns         = document.querySelectorAll('.wa-pill-btn');
    const waIconOpen         = document.querySelector('.wa-icon-open');
    const waIconClose        = document.querySelector('.wa-icon-close');
    const waChatTime         = document.getElementById('waChatTime');

    function openWA() {
      whatsappChatPopup?.classList.add('show');
      whatsappChatPopup?.setAttribute('aria-hidden', 'false');
      whatsappToggleBtn?.setAttribute('aria-expanded', 'true');
      waIconOpen?.classList.add('d-none');
      waIconClose?.classList.remove('d-none');
      if (waChatTime) waChatTime.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setTimeout(() => waChatInput?.focus(), 250);
    }
    function closeWA() {
      whatsappChatPopup?.classList.remove('show');
      whatsappChatPopup?.setAttribute('aria-hidden', 'true');
      whatsappToggleBtn?.setAttribute('aria-expanded', 'false');
      waIconOpen?.classList.remove('d-none');
      waIconClose?.classList.add('d-none');
    }
    function sendWA(msg) {
      const finalMsg = msg?.trim() || 'Hello Zohaib Khan, I would like to inquire about a project/property with AL-RAHEEM ASSOCIATES.';
      window.open('https://wa.me/923418186681?text=' + encodeURIComponent(finalMsg), '_blank', 'noopener,noreferrer');
      if (waChatInput) waChatInput.value = '';
      closeWA();
    }

    whatsappToggleBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      whatsappChatPopup?.classList.contains('show') ? closeWA() : openWA();
    });
    waPopupCloseBtn?.addEventListener('click', (e) => { e.stopPropagation(); closeWA(); });

    const handleOutsideClick = (e) => {
      if (whatsappChatPopup?.classList.contains('show')) {
        if (!whatsappChatPopup.contains(e.target) && !whatsappToggleBtn?.contains(e.target)) closeWA();
      }
    };
    const handleEscKey = (e) => { if (e.key === 'Escape') closeWA(); };
    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('keydown', handleEscKey);

    waPillBtns.forEach((pill) => {
      pill.addEventListener('click', function () { sendWA(this.getAttribute('data-msg') || this.textContent.trim()); });
    });
    waChatWidgetForm?.addEventListener('submit', (e) => { e.preventDefault(); sendWA(waChatInput?.value?.trim()); });

    return () => {
      window.removeEventListener('scroll', handleNavScroll);
      window.removeEventListener('scroll', toggleBackToTop);
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, []);

  return (
    <>
      {/* ── PAGE PRELOADER ──────────────────────── */}
      <Preloader />

      {/* ── TOP BAR (desktop only) ──────────────── */}
      <TopBar />

      {/* ── NAVBAR ──────────────────────────────── */}
      <Navbar />

      <main id="main-content">
        {/* ── HERO SECTION ────────────────────────── */}
        <HeroSection />

        {/* ── ABOUT SECTION ───────────────────────── */}
        <AboutSection />

        {/* ── SERVICES SECTION ────────────────────── */}
        <ServicesSection />

        {/* ── PROJECTS PORTFOLIO ──────────────────── */}
        <ProjectsSection />

        {/* ── SITE VIDEOS & WALKTHROUGHS ──────────── */}
        <VideosSection />

        {/* ── CLIENTS & TESTIMONIALS ──────────────── */}
        <ClientsSection />

        {/* ── COMPANY CREDENTIALS ─────────────────── */}
        <CredentialsSection />

        {/* ── WHY CHOOSE US & HOW WE WORK ─────────── */}
        <WhyUsSection />

        {/* ── CTA BANNER ──────────────────────────── */}
        <CtaBanner />

        {/* ── CONTACT SECTION ─────────────────────── */}
        <ContactSection />
      </main>

      {/* ── FOOTER ──────────────────────────────── */}
      <Footer />

      {/* ── MODALS ──────────────────────────────── */}
      <ProjectModal />
      <CredentialModal />

      {/* ── WHATSAPP WIDGET & BACK TO TOP ───────── */}
      <WhatsAppWidget />
      <button type="button" id="backToTopBtn" className="back-to-top" aria-label="Scroll back to top of page">
        <i className="bi bi-arrow-up"></i>
      </button>
    </>
  );
}
