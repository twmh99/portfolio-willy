/* =============================================
   WILLY HUTAGALUNG – PORTFOLIO JAVASCRIPT
   ============================================= */

// ============================================
// TRANSLATIONS (EN / ID)
// ============================================
const translations = {
  en: {
    // NAV
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.certifications': 'Certifications',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'nav.cta': "Let's Connect",
    'nav.subtitle': 'IS Student · Designer · Developer',

    // HERO
    'hero.badge': 'Available for Opportunities',
    'hero.title1': 'Designing & Building',
    'hero.title2': 'Premium Digital',
    'hero.title3': 'Experiences',
    'hero.subtitle': 'Information Systems student at Universitas Atma Jaya Yogyakarta with hands-on experience in digital banking, web development, UI/UX design, data analytics, and leadership.',
    'hero.viewProjects': 'View My Projects',
    'hero.getInTouch': 'Get In Touch',
    'hero.scroll': 'Scroll to explore',

    // CHIPS
    'chip.uiux': 'UI/UX Design',
    'chip.webdev': 'Web Development',
    'chip.data': 'Data Analytics',
    'chip.leadership': 'Leadership',

    // STATS
    'stats.projects': 'Major Projects',
    'stats.certs': 'Certifications',
    'stats.roles': 'Org Roles',
    'stats.gpa': 'GPA / 4.00',

    // ABOUT
    'about.label': 'About Me',
    'about.title': 'Passionate About Tech,',
    'about.titleGrad': 'Design & Leadership',
    'about.desc1': "I'm Theofilus Willy Marojahan Hgl, an Information Systems student at Universitas Atma Jaya Yogyakarta (GPA 3.69/4.00) with a deep passion for digital transformation, business analysis, and user-centered design.",
    'about.desc2': "With hands-on experience as a Growth & Acquisition Intern at PT Bank Digital BCA, I've worked in cross-functional teams in one of Indonesia's top digital banking environments, strengthening my analytical thinking and communication skills.",
    'about.desc3': "Beyond technical work, I've led organizations, trained students in graphic design, moderated national seminars, and represented my university at national intercultural events. I thrive at the intersection of technology, design, and people.",
    'about.infoEducation': 'Education',
    'about.infoDegree': 'Degree',
    'about.degreeVal': 'Bachelor of Information Systems',
    'about.infoExpected': 'Expected',
    'about.infoLocation': 'Location',
    'about.infoPhone': 'Phone',
    'about.card1Title': 'Design & UI/UX',
    'about.card1Desc': 'Creating beautiful, user-centered interfaces with Figma and Canva. From wireframes to polished prototypes.',
    'about.card2Title': 'Web Development',
    'about.card2Desc': 'Building responsive web apps with HTML, CSS, JavaScript, and Next.js. Full-stack capability for real-world projects.',
    'about.card3Title': 'Data Analytics',
    'about.card3Desc': 'Transforming raw data into insights with Tableau, business intelligence tools, and data visualization techniques.',
    'about.card4Title': 'Leadership',
    'about.card4Desc': 'Led organizations, managed events, trained teams, and communicated across multiple stakeholder groups nationally.',

    // EXPERIENCE
    'exp.label': 'Experience',
    'exp.titleGrad': 'Leadership Journey',
    'exp.tabWork': '💼 Work Experience',
    'exp.tabLeadership': '🏆 Leadership & Org',
    'exp.bca.li1': 'Selected as Growth & Acquisition Intern in the Growth & Acquisition Division.',
    'exp.bca.li2': 'Supported customer acquisition initiatives and digital banking growth programs.',
    'exp.bca.li3': 'Assisted brand activation activities and user engagement campaigns.',
    'exp.bca.li4': 'Collaborated with cross-functional teams in operational and business development activities.',
    'exp.bca.li5': 'Strengthened communication, analytical thinking, teamwork, and problem-solving skills in a professional banking environment.',
    'exp.konstelasi.role': 'Assistant Moderator – Seminar Nasional KONSTELASI 2026',
    'exp.konstelasi.li1': 'Assisted moderation activities during Seminar Nasional KONSTELASI 2026.',
    'exp.konstelasi.li2': 'Coordinated session flow, speaker preparation, and participant engagement.',
    'exp.konstelasi.li3': 'Supported communication between moderators, speakers, and committee members.',
    'exp.konstelasi.li4': 'Developed public speaking, event coordination, and stakeholder communication skills.',
    'exp.konstelasi.li5': 'Received Certificate of Appreciation as Assistant Moderator.',
    'exp.canva.role': 'Speaker / Canva Graphic Design Trainer',
    'exp.canva.li1': 'Delivered Canva graphic design training for high school students.',
    'exp.canva.li2': 'Developed learning materials covering typography, layout, color theory, and visual communication.',
    'exp.canva.li3': 'Facilitated project-based learning activities and practical design exercises.',
    'exp.canva.li4': "Improved participants' digital creativity and design skills.",
    'exp.canva.li5': 'Awarded Certificate of Appreciation as training speaker.',
    'exp.aptik.role': 'University Representative – ISC APTIK 2024',
    'exp.aptik.li1': 'Represented Universitas Atma Jaya Yogyakarta at Intercultural Student Camp (ISC) APTIK 2024.',
    'exp.aptik.li2': 'Participated in intercultural discussions and collaborative leadership activities.',
    'exp.aptik.li3': 'Engaged in programs related to ecology, tourism, youth spirituality, and globalization.',
    'exp.aptik.li4': 'Developed intercultural communication, adaptability, teamwork, and leadership skills.',
    'exp.aptik.li5': 'Received Certificate of Participation as university representative.',
    'exp.miskam.role': 'Chairman – Misa Kampus UAJY',
    'exp.miskam.loc': 'Catholic campus ministry · Leadership, community engagement & student development',
    'exp.miskam.li1': 'Led organizational programs and strategic planning initiatives.',
    'exp.miskam.li2': 'Coordinated committee activities and cross-functional collaboration.',
    'exp.miskam.li3': 'Managed internal communication, administration, and event execution.',
    'exp.miskam.li4': 'Supervised organizational projects and member development activities.',
    'exp.miskam.li5': 'Strengthened leadership, decision-making, and project management skills.',
    'exp.sekretariat.role': 'Coordinator of Secretariat Division',
    'exp.sekretariat.li1': 'Coordinated secretariat and administrative operations across 3 major university events.',
    'exp.sekretariat.li2': 'Managed documentation, schedules, and official correspondence.',
    'exp.sekretariat.li3': 'Supported committee workflow, project coordination, and collaboration among student organizations.',
    'exp.sekretariat.li4': 'Ensured operational effectiveness during event execution.',
    'exp.jobfair.role': 'Social Media & Design Staff – Job Fair UAJY 2025',
    'exp.jobfair.li1': 'Created promotional content and visual materials for Job Fair UAJY 2025.',
    'exp.jobfair.li2': 'Supported social media campaigns and digital branding initiatives.',
    'exp.jobfair.li3': 'Assisted event documentation and audience engagement activities.',
    'exp.steering.role': 'Multiple Steering Committee Roles',
    'exp.steering.li1': 'Supervised event preparation, execution, and strategic planning.',
    'exp.steering.li2': 'Coordinated communication among committee divisions.',
    'exp.steering.li3': 'Assisted decision-making and operational planning.',
    'exp.steering.li4': 'Supported environmental conservation and community engagement programs.',
    'exp.pubdok.role': 'Coordinator of Publication, Design & Documentation',
    'exp.pubdok.li1': 'Coordinated publication, design, and documentation activities.',
    'exp.pubdok.li2': 'Managed visual communication and media materials.',
    'exp.pubdok.li3': 'Supervised documentation during community service programs.',
    'exp.pubdok.li4': 'Designed promotional and publication materials for Mental Health Talkshow 2024.',

    // PROJECTS
    'proj.label': 'Projects',
    'proj.titleGrad': 'Work',
    'proj.subtitle': 'Projects that demonstrate my skills in web development, design, and business systems.',
    'proj.portfolio.title': 'Personal Portfolio Website',
    'proj.portfolio.desc': 'Developed a responsive personal portfolio website showcasing projects, certifications, leadership experiences, and technical skills using modern web technologies and UI/UX principles.',
    'proj.futuretech.title': 'FutureTech – Futuristic E-Commerce Platform',
    'proj.futuretech.desc': 'Built a full-stack e-commerce platform with authentication, dashboard management, product management, order tracking, and responsive UI using Next.js and MongoDB.',
    'proj.webApp': 'Web Application',
    'proj.smpj.title': 'SMPJ – Employee Management Information System',
    'proj.smpj.desc': 'Built a web-based employee management system supporting attendance tracking, payroll recap, shift scheduling, productivity monitoring, and performance analysis.',

    // CERTIFICATIONS
    'cert.label': 'Certifications',
    'cert.titleGrad': 'Achievements',
    'cert.subtitle': 'Verified certifications that demonstrate continuous learning and expertise.',
    'cert.tableauInt.desc': 'Advanced dashboard development, calculated fields, data blending, filters, parameters, storytelling, and interactive data analysis.',
    'cert.tableauFund.desc': 'Data visualization principles, dashboard creation, chart development, data exploration, and business intelligence concepts.',
    'cert.iso.desc': 'Foundation training in Information Security Management Systems (ISMS), cybersecurity awareness, risk management, and ISO/IEC 27001 standards.',
    'cert.genai.desc': 'Generative AI training covering AI fundamentals, prompt engineering, ethical AI usage, and practical applications for productivity.',
    'cert.aipraktis.desc': 'Practical AI training focused on productivity enhancement using AI tools. Prompt engineering fundamentals, AI-assisted workflows, content generation, and task automation.',
    'cert.kiro.desc': 'AI-assisted software development workflows, specification-based development practices, and modern software engineering approaches.',

    // SKILLS
    'skills.label': 'Skills',
    'skills.titleGrad': 'Soft Skills',
    'skills.dataTitle': 'Data & Analytics',
    'skills.designTitle': 'Design',
    'skills.devTitle': 'Development',
    'skills.bizTitle': 'Business',
    'skills.softTitle': 'Soft Skills',
    'skills.aiTitle': 'AI & Innovation',
    'skill.dataAnalysis': 'Data Analysis',
    'skill.dataViz': 'Data Visualization',
    'skill.bi': 'Business Intelligence',
    'skill.uiux': 'UI/UX Design',
    'skill.graphic': 'Graphic Design',
    'skill.bizAnalysis': 'Business Analysis',
    'skill.projMgmt': 'Project Management',
    'skill.stakeholder': 'Stakeholder Management',
    'skill.custAcq': 'Customer Acquisition',
    'skill.leadership': 'Leadership',
    'skill.communication': 'Communication',
    'skill.publicSpeaking': 'Public Speaking',
    'skill.problemSolving': 'Problem Solving',
    'skill.genAI': 'Generative AI',
    'skill.promptEng': 'Prompt Engineering',
    'skill.aiDev': 'AI-Assisted Dev',
    'skill.digitalTrans': 'Digital Transformation',

    // TAGS
    'tag.digitalBanking': 'Digital Banking',
    'tag.growthStrategy': 'Growth Strategy',
    'tag.dataAnalysis': 'Data Analysis',
    'tag.publicSpeaking': 'Public Speaking',
    'tag.eventMgmt': 'Event Management',
    'tag.designTraining': 'Design Training',
    'tag.teaching': 'Teaching',
    'tag.leadership': 'Leadership',
    'tag.crossCultural': 'Cross-Cultural',
    'tag.chairman': 'Chairman',
    'tag.strategicPlanning': 'Strategic Planning',
    'tag.administration': 'Administration',
    'tag.3events': '3 Events',
    'tag.socialMedia': 'Social Media',
    'tag.design': 'Design',
    'tag.steeringCommittee': 'Steering Committee',
    'tag.community': 'Community',
    'tag.publication': 'Publication',
    'tag.documentation': 'Documentation',
    'tag.authentication': 'Authentication',
    'tag.analytics': 'Analytics',
    'tag.dataAnalytics': 'Data Analytics',
    'tag.visualization': 'Visualization',
    'tag.security': 'Security',
    'tag.promptEng': 'Prompt Engineering',
    'tag.productivity': 'Productivity',
    'tag.softwareDev': 'Software Dev',
    'tag.aiAssisted': 'AI-Assisted',

    // CONTACT
    'contact.label': 'Contact',
    'contact.titleGrad': 'Connect',
    'contact.subtitle': 'Open for opportunities, collaborations, and conversations. Reach out anytime!',
    'contact.phone': 'Phone / WhatsApp',
    'contact.location': 'Location',
    'contact.formTitle': 'Send a Message',
    'contact.name': 'Your Name',
    'contact.namePlaceholder': 'John Doe',
    'contact.email': 'Email Address',
    'contact.emailPlaceholder': 'john@example.com',
    'contact.subject': 'Subject',
    'contact.subjectPlaceholder': "Let's work together!",
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Tell me about your project or opportunity...',
    'contact.sendBtn': 'Send via WhatsApp',

    // FOOTER
    'footer.tagline': 'Information Systems · Designer · Developer · Leader',
    'footer.copy': '© 2025 Willy Hutagalung. All rights reserved.',
    'footer.liveSite': 'Live Site',

    // PROJECT FILTERS
    'filter.all': 'All',
    'filter.webdev': 'Web Development',
    'filter.uiux': 'UI/UX Design',
    'filter.data': 'Data Analytics',
    'proj.viewDetails': 'View Details',
    'exp.viewDetail': 'View Details',
  },

  id: {
    // NAV
    'nav.home': 'Beranda',
    'nav.about': 'Tentang',
    'nav.experience': 'Pengalaman',
    'nav.projects': 'Proyek',
    'nav.certifications': 'Sertifikasi',
    'nav.skills': 'Keahlian',
    'nav.contact': 'Kontak',
    'nav.cta': 'Hubungi Saya',
    'nav.subtitle': 'Mahasiswa SI · Desainer · Developer',

    // HERO
    'hero.badge': 'Terbuka untuk Peluang',
    'hero.title1': 'Merancang & Membangun',
    'hero.title2': 'Pengalaman Digital',
    'hero.title3': 'Premium',
    'hero.subtitle': 'Mahasiswa Sistem Informasi di Universitas Atma Jaya Yogyakarta dengan pengalaman nyata di perbankan digital, pengembangan web, desain UI/UX, analitik data, dan kepemimpinan.',
    'hero.viewProjects': 'Lihat Proyek Saya',
    'hero.getInTouch': 'Hubungi Saya',
    'hero.scroll': 'Gulir untuk menjelajahi',

    // CHIPS
    'chip.uiux': 'Desain UI/UX',
    'chip.webdev': 'Pengembangan Web',
    'chip.data': 'Analitik Data',
    'chip.leadership': 'Kepemimpinan',

    // STATS
    'stats.projects': 'Proyek Utama',
    'stats.certs': 'Sertifikasi',
    'stats.roles': 'Jabatan Org',
    'stats.gpa': 'IPK / 4.00',

    // ABOUT
    'about.label': 'Tentang Saya',
    'about.title': 'Bersemangat di Bidang Teknologi,',
    'about.titleGrad': 'Desain & Kepemimpinan',
    'about.desc1': 'Saya Theofilus Willy Marojahan Hgl, mahasiswa Sistem Informasi di Universitas Atma Jaya Yogyakarta (IPK 3.69/4.00) dengan minat mendalam di transformasi digital, analisis bisnis, dan desain yang berpusat pada pengguna.',
    'about.desc2': 'Dengan pengalaman langsung sebagai Growth & Acquisition Intern di PT Bank Digital BCA, saya telah bekerja dalam tim lintas fungsi di salah satu lingkungan perbankan digital terkemuka di Indonesia, memperkuat kemampuan analitis dan komunikasi saya.',
    'about.desc3': 'Di luar pekerjaan teknis, saya telah memimpin organisasi, melatih mahasiswa dalam desain grafis, memoderasi seminar nasional, dan mewakili universitas di acara lintas budaya nasional. Saya berkembang di persimpangan teknologi, desain, dan manusia.',
    'about.infoEducation': 'Pendidikan',
    'about.infoDegree': 'Gelar',
    'about.degreeVal': 'Sarjana Sistem Informasi',
    'about.infoExpected': 'Perkiraan Lulus',
    'about.infoLocation': 'Lokasi',
    'about.infoPhone': 'Telepon',
    'about.card1Title': 'Desain & UI/UX',
    'about.card1Desc': 'Membuat antarmuka indah dan berpusat pada pengguna dengan Figma dan Canva. Dari wireframe hingga prototipe yang dipoles.',
    'about.card2Title': 'Pengembangan Web',
    'about.card2Desc': 'Membangun aplikasi web responsif dengan HTML, CSS, JavaScript, dan Next.js. Kemampuan full-stack untuk proyek dunia nyata.',
    'about.card3Title': 'Analitik Data',
    'about.card3Desc': 'Mengubah data mentah menjadi wawasan dengan Tableau, alat business intelligence, dan teknik visualisasi data.',
    'about.card4Title': 'Kepemimpinan',
    'about.card4Desc': 'Memimpin organisasi, mengelola acara, melatih tim, dan berkomunikasi lintas kelompok pemangku kepentingan secara nasional.',

    // EXPERIENCE
    'exp.label': 'Pengalaman',
    'exp.titleGrad': 'Perjalanan Karir & Kepemimpinan',
    'exp.tabWork': '💼 Pengalaman Kerja',
    'exp.tabLeadership': '🏆 Kepemimpinan & Org',
    'exp.bca.li1': 'Terpilih sebagai Growth & Acquisition Intern di Divisi Growth & Acquisition.',
    'exp.bca.li2': 'Mendukung inisiatif akuisisi pelanggan dan program pertumbuhan perbankan digital.',
    'exp.bca.li3': 'Membantu kegiatan aktivasi merek dan kampanye keterlibatan pengguna.',
    'exp.bca.li4': 'Berkolaborasi dengan tim lintas fungsi dalam kegiatan operasional dan pengembangan bisnis.',
    'exp.bca.li5': 'Memperkuat komunikasi, pemikiran analitis, kerja tim, dan keterampilan pemecahan masalah di lingkungan perbankan profesional.',
    'exp.konstelasi.role': 'Asisten Moderator – Seminar Nasional KONSTELASI 2026',
    'exp.konstelasi.li1': 'Membantu kegiatan moderasi selama Seminar Nasional KONSTELASI 2026.',
    'exp.konstelasi.li2': 'Mengkoordinasikan alur sesi, persiapan pembicara, dan keterlibatan peserta.',
    'exp.konstelasi.li3': 'Mendukung komunikasi antara moderator, pembicara, dan anggota panitia.',
    'exp.konstelasi.li4': 'Mengembangkan kemampuan berbicara di depan umum, koordinasi acara, dan komunikasi pemangku kepentingan.',
    'exp.konstelasi.li5': 'Menerima Sertifikat Penghargaan sebagai Asisten Moderator.',
    'exp.canva.role': 'Pembicara / Pelatih Desain Grafis Canva',
    'exp.canva.li1': 'Memberikan pelatihan desain grafis Canva untuk siswa SMA.',
    'exp.canva.li2': 'Mengembangkan materi pembelajaran yang mencakup tipografi, tata letak, teori warna, dan komunikasi visual.',
    'exp.canva.li3': 'Memfasilitasi kegiatan pembelajaran berbasis proyek dan latihan desain praktis.',
    'exp.canva.li4': 'Meningkatkan kreativitas digital dan keterampilan desain peserta.',
    'exp.canva.li5': 'Mendapat Sertifikat Penghargaan sebagai pembicara pelatihan.',
    'exp.aptik.role': 'Perwakilan Universitas – ISC APTIK 2024',
    'exp.aptik.li1': 'Mewakili Universitas Atma Jaya Yogyakarta di Intercultural Student Camp (ISC) APTIK 2024.',
    'exp.aptik.li2': 'Berpartisipasi dalam diskusi lintas budaya dan kegiatan kepemimpinan kolaboratif.',
    'exp.aptik.li3': 'Terlibat dalam program terkait ekologi, pariwisata, spiritualitas kaum muda, dan globalisasi.',
    'exp.aptik.li4': 'Mengembangkan komunikasi lintas budaya, kemampuan beradaptasi, kerja tim, dan keterampilan kepemimpinan.',
    'exp.aptik.li5': 'Menerima Sertifikat Partisipasi sebagai perwakilan universitas.',
    'exp.miskam.role': 'Ketua – Misa Kampus UAJY',
    'exp.miskam.loc': 'Kegiatan kampus Katolik · Kepemimpinan, keterlibatan komunitas & pengembangan mahasiswa',
    'exp.miskam.li1': 'Memimpin program organisasi dan inisiatif perencanaan strategis.',
    'exp.miskam.li2': 'Mengkoordinasikan kegiatan panitia dan kolaborasi lintas fungsi.',
    'exp.miskam.li3': 'Mengelola komunikasi internal, administrasi, dan pelaksanaan acara.',
    'exp.miskam.li4': 'Mengawasi proyek organisasi dan kegiatan pengembangan anggota.',
    'exp.miskam.li5': 'Memperkuat kepemimpinan, pengambilan keputusan, dan keterampilan manajemen proyek.',
    'exp.sekretariat.role': 'Koordinator Divisi Sekretariat',
    'exp.sekretariat.li1': 'Mengkoordinasikan operasional sekretariat dan administrasi di 3 acara besar universitas.',
    'exp.sekretariat.li2': 'Mengelola dokumentasi, jadwal, dan korespondensi resmi.',
    'exp.sekretariat.li3': 'Mendukung alur kerja panitia, koordinasi proyek, dan kolaborasi antar organisasi mahasiswa.',
    'exp.sekretariat.li4': 'Memastikan efektivitas operasional selama pelaksanaan acara.',
    'exp.jobfair.role': 'Staf Media Sosial & Desain – Job Fair UAJY 2025',
    'exp.jobfair.li1': 'Membuat konten promosi dan materi visual untuk Job Fair UAJY 2025.',
    'exp.jobfair.li2': 'Mendukung kampanye media sosial dan inisiatif branding digital.',
    'exp.jobfair.li3': 'Membantu dokumentasi acara dan kegiatan keterlibatan audiens.',
    'exp.steering.role': 'Berbagai Peran Steering Committee',
    'exp.steering.li1': 'Mengawasi persiapan acara, pelaksanaan, dan perencanaan strategis.',
    'exp.steering.li2': 'Mengkoordinasikan komunikasi antar divisi panitia.',
    'exp.steering.li3': 'Membantu pengambilan keputusan dan perencanaan operasional.',
    'exp.steering.li4': 'Mendukung program konservasi lingkungan dan keterlibatan komunitas.',
    'exp.pubdok.role': 'Koordinator Publikasi, Desain & Dokumentasi',
    'exp.pubdok.li1': 'Mengkoordinasikan kegiatan publikasi, desain, dan dokumentasi.',
    'exp.pubdok.li2': 'Mengelola materi komunikasi visual dan media.',
    'exp.pubdok.li3': 'Mengawasi dokumentasi selama program pengabdian masyarakat.',
    'exp.pubdok.li4': 'Mendesain materi promosi dan publikasi untuk Mental Health Talkshow 2024.',

    // PROJECTS
    'proj.label': 'Proyek',
    'proj.titleGrad': 'Karya Terpilih',
    'proj.subtitle': 'Proyek yang menunjukkan keahlian saya dalam pengembangan web, desain, dan sistem bisnis.',
    'proj.portfolio.title': 'Website Portfolio Pribadi',
    'proj.portfolio.desc': 'Mengembangkan website portfolio pribadi responsif yang menampilkan proyek, sertifikasi, pengalaman kepemimpinan, dan keterampilan teknis menggunakan teknologi web modern dan prinsip UI/UX.',
    'proj.futuretech.title': 'FutureTech – Platform E-Commerce Futuristik',
    'proj.futuretech.desc': 'Membangun platform e-commerce full-stack dengan autentikasi, manajemen dashboard, manajemen produk, pelacakan pesanan, dan UI responsif menggunakan Next.js dan MongoDB.',
    'proj.webApp': 'Aplikasi Web',
    'proj.smpj.title': 'SMPJ – Sistem Informasi Manajemen Karyawan',
    'proj.smpj.desc': 'Membangun sistem manajemen karyawan berbasis web yang mendukung pelacakan kehadiran, rekap penggajian, penjadwalan shift, pemantauan produktivitas, dan analisis kinerja.',

    // CERTIFICATIONS
    'cert.label': 'Sertifikasi',
    'cert.titleGrad': 'Pencapaian',
    'cert.subtitle': 'Sertifikasi terverifikasi yang menunjukkan pembelajaran berkelanjutan dan keahlian.',
    'cert.tableauInt.desc': 'Pengembangan dashboard lanjutan, calculated fields, data blending, filter, parameter, storytelling, dan analisis data interaktif.',
    'cert.tableauFund.desc': 'Prinsip visualisasi data, pembuatan dashboard, pengembangan grafik, eksplorasi data, dan konsep business intelligence.',
    'cert.iso.desc': 'Pelatihan dasar Information Security Management Systems (ISMS), kesadaran keamanan siber, manajemen risiko, dan standar ISO/IEC 27001.',
    'cert.genai.desc': 'Pelatihan Generative AI mencakup dasar-dasar AI, rekayasa prompt, penggunaan AI yang etis, dan aplikasi praktis untuk produktivitas.',
    'cert.aipraktis.desc': 'Pelatihan AI praktis yang berfokus pada peningkatan produktivitas menggunakan alat AI. Dasar-dasar rekayasa prompt, alur kerja berbantuan AI, pembuatan konten, dan otomatisasi tugas.',
    'cert.kiro.desc': 'Alur kerja pengembangan perangkat lunak berbantuan AI, praktik pengembangan berbasis spesifikasi, dan pendekatan rekayasa perangkat lunak modern.',

    // SKILLS
    'skills.label': 'Keahlian',
    'skills.titleGrad': 'Soft Skills',
    'skills.dataTitle': 'Data & Analitik',
    'skills.designTitle': 'Desain',
    'skills.devTitle': 'Pengembangan',
    'skills.bizTitle': 'Bisnis',
    'skills.softTitle': 'Soft Skills',
    'skills.aiTitle': 'AI & Inovasi',
    'skill.dataAnalysis': 'Analisis Data',
    'skill.dataViz': 'Visualisasi Data',
    'skill.bi': 'Business Intelligence',
    'skill.uiux': 'Desain UI/UX',
    'skill.graphic': 'Desain Grafis',
    'skill.bizAnalysis': 'Analisis Bisnis',
    'skill.projMgmt': 'Manajemen Proyek',
    'skill.stakeholder': 'Manajemen Stakeholder',
    'skill.custAcq': 'Akuisisi Pelanggan',
    'skill.leadership': 'Kepemimpinan',
    'skill.communication': 'Komunikasi',
    'skill.publicSpeaking': 'Berbicara di Depan Umum',
    'skill.problemSolving': 'Pemecahan Masalah',
    'skill.genAI': 'Generative AI',
    'skill.promptEng': 'Rekayasa Prompt',
    'skill.aiDev': 'Dev Berbantuan AI',
    'skill.digitalTrans': 'Transformasi Digital',

    // TAGS
    'tag.digitalBanking': 'Perbankan Digital',
    'tag.growthStrategy': 'Strategi Pertumbuhan',
    'tag.dataAnalysis': 'Analisis Data',
    'tag.publicSpeaking': 'Berbicara di Depan Umum',
    'tag.eventMgmt': 'Manajemen Acara',
    'tag.designTraining': 'Pelatihan Desain',
    'tag.teaching': 'Mengajar',
    'tag.leadership': 'Kepemimpinan',
    'tag.crossCultural': 'Lintas Budaya',
    'tag.chairman': 'Ketua',
    'tag.strategicPlanning': 'Perencanaan Strategis',
    'tag.administration': 'Administrasi',
    'tag.3events': '3 Acara',
    'tag.socialMedia': 'Media Sosial',
    'tag.design': 'Desain',
    'tag.steeringCommittee': 'Steering Committee',
    'tag.community': 'Komunitas',
    'tag.publication': 'Publikasi',
    'tag.documentation': 'Dokumentasi',
    'tag.authentication': 'Autentikasi',
    'tag.analytics': 'Analitik',
    'tag.dataAnalytics': 'Analitik Data',
    'tag.visualization': 'Visualisasi',
    'tag.security': 'Keamanan',
    'tag.promptEng': 'Rekayasa Prompt',
    'tag.productivity': 'Produktivitas',
    'tag.softwareDev': 'Dev Perangkat Lunak',
    'tag.aiAssisted': 'Berbantuan AI',

    // CONTACT
    'contact.label': 'Kontak',
    'contact.titleGrad': 'Terhubung',
    'contact.subtitle': 'Terbuka untuk peluang, kolaborasi, dan percakapan. Hubungi kapan saja!',
    'contact.phone': 'Telepon / WhatsApp',
    'contact.location': 'Lokasi',
    'contact.formTitle': 'Kirim Pesan',
    'contact.name': 'Nama Anda',
    'contact.namePlaceholder': 'John Doe',
    'contact.email': 'Alamat Email',
    'contact.emailPlaceholder': 'john@example.com',
    'contact.subject': 'Subjek',
    'contact.subjectPlaceholder': 'Mari bekerja sama!',
    'contact.message': 'Pesan',
    'contact.messagePlaceholder': 'Ceritakan tentang proyek atau peluang Anda...',
    'contact.sendBtn': 'Kirim via WhatsApp',

    // FOOTER
    'footer.tagline': 'Sistem Informasi · Desainer · Developer · Pemimpin',
    'footer.copy': '© 2025 Willy Hutagalung. Semua hak dilindungi.',
    'footer.liveSite': 'Situs Langsung',

    // PROJECT FILTERS
    'filter.all': 'Semua',
    'filter.webdev': 'Pengembangan Web',
    'filter.uiux': 'Desain UI/UX',
    'filter.data': 'Analitik Data',
    'proj.viewDetails': 'Lihat Detail',
    'exp.viewDetail': 'Lihat Detail',
  },
};

// ============================================
// LANGUAGE SYSTEM
// ============================================
let currentLang = localStorage.getItem('portfolio-lang') || 'en';

function applyTranslations(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.placeholder = translations[lang][key];
    }
  });
  document.getElementById('langLabel').textContent = lang === 'en' ? 'ID' : 'EN';
  document.documentElement.lang = lang;
  localStorage.setItem('portfolio-lang', lang);
}

// Init language
applyTranslations(currentLang);

document.getElementById('langToggle').addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'id' : 'en';
  applyTranslations(currentLang);
});

// ============================================
// THEME TOGGLE
// ============================================
const themeToggle = document.getElementById('themeToggle');
const iconSun = document.getElementById('iconSun');
const iconMoon = document.getElementById('iconMoon');
const body = document.body;

function setTheme(theme) {
  body.classList.remove('dark', 'light');
  body.classList.add(theme);
  localStorage.setItem('portfolio-theme', theme);
  if (theme === 'dark') {
    iconSun.style.display = 'block';
    iconMoon.style.display = 'none';
  } else {
    iconSun.style.display = 'none';
    iconMoon.style.display = 'block';
  }
}

const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
setTheme(savedTheme);

themeToggle.addEventListener('click', () => {
  const current = body.classList.contains('dark') ? 'dark' : 'light';
  setTheme(current === 'dark' ? 'light' : 'dark');
});

// ============================================
// PRELOADER & TYPEWRITER
// ============================================
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add('hidden');
      setTimeout(() => preloader.style.display = 'none', 500);
    }, 300);
  }
});

const typewriterText = document.getElementById('typewriterText');
const wordsEn = ["Experiences", "Web Applications", "UI/UX Designs", "Business Solutions"];
const wordsId = ["Pengalaman", "Aplikasi Web", "Desain UI/UX", "Solusi Bisnis"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  if (!typewriterText) return;
  const currentWords = currentLang === 'id' ? wordsId : wordsEn;
  const currentWord = currentWords[wordIndex % currentWords.length];

  if (isDeleting) {
    typewriterText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typewriterText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 40 : 100;

  if (!isDeleting && charIndex === currentWord.length) {
    typeSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex++;
    typeSpeed = 500;
  }

  setTimeout(typeEffect, typeSpeed);
}
if (typewriterText) setTimeout(typeEffect, 1000);

// ============================================
// CURSOR GLOW
// ============================================
const cursorGlow = document.getElementById('cursorGlow');
let mouseX = 0, mouseY = 0;
let glowX = 0, glowY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  glowX += (mouseX - glowX) * 0.08;
  glowY += (mouseY - glowY) * 0.08;
  cursorGlow.style.left = glowX + 'px';
  cursorGlow.style.top = glowY + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

// ============================================
// NAVBAR SCROLL + SCROLL PROGRESS BAR
// ============================================
const navbar = document.getElementById('navbar');
const scrollProgress = document.getElementById('scrollProgress');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
  const backToTop = document.getElementById('backToTop');
  backToTop.classList.toggle('visible', window.scrollY > 500);

  // Scroll progress bar
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  if (scrollProgress) scrollProgress.style.width = pct + '%';
});

// ============================================
// ACTIVE NAV LINK (Scroll Spy)
// ============================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link[data-section]');

function updateActiveNav() {
  const scrollPos = window.scrollY + 120;
  sections.forEach(section => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute('id');
    if (scrollPos >= top && scrollPos < bottom) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === id) {
          link.classList.add('active');
        }
      });
    }
  });
}
window.addEventListener('scroll', updateActiveNav);

// ============================================
// SMOOTH SCROLL
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      document.getElementById('navLinks').classList.remove('mobile-open');
    }
  });
});

// ============================================
// BACK TO TOP
// ============================================
document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============================================
// MOBILE HAMBURGER
// ============================================
const hamburger = document.getElementById('hamburger');
const navLinksEl = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  const isOpen = navLinksEl.classList.toggle('mobile-open');
  if (isOpen && !document.getElementById('mobileCloseBtn')) {
    const closeBtn = document.createElement('button');
    closeBtn.id = 'mobileCloseBtn';
    closeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;
    closeBtn.style.cssText = 'position:absolute;top:20px;right:24px;background:none;border:none;cursor:pointer;color:var(--text-primary);z-index:201;';
    closeBtn.addEventListener('click', () => { navLinksEl.classList.remove('mobile-open'); closeBtn.remove(); });
    navLinksEl.appendChild(closeBtn);
  }
});

// ============================================
// SCROLL ANIMATIONS
// ============================================
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) setTimeout(() => entry.target.classList.add('animated'), i * 80);
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

const inObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-in').forEach(el => inObserver.observe(el));

// ============================================
// EXPERIENCE TABS
// ============================================
document.querySelectorAll('.exp-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const targetId = 'tab-' + tab.getAttribute('data-tab');
    document.querySelectorAll('.exp-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.exp-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    const panel = document.getElementById(targetId);
    if (panel) {
      panel.classList.add('active');
      panel.querySelectorAll('[data-animate]').forEach(el => {
        el.classList.remove('animated');
        setTimeout(() => el.classList.add('animated'), 50);
      });
    }
  });
});

// ============================================
// PROJECT FILTER
// ============================================
document.querySelectorAll('.proj-filter').forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-filter');
    document.querySelectorAll('.proj-filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.project-card').forEach(card => {
      const cats = card.getAttribute('data-category') || '';
      if (filter === 'all' || cats.includes(filter)) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// ============================================
// PROJECT DETAILS MODAL
// ============================================
const projectData = {
  portfolio: {
    title: 'Personal Portfolio Website',
    title_id: 'Website Portfolio Pribadi',
    category: 'Full-Stack Web · UI/UX Design',
    year: '2025',
    visual: 'project-visual-1',
    image: 'project-1.jpg',
    desc: 'A premium responsive portfolio website built from scratch using vanilla HTML, CSS, and JavaScript — no frameworks required. Features a bilingual EN/ID interface, dark/light theme toggle, interactive search modal, WhatsApp contact form, and smooth animations throughout.',
    desc_id: 'Website portofolio responsif premium yang dibangun dari nol menggunakan HTML, CSS, dan JavaScript murni. Menampilkan antarmuka dwibahasa EN/ID, toggle tema gelap/terang, modal pencarian interaktif, formulir kontak WhatsApp, dan animasi halus di seluruh halaman.',
    challenges: [
      'Built a full bilingual i18n system (300+ translation keys) without any library',
      'Implemented glassmorphism effects with performance-conscious CSS',
      'Created smooth scroll-spy active navigation with IntersectionObserver',
      'Designed premium card tilt, cursor glow, and micro-animation effects',
      'Integrated real-time form validation and WhatsApp API redirection'
    ],
    challenges_id: [
      'Membangun sistem i18n dwibahasa lengkap (300+ kunci terjemahan) tanpa library',
      'Menerapkan efek glassmorphism dengan CSS yang memperhatikan performa',
      'Membuat navigasi aktif scroll-spy yang halus dengan IntersectionObserver',
      'Merancang efek tilt kartu premium, glow kursor, dan mikro-animasi',
      'Mengintegrasikan validasi formulir real-time dan pengalihan API WhatsApp'
    ],
    outcome: 'Successfully deployed a professional portfolio demonstrating advanced CSS/JS skills. Received positive feedback for its premium feel, smooth interactions, and comprehensive bilingual content.',
    outcome_id: 'Berhasil meluncurkan portofolio profesional yang menunjukkan keahlian CSS/JS tingkat lanjut. Mendapat respons positif atas tampilan premium, interaksi yang halus, dan konten dwibahasa yang komprehensif.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX Design', 'Figma'],
    github: 'https://github.com/twmh99',
    live: 'https://portfolio-willy-self.vercel.app/'
  },
  futuretech: {
    title: 'FutureTech – Futuristic E-Commerce Platform',
    title_id: 'FutureTech – Platform E-Commerce Futuristik',
    category: 'Full-Stack Web · Next.js',
    year: '2025',
    visual: 'project-visual-2',
    image: 'project-2.jpg',
    desc: 'A full-stack e-commerce platform featuring a sleek futuristic design built with Next.js and MongoDB. Includes complete authentication flows, an admin dashboard, product management, order tracking, and a fully responsive shopping experience.',
    desc_id: 'Platform e-commerce full-stack dengan desain futuristik yang dibangun dengan Next.js dan MongoDB. Mencakup alur autentikasi lengkap, dashboard admin, manajemen produk, pelacakan pesanan, dan pengalaman belanja yang sepenuhnya responsif.',
    challenges: [
      'Implemented secure JWT authentication with role-based access control (admin/user)',
      'Built a real-time order tracking system with status updates',
      'Designed a responsive product catalog with advanced filtering and search',
      'Created an admin dashboard for full inventory and order management',
      'Optimized MongoDB queries for performance with large product datasets'
    ],
    challenges_id: [
      'Menerapkan autentikasi JWT aman dengan kontrol akses berbasis peran (admin/pengguna)',
      'Membangun sistem pelacakan pesanan real-time dengan pembaruan status',
      'Merancang katalog produk responsif dengan filter dan pencarian canggih',
      'Membuat dashboard admin untuk manajemen inventaris dan pesanan lengkap',
      'Mengoptimalkan kueri MongoDB untuk performa dengan dataset produk besar'
    ],
    outcome: 'Delivered a production-ready e-commerce platform demonstrating full-stack development expertise. The project successfully simulates real-world business requirements including multi-role access, inventory management, and order lifecycle management.',
    outcome_id: 'Menghadirkan platform e-commerce siap produksi yang menunjukkan keahlian pengembangan full-stack. Proyek ini berhasil mensimulasikan kebutuhan bisnis dunia nyata termasuk akses multi-peran, manajemen inventaris, dan manajemen siklus hidup pesanan.',
    tech: ['Next.js', 'MongoDB', 'React', 'Node.js', 'JWT', 'Tailwind CSS'],
    github: 'https://github.com/twmh99',
    live: 'https://siweb-beige.vercel.app/auth/login'
  },
  smpj: {
    title: 'SMPJ – Employee Management Information System',
    title_id: 'SMPJ – Sistem Informasi Manajemen Karyawan',
    category: 'Web Application · HR Analytics',
    year: '2025',
    visual: 'project-visual-3',
    image: 'project-3.jpg',
    desc: 'A comprehensive web-based employee management system designed to digitize HR operations. Features attendance tracking, automated payroll calculations, shift scheduling, productivity monitoring, and performance analytics dashboards.',
    desc_id: 'Sistem manajemen karyawan berbasis web yang komprehensif untuk mendigitalkan operasi SDM. Menampilkan pelacakan kehadiran, perhitungan penggajian otomatis, penjadwalan shift, pemantauan produktivitas, dan dashboard analitik kinerja.',
    challenges: [
      'Designed a flexible shift scheduling system with conflict detection',
      'Built automated payroll computation with overtime and deduction rules',
      'Implemented attendance tracking with late/absent classification logic',
      'Created performance analytics with KPI dashboards and trend visualization',
      'Developed role-based access for HR managers, supervisors, and employees'
    ],
    challenges_id: [
      'Merancang sistem penjadwalan shift fleksibel dengan deteksi konflik',
      'Membangun perhitungan penggajian otomatis dengan aturan lembur dan potongan',
      'Menerapkan pelacakan kehadiran dengan logika klasifikasi terlambat/tidak hadir',
      'Membuat analitik kinerja dengan dashboard KPI dan visualisasi tren',
      'Mengembangkan akses berbasis peran untuk manajer SDM, supervisor, dan karyawan'
    ],
    outcome: 'The system reduced manual HR processing time by an estimated 70% and provided management with clear performance insights through automated reporting and visual dashboards. Successfully implemented as a real business solution.',
    outcome_id: 'Sistem ini mengurangi waktu pemrosesan SDM manual sekitar 70% dan memberikan manajemen wawasan kinerja yang jelas melalui pelaporan otomatis dan dashboard visual. Berhasil diterapkan sebagai solusi bisnis nyata.',
    tech: ['Web App', 'JavaScript', 'HTML/CSS', 'Analytics', 'HR System'],
    github: 'https://github.com/twmh99',
    live: 'https://smpj-jambarjabu.vercel.app/login'
  }
};

const projModalOverlay = document.getElementById('projModalOverlay');
const projModalClose   = document.getElementById('projModalClose');

function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}

function preventScrollJumping(isOpen) {
  const navbar = document.getElementById('navbar');
  if (isOpen) {
    const scrollbarWidth = getScrollbarWidth();
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    if (navbar) navbar.style.paddingRight = `${scrollbarWidth}px`;
  } else {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
    if (navbar) navbar.style.paddingRight = '';
  }
}

function openProjectModal(projectId) {
  const data = projectData[projectId];
  if (!data || !projModalOverlay) return;

  const isId = currentLang === 'id';
  const projModalImage = document.getElementById('projModalImage');
  if (projModalImage) projModalImage.src = data.image;
  document.getElementById('projModalTitle').textContent = isId ? data.title_id : data.title;
  document.getElementById('projModalDesc').textContent = isId ? data.desc_id : data.desc;

  const metaEl = document.getElementById('projModalMeta');
  metaEl.innerHTML = `<span class="badge-mini blue">${data.category}</span><span class="badge-mini">${data.year}</span>`;

  const labelEl = document.getElementById('projModalChallengeLabel');
  labelEl.textContent = isId ? 'Fitur Utama & Tantangan' : 'Key Features & Challenges';

  const challenges = isId ? data.challenges_id : data.challenges;
  const listEl = document.getElementById('projModalChallenge');
  listEl.innerHTML = challenges.map(c => `<li>${c}</li>`).join('');

  const outcomeLabel = document.getElementById('projModalOutcomeLabel');
  outcomeLabel.textContent = isId ? 'Hasil & Dampak' : 'Outcomes & Impact';

  document.getElementById('projModalOutcome').textContent = isId ? data.outcome_id : data.outcome;

  const techEl = document.getElementById('projModalTech');
  const tagColors = ['tag-blue', 'tag-purple', 'tag-green', 'tag-orange', 'tag-blue', 'tag-purple'];
  techEl.innerHTML = data.tech.map((t, i) => `<span class="tag ${tagColors[i % tagColors.length]}">${t}</span>`).join('');

  const actEl = document.getElementById('projModalActions');
  actEl.innerHTML = `
    <a href="${data.github}" target="_blank" rel="noopener" class="btn btn-ghost btn-sm">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
      GitHub
    </a>
    ${data.live ? `<a href="${data.live}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      ${isId ? 'Lihat Langsung' : 'Live Site'}
    </a>` : ''}
  `;

  projModalOverlay.classList.add('open');
  preventScrollJumping(true);
}

function closeProjectModal() {
  if (projModalOverlay) projModalOverlay.classList.remove('open');
  preventScrollJumping(false);
}

// Open modal on "View Details" click
document.querySelectorAll('.btn-view-details').forEach(btn => {
  btn.addEventListener('click', () => openProjectModal(btn.getAttribute('data-project')));
});

if (projModalClose) projModalClose.addEventListener('click', closeProjectModal);
if (projModalOverlay) {
  projModalOverlay.addEventListener('click', (e) => {
    if (e.target === projModalOverlay) closeProjectModal();
  });
}
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && projModalOverlay?.classList.contains('open')) closeProjectModal();
});

// ============================================
// EXPERIENCE DETAIL MODAL
// ============================================
const experienceData = {
  bca: {
    icon: '🏦',
    accentColor: 'var(--accent-blue)',
    accentSoft: 'var(--accent-blue-soft)',
    period: 'Apr 2026 – Jul 2026',
    category: 'Work Experience',
    category_id: 'Pengalaman Kerja',
    title: 'Growth & Acquisition Intern',
    title_id: 'Magang Growth & Acquisition',
    org: 'PT Bank Digital BCA (BCA Digital) · Yogyakarta, Indonesia',
    desc: 'An intensive professional internship at one of Indonesia\'s leading digital banking platforms. Embedded in the Growth & Acquisition Division, working on strategic initiatives to grow the digital banking user base through data-driven and customer-centric approaches.',
    desc_id: 'Magang profesional intensif di salah satu platform perbankan digital terkemuka di Indonesia. Bergabung di Divisi Growth & Acquisition, bekerja pada inisiatif strategis untuk mengembangkan basis pengguna perbankan digital melalui pendekatan berbasis data dan berpusat pada pelanggan.',
    responsibilities: [
      'Selected as Growth & Acquisition Intern in the Growth & Acquisition Division — a competitive and selective position',
      'Supported customer acquisition initiatives and strategic digital banking growth programs aligned with business objectives',
      'Assisted in brand activation activities and user engagement campaigns to improve customer retention',
      'Collaborated with cross-functional teams across operational and business development activities',
      'Strengthened analytical thinking, professional communication, teamwork, and problem-solving in a high-paced banking environment'
    ],
    responsibilities_id: [
      'Terpilih sebagai Growth & Acquisition Intern di Divisi Growth & Acquisition — posisi kompetitif dan selektif',
      'Mendukung inisiatif akuisisi pelanggan dan program pertumbuhan perbankan digital yang selaras dengan tujuan bisnis',
      'Membantu kegiatan aktivasi merek dan kampanye keterlibatan pengguna untuk meningkatkan retensi pelanggan',
      'Berkolaborasi dengan tim lintas fungsi dalam kegiatan operasional dan pengembangan bisnis',
      'Memperkuat pemikiran analitis, komunikasi profesional, kerja tim, dan pemecahan masalah di lingkungan perbankan yang dinamis'
    ],
    learning: 'Gained firsthand experience in how a top-tier digital bank operates, understanding the intersection of technology, customer acquisition, and business growth. Developed professional competencies in data-driven decision making, stakeholder communication, and cross-functional collaboration.',
    learning_id: 'Mendapatkan pengalaman langsung tentang bagaimana bank digital kelas atas beroperasi, memahami persimpangan teknologi, akuisisi pelanggan, dan pertumbuhan bisnis. Mengembangkan kompetensi profesional dalam pengambilan keputusan berbasis data, komunikasi pemangku kepentingan, dan kolaborasi lintas fungsi.',
    tags: [
      { text: 'Digital Banking', color: 'tag-blue' },
      { text: 'Growth Strategy', color: 'tag-purple' },
      { text: 'Data Analysis', color: 'tag-green' },
      { text: 'Customer Acquisition', color: 'tag-orange' }
    ]
  },
  konstelasi: {
    icon: '🎤',
    accentColor: 'var(--accent-purple)',
    accentSoft: 'var(--accent-purple-soft)',
    period: 'Jan 2026',
    category: 'Work Experience',
    category_id: 'Pengalaman Kerja',
    title: 'Assistant Moderator – Seminar Nasional KONSTELASI 2026',
    title_id: 'Asisten Moderator – Seminar Nasional KONSTELASI 2026',
    org: 'Universitas Atma Jaya Yogyakarta · Yogyakarta, Indonesia',
    desc: 'Served as Assistant Moderator for the national seminar KONSTELASI 2026, a prestigious academic event hosted by Universitas Atma Jaya Yogyakarta. The role involved facilitating high-level academic discourse and ensuring smooth event execution.',
    desc_id: 'Berperan sebagai Asisten Moderator dalam seminar nasional KONSTELASI 2026, sebuah acara akademik bergengsi yang diselenggarakan oleh Universitas Atma Jaya Yogyakarta. Peran ini melibatkan fasilitasi diskusi akademis tingkat tinggi dan memastikan kelancaran pelaksanaan acara.',
    responsibilities: [
      'Assisted moderation activities throughout Seminar Nasional KONSTELASI 2026',
      'Coordinated session flow, timing management, and speaker transitions with precision',
      'Prepared speakers and ensured smooth technical readiness before and during sessions',
      'Managed audience engagement and facilitated Q&A sessions effectively',
      'Supported inter-committee communication between moderators, speakers, and event organizers',
      'Received Certificate of Appreciation as Assistant Moderator'
    ],
    responsibilities_id: [
      'Membantu kegiatan moderasi sepanjang Seminar Nasional KONSTELASI 2026',
      'Mengkoordinasikan alur sesi, manajemen waktu, dan transisi pembicara dengan tepat',
      'Mempersiapkan pembicara dan memastikan kesiapan teknis sebelum dan selama sesi',
      'Mengelola keterlibatan audiens dan memfasilitasi sesi tanya jawab secara efektif',
      'Mendukung komunikasi antar panitia antara moderator, pembicara, dan penyelenggara acara',
      'Menerima Sertifikat Penghargaan sebagai Asisten Moderator'
    ],
    learning: 'Enhanced public speaking confidence and professional poise in high-pressure, live event settings. Developed strong coordination skills by managing complex stakeholder interactions and ensuring seamless event delivery at a national level.',
    learning_id: 'Meningkatkan kepercayaan diri berbicara di depan umum dan profesionalisme dalam setting acara langsung bertekanan tinggi. Mengembangkan keterampilan koordinasi yang kuat dengan mengelola interaksi pemangku kepentingan yang kompleks dan memastikan pelaksanaan acara tingkat nasional yang mulus.',
    tags: [
      { text: 'Public Speaking', color: 'tag-blue' },
      { text: 'Event Management', color: 'tag-orange' },
      { text: 'Moderation', color: 'tag-purple' }
    ]
  },
  canva: {
    icon: '🎨',
    accentColor: 'var(--accent-green)',
    accentSoft: 'var(--accent-green-soft)',
    period: 'Mar 2025',
    category: 'Work Experience',
    category_id: 'Pengalaman Kerja',
    title: 'Speaker / Canva Graphic Design Trainer',
    title_id: 'Pembicara / Pelatih Desain Grafis Canva',
    org: 'Himpunan Mahasiswa Sistem Informasi (HIMSI) UAJY · Giriwoyo, Central Java',
    desc: 'Invited as the lead speaker and trainer for a Canva graphic design workshop organized by HIMSI UAJY for high school students. Designed and delivered a comprehensive curriculum covering fundamental design principles and practical Canva skills.',
    desc_id: 'Diundang sebagai pembicara utama dan pelatih untuk workshop desain grafis Canva yang diselenggarakan oleh HIMSI UAJY untuk siswa SMA. Merancang dan menyampaikan kurikulum komprehensif yang mencakup prinsip desain fundamental dan keterampilan Canva praktis.',
    responsibilities: [
      'Delivered a comprehensive Canva graphic design training session for high school students',
      'Developed original learning materials covering typography, layout principles, color theory, and visual communication',
      'Facilitated hands-on, project-based learning activities and practical design exercises',
      'Guided students through real design challenges to build creative problem-solving skills',
      'Evaluated student work and provided constructive feedback to enhance learning outcomes',
      'Awarded Certificate of Appreciation as the training speaker'
    ],
    responsibilities_id: [
      'Menyampaikan sesi pelatihan desain grafis Canva yang komprehensif untuk siswa SMA',
      'Mengembangkan materi pembelajaran orisinal yang mencakup tipografi, prinsip tata letak, teori warna, dan komunikasi visual',
      'Memfasilitasi kegiatan pembelajaran berbasis proyek dan latihan desain praktis',
      'Membimbing siswa melalui tantangan desain nyata untuk membangun keterampilan pemecahan masalah kreatif',
      'Mengevaluasi karya siswa dan memberikan umpan balik konstruktif untuk meningkatkan hasil belajar',
      'Mendapat Sertifikat Penghargaan sebagai pembicara pelatihan'
    ],
    learning: 'Strengthened teaching and facilitation skills while deepening expertise in design education pedagogy. Gained valuable experience in translating complex design concepts into accessible, engaging curriculum for non-design audiences.',
    learning_id: 'Memperkuat keterampilan mengajar dan fasilitasi sambil memperdalam keahlian dalam pedagogi pendidikan desain. Mendapatkan pengalaman berharga dalam menerjemahkan konsep desain yang kompleks menjadi kurikulum yang mudah diakses dan menarik bagi audiens non-desain.',
    tags: [
      { text: 'Canva', color: 'tag-purple' },
      { text: 'Design Training', color: 'tag-green' },
      { text: 'Teaching', color: 'tag-blue' },
      { text: 'Public Speaking', color: 'tag-orange' }
    ]
  },
  aptik: {
    icon: '🌏',
    accentColor: 'var(--accent-orange)',
    accentSoft: 'var(--accent-orange-soft)',
    period: 'Oct 2024',
    category: 'Work Experience',
    category_id: 'Pengalaman Kerja',
    title: 'University Representative – ISC APTIK 2024',
    title_id: 'Perwakilan Universitas – ISC APTIK 2024',
    org: 'Asosiasi Perguruan Tinggi Katolik Indonesia (APTIK) · Tabanan, Bali',
    desc: 'Selected as the official university representative for the Intercultural Student Camp (ISC) APTIK 2024 in Bali, bringing together students from Catholic universities across Indonesia to foster intercultural understanding, youth leadership, and national unity.',
    desc_id: 'Terpilih sebagai perwakilan resmi universitas untuk Intercultural Student Camp (ISC) APTIK 2024 di Bali, yang mempertemukan mahasiswa dari universitas Katolik seluruh Indonesia untuk membangun pemahaman lintas budaya, kepemimpinan pemuda, dan persatuan nasional.',
    responsibilities: [
      'Officially represented Universitas Atma Jaya Yogyakarta at the national ISC APTIK 2024 event',
      'Actively participated in intercultural dialogue sessions and collaborative leadership workshops',
      'Engaged in thematic programs covering ecology, sustainable tourism, youth spirituality, and globalization',
      'Built cross-cultural relationships with peers from Catholic universities across Indonesia',
      'Developed intercultural communication, adaptability, and inclusive leadership mindset',
      'Received Certificate of Participation as the official university representative'
    ],
    responsibilities_id: [
      'Secara resmi mewakili Universitas Atma Jaya Yogyakarta di acara nasional ISC APTIK 2024',
      'Berpartisipasi aktif dalam sesi dialog lintas budaya dan workshop kepemimpinan kolaboratif',
      'Terlibat dalam program tematik yang mencakup ekologi, pariwisata berkelanjutan, spiritualitas pemuda, dan globalisasi',
      'Membangun hubungan lintas budaya dengan rekan-rekan dari universitas Katolik seluruh Indonesia',
      'Mengembangkan komunikasi lintas budaya, kemampuan adaptasi, dan pola pikir kepemimpinan inklusif',
      'Menerima Sertifikat Partisipasi sebagai perwakilan resmi universitas'
    ],
    learning: 'Profoundly expanded cultural intelligence and intercultural communication skills through immersive experiences with peers from across Indonesia. Gained a deeper appreciation for diversity, collaborative leadership, and the power of dialogue in building unity.',
    learning_id: 'Memperluas kecerdasan budaya dan keterampilan komunikasi lintas budaya secara mendalam melalui pengalaman imersif bersama rekan-rekan dari seluruh Indonesia. Mendapatkan apresiasi yang lebih dalam terhadap keberagaman, kepemimpinan kolaboratif, dan kekuatan dialog dalam membangun persatuan.',
    tags: [
      { text: 'Leadership', color: 'tag-orange' },
      { text: 'Cross-Cultural', color: 'tag-blue' },
      { text: 'National Event', color: 'tag-purple' }
    ]
  },
  miskam: {
    icon: '👑',
    accentColor: 'var(--accent-blue)',
    accentSoft: 'var(--accent-blue-soft)',
    period: 'Dec 2024 – Jun 2025',
    category: 'Leadership & Org',
    category_id: 'Kepemimpinan & Org',
    title: 'Chairman – Misa Kampus UAJY',
    title_id: 'Ketua – Misa Kampus UAJY',
    org: 'Misa Kampus Universitas Atma Jaya Yogyakarta · Catholic Campus Ministry',
    desc: 'Served as Chairman of Misa Kampus UAJY, the Catholic campus ministry organization at Universitas Atma Jaya Yogyakarta. Led the organization through a full program cycle, overseeing all strategic, operational, and community development activities.',
    desc_id: 'Menjabat sebagai Ketua Misa Kampus UAJY, organisasi kegiatan kampus Katolik di Universitas Atma Jaya Yogyakarta. Memimpin organisasi melalui satu siklus program penuh, mengawasi semua kegiatan strategis, operasional, dan pengembangan komunitas.',
    responsibilities: [
      'Chaired the organization and led all strategic planning, vision-setting, and program direction initiatives',
      'Coordinated committee activities and facilitated cross-functional collaboration across all divisions',
      'Managed internal communication, administrative processes, and event execution for the full program period',
      'Supervised organizational projects, member development, and community engagement programs',
      'Represented the organization in external institutional meetings and inter-organization collaborations',
      'Strengthened leadership, executive decision-making, and organizational management capabilities'
    ],
    responsibilities_id: [
      'Memimpin organisasi dan memandu semua inisiatif perencanaan strategis, penetapan visi, dan arah program',
      'Mengkoordinasikan kegiatan panitia dan memfasilitasi kolaborasi lintas fungsi di semua divisi',
      'Mengelola komunikasi internal, proses administrasi, dan pelaksanaan acara selama periode program penuh',
      'Mengawasi proyek organisasi, pengembangan anggota, dan program keterlibatan komunitas',
      'Mewakili organisasi dalam pertemuan kelembagaan eksternal dan kolaborasi antar organisasi',
      'Memperkuat kepemimpinan, pengambilan keputusan eksekutif, dan kemampuan manajemen organisasi'
    ],
    learning: 'Developed executive leadership competencies including strategic thinking, people management, and organizational governance. Leading a team through a complete program cycle built resilience, decisiveness, and the ability to inspire and align people toward a shared mission.',
    learning_id: 'Mengembangkan kompetensi kepemimpinan eksekutif termasuk pemikiran strategis, manajemen SDM, dan tata kelola organisasi. Memimpin tim melalui satu siklus program lengkap membangun ketangguhan, ketegasan, dan kemampuan menginspirasi dan menyelaraskan orang menuju misi bersama.',
    tags: [
      { text: 'Chairman', color: 'tag-blue' },
      { text: 'Strategic Planning', color: 'tag-purple' },
      { text: 'Event Management', color: 'tag-green' },
      { text: 'Community', color: 'tag-orange' }
    ]
  },
  sekretariat: {
    icon: '📋',
    accentColor: 'var(--accent-purple)',
    accentSoft: 'var(--accent-purple-soft)',
    period: 'Jul 2025 – Oct 2025',
    category: 'Leadership & Org',
    category_id: 'Kepemimpinan & Org',
    title: 'Coordinator of Secretariat Division',
    title_id: 'Koordinator Divisi Sekretariat',
    org: 'Universitas Atma Jaya Yogyakarta – PKKMB, UKM & Community Fair, Fun Walk Dies Natalis',
    desc: 'Led the Secretariat Division across 3 major consecutive university events: PKKMB (New Student Orientation), UKM & Community Fair, and Fun Walk Dies Natalis UAJY. Responsible for administrative infrastructure, documentation, and institutional correspondence throughout all events.',
    desc_id: 'Memimpin Divisi Sekretariat di 3 acara besar universitas secara berturut-turut: PKKMB (Orientasi Mahasiswa Baru), UKM & Community Fair, dan Fun Walk Dies Natalis UAJY. Bertanggung jawab atas infrastruktur administratif, dokumentasi, dan korespondensi kelembagaan di semua acara.',
    responsibilities: [
      'Coordinated secretariat and administrative operations across 3 consecutive major university events',
      'Managed all official documentation, committee schedules, and formal institutional correspondence',
      'Built and maintained administrative workflows to support efficient multi-event committee operations',
      'Supported inter-committee communication and project coordination between student organizations',
      'Ensured operational effectiveness and administrative accuracy throughout all event execution phases'
    ],
    responsibilities_id: [
      'Mengkoordinasikan operasional sekretariat dan administrasi di 3 acara besar universitas secara berturut-turut',
      'Mengelola semua dokumentasi resmi, jadwal panitia, dan korespondensi kelembagaan formal',
      'Membangun dan memelihara alur kerja administratif untuk mendukung operasional panitia multi-acara yang efisien',
      'Mendukung komunikasi antar panitia dan koordinasi proyek antara organisasi mahasiswa',
      'Memastikan efektivitas operasional dan akurasi administratif sepanjang semua fase pelaksanaan acara'
    ],
    learning: 'Built strong organizational and administrative management skills through high-volume, multi-event coordination. Learned how to scale administrative processes efficiently and maintain documentation standards under tight timelines and complex organizational structures.',
    learning_id: 'Membangun keterampilan manajemen organisasi dan administrasi yang kuat melalui koordinasi multi-acara dengan volume tinggi. Belajar cara menskalakan proses administrasi secara efisien dan mempertahankan standar dokumentasi di bawah tenggat waktu yang ketat dan struktur organisasi yang kompleks.',
    tags: [
      { text: 'Administration', color: 'tag-purple' },
      { text: '3 Events', color: 'tag-orange' },
      { text: 'Coordination', color: 'tag-blue' }
    ]
  },
  jobfair: {
    icon: '📢',
    accentColor: 'var(--accent-green)',
    accentSoft: 'var(--accent-green-soft)',
    period: 'Feb 2025',
    category: 'Leadership & Org',
    category_id: 'Kepemimpinan & Org',
    title: 'Social Media & Design Staff – Job Fair UAJY 2025',
    title_id: 'Staf Media Sosial & Desain – Job Fair UAJY 2025',
    org: 'Universitas Atma Jaya Yogyakarta · Yogyakarta, Indonesia',
    desc: 'Contributed as the Social Media & Design Staff for Job Fair UAJY 2025, one of the university\'s flagship annual events connecting students with top employers. Responsible for the digital presence and visual identity of the event.',
    desc_id: 'Berkontribusi sebagai Staf Media Sosial & Desain untuk Job Fair UAJY 2025, salah satu acara tahunan unggulan universitas yang menghubungkan mahasiswa dengan perusahaan terkemuka. Bertanggung jawab atas kehadiran digital dan identitas visual acara.',
    responsibilities: [
      'Created promotional content and professional visual materials for Job Fair UAJY 2025 across digital platforms',
      'Designed event branding assets including posters, banners, and social media graphic templates',
      'Supported social media campaigns and digital branding initiatives to drive event awareness and attendance',
      'Assisted in event documentation and coordinated audience engagement activities during the event',
      'Collaborated with the committee to ensure visual consistency across all communication channels'
    ],
    responsibilities_id: [
      'Membuat konten promosi dan materi visual profesional untuk Job Fair UAJY 2025 di seluruh platform digital',
      'Merancang aset branding acara termasuk poster, banner, dan template grafis media sosial',
      'Mendukung kampanye media sosial dan inisiatif branding digital untuk meningkatkan kesadaran dan kehadiran acara',
      'Membantu dokumentasi acara dan mengkoordinasikan kegiatan keterlibatan audiens selama acara',
      'Berkolaborasi dengan panitia untuk memastikan konsistensi visual di semua saluran komunikasi'
    ],
    learning: 'Sharpened design execution skills in a real-world, deadline-driven environment. Gained practical experience in social media marketing strategy, brand communication, and how visual design directly impacts event engagement and audience perception.',
    learning_id: 'Mengasah keterampilan eksekusi desain dalam lingkungan dunia nyata yang dibatasi tenggat waktu. Mendapatkan pengalaman praktis dalam strategi pemasaran media sosial, komunikasi merek, dan bagaimana desain visual secara langsung mempengaruhi keterlibatan acara dan persepsi audiens.',
    tags: [
      { text: 'Social Media', color: 'tag-green' },
      { text: 'Design', color: 'tag-purple' },
      { text: 'Branding', color: 'tag-blue' }
    ]
  },
  steering: {
    icon: '⚙️',
    accentColor: 'var(--accent-orange)',
    accentSoft: 'var(--accent-orange-soft)',
    period: 'Dec 2024 – May 2025 / Feb 2025',
    category: 'Leadership & Org',
    category_id: 'Kepemimpinan & Org',
    title: 'Multiple Steering Committee Roles',
    title_id: 'Berbagai Peran Steering Committee',
    org: 'Misa Kampus UAJY – Miskam Week 2025 & Action Plan 2025',
    desc: 'Held Steering Committee positions across multiple Misa Kampus UAJY events including Miskam Week 2025 and the organizational Action Plan 2025. As Steering Committee, acted as a senior oversight body above the Organizing Committee to ensure strategic alignment and quality execution.',
    desc_id: 'Memegang posisi Steering Committee di berbagai acara Misa Kampus UAJY termasuk Miskam Week 2025 dan Action Plan organisasi 2025. Sebagai Steering Committee, bertindak sebagai badan pengawas senior di atas Panitia Pelaksana untuk memastikan keselarasan strategis dan pelaksanaan berkualitas.',
    responsibilities: [
      'Supervised overall event preparation, execution quality, and strategic planning as a senior advisory body',
      'Provided strategic direction and oversight to the organizing committee to ensure events met organizational goals',
      'Coordinated communication and alignment between all committee divisions and leadership',
      'Assisted in key decision-making and operational problem-solving during critical execution phases',
      'Supported environmental conservation programs and community engagement initiatives'
    ],
    responsibilities_id: [
      'Mengawasi persiapan acara secara keseluruhan, kualitas pelaksanaan, dan perencanaan strategis sebagai badan penasehat senior',
      'Memberikan arahan strategis dan pengawasan kepada panitia pelaksana untuk memastikan acara memenuhi tujuan organisasi',
      'Mengkoordinasikan komunikasi dan keselarasan antara semua divisi panitia dan kepemimpinan',
      'Membantu pengambilan keputusan kunci dan pemecahan masalah operasional selama fase pelaksanaan kritis',
      'Mendukung program konservasi lingkungan dan inisiatif keterlibatan komunitas'
    ],
    learning: 'Developed high-level strategic oversight and governance capabilities by leading from an advisory position. Learned to guide and empower teams without direct authority, providing mentorship and ensuring strategic coherence across multiple concurrent programs.',
    learning_id: 'Mengembangkan kapabilitas pengawasan strategis dan tata kelola tingkat tinggi dengan memimpin dari posisi penasehat. Belajar membimbing dan memberdayakan tim tanpa otoritas langsung, memberikan mentorship dan memastikan koherensi strategis di berbagai program yang berjalan bersamaan.',
    tags: [
      { text: 'Steering Committee', color: 'tag-orange' },
      { text: 'Community', color: 'tag-blue' },
      { text: 'Leadership', color: 'tag-purple' }
    ]
  },
  pubdok: {
    icon: '📸',
    accentColor: 'var(--accent-blue)',
    accentSoft: 'var(--accent-blue-soft)',
    period: 'Sep 2024 / Dec 2023',
    category: 'Leadership & Org',
    category_id: 'Kepemimpinan & Org',
    title: 'Coordinator of Publication, Design & Documentation',
    title_id: 'Koordinator Publikasi, Desain & Dokumentasi',
    org: 'FORMASI & PSSB Social Service / Mental Health Talkshow 2024',
    desc: 'Led the Publication, Design & Documentation division for two major events: the FORMASI & PSSB Social Service Program and the Mental Health Talkshow 2024. Responsible for the entire visual communication pipeline from design creation to documentation management.',
    desc_id: 'Memimpin divisi Publikasi, Desain & Dokumentasi untuk dua acara besar: Program Pengabdian Masyarakat FORMASI & PSSB dan Mental Health Talkshow 2024. Bertanggung jawab atas seluruh pipeline komunikasi visual mulai dari pembuatan desain hingga manajemen dokumentasi.',
    responsibilities: [
      'Coordinated all publication, graphic design, and documentation activities for both major events',
      'Managed the complete visual communication workflow including design briefs, asset creation, and publishing',
      'Supervised documentation processes including photography, videography, and archiving during community service programs',
      'Designed comprehensive promotional and publication materials for Mental Health Talkshow 2024',
      'Ensured visual consistency, brand alignment, and timely delivery of all creative outputs'
    ],
    responsibilities_id: [
      'Mengkoordinasikan semua kegiatan publikasi, desain grafis, dan dokumentasi untuk kedua acara besar',
      'Mengelola alur kerja komunikasi visual lengkap termasuk brief desain, pembuatan aset, dan penerbitan',
      'Mengawasi proses dokumentasi termasuk fotografi, videografi, dan pengarsipan selama program pengabdian masyarakat',
      'Merancang materi promosi dan publikasi komprehensif untuk Mental Health Talkshow 2024',
      'Memastikan konsistensi visual, keselarasan merek, dan pengiriman tepat waktu dari semua output kreatif'
    ],
    learning: 'Strengthened project management and creative direction capabilities by overseeing a full design-to-documentation pipeline. Learned to manage creative teams, maintain quality standards under pressure, and deliver impactful visual communication for socially meaningful events.',
    learning_id: 'Memperkuat kemampuan manajemen proyek dan arahan kreatif dengan mengawasi pipeline desain-hingga-dokumentasi secara penuh. Belajar mengelola tim kreatif, mempertahankan standar kualitas di bawah tekanan, dan menyampaikan komunikasi visual yang berdampak untuk acara yang bermakna secara sosial.',
    tags: [
      { text: 'Publication', color: 'tag-blue' },
      { text: 'Design', color: 'tag-purple' },
      { text: 'Documentation', color: 'tag-green' }
    ]
  }
};

const expModalOverlay = document.getElementById('expModalOverlay');
const expModalClose   = document.getElementById('expModalClose');

function openExpModal(expId) {
  const data = experienceData[expId];
  if (!data || !expModalOverlay) return;
  const isId = currentLang === 'id';

  // Header icon
  const iconEl = document.getElementById('expModalIcon');
  iconEl.textContent = data.icon;
  iconEl.style.background = data.accentSoft;
  iconEl.style.color = data.accentColor;

  // Meta badges
  const metaEl = document.getElementById('expModalMeta');
  metaEl.innerHTML = `<span class="badge-mini blue">${isId ? data.category_id : data.category}</span><span class="badge-mini">${data.period}</span>`;

  // Title & Org
  document.getElementById('expModalTitle').textContent = isId ? data.title_id : data.title;
  document.getElementById('expModalOrg').textContent = data.org;

  // Description
  document.getElementById('expModalDescLabel').textContent = isId ? 'Gambaran Umum' : 'Overview';
  document.getElementById('expModalDesc').textContent = isId ? data.desc_id : data.desc;

  // Responsibilities list
  document.getElementById('expModalResponsLabel').textContent = isId ? 'Tanggung Jawab Utama' : 'Key Responsibilities';
  const respList = isId ? data.responsibilities_id : data.responsibilities;
  document.getElementById('expModalRespons').innerHTML = respList.map(r => `<li>${r}</li>`).join('');

  // Learning
  document.getElementById('expModalLearningLabel').textContent = isId ? 'Pembelajaran & Dampak Utama' : 'Key Learnings & Impact';
  document.getElementById('expModalLearning').textContent = isId ? data.learning_id : data.learning;

  // Tags
  const tagColors = ['tag-blue', 'tag-purple', 'tag-green', 'tag-orange'];
  document.getElementById('expModalTags').innerHTML = data.tags.map((t, i) =>
    `<span class="tag ${t.color || tagColors[i % tagColors.length]}">${t.text}</span>`
  ).join('');

  expModalOverlay.classList.add('open');
  preventScrollJumping(true);
}

function closeExpModal() {
  if (expModalOverlay) expModalOverlay.classList.remove('open');
  preventScrollJumping(false);
}

document.querySelectorAll('.btn-view-exp').forEach(btn => {
  btn.addEventListener('click', () => openExpModal(btn.getAttribute('data-exp')));
});

if (expModalClose) expModalClose.addEventListener('click', closeExpModal);
if (expModalOverlay) {
  expModalOverlay.addEventListener('click', (e) => {
    if (e.target === expModalOverlay) closeExpModal();
  });
}
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && expModalOverlay?.classList.contains('open')) closeExpModal();
});

// ============================================
// CONTACT FORM → WHATSAPP (with validation + toast)
// ============================================
const contactForm = document.getElementById('contactForm');
const submitBtn   = document.getElementById('submitBtn');

// Inject error message spans
function addFieldError(fieldId, msgEn, msgId) {
  const field = document.getElementById(fieldId);
  if (!field) return;
  const parent = field.parentElement;
  if (!parent.querySelector('.field-error')) {
    const err = document.createElement('span');
    err.className = 'field-error';
    err.dataset.en = msgEn;
    err.dataset.id = msgId;
    err.textContent = currentLang === 'id' ? msgId : msgEn;
    parent.appendChild(err);
  }
}

function showFieldError(fieldId) {
  const field = document.getElementById(fieldId);
  if (!field) return;
  field.classList.add('invalid');
  const err = field.parentElement.querySelector('.field-error');
  if (err) { err.textContent = currentLang === 'id' ? err.dataset.id : err.dataset.en; err.classList.add('visible'); }
}

function clearFieldError(fieldId) {
  const field = document.getElementById(fieldId);
  if (!field) return;
  field.classList.remove('invalid');
  const err = field.parentElement.querySelector('.field-error');
  if (err) err.classList.remove('visible');
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Show toast notification
const successToast = document.getElementById('successToast');
const toastClose   = document.getElementById('toastClose');
const toastTitle   = document.getElementById('toastTitle');
const toastDesc    = document.getElementById('toastDesc');
let toastTimer = null;

function showToast(title, desc) {
  if (toastTitle) toastTitle.textContent = title;
  if (toastDesc) toastDesc.textContent = desc;
  if (successToast) {
    successToast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => successToast.classList.remove('show'), 5000);
  }
}

if (toastClose) {
  toastClose.addEventListener('click', () => {
    successToast.classList.remove('show');
    clearTimeout(toastTimer);
  });
}

if (contactForm) {
  // Add error spans to form fields
  addFieldError('name',
    'Name must be at least 2 characters.',
    'Nama minimal 2 karakter.');
  addFieldError('email',
    'Please enter a valid email address.',
    'Masukkan alamat email yang valid.');
  addFieldError('message',
    'Message must be at least 10 characters.',
    'Pesan minimal 10 karakter.');

  // Real-time validation on blur
  const nameField    = document.getElementById('name');
  const emailField   = document.getElementById('email');
  const messageField = document.getElementById('message');

  if (nameField) nameField.addEventListener('blur', () => {
    if (nameField.value.trim().length < 2) showFieldError('name');
    else clearFieldError('name');
  });
  if (nameField) nameField.addEventListener('input', () => {
    if (nameField.value.trim().length >= 2) clearFieldError('name');
  });
  if (emailField) emailField.addEventListener('blur', () => {
    if (!validateEmail(emailField.value.trim())) showFieldError('email');
    else clearFieldError('email');
  });
  if (emailField) emailField.addEventListener('input', () => {
    if (validateEmail(emailField.value.trim())) clearFieldError('email');
  });
  const charCounter = document.getElementById('charCounter');
  if (messageField) messageField.addEventListener('blur', () => {
    if (messageField.value.trim().length < 10) showFieldError('message');
    else clearFieldError('message');
  });
  if (messageField) messageField.addEventListener('input', (e) => {
    if (messageField.value.trim().length >= 10) clearFieldError('message');
    if (charCounter) {
      const len = e.target.value.length;
      charCounter.textContent = `${len} / 500`;
      if (len >= 500) {
        charCounter.classList.add('limit-reached');
      } else {
        charCounter.classList.remove('limit-reached');
      }
    }
  });

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name    = nameField ? nameField.value.trim() : '';
    const email   = emailField ? emailField.value.trim() : '';
    const subject = (document.getElementById('subject') || {}).value?.trim() || '';
    const message = messageField ? messageField.value.trim() : '';

    let hasError = false;
    if (name.length < 2) { showFieldError('name'); hasError = true; }
    if (!validateEmail(email)) { showFieldError('email'); hasError = true; }
    if (message.length < 10) { showFieldError('message'); hasError = true; }
    if (hasError) return;

    const waNumber = '6282384751520';
    const waText = [`Halo Willy! Saya ${name}`, subject ? `Subjek: ${subject}` : '', `Email: ${email}`, '', message].filter(Boolean).join('\n');
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waText)}`;

    submitBtn.disabled = true;
    submitBtn.classList.add('btn-loading');

    setTimeout(() => {
      window.open(waUrl, '_blank');
      contactForm.reset();
      submitBtn.disabled = false;
      submitBtn.classList.remove('btn-loading');
      showToast(
        currentLang === 'id' ? 'Pesan Terkirim! 🎉' : 'Message Sent! 🎉',
        currentLang === 'id'
          ? 'WhatsApp sedang dibuka. Lanjutkan kirim pesan di sana.'
          : 'WhatsApp is opening. Continue sending your message there.'
      );
    }, 700);
  });
}


// ============================================
// SEARCH MODAL
// ============================================
const searchData = [
  { title: 'Home / Beranda',         desc: 'Hero section & intro',                    href: '#home',          icon: '🏠' },
  { title: 'About / Tentang',        desc: 'Background, education & values',          href: '#about',         icon: '👤' },
  { title: 'Experience / Pengalaman',desc: 'BCA Digital internship & more',           href: '#experience',    icon: '💼' },
  { title: 'Projects / Proyek',      desc: 'Portfolio, FutureTech, SMPJ',            href: '#projects',      icon: '🚀' },
  { title: 'Certifications / Sertifikasi', desc: 'Tableau, ISO 27001, AI certs',     href: '#certifications',icon: '🏆' },
  { title: 'Skills / Keahlian',      desc: 'Design, Dev, Data, Leadership',          href: '#skills',        icon: '⚡' },
  { title: 'Contact / Kontak',       desc: 'WhatsApp, Email, LinkedIn',              href: '#contact',       icon: '✉️' },
  { title: 'UI/UX Design',           desc: 'Figma, Canva, prototyping',              href: '#skills',        icon: '🎨' },
  { title: 'Web Development',        desc: 'HTML, CSS, JS, Next.js',                href: '#skills',        icon: '💻' },
  { title: 'Data Analytics',         desc: 'Tableau, BI tools / Alat BI',           href: '#skills',        icon: '📊' },
  { title: 'BCA Digital',            desc: 'Growth & Acquisition Intern',            href: '#experience',    icon: '🏦' },
  { title: 'Tableau',                desc: 'Fundamentals & Intermediate cert',       href: '#certifications',icon: '📈' },
  { title: 'Personal Portfolio',     desc: 'Portfolio website project',              href: '#projects',      icon: '🌐' },
  { title: 'FutureTech',             desc: 'E-Commerce platform / Platform E-Niaga', href: '#projects',     icon: '🛒' },
  { title: 'SMPJ',                   desc: 'Employee Management System / Sistem Karyawan', href: '#projects',icon: '👥' },
];

const searchOverlay = document.getElementById('searchOverlay');
const searchToggle  = document.getElementById('searchToggle');
const searchClose   = document.getElementById('searchClose');
const searchInput   = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
let focusedIndex = -1;

function openSearch() {
  searchOverlay.classList.add('open');
  preventScrollJumping(true);
  searchInput.value = '';
  renderResults('');
  setTimeout(() => searchInput.focus(), 50);
  focusedIndex = -1;
}
function closeSearch() { 
  searchOverlay.classList.remove('open'); 
  preventScrollJumping(false);
}

function renderResults(query) {
  const q = query.toLowerCase().trim();
  const filtered = q === '' ? searchData : searchData.filter(item =>
    item.title.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q)
  );

  if (filtered.length === 0) {
    searchResults.innerHTML = `<p class="search-empty">No results for "<strong>${query}</strong>"</p>`;
    return;
  }

  searchResults.innerHTML = filtered.map((item, i) => `
    <a href="${item.href}" class="search-item" data-index="${i}" tabindex="-1">
      <div class="search-item-icon">${item.icon}</div>
      <div class="search-item-text"><h4>${item.title}</h4><p>${item.desc}</p></div>
    </a>
  `).join('');

  searchResults.querySelectorAll('.search-item').forEach(item => {
    item.addEventListener('click', (e) => {
      const href = item.getAttribute('href');
      const target = document.querySelector(href);
      if (target) { e.preventDefault(); closeSearch(); setTimeout(() => target.scrollIntoView({ behavior: 'smooth' }), 150); }
    });
  });
}

searchToggle.addEventListener('click', openSearch);
searchClose.addEventListener('click', closeSearch);
searchOverlay.addEventListener('click', (e) => { if (e.target === searchOverlay) closeSearch(); });

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { closeSearch(); return; }
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    searchOverlay.classList.contains('open') ? closeSearch() : openSearch();
    return;
  }
  if (!searchOverlay.classList.contains('open')) return;
  const items = searchResults.querySelectorAll('.search-item');
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    focusedIndex = Math.min(focusedIndex + 1, items.length - 1);
    items.forEach((item, i) => item.classList.toggle('focused', i === focusedIndex));
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    focusedIndex = Math.max(focusedIndex - 1, 0);
    items.forEach((item, i) => item.classList.toggle('focused', i === focusedIndex));
  } else if (e.key === 'Enter' && focusedIndex >= 0) {
    items[focusedIndex]?.click();
  }
});

searchInput.addEventListener('input', (e) => { focusedIndex = -1; renderResults(e.target.value); });

// ============================================
// SKILL PILLS HOVER
// ============================================
document.querySelectorAll('.skill-pill').forEach(pill => {
  pill.addEventListener('mouseenter', () => { pill.style.transform = 'scale(1.05)'; });
  pill.addEventListener('mouseleave', () => { pill.style.transform = ''; });
});

// ============================================
// STATS COUNTER ANIMATION
// ============================================
function animateCounter(el, target, suffix = '') {
  const isDecimal = String(target).includes('.');
  const duration = 1500;
  const start = performance.now();
  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = target * eased;
    el.textContent = isDecimal ? current.toFixed(2) : Math.round(current) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

let statAnimated = false;
const statsObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting && !statAnimated) {
    statAnimated = true;
    const targets = [3, 6, 10, 3.69];
    const suffixes = ['+', '+', '+', ''];
    document.querySelectorAll('.stat-num').forEach((el, i) => animateCounter(el, targets[i], suffixes[i]));
  }
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) statsObserver.observe(heroStats);

// ============================================
// CARD TILT EFFECT (Work/Leadership Timeline & Profile Card Only)
// ============================================
document.querySelectorAll('.timeline-content, .hero-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const rotX = ((e.clientY - rect.top - rect.height / 2) / (rect.height / 2)) * -4;
    const rotY = ((e.clientX - rect.left - rect.width / 2) / (rect.width / 2)) * 4;
    card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-2px)`;
  });
  card.addEventListener('mouseleave', () => { card.style.transform = ''; });
});

// ============================================
// NAVBAR LINK ACTIVE ON CLICK
// ============================================
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  updateActiveNav();
  setTimeout(() => {
    document.querySelectorAll('.animate-in').forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('visible');
    });
  }, 100);
});

console.log('%c✨ Willy Hutagalung Portfolio %c\nDesigned & Developed with ❤️',
  'color: #3b82f6; font-size: 18px; font-weight: bold;',
  'color: #94a3b8; font-size: 12px;'
);
