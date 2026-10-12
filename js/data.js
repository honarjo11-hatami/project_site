/* ===== Sample Data for Hatami Technical High School ===== */
/* NOTE: All data is sample/placeholder data (نمونه) and editable by admin */

const SCHOOL = {
  name: 'هنرستان فنی و حرفه‌ای دولتی حاتمی',
  department: 'اداره آموزش و پرورش ورزنه',
  address: 'ورزنه، استان اصفهان، خیابان اصلی، هنرستان حاتمی',
  phone: '۰۳۱-۳۲۲۲-XXXX',
  email: 'info@hatami-school.ir',
  officeHours: 'شنبه تا چهارشنبه، ۸:۰۰ تا ۱۵:۰۰',
  heroBadge: 'مهارت، خلاقیت، آینده'
};

const MAJORS = [
  {
    id: 1,
    slug: 'network-software',
    title: 'شبکه و نرم‌افزار رایانه',
    short: 'آشنایی با مفاهیم شبکه، نصب و راه‌اندازی سیستم‌ها و نرم‌افزارهای کامپیوتری',
    description: 'رشته شبکه و نرم‌افزار رایانه به هنرجویان آموزش می‌دهد که چگونه شبکه‌های کامپیوتری را طراحی، راه‌اندازی و مدیریت کنند و با نرم‌افزارهای کاربردی آشنا شوند.',
    skills: ['مدارت شبکه', 'سیستم‌عامل', 'کابل‌کشی شبکه', 'نرم‌افزارهای اداری', 'امنیت شبکه'],
    workshops: ['کارگاه شبکه', 'کارگاه سخت‌افزار'],
    careers: 'اداره شبکه، پشتیبان فنی، کارشناس IT در سازمان‌ها',
    furtherStudy: 'ادامه تحصیل در رشته‌های مهندسی کامپیوتر و فناوری اطلاعات',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=80',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc9067?w=400&q=80'
    ]
  },
  {
    id: 2,
    slug: 'web-development',
    title: 'تولید و توسعه‌دهنده پایگاه‌های اینترنتی',
    short: 'طراحی و توسعه وب‌سایت‌ها و پایگاه‌های اینترنتی با تکنولوژی‌های روز',
    description: 'این رشته هنرجویان را با طراحی و توسعه وب‌سایت‌ها، برنامه‌نویسی فرانت‌اند و بک‌اند و پایگاه داده آشنا می‌کند.',
    skills: ['HTML و CSS', 'JavaScript', 'طراحی رابط کاربری', 'پایگاه داده', 'مدیریت محتوا'],
    workshops: ['کارگاه برنامه‌نویسی وب', 'کارگاه پایگاه داده'],
    careers: 'طراح وب، توسعه‌دهنده فرانت‌اند، مدیر سایت',
    furtherStudy: 'ادامه تحصیل در رشته مهندسی نرم‌افزار و علوم کامپیوتر',
    image: 'https://images.unsplash.com/photo-1467232004584-a768e8f578ba?w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1467232004584-a768e8f578ba?w=400&q=80',
      'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&q=80',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80'
    ]
  },
  {
    id: 3,
    slug: 'photographic',
    title: 'فتوگرافیک',
    short: 'طراحی گرافیکی، چاپ و نشر با نرم‌افزارهای تخصصی طراحی',
    description: 'رشته فتوگرافیک به هنرجویان هنر طراحی گرافیکی، تایپوگرافی، طراحی لوگو و چاپ را آموزش می‌دهد.',
    skills: ['طراحی لوگو', 'تایپوگرافی', 'نرم‌افزار Illustrator', 'نرم‌افزار Photoshop', 'اصول چاپ'],
    workshops: ['کارگاه طراحی گرافیک', 'کارگاه چاپ'],
    careers: 'طراح گرافیک، طراح لوگو، کارشناس چاپ',
    furtherStudy: 'ادامه تحصیل در رشته گرافیک و هنرهای تجسمی',
    image: 'https://images.unsplash.com/photo-1626785771292-12c13037d8a3?w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1626785771292-12c13037d8a3?w=400&q=80',
      'https://images.unsplash.com/photo-1561070791-2516c4efbe0c?w=400&q=80',
      'https://images.unsplash.com/photo-1545235617-7a424c1a60cc?w=400&q=80'
    ]
  },
  {
    id: 4,
    slug: 'photography',
    title: 'عکاسی',
    short: 'اصول عکاسی، نورپردازی، تدوین و پس‌تولید تصاویر',
    description: 'رشته عکاسی به هنرجویان اصول تصویربرداری حرفه‌ای، نورپردازی، تدوین و ویرایش عکس را آموزش می‌دهد.',
    skills: ['اصول عکاسی', 'نورپردازی', 'تدوین تصویر', 'عکاسی پرتره', 'عکاسی طبیعت'],
    workshops: ['کارگاه عکاسی', 'استودیو نورپردازی'],
    careers: 'عکاس حرفه‌ای، عکاس استودیویی، عکاس خبری',
    furtherStudy: 'ادامه تحصیل در رشته عکاسی و هنرهای تصویری',
    image: 'https://images.unsplash.com/photo-1452587925148-ce544bf22e80?w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1452587925148-ce544bf22e80?w=400&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400&q=80',
      'https://images.unsplash.com/photo-1502920917128-1dd1e661e3c0?w=400&q=80'
    ]
  },
  {
    id: 5,
    slug: 'design-sewing',
    title: 'طراحی و دوخت',
    short: 'طراحی الگو، دوخت لباس و خلاقیت در پوشاک',
    description: 'رشته طراحی و دوخت به هنرجویان اصول طراحی لباس، الگوسازی، برش و دوخت حرفه‌ای را آموزش می‌دهد.',
    skills: ['طراحی لباس', 'الگوسازی', 'برش و دوخت', 'انتخاب پارچه', 'اصول مد'],
    workshops: ['کارگاه دوخت', 'کارگاه طراحی لباس'],
    careers: 'طراح لباس، خیاط حرفه‌ای، مشاور مد',
    furtherStudy: 'ادامه تحصیل در رشته طراحی لباس و صنایع نساجی',
    image: 'https://images.unsplash.com/photo-1583947215259-38e63be87bb1?w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583947215259-38e63be87bb1?w=400&q=80',
      'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&q=80',
      'https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80'
    ]
  },
  {
    id: 6,
    slug: 'evening-wear',
    title: 'خیاطی لباس شب و عروس',
    short: 'طراحی و دوخت لباس‌های مجلسی، عروس و شب‌پوش تخصصی',
    description: 'این رشته بر طراحی و دوخت لباس‌های مجلسی و عروس با تکنیک‌های پیشرفته و تزئینات تمرکز دارد.',
    skills: ['دوخت لباس مجلسی', 'تزئینات لباس', 'کار با پارچه‌های خاص', 'ساخت کلاه و شال', 'اصول استایل'],
    workshops: ['کارگاه خیاطی مجلسی', 'کارگاه تزئینات'],
    careers: 'طراح لباس مجلسی، خیاط عروس، استایلیست',
    furtherStudy: 'ادامه تحصیل در رشته طراحی پوشاک و مد',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&q=80',
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80'
    ]
  },
  {
    id: 7,
    slug: 'childcare',
    title: 'تربیت کودک',
    short: 'مراقبت، آموزش و پرورش کودکان پیش‌دبستانی',
    description: 'رشته تربیت کودک به هنرجویان اصول روانشناسی کودک، مراقبت، بازی‌درمانی و آموزش پیش‌دبستانی را آموزش می‌دهد.',
    skills: ['روانشناسی کودک', 'بازی‌درمانی', 'مراقبت از کودک', 'آموزش پیش‌دبستانی', 'هنر و خلاقیت کودک'],
    workshops: ['کارگاه هنر کودک', 'کارگاه بازی‌درمانی'],
    careers: 'معلم پیش‌دبستانی، مربی کودک، مراقب کودک',
    furtherStudy: 'ادامه تحصیل در رشته آموزش ابتدایی و علوم تربیتی',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabbf32333?w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1503454537195-1dcabbf32333?w=400&q=80',
      'https://images.unsplash.com/photo-1587653263995-422a86c30cd2?w=400&q=80',
      'https://images.unsplash.com/photo-15131529163228-671f9f65b9f6?w=400&q=80'
    ]
  },
  {
    id: 8,
    slug: 'architectural-drawing',
    title: 'نقشه‌کشی ساختمان',
    short: 'رسم نقشه‌های معماری، اجرای پروژه‌های ساختمانی با نرم‌افزارهای تخصصی',
    description: 'رشته نقشه‌کشی ساختمان به هنرجویان رسم نقشه‌های معماری، استفاده از AutoCAD و اصول ساختمان‌سازی را آموزش می‌دهد.',
    skills: ['AutoCAD', 'رسم نقشه معماری', 'اصول ساختمان', 'متره و برآورد', 'پرسپکتیو'],
    workshops: ['کارگاه نقشه‌کشی', 'کارگاه ماکت‌سازی'],
    careers: 'نقشه‌کش ساختمان، طراح معماری، کارشناس اجرا',
    furtherStudy: 'ادامه تحصیل در رشته مهندسی عمران و معماری',
    image: 'https://images.unsplash.com/photo-1503387762-592de58ef1c7?w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1503387762-592de58ef1c7?w=400&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356e03?w=400&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80'
    ]
  }
];

const STUDENTS = [
  { id: 1, name: 'نگار احمدی', majorId: 1, bio: 'هنرجوی رشته شبکه و نرم‌افزار، علاقه‌مند به امنیت شبکه', image: '', projectTitle: 'راه‌اندازی شبکه آزمایشگاهی', projectType: 'پروژه عملی', publishedAt: '۱۴۰۳/۰۵/۱۲', mentor: 'هنرآموز رضایی' },
  { id: 2, name: 'سارا محمدی', majorId: 2, bio: 'علاقه‌مند به طراحی وب و رابط کاربری', image: '', projectTitle: 'طراحی سایت هنرستان', projectType: 'پروژه وب', publishedAt: '۱۴۰۳/۰۶/۰۱', mentor: 'هنرآموز کریمی' },
  { id: 3, name: 'مریم حسینی', majorId: 3, bio: 'طراح گرافیک خلاق', image: '', projectTitle: 'طراحی لوگوی برند', projectType: 'طراحی گرافیکی', publishedAt: '۱۴۰۳/۰۴/۲۰', mentor: 'هنرآموز موسوی' },
  { id: 4, name: 'زهرا رضایی', majorId: 4, bio: 'عکاس پرتره و طبیعت', image: '', projectTitle: 'گالری عکس طبیعت ورزنه', projectType: 'عکاسی', publishedAt: '۱۴۰۳/۰۳/۱۵', mentor: 'هنرآموز احمدی' },
  { id: 5, name: 'فاطمه علی‌پور', majorId: 5, bio: 'طراح لباس خلاق', image: '', projectTitle: 'مجموعه لباس بهاری', projectType: 'طراحی لباس', publishedAt: '۱۴۰۳/۰۵/۲۸', mentor: 'هنرآموز صادقی' },
  { id: 6, name: 'الهام نوری', majorId: 6, bio: 'متخصص دوخت لباس مجلسی', image: '', projectTitle: 'لباس عروس طراحی‌شده', projectType: 'خیاطی مجلسی', publishedAt: '۱۴۰۳/۰۶/۱۰', mentor: 'هنرآموز تابش' },
  { id: 7, name: 'سمیرا قاسمی', majorId: 7, bio: 'مربی پیش‌دبستانی آینده‌دار', image: '', projectTitle: 'بسته آموزشی کودکان', projectType: 'محتوای آموزشی', publishedAt: '۱۴۰۳/۰۴/۰۵', mentor: 'هنرآموز رحیمی' },
  { id: 8, name: 'آیدا مرادی', majorId: 8, bio: 'نقشه‌کش ساختمان', image: '', projectTitle: 'نقشه ویلای مدرن', projectType: 'نقشه‌کشی', publishedAt: '۱۴۰۳/۰۵/۱۸', mentor: 'هنرآموز جعفری' },
  { id: 9, name: 'پریسا کاظمی', majorId: 2, bio: 'توسعه‌دهنده وب', image: '', projectTitle: 'فروشگاه آنلاین نمونه', projectType: 'پروژه وب', publishedAt: '۱۴۰۳/۰۶/۲۰', mentor: 'هنرآموز کریمی' },
  { id: 10, name: 'نرگس فلاحی', majorId: 3, bio: 'طراح پوستر و بنر', image: '', projectTitle: 'پوستر جشنواره هنرستان', projectType: 'طراحی گرافیکی', publishedAt: '۱۴۰۳/۰۳/۲۸', mentor: 'هنرآموز موسوی' },
  { id: 11, name: 'شیما عباسی', majorId: 5, bio: 'خیاط و طراح الگو', image: '', projectTitle: 'مجموعه لباس کودک', projectType: 'طراحی لباس', publishedAt: '۱۴۰۳/۰۶/۰۵', mentor: 'هنرآموز صادقی' },
  { id: 12, name: 'مهسا رستمی', majorId: 4, bio: 'عکاس ادیتوریال', image: '', projectTitle: 'پرتره هنرجویان', projectType: 'عکاسی', publishedAt: '۱۴۰۳/۰۵/۲۲', mentor: 'هنرآموز احمدی' }
];

const NEWS = [
  { id: 1, title: 'آغاز ثبت‌نام سال تحصیلی جدید هنرستان حاتمی', summary: 'ثبت‌نام هنرجویان جدید برای سال تحصیلی پیش‌رو آغاز شد.', category: 'ثبت‌نام و پذیرش', date: '۱۴۰۳/۰۶/۰۱', image: 'https://images.unsplash.com/photo-1523050854058-8dfb55845792?w=600&q=80', content: 'ثبت‌نام هنرجویان جدید برای سال تحصیلی پیش‌رو آغاز شد. متقاضیان می‌توانند با مراجعه به دبیرخانه هنرستان و ارائه مدارک لازم ثبت‌نام خود را انجام دهند. مهلت ثبت‌نام تا پایان شهریورماه تعیین شده است.' },
  { id: 2, title: 'برگزاری نمایشگاه آثار هنرجویان رشته فتوگرافیک', summary: 'آثار طراحی‌شده هنرجویان رشته فتوگرافیک در نمایشگاه هنرستان به نمایش گذاشته شد.', category: 'نمایشگاه آثار', date: '۱۴۰۳/۰۵/۲۵', image: 'https://images.unsplash.com/photo-1513475382585-f2fcb4d7d67f?w=600&q=80', content: 'نمایشگاه آثار هنرجویان رشته فتوگرافیک با حضور اولیا و مهمانان برگزار شد. در این نمایشگاه بیش از ۵۰ اثر طراحی گرافیکی و چاپی به نمایش گذاشته شد.' },
  { id: 3, title: 'مشارکت هنرجویان در مسابقه استانی مهارت‌های فنی', summary: 'هنرجویان هنرستان حاتمی در مسابقات استانی مهارت‌های فنی و حرفه‌ای شرکت کردند.', category: 'مسابقات و جشنواره‌ها', date: '۱۴۰۳/۰۵/۱۰', image: 'https://images.unsplash.com/photo-1554415707-0e4f2ad9f0a6?w=600&q=80', content: 'هنرجویان هنرستان حاتمی در مسابقات استانی مهارت‌های فنی و حرفه‌ای در رشته‌های مختلف شرکت کردند و نتایج قابل قبولی کسب نمودند.' },
  { id: 4, title: 'زمان‌بندی امتحانات نوبت اول اعلام شد', summary: 'برنامه امتحانات نوبت اول سال تحصیلی جاری ابلاغ شد.', category: 'امتحانات و برنامه‌ها', date: '۱۴۰۳/۰۴/۲۸', image: 'https://images.unsplash.com/photo-1606326608606-aa0b1f1ab9a4?w=600&q=80', content: 'برنامه امتحانات نوبت اول سال تحصیلی جاری برای تمام رشته‌ها ابلاغ شد. هنرجویان می‌توانند برنامه کامل را از دبیرخانه دریافت کنند.' },
  { id: 5, title: 'راه‌اندازی کارگاه جدید برنامه‌نویسی وب', summary: 'کارگاه جدید برنامه‌نویسی وب با تجهیزات به‌روز در هنرستان راه‌اندازی شد.', category: 'اطلاعیه‌های آموزشی', date: '۱۴۰۳/۰۴/۱۵', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa7f?w=600&q=80', content: 'کارگاه جدید برنامه‌نویسی وب با تجهیزات به‌روز شامل کامپیوترهای جدید و نرم‌افزارهای تخصصی در هنرستان راه‌اندازی شد تا هنرجویان رشته تولید و توسعه‌دهنده پایگاه‌های اینترنتی از امکانات بهتری بهره‌مند شوند.' },
  { id: 6, title: 'جشن فرهنگی و هنری هنرستان حاتمی', summary: 'جشن فرهنگی و هنری با اجرای برنامه‌های متنوع هنرجویان برگزار شد.', category: 'فعالیت‌های فرهنگی', date: '۱۴۰۳/۰۳/۲۰', image: 'https://images.unsplash.com/photo-1492684383065-813446b2887f?w=600&q=80', content: 'جشن فرهنگی و هنری هنرستان حاتمی با اجرای برنامه‌های متنوع هنرجویان شامل نمایشگاه، اجرای موسیقی و تئاتر برگزار شد.' }
];

const NEWS_CATEGORIES = ['اطلاعیه‌های آموزشی', 'ثبت‌نام و پذیرش', 'امتحانات و برنامه‌ها', 'مسابقات و جشنواره‌ها', 'نمایشگاه آثار', 'فعالیت‌های فرهنگی', 'اخبار هنرستان'];

const FEATURES = [
  { icon: 'book', title: 'آموزش مهارت‌محور', desc: 'ترکیب دانش نظری با مهارت‌های عملی و کارگاهی' },
  { icon: 'teacher', title: 'هنرآموزان متخصص', desc: 'بهترین هنرآموزان مجرب و متخصص هر رشته' },
  { icon: 'project', title: 'یادگیری پروژه‌محور', desc: 'یادگیری از طریق پروژه‌های واقعی و کاربردی' },
  { icon: 'creative', title: 'خلاقیت و کارآفرینی', desc: 'پرورش خلاقیت و روحیه کارآفرینی هنرجویان' },
  { icon: 'environment', title: 'محیط آموزشی پویا', desc: 'فضایی پویا و سازنده برای رشد هنرجویان' }
];

const ABOUT_CARDS = [
  { icon: 'layers', title: 'رشته‌های متنوع و مهارت‌محور', desc: 'هشت رشته تخصصی متناسب با علایق و استعدادها' },
  { icon: 'practice', title: 'آموزش همراه با فعالیت عملی', desc: 'کارگاه‌های مجهز و تمرین‌های عملی مستمر' },
  { icon: 'star', title: 'توجه به استعداد و خلاقیت', desc: 'پرورش استعدادهای فردی هر هنرجو' }
];

const VALUES = [
  { icon: 'target', title: 'اهداف آموزشی', desc: 'پرورش هنرجویان متخصص و مهارت‌آموز برای آینده تحصیلی و شغلی با تکیه بر دانش، مهارت و خلاقیت.' },
  { icon: 'eye', title: 'چشم‌انداز', desc: 'تبدیل شدن به مرجع آموزش فنی و حرفه‌ای دخترانه در منطقه و پرورش نیروی متخصص مورد نیاز جامعه.' },
  { icon: 'heart', title: 'ارزش‌ها', desc: 'احترام به فرد، رعایت اخلاق حرفه‌ای، پاسخ‌گویی، شفافیت و تعهد به کیفیت آموزش.' }
];

const TEAM = [
  { name: 'مدیر هنرستان', role: 'مدیریت هنرستان', image: '' },
  { name: 'هنرآموز رشته شبکه', role: 'شبکه و نرم‌افزار', image: '' },
  { name: 'هنرآموز رشته وب', role: 'توسعه وب', image: '' },
  { name: 'هنرآموز رشته فتوگرافیک', role: 'طراحی گرافیک', image: '' }
];

const STATS = [
  { icon: 'layers', number: '۸', label: 'رشته تحصیلی' },
  { icon: 'project', number: '۵۰+', label: 'پروژه ثبت‌شده' },
  { icon: 'gallery', number: '۱۰۰+', label: 'اثر منتشرشده' },
  { icon: 'workshop', number: '۱۰+', label: 'کارگاه و فعالیت' }
];

/* SVG Icon Library */
const ICONS = {
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  teacher: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>',
  project: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>',
  creative: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
  environment: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></svg>',
  layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
  practice: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
  eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
  gallery: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',
  workshop: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
  location: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>',
  chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  award: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>',
  pen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>',
  graduation: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>',
  camera: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>',
  scissors: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>',
  dress: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 2l-4 3-4-3M3 7l5-5 4 3 4-3 5 5-4 4 1 10H6l1-10z"/></svg>',
  child: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="5" r="3"/><path d="M12 8v8m-4 0v6m8-6v6"/></svg>',
  ruler: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 17l14-14 4 4L7 21z"/><path d="M7 7l2 2M11 3l2 2M3 11l2 2M15 11l2 2"/></svg>',
  monitor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  send: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
  telegram: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.5 4.5L2.5 12l5 2 2 6 3-4 5 4z"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  login: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>'
};

const MAJOR_ICONS = {
  1: 'monitor', 2: 'code', 3: 'pen', 4: 'camera',
  5: 'dress', 6: 'scissors', 7: 'child', 8: 'ruler'
};
