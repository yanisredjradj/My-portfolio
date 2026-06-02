import { createContext, useContext, useState } from "react"

const LanguageContext = createContext()

export const translations = {
  en: {
    home: "Home", about: "About", project: "Project",
    services: "Services", certificates: "Certificates", contact: "Contact",
    heroTag: "Portfolio 2026",
    heroDesc: "Passionate about building modern digital experiences, securing systems, and growing every single day.",
    projects: "Projects", yearsLearning: "Years Learning", technologies: "Technologies",
    contactMe: "Contact Me", whoAmI: "Who Am I", downloadCV: "⬇ Download CV",
    aboutTitle: "About Me",
    aboutText: "Hi, I'm Yanis Redjradj, a student in 3ème Technique Math – Génie Électrique, currently preparing for my Baccalauréat. I'm passionate about programming, cybersecurity, and building modern digital projects. I enjoy learning how systems work, securing them, and improving my skills every day. My goal is to achieve a Master 2 degree and an engineering diploma in Programming, Cybersecurity, or Software Development. I aim to study abroad, to gain high-level education and real-world experience.",
    mySkills: "My Skills", myJourney: "My Journey",
    t1year: "2023", t1title: "Started Learning Programming", t1desc: "Started with HTML, CSS and JavaScript — built my first websites.",
    t2year: "2024", t2title: "Learned React & Backend", t2desc: "Dived into React, Node.js, Python and databases.",
    t3year: "2025", t3title: "Cybersecurity Interest", t3desc: "Started learning cybersecurity, ethical hacking and web security.",
    t4year: "2026", t4title: "Portfolio & Real Projects", t4desc: "Built real projects and this portfolio to showcase my skills.",
    projectTitle: "Projects", liveDemo: "Live Demo",
    p1title: "My Social Media", p1desc: "A centralized hub for all my social media profiles — everything in one place. Password: 18052009",
    p2title: "Google Secure Auth", p2desc: "A Social Engineering & Phishing simulation tool built for educational purposes.",
    p3title: "Yanis Fit", p3desc: "A fitness tracking app.",
    p4title: "Eid Adha", p4desc: "A website created to celebrate Eid Al-Adha.",
    servicesTitle: "Services",
    serv1title: "Frontend Development", serv1desc: "I build modern and interactive websites using React, HTML, CSS, JavaScript, Node.Js, Php, MySql and Next.js.",
    serv2title: "UI Design", serv2desc: "Creating clean and modern user interfaces with focus on design and usability.",
    serv3title: "Web Applications", serv3desc: "Building modern web applications with dynamic features and smooth performance.",
    serv4title: "Video Editing", serv4desc: "Professional video editing with smooth cuts, transitions, effects, and color grading.",
    serv5title: "Photoshop", serv5desc: "Photo retouching, manipulation, graphic design, and visual content creation.",
    serv6title: "Cyber Security", serv6desc: "Basic security auditing, vulnerability assessment, and protecting web applications.",
    certificatesTitle: "Certificates", noCert: "No certificate image",
    cert1title: "Frontend Development", cert1issuer: "freeCodeCamp",
    cert2title: "Cybersecurity Basics", cert2issuer: "Cisco",
    cert3title: "React Developer", cert3issuer: "Udemy",
    contactTitle: "Contact Me", getInTouch: "Get In Touch",
    getInTouchDesc: "If you want to work together or have any question, feel free to contact me.",
    yourName: "Your Name", yourEmail: "Your Email", yourMessage: "Your Message",
    sendMessage: "Send Message", sending: "Sending...",
    footerText: "© 2026 Yanis Redjradj",
    scroll: "Scroll",
  },

  fr: {
    home: "Accueil", about: "À propos", project: "Projets",
    services: "Services", certificates: "Certificats", contact: "Contact",
    heroTag: "Portfolio 2026",
    heroDesc: "Passionné par la création d'expériences numériques modernes, la sécurisation des systèmes et la croissance quotidienne.",
    projects: "Projets", yearsLearning: "Ans d'apprentissage", technologies: "Technologies",
    contactMe: "Me contacter", whoAmI: "Qui suis-je", downloadCV: "⬇ Télécharger CV",
    aboutTitle: "À propos de moi",
    aboutText: "Bonjour, je suis Yanis Redjradj, étudiant en 3ème Technique Math – Génie Électrique, actuellement en préparation du Baccalauréat. Je suis passionné par la programmation, la cybersécurité et la création de projets numériques modernes. Mon objectif est d'obtenir un Master 2 et un diplôme d'ingénieur en Programmation, Cybersécurité ou Développement Logiciel.",
    mySkills: "Mes compétences", myJourney: "Mon parcours",
    t1year: "2023", t1title: "Début de l'apprentissage", t1desc: "Commencé avec HTML, CSS et JavaScript — créé mes premiers sites.",
    t2year: "2024", t2title: "React & Backend", t2desc: "Plongé dans React, Node.js, Python et les bases de données.",
    t3year: "2025", t3title: "Cybersécurité", t3desc: "Commencé à apprendre la cybersécurité et la sécurité web.",
    t4year: "2026", t4title: "Portfolio & Projets réels", t4desc: "Créé des projets réels et ce portfolio pour présenter mes compétences.",
    projectTitle: "Projets", liveDemo: "Démo en direct",
    p1title: "Mes Réseaux", p1desc: "Un hub centralisé pour tous mes profils de réseaux sociaux. Mot de passe: 18052009",
    p2title: "Google Secure Auth", p2desc: "Outil de simulation d'ingénierie sociale et de phishing à des fins éducatives.",
    p3title: "Yanis Fit", p3desc: "Une application de suivi fitness.",
    p4title: "Aïd Al-Adha", p4desc: "Un site web créé pour célébrer l'Aïd Al-Adha.",
    servicesTitle: "Services",
    serv1title: "Développement Frontend", serv1desc: "Je crée des sites modernes et interactifs avec React, HTML, CSS, JavaScript, Node.js, PHP, MySQL.",
    serv2title: "Design UI", serv2desc: "Création d'interfaces utilisateur propres et modernes axées sur le design et l'ergonomie.",
    serv3title: "Applications Web", serv3desc: "Création d'applications web modernes avec des fonctionnalités dynamiques.",
    serv4title: "Montage Vidéo", serv4desc: "Montage vidéo professionnel avec coupes fluides, transitions et effets.",
    serv5title: "Photoshop", serv5desc: "Retouche photo, manipulation, design graphique et création de contenu visuel.",
    serv6title: "Cybersécurité", serv6desc: "Audit de sécurité de base, évaluation des vulnérabilités et protection des applications web.",
    certificatesTitle: "Certificats", noCert: "Pas d'image de certificat",
    cert1title: "Développement Frontend", cert1issuer: "freeCodeCamp",
    cert2title: "Bases de Cybersécurité", cert2issuer: "Cisco",
    cert3title: "Développeur React", cert3issuer: "Udemy",
    contactTitle: "Me contacter", getInTouch: "Prenons contact",
    getInTouchDesc: "Si vous souhaitez travailler ensemble ou avez des questions, n'hésitez pas à me contacter.",
    yourName: "Votre nom", yourEmail: "Votre email", yourMessage: "Votre message",
    sendMessage: "Envoyer", sending: "Envoi en cours...",
    footerText: "© 2026 Yanis Redjradj",
    scroll: "Défiler",
  },

  ar: {
    home: "الرئيسية", about: "عني", project: "المشاريع",
    services: "الخدمات", certificates: "الشهادات", contact: "تواصل",
    heroTag: "بورتفوليو 2026",
    heroDesc: "شغوف ببناء تجارب رقمية حديثة، تأمين الأنظمة، والنمو كل يوم.",
    projects: "مشاريع", yearsLearning: "سنوات التعلم", technologies: "تقنيات",
    contactMe: "تواصل معي", whoAmI: "من أنا", downloadCV: "⬇ تحميل السيرة",
    aboutTitle: "عني",
    aboutText: "مرحباً، أنا يانيس ريجراج، طالب في السنة الثالثة تقني رياضي هندسة كهربائية، أستعد حالياً لامتحان البكالوريا. أنا شغوف بالبرمجة والأمن السيبراني وبناء مشاريع رقمية حديثة. أستمتع بتعلم كيفية عمل الأنظمة وتأمينها وتحسين مهاراتي كل يوم. هدفي الحصول على شهادة ماجستير ودبلوم هندسة في البرمجة أو الأمن السيبراني أو تطوير البرمجيات.",
    mySkills: "مهاراتي", myJourney: "مسيرتي",
    t1year: "2023", t1title: "بدأت تعلم البرمجة", t1desc: "بدأت بـ HTML و CSS و JavaScript — بنيت أول مواقعي.",
    t2year: "2024", t2title: "تعلمت React والباكند", t2desc: "غصت في React و Node.js و Python وقواعد البيانات.",
    t3year: "2025", t3title: "الاهتمام بالأمن السيبراني", t3desc: "بدأت تعلم الأمن السيبراني والاختراق الأخلاقي وأمن الويب.",
    t4year: "2026", t4title: "البورتفوليو والمشاريع الحقيقية", t4desc: "بنيت مشاريع حقيقية وهذا البورتفوليو لعرض مهاراتي.",
    projectTitle: "المشاريع", liveDemo: "عرض مباشر",
    p1title: "وسائل التواصل", p1desc: "مركز لجميع ملفاتي على وسائل التواصل الاجتماعي. كلمة المرور: 18052009",
    p2title: "Google Secure Auth", p2desc: "أداة محاكاة للهندسة الاجتماعية والتصيد الاحتيالي للأغراض التعليمية.",
    p3title: "يانيس فيت", p3desc: "تطبيق لتتبع اللياقة البدنية.",
    p4title: "عيد الأضحى", p4desc: "موقع ويب تم إنشاؤه للاحتفال بعيد الأضحى المبارك.",
    servicesTitle: "الخدمات",
    serv1title: "تطوير الواجهة الأمامية", serv1desc: "أبني مواقع حديثة وتفاعلية باستخدام React و HTML و CSS و JavaScript و Node.js و PHP و MySQL.",
    serv2title: "تصميم UI", serv2desc: "إنشاء واجهات مستخدم نظيفة وحديثة مع التركيز على التصميم وسهولة الاستخدام.",
    serv3title: "تطبيقات الويب", serv3desc: "بناء تطبيقات ويب حديثة بميزات ديناميكية وأداء سلس.",
    serv4title: "مونتاج الفيديو", serv4desc: "مونتاج فيديو احترافي مع قطعات سلسة وانتقالات وتأثيرات وتصحيح ألوان.",
    serv5title: "فوتوشوب", serv5desc: "تعديل الصور والتلاعب بها والتصميم الجرافيكي وإنشاء المحتوى البصري.",
    serv6title: "الأمن السيبراني", serv6desc: "تدقيق أمني أساسي وتقييم الثغرات وحماية تطبيقات الويب.",
    certificatesTitle: "الشهادات", noCert: "لا توجد صورة للشهادة",
    cert1title: "تطوير الواجهة الأمامية", cert1issuer: "freeCodeCamp",
    cert2title: "أساسيات الأمن السيبراني", cert2issuer: "Cisco",
    cert3title: "مطور React", cert3issuer: "Udemy",
    contactTitle: "تواصل معي", getInTouch: "تواصل معي",
    getInTouchDesc: "إذا أردت العمل معي أو لديك أي سؤال، لا تتردد في التواصل.",
    yourName: "اسمك", yourEmail: "إيميلك", yourMessage: "رسالتك",
    sendMessage: "إرسال", sending: "جاري الإرسال...",
    footerText: "© 2026 يانيس ريجراج",
    scroll: "مرر",
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(
    () => localStorage.getItem("lang") || "en"
  )

  const switchLang = (newLang) => {
    setLang(newLang)
    localStorage.setItem("lang", newLang)
    document.dir = newLang === "ar" ? "rtl" : "ltr"
  }

  return (
    <LanguageContext.Provider value={{ lang, switchLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)