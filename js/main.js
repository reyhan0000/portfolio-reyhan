/**
 * Muhammad Reyhan Fadina R - Portfolio Logic
 * Features: Dark/Light Mode, Skill Filtering, Case Study Modals, Diagram Lightbox, Toast Notifications,
 *           Scroll Animations, Number Counters, Reading Progress Bar, Mobile Drawer, Back-to-Top
 */

function initAll() {
  initLanguageSwitcher();
  initNavigation();
  initSkillFilters();
  initModals();
  initLightbox();
  initCopyButtons();
  initContactForm();
  initScrollAnimations();
  initReadingProgress();
  initNumberCounters();
  initBackToTop();
  initRippleEffects();
  initTypingAnimation();
  initCardTiltEffect();
  initMobileDrowerEnhanced();
}

const ICON_HAMBURGER_SVG = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
const ICON_CLOSE_SVG = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';

const translations = {
  id: {
    about: 'Tentang',
    experience: 'Pengalaman',
    projects: 'Proyek',
    skills: 'Core Skills',
    achievements: 'Pencapaian',
    certifications: 'Sertifikasi',
    contact: 'Kontak',
    portfolioTag: 'PORTOFOLIO · SYSTEM ANALYSIS & QUALITY ASSURANCE',
    heroSub: 'Lulusan D3 Manajemen Informatika',
    heroRole: 'System Analyst, QA Tester & IT Support',
    heroCertTitle: 'System Analyst · Kompeten',
    heroCertSuffix: ' · LSP ULBI · BNSP',
    heroBio: 'Pengalaman magang di Dinas Perkebunan Provinsi Jawa Barat dan proyek akademik dalam pengujian fungsional (Black Box & Boundary Value), analisis kebutuhan, pemodelan proses bisnis (BPMN), perancangan sistem terintegrasi, dan pengembangan web berbasis Laravel.',
    explore: 'Jelajahi Proyek',
    viewCv: 'Lihat CV (PDF)',
    institution: 'Afiliasi & Institusi:',

    profileBadge: 'PROFIL',
    aboutTitle: 'Tentang Saya',
    aboutText1: 'Lulusan D3 Manajemen Informatika dari Universitas Logistik dan Bisnis Internasional (ULBI), Bandung (2023–2026). Memiliki pengalaman magang di Dinas Perkebunan Provinsi Jawa Barat dalam analisis kebutuhan sistem, pemodelan proses bisnis, pengujian fungsi aplikasi, dan penyusunan dokumentasi teknis (SRS).',
    aboutText2: 'Teliti, analitis, cepat belajar, serta memiliki minat besar untuk membangun karier di bidang Quality Assurance (QA) dan System Analysis.',
    statGpa: 'IPK D3 Manajemen Informatika',
    statProjects: 'Proyek Sistem Utama',
    statTesting: 'Pengujian Fungsional Lolos Uji',
    focusBadge: 'KOMPETENSI UTAMA',
    focusTitle: 'Fokus Kemampuan',
    reqLabel: 'Requirements Analysis & Documentation',
    reqText: 'Elicitation kebutuhan fungsional & non-fungsional, user stories, dan penyusunan SRS.',
    qaLabel: 'Functional Testing & QA',
    qaText: 'Black Box Testing, Boundary Value Analysis, Test Case Design, dan pelacakan defect/bug.',
    bpmLabel: 'Business Process & UML Modeling',
    bpmText: 'BPMN, Use Case, Activity Diagram, Sequence Diagram, dan Class Diagram.',
    webLabel: 'Web Development & Database',
    webText: 'Pengembangan aplikasi web berbasis Laravel & MySQL dengan Role-Based Access Control (RBAC).',
    supportLabel: 'IT Support & Troubleshooting',
    supportText: 'Instalasi software, konfigurasi perangkat dasar, troubleshooting sistem/jaringan dasar, dan dukungan pengguna (helpdesk).',

    experienceBadge: 'PENGALAMAN',
    experienceTitle: 'Pengalaman Kerja',
    expOneTitle: 'System Analyst & Web Developer (Magang)',
    expOneCompany: 'Dinas Perkebunan Provinsi Jawa Barat',
    expOneDesc: 'Berpartisipasi dalam analisis kebutuhan pengguna, perancangan model proses bisnis (BPMN) dan UML, pengembangan aplikasi berbasis Laravel & MySQL, pengujian fungsional (Black Box testing), serta penyusunan dokumentasi teknis sistem SIBANSAR.',
    expOneLink: 'Lihat hasil pekerjaan (SIBANSAR) →',
    expOneCert: 'Lihat Sertifikat PKL (PDF) ↗',
    expTwoTitle: 'Bendahara Organisasi',
    expTwoCompany: 'Himpunan Mahasiswa Manajemen Informatika (HMMI) ULBI',
    expTwoDesc: 'Mengelola dan mengontrol arus kas masuk-keluar organisasi, menyusun Rencana Anggaran Biaya (RAB), mendokumentasikan seluruh transaksi keuangan, serta menyusun LPJ akhir periode secara transparan dan akuntabel.',
    expTwoCert: 'Lihat Sertifikat HMMI (PDF) ↗',

    portfolioBadge: 'PORTOFOLIO',
    portfolioTitle: 'Proyek Pilihan',
    projectOneMeta: 'Magang & Tugas Akhir · 2026',
    projectOneBrandSub: 'Magang · Maret–Juni 2026',
    projectOneRoleText: 'System Analyst, QA Tester & Web Developer',
    projectOneInstansiText: 'Dinas Perkebunan Provinsi Jawa Barat',
    projectOneSummary: 'Pencatatan proposal fisik dan disposisi persetujuan sarana prasarana yang tersebar rawan hilang dan sulit dipantau. Proyek ini mendigitalisasi alur bantuan ke dalam sistem web multi-peran (Admin, Petani, Operator, Kabid).',
    projectTwoMeta: 'Proyek Akademik II · 2025',
    projectTwoBrandSub: 'Proyek Akademik II (Scrum) · 2025',
    projectTwoRoleText: 'System Analyst, QA Tester & Web Developer',
    projectTwoInstansiText: 'Toko Alam Tembakau (Retail Tembakau)',
    projectTwoSummary: 'Pencatatan kasir fisik dan stok manual mengakibatkan selisih inventori dan kesulitan perhitungan laba rugi. Dibangun aplikasi kasir cepat terpadu dengan sinkronisasi stok otomatis dan laporan analitik omset.',
    readMore: 'Baca studi kasus lengkap →',
    qaDocs: 'Bukti QA / BVA (PDF) ↗',
    qaDocsPos: 'Bukti QA / Black Box (PDF) ↗',
    projectToolsLabel: 'TOOLS',
    tagBva: 'BVA (28 Test Cases)',
    tagRequirementsAnalysis: 'Requirements Analysis',
    tagBpmn: 'BPMN As-Is & To-Be',
    tagBlackBox: 'Black Box Testing',
    tagUml: 'UML & Data Modeling',
    tagRbac: 'RBAC 4 Peran',
    tagAgileScrum: 'Agile Scrum',
    tagPosFast: 'Kasir POS Cepat',
    tagInventory: 'Inventori Stok Otomatis',
    tagProfit: 'Laporan Laba Rugi',
    certSmallMetaEnterprise: 'Sistem Enterprise & ERP',
    certSmallMetaEnterpriseProg: 'Pemrograman Enterprise',
    certSmallMetaVocational: 'Uji Kompetensi Kejuruan',
    certOpenPdf: 'Buka PDF ↗',

    skillsBadge: 'KOMPETENSI',
    skillsTitle: 'Core Skills',
    skillReqTitle: 'Requirements & System Analysis',
    skillReqDesc: 'Menggali kebutuhan pengguna, merumuskan business rules, dan memetakan proses As-Is serta To-Be.',
    skillTestingTitle: 'Software Testing & QA Tester',
    skillTestingDesc: 'Menjamin mutu perangkat lunak melalui pengujian fungsional terstruktur dan dokumentasi defect.',
    skillDevTitle: 'Web Development & Database',
    skillDevDesc: 'Membangun arsitektur backend, basis data relasional, dan antarmuka web yang efisien.',
    collabTitle: 'Kemampuan Kolaboratif & Manajerial',
    collab1Label: 'Komunikasi Kebutuhan:',
    collab1Text: 'Wawancara, diskusi, dan observasi langsung bersama pengguna sistem dan stakeholder instansi.',
    collab2Label: 'Pemecahan Masalah:',
    collab2Text: 'Metode PIECES, Ishikawa (Fishbone Diagram), dan Five Whys untuk menganalisis akar masalah.',
    collab3Label: 'Kerja Tim & Metodologi:',
    collab3Text: 'Penerapan kerangka kerja Agile Scrum dan Waterfall SDLC dalam pengerjaan proyek kelompok.',
    collab4Label: 'Akuntabilitas Finansial:',
    collab4Text: 'Pengalaman sebagai Bendahara Himpunan dalam penyusunan RAB dan laporan pertanggungjawaban (LPJ).',
    collab5Label: 'Akuntabilitas',
    collab5Text: 'Berpengalaman menjadi bendahara dalam penyusunan RAB dan laporan pertanggungjawaban organisasi.',
    collab6Label: 'Adaptasi & Belajar Cepat',
    collab6Text: 'Cepat beradaptasi pada tools baru, kebutuhan proyek, serta perubahan alur kerja.',

    achievementBadge: 'PENCAPAIAN',
    achievementTitle: 'Pencapaian & Kontribusi',
    achieveAcademic: 'AKADEMIK',
    achieveGovernment: 'INSTANSI PEMERINTAH',
    achieveCampus: 'ORGANISASI KAMPUS',
    achieveProfessional: 'STANDARISASI PROFESI',
    certLabelBNSP: 'LSP ULBI · BNSP',
    certLabelCompetent: 'Kompeten',
    certBnspTitle: 'System Analyst',
    certStatusVerified: '✓ Sertifikasi Resmi Terverifikasi',
    certLspBrand: 'LSP ULBI',
    certBspIssuer: 'Badan Nasional Sertifikasi Profesi (BNSP) · LSP ULBI · Oktober 2026',
    certBspDesc: 'Sertifikasi profesi System Analyst yang memvalidasi kompetensi dalam analisis kebutuhan sistem, pemodelan proses bisnis, pemodelan data, serta penyusunan Software Requirements Specification (SRS) secara terstruktur dan profesional.',
    certDomisiliLabel: 'Domisili',
    contactTitle: 'Hubungi Saya',
    contactText: 'Saya terbuka untuk peluang kerja sebagai Quality Assurance (QA Tester), Junior System Analyst, maupun IT Support. Silakan hubungi saya untuk mendiskusikan posisi dan kebutuhan tim.',
    emailLabel: 'Email Utama (Salin)',
    whatsappLabel: 'WhatsApp Langsung',
    linkedinLabel: 'LinkedIn Resmi',
    credentialBadge: 'KREDENSIAL',
    credentialTitle: 'Sertifikasi & Pelatihan',

    caseProjectSibansar: 'SIBANSAR',
    caseProjectSipostam: 'SIPOSTAM',
    caseAllProjects: 'Semua proyek',
    caseOfficialCredentials: 'Kredensial Resmi:',
    caseActivity: 'Kegiatan',
    caseInstitution: 'Instansi',
    caseRole: 'Peran Saya',
    casePeriod: 'Periode',
    caseActivityValueSibansar: 'Magang & Tugas Akhir D3',
    caseInstitutionValueSibansar: 'Dinas Perkebunan Prov. Jabar',
    caseRoleValueSibansar: 'System Analyst, QA Tester & IT Support',
    casePeriodValueSibansar: 'Maret – Juni 2026',
    caseActivityValueSipostam: 'Proyek Akademik II (Scrum)',
    caseInstitutionValueSipostam: 'Toko Alam Tembakau',
    caseRoleValueSipostam: 'System Analyst, QA Tester & IT Support',
    casePeriodValueSipostam: 'Februari – Juli 2025',
    caseTools: 'Tools:',
    caseInsideStudy: 'DI DALAM STUDI KASUS',
    caseProjectContext: 'Konteks proyek',
    caseAllUsers: 'Semua Pengguna',
    caseFarmerGroup: 'Kelompok Tani',
    caseHeadOfDivision: 'Kepala Bidang',
    caseOperatorKabid: 'Operator & Kabid',
    caseOperatorDinas: 'Operator Dinas',
    casePlantationOffice: 'Dinas Perkebunan',
    caseLoginUserTitle: 'Antarmuka Login User (Disbun Jabar)',
    caseLoginUserSub: 'Autentikasi aman multi-peran dengan identitas resmi Dinas Perkebunan',
    caseRegisterTitle: 'Antarmuka Register Kelompok Tani',
    caseRegisterSub: 'Pendaftaran mandiri kelompok tani dengan validasi legalitas dan NIK',
    caseKabidTitle: 'Dasbor Kepala Bidang (Kabid)',
    caseKabidSub: 'Grafik ringkasan keputusan, jumlah menunggu approval, dan aksi cepat',
    caseProposalTitle: 'Halaman Kelola Pengajuan Bantuan',
    caseProposalSub: 'Tabel rekapitulasi proposal masuk, filter status, dan disposisi berkas',
    caseOperatorTitle: 'Dasbor Operator Dinas',
    caseOperatorSub: 'Monitoring berkas proposal baru dan validasi persyaratan administrasi',
    caseFarmerDashboardTitle: 'Dasbor Kelompok Tani',
    caseFarmerDashboardSub: 'Formulir pengajuan proposal mandiri dan pelacakan status bantuan',
    caseReportTitle: 'Halaman Kelola Laporan',
    caseReportSub: 'Cetak berita acara serah terima dan rekapitulasi penyaluran bantuan sarpras',
    caseNotificationTitle: 'Pusat Notifikasi Real-Time',
    caseNotificationSub: 'Pemberitahuan otomatis saat proposal disetujui, ditolak, atau perlu revisi',
    caseBpmnTitleSibansar: 'BPMN / Alur Proses Kerja',
    caseBpmnSubSibansar: 'Dokumen proses kerja yang menunjukkan urutan aktivitas dari pengajuan hingga keputusan.',
    caseStatusDecisionTitle: 'Status & Keputusan',
    caseActivityDiagramTitle: 'Activity Diagram Alur Pengajuan & Verifikasi',
    caseActivityDiagramSub: 'Memodelkan transisi status pengajuan dari Petani → Operator → Kepala Bidang',
    caseImpactTitleSibansar: 'Hasil Pekerjaan & Dampak Nyata',
    caseImpactSummarySibansar: 'Implementasi SIBANSAR berhasil menyelesaikan permasalahan operasional pengelolaan bantuan fisik sarana prasarana di Dinas Perkebunan Provinsi Jawa Barat secara signifikan.',
    caseImpact1TitleSibansar: 'Efisiensi Verifikasi 90%',
    caseImpact1TextSibansar: 'Waktu pemrosesan dan verifikasi kelengkapan proposal dipangkas dari 5–7 hari kerja menjadi hitungan menit via aplikasi web.',
    caseImpact2TitleSibansar: 'Zero Document Loss',
    caseImpact2TextSibansar: 'Seluruh dokumen proposal terarsip secara digital dalam basis data terpusat, mengeliminasi risiko berkas fisik hilang atau rusak.',
    caseImpact3TitleSibansar: 'Transparansi Penyaluran',
    caseImpact3TextSibansar: 'Pimpinan dinas dapat memantau sebaran bantuan secara real-time dan kelompok tani mendapatkan kepastian status proposal mereka.',
    homeProofLink: 'Lihat bukti ↗',
    caseNeedsAnalysis: '01 Analisis Kebutuhan',
    caseBusinessProcess: '02 Pemodelan Proses Bisnis',
    caseSystemDesign: '03 Perancangan Sistem',
    caseImplementation: '04 Implementasi Aplikasi',
    caseTestingDoc: '05 Dokumentasi & QA',
    caseResults: 'Hasil pekerjaan',
    caseViewDetail: 'Lihat lebih detail',
    caseInternshipCertSibansar: 'Surat Keterangan Magang PKL (PDF) ↗',
    caseBvaOfficialDocSibansar: 'Dokumen Uji BVA Resmi (PDF) ↗',
    caseBvaEvidenceBtnSibansar: 'Lihat Bukti Dokumentasi & QA (PDF) ↗',
    caseUiSub1Sibansar: 'Bukti visual dari dokumen laporan proyek tentang proses kerja sistem.',
    caseUiSub2Sibansar: 'Diagram aktivitas yang mencerminkan alur validasi, pengecekan, dan keputusan kerja.',
    caseProjectGoalSipostam: 'Solusi Sistem:',
    caseProjectGoalTextSipostam: 'Membangun aplikasi web POS terpadu dengan antarmuka kasir cepat (shortcut keyboard), auto-deduct inventori stok, pencatatan mutasi barang supplier, dan dashboard analitik laba rugi otomatis.',
    caseProblemBackgroundSipostam: 'Latar Belakang Permasalahan Retail',
    caseProblemBackgroundTextSipostam: 'Toko Alam Tembakau melayani transaksi penjualan produk tembakau olahan, rokok, cengkeh, papir, dan aksesoris lainnya. Sebelumnya, seluruh aktivitas transaksi dicatat secara konvensional pada nota kertas manual dan buku kas harian.',
    caseDesignRelationSipostam: 'Kaitan dengan rancangan:',
    caseDesignRelationTextSipostam: 'Pemilik toko menginginkan alur kasir yang seringkas mungkin tanpa reload halaman, sehingga modul kasir dirancang dengan teknologi AJAX / JavaScript agar penambahan item ke keranjang belanja bersifat instan.',
    caseTableHintSipostam: 'Geser tabel ke samping untuk melihat detail wewenang & hak akses',
    caseTableHintFullSipostam: 'Geser tabel ke samping untuk melihat seluruh parameter pengujian',
    caseSidebarProcessSipostam: '02 Alur Kasir & Inventori',
    caseDocsQaTitleSipostam: 'Dokumentasi & Strategi Pengujian Mutu (QA Testing)',
    caseQaEvidenceBtnSipostam: 'Lihat Bukti Dokumentasi & QA (PDF) ↗',
    caseDocsQaDescSipostam: 'Menjamin keandalan fungsionalitas aplikasi kasir POS, sinkronisasi stok otomatis, dan akurasi laporan laba kotor menggunakan teknik Black Box Testing menyeluruh pada 9 skenario use case utama (Tabel 6.1 s/d Tabel 6.10) sesuai Dokumen Perancangan Perangkat Lunak (DPPL).',
    caseDocsQaBtnSipostam: 'Lihat Bukti Dokumentasi & QA (PDF) ↗',
    caseBlackBoxEvidenceTitleSipostam: 'Dokumen Bukti Pengujian Black Box Testing',
    caseBlackBoxEvidenceSubSipostam: 'Dokumentasi Perangkat Lunak Bab 6: Pengujian Aplikasi Point of Sales (POS) Toko Alam Tembakau · ULBI.',
    caseImpactTitleSipostam: 'Hasil Pekerjaan & Dampak Bisnis',
    caseImpactSummarySipostam: 'Implementasi SIPOSTAM berhasil mentransformasi tata kelola operasional Toko Alam Tembakau menjadi lebih cepat, akurat, dan menguntungkan.',
    caseImpact1TitleSipostam: 'Transaksi Cepat <15 Detik',
    caseImpact1TextSipostam: 'Pelayanan kasir berlangsung kurang dari 15 detik per transaksi dengan nota struk digital tercetak rapi.',
    caseImpact2TitleSipostam: 'Akurasi Stok 100%',
    caseImpact2TextSipostam: 'Mengeliminasi selisih stok fisik tembakau di gudang berkat pencatatan mutasi masuk dan keluar yang tersinkronisasi otomatis.',
    caseImpact3TitleSipostam: 'Analitik Laba Real-Time',
    caseImpact3TextSipostam: 'Pemilik toko dapat memantau perputaran omset harian kapan saja tanpa perlu merekap nota manual pada malam hari.',
    caseViewDetailEN: 'View more detail',
    caseMetricRequirements: 'Persyaratan fungsional',
    caseMetricRoles: 'Hak akses peran (RBAC)',
    caseMetricErds: 'Entitas basis data (ERD)',
    caseMetricTestingPassed: 'Pengujian fungsional lolos',
    caseAllProjectsArrow: '← Semua proyek',
    caseConceptTitle: 'Latar Belakang Permasalahan',
    caseProblemBackgroundTextSibansar: 'Distribusi bantuan sarana prasarana perkebunan kepada ratusan kelompok tani di seluruh Jawa Barat sebelumnya dilakukan secara manual. Berkas proposal berbentuk dokumen cetak fisik yang dikirim langsung ke kantor, sehingga memunculkan berbagai inefisiensi operasional.',
    caseAnalysisTagBusinessProblem: 'Business Problem Analysis',
    caseAnalysisTagRequirementsElicitation: 'Requirements Elicitation',
    caseAnalysisTagPieces: 'PIECES Framework',
    caseAnalysisTagFr: 'Functional Requirements (14 FR)',
    caseRoleAdmin: 'Admin',
    caseRoleAdminDesc: 'Manajemen akun pengguna, pemeliharaan master data sarpras, dan pengaturan hak akses.',
    caseRoleAccessFull: 'Full Access',
    caseRoleFarmerGroup: 'Kelompok Tani',
    caseRoleFarmerGroupDesc: 'Registrasi mandiri, submit proposal bantuan, upload syarat legalitas, tracking status pengajuan.',
    caseRoleAccessTracking: 'Pengajuan & Tracking',
    caseRoleOperatorDinas: 'Operator Dinas',
    caseRoleOperatorDinasDesc: 'Verifikasi kelengkapan berkas fisik & digital, validasi lapangan, dan pembuatan rekomendasi teknis.',
    caseRoleAccessVerification: 'Verifikasi & Rekomendasi',
    caseRoleKabid: 'Kepala Bidang (Kabid)',
    caseRoleKabidDesc: 'Meninjau berkas rekomendasi, validasi final persetujuan/penolakan (approval/reject), monitoring dasbor.',
    caseRoleAccessApproval: 'Approval & Monitoring',
    caseBpmnAsIs: 'BPMN As-Is (Manual)',
    caseBpmnToBe: 'BPMN To-Be (Terpadu)',
    caseBpmnRules: 'Business Rules & Workflow',
    caseBpmnUml: 'BPMN / UML',
    caseDiagramUseCase: 'Use Case Diagram',
    caseDiagramClass: 'Class Diagram (12 Entities)',
    caseDiagramSequence: 'Sequence Diagram',
    caseBvaBadge: '28 Test Cases',
    caseBvaHeaderId: 'ID Test Case',
    caseBvaHeaderModule: 'Modul / Fitur',
    caseBvaHeaderScenario: 'Skenario & Parameter Boundary (BVA)',
    caseBvaHeaderExpected: 'Hasil yang Diharapkan',
    caseBvaHeaderStatus: 'Status QA',
    caseBvaRow1Id: 'PDHUPL-1.a',
    caseBvaRow1Module: 'BVA Register',
    caseBvaRow1Scenario: 'Password < batas minimum (Password="passwor", 7 karakter).',
    caseBvaRow1Expected: 'Sistem menampilkan pesan error "Password minimal 8 karakter" dan pendaftaran ditolak.',
    caseBvaRow1Status: '✓ Lolos Uji',
    caseBvaRow2Id: 'PDHUPL-1.c',
    caseBvaRow2Module: 'BVA Register',
    caseBvaRow2Scenario: 'Kode Kelompok > batas maksimal (Input kode kelompok 51 karakter).',
    caseBvaRow2Expected: 'Sistem menampilkan pesan error "Kode Kelompok maksimal 50 karakter" dan pendaftaran gagal.',
    caseBvaRow2Status: '✓ Lolos Uji',
    caseBvaRow3Id: 'PDHUPL-2.a',
    caseBvaRow3Module: 'BVA Login',
    caseBvaRow3Scenario: 'Email < batas minimum format (Email="a@b", 3 karakter).',
    caseBvaRow3Expected: 'Sistem menampilkan pesan "Format email tidak valid" dan proses autentikasi gagal.',
    caseBvaRow3Status: '✓ Lolos Uji',
    caseBvaRow4Id: 'PDHUPL-2.c',
    caseBvaRow4Module: 'BVA Login (RBAC)',
    caseBvaRow4Scenario: 'Email dan password valid (operator@disbun.test).',
    caseBvaRow4Expected: 'Sistem berhasil login dan otomatis mengarahkan ke dasbor peran pengguna masing-masing.',
    caseBvaRow4Status: '✓ Lolos Uji',
    caseBvaRow5Id: 'PDHUPL-3.b',
    caseBvaRow5Module: 'BVA Kelola User',
    caseBvaRow5Scenario: 'Nama user > batas maksimal (Input nama 51 karakter).',
    caseBvaRow5Expected: 'Sistem menampilkan pesan "Nama maksimal 50 karakter" dan penambahan user gagal.',
    caseBvaRow5Status: '✓ Lolos Uji',
    caseBvaRow6Id: 'PDHUPL-4.b',
    caseBvaRow6Module: 'BVA Pengajuan',
    caseBvaRow6Scenario: 'Jumlah diminta < batas minimum (Input jumlah = 0 unit).',
    caseBvaRow6Expected: 'Sistem menampilkan pesan "Jumlah diminta minimal 1" dan pembuatan pengajuan gagal.',
    caseBvaRow6Status: '✓ Lolos Uji',
    caseBvaRow7Id: 'PDHUPL-4.c',
    caseBvaRow7Module: 'BVA Pengajuan',
    caseBvaRow7Scenario: 'Jumlah diminta > batas maksimal (Input jumlah = 10001 unit).',
    caseBvaRow7Expected: 'Sistem menampilkan pesan "Jumlah diminta maksimal 10000 unit" dan pengajuan ditolak.',
    caseBvaRow7Status: '✓ Lolos Uji',
    caseBvaRow8Id: 'PDHUPL-4.d',
    caseBvaRow8Module: 'BVA Upload Surat',
    caseBvaRow8Scenario: 'Ukuran file surat proposal > batas maksimal (Upload berat.pdf ukuran 2049 KB).',
    caseBvaRow8Expected: 'Sistem memblokir unggahan dengan pesan "Ukuran file maksimal 2048 KB".',
    caseBvaRow8Status: '✓ Lolos Uji',
    caseBvaRow9Id: 'PDHUPL-5.a',
    caseBvaRow9Module: 'BVA Verifikasi',
    caseBvaRow9Scenario: 'Alasan penolakan > batas maksimal (Input alasan penolakan 1001 karakter).',
    caseBvaRow9Expected: 'Sistem menampilkan pesan "Alasan penolakan maksimal 1000 karakter" dan verifikasi gagal.',
    caseBvaRow9Status: '✓ Lolos Uji',
    caseBvaRow10Id: 'PDHUPL-5.c',
    caseBvaRow10Module: 'BVA Upload BAST',
    caseBvaRow10Scenario: 'Ukuran file BAST > batas maksimal (Upload file ukuran 5121 KB).',
    caseBvaRow10Expected: 'Sistem menampilkan pesan "Ukuran file BAST maksimal 5120 KB" dan unggah BAST gagal.',
    caseBvaRow10Status: '✓ Lolos Uji',
    caseBvaRow11Id: 'PDHUPL-6.a',
    caseBvaRow11Module: 'BVA Approval Kabid',
    caseBvaRow11Scenario: 'Kepala Bidang menekan button Setujui Pengajuan (semua parameter valid).',
    caseBvaRow11Expected: 'Sistem berhasil mengubah status pengajuan menjadi "Disetujui Kabid".',
    caseBvaRow11Status: '✓ Lolos Uji',
    caseBvaRow12Id: 'PDHUPL-7.a',
    caseBvaRow12Module: 'BVA Filter Laporan',
    caseBvaRow12Scenario: 'Tanggal Akhir < Tanggal Awal (Contoh: Awal 31/01/2025, Akhir 30/01/2025).',
    caseBvaRow12Expected: 'Sistem menampilkan pesan "Tanggal akhir harus lebih besar atau sama dengan tanggal awal".',
    caseBvaRow12Status: '✓ Lolos Uji',
    caseProjectGoal: 'Solusi Sistem Terpadu:',
    caseProjectGoalSibansar: 'Solusi Sistem Terpadu:',
    caseProjectGoalTextSibansar: 'Merancang dan membangun aplikasi SIBANSAR dengan mekanisme alur kerja berjenjang (multi-level approval), audit trail berkas, dan notifikasi otomatis agar proses penyaluran bantuan menjadi akuntabel dan transparan.',
    caseDesignRelationSibansar: 'Kaitan dengan rancangan:',
    caseDesignRelationTextSibansar: 'Hasil temuan masalah dokumen fisik tercecer menjadi landasan perumusan modul pengunggahan berkas digital mandiri dengan validasi ekstensi PDF/JPG dan pembatasan ukuran berkas.',
    caseTableHintSibansar: 'Geser tabel ke samping untuk melihat detail peran & hak akses',
    caseActorRoleSibansar: 'Aktor (Peran)',
    caseResponsibilitySibansar: 'Tanggung Jawab Utama dalam Sistem',
    caseAccessRightsSibansar: 'Hak Akses (RBAC)',
    caseDocsQaTitleSibansar: 'Dokumentasi & Strategi Pengujian Mutu (QA Testing)',
    caseDocsQaDescSibansar: 'Menjamin keandalan fungsionalitas, validasi input batas nilai (boundary), dan keamanan hak akses sistem melalui pengujian Boundary Value Analysis (BVA) dan Black Box Testing terstruktur pada 7 modul utama sesuai Dokumen Pembangunan Perangkat Lunak (DPPL) / Bab V Laporan Tugas Akhir.',
    caseBvaEvidenceTitleSibansar: 'Dokumen Bukti Pengujian Boundary Value Analysis (BVA)',
    caseBvaEvidenceSubSibansar: 'Laporan Tugas Akhir Bab V: Pengujian Sistem Informasi SIBANSAR (Tabel V.2 s/d Tabel V.8) · ULBI & Dinas Perkebunan Jawa Barat.',
    caseTableHintFullSibansar: 'Geser tabel ke samping untuk melihat seluruh parameter pengujian',
    caseHeroTitleSibansar: 'SIBANSAR — Sistem Informasi Bantuan Sarana Prasarana',
    caseHeroDescSibansar: 'Sistem digitalisasi pengajuan bantuan sarana prasarana perkebunan terintegrasi dengan validasi bertahap untuk Dinas Perkebunan Provinsi Jawa Barat.',
    caseProblem1Title: 'Dokumen Fisik Tercecer',
    caseProblem1Text: 'Tumpukan proposal kertas di meja kerja rentan hilang, rusak, atau terselip saat perpindahan tahap verifikasi antar-seksi.',
    caseProblem2Title: 'Disposisi Tidak Transparan',
    caseProblem2Text: 'Kelompok tani kesulitan mengetahui apakah proposal sedang diperiksa operator, menunggu verifikasi lapangan, atau disposisi Kepala Bidang.',
    caseProblem3Title: 'Duplikasi Penerima Bantuan',
    caseProblem3Text: 'Sulit mendeteksi apakah suatu kelompok tani telah menerima jenis bantuan yang sama pada tahun anggaran berjalan.',
    caseCardTitle1: 'Alur Proses Bisnis',
    caseCardTitle2: 'Aktivitas & Keputusan',
    caseAnalysisTitleSibansar: 'Analisis Kebutuhan Sistem',
    caseAnalysisDescSibansar: 'Melakukan identifikasi masalah dan elisitasi kebutuhan melalui wawancara mendalam bersama operator seksi sarpras dan observasi alur disposisi dokumen di Dinas Perkebunan Provinsi Jawa Barat.',
    caseBusinessTitleSibansar: 'Pemodelan Proses Bisnis (BPMN)',
    caseBusinessDescSibansar: 'Memetakan proses bisnis lama (As-Is) yang lambat dan memakan waktu berhari-hari, kemudian merancang alur proses bisnis baru (To-Be) menggunakan standar BPMN 2.0 untuk memastikan alur verifikasi berkas berjalan otomatis dan berurutan.',
    caseDesignTitleSibansar: 'Perancangan Sistem & Basis Data (UML & ERD)',
    caseDesignDescSibansar: 'Menyusun spesifikasi teknis mencakup Use Case Diagram untuk menggambarkan interaksi 4 aktor, Sequence Diagram untuk memvalidasi alur pesan antar objek, serta Class Diagram relasi entitas basis data MySQL.',
    caseUseCaseDiagramTitleSibansar: 'Use Case Diagram (4 Aktor Utama)',
    caseUseCaseDiagramSubSibansar: 'Memetakan 14 fungsi utama sistem ke masing-masing hak akses pengguna',
    caseClassDiagramTitleSibansar: 'Class Diagram & Skema Relasional Basis Data',
    caseClassDiagramSubSibansar: 'Struktur tabel proposal, pengguna, persyaratan berkas, disposisi, dan audit log',
    caseImplementTitleSibansar: 'Implementasi Antarmuka Sistem Nyata',
    caseImplementDescSibansar: 'Berikut adalah tangkapan layar antarmuka sistem web SIBANSAR yang telah selesai dibangun dan diimplementasikan pada lingkungan Dinas Perkebunan Provinsi Jawa Barat. Seluruh antarmuka telah disesuaikan dengan identitas resmi instansi.',
    caseHeroTitleSipostam: 'SIPOSTAM — Sistem Informasi Point of Sales Toko Alam Tembakau',
    caseHeroDescSipostam: 'Sistem kasir cepat berbasis web terpadu dengan sinkronisasi inventori stok otomatis, modul pembelian supplier, dan analitik laporan laba/rugi harian.',
    caseProblem1TitleSipostam: 'Antrean Kasir Lambat',
    caseProblem1TextSipostam: 'Perhitungan total belanja menggunakan kalkulator fisik rawan salah hitung saat jam sibuk toko, memperlambat pelayanan kasir.',
    caseProblem2TitleSipostam: 'Selisih Stok Fisik',
    caseProblem2TextSipostam: 'Tidak adanya kartu stok otomatis mengakibatkan jumlah fisik barang di etalase kerap berbeda dengan catatan buku.',
    caseProblem3TitleSipostam: 'Rekap Laba Rugi Manual',
    caseProblem3TextSipostam: 'Pemilik toko harus menghitung nota fisik satu per satu setiap malam untuk mengetahui total omset kotor dan laba bersih harian.',
    caseCardTitle1Sipostam: 'Alur Proses Penjualan',
    caseCardTitle2Sipostam: 'Proses Operasional',
    caseSupportDocSubSipostam: 'Dokumen pendukung yang menunjukkan aktivitas utama dalam proses bisnis toko dan kelola laporan.',
    caseTestCaseHeaderSipostam: 'ID Test Case',
    caseUseCaseHeaderSipostam: 'Use Case Diuji',
    caseProcedureHeaderSipostam: 'Prosedur & Skenario Black Box',
    caseExpectedOutputHeaderSipostam: 'Keluaran yang Diharapkan',
    caseStatusHeaderSipostam: 'Status QA',
    caseLoginValidationSipostam: 'Validasi Login',
    caseLoginScenarioSipostam: 'Uji login dengan input kosong, kredensial tidak valid, dan kredensial valid (Kasir & Owner).',
    caseLoginExpectedSipostam: 'Muncul pesan kesalahan pada data tidak valid; berhasil login dan redirect ke dasbor pada akun valid.',
    caseManageUserSipostam: 'Kelola User',
    caseManageUserScenarioSipostam: 'Uji penambahan akun kasir baru, update data profil, dan penghapusan akun.',
    caseManageUserExpectedSipostam: 'Sistem menampilkan pesan sukses, data pengguna baru tersimpan dan terenkripsi pada database.',
    caseManageSupplierSipostam: 'Kelola Supplier',
    caseManageSupplierScenarioSipostam: 'Insert data pemasok tembakau dengan format lengkap dan valid.',
    caseManageSupplierExpectedSipostam: 'Muncul notifikasi berhasil, daftar vendor/supplier terdaftar pada master data.',
    caseManageProductStockSipostam: 'Kelola Produk & Stok',
    caseManageProductStockScenarioSipostam: 'Input produk baru dengan semua field kosong vs data lengkap dan valid.',
    caseManageProductStockExpectedSipostam: 'Form validasi memblokir input kosong; produk baru tersimpan lengkap dengan harga modal dan jual.',
    caseManageCategorySipostam: 'Kelola Kategori',
    caseManageCategoryScenarioSipostam: 'Tambah kategori rokok/tembakau dan update data klasifikasi barang.',
    caseManageCategoryExpectedSipostam: 'Kategori berhasil ditambahkan dan langsung terhubung dengan katalog produk kasir.',
    casePurchaseTransactionSipostam: 'Transaksi Pembelian',
    casePurchaseTransactionScenarioSipostam: 'Input transaksi faktur pembelian produk dari supplier dan verifikasi fungsi form.',
    casePurchaseTransactionExpectedSipostam: 'Data faktur tersimpan, pengeluaran modal tercatat, dan stok barang bertambah secara otomatis.',
    caseSalesTransactionSipostam: 'Transaksi Penjualan (Kasir)',
    caseSalesTransactionScenarioSipostam: 'Input transaksi kasir cepat, kalkulasi total belanja & kembalian, dan cetak struk nota.',
    caseSalesTransactionExpectedSipostam: 'Transaksi terekam akurat, struk thermal tercetak rapi, dan mutasi stok berkurang seketika.',
    caseFinancialReportSipostam: 'Laporan Keuangan',
    caseFinancialReportScenarioSipostam: 'Generate laporan rekapitulasi transaksi omset penjualan dan filter periode tanggal.',
    caseFinancialReportExpectedSipostam: 'Laporan tergenerate dengan perhitungan laba kotor, total omset, dan modal beli akurat 100%.',
    caseStatusAcceptedSipostam: '✓ Diterima / Lolos',
    caseAnalysisTitleSipostam: 'Analisis Kebutuhan & Pendekatan Scrum',
    caseAnalysisDescSipostam: 'Pengembangan proyek dilakukan menggunakan metodologi Agile Scrum melalui tahapan sprint planning, perumusan user stories, dan evaluasi sprint review bersama pemilik toko untuk memastikan kebutuhan transaksi kasir terpenuhi dengan optimal.',
    caseBusinessTitleSipostam: 'Alur Proses Bisnis Transaksi & Inventori Otomatis',
    caseBusinessDescSipostam: 'Merancang alur proses transaksi POS di mana setiap kali kasir menyelesaikan transaksi pembayaran dan mencetak struk belanja, kuantitas stok barang di database otomatis terpotong sesuai unit yang dibeli (stock movement).',
    caseDesignTitleSipostam: 'Perancangan Arsitektur Sistem & Basis Data',
    caseDesignDescSipostam: 'Merancang pemodelan Use Case Diagram untuk interaksi peran Kasir dan Owner, serta skema basis data relasional yang menghubungkan tabel produk, kategori, stok, supplier, transaksi penjualan, dan detail nota.',
    caseTransactionTitleSipostam: 'Modul Transaksi Kasir POS Cepat',
    caseTransactionSubSipostam: 'Keranjang belanja real-time, pencarian instan produk, kalkulasi diskon & kembalian',
    caseAdminDashboardTitleSipostam: 'Dasbor Utama Administrator (Owner)',
    caseAdminDashboardSubSipostam: 'Monitoring omset harian, jumlah transaksi, total keuntungan, dan peringatan stok minimum',
    caseCashierDashboardTitleSipostam: 'Dasbor Kasir Harian',
    caseCashierDashboardSubSipostam: 'Ringkasan transaksi shift berjalan dan tombol cepat masuk ke modul kasir',
    casePurchaseTitleSipostam: 'Kelola Pembelian Produk dari Supplier',
    casePurchaseSubSipostam: 'Pencatatan pasokan tembakau masuk, harga modal beli, dan penambahan kuantitas stok',
    caseProductInventoryTitleSipostam: 'Kelola Master Produk & Inventori',
    caseProductInventorySubSipostam: 'Manajemen multi-kategori (tembakau, papir, cerutu), satuan ukuran, harga beli & jual',
    caseUserManagementTitleSipostam: 'Kelola Akun Pengguna & Wewenang',
    caseUserManagementSubSipostam: 'Pengaturan kredensial akun kasir, pergantian password, dan pemisahan hak akses',
    caseBusinessRuleTitleSipostam: 'Business Rule Kunci:',
    caseBusinessRuleTextSipostam: 'Transaksi kasir tidak dapat diproses apabila stok produk bernilai nol atau lebih kecil dari jumlah yang dimasukkan ke keranjang belanja, mencegah terjadinya negative stock.',
    caseFlowchartCashierTitleSipostam: 'Flowchart Transaksi Kasir',
    caseFlowchartCashierSubSipostam: 'Diagram proses utama dari customer order, validasi stok, hingga pencetakan nota.',
    caseFlowchartInventoryTitleSipostam: 'Flowchart Stok & Laporan',
    caseFlowchartInventorySubSipostam: 'Bukti visual proses pengecekan ketersediaan stok, mutasi data, dan laporan penjualan.',
    caseERDTitleSipostam: 'Skema Pemodelan Basis Data Terdistribusi',
    caseERDSubSipostam: 'Relasi referensial antara entitas produk, transaksi harian, dan mutasi stok',
    caseImplementTitleSipostam: 'Implementasi Antarmuka Sistem Nyata',
    caseImplementDescSipostam: 'Berikut adalah tangkapan layar antarmuka sistem nyata SIPOSTAM yang telah diuji dan dioperasikan pada Toko Alam Tembakau:'
  },
  en: {
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Core Skills',
    achievements: 'Achievements',
    achievementBadge: 'TRACK RECORD',
    achievementTitle: 'Achievements & Contributions',
    certifications: 'Certifications',
    contact: 'Contact',
    portfolioTag: 'PORTFOLIO · SYSTEM ANALYSIS & QUALITY ASSURANCE',
    heroSub: 'D3 Informatics Management Graduate',
    heroRole: 'System Analyst, QA Tester & IT Support',
    heroCertTitle: 'System Analyst · Certified',
    heroCertSuffix: ' · LSP ULBI · BNSP',
    heroBio: 'Internship experience at the West Java Provincial Plantation Office and academic projects in functional testing (Black Box & Boundary Value), needs analysis, business process modeling (BPMN), integrated system design, and Laravel-based web development.',
    explore: 'Explore Projects',
    viewCv: 'View CV (PDF)',
    institution: 'Affiliations & Institutions:',

    profileBadge: 'PROFILE',
    aboutTitle: 'About Me',
    aboutText1: 'Graduate of the D3 Informatics Management program at Universitas Logistik dan Bisnis Internasional (ULBI), Bandung (2023–2026). I gained internship experience at the West Java Provincial Plantation Office in system needs analysis, business process modeling, application functional testing, and technical documentation (SRS).',
    aboutText2: 'Detail-oriented, analytical, quick to learn, and highly interested in building a career in Quality Assurance (QA Tester) and System Analysis.',
    statGpa: 'GPA of D3 Informatics Management',
    statProjects: 'Main System Projects',
    statTesting: 'Functional Testing Passed',
    focusBadge: 'CORE COMPETENCIES',
    focusTitle: 'Core Focus',
    reqLabel: 'Requirements Analysis & Documentation',
    reqText: 'Functional and non-functional needs elicitation, user stories, and SRS preparation.',
    qaLabel: 'Functional Testing & QA',
    qaText: 'Black Box Testing, Boundary Value Analysis, Test Case Design, and defect/bug tracking.',
    bpmLabel: 'Business Process & UML Modeling',
    bpmText: 'BPMN, Use Case, Activity Diagram, Sequence Diagram, and Class Diagram.',
    webLabel: 'Web Development & Database',
    webText: 'Development of web applications based on Laravel & MySQL with Role-Based Access Control (RBAC).',
    supportLabel: 'IT Support & Troubleshooting',
    supportText: 'Software installation, basic device configuration, basic system/network troubleshooting, and end-user support (helpdesk).',

    experienceBadge: 'EXPERIENCE',
    experienceTitle: 'Work Experience',
    expOneTitle: 'System Analyst & Web Developer (Internship)',
    expOneCompany: 'West Java Provincial Plantation Office',
    expOneDesc: 'Participated in user needs analysis, business process modeling (BPMN) and UML, Laravel & MySQL application development, functional testing (Black Box testing), and preparation of technical system documentation for SIBANSAR.',
    expOneLink: 'See work result (SIBANSAR) →',
    expOneCert: 'View Internship Certificate (PDF) ↗',
    expTwoTitle: 'Organization Treasurer',
    expTwoCompany: 'Informatics Management Student Association (HMMI) ULBI',
    expTwoDesc: 'Managed the organization’s cash inflow and outflow, prepared the Budget Plan (RAB), documented all financial transactions, and compiled final financial accountability reports transparently and accountably.',
    expTwoCert: 'View HMMI Certificate (PDF) ↗',

    portfolioBadge: 'PORTFOLIO',
    portfolioTitle: 'Featured Projects',
    projectOneMeta: 'Internship & Final Project · 2026',
    projectOneBrandSub: 'Internship · Mar–Jun 2026',
    projectOneRoleText: 'System Analyst, QA Tester & Web Developer',
    projectOneInstansiText: 'West Java Provincial Plantation Office',
    projectOneSummary: 'Physical proposal recording and approval disposition for infrastructure assistance were scattered and prone to loss and difficulty in monitoring. This project digitized the aid flow into a multi-role web system (Admin, Farmer, Operator, Head of Division).',
    projectTwoMeta: 'Academic Project II · 2025',
    projectTwoBrandSub: 'Academic Project II (Scrum) · 2025',
    projectTwoRoleText: 'System Analyst, QA Tester & Web Developer',
    projectTwoInstansiText: 'Toko Alam Tembakau (Retail Tobacco)',
    projectTwoSummary: 'Manual cashier recording and stock management caused inventory mismatches and difficulty calculating profit and loss. A fast cashier application was built with automatic stock synchronization and sales analytics reporting.',
    readMore: 'Read full case study →',
    qaDocs: 'QA Evidence / BVA (PDF) ↗',
    qaDocsPos: 'QA Evidence / Black Box (PDF) ↗',
    projectToolsLabel: 'TOOLS',
    tagBva: 'BVA (28 Test Cases)',
    tagRequirementsAnalysis: 'Requirements Analysis',
    tagBpmn: 'BPMN As-Is & To-Be',
    tagBlackBox: 'Black Box Testing',
    tagUml: 'UML & Data Modeling',
    tagRbac: 'RBAC 4 Roles',
    tagAgileScrum: 'Agile Scrum',
    tagPosFast: 'Fast POS Cashier',
    tagInventory: 'Automatic Stock Inventory',
    tagProfit: 'Profit & Loss Report',
    certSmallMetaEnterprise: 'Enterprise Systems & ERP',
    certSmallMetaEnterpriseProg: 'Enterprise Programming',
    certSmallMetaVocational: 'Vocational Competency Test',
    certOpenPdf: 'Open PDF ↗',

    skillsBadge: 'COMPETENCIES',
    skillsTitle: 'Core Skills',
    skillReqTitle: 'Requirements & System Analysis',
    skillReqDesc: 'Identifying user needs, formulating business rules, and mapping As-Is and To-Be processes.',
    skillTestingTitle: 'Software Testing & QA Tester',
    skillTestingDesc: 'Ensuring software quality through structured functional testing and defect documentation.',
    skillDevTitle: 'Web Development & Database',
    skillDevDesc: 'Building efficient backend architecture, relational databases, and web interfaces.',
    collabTitle: 'Collaborative & Managerial Skills',
    collab1Label: 'Needs Communication:',
    collab1Text: 'Interviews, discussions, and direct observation with users and system stakeholders.',
    collab2Label: 'Problem Solving:',
    collab2Text: 'PIECES, Ishikawa (Fishbone Diagram), and Five Whys methods to analyze root causes.',
    collab3Label: 'Teamwork & Methodology:',
    collab3Text: 'Application of Agile Scrum and Waterfall SDLC in team-based project work.',
    collab4Label: 'Financial Accountability:',
    collab4Text: 'Experience as Himpunan Treasurer in preparing budgets and financial responsibility reports (LPJ).',
    collab5Label: 'Accountability',
    collab5Text: 'Experienced in serving as treasurer in preparing budget plans and organizational accountability reports.',
    collab6Label: 'Adaptability & Rapid Learning',
    collab6Text: 'Quickly adapts to new tools, project needs, and changing work flows.',

    achievementBadge: 'TRACK RECORD',
    achievementTitle: 'Achievements & Contributions',
    achieveAcademic: 'ACADEMIC',
    achieveGovernment: 'GOVERNMENT INSTITUTION',
    achieveCampus: 'CAMPUS ORGANIZATION',
    achieveProfessional: 'PROFESSIONAL STANDARDIZATION',
    certLabelBNSP: 'LSP ULBI · BNSP',
    certLabelCompetent: 'Certified',
    certBnspTitle: 'System Analyst',
    certStatusVerified: '✓ Official Certification Verified',
    certLspBrand: 'LSP ULBI',
    certBspIssuer: 'National Professional Certification Agency (BNSP) · LSP ULBI · October 2026',
    certBspDesc: 'Professional System Analyst certification validating competency in requirements analysis, business process modeling, data modeling, and structured Software Requirements Specification (SRS) preparation.',
    certDomisiliLabel: 'Residence',
    contactTitle: 'Contact Me',
    contactText: 'I am open to job opportunities as a Quality Assurance (QA Tester), Junior System Analyst, or IT Support. Please contact me to discuss positions and team needs.',
    emailLabel: 'Primary Email (Copy)',
    whatsappLabel: 'WhatsApp Direct',
    linkedinLabel: 'Official LinkedIn',
    credentialBadge: 'CREDENTIALS',
    credentialTitle: 'Certifications & Training',

    caseProjectSibansar: 'SIBANSAR',
    caseProjectSipostam: 'SIPOSTAM',
    caseAllProjects: 'All projects',
    caseOfficialCredentials: 'Official credentials:',
    caseInternshipCertSibansar: 'Internship Certificate (PDF) ↗',
    caseBvaOfficialDocSibansar: 'Official BVA Test Document (PDF) ↗',
    caseBvaEvidenceBtnSibansar: 'View QA Documentation Evidence (PDF) ↗',
    caseQaEvidenceBtnSipostam: 'View QA Documentation Evidence (PDF) ↗',
    homeProofLink: 'View proof ↗',
    caseActivity: 'Activity',
    caseInstitution: 'Institution',
    caseRole: 'My role',
    casePeriod: 'Period',
    caseActivityValueSibansar: 'D3 Internship & Final Project',
    caseInstitutionValueSibansar: 'West Java Plantation Office',
    caseRoleValueSibansar: 'System Analyst, QA Tester & IT Support',
    casePeriodValueSibansar: 'March – June 2026',
    caseActivityValueSipostam: 'Academic Project II (Scrum)',
    caseInstitutionValueSipostam: 'Toko Alam Tembakau',
    caseRoleValueSipostam: 'System Analyst, QA Tester & IT Support',
    casePeriodValueSipostam: 'February – July 2025',
    caseTools: 'Tools:',
    caseInsideStudy: 'IN THIS CASE STUDY',
    caseProjectContext: 'Project context',
    caseAccessRightsSibansar: 'Access Rights (RBAC)',
    caseActorRoleSibansar: 'Actor (Role)',
    caseResponsibilitySibansar: 'Main Responsibilities in the System',
    caseTableHintSibansar: 'Drag the table sideways to view role & access details',
    caseTableHintFullSibansar: 'Drag the table sideways to view the full testing parameters',
    caseDocsQaTitleSibansar: 'Documentation & Quality Testing Strategy (QA Testing)',
    caseDocsQaDescSibansar: 'Ensuring the reliability of functionality, boundary value validation, and system access security through structured Boundary Value Analysis (BVA) and Black Box Testing on 7 main modules according to the Software Development Document (DPPL) / Chapter V of the Final Report.',
    caseBvaEvidenceTitleSibansar: 'Boundary Value Analysis (BVA) Test Evidence Document',
    caseBvaEvidenceSubSibansar: 'Final Report Chapter V: SIBANSAR Information System Testing (Table V.2 to Table V.8) · ULBI & West Java Plantation Office.',
    caseUseCaseDiagramTitleSibansar: 'Use Case Diagram (4 Main Actors)',
    caseUseCaseDiagramSubSibansar: 'Mapping 14 main system functions to each user access right',
    caseClassDiagramTitleSibansar: 'Class Diagram & Database Relational Schema',
    caseClassDiagramSubSibansar: 'Structure of proposal tables, users, required document data, disposition, and audit log',
    caseAnalysisTagBusinessProblem: 'Business Problem Analysis',
    caseAnalysisTagRequirementsElicitation: 'Requirements Elicitation',
    caseAnalysisTagPieces: 'PIECES Framework',
    caseAnalysisTagFr: 'Functional Requirements (14 FR)',
    caseRoleAdmin: 'Admin',
    caseRoleAdminDesc: 'User account management, maintenance of infrastructure master data, and access rights configuration.',
    caseRoleAccessFull: 'Full Access',
    caseRoleFarmerGroup: 'Farmer Group',
    caseRoleFarmerGroupDesc: 'Self-registration, submitting aid proposals, uploading legality requirements, and tracking application status.',
    caseRoleAccessTracking: 'Submission & Tracking',
    caseRoleOperatorDinas: 'Agency Operator',
    caseRoleOperatorDinasDesc: 'Verification of physical and digital document completeness, field validation, and preparation of technical recommendations.',
    caseRoleAccessVerification: 'Verification & Recommendation',
    caseRoleKabid: 'Head of Division',
    caseRoleKabidDesc: 'Review recommendation files, final approval/rejection validation, and dashboard monitoring.',
    caseRoleAccessApproval: 'Approval & Monitoring',
    caseBpmnAsIs: 'BPMN As-Is (Manual)',
    caseBpmnToBe: 'BPMN To-Be (Integrated)',
    caseBpmnRules: 'Business Rules & Workflow',
    caseBpmnUml: 'BPMN / UML',
    caseDiagramUseCase: 'Use Case Diagram',
    caseDiagramClass: 'Class Diagram (12 Entities)',
    caseDiagramSequence: 'Sequence Diagram',
    caseBvaBadge: '28 Test Cases',
    caseBvaHeaderId: 'ID Test Case',
    caseBvaHeaderModule: 'Module / Feature',
    caseBvaHeaderScenario: 'Scenario & Boundary Parameters (BVA)',
    caseBvaHeaderExpected: 'Expected Result',
    caseBvaHeaderStatus: 'QA Status',
    caseBvaRow1Id: 'PDHUPL-1.a',
    caseBvaRow1Module: 'BVA Register',
    caseBvaRow1Scenario: 'Password below minimum threshold (Password="passwor", 7 characters).',
    caseBvaRow1Expected: 'The system displays the error message "Password must be at least 8 characters" and registration is rejected.',
    caseBvaRow1Status: '✓ Passed Test',
    caseBvaRow2Id: 'PDHUPL-1.c',
    caseBvaRow2Module: 'BVA Register',
    caseBvaRow2Scenario: 'Group code above maximum threshold (Input group code 51 characters).',
    caseBvaRow2Expected: 'The system displays the error message "Group code maximum is 50 characters" and registration fails.',
    caseBvaRow2Status: '✓ Passed Test',
    caseBvaRow3Id: 'PDHUPL-2.a',
    caseBvaRow3Module: 'BVA Login',
    caseBvaRow3Scenario: 'Email below minimum format threshold (Email="a@b", 3 characters).',
    caseBvaRow3Expected: 'The system displays the message "Email format is invalid" and authentication fails.',
    caseBvaRow3Status: '✓ Passed Test',
    caseBvaRow4Id: 'PDHUPL-2.c',
    caseBvaRow4Module: 'BVA Login (RBAC)',
    caseBvaRow4Scenario: 'Valid email and password (operator@disbun.test).',
    caseBvaRow4Expected: 'The system successfully logs in and automatically redirects to the respective user-role dashboard.',
    caseBvaRow4Status: '✓ Passed Test',
    caseBvaRow5Id: 'PDHUPL-3.b',
    caseBvaRow5Module: 'BVA User Management',
    caseBvaRow5Scenario: 'User name above maximum threshold (Input name 51 characters).',
    caseBvaRow5Expected: 'The system displays the message "Name maximum is 50 characters" and adding the user fails.',
    caseBvaRow5Status: '✓ Passed Test',
    caseBvaRow6Id: 'PDHUPL-4.b',
    caseBvaRow6Module: 'BVA Submission',
    caseBvaRow6Scenario: 'Requested quantity below minimum threshold (Input quantity = 0 units).',
    caseBvaRow6Expected: 'The system displays the message "Requested quantity must be at least 1" and the submission fails.',
    caseBvaRow6Status: '✓ Passed Test',
    caseBvaRow7Id: 'PDHUPL-4.c',
    caseBvaRow7Module: 'BVA Submission',
    caseBvaRow7Scenario: 'Requested quantity above maximum threshold (Input quantity = 10001 units).',
    caseBvaRow7Expected: 'The system displays the message "Requested quantity maximum is 10000 units" and the submission is rejected.',
    caseBvaRow7Status: '✓ Passed Test',
    caseBvaRow8Id: 'PDHUPL-4.d',
    caseBvaRow8Module: 'BVA Upload Letter',
    caseBvaRow8Scenario: 'Proposal letter file size above maximum threshold (Upload heavy.pdf size 2049 KB).',
    caseBvaRow8Expected: 'The system blocks the upload with the message "Maximum file size is 2048 KB".',
    caseBvaRow8Status: '✓ Passed Test',
    caseBvaRow9Id: 'PDHUPL-5.a',
    caseBvaRow9Module: 'BVA Verification',
    caseBvaRow9Scenario: 'Rejection reason above maximum threshold (Input rejection reason 1001 characters).',
    caseBvaRow9Expected: 'The system displays the message "Rejection reason maximum is 1000 characters" and verification fails.',
    caseBvaRow9Status: '✓ Passed Test',
    caseBvaRow10Id: 'PDHUPL-5.c',
    caseBvaRow10Module: 'BVA Upload BAST',
    caseBvaRow10Scenario: 'BAST file size above maximum threshold (Upload file size 5121 KB).',
    caseBvaRow10Expected: 'The system displays the message "Maximum BAST file size is 5120 KB" and uploading the BAST fails.',
    caseBvaRow10Status: '✓ Passed Test',
    caseBvaRow11Id: 'PDHUPL-6.a',
    caseBvaRow11Module: 'BVA Division Head Approval',
    caseBvaRow11Scenario: 'The Head of Division presses the Approve Submission button (all parameters valid).',
    caseBvaRow11Expected: 'The system successfully changes the application status to "Approved by Head of Division".',
    caseBvaRow11Status: '✓ Passed Test',
    caseBvaRow12Id: 'PDHUPL-7.a',
    caseBvaRow12Module: 'BVA Report Filter',
    caseBvaRow12Scenario: 'End Date < Start Date (Example: Start 31/01/2025, End 30/01/2025).',
    caseBvaRow12Expected: 'The system displays the message "End date must be greater than or equal to the start date".',
    caseBvaRow12Status: '✓ Passed Test',
    caseAllUsers: 'All Users',
    caseFarmerGroup: 'Farmer Group',
    caseHeadOfDivision: 'Head of Division',
    caseOperatorKabid: 'Operator & Division Head',
    caseOperatorDinas: 'Agency Operator',
    casePlantationOffice: 'Plantation Office',
    caseLoginUserTitle: 'User Login Interface (Disbun Jabar)',
    caseLoginUserSub: 'Secure multi-role authentication with the official identity of the Plantation Office',
    caseRegisterTitle: 'Farmer Group Registration Interface',
    caseRegisterSub: 'Self-registration of farmer groups with legal validation and NIK',
    caseKabidTitle: 'Head of Division Dashboard (Kabid)',
    caseKabidSub: 'Summary of decisions, pending approvals, and quick actions',
    caseProposalTitle: 'Assistance Application Management Page',
    caseProposalSub: 'Summary table of incoming proposals, status filtering, and document disposition',
    caseOperatorTitle: 'Agency Operator Dashboard',
    caseOperatorSub: 'Monitoring new proposal files and validating administrative requirements',
    caseFarmerDashboardTitle: 'Farmer Group Dashboard',
    caseFarmerDashboardSub: 'Self-submission proposal form and assistance status tracking',
    caseReportTitle: 'Report Management Page',
    caseReportSub: 'Print handover reports and summary of infrastructure assistance distribution',
    caseNotificationTitle: 'Real-Time Notification Center',
    caseNotificationSub: 'Automatic notifications when a proposal is approved, rejected, or requires revision',
    caseNeedsAnalysis: '01 Requirements Analysis',
    caseBusinessProcess: '02 Business Process Modeling',
    caseSystemDesign: '03 System Design',
    caseImplementation: '04 Application Implementation',
    caseTestingDoc: '05 Documentation & QA',
    caseResults: 'Work results',
    caseViewDetail: 'View more detail',
    caseViewDetailEN: 'View more detail',
    caseMetricRequirements: 'Functional requirements',
    caseMetricRoles: 'Role access rights (RBAC)',
    caseMetricErds: 'Database entities (ERD)',
    caseMetricTestingPassed: 'Functional testing passed',
    caseAllProjectsArrow: '← All projects',
    caseConceptTitle: 'Problem Background',
    caseProblemBackgroundTextSibansar: 'Distribution of plantation infrastructure assistance to hundreds of farmer groups across West Java was previously carried out manually. Proposal files were in the form of physical printed documents sent directly to the office, creating various operational inefficiencies.',
    caseProjectGoal: 'System solution:',
    caseProjectGoalSibansar: 'Integrated System Solution:',
    caseProjectGoalTextSibansar: 'Designing and building the SIBANSAR application with a staged workflow mechanism (multi-level approval), document audit trail, and automatic notifications so aid distribution becomes accountable and transparent.',
    caseDesignRelationSibansar: 'Connection to the design:',
    caseDesignRelationTextSibansar: 'The findings from scattered physical documents became the basis for the self-upload digital document module with PDF/JPG validation and file-size restrictions.',
    caseBvaHeaderId: 'ID Test Case',
    caseBvaHeaderModule: 'Module / Feature',
    caseBvaHeaderScenario: 'Scenario & Boundary Parameters (BVA)',
    caseBvaHeaderExpected: 'Expected Result',
    caseBvaHeaderStatus: 'QA Status',
    caseBvaStatusPassed: '✓ Passed Test',
    caseProblemBackgroundSipostam: 'Retail Problem Background',
    caseProblemBackgroundTextSipostam: 'Toko Alam Tembakau serves processed tobacco, cigarette, clove, paper, and other retail transactions. Previously, all transaction activity was recorded manually on paper receipts and daily cash books.',
    caseProjectGoalSipostam: 'System solution:',
    caseProjectGoalTextSipostam: 'Building an integrated POS web application with a fast cashier interface (keyboard shortcuts), automatic stock deduction, supplier stock mutation recording, and an automated profit-loss analytics dashboard.',
    caseDesignRelationSipostam: 'Connection to the design:',
    caseDesignRelationTextSipostam: 'The shop owner wanted the cashier flow to be as fast as possible without reloading the page, so the cashier module was designed with AJAX / JavaScript to make adding items to the shopping cart instant.',
    caseTableHintSipostam: 'Drag the table sideways to view role & access details',
    caseTableHintFullSipostam: 'Drag the table sideways to view the full testing parameters',
    caseSidebarProcessSipostam: '02 Cashier & Inventory Flow',
    caseQaEvidenceBtnSipostam: 'View QA Documentation Evidence (PDF) ↗',
    caseSupportDocSubSipostam: 'Supporting documents showing the main activities in the shop operations and reporting process.',
    caseTestCaseHeaderSipostam: 'ID Test Case',
    caseUseCaseHeaderSipostam: 'Use Case Tested',
    caseProcedureHeaderSipostam: 'Procedure & Black Box Scenario',
    caseExpectedOutputHeaderSipostam: 'Expected Output',
    caseStatusHeaderSipostam: 'QA Status',
    caseLoginValidationSipostam: 'Login Validation',
    caseLoginScenarioSipostam: 'Test login with empty input, invalid credentials, and valid credentials (Cashier & Owner).',
    caseLoginExpectedSipostam: 'An error message appears for invalid input; valid credentials successfully log in and redirect to the dashboard.',
    caseManageUserSipostam: 'User Management',
    caseManageUserScenarioSipostam: 'Test adding a new cashier account, updating profile data, and deleting the account.',
    caseManageUserExpectedSipostam: 'The system shows a success message, and the new user data is stored and encrypted in the database.',
    caseManageSupplierSipostam: 'Supplier Management',
    caseManageSupplierScenarioSipostam: 'Insert tobacco supplier data with complete and valid format.',
    caseManageSupplierExpectedSipostam: 'A success notification appears and the vendor/supplier list is registered in the master data.',
    caseManageProductStockSipostam: 'Product & Stock Management',
    caseManageProductStockScenarioSipostam: 'Input a new product with all empty fields versus complete and valid data.',
    caseManageProductStockExpectedSipostam: 'Validation blocks empty inputs; the new product is saved completely with cost and selling prices.',
    caseManageCategorySipostam: 'Category Management',
    caseManageCategoryScenarioSipostam: 'Add cigarette/tobacco categories and update product classification data.',
    caseManageCategoryExpectedSipostam: 'The category is successfully added and immediately connected to the cashier product catalog.',
    casePurchaseTransactionSipostam: 'Purchase Transaction',
    casePurchaseTransactionScenarioSipostam: 'Input supplier purchase invoice transactions and verify the form functions correctly.',
    casePurchaseTransactionExpectedSipostam: 'The invoice data is saved, capital expenditure is recorded, and stock increases automatically.',
    caseSalesTransactionSipostam: 'Sales Transaction (Cashier)',
    caseSalesTransactionScenarioSipostam: 'Process a fast cashier transaction, calculate total purchase and change, and print a receipt.',
    caseSalesTransactionExpectedSipostam: 'Transactions are recorded accurately, the thermal receipt prints neatly, and stock balance decreases immediately.',
    caseFinancialReportSipostam: 'Financial Report',
    caseFinancialReportScenarioSipostam: 'Generate a sales turnover recap report and filter by date range.',
    caseFinancialReportExpectedSipostam: 'The report is generated with accurate gross profit, total turnover, and purchase cost calculations at 100%.',
    caseStatusAcceptedSipostam: '✓ Accepted / Passed',
    caseBlackBoxEvidenceTitleSipostam: 'Black Box Testing Evidence Document',
    caseBlackBoxEvidenceSubSipostam: 'Software Documentation Chapter 6: Testing the Point of Sale (POS) Application at Toko Alam Tembakau · ULBI.',
    caseSidebarProcessSipostam: '02 Cashier & Inventory Flow',
    caseDocsQaTitleSipostam: 'Documentation & Quality Testing Strategy (QA Testing)',
    caseDocsQaDescSipostam: 'Ensuring the reliability of the POS cashier system, automatic stock synchronization, and gross profit reporting accuracy through comprehensive Black Box Testing across 9 main use-case scenarios (Table 6.1 to Table 6.10) in accordance with the Software Design Document (DPPL).',
    caseDocsQaBtnSipostam: 'View Official Black Box Testing Evidence (PDF) ↗',
    caseImpactTitleSipostam: 'Work Results & Business Impact',
    caseImpactSummarySipostam: 'The SIPOSTAM implementation successfully transformed Toko Alam Tembakau’s operational management into a faster, more accurate, and more profitable workflow.',
    caseImpact1TitleSipostam: 'Fast Transactions <15 Seconds',
    caseImpact1TextSipostam: 'Cashier service takes less than 15 seconds per transaction with neatly printed digital receipts.',
    caseImpact2TitleSipostam: '100% Stock Accuracy',
    caseImpact2TextSipostam: 'Eliminated physical tobacco stock differences in the warehouse thanks to automatically synchronized inbound and outbound stock movements.',
    caseImpact3TitleSipostam: 'Real-Time Profit Analytics',
    caseImpact3TextSipostam: 'The store owner can monitor daily turnover anytime without manually recapping receipts at night.',
    caseImpactTitleSibansar: 'Work Results & Real Impact',
    caseImpactSummarySibansar: 'The SIBANSAR implementation significantly resolved the operational challenges of managing physical infrastructure assistance documents at the West Java Provincial Plantation Office.',
    caseImpact1TitleSibansar: '90% Verification Efficiency',
    caseImpact1TextSibansar: 'Proposal processing and completeness verification time was cut from 5–7 working days to just minutes through the web application.',
    caseImpact2TitleSibansar: 'Zero Document Loss',
    caseImpact2TextSibansar: 'All proposal documents are digitally archived in a centralized database, eliminating the risk of physical files being lost or damaged.',
    caseImpact3TitleSibansar: 'Distribution Transparency',
    caseImpact3TextSibansar: 'Agency leaders can monitor the distribution of assistance in real time, and farmer groups gain certainty about the status of their proposals.',
    caseUiSub1Sibansar: 'Visual evidence from the project report about the system workflow.',
    caseUiSub2Sibansar: 'Visual evidence of system decisions and submission status during the verification stage.',
    caseBpmnTitleSibansar: 'BPMN / Workflow Process',
    caseBpmnSubSibansar: 'Document showing the sequence of activities from submission to decision.',
    caseStatusDecisionTitle: 'Status & Decisions',
    caseActivityDiagramTitle: 'Activity Diagram of Submission & Verification Flow',
    caseActivityDiagramSub: 'Modeling the transition of submission status from Farmer → Operator → Head of Division',
    caseHeroTitleSibansar: 'SIBANSAR — Infrastructure Assistance Information System',
    caseHeroDescSibansar: 'A digitalized assistance application system for plantation infrastructure with staged validation for the West Java Provincial Plantation Office.',
    caseProblem1Title: 'Physical Documents Scattered',
    caseProblem1Text: 'Stacks of paper proposals on desks are prone to being lost, damaged, or misplaced during verification handoff between sections.',
    caseProblem2Title: 'Unclear Disposition',
    caseProblem2Text: 'Farmer groups find it difficult to know whether the proposal is under operator review, waiting for field verification, or awaiting Head of Division disposition.',
    caseProblem3Title: 'Duplicate Aid Recipients',
    caseProblem3Text: 'It is difficult to detect whether a farmer group has already received the same type of assistance in the current budget year.',
    caseCardTitle1: 'Business Process Flow',
    caseCardTitle2: 'Activities & Decisions',
    caseAnalysisTitleSibansar: 'System Requirements Analysis',
    caseAnalysisDescSibansar: 'Identifying problems and eliciting needs through in-depth interviews with field verification officers and observation of document disposition flows at the West Java Provincial Plantation Office.',
    caseBusinessTitleSibansar: 'Business Process Modeling (BPMN)',
    caseBusinessDescSibansar: 'Mapping the slow as-is process that takes days, then designing a to-be business flow using BPMN 2.0 to ensure document verification runs automatically and sequentially.',
    caseDesignTitleSibansar: 'System & Database Design (UML & ERD)',
    caseDesignDescSibansar: 'Preparing technical specifications that include Use Case Diagrams to describe interactions among 4 actors, Sequence Diagrams to validate message flow between objects, and Class Diagrams for MySQL entity relationships.',
    caseImplementTitleSibansar: 'Implementation of Real System Interface',
    caseImplementDescSibansar: 'The following are interface screenshots of the completed SIBANSAR web system implemented for the West Java Provincial Plantation Office. The entire interface was tailored to the official agency identity.',
    caseHeroTitleSipostam: 'SIPOSTAM — Point of Sale Information System for Toko Alam Tembakau',
    caseHeroDescSipostam: 'A fast web-based cashier system with automatic inventory synchronization, supplier purchasing modules, and daily profit-loss analytics.',
    caseProblem1TitleSipostam: 'Slow Cashier Queue',
    caseProblem1TextSipostam: 'Total purchase calculations using a physical calculator are prone to miscounting during peak hours, slowing cashier service.',
    caseProblem2TitleSipostam: 'Physical Stock Differences',
    caseProblem2TextSipostam: 'The absence of an automatic stock card causes physical stock on display to often differ from the bookkeeping records.',
    caseProblem3TitleSipostam: 'Manual Profit-Loss Recap',
    caseProblem3TextSipostam: 'The owner has to calculate paper receipts one by one every night to determine total gross turnover and net profit.',
    caseCardTitle1Sipostam: 'Sales Process Flow',
    caseCardTitle2Sipostam: 'Operational Process',
    caseAnalysisTitleSipostam: 'Requirements Analysis & Scrum Approach',
    caseAnalysisDescSipostam: 'The project was developed using the Agile Scrum methodology through sprint planning, user story formulation, and sprint review evaluation with the shop owner to ensure cashier requirements are met optimally.',
    caseBusinessTitleSipostam: 'Automated Transaction & Inventory Business Flow',
    caseBusinessDescSipostam: 'Designing the POS transaction flow where each time the cashier completes a payment and prints a receipt, the product stock quantity in the database is automatically deducted according to the purchased units (stock movement).',
    caseDesignTitleSipostam: 'System Architecture & Database Design',
    caseDesignDescSipostam: 'Designing the Use Case Diagram for cashier and owner interactions, as well as the relational database schema linking product, category, stock, supplier, sales transaction, and receipt detail tables.',
    caseTransactionTitleSipostam: 'Fast POS Cashier Transaction Module',
    caseTransactionSubSipostam: 'Real-time cart, instant product search, discount and change calculation',
    caseAdminDashboardTitleSipostam: 'Main Administrator Dashboard (Owner)',
    caseAdminDashboardSubSipostam: 'Monitoring daily turnover, transaction volume, total profit, and low-stock warnings',
    caseCashierDashboardTitleSipostam: 'Daily Cashier Dashboard',
    caseCashierDashboardSubSipostam: 'Summary of current shift transactions and quick access to cashier module',
    casePurchaseTitleSipostam: 'Manage Product Purchases from Supplier',
    casePurchaseSubSipostam: 'Recording incoming tobacco supply, purchase cost, and stock quantity additions',
    caseProductInventoryTitleSipostam: 'Manage Product & Inventory Master',
    caseProductInventorySubSipostam: 'Multi-category management (tobacco, paper, cigars), unit sizes, purchase & selling prices',
    caseUserManagementTitleSipostam: 'Manage User Accounts & Permissions',
    caseUserManagementSubSipostam: 'Cashier account credential settings, password changes, and separation of access rights',
    caseBusinessRuleTitleSipostam: 'Key Business Rule:',
    caseBusinessRuleTextSipostam: 'Cashier transactions cannot be processed when product stock is zero or lower than the quantity entered into the cart, preventing negative stock.',
    caseFlowchartCashierTitleSipostam: 'Cashier Transaction Flowchart',
    caseFlowchartCashierSubSipostam: 'Main process diagram from customer order, stock validation, to receipt printing.',
    caseFlowchartInventoryTitleSipostam: 'Stock & Report Flowchart',
    caseFlowchartInventorySubSipostam: 'Visual evidence of stock availability checks, data movement, and sales reporting.',
    caseERDTitleSipostam: 'Distributed Data Model Schema',
    caseERDSubSipostam: 'Referential relationships between product, daily transaction, and stock mutation entities',
    caseImplementTitleSipostam: 'Real System Interface Implementation',
    caseImplementDescSipostam: 'The following are screenshots of the real SIPOSTAM system interface that has been tested and operated at Toko Alam Tembakau:'
  }
};

function getStoredValue(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value !== null ? value : fallback;
  } catch (error) {
    return fallback;
  }
}

function setStoredValue(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    // Ignore storage errors so the UI still works normally.
  }
}

function applyHomeTextFallbacks(lang) {
  const page = document.body;
  if (!page) return;

  const replacements = {
    'PENCAPAIAN': 'TRACK RECORD',
    'KOMPETENSI': 'COMPETENCIES',
    'KREDENSIAL': 'CREDENTIALS',
    'KOMPETENSI UTAMA': 'CORE COMPETENCIES',
    'Fokus Kemampuan': 'Core Focus',
    'Tentang Saya': 'About Me',
    'Lulusan D3 Manajemen Informatika': 'D3 Informatics Management Graduate',
    'D3 Manajemen Informatika': 'D3 Informatics Management',
    'IPK D3 Manajemen Informatika': 'GPA of D3 Informatics Management',
    'Proyek Sistem Utama': 'Main System Projects',
    'Pengujian Fungsional Lolos Uji': 'Functional Testing Passed',
    'Afiliasi & Institusi:': 'Affiliations & Institutions:',
    'Jelajahi Proyek': 'Explore Projects',
    'Buka PDF ↗': 'Open PDF ↗',
    'Hubungi Saya': 'Contact Me',
    'Email Utama (Salin)': 'Primary Email (Copy)',
    'WhatsApp Langsung': 'WhatsApp Direct',
    'LinkedIn Resmi': 'Official LinkedIn',
    'Sertifikasi & Pelatihan': 'Certifications & Training',
    'Lulus D3 Manajemen Informatika (IPK 3.69 / 4.00)': 'Graduated from D3 Informatics Management (GPA 3.69 / 4.00)',
    'Pembangunan Sistem Informasi SIBANSAR di Dinas Perkebunan Jabar': 'SIBANSAR Information System Development at the West Java Plantation Office',
    'Bendahara Umum HMMI ULBI (Periode 2025–2026)': 'General Treasurer of HMMI ULBI (2025–2026 Period)',
    'Sertifikasi Kompetensi BNSP & Pelatihan Enterprise SAP': 'BNSP Competency Certification & Enterprise SAP Training',
    'Lihat bukti': 'View proof',
    'Magang · Maret–Juni 2026': 'Internship · Mar–Jun 2026',
    'Proyek Akademik II (Scrum) · 2025': 'Academic Project II (Scrum) · 2025',
    'Proyek Pilihan': 'Featured Projects',
    'PENGALAMAN': 'EXPERIENCE',
    'Pengalaman Kerja': 'Work Experience',
    'PORTOFOLIO': 'PORTFOLIO',
    'Lihat hasil pekerjaan (SIBANSAR) →': 'See work result (SIBANSAR) →',
    'Lihat Sertifikat PKL (PDF) ↗': 'View Internship Certificate (PDF) ↗',
    'Lihat Sertifikat HMMI (PDF) ↗': 'View HMMI Certificate (PDF) ↗',
    'Baca studi kasus lengkap →': 'Read full case study →',
    'Core Skills': 'Core Skills',
    'Track Record': 'Track Record',
    'Akuntabilitas': 'Accountability',
    'Berpengalaman menjadi bendahara dalam penyusunan RAB dan laporan pertanggungjawaban organisasi.': 'Experienced in serving as treasurer in preparing budget plans and organizational accountability reports.',
    'Adaptasi & Belajar Cepat': 'Adaptability & Rapid Learning',
    'Cepat beradaptasi pada tools baru, kebutuhan proyek, serta perubahan alur kerja.': 'Quickly adapts to new tools, project needs, and changing work flows.',
    '31 Agustus 2026 · ULBI': '31 August 2026 · ULBI',
    'Lulus D3 Informatics Management (IPK 3.69 / 4.00)': 'Graduated from D3 Informatics Management (GPA 3.69 / 4.00)',
    'Universitas Logistik dan Bisnis Internasional (ULBI), Bandung. Menyelesaikan masa studi dengan konsistensi nilai akademik tinggi di bidang rekayasa sistem informasi.': 'Universitas Logistik dan Bisnis Internasional (ULBI), Bandung. Completed the study period with consistently high academic performance in the field of information systems engineering.',
    'Pembangunan Sistem Informasi SIBANSAR di Dinas Perkebunan Jabar': 'SIBANSAR Information System Development at the West Java Plantation Office',
    'Membantu digitalisasi alur verifikasi berkas pengajuan bantuan sarana prasarana kelompok tani se-Jawa Barat hingga tahap pengujian fungsional dan serah terima.': 'Helped digitize the verification workflow for farmer-group infrastructure assistance applications across West Java through functional testing and handover.',
    'Bendahara Umum HMMI ULBI (Periode 2025–2026)': 'General Treasurer of HMMI ULBI (2025–2026 Period)',
    'Mengontrol arus kas masuk-keluar seluruh program kerja himpunan mahasiswa, menyusun Rencana Anggaran Biaya (RAB), dan menyusun laporan pertanggungjawaban keuangan.': 'Managed the organization’s cash inflow and outflow, prepared the Budget Plan (RAB), and compiled financial accountability reports.',
    'Sertifikasi Kompetensi BNSP & Pelatihan Enterprise SAP': 'BNSP Competency Certification & Enterprise SAP Training',
    'Tersertifikasi kompeten sebagai System Analyst oleh Badan Nasional Sertifikasi Profesi (BNSP) serta menyelesaikan program SAP Overview dan SAP ABAP Workbench.': 'Certified as a System Analyst by the National Professional Certification Agency (BNSP) and completed the SAP Overview and SAP ABAP Workbench programs.',
    'LSP ULBI · BNSP': 'LSP ULBI · BNSP',
    'Kompeten': 'Certified',
    'Badan Nasional Sertifikasi Profesi (BNSP) · LSP ULBI · Oktober 2026': 'National Professional Certification Agency (BNSP) · LSP ULBI · October 2026',
    'Uji kompetensi profesi yang memvalidasi keahlian dalam analisis kebutuhan sistem perangkat lunak, perancangan diagram alur kerja bisnis, pemodelan data, dan penyusunan spesifikasi teknis (SRS).': 'Professional competency test validating expertise in software requirements analysis, business process flow diagram design, data modeling, and technical specification (SRS) preparation.',
    '✓ Sertifikasi Resmi Terverifikasi': '✓ Official Certification Verified',
    'Sistem Enterprise & ERP': 'Enterprise Systems & ERP',
    'Pemrograman Enterprise': 'Enterprise Programming',
    'Uji Kompetensi Kejuruan': 'Vocational Competency Test',
    'Sertifikasi Kejuruan Nasional · ID: 32/IDN/UKK/2021': 'National Vocational Certification · ID: 32/IDN/UKK/2021',
    'Buka PDF ↗': 'Open PDF ↗',
    'LSP ULBI': 'LSP ULBI'
  };

  const activeMap = lang === 'en' ? replacements : Object.fromEntries(Object.entries(replacements).map(([from, to]) => [to, from]));

  Object.entries(activeMap).forEach(([from, to]) => {
    const walker = document.createTreeWalker(page, NodeFilter.SHOW_TEXT, null);
    while (walker.nextNode()) {
      const textNode = walker.currentNode;
      if (textNode.nodeValue && textNode.nodeValue.includes(from)) {
        textNode.nodeValue = textNode.nodeValue.replaceAll(from, to);
      }
    }
  });
}

function applyCaseStudyTextFallbacks(lang) {
  const casePage = document.querySelector('.case-study-page, .case-page-shell, .case-main-shell');
  if (!casePage) return;

  const replacements = {
    'Solusi Sistem Terpadu:': 'Integrated System Solution:',
    'Merancang dan membangun aplikasi SIBANSAR dengan mekanisme alur kerja berjenjang (multi-level approval), audit trail berkas, dan notifikasi otomatis agar proses penyaluran bantuan menjadi akuntabel dan transparan.': 'Designing and building the SIBANSAR application with a staged workflow mechanism (multi-level approval), document audit trail, and automatic notifications so aid distribution becomes accountable and transparent.',
    'Kaitan dengan rancangan:': 'Connection to the design:',
    'Hasil temuan masalah dokumen fisik tercecer menjadi landasan perumusan modul pengunggahan berkas digital mandiri dengan validasi ekstensi PDF/JPG dan pembatasan ukuran berkas.': 'The findings from scattered physical documents became the basis for the self-upload digital document module with PDF/JPG validation and file-size restrictions.',
    'Pemilik toko menginginkan alur kasir yang seringkas mungkin tanpa reload halaman, sehingga modul kasir dirancang dengan teknologi AJAX / JavaScript agar penambahan item ke keranjang belanja bersifat instan.': 'The store owner wanted the cashier flow to be as fast as possible without reloading the page, so the cashier module was designed with AJAX / JavaScript so that adding items to the shopping cart is instant.',
    'Geser tabel ke samping untuk melihat detail peran & hak akses': 'Drag the table sideways to view role & access details',
    'Geser tabel ke samping untuk melihat detail wewenang & hak akses': 'Drag the table sideways to view authority & access details',
    'Geser tabel ke samping untuk melihat seluruh parameter pengujian': 'Drag the table sideways to view the full testing parameters',
    'Kredensial Resmi:': 'Official credentials:',
    'Hasil pekerjaan': 'Work results',
    'Hasil Pekerjaan & Dampak Nyata': 'Work Results & Real Impact',
    'Latar Belakang Permasalahan': 'Problem Background',
    'Modul / Fitur': 'Module / Feature',
    'Skenario & Parameter Boundary (BVA)': 'Scenario & Boundary Parameters (BVA)',
    'Hasil yang Diharapkan': 'Expected Result',
    'Status QA': 'QA Status',
    '✓ Lolos Uji': '✓ Passed Test',
    'BVA Register': 'BVA Register',
    'BVA Login': 'BVA Login',
    'BVA Login (RBAC)': 'BVA Login (RBAC)',
    'BVA Kelola User': 'BVA User Management',
    'BVA Pengajuan': 'BVA Submission',
    'BVA Upload Surat': 'BVA Upload Letter',
    'BVA Verifikasi': 'BVA Verification',
    'BVA Upload BAST': 'BVA Upload BAST',
    'BVA Approval Kabid': 'BVA Division Head Approval',
    'BVA Filter Laporan': 'BVA Report Filter',
    'Password < batas minimum (Password="passwor", 7 karakter).': 'Password below minimum threshold (Password="passwor", 7 characters).',
    'Kode Kelompok > batas maksimal (Input kode kelompok 51 karakter).': 'Group code above maximum threshold (Input group code 51 characters).',
    'Email < batas minimum format (Email="a@b", 3 karakter).': 'Email below minimum format threshold (Email="a@b", 3 characters).',
    'Email dan password valid (operator@disbun.test).': 'Valid email and password (operator@disbun.test).',
    'Nama user > batas maksimal (Input nama 51 karakter).': 'User name above maximum threshold (Input name 51 characters).',
    'Jumlah diminta < batas minimum (Input jumlah = 0 unit).': 'Requested quantity below minimum threshold (Input quantity = 0 units).',
    'Jumlah diminta > batas maksimal (Input jumlah = 10001 unit).': 'Requested quantity above maximum threshold (Input quantity = 10001 units).',
    'Ukuran file surat proposal > batas maksimal (Upload berat.pdf ukuran 2049 KB).': 'Proposal letter file size above maximum threshold (Upload heavy.pdf size 2049 KB).',
    'Alasan penolakan > batas maksimal (Input alasan penolakan 1001 karakter).': 'Rejection reason above maximum threshold (Input rejection reason 1001 characters).',
    'Ukuran file BAST > batas maksimal (Upload file ukuran 5121 KB).': 'BAST file size above maximum threshold (Upload file size 5121 KB).',
    'Kepala Bidang menekan button Setujui Pengajuan (semua parameter valid).': 'Head of Division presses the Approve Submission button (all parameters valid).',
    'Tanggal Akhir < Tanggal Awal (Contoh: Awal 31/01/2025, Akhir 30/01/2025).': 'End Date < Start Date (Example: Start 31/01/2025, End 30/01/2025).',
    'Sistem menampilkan pesan error "Password minimal 8 karakter" dan pendaftaran ditolak.': 'The system displays the error message "Password must be at least 8 characters" and registration is rejected.',
    'Sistem menampilkan pesan error "Kode Kelompok maksimal 50 karakter" dan pendaftaran gagal.': 'The system displays the error message "Group code maximum is 50 characters" and registration fails.',
    'Sistem menampilkan pesan "Format email tidak valid" dan proses autentikasi gagal.': 'The system displays the message "Email format is invalid" and authentication fails.',
    'Sistem berhasil login dan otomatis mengarahkan ke dasbor peran pengguna masing-masing.': 'The system successfully logs in and automatically redirects to the respective user-role dashboard.',
    'Sistem menampilkan pesan "Nama maksimal 50 karakter" dan penambahan user gagal.': 'The system displays the message "Name maximum is 50 characters" and adding the user fails.',
    'Sistem menampilkan pesan "Jumlah diminta minimal 1" dan pembuatan pengajuan gagal.': 'The system displays the message "Requested quantity must be at least 1" and the submission fails.',
    'Sistem menampilkan pesan "Jumlah diminta maksimal 10000 unit" dan pengajuan ditolak.': 'The system displays the message "Requested quantity maximum is 10000 units" and the submission is rejected.',
    'Sistem memblokir unggahan dengan pesan "Ukuran file maksimal 2048 KB".': 'The system blocks the upload with the message "Maximum file size is 2048 KB".',
    'Sistem menampilkan pesan "Alasan penolakan maksimal 1000 karakter" dan verifikasi gagal.': 'The system displays the message "Rejection reason maximum is 1000 characters" and verification fails.',
    'Sistem menampilkan pesan "Ukuran file BAST maksimal 5120 KB" dan unggah BAST gagal.': 'The system displays the message "Maximum BAST file size is 5120 KB" and uploading the BAST fails.',
    'Sistem berhasil mengubah status pengajuan menjadi "Disetujui Kabid".': 'The system successfully changes the application status to "Approved by Head of Division".',
    'Sistem menampilkan pesan "Tanggal akhir harus lebih besar atau sama dengan tanggal awal".': 'The system displays the message "End date must be greater than or equal to the start date".',
    'Magang & Tugas Akhir D3': 'D3 Internship & Final Project',
    'Dinas Perkebunan Prov. Jabar': 'West Java Plantation Office',
    'Maret – Juni 2026': 'March – June 2026',
    'Proyek Akademik II (Scrum)': 'Academic Project II (Scrum)',
    'Februari – Juli 2025': 'February – July 2025',
    'Dokumen pendukung yang menunjukkan aktivitas utama dalam proses bisnis toko dan kelola laporan.': 'Supporting documents showing the main activities in the shop operations and reporting process.',
    'Proses Operasional': 'Operational Process',
    'ID Test Case': 'ID Test Case',
    'Use Case Diuji': 'Use Case Tested',
    'Prosedur & Skenario Black Box': 'Procedure & Black Box Scenario',
    'Keluaran yang Diharapkan': 'Expected Output',
    'Status QA': 'QA Status',
    'Validasi Login': 'Login Validation',
    'Kelola User': 'User Management',
    'Kelola Supplier': 'Supplier Management',
    'Kelola Produk & Stok': 'Product & Stock Management',
    'Kelola Kategori': 'Category Management',
    'Transaksi Pembelian': 'Purchase Transaction',
    'Transaksi Penjualan (Kasir)': 'Sales Transaction (Cashier)',
    'Laporan Keuangan': 'Financial Report',
    '✓ Diterima / Lolos': '✓ Accepted / Passed',
    'Lihat lebih detail': 'View more detail',
    'Dokumentasi & Strategi Pengujian Mutu (QA Testing)': 'Documentation & Quality Testing Strategy (QA Testing)',
    'Hasil Pekerjaan & Dampak Bisnis': 'Work Results & Business Impact',
    'Dokumen Uji BVA Resmi (PDF) ↗': 'Official BVA Test Document (PDF) ↗',
    'Dokumen Uji Black Box Resmi (PDF) ↗': 'Official Black Box Test Document (PDF) ↗',
    'Dokumen Bukti Pengujian Boundary Value Analysis (BVA)': 'Boundary Value Analysis (BVA) Test Evidence Document',
    'Dokumen Bukti Pengujian Black Box Testing': 'Black Box Testing Evidence Document',
    'Lihat Bukti Dokumentasi & QA (PDF) ↗': 'View QA Documentation Evidence (PDF) ↗',
    'Semua Pengguna': 'All Users',
    'Kelompok Tani': 'Farmer Group',
    'Kepala Bidang': 'Head of Division',
    'Pusat Notifikasi Real-Time': 'Real-Time Notification Center',
    'Dasbor Kepala Bidang (Kabid)': 'Head of Division Dashboard',
    'Dasbor Kelompok Tani': 'Farmer Group Dashboard',
    'Dasbor Operator Dinas': 'Agency Operator Dashboard',
    'Dasbor Utama Administrator (Owner)': 'Main Administrator Dashboard (Owner)',
    'Dasbor Kasir Harian': 'Daily Cashier Dashboard',
    'Pusat Notifikasi Sistem - Update Real-Time Perubahan Status Berkas': 'System Notification Center - Real-Time Status Updates',
    'Pendaftaran mandiri kelompok tani dengan validasi legalitas dan NIK': 'Self-registration for farmer groups with legality and NIK validation',
    'Antarmuka Register Kelompok Tani': 'Farmer Group Registration Interface',
    'Halaman Kelola Pengajuan Bantuan': 'Assistance Application Management Page',
    'Tabel rekapitulasi proposal masuk, filter status, dan disposisi berkas': 'Summary table of incoming proposals, status filtering, and document disposition',
    'Bukti visual dari dokumen laporan mengenai proses penerimaan, validasi stok, dan transaksi penjualan.': 'Visual evidence from the project report documenting receiving, stock validation, and sales transactions.',
    'Bukti visual proses pengecekan ketersediaan stok, mutasi data, dan laporan penjualan.': 'Visual evidence of stock availability checks, data movement, and sales reporting.',
    'Bukti visual terkait keputusan sistem dan status pengajuan pada tahap verifikasi.': 'Visual evidence of system decisions and submission status during the verification stage.',
    'Peran Pengguna': 'User Role',
    'Wewenang & Tanggung Jawab dalam Sistem': 'Authority & Responsibilities in the System',
    'Tingkat Akses': 'Access Level',
    'Dokumen Uji BVA Resmi (PDF) ↗': 'Official BVA Test Document (PDF) ↗',
    'Dokumen Uji Black Box Resmi (PDF) ↗': 'Official Black Box Test Document (PDF) ↗',
    'Geser tabel ke samping untuk melihat seluruh parameter pengujian': 'Drag the table sideways to view the full testing parameters',
    'Semua Pengguna': 'All Users',
    'Kelompok Tani': 'Farmer Group',
    'Kepala Bidang': 'Head of Division',
    'Pusat Notifikasi Real-Time': 'Real-Time Notification Center',
    'Dasbor Kepala Bidang (Kabid)': 'Head of Division Dashboard',
    'Dasbor Kelompok Tani': 'Farmer Group Dashboard',
    'Dasbor Operator Dinas': 'Agency Operator Dashboard',
    'Halaman Kelola Pengajuan Bantuan': 'Assistance Application Management Page',
    'Pendaftaran mandiri kelompok tani dengan validasi legalitas dan NIK': 'Self-registration for farmer groups with legality and NIK validation',
    'Pemberitahuan otomatis saat proposal disetujui, ditolak, atau perlu revisi': 'Automatic notifications when a proposal is approved, rejected, or needs revision',
    'Dokumen Bukti Pengujian Boundary Value Analysis (BVA)': 'Boundary Value Analysis (BVA) Test Evidence Document',
    'Laporan Tugas Akhir Bab V: Pengujian Sistem Informasi SIBANSAR (Tabel V.2 s/d Tabel V.8) · ULBI & Dinas Perkebunan Jawa Barat.': 'Final Report Chapter V: SIBANSAR Information System Testing (Table V.2 to Table V.8) · ULBI & West Java Plantation Office.',
    'Aktor (Peran)': 'Actor (Role)',
    'Tanggung Jawab Utama dalam Sistem': 'Main Responsibilities in the System',
    'Hak Akses (RBAC)': 'Access Rights (RBAC)',
    'Admin': 'Admin',
    'Kelompok Tani': 'Farmer Group',
    'Operator Dinas': 'Agency Operator',
    'Kepala Bidang (Kabid)': 'Head of Division',
    'Manajemen akun pengguna, pemeliharaan master data sarpras, dan pengaturan hak akses.': 'User account management, master data maintenance for infrastructure assistance, and access rights configuration.',
    'Registrasi mandiri, submit proposal bantuan, upload syarat legalitas, tracking status pengajuan.': 'Self-registration, submitting assistance proposals, uploading legal requirements, and tracking application status.',
    'Verifikasi kelengkapan berkas fisik & digital, validasi lapangan, dan pembuatan rekomendasi teknis.': 'Verification of physical and digital document completeness, field validation, and preparation of technical recommendations.',
    'Meninjau berkas rekomendasi, validasi final persetujuan/penolakan (approval/reject), monitoring dasbor.': 'Reviewing recommendation files, final approval/rejection validation, and dashboard monitoring.',
    'Pengajuan & Tracking': 'Submission & Tracking',
    'Verifikasi & Rekomendasi': 'Verification & Recommendation',
    'Approval & Monitoring': 'Approval & Monitoring',
    'Business Rule Kunci:': 'Key Business Rule:',
    'Transaksi kasir tidak dapat diproses apabila stok produk bernilai nol atau lebih kecil dari jumlah yang dimasukkan ke keranjang belanja, mencegah terjadinya negative stock.': 'Cashier transactions cannot be processed when product stock is zero or lower than the quantity entered into the cart, preventing negative stock.',
    'Flowchart Transaksi Kasir': 'Cashier Transaction Flowchart',
    'Diagram proses utama dari customer order, validasi stok, hingga pencetakan nota.': 'Main process diagram from customer order, stock validation, to receipt printing.',
    'Flowchart Stok & Laporan': 'Stock & Report Flowchart',
    'Bukti visual dari dokumen laporan mengenai proses penerimaan, validasi stok, dan transaksi penjualan.': 'Visual evidence from the project report documenting receiving, stock validation, and sales transactions.',
    'Bukti visual proses pengecekan ketersediaan stok, mutasi data, dan laporan penjualan.': 'Visual evidence of stock availability checks, data movement, and sales reporting.',
    'Bukti visual terkait keputusan sistem dan status pengajuan pada tahap verifikasi.': 'Visual evidence of system decisions and submission status during the verification stage.',
    'Semua Pengguna': 'All Users',
    'Dinas Perkebunan': 'Plantation Office',
    'Antarmuka Login User (Disbun Jabar)': 'User Login Interface (Disbun Jabar)',
    'Autentikasi aman multi-peran dengan identitas resmi Dinas Perkebunan': 'Secure multi-role authentication with the official identity of the Plantation Office',
    'Antarmuka Register Kelompok Tani': 'Farmer Group Registration Interface',
    'Pendaftaran mandiri kelompok tani dengan validasi legalitas dan NIK': 'Self-registered farmer group enrollment with legal validation and NIK verification',
    'Dasbor Kepala Bidang (Kabid)': 'Head of Division Dashboard',
    'Grafik ringkasan keputusan, jumlah menunggu approval, dan aksi cepat': 'Summary of decisions, pending approvals, and quick actions',
    'Halaman Kelola Pengajuan Bantuan': 'Assistance Application Management Page',
    'Tabel rekapitulasi proposal masuk, filter status, dan disposisi berkas': 'Summary table of incoming proposals, status filtering, and document disposition',
    'Dasbor Operator Dinas': 'Agency Operator Dashboard',
    'Monitoring berkas proposal baru dan validasi persyaratan administrasi': 'Monitoring new proposal files and validating administrative requirements',
    'Dasbor Kelompok Tani': 'Farmer Group Dashboard',
    'Formulir pengajuan proposal mandiri dan pelacakan status bantuan': 'Self-submission proposal form and assistance status tracking',
    'Halaman Kelola Laporan': 'Report Management Page',
    'Cetak berita acara serah terima dan rekapitulasi penyaluran bantuan sarpras': 'Print handover reports and summary of infrastructure assistance distribution',
    'Pusat Notifikasi Real-Time': 'Real-Time Notification Center',
    'Pemberitahuan otomatis saat proposal disetujui, ditolak, atau perlu revisi': 'Automatic notifications when a proposal is approved, rejected, or requires revision',
    'Dokumentasi & Strategi Pengujian Mutu (QA Testing)': 'Documentation & Quality Testing Strategy (QA Testing)',
    'Menjamin keandalan fungsionalitas, validasi input batas nilai (boundary), dan keamanan hak akses sistem melalui pengujian Boundary Value Analysis (BVA) dan Black Box Testing terstruktur pada 7 modul utama sesuai Dokumen Pembangunan Perangkat Lunak (DPPL) / Bab V Laporan Tugas Akhir.': 'Ensuring the reliability of functionality, boundary input validation, and system access security through structured Boundary Value Analysis (BVA) and Black Box Testing on 7 main modules according to the Software Development Document (DPPL) / Chapter V Final Report.',
    'Dokumen Bukti Pengujian Boundary Value Analysis (BVA)': 'Boundary Value Analysis (BVA) Test Evidence Document',
    'Laporan Tugas Akhir Bab V: Pengujian Sistem Informasi SIBANSAR (Tabel V.2 s/d Tabel V.8) · ULBI & Dinas Perkebunan Jawa Barat.': 'Final Report Chapter V: SIBANSAR Information System Testing (Table V.2 to Table V.8) · ULBI & West Java Plantation Office.',
    'Lihat lebih detail': 'View more detail',
    'Lihat Bukti Dokumentasi & QA (PDF) ↗': 'View QA Documentation Evidence (PDF) ↗',
    'Peran Pengguna': 'User Role',
    'Wewenang & Tanggung Jawab dalam Sistem': 'Authority & Responsibilities in the System',
    'Tingkat Akses': 'Access Level',
    'Pemilik Toko (Owner / Admin)': 'Store Owner (Owner / Admin)',
    'Melihat dashboard pendapatan real-time, laporan laba/rugi, kelola master produk & harga, transaksi pembelian supplier, dan manajemen akun kasir.': 'View real-time revenue dashboard, profit/loss reports, product & pricing master data, supplier purchase transactions, and cashier account management.',
    'Full Access & Analytics': 'Full Access & Analytics',
    'Kasir Toko': 'Store Cashier',
    'Melakukan input transaksi belanja cepat, cetak struk nota, cek ketersediaan stok produk, dan rekap penutupan kasir shift harian.': 'Process fast retail transactions, print receipts, check product stock availability, and summarize daily cashier shift closing.',
    'POS Kasir & Struk': 'POS Cashier & Receipt',
    'Owner / Admin': 'Owner / Admin',
    'Alur Kasir Cepat': 'Fast Cashier Flow',
    'Auto Stock Deduction': 'Automatic Stock Deduction',
    'Pencatatan Pembelian Supplier': 'Supplier Purchase Recording',
    'Business Rule Kunci:': 'Key Business Rule:',
    'Skema Pemodelan Basis Data Terdistribusi': 'Distributed Data Model Schema',
    'Relasi referensial antara entitas produk, transaksi harian, dan mutasi stok': 'Referential relationships between product, daily transaction, and stock mutation entities',
    'ERD / Relasional': 'ERD / Relational',
    'Modul Transaksi Kasir POS Cepat': 'Fast POS Cashier Transaction Module',
    'Keranjang belanja real-time, pencarian instan produk, kalkulasi diskon & kembalian': 'Real-time cart, instant product search, discount and change calculation',
    'Dasbor Utama Administrator (Owner)': 'Main Administrator Dashboard (Owner)',
    'Monitoring omset harian, jumlah transaksi, total keuntungan, dan peringatan stok minimum': 'Monitoring daily turnover, transaction volume, total profit, and low-stock warnings',
    'Dasbor Kasir Harian': 'Daily Cashier Dashboard',
    'Ringkasan transaksi shift berjalan dan tombol cepat masuk ke modul kasir': 'Summary of current shift transactions and quick access to cashier module',
    'Kelola Pembelian Produk dari Supplier': 'Manage Product Purchases from Supplier',
    'Pencatatan pasokan tembakau masuk, harga modal beli, dan penambahan kuantitas stok': 'Recording incoming tobacco supply, purchase cost, and stock quantity additions',
    'Kelola Master Produk & Inventori': 'Manage Product & Inventory Master',
    'Manajemen multi-kategori (tembakau, papir, cerutu), satuan ukuran, harga beli & jual': 'Multi-category management (tobacco, paper, cigars), unit sizes, purchase & selling prices',
    'Kelola Akun Pengguna & Wewenang': 'Manage User Accounts & Permissions',
    'Pengaturan kredensial akun kasir, pergantian password, dan pemisahan hak akses': 'Cashier account credential settings, password changes, and separation of access rights',
    'Hasil Pekerjaan & Dampak Bisnis': 'Work Results & Business Impact',
    'Implementasi SIPOSTAM berhasil mentransformasi tata kelola operasional Toko Alam Tembakau menjadi lebih cepat, akurat, dan menguntungkan.': 'The SIPOSTAM implementation successfully transformed the operational management of Toko Alam Tembakau into a faster, more accurate, and more profitable system.',
    'Transaksi Cepat &lt;15 Detik': 'Fast Transactions &lt;15 Seconds',
    'Pelayanan kasir berlangsung kurang dari 15 detik per transaksi dengan nota struk digital tercetak rapi.': 'Cashier service takes less than 15 seconds per transaction with neatly printed digital receipts.',
    'Akurasi Stok 100%': '100% Stock Accuracy',
    'Mengeliminasi selisih stok fisik tembakau di gudang berkat pencatatan mutasi masuk dan keluar yang tersinkronisasi otomatis.': 'Eliminated physical tobacco stock differences in the warehouse thanks to automatically synchronized inbound and outbound stock movements.',
    'Analitik Laba Real-Time': 'Real-Time Profit Analytics',
    'Pemilik toko dapat memantau perputaran omset harian kapan saja tanpa perlu merekap nota manual pada malam hari.': 'The store owner can monitor daily turnover anytime without manually recapping receipts at night.'
  };

  const activeMap = lang === 'en' ? replacements : Object.fromEntries(Object.entries(replacements).map(([from, to]) => [to, from]));

  Object.entries(activeMap).forEach(([from, to]) => {
    const walker = document.createTreeWalker(casePage, NodeFilter.SHOW_TEXT, null);
    while (walker.nextNode()) {
      const textNode = walker.currentNode;
      if (textNode.nodeValue && textNode.nodeValue.includes(from)) {
        textNode.nodeValue = textNode.nodeValue.replaceAll(from, to);
      }
    }
  });
}

function initLanguageSwitcher() {
  const langButtons = document.querySelectorAll('.lang-btn');
  if (!langButtons.length) return;

  const applyLanguage = (lang) => {
    const dictionary = translations[lang] || translations.id;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dictionary[key]) {
        el.textContent = dictionary[key];
      }
    });

    applyHomeTextFallbacks(lang);
    applyCaseStudyTextFallbacks(lang);

    langButtons.forEach((button) => {
      const isActive = button.dataset.lang === lang;
      button.classList.toggle('active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });

    document.documentElement.lang = lang;
    setStoredValue('rf-lang', lang);
  };

  langButtons.forEach((button) => {
    button.addEventListener('click', () => applyLanguage(button.dataset.lang));
  });

  const savedLang = getStoredValue('rf-lang', 'id');
  applyLanguage(savedLang in translations ? savedLang : 'id');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}

/* --------------------------------------------------------------------------
   NAVIGATION & SCROLL SPY
   -------------------------------------------------------------------------- */
function initNavigation() {
  const navbar = document.querySelector('.navbar');
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  const navItems = document.querySelectorAll('.nav-item-link');

  // Build target sections array directly from nav links
  const navSections = [];
  navItems.forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      const targetId = href.slice(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        navSections.push({ id: targetId, el: targetEl, link: link });
      }
    }
  });

  let isClickScrolling = false;
  let clickTimeout = null;

  const setActiveLink = (activeLink) => {
    navItems.forEach(link => {
      if (link === activeLink) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  };

  const updateScrollSpy = () => {
    // Navbar background shadow on scroll
    if (navbar) {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      if (window.innerWidth <= 820) {
        navbar.style.transform = 'translate3d(0, 0, 0)';
        navbar.style.opacity = '1';
        navbar.style.visibility = 'visible';
      }
    }

    // If currently performing smooth scroll from a click, don't override active link
    if (isClickScrolling) return;

    const scrollPos = window.scrollY + 160;
    const docHeight = document.documentElement.scrollHeight;
    const scrollBottom = window.innerHeight + window.scrollY;

    // 1. If at bottom of page, highlight the last nav item (Kontak)
    if (scrollBottom >= docHeight - 80 && navSections.length > 0) {
      setActiveLink(navSections[navSections.length - 1].link);
      return;
    }

    // 2. If at the very top (Hero section), no section link is active
    if (window.scrollY < 120) {
      setActiveLink(null);
      return;
    }

    // 3. Find the last section whose absolute top position has been reached
    let currentItem = null;
    for (let i = 0; i < navSections.length; i++) {
      const sectionTop = navSections[i].el.getBoundingClientRect().top + window.scrollY;
      if (scrollPos >= sectionTop) {
        currentItem = navSections[i];
      }
    }

    setActiveLink(currentItem ? currentItem.link : null);
  };

  window.addEventListener('scroll', updateScrollSpy, { passive: true });
  window.addEventListener('resize', updateScrollSpy, { passive: true });

  // Instant active state on click with smooth scroll locking
  navItems.forEach(link => {
    link.addEventListener('click', function () {
      setActiveLink(this);
      isClickScrolling = true;
      clearTimeout(clickTimeout);
      clickTimeout = setTimeout(() => {
        isClickScrolling = false;
        updateScrollSpy();
      }, 800);

      if (navLinks) navLinks.classList.remove('mobile-open');
      if (mobileToggle) mobileToggle.innerHTML = ICON_HAMBURGER_SVG;
    });
  });

  // Check on page load and on hashchange
  updateScrollSpy();
  window.addEventListener('hashchange', updateScrollSpy);
}

/* --------------------------------------------------------------------------
   SKILL CATEGORY FILTER TABS
   -------------------------------------------------------------------------- */
function initSkillFilters() {
  const filterBtns = document.querySelectorAll('.skill-tab-btn');
  const skillCards = document.querySelectorAll('.skill-category-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterCategory = btn.getAttribute('data-filter');

      skillCards.forEach(card => {
        if (filterCategory === 'all' || card.getAttribute('data-category') === filterCategory) {
          card.style.display = 'flex';
          card.style.animation = 'fadeInUp 0.35s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   CASE STUDY MODALS (SIBANSAR & SIPOSTAM)
   -------------------------------------------------------------------------- */
const caseStudyData = {
  sibansar: {
    title: 'SIBANSAR - Sistem Informasi Bantuan Sarana Prasarana',
    subtitle: 'Dinas Perkebunan Provinsi Jawa Barat & Proyek Tugas Akhir D3',
    role: 'System Analyst & Web Developer / QA Tester',
    duration: 'Maret 2026 – Juni 2026',
    problem: 'Penyaluran bantuan sarana dan prasarana (sarpras) perkebunan kepada ratusan kelompok tani sebelumnya menghadapi kendala verifikasi fisik, penumpukan berkas manual, duplikasi penerima bantuan, dan sulitnya melacak tahapan disposisi/persetujuan oleh Kepala Bidang.',
    solution: 'Merancang dan mengembangkan aplikasi web terintegrasi berbasis Laravel & MySQL yang memisahkan akses pengguna ke dalam 4 peran (Role-Based Access Control). Dilengkapi alur verifikasi berkas digital bertahap, notifikasi status pengajuan, pelacakan riwayat bantuan, dan cetak berita acara serta laporan rekapitulasi real-time.',
    actors: [
      { name: 'Admin', desc: 'Manajemen pengguna, pengelolaan hak akses peran (RBAC), serta pemeliharaan master data sarana & prasarana.' },
      { name: 'Kelompok Tani / Petani', desc: 'Mengajukan proposal bantuan secara online, mengunggah syarat legalitas, dan memantau status persetujuan secara transparan.' },
      { name: 'Operator Dinas', desc: 'Verifikasi kelengkapan berkas fisik & digital, validasi persyaratan lapangan, dan pembuatan rekomendasi teknis.' },
      { name: 'Kepala Bidang (Kabid)', desc: 'Meninjau berkas rekomendasi, validasi final persetujuan/penolakan (approval/reject), serta memantau dashboard penyaluran bantuan.' }
    ],
    testing: [
      'Metode Pengujian: Boundary Value Analysis (BVA) & Black Box Functional Testing (28 Test Cases resmi).',
      'Pengujian Validasi Form & Batas Karakter: Register & Login (PDHUPL-1 & PDHUPL-2) menguji batas min password (8 kar), batas max kode kelompok (50 kar), dan format email.',
      'Pengujian Input Angka & File Attachment: Kelola Pengajuan (PDHUPL-4) menguji batas min jumlah (1 unit), max (10.000 unit), dan batas ukuran file proposal (max 2048 KB / 2 MB).',
      'Pengujian Alur Verifikasi & BAST: Verifikasi Operator (PDHUPL-5) & Persetujuan Kabid (PDHUPL-6) menguji batas alasan revisi/tolak (max 1000 kar) serta file BAST (max 5120 KB / 5 MB).',
      'Pengujian Filter Laporan: Kelola Laporan (PDHUPL-7) memvalidasi anomali tanggal akhir < tanggal awal dan pencarian nama kelompok max 50 karakter.',
      'Dokumen Resmi: Bab V Laporan Tugas Akhir D3 ULBI & Dokumen Pembangunan Perangkat Lunak (DPPL) SIBANSAR.'
    ],
    qaDoc: 'assets/BVA_SIBANSAR.pdf',
    implementations: [
      { src: 'assets/implementasi/sibansar-dashboard-kabid.png', title: 'Dasbor Kepala Bidang (Kabid)', sub: 'Verifikasi Persetujuan Akhir & Monitoring', role: 'Kabid' },
      { src: 'assets/implementasi/sibansar-kelola-pengajuan.png', title: 'Halaman Kelola Pengajuan Bantuan', sub: 'Tabel Rekapitulasi Berkas & Status', role: 'Operator & Kabid' },
      { src: 'assets/implementasi/sibansar-dashboard-operator.png', title: 'Dasbor Operator Dinas', sub: 'Pemeriksaan Berkas Fisik & Digital', role: 'Operator' },
      { src: 'assets/implementasi/sibansar-dashboard-petani.png', title: 'Dasbor Kelompok Tani', sub: 'Pengajuan Proposal Mandiri & Tracking', role: 'Petani' },
      { src: 'assets/implementasi/sibansar-kelola-laporan.png', title: 'Halaman Kelola Laporan', sub: 'Rekapitulasi Penyaluran Bantuan Sarpras', role: 'Dinas' },
      { src: 'assets/implementasi/sibansar-notifikasi.png', title: 'Pusat Notifikasi Sistem', sub: 'Update Real-Time Perubahan Status Berkas', role: 'Semua User' },
      { src: 'assets/implementasi/sibansar-login.png', title: 'Antarmuka Login User', sub: 'Autentikasi Multi-Peran (RBAC)', role: 'Sistem' },
      { src: 'assets/implementasi/sibansar-register.png', title: 'Antarmuka Register Kelompok Tani', sub: 'Registrasi Mandiri & Upload Persyaratan', role: 'Petani' }
    ],
    diagrams: [
      { src: 'assets/diagrams/usecase-sibansar.png', title: 'Use Case Diagram', sub: 'Interaksi 4 Aktor Sistem' },
      { src: 'assets/diagrams/activity-pengajuan.png', title: 'Activity Diagram', sub: 'Alur Pengajuan & Verifikasi' },
      { src: 'assets/diagrams/class-diagram-sibansar.png', title: 'Class Diagram', sub: 'Struktur Data & Relasi Entitas' },
      { src: 'assets/diagrams/sequence-verifikasi.png', title: 'Sequence Diagram', sub: 'Alur Validasi Dokumen' }
    ],
    tech: ['PHP 8.x', 'Laravel', 'MySQL', 'Bootstrap 5', 'Enterprise Architect', 'BPMN 2.0', 'Black Box Testing']
  },
  sipostam: {
    title: 'SIPOSTAM - Point of Sales Toko Alam Tembakau',
    subtitle: 'Proyek Akademik II (Metode Agile Scrum)',
    role: 'System Analyst, QA Tester & IT Support',
    duration: 'Februari 2025 – Juli 2025',
    problem: 'Toko Alam Tembakau melayani puluhan transaksi harian namun masih mengandalkan pencatatan nota fisik. Hal ini mengakibatkan selisih stok produk tembakau/rokok secara berkala, ketidakakuratan perhitungan total laba kotor harian, serta lambatnya pencarian riwayat data pemasok (supplier).',
    solution: 'Membangun aplikasi Point of Sales (POS) berbasis web menggunakan pendekatan Scrum. Sistem menyediakan modul kasir instan dengan shortcut keyboard, manajemen multi-kategori produk, pencatatan otomatis pembelian dari supplier, kartu stok otomatis (stock movement), dan dashboard analitik pendapatan.',
    actors: [
      { name: 'Pemilik Toko (Owner)', desc: 'Melihat dashboard penjualan real-time, laporan laba/rugi, manajemen pengguna/kasir, dan evaluasi pembelian barang.' },
      { name: 'Kasir', desc: 'Melayani transaksi penjualan cepat, cetak nota struk belanja, memeriksa ketersediaan stok, dan menutup kasir harian.' }
    ],
    testing: [
      'Metode Pengujian: Black Box Testing Unit & Fungsional (Dokumentasi Perangkat Lunak Bab 6 - 9 Use Case Suites).',
      'Pengujian Modul Login (PDHUPL-1): Memvalidasi kondisi input kosong, username/password salah, dan pengalihan ke antarmuka Kasir vs Owner.',
      'Pengujian Master Data (PDHUPL-2 s/d PDHUPL-6): Pengujian penambahan, pembaruan, dan penghapusan User, Supplier, Produk & Kategori.',
      'Pengujian Transaksi Pembelian & Penjualan (PDHUPL-7 & PDHUPL-8): Validasi form transaksi, kalkulasi belanja & kembalian, cetak nota struk, dan otomatisasi mutasi stok.',
      'Pengujian Laporan Keuangan (PDHUPL-9): Verifikasi keakuratan kalkulasi omset kotor, modal beli barang, dan laba bersih harian/bulanan.',
      'Dokumen Resmi: Bab 6 Pengujian Sistem Informasi Point of Sales (POS) Toko Alam Tembakau · ULBI.'
    ],
    qaDoc: 'assets/BLACKBOX_SIPOSTAM.pdf',
    implementations: [
      { src: 'assets/implementasi/sipostam-transaksi-penjualan.png', title: 'Transaksi Penjualan Kasir POS', sub: 'Modul Kasir Cepat, Barcode, Diskon & Struk', role: 'Kasir' },
      { src: 'assets/implementasi/sipostam-dashboard-admin.png', title: 'Dasbor Utama Administrator', sub: 'Omset Harian, Rekap Pendapatan & Stok', role: 'Owner' },
      { src: 'assets/implementasi/sipostam-dashboard-kasir.png', title: 'Dasbor Kasir Harian', sub: 'Status Kasir, Shift & Ringkasan Penjualan', role: 'Kasir' },
      { src: 'assets/implementasi/sipostam-transaksi-pembelian.png', title: 'Kelola Transaksi Pembelian', sub: 'Pencatatan Masuk Produk dari Supplier', role: 'Admin' },
      { src: 'assets/implementasi/sipostam-kelola-produk.png', title: 'Kelola Master Produk & Stok', sub: 'Kategori, Satuan, Harga Beli & Jual', role: 'Admin' },
      { src: 'assets/implementasi/sipostam-kelola-user.png', title: 'Kelola Pengguna Sistem', sub: 'Pengaturan Akun & Wewenang Peran', role: 'Admin' },
      { src: 'assets/implementasi/sipostam-login.png', title: 'Halaman Login SIPOSTAM', sub: 'Autentikasi Hak Akses Kasir vs Owner', role: 'Sistem' }
    ],
    diagrams: [
      { src: 'assets/diagrams/class-diagram-sibansar.png', title: 'ERD & Data Modeling', sub: 'Skema Database Transaksi & Inventori' },
      { src: 'assets/diagrams/usecase-sibansar.png', title: 'Use Case POS', sub: 'Aktor Kasir & Owner' }
    ],
    tech: ['PHP', 'Laravel / MVC', 'MySQL', 'JavaScript', 'Scrum / Agile', 'Test Case Design']
  }
};

function initModals() {
  const modalOverlay = document.getElementById('caseStudyModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  const openBtns = document.querySelectorAll('.open-case-study');

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectKey = btn.getAttribute('data-project');
      const data = caseStudyData[projectKey];
      if (data) {
        populateModal(data);
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (closeBtn && modalOverlay) {
    closeBtn.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });

    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Handle escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (modalOverlay) modalOverlay.classList.remove('active');
      const lightbox = document.getElementById('lightboxOverlay');
      if (lightbox) lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

function populateModal(data) {
  document.getElementById('modalTitle').textContent = data.title;
  document.getElementById('modalSubtitle').textContent = data.subtitle;
  document.getElementById('modalRole').textContent = data.role;
  document.getElementById('modalDuration').textContent = data.duration;
  document.getElementById('modalProblem').textContent = data.problem;
  document.getElementById('modalSolution').textContent = data.solution;

  // Actors
  const actorsContainer = document.getElementById('modalActors');
  actorsContainer.innerHTML = '';
  data.actors.forEach(actor => {
    const div = document.createElement('div');
    div.className = 'quick-stat-box';
    div.style.textAlign = 'left';
    div.innerHTML = `
      <div style="font-weight: 700; color: var(--accent-primary); font-size: 0.95rem; margin-bottom: 4px;">${actor.name}</div>
      <div style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5;">${actor.desc}</div>
    `;
    actorsContainer.appendChild(div);
  });

  // Testing & QA
  const testingContainer = document.getElementById('modalTesting');
  testingContainer.innerHTML = '';
  data.testing.forEach(test => {
    const li = document.createElement('li');
    li.className = 'competency-item';
    li.innerHTML = `
      <span class="check-icon">✓</span>
      <span>${test}</span>
    `;
    testingContainer.appendChild(li);
  });

  if (data.qaDoc) {
    const liDoc = document.createElement('li');
    liDoc.style.marginTop = '10px';
    liDoc.style.listStyle = 'none';
    liDoc.innerHTML = `
      <a href="${data.qaDoc}" target="_blank" class="exp-cert-btn" style="padding: 7px 14px; font-size: 0.84rem; display: inline-flex;">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
        <span>Lihat Bukti Dokumentasi & QA (PDF) ↗</span>
      </a>
    `;
    testingContainer.appendChild(liDoc);
  }

  // Implementations Gallery (Bukti Gambar Implementasi Sistem Nyata)
  const implContainer = document.getElementById('modalImplementations');
  if (implContainer) {
    implContainer.innerHTML = '';
    if (data.implementations && data.implementations.length > 0) {
      data.implementations.forEach(impl => {
        const item = document.createElement('div');
        item.className = 'impl-screenshot-card';
        item.innerHTML = `
          <div class="impl-card-img-wrap">
            <img src="${impl.src}" alt="${impl.title}" loading="lazy" />
            <span class="impl-card-badge">Peran: ${impl.role}</span>
            <div class="impl-card-zoom-hint"><svg class="zoom-hint-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg> Perbesar</div>
          </div>
          <div class="impl-card-info">
            <div class="impl-card-title">${impl.title}</div>
            <div class="impl-card-sub">${impl.sub}</div>
          </div>
        `;
        item.addEventListener('click', () => {
          openLightbox(impl.src, `Bukti Implementasi: ${impl.title} (${impl.sub})`);
        });
        implContainer.appendChild(item);
      });
    }
  }

  // Diagrams Gallery (Artefak Pemodelan)
  const diagramsContainer = document.getElementById('modalDiagrams');
  diagramsContainer.innerHTML = '';
  data.diagrams.forEach(diag => {
    const item = document.createElement('div');
    item.className = 'diagram-item open-lightbox';
    item.setAttribute('data-img', diag.src);
    item.setAttribute('data-caption', `${diag.title} - ${diag.sub}`);
    item.innerHTML = `
      <div class="diagram-thumb">
        <img src="${diag.src}" alt="${diag.title}" loading="lazy" />
      </div>
      <div class="diagram-caption">
        <strong>${diag.title}</strong>
        <span class="diagram-open-hint"><svg class="zoom-hint-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg> Buka Diagram</span>
      </div>
    `;
    item.addEventListener('click', () => {
      openLightbox(diag.src, `${diag.title} - ${diag.sub}`);
    });
    diagramsContainer.appendChild(item);
  });

  // Tech tags
  const techContainer = document.getElementById('modalTech');
  techContainer.innerHTML = '';
  data.tech.forEach(t => {
    const span = document.createElement('span');
    span.className = 'pill-badge';
    span.textContent = t;
    techContainer.appendChild(span);
  });
}

/* --------------------------------------------------------------------------
   LIGHTBOX FOR ARTIFACT INSPECTOR / DIAGRAM ZOOM
   -------------------------------------------------------------------------- */
function initLightbox() {
  const lightbox = document.getElementById('lightboxOverlay');
  const lightboxImg = document.getElementById('lightboxImage');
  const lightboxCap = document.getElementById('lightboxCaption');
  const closeBtn = document.getElementById('lightboxCloseBtn');

  if (closeBtn && lightbox) {
    closeBtn.addEventListener('click', () => {
      lightbox.classList.remove('active');
    });

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target === closeBtn) {
        lightbox.classList.remove('active');
      }
    });
  }

  // Bind any existing elements with open-lightbox class
  document.querySelectorAll('.open-lightbox').forEach(el => {
    el.addEventListener('click', () => {
      const src = el.getAttribute('data-img');
      const cap = el.getAttribute('data-caption');
      openLightbox(src, cap);
    });
  });
}

function openLightbox(src, caption) {
  const lightbox = document.getElementById('lightboxOverlay');
  const lightboxImg = document.getElementById('lightboxImage');
  const lightboxCap = document.getElementById('lightboxCaption');

  if (lightbox && lightboxImg) {
    lightboxImg.src = src;
    if (lightboxCap) lightboxCap.textContent = caption || 'Diagram Artefak Sistem';
    lightbox.classList.add('active');
  }
}

/* --------------------------------------------------------------------------
   COPY TO CLIPBOARD BUTTONS
   -------------------------------------------------------------------------- */
function initCopyButtons() {
  const copyBtns = document.querySelectorAll('.copy-trigger');

  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Tersalin: ${textToCopy}`);
          const originalText = btn.innerHTML;
          btn.innerHTML = '<span>✓</span> Tersalin!';
          setTimeout(() => {
            btn.innerHTML = originalText;
          }, 2200);
        }).catch(() => {
          showToast('Gagal menyalin teks');
        });
      }
    });
  });
}

/* --------------------------------------------------------------------------
   SIMULATED CONTACT FORM
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('formName').value;
      const email = document.getElementById('formEmail').value;
      const message = document.getElementById('formMessage').value;

      if (!name || !email || !message) {
        showToast('Mohon lengkapi semua kolom formulir');
        return;
      }

      // Simulate sending
      const submitBtn = form.querySelector('button[type="submit"]');
      const origText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<span style="display:inline-flex;align-items:center;margin-right:6px;"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></span> Mengirim...';
      submitBtn.disabled = true;

      setTimeout(() => {
        showToast(`Terima kasih ${name}, pesan Anda berhasil dikirim!`);
        form.reset();
        submitBtn.innerHTML = origText;
        submitBtn.disabled = false;
      }, 1200);
    });
  }
}

/* --------------------------------------------------------------------------
   TOAST NOTIFICATION HELPER
   -------------------------------------------------------------------------- */
function showToast(message) {
  let toast = document.getElementById('toastNotice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<span style="display:inline-flex;align-items:center;color:#10b981;margin-right:4px;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></span> <span>${message}</span>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

/* --------------------------------------------------------------------------
   SCROLL-TRIGGERED ANIMATIONS (Intersection Observer)
   -------------------------------------------------------------------------- */
function initScrollAnimations() {
  const animatedEls = document.querySelectorAll(
    '.exp-row, .clean-project-card, .skill-col-card, .achieve-card, ' +
    '.cert-featured-card, .cert-small-card, .contact-link-box, ' +
    '.collab-wrapper, .hero-cert-badge, .focus-item, .section-alt'
  );

  animatedEls.forEach((el) => {
    el.classList.add('anim-hidden');
    el.style.setProperty('--anim-delay', '0ms');
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      const delay = Number.parseFloat(el.style.getPropertyValue('--anim-delay')) || 0;

      const reveal = () => {
        el.classList.add('anim-visible');
        el.classList.remove('anim-hidden');
      };

      if (delay > 0) {
        requestAnimationFrame(() => setTimeout(reveal, Math.min(delay, 120)));
      } else {
        requestAnimationFrame(reveal);
      }

      observer.unobserve(el);
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -5% 0px'
  });

  document.querySelectorAll('.anim-hidden').forEach(el => observer.observe(el));
}

/* --------------------------------------------------------------------------
   READING PROGRESS BAR
   -------------------------------------------------------------------------- */
function initReadingProgress() {
  const bar = document.createElement('div');
  bar.id = 'readingProgress';
  bar.style.cssText = [
    'position:fixed', 'top:0', 'left:0', 'height:3px', 'width:0%',
    'background:linear-gradient(90deg,#2563eb,#60a5fa)',
    'z-index:9999', 'transition:width 0.08s linear', 'pointer-events:none',
    'border-radius:0 2px 2px 0'
  ].join(';');
  document.body.appendChild(bar);

  window.addEventListener('scroll', () => {
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docH > 0 ? Math.min((window.scrollY / docH) * 100, 100) : 0;
    bar.style.width = pct + '%';
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   ANIMATED NUMBER COUNTERS
   -------------------------------------------------------------------------- */
function initNumberCounters() {
  const statNums = document.querySelectorAll('.stat-num');
  const seen = new WeakSet();

  const countUp = (el) => {
    if (seen.has(el)) return;
    seen.add(el);
    const raw = el.textContent.trim();
    const suffix = raw.replace(/[\d.]/g, '');
    const value = parseFloat(raw) || 0;
    const isFloat = raw.includes('.');
    const duration = 1500;
    const startTime = performance.now();

    const update = (now) => {
      const t = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const cur = eased * value;
      el.textContent = isFloat ? cur.toFixed(2) + suffix : Math.round(cur) + suffix;
      if (t < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  };

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { countUp(e.target); obs.unobserve(e.target); }
    });
  }, { threshold: 0.5 });

  statNums.forEach(el => obs.observe(el));
}

/* --------------------------------------------------------------------------
   BACK TO TOP BUTTON
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const btn = document.createElement('button');
  btn.id = 'backToTopBtn';
  btn.title = 'Kembali ke atas';
  btn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="18 15 12 9 6 15"/></svg>';
  btn.style.cssText = [
    'position:fixed', 'bottom:28px', 'right:28px', 'width:44px', 'height:44px',
    'border-radius:50%', 'background:#0f172a', 'color:#fff', 'border:none',
    'cursor:pointer', 'display:flex', 'align-items:center', 'justify-content:center',
    'box-shadow:0 4px 20px rgba(15,23,42,0.3)',
    'opacity:0', 'transform:translateY(14px) scale(0.8)',
    'transition:all 0.35s cubic-bezier(0.34,1.56,0.64,1)',
    'z-index:800', 'pointer-events:none'
  ].join(';');
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    const show = window.scrollY > 380;
    btn.style.opacity = show ? '1' : '0';
    btn.style.transform = show ? 'translateY(0) scale(1)' : 'translateY(14px) scale(0.8)';
    btn.style.pointerEvents = show ? 'auto' : 'none';
  }, { passive: true });

  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Add hover effect
  btn.addEventListener('mouseenter', () => { btn.style.background = '#2563eb'; btn.style.transform = 'translateY(-2px) scale(1.08)'; });
  btn.addEventListener('mouseleave', () => { btn.style.background = '#0f172a'; btn.style.transform = 'translateY(0) scale(1)'; });
}

/* --------------------------------------------------------------------------
   RIPPLE EFFECT ON BUTTONS
   -------------------------------------------------------------------------- */
function initRippleEffects() {
  document.querySelectorAll('.btn, .btn-nav-cv').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const rect = this.getBoundingClientRect();
      const ripple = document.createElement('span');
      const size = Math.max(rect.width, rect.height) * 2;
      ripple.style.cssText = [
        `position:absolute`,
        `width:${size}px`, `height:${size}px`,
        `left:${e.clientX - rect.left - size / 2}px`,
        `top:${e.clientY - rect.top - size / 2}px`,
        'background:rgba(255,255,255,0.25)',
        'border-radius:50%',
        'transform:scale(0)',
        'animation:ripple-anim 0.55s ease-out forwards',
        'pointer-events:none'
      ].join(';');
      const orig = this.style.position;
      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);
      setTimeout(() => { ripple.remove(); if (!orig) this.style.position = ''; }, 600);
    });
  });
}

/* --------------------------------------------------------------------------
   ENHANCED MOBILE DRAWER WITH BACKDROP
   -------------------------------------------------------------------------- */
function initMobileDrowerEnhanced() {
  if (window.__mobileDrawerInitialized) return;
  window.__mobileDrawerInitialized = true;

  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  if (!mobileToggle || !navLinks) return;

  let backdrop = document.getElementById('mobileBackdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.id = 'mobileBackdrop';
    backdrop.style.cssText = [
      'position:fixed', 'inset:0',
      'background:rgba(15,23,42,0.55)',
      'backdrop-filter:blur(4px)',
      'z-index:950',
      'opacity:0', 'pointer-events:none',
      'transition:opacity 0.3s ease'
    ].join(';');
    document.body.appendChild(backdrop);
  }

  const openMenu = () => {
    navLinks.classList.add('mobile-open');
    backdrop.style.opacity = '1';
    backdrop.style.pointerEvents = 'auto';
    mobileToggle.innerHTML = ICON_CLOSE_SVG;
    mobileToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    navLinks.classList.remove('mobile-open');
    backdrop.style.opacity = '0';
    backdrop.style.pointerEvents = 'none';
    mobileToggle.innerHTML = ICON_HAMBURGER_SVG;
    mobileToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  mobileToggle.onclick = (e) => {
    e.stopPropagation();
    if (navLinks.classList.contains('mobile-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  backdrop.onclick = closeMenu;

  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      setTimeout(closeMenu, 120);
    });
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });
}

/* --------------------------------------------------------------------------
   TYPING ANIMATION FOR HERO ROLE
   -------------------------------------------------------------------------- */
function initTypingAnimation() {
  const heroRole = document.querySelector('.hero-role');
  if (!heroRole) return;

  const roles = [
    'Junior System Analyst · QA Tester',
    'IT Support · Helpdesk & Troubleshooting',
    'Black Box Tester · QA Tester',
    'Business Process Modeler · BPMN',
    'Web Developer · Laravel & MySQL'
  ];

  let roleIdx = 0, charIdx = roles[0].length, isDeleting = false, isPaused = false;

  // Inject cursor
  const textNode = document.createTextNode(roles[0]);
  const cursor = document.createElement('span');
  cursor.textContent = '|';
  cursor.id = 'typingCursor';
  cursor.style.cssText = 'color:var(--accent-blue);margin-left:1px;';
  heroRole.textContent = '';
  heroRole.appendChild(textNode);
  heroRole.appendChild(cursor);

  const type = () => {
    if (isPaused) return;
    const role = roles[roleIdx];
    const speed = isDeleting ? 38 : 72;

    if (!isDeleting) {
      charIdx++;
      textNode.textContent = role.slice(0, charIdx);
      if (charIdx >= role.length) {
        isPaused = true;
        setTimeout(() => { isDeleting = true; isPaused = false; type(); }, 2600);
        return;
      }
    } else {
      charIdx--;
      textNode.textContent = role.slice(0, charIdx);
      if (charIdx === 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
      }
    }
    setTimeout(type, speed);
  };

  setTimeout(type, 3200);
}

/* --------------------------------------------------------------------------
   SUBTLE CARD TILT ON HOVER
   -------------------------------------------------------------------------- */
function initCardTiltEffect() {
  document.querySelectorAll('.clean-project-card, .achieve-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(700px) rotateX(${y * -4}deg) rotateY(${x * 4}deg) translateY(-3px)`;
      card.style.transition = 'transform 0.12s ease';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.35s ease, box-shadow 0.35s ease';
    });
  });
}
















