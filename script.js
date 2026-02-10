// Loading Screen
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.loader').classList.add('hidden');
    }, 1500);
});

// Translations
const translations = {
    ar: {
        logoSub: "Since 2026",
        heroBadge: "مفتوح الآن",
        heroTitle: "Noir & Gold",
        heroSpan: "تجربة القهوة الفاخرة",
        heroDesc: "حيث يلتقي الأصالة بالحداثة في أجواء باريسية ساحرة. استمتع بأفضل حبوب البن المحمصة يدوياً وأشهى المأكولات الفاخرة.",
        heroCtaPrimary: "استكشف القائمة",
        heroCtaSecondary: "احجز طاولتك",
        navLinks: ["الرئيسية", "من نحن", "القائمة", "معرض الصور", "تواصل معنا"],
        aboutLabel: "قصتنا",
        aboutTitle: "فن القهوة بأناقة باريسية",
        aboutText1: "تأسس Noir & Gold في عام 2026 بهدف إعادة تعريف تجربة الكافيه في مصر. نحن لسنا مجرد مكان لتناول القهوة، بل وجهة ثقافية تجمع بين الفن الأوروبي الكلاسيكي والروح العصرية.",
        aboutText2: "نختار حبوب البن بدقة من مزارع إثيوبيا الجبلية وكولومبيا، ونحمصها يدوياً في مقرنا للحفاظ على النكهة الغنية. كل فنجان يحكي قصة رحلة استثنائية من المزرعة إلى كوبك.",
        features: [
            {title: "حمص يدوي", desc: "تحميص يومي طازج"},
            {title: "مكونات عضوية", desc: "من أفضل المزارع"},
            {title: "شيفات عالميين", desc: "خبرة 20+ عام"},
            {title: "أجواء موسيقية", desc: "جاز كلاسيكي"}
        ],
        stats: ["سنة التأسيس", "نوع قهوة", "عميل سعيد", "تقييم الجوجل"],
        menuLabel: "قائمتنا",
        menuTitle: "أشهى المذاقات الفاخرة",
        menuSubtitle: "تشكيلة مختارة بعناية من أجود المكونات لإرضاء أرقى الأذواق",
        menuTabs: ["☕ القهوة المختصة", "🍰 الحلويات", "🍳 الفطار", "🥩 الأطباق الرئيسية"],
        galleryLabel: "أجوائنا",
        galleryTitle: "لحظات Noir & Gold",
        gallerySubtitle: "تجربة بصرية فريدة تجمع بين الفخامة والدفء",
        testimonialsLabel: "آراء العملاء",
        testimonialsTitle: "ماذا يقولون عنا؟",
        contactTitle: "نحن ننتظركم",
        contactDesc: "سواء كنت تبحث عن مكان للعمل، لقاء مع الأصدقاء، أو مجرد استراحة هادئة، Noir & Gold هو وجهتك المثالية.",
        locationTitle: "الموقع",
        locationText: "شارع التسعين الشمالي، التجمع الخامس، القاهرة الجديدة<br>بجوار مول Point 90",
        phoneTitle: "الحجز والاستفسار",
        emailTitle: "البريد الإلكتروني",
        hoursTitle: "مواعيد العمل",
        hoursText: "يومياً: 7:00 صباحاً - 12:00 منتصف الليل<br>الجمعة: 2:00 ظهراً - 12:00 منتصف الليل",
        ctaCall: "اتصل الآن للحجز",
        footerText: "© 2026 Noir & Gold Café. جميع الحقوق محفوظة. | تصميم وتطوير Noir & Gold Team"
    },
    en: {
        logoSub: "Since 2026",
        heroBadge: "Open Now",
        heroTitle: "Noir & Gold",
        heroSpan: "Premium Coffee Experience",
        heroDesc: "Where authenticity meets modernity in enchanting Parisian atmosphere. Enjoy the finest hand-roasted coffee beans and gourmet cuisine.",
        heroCtaPrimary: "Explore Menu",
        heroCtaSecondary: "Book Your Table",
        navLinks: ["Home", "About Us", "Menu", "Gallery", "Contact"],
        aboutLabel: "Our Story",
        aboutTitle: "The Art of Coffee with Parisian Elegance",
        aboutText1: "Noir & Gold was established in 2026 to redefine the café experience in Egypt. We are not just a place for coffee, but a cultural destination combining classic European art with modern spirit.",
        aboutText2: "We carefully select coffee beans from Ethiopian highlands and Colombia, roasting them manually at our location to preserve rich flavors. Every cup tells the story of an exceptional journey from farm to cup.",
        features: [
            {title: "Hand Roasted", desc: "Daily fresh roast"},
            {title: "Organic Ingredients", desc: "From finest farms"},
            {title: "World-class Chefs", desc: "20+ years exp."},
            {title: "Musical Ambiance", desc: "Classic Jazz"}
        ],
        stats: ["Established", "Coffee Types", "Happy Clients", "Google Rating"],
        menuLabel: "Our Menu",
        menuTitle: "Exquisite Gourmet Flavors",
        menuSubtitle: "Carefully curated selection of finest ingredients to satisfy the most refined tastes",
        menuTabs: ["☕ Specialty Coffee", "🍰 Desserts", "🍳 Breakfast", "🥩 Main Courses"],
        galleryLabel: "Our Atmosphere",
        galleryTitle: "Noir & Gold Moments",
        gallerySubtitle: "A unique visual experience combining luxury and warmth",
        testimonialsLabel: "Customer Reviews",
        testimonialsTitle: "What They Say About Us?",
        contactTitle: "We Are Waiting For You",
        contactDesc: "Whether you're looking for a workspace, meeting friends, or just a quiet break, Noir & Gold is your perfect destination.",
        locationTitle: "Location",
        locationText: "North 90th Street, 5th Settlement, New Cairo<br>Near Point 90 Mall",
        phoneTitle: "Reservations & Inquiries",
        emailTitle: "Email",
        hoursTitle: "Opening Hours",
        hoursText: "Daily: 7:00 AM - 12:00 AM<br>Friday: 2:00 PM - 12:00 AM",
        ctaCall: "Call Now to Book",
        footerText: "© 2026 Noir & Gold Café. All Rights Reserved. | Designed by Noir & Gold Team"
    }
};

let isArabic = true;

function toggleLanguage() {
    isArabic = !isArabic;
    const lang = isArabic ? 'ar' : 'en';
    const t = translations[lang];
    
    document.documentElement.lang = lang;
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    
    // Update button
    document.querySelector('.lang-btn').textContent = isArabic ? 'English' : 'العربية';
    
    // Update logo
    document.querySelector('.logo-sub').textContent = t.logoSub;
    
    // Update hero
    document.querySelector('.hero-badge').textContent = t.heroBadge;
    document.querySelector('.hero-title').innerHTML = t.heroTitle + '<span>' + t.heroSpan + '</span>';
    document.querySelector('.hero-desc').textContent = t.heroDesc;
    document.querySelector('.hero-cta-primary').textContent = t.heroCtaPrimary;
    document.querySelector('.hero-cta-secondary').textContent = t.heroCtaSecondary;
    
    // Update nav
    document.querySelectorAll('.nav-link').forEach((link, index) => {
        link.textContent = t.navLinks[index];
    });
    
    // Update about
    document.querySelector('.about-label').textContent = t.aboutLabel;
    document.querySelector('.about-title').textContent = t.aboutTitle;
    document.querySelector('.about-text-1').textContent = t.aboutText1;
    document.querySelector('.about-text-2').textContent = t.aboutText2;
    
    // Update features
    document.querySelectorAll('.feature-item').forEach((item, index) => {
        if (t.features[index]) {
            item.querySelector('h4').textContent = t.features[index].title;
            item.querySelector('p').textContent = t.features[index].desc;
        }
    });
    
    // Update stats labels
    document.querySelectorAll('.stat-label').forEach((label, index) => {
        label.textContent = t.stats[index];
    });
    
    // Update menu
    document.querySelector('.menu-label').textContent = t.menuLabel;
    document.querySelector('.menu-title').textContent = t.menuTitle;
    document.querySelector('.menu-subtitle').textContent = t.menuSubtitle;
    
    document.querySelectorAll('.menu-tab').forEach((tab, index) => {
        tab.textContent = t.menuTabs[index];
    });
    
    // Update gallery
    document.querySelector('.gallery-label').textContent = t.galleryLabel;
    document.querySelector('.gallery-title').textContent = t.galleryTitle;
    document.querySelector('.gallery-subtitle').textContent = t.gallerySubtitle;
    
    // Update testimonials
    document.querySelector('.testimonials .section-label').textContent = t.testimonialsLabel;
    document.querySelector('.testimonials .section-title').textContent = t.testimonialsTitle;
    
    // Update contact
    document.querySelector('.contact-title').textContent = t.contactTitle;
    document.querySelector('.contact-info > p').textContent = t.contactDesc;
    document.querySelector('.location-title').textContent = t.locationTitle;
    document.querySelector('.location-text').innerHTML = t.locationText;
    document.querySelector('.phone-title').textContent = t.phoneTitle;
    document.querySelector('.email-title').textContent = t.emailTitle;
    document.querySelector('.hours-title').textContent = t.hoursTitle;
    document.querySelector('.hours-text').innerHTML = t.hoursText;
    document.querySelector('.contact-info .btn-primary').textContent = t.ctaCall;
    
    // Update footer
    document.querySelector('.footer-text').textContent = t.footerText;
}

// Menu Tabs
function showMenu(category, btn) {
    document.querySelectorAll('.menu-content').forEach(content => {
        content.classList.remove('active');
    });
    
    document.querySelectorAll('.menu-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    document.getElementById(category).classList.add('active');
    btn.classList.add('active');
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 5px 30px rgba(0,0,0,0.3)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Testimonial Slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-item');

setInterval(() => {
    testimonials[currentTestimonial].classList.remove('active');
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    testimonials[currentTestimonial].classList.add('active');
}, 5000);