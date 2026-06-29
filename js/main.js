(function () {
    'use strict';

    /* ===== Translations ===== */
    const translations = {
        ja: {
            nav_logo: 'GIZY',
            nav_gallery: '作品',
            nav_about: 'プロフィール',
            nav_contact: '連絡先',
            hero_eyebrow: '写真ポートフォリオ',
            hero_name: 'GIZY Ayrton',
            hero_name_jp: 'ギジー　アイルトン　アウトゥ　ジョアリー',
            hero_tagline: '光、形、そしてその間の静かな瞬間を捉える。',
            hero_cta: '作品を見る',
            hero_scroll: 'スクロール',
            gallery_label: 'ポートフォリオ',
            gallery_title: '選りすぐりの作品',
            gallery_desc: '風景、ポートレート、ストリートフォトグラフィーにわたる厳選された写真集。',
            gallery_1_title: '山の静寂',
            gallery_1_desc: 'ロッキー山脈、コロラド州',
            gallery_2_title: 'スタジオライト',
            gallery_2_desc: 'ポートレートシリーズ、東京',
            gallery_3_title: '朝霧',
            gallery_3_desc: '箱根、日本',
            gallery_4_title: '都市のポートレート',
            gallery_4_desc: 'ストリートフォト、渋谷',
            gallery_5_title: '秋の小道',
            gallery_5_desc: '日光、日本',
            gallery_6_title: 'ゴールデンアワー',
            gallery_6_desc: '湘南海岸、日本',
            about_label: 'プロフィール',
            about_title: '写真家について',
            about_bio_1: 'アンタナナリボを拠点に、光、形、人間の感情の交差点を探求して10年以上。風景、ポートレート、ストリートフォトグラフィーを手がけ、より深い真実を映し出す静かな瞬間を常に求めています。',
            about_bio_2: '各写真は、一時立ち止まり、見慣れたものを新しい目で見、移ろいの中に美しさを見つけるための招待状。最高の写真は「撮るもの」ではなく「受け取るもの」だと信じています。',
            skill_landscape: '風景',
            skill_portrait: 'ポートレート',
            skill_street: 'ストリート',
            skill_editorial: 'エディトリアル',
            skill_film: 'フィルム',
            contact_label: '連絡先',
            contact_title: 'お問い合わせ',
            contact_desc: '撮影依頼、コラボレーション、エディトリアルの案件を承ります。アンタナナリボ拠点、全世界対応。',
            contact_email: 'メール',
            contact_phone: '電話',
            contact_location: '所在地',
            contact_tokyo: 'Antananarivo 102',
            footer_rights: '全著作権所有。'
        },
        en: {
            nav_logo: 'GIZY',
            nav_gallery: 'Portfolio',
            nav_about: 'About',
            nav_contact: 'Contact',
            hero_eyebrow: 'Photography Portfolio',
            hero_name: 'GIZY Ayrton',
            hero_name_jp: 'ギジー　アイルトン　アウトゥ　ジョアリー',
            hero_tagline: 'Capturing light, form, and the quiet moments between.',
            hero_cta: 'View Work',
            hero_scroll: 'Scroll',
            gallery_label: 'Portfolio',
            gallery_title: 'Selected Work',
            gallery_desc: 'A curated selection of photographs spanning landscape, portrait, and street photography.',
            gallery_1_title: 'Mountain Solitude',
            gallery_1_desc: 'Rocky Mountains, Colorado',
            gallery_2_title: 'Studio Light',
            gallery_2_desc: 'Portrait series, Tokyo',
            gallery_3_title: 'Morning Mist',
            gallery_3_desc: 'Hakone, Japan',
            gallery_4_title: 'Urban Portrait',
            gallery_4_desc: 'Street photography, Shibuya',
            gallery_5_title: 'Autumn Path',
            gallery_5_desc: 'Nikko, Japan',
            gallery_6_title: 'Golden Hour',
            gallery_6_desc: 'Shonan Coast, Japan',
            about_label: 'About',
            about_title: 'The Photographer',
            about_bio_1: 'Based in Antananarivo, I have spent over a decade exploring the intersection of light, form, and human emotion. My work spans landscape, portrait, and street photography, always seeking the quiet moments that reveal deeper truths.',
            about_bio_2: 'Each photograph is an invitation to pause, to see the familiar with fresh eyes, and to find beauty in the transient. I believe that the best images are not taken, they are received.',
            skill_landscape: 'Landscape',
            skill_portrait: 'Portrait',
            skill_street: 'Street',
            skill_editorial: 'Editorial',
            skill_film: 'Film',
            contact_label: 'Contact',
            contact_title: 'Get In Touch',
            contact_desc: 'Available for commissions, collaborations, and editorial assignments. Based in Antananarivo, available worldwide.',
            contact_email: 'Email',
            contact_phone: 'Phone',
            contact_location: 'Location',
            contact_tokyo: 'Antananarivo 102',
            footer_rights: 'All rights reserved.'
        },
        fr: {
            nav_logo: 'GIZY',
            nav_gallery: 'Portfolio',
            nav_about: 'Profil',
            nav_contact: 'Contact',
            hero_eyebrow: 'Portfolio Photographique',
            hero_name: 'GIZY Ayrton',
            hero_name_jp: 'ギジー　アイルトン　アウトゥ　ジョアリー',
            hero_tagline: 'Capturer la lumière, la forme et les instants silencieux entre les deux.',
            hero_cta: 'Voir les travaux',
            hero_scroll: 'Défiler',
            gallery_label: 'Portfolio',
            gallery_title: 'Travaux sélectionnés',
            gallery_desc: 'Une sélection de photographies couvrant le paysage, le portrait et la photographie de rue.',
            gallery_1_title: 'Solitude Montagneuse',
            gallery_1_desc: 'Montagnes Rocheuses, Colorado',
            gallery_2_title: 'Lumière de Studio',
            gallery_2_desc: 'Série portrait, Tokyo',
            gallery_3_title: 'Brume Matinale',
            gallery_3_desc: 'Hakone, Japon',
            gallery_4_title: 'Portrait Urbain',
            gallery_4_desc: 'Photographie de rue, Shibuya',
            gallery_5_title: 'Sentier d\'Automne',
            gallery_5_desc: 'Nikko, Japon',
            gallery_6_title: 'Heure Dorée',
            gallery_6_desc: 'Côte de Shonan, Japon',
            about_label: 'Profil',
            about_title: 'Le Photographe',
            about_bio_1: 'Basé à Antananarivo, je passe depuis plus d\'une décennie à explorer l\'intersection de la lumière, de la forme et de l\'émotion humaine. Mon travail couvre le paysage, le portrait et la photographie de rue.',
            about_bio_2: 'Chaque photographie est une invitation à s\'arrêter, à voir le familier avec des yeux neufs et à trouver la beauté dans l\'éphémère.',
            skill_landscape: 'Paysage',
            skill_portrait: 'Portrait',
            skill_street: 'Rue',
            skill_editorial: 'Éditorial',
            skill_film: 'Film',
            contact_label: 'Contact',
            contact_title: 'Me Contacter',
            contact_desc: 'Disponible pour des commandes, collaborations et missions éditoriales. Basé à Antananarivo, disponible dans le monde entier.',
            contact_email: 'E-mail',
            contact_phone: 'Téléphone',
            contact_location: 'Localisation',
            contact_tokyo: 'Antananarivo 102',
            footer_rights: 'Tous droits réservés.'
        }
    };

    const langLabels = { ja: 'JP', en: 'EN', fr: 'FR' };

    /* ===== State ===== */
    let currentLang = localStorage.getItem('portfolio-lang') || 'en';
    let currentTheme = localStorage.getItem('portfolio-theme') || 'light';
    let currentLightboxIndex = -1;

    /* ===== DOM Refs ===== */
    const $ = (sel) => document.querySelector(sel);
    const $$ = (sel) => document.querySelectorAll(sel);

    const header = $('#siteHeader');
    const hamburger = $('#hamburger');
    const mobileMenu = $('#mobileMenu');
    const langDropdown = $('#langDropdown');
    const langTrigger = $('#langTrigger');
    const langMenu = $('#langMenu');
    const currentLangEl = $('#currentLang');
    const themeToggle = $('#themeToggle');
    const lightbox = $('#lightbox');
    const lightboxImage = $('#lightboxImage');
    const lightboxInfo = $('#lightboxInfo');
    const galleryItems = $$('.gallery__item');

    /* ===== Theme ===== */
    function applyTheme(theme) {
        currentTheme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('portfolio-theme', theme);
    }

    themeToggle.addEventListener('click', () => {
        applyTheme(currentTheme === 'light' ? 'dark' : 'light');
    });

    applyTheme(currentTheme);

    /* ===== Language ===== */
    function applyLang(lang) {
        currentLang = lang;
        localStorage.setItem('portfolio-lang', lang);
        document.documentElement.setAttribute('lang', lang);
        currentLangEl.textContent = langLabels[lang];

        const t = translations[lang];
        if (!t) return;

        $$('[data-translate]').forEach((el) => {
            const key = el.getAttribute('data-translate');
            if (t[key] !== undefined) {
                el.textContent = t[key];
            }
        });

        // Update active state in menu
        langMenu.querySelectorAll('li').forEach((li) => {
            li.classList.toggle('active', li.dataset.lang === lang);
        });
    }

    // Dropdown toggle
    langTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = langDropdown.classList.toggle('open');
        langTrigger.setAttribute('aria-expanded', isOpen);
    });

    // Language selection
    langMenu.addEventListener('click', (e) => {
        const li = e.target.closest('[data-lang]');
        if (!li) return;
        applyLang(li.dataset.lang);
        langDropdown.classList.remove('open');
        langTrigger.setAttribute('aria-expanded', 'false');
    });

    // Close dropdown on outside click
    document.addEventListener('click', () => {
        langDropdown.classList.remove('open');
        langTrigger.setAttribute('aria-expanded', 'false');
    });

    applyLang(currentLang);

    /* ===== Mobile Menu ===== */
    hamburger.addEventListener('click', () => {
        const isOpen = hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('open', isOpen);
        hamburger.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close mobile menu on link click
    mobileMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });

    /* ===== Smooth Scroll ===== */
    $$('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    /* ===== Header Scroll ===== */
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const y = window.scrollY;
        header.classList.toggle('scrolled', y > 60);
        lastScroll = y;
    }, { passive: true });

    /* ===== Lightbox ===== */
    const lightboxData = Array.from(galleryItems).map((item) => {
        const img = item.querySelector('.gallery__image');
        const title = item.querySelector('.gallery__item-title');
        const desc = item.querySelector('.gallery__item-desc');
        const num = item.querySelector('.gallery__number');
        return {
            src: img.src.replace(/w=\d+&h=\d+/, 'w=1400&h=1000'),
            alt: img.alt,
            title: title ? title.textContent : '',
            desc: desc ? desc.textContent : '',
            num: num ? num.textContent : ''
        };
    });

    function openLightbox(index) {
        currentLightboxIndex = index;
        const data = lightboxData[index];
        lightboxImage.src = data.src;
        lightboxImage.alt = data.alt;
        lightboxInfo.querySelector('.lightbox__number').textContent = data.num;
        lightboxInfo.querySelector('.lightbox__title').textContent = data.title;
        lightboxInfo.querySelector('.lightbox__desc').textContent = data.desc;
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
        // Focus trap: focus the close button
        $('.lightbox__close').focus();
    }

    function closeLightbox() {
        lightbox.classList.remove('open');
        document.body.style.overflow = '';
        currentLightboxIndex = -1;
    }

    function navigateLightbox(dir) {
        const total = galleryItems.length;
        currentLightboxIndex = (currentLightboxIndex + dir + total) % total;
        const data = lightboxData[currentLightboxIndex];
        lightboxImage.src = data.src;
        lightboxImage.alt = data.alt;
        lightboxInfo.querySelector('.lightbox__number').textContent = data.num;
        lightboxInfo.querySelector('.lightbox__title').textContent = data.title;
        lightboxInfo.querySelector('.lightbox__desc').textContent = data.desc;
    }

    galleryItems.forEach((item, i) => {
        item.setAttribute('tabindex', '0');
        item.setAttribute('role', 'button');
        item.addEventListener('click', () => openLightbox(i));
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openLightbox(i);
            }
        });
    });

    $('.lightbox__close').addEventListener('click', closeLightbox);
    $('.lightbox__prev').addEventListener('click', () => navigateLightbox(-1));
    $('.lightbox__next').addEventListener('click', () => navigateLightbox(1));

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('open')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navigateLightbox(-1);
        if (e.key === 'ArrowRight') navigateLightbox(1);

        // Focus trap
        if (e.key === 'Tab') {
            const focusable = lightbox.querySelectorAll('button');
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        }
    });

    /* ===== Scroll Reveal ===== */
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    });

    // Add reveal class to sections
    $$('.gallery__header, .gallery__item, .about__container, .contact__container').forEach((el) => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });

    // Stagger gallery items
    galleryItems.forEach((item, i) => {
        item.style.transitionDelay = `${i * 0.08}s`;
    });

})();
