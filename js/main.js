/* GREENSCAPE — static bilingual website
   Replace the WhatsApp number below with the business number, including country code.
   Example Saudi number: 9665XXXXXXXX (digits only, no + or spaces). */
const CONFIG = {
  whatsappNumber: "966500000000",
  businessName: "GREENSCAPE"
};

const translations = {
  ar: {
    announcement:"نحوّل المساحات الخارجية إلى أماكن تحب العيش فيها",announcementTag:"تصميم • تنفيذ • عناية",brandTag:"مساحات تنبض بالحياة",
    navAbout:"من نحن",navServices:"خدماتنا",navProjects:"أعمالنا",navProcess:"آلية العمل",navFaq:"الأسئلة الشائعة",navCta:"اطلب عرض سعر",
    heroEyebrow:"تصميم حدائق ومساحات خارجية",heroTitle:"مساحتك الخارجية،<br><em>حكاية خضراء</em> تبدأ هنا.",heroText:"نصمم وننفذ حدائق تجمع بين جمال الطبيعة وراحة التفاصيل، لتستمتع بكل لحظة في مساحتك.",heroCta:"ابدأ مشروعك",heroSecondary:"استكشف أعمالنا",heroNote:"من الفكرة الأولى إلى آخر لمسة خضراء",heroBottom:"نصنع مساحات تدوم",
    aboutKicker:"عن GREENSCAPE",aboutTitle:"الطبيعة ليست مجرد منظر.<br><em>إنها أسلوب حياة.</em>",aboutText:"نؤمن أن الحديقة الناجحة تبدأ بفهم طريقة استخدامك للمكان. لذلك نجمع بين التصميم المدروس، واختيار النباتات والخامات المناسبة، والتنفيذ الدقيق لنصنع مساحة جميلة وعملية في الوقت نفسه.",photoCaption:"مساحات مصممة لتناسب يومك",
    servicesKicker:"ماذا نقدم",servicesTitle:"كل ما تحتاجه<br><em>حديقتك المثالية.</em>",servicesIntro:"من التخطيط الأولي إلى العناية المستمرة، نقدم حلولاً متكاملة للمنازل والمنشآت والمساحات التجارية.",
    s1Title:"تصميم الحدائق",s1Text:"تصورات إبداعية وتوزيع ذكي للمساحات والنباتات ومناطق الجلوس.",s2Title:"تنفيذ وتنسيق",s2Text:"تحويل المخططات إلى واقع بخامات مختارة واهتمام بالتفاصيل.",s3Title:"العشب الطبيعي والصناعي",s3Text:"حلول عشب تناسب طبيعة الاستخدام ومستوى العناية المطلوب.",s4Title:"أنظمة الري",s4Text:"تخطيط وتركيب أنظمة ري تساعد على استخدام المياه بكفاءة.",s5Title:"الصيانة والعناية",s5Text:"برامج عناية دورية للحفاظ على صحة النباتات وجمال المساحة.",s6Title:"الإضاءة الخارجية",s6Text:"إضاءة عملية وجمالية تبرز تفاصيل الحديقة بعد غروب الشمس.",serviceLink:"اكتشف الخدمة ↗",
    featureKicker:"فلسفتنا في التصميم",featureTitle:"جمال يلفت النظر.<br><em>وتفاصيل تصنع الفرق.</em>",featureText:"نوازن بين الشكل والوظيفة، ونراعي المناخ وطبيعة الموقع واحتياجاتك اليومية في كل قرار تصميمي.",featureCta:"تحدث مع فريقنا",
    projectsKicker:"مختارات من أعمالنا",projectsTitle:"مساحات تلهمك<br><em>لتبدأ حديقتك.</em>",projectsIntro:"استكشف مجموعة من النماذج التصورية التي توضح تنوع الأساليب والحلول الممكنة.",filterAll:"الكل",filterResidential:"سكني",filterModern:"عصري",filterNatural:"طبيعي",p1Type:"حديقة منزلية",p1Title:"هدوء التفاصيل",p2Type:"تصميم عصري",p2Title:"امتداد طبيعي",p3Type:"مساحة خضراء",p3Title:"قرب من الطبيعة",demoNote:"صور ونماذج العرض لأغراض توضيحية — تُستبدل بصور المشاريع الفعلية بعد الحصول على موافقة أصحابها.",
    baKicker:"من الفكرة إلى الواقع",baTitle:"كل مساحة تحمل<br><em>إمكانية جديدة.</em>",baText:"ابدأ بمساحة فارغة أو حديقة تحتاج إلى تجديد. نساعدك على تصور الإمكانات وتحويلها إلى خطة واضحة تناسبك.",baCta:"ناقش فكرتك معنا",baLabel1:"إلهام وتصوّر",baLabel2:"النتيجة المستهدفة",
    whyKicker:"لماذا GREENSCAPE",whyTitle:"مساحة أجمل.<br><em>تجربة أسهل.</em>",whyText:"نضع احتياجاتك في قلب العمل، ونحرص على وضوح الخطوات والتفاصيل من البداية.",r1Title:"تصميم يناسبك",r1Text:"حلول تُبنى على ذوقك وطبيعة المساحة وطريقة استخدامها.",r2Title:"اهتمام بالتفاصيل",r2Text:"اختيار متناسق للنباتات والخامات والإضاءة وعناصر الحديقة.",r3Title:"خطوات واضحة",r3Text:"تواصل منظم وتوضيح نطاق العمل والتكلفة قبل البدء.",r4Title:"حلول متكاملة",r4Text:"من التصميم إلى التنفيذ والري والصيانة حسب احتياج المشروع.",
    processKicker:"رحلتك معنا",processTitle:"أربع خطوات نحو<br><em>مساحتك الجديدة.</em>",processIntro:"عملية بسيطة وشفافة تساعدنا على فهم احتياجك وتقديم الحل المناسب.",step1Title:"نتعرف عليك",step1Text:"نستمع لفكرتك ونتعرف على الموقع والميزانية والتفضيلات.",step2Title:"نخطط ونصمم",step2Text:"نحدد نطاق العمل ونقترح تصورًا يناسب المساحة.",step3Title:"ننفذ بعناية",step3Text:"تبدأ أعمال التنفيذ وفق الخطة والاتفاق المعتمد.",step4Title:"نعتني بالتفاصيل",step4Text:"نوضح لك إرشادات العناية وخيارات الصيانة المناسبة.",
    testimonialText:"نموذج مساحة خارجية — أضف هنا رأيًا حقيقيًا من عميل بعد الحصول على موافقته.",testimonialName:"مساحة مخصصة للشهادة",testimonialRole:"نص تجريبي — ليس شهادة عميل حقيقية",testimonialDemo:"نموذج توضيحي",
    faqKicker:"أسئلة شائعة",faqTitle:"هل لديك<br><em>استفسار؟</em>",faqIntro:"إليك إجابات عن بعض الأسئلة التي قد تساعدك قبل بدء مشروعك.",q1:"هل تقدمون التصميم والتنفيذ معًا؟ ＋",a1:"يمكن طلب التصميم أو التنفيذ أو الحل المتكامل، وفق نطاق المشروع واحتياجه.",q2:"هل يمكن تصميم حديقة لمساحة صغيرة؟ ＋",a2:"نعم، يمكن استغلال المساحات الصغيرة بتوزيع مدروس للنباتات والجلوس والإضاءة.",q3:"كيف يتم تحديد التكلفة؟ ＋",a3:"تعتمد التكلفة على مساحة الموقع ونوع الأعمال والخامات والنباتات المطلوبة. نحدد التفاصيل بعد فهم المشروع.",q4:"هل توفرون الصيانة الدورية؟ ＋",a4:"يمكن مناقشة برامج صيانة مناسبة لنوع الحديقة والنباتات ومستوى العناية المطلوب.",q5:"ما المعلومات المطلوبة لطلب عرض سعر؟ ＋",a5:"المدينة، نوع الموقع، المساحة التقريبية، الخدمات المطلوبة، وصور للمكان إن توفرت.",
    contactKicker:"لنبدأ معًا",contactTitle:"جاهز تمنح<br><em>مساحتك حياة؟</em>",contactText:"شاركنا تفاصيل فكرتك، وسنتواصل معك لمناقشة الخطوة التالية.",whatsappLabel:"تواصل مباشر عبر واتساب",whatsappCta:"راسلنا الآن",formTitle:"اطلب عرض سعر",formSubtitle:"املأ البيانات وسنجهز رسالة بطلبك على واتساب.",nameLabel:"الاسم",phoneLabel:"رقم الجوال",cityLabel:"المدينة",serviceLabel:"الخدمة المطلوبة",selectService:"اختر الخدمة",opt1:"تصميم حدائق",opt2:"تنفيذ وتنسيق",opt3:"عشب طبيعي أو صناعي",opt4:"أنظمة ري",opt5:"صيانة حدائق",opt6:"إضاءة خارجية",opt7:"خدمة متكاملة",messageLabel:"تفاصيل إضافية (اختياري)",submitText:"إرسال الطلب عبر واتساب",formNote:"بالضغط على الإرسال، سيتم فتح واتساب برسالة جاهزة لمراجعتها وإرسالها.",namePlaceholder:"الاسم الكامل",phonePlaceholder:"+966 5X XXX XXXX",cityPlaceholder:"مثال: الرياض",messagePlaceholder:"أخبرنا قليلًا عن مشروعك...",formError:"يرجى تعبئة الحقول المطلوبة بشكل صحيح.",footerText:"نصمم مساحات خارجية تجمع بين الطبيعة والراحة والتفاصيل المدروسة.",backTop:"العودة للأعلى ↑",rights:"جميع الحقوق محفوظة.",designedBy:"تم التصميم بواسطة",footerLocation:"السعودية",waMessage:"مرحبًا GREENSCAPE، أرغب في طلب عرض سعر."
  },
  en: {
    announcement:"We turn outdoor spaces into places you love to live in",announcementTag:"Design • Build • Care",brandTag:"Spaces that feel alive",
    navAbout:"About",navServices:"Services",navProjects:"Projects",navProcess:"Our Process",navFaq:"FAQs",navCta:"Request a Quote",
    heroEyebrow:"Landscape & outdoor design",heroTitle:"Your outdoor space,<br><em>a greener story</em> starts here.",heroText:"We design and create gardens that bring together the beauty of nature and the comfort of thoughtful details.",heroCta:"Start your project",heroSecondary:"Explore our work",heroNote:"From the first idea to the final green touch",heroBottom:"Creating spaces that last",
    aboutKicker:"About GREENSCAPE",aboutTitle:"Nature is more than a view.<br><em>It is a way of life.</em>",aboutText:"We believe a successful garden starts with understanding how you use your space. We bring together considered design, suitable plants and materials, and careful execution to create an outdoor space that is both beautiful and practical.",photoCaption:"Spaces designed around your day",
    servicesKicker:"What we do",servicesTitle:"Everything your garden<br><em>needs to thrive.</em>",servicesIntro:"From initial planning to ongoing care, we provide integrated solutions for homes, properties and commercial spaces.",
    s1Title:"Garden design",s1Text:"Creative concepts and smart layouts for plants, spaces and seating areas.",s2Title:"Landscape installation",s2Text:"Bringing plans to life with selected materials and attention to detail.",s3Title:"Natural & artificial grass",s3Text:"Grass solutions tailored to the intended use and maintenance needs.",s4Title:"Irrigation systems",s4Text:"Planning and installing irrigation systems that help use water efficiently.",s5Title:"Garden maintenance",s5Text:"Regular care programs to support plant health and keep your space looking its best.",s6Title:"Outdoor lighting",s6Text:"Practical and decorative lighting that brings your garden to life after sunset.",serviceLink:"Explore service ↗",
    featureKicker:"Our design philosophy",featureTitle:"Beauty that catches the eye.<br><em>Details that make the difference.</em>",featureText:"We balance form and function, considering climate, site conditions and your everyday needs in every design decision.",featureCta:"Talk to our team",
    projectsKicker:"Selected concepts",projectsTitle:"Spaces to inspire<br><em>your next garden.</em>",projectsIntro:"Explore a selection of visual concepts showing different styles and possibilities.",filterAll:"All",filterResidential:"Residential",filterModern:"Modern",filterNatural:"Natural",p1Type:"Residential garden",p1Title:"Quiet details",p2Type:"Modern design",p2Title:"Natural extension",p3Type:"Green space",p3Title:"Closer to nature",demoNote:"Images and project examples are illustrative only. Replace them with actual project photography after obtaining the owners’ permission.",
    baKicker:"From idea to reality",baTitle:"Every space holds<br><em>a new possibility.</em>",baText:"Start with an empty space or a garden ready for a refresh. We help you explore its potential and turn it into a clear plan.",baCta:"Discuss your idea",baLabel1:"Inspiration & concept",baLabel2:"Desired outcome",
    whyKicker:"Why GREENSCAPE",whyTitle:"A better space.<br><em>A simpler experience.</em>",whyText:"Your needs are at the heart of our work. We keep the steps and project details clear from the start.",r1Title:"Made for you",r1Text:"Solutions shaped around your taste, space and the way you use it.",r2Title:"Attention to detail",r2Text:"A considered mix of plants, materials, lighting and garden features.",r3Title:"Clear steps",r3Text:"Organised communication and a clear scope and cost before work begins.",r4Title:"Integrated solutions",r4Text:"From design to installation, irrigation and maintenance as needed.",
    processKicker:"Your journey with us",processTitle:"Four steps to<br><em>your new space.</em>",processIntro:"A simple, transparent process that helps us understand your needs and recommend the right solution.",step1Title:"Get to know you",step1Text:"We listen to your idea and learn about the site, budget and preferences.",step2Title:"Plan & design",step2Text:"We define the scope and propose a concept suited to your space.",step3Title:"Build with care",step3Text:"Installation begins according to the approved plan and agreement.",step4Title:"Care for the details",step4Text:"We share care guidance and suitable maintenance options.",
    testimonialText:"Outdoor space sample — add a genuine client review here after receiving their permission.",testimonialName:"Space for a client testimonial",testimonialRole:"Demo copy — not a real client testimonial",testimonialDemo:"Illustrative sample",
    faqKicker:"FAQs",faqTitle:"Have a<br><em>question?</em>",faqIntro:"Here are answers to a few questions you may have before starting your project.",q1:"Do you offer design and installation together? ＋",a1:"You can request design, installation or an integrated solution depending on your project scope and needs.",q2:"Can you design a small garden? ＋",a2:"Yes. Small spaces can be planned thoughtfully for planting, seating and lighting.",q3:"How is the project cost determined? ＋",a3:"Cost depends on site area, scope, materials and selected plants. We confirm details after understanding the project.",q4:"Do you offer regular maintenance? ＋",a4:"We can discuss maintenance programs suited to your garden, plants and care requirements.",q5:"What do you need to prepare a quote? ＋",a5:"Your city, site type, approximate area, requested services and photos if available.",
    contactKicker:"Let's get started",contactTitle:"Ready to bring<br><em>your space to life?</em>",contactText:"Tell us about your idea and we will get in touch to discuss the next step.",whatsappLabel:"Connect directly on WhatsApp",whatsappCta:"Message us now",formTitle:"Request a quote",formSubtitle:"Fill in the details and we will prepare a WhatsApp message for you.",nameLabel:"Name",phoneLabel:"Mobile number",cityLabel:"City",serviceLabel:"Service required",selectService:"Choose a service",opt1:"Garden design",opt2:"Landscape installation",opt3:"Natural or artificial grass",opt4:"Irrigation systems",opt5:"Garden maintenance",opt6:"Outdoor lighting",opt7:"Complete service",messageLabel:"Additional details (optional)",submitText:"Send request via WhatsApp",formNote:"Submitting opens WhatsApp with a prepared message for you to review and send.",namePlaceholder:"Full name",phonePlaceholder:"+966 5X XXX XXXX",cityPlaceholder:"e.g. Riyadh",messagePlaceholder:"Tell us a little about your project...",formError:"Please complete the required fields correctly.",footerText:"We design outdoor spaces that bring together nature, comfort and thoughtful details.",backTop:"Back to top ↑",rights:"All rights reserved.",designedBy:"Designed by",footerLocation:"Saudi Arabia",waMessage:"Hello GREENSCAPE, I would like to request a quote."
  }
};

let currentLang = "ar";
const $ = (selector, scope=document) => scope.querySelector(selector);
const $$ = (selector, scope=document) => [...scope.querySelectorAll(selector)];

function setLanguage(lang) {
  currentLang = lang;
  const dict = translations[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.body.dir = lang === "ar" ? "rtl" : "ltr";
  $$("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  $$("[data-i18n-html]").forEach(el => {
    const key = el.dataset.i18nHtml;
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  $$("[data-placeholder]").forEach(el => {
    const key = el.dataset.placeholder;
    if (dict[key] !== undefined) el.placeholder = dict[key];
  });
  $(".lang-switch").textContent = lang === "ar" ? "EN" : "عربي";
  $(".lang-switch").setAttribute("aria-label", lang === "ar" ? "Switch to English" : "التبديل إلى العربية");
  document.title = lang === "ar" ? "GREENSCAPE | تصميم حدائق ومساحات خارجية" : "GREENSCAPE | Landscape & Outdoor Design";
  document.querySelector('meta[name="description"]').content = lang === "ar"
    ? "GREENSCAPE — تصميم وتنفيذ الحدائق والمساحات الخارجية والري والصيانة في السعودية."
    : "GREENSCAPE — Landscape design, installation, irrigation and garden care in Saudi Arabia.";
}
$(".lang-switch").addEventListener("click", () => setLanguage(currentLang === "ar" ? "en" : "ar"));

const menuToggle = $(".menu-toggle");
const mainNav = $(".main-nav");
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
$$(".main-nav a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

$$(".filter").forEach(button => button.addEventListener("click", () => {
  $$(".filter").forEach(item => item.classList.remove("active"));
  button.classList.add("active");
  const filter = button.dataset.filter;
  $$(".project-card").forEach(card => {
    card.hidden = filter !== "all" && card.dataset.category !== filter;
  });
}));

function whatsappUrl(message) {
  const number = CONFIG.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
function openWhatsApp(message) {
  if (!CONFIG.whatsappNumber || CONFIG.whatsappNumber === "966500000000") {
    $("#formFeedback").textContent = currentLang === "ar"
      ? "يرجى ضبط رقم واتساب الحقيقي في ملف js/main.js قبل استقبال الطلبات."
      : "Please set the real WhatsApp number in js/main.js before receiving enquiries.";
    return;
  }
  window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
}
$("#directWhatsapp").addEventListener("click", e => {
  e.preventDefault();
  const message = currentLang === "ar" ? translations.ar.waMessage : translations.en.waMessage;
  openWhatsApp(message);
});
$("#floatingWhatsapp").addEventListener("click", e => {
  e.preventDefault();
  const message = currentLang === "ar" ? translations.ar.waMessage : translations.en.waMessage;
  openWhatsApp(message);
});

$("#quoteForm").addEventListener("submit", e => {
  e.preventDefault();
  const form = e.currentTarget;
  const feedback = $("#formFeedback");
  if (!form.reportValidity()) {
    feedback.textContent = translations[currentLang].formError;
    return;
  }
  const data = new FormData(form);
  const service = data.get("service");
  const message = currentLang === "ar"
    ? `مرحبًا GREENSCAPE، أرغب في طلب عرض سعر.\nالاسم: ${data.get("name")}\nرقم الجوال: ${data.get("phone")}\nالمدينة: ${data.get("city")}\nالخدمة: ${service}\nالتفاصيل: ${data.get("message") || "لا توجد"}`
    : `Hello GREENSCAPE, I would like to request a quote.\nName: ${data.get("name")}\nMobile: ${data.get("phone")}\nCity: ${data.get("city")}\nService: ${service}\nDetails: ${data.get("message") || "Not provided"}`;
  openWhatsApp(message);
});

$("#year").textContent = new Date().getFullYear();

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  $$(".section-heading, .intro-main, .intro-photo, .service-card, .feature-content, .project-card, .ba-copy, .ba-image, .reason, .process-step, .faq-list details, .quote-form").forEach(el => {
    el.classList.add("reveal");
    observer.observe(el);
  });
} else {
  $$(".reveal").forEach(el => el.classList.add("visible"));
}
