/* ==========================================================
   Habib Electrical Workshop — i18n (AR default / EN), WhatsApp links,
   mobile nav, scroll reveal, gallery lightbox.
   ========================================================== */
(function () {
  "use strict";

  var WA_NUMBER = "97333125945";
  var STORAGE_KEY = "habib-lang";
  document.documentElement.classList.add("js");

  /* ---------- Dictionaries ----------
     No copy was supplied; wording is written from what the client's photos show.
     Arabic and English drafted together. TRANSLATED: review */
  var I18N = {
    ar: {
      metaTitle: "ورشة حبيب الكهربائية | تصليح وصيانة المكيفات في المحرق",
      metaDesc: "ورشة حبيب الكهربائية في المحرق، البحرين: تصليح وتنظيف المكيفات، تعبئة الغاز، صيانة الوحدات الخارجية، تصليح البوردات والثلاجات والغسالات. تواصل معنا عبر واتساب.",
      skip: "تخطَّ إلى المحتوى",
      brandAria: "ورشة حبيب الكهربائية — الرئيسية",
      logoAlt: "شعار ورشة حبيب الكهربائية",
      brandName: "ورشة حبيب الكهربائية",
      navAria: "القائمة الرئيسية",
      footerNavAria: "روابط التذييل",
      navWhy: "لماذا نحن",
      navServices: "خدماتنا",
      navGallery: "أعمالنا",
      navContact: "تواصل معنا",
      menuOpen: "فتح القائمة",
      menuClose: "إغلاق القائمة",
      langBtn: "EN",
      langBtnLang: "en",
      langBtnAria: "Switch to English",
      heroEyebrow: "تصليح وصيانة المكيفات — المحرق",
      heroTitle: "ورشة حبيب الكهربائية",
      heroLead: "تصليح وتنظيف وصيانة جميع أنواع المكيفات، سبليت وشباك، مع زيارات منزلية وورشة مجهزة بالكامل.",
      heroMotto: "برودة مضمونة في حرّ الصيف",
      ctaWhatsApp: "تواصل عبر واتساب",
      ctaGallery: "شاهد أعمالنا",
      whyEyebrow: "عن الورشة",
      whyTitle: "لماذا نحن؟",
      whySub: "ورشة محلية في المحرق تخدم البيوت والمحلات في البحرين.",
      why1: "فنيون ذوو خبرة",
      why2: "ورشة مجهزة بالكامل",
      why3: "زيارات منزلية",
      why4: "أسعار مناسبة",
      servicesEyebrow: "خدماتنا",
      servicesTitle: "كل ما يحتاجه مكيفك تحت سقف واحد",
      s1Title: "تصليح المكيفات",
      s1Desc: "فحص وتصليح مكيفات السبليت والشباك، من الكمبروسر إلى المراوح والتوصيلات.",
      s2Title: "غسيل وتنظيف المكيفات",
      s2Desc: "غسيل عميق بالماء المضغوط لإزالة الأوساخ وتحسين التبريد وتقليل استهلاك الكهرباء.",
      s3Title: "تعبئة الغاز",
      s3Desc: "سحب وتعبئة غاز التبريد بأجهزة مخصصة وفحص التسريبات.",
      s4Title: "صيانة في الموقع",
      s4Desc: "نأتي إليك لصيانة الوحدات الخارجية والداخلية في البيت أو المحل.",
      s5Title: "تصليح البوردات الإلكترونية",
      s5Desc: "تصليح بوردات المكيفات والأجهزة على مستوى القطع بدل تبديلها بالكامل.",
      s6Title: "ثلاجات وغسالات",
      s6Desc: "تصليح الثلاجات والفريزرات والغسالات المنزلية والتجارية.",
      askWhatsApp: "استفسر عبر واتساب",
      galleryEyebrow: "أعمالنا",
      galleryTitle: "معرض الصور",
      gallerySub: "اضغط على أي صورة لعرضها بحجم أكبر.",
      galleryClient: "من أعمالنا للعملاء",
      galleryWorkshop: "داخل ورشتنا",
      altCleaning: "فني يغسل وحدة مكيف بجهاز ضغط الماء في الورشة",
      altOutdoor: "فني على سلم يصلح وحدة مكيف خارجية على جدار منزل",
      altWasher: "فنيان يصلحان غسالات داخل الورشة",
      altInterior: "داخل الورشة: طاولات عمل وأدوات وقطع غيار مرتبة على الرفوف",
      altGas: "جهاز سحب غاز التبريد موصول بكمبروسر مكيف",
      altPcb: "تصليح بورد إلكتروني لمكيف باستخدام جهاز القياس والكاوية",
      altWindow: "مكيفات شباك قيد الصيانة في الورشة",
      altFridge: "ثلاجة تجارية وغسالة قيد التصليح في الورشة",
      contactEyebrow: "تواصل معنا",
      contactTitle: "مكيفك خربان؟ راسلنا الآن",
      contactLead: "أرسل لنا نوع المكيف والمشكلة عبر واتساب وسنرد عليك بأسرع وقت.",
      location: "المحرق، البحرين",
      rights: "جميع الحقوق محفوظة.",
      waFloatAria: "تواصل معنا عبر واتساب",
      lightboxAria: "عارض الصور",
      lbClose: "إغلاق",
      lbPrev: "الصورة السابقة",
      lbNext: "الصورة التالية",
      lbCount: "{n} من {t}",
      waGeneral: "مرحباً ورشة حبيب، أود الاستفسار عن خدماتكم.",
      waService: "مرحباً ورشة حبيب، أود الاستفسار عن خدمة: {s}"
    },

    en: {
      metaTitle: "Habib Electrical Workshop | AC Repair & Maintenance in Muharraq",
      metaDesc: "Habib Electrical Workshop in Muharraq, Bahrain: AC repair and cleaning, gas refilling, outdoor unit service, PCB repair, fridges and washing machines. Contact us on WhatsApp.",
      skip: "Skip to content",
      brandAria: "Habib Electrical Workshop — Home",
      logoAlt: "Habib Electrical Workshop logo",
      brandName: "Habib Electrical Workshop",
      navAria: "Main navigation",
      footerNavAria: "Footer links",
      navWhy: "Why us",
      navServices: "Services",
      navGallery: "Our work",
      navContact: "Contact",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      langBtn: "ع",
      langBtnLang: "ar",
      langBtnAria: "التبديل إلى العربية",
      heroEyebrow: "AC repair & maintenance — Muharraq",
      heroTitle: "Habib Electrical Workshop",
      heroLead: "Repair, cleaning and servicing for every type of air conditioner, split and window, with home visits and a fully equipped workshop.",
      heroMotto: "Keeping you cool through the summer heat",
      ctaWhatsApp: "Chat on WhatsApp",
      ctaGallery: "See our work",
      whyEyebrow: "About the workshop",
      whyTitle: "Why choose us?",
      whySub: "A local Muharraq workshop serving homes and shops across Bahrain.",
      why1: "Experienced technicians",
      why2: "Fully equipped workshop",
      why3: "Home visits",
      why4: "Fair prices",
      servicesEyebrow: "Our services",
      servicesTitle: "Everything your AC needs, under one roof",
      s1Title: "AC repair",
      s1Desc: "Diagnosis and repair of split and window units, from compressors to fans and wiring.",
      s2Title: "AC washing & cleaning",
      s2Desc: "Deep pressure-wash cleaning to remove dirt, improve cooling and cut power use.",
      s3Title: "Gas refilling",
      s3Desc: "Refrigerant recovery and recharging with proper equipment, plus leak checks.",
      s4Title: "On-site service",
      s4Desc: "We come to you to service outdoor and indoor units at your home or shop.",
      s5Title: "PCB / board repair",
      s5Desc: "Component-level repair of AC and appliance control boards instead of full replacement.",
      s6Title: "Fridges & washing machines",
      s6Desc: "Repair of domestic and commercial fridges, freezers and washing machines.",
      askWhatsApp: "Ask on WhatsApp",
      galleryEyebrow: "Our work",
      galleryTitle: "Gallery",
      gallerySub: "Tap any image to view it larger.",
      galleryClient: "Client work",
      galleryWorkshop: "Inside our workshop",
      altCleaning: "Technician pressure-washing an AC unit in the workshop",
      altOutdoor: "Technician on a ladder repairing an outdoor AC unit on a house wall",
      altWasher: "Two technicians repairing washing machines in the workshop",
      altInterior: "Inside the workshop: workbenches, tools and spare parts on shelves",
      altGas: "Refrigerant recovery unit connected to an AC compressor",
      altPcb: "Repairing an AC control board with a multimeter and soldering iron",
      altWindow: "Window AC units being serviced in the workshop",
      altFridge: "Commercial fridge and washing machine under repair in the workshop",
      contactEyebrow: "Contact us",
      contactTitle: "AC not cooling? Message us now",
      contactLead: "Send us your AC type and the problem on WhatsApp and we'll get back to you quickly.",
      location: "Muharraq, Bahrain",
      rights: "All rights reserved.",
      waFloatAria: "Contact us on WhatsApp",
      lightboxAria: "Image viewer",
      lbClose: "Close",
      lbPrev: "Previous image",
      lbNext: "Next image",
      lbCount: "{n} of {t}",
      waGeneral: "Hello Habib Workshop, I'd like to ask about your services.",
      waService: "Hello Habib Workshop, I'd like to ask about: {s}"
    }
  };

  var currentLang = "ar";

  function waLink(text) {
    return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(text);
  }

  function setMeta(selector, value) {
    var el = document.querySelector(selector);
    if (el) el.setAttribute("content", value);
  }

  function applyLang(lang) {
    var t = I18N[lang] || I18N.ar;
    currentLang = I18N[lang] ? lang : "ar";
    var html = document.documentElement;
    html.lang = currentLang;
    html.dir = currentLang === "ar" ? "rtl" : "ltr";
    document.title = t.metaTitle;
    setMeta('meta[name="description"]', t.metaDesc);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = t[el.getAttribute("data-i18n")];
      if (v != null) el.textContent = v;
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var v = t[el.getAttribute("data-i18n-alt")];
      if (v != null) el.setAttribute("alt", v);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var v = t[el.getAttribute("data-i18n-aria")];
      if (v != null) el.setAttribute("aria-label", v);
    });

    // WhatsApp links: general or per-service message in the active language
    document.querySelectorAll("[data-wa]").forEach(function (el) {
      var key = el.getAttribute("data-wa");
      var msg = key === "general" ? t.waGeneral : t.waService.replace("{s}", t[key] || "");
      el.setAttribute("href", waLink(msg));
    });

    var btn = document.getElementById("lang-toggle");
    if (btn) {
      btn.textContent = t.langBtn;
      btn.setAttribute("lang", t.langBtnLang);
      btn.setAttribute("aria-label", t.langBtnAria);
    }
    syncMenuLabel();
    if (lightbox && lightbox.open) showImage(lbIndex);
  }

  function saveLang(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* storage blocked */ }
  }
  function loadLang() {
    try {
      var p = new URLSearchParams(window.location.search).get("lang");
      if (p === "ar" || p === "en") return p;
    } catch (e) { /* old browser */ }
    try {
      var s = localStorage.getItem(STORAGE_KEY);
      if (s === "ar" || s === "en") return s;
    } catch (e) { /* storage blocked */ }
    return "ar";
  }

  /* ---------- Mobile nav ---------- */
  var menuBtn = document.getElementById("menu-toggle");
  var nav = document.getElementById("main-nav");

  function syncMenuLabel() {
    if (!menuBtn) return;
    var open = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-label", I18N[currentLang][open ? "menuClose" : "menuOpen"]);
  }
  function setMenu(open) {
    menuBtn.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("open", open);
    syncMenuLabel();
  }
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      setMenu(menuBtn.getAttribute("aria-expanded") !== "true");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setMenu(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) { setMenu(false); menuBtn.focus(); }
    });
  }

  /* ---------- Header shadow on scroll ---------- */
  var header = document.querySelector(".site-header");
  function onScroll() { header.classList.toggle("scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Reveal on scroll ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("in"); io.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el, i) {
      el.style.transitionDelay = (i % 4) * 70 + "ms";
      io.observe(el);
    });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- Lightbox ---------- */
  var lightbox = document.getElementById("lightbox");
  var lbImg = document.getElementById("lb-img");
  var lbCap = document.getElementById("lb-caption");
  var lbCount = document.getElementById("lb-count");
  var items = Array.prototype.slice.call(document.querySelectorAll(".g-item"));
  var lbIndex = 0;
  var lastFocus = null;

  function showImage(i) {
    lbIndex = (i + items.length) % items.length;
    var src = items[lbIndex].querySelector("img");
    lbImg.src = src.getAttribute("src");
    lbImg.alt = src.getAttribute("alt");
    lbImg.setAttribute("width", src.getAttribute("width"));
    lbImg.setAttribute("height", src.getAttribute("height"));
    lbCap.textContent = src.getAttribute("alt");
    lbCount.textContent = I18N[currentLang].lbCount
      .replace("{n}", lbIndex + 1).replace("{t}", items.length);
  }

  function openLightbox(i) {
    lastFocus = document.activeElement;
    showImage(i);
    if (typeof lightbox.showModal === "function") lightbox.showModal();
    else lightbox.setAttribute("open", "");
    document.body.style.overflow = "hidden";
    document.getElementById("lb-close").focus();
  }
  function closeLightbox() {
    if (typeof lightbox.close === "function" && lightbox.open) lightbox.close();
    else lightbox.removeAttribute("open");
  }

  if (lightbox && items.length) {
    items.forEach(function (btn, i) {
      btn.addEventListener("click", function () { openLightbox(i); });
    });
    document.getElementById("lb-close").addEventListener("click", closeLightbox);
    document.getElementById("lb-prev").addEventListener("click", function () { showImage(lbIndex - 1); });
    document.getElementById("lb-next").addEventListener("click", function () { showImage(lbIndex + 1); });
    lightbox.addEventListener("close", function () {
      document.body.style.overflow = "";
      if (lastFocus) lastFocus.focus();
    });
    // click on the dark backdrop area closes
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox || e.target.classList.contains("lb-figure")) closeLightbox();
    });
    lightbox.addEventListener("keydown", function (e) {
      var rtl = document.documentElement.dir === "rtl";
      if (e.key === "ArrowRight") showImage(lbIndex + (rtl ? -1 : 1));
      else if (e.key === "ArrowLeft") showImage(lbIndex + (rtl ? 1 : -1));
      else if (e.key === "Escape" && !lightbox.showModal) closeLightbox();
    });
    // swipe
    var x0 = null;
    lightbox.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    lightbox.addEventListener("touchend", function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      var rtl = document.documentElement.dir === "rtl";
      if (Math.abs(dx) > 50) showImage(lbIndex + ((dx < 0) !== rtl ? 1 : -1));
      x0 = null;
    }, { passive: true });
  }

  /* ---------- Language toggle ---------- */
  var langBtn = document.getElementById("lang-toggle");
  if (langBtn) {
    langBtn.addEventListener("click", function () {
      var next = currentLang === "ar" ? "en" : "ar";
      applyLang(next);
      saveLang(next);
    });
  }

  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  applyLang(loadLang());
})();
