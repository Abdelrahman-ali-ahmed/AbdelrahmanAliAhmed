import { FaPeopleGroup, FaArrowTrendUp, FaRegStar } from "react-icons/fa6";
import { CiImageOn } from "react-icons/ci";
import { AiOutlineMessage } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { IoCodeSlashSharp } from "react-icons/io5";

export const servicesData = [
  {
    title: {
      ar: "إدارة قنوات التواصل الاجتماعي",
      en: "Social Media Management",
    },
    colorClass: "service-color-1",
    icon: <FaPeopleGroup size={40} />,
    description: {
      ar: "بناء حضور رقمي قوي ومجتمع متفاعل حول علامتك التجارية عبر المنصات المختلفة.",
      en: "Build a strong digital presence and an engaged community around your brand across different platforms.",
    },
    details: {
      ar: `<p class="mb-3">نحن لا ندير صفحات فقط، بل نبني مجتمعات رقمية نابضة بالحياة...</p>
      <ul class="list-disc pr-5 mt-2 space-y-2">
        <li><strong>استلام وفهم الهوية:</strong> نبدأ باستيعاب كامل لهوية البراند...</li>
        <li><strong>إعداد خطة المحتوى:</strong> نضع استراتيجية محتوى شهرية مبتكرة...</li>
        <li><strong>التصميم والتنفيذ:</strong> يقوم فريق المبدعين لدينا...</li>
        <li><strong>الجدولة والنشر:</strong> نلتزم بالنشر في الأوقات المثالية...</li>
        <li><strong>المتابعة والتفاعل:</strong> نتابع التعليقات والرسائل...</li>
        <li><strong>التقارير والتحسين:</strong> نقدم تقريراً شهرياً مفصلاً...</li>
      </ul>`,
      en: `<p class="mb-3">We don’t just manage pages; we build vibrant digital communities...</p>
      <ul class="list-disc pr-5 mt-2 space-y-2">
        <li><strong>Understanding the brand:</strong> We start by fully absorbing your brand identity...</li>
        <li><strong>Content calendar:</strong> We create an innovative monthly content strategy...</li>
        <li><strong>Design & execution:</strong> Our creative team designs posts that match your brand identity...</li>
        <li><strong>Scheduling & publishing:</strong> We publish at optimal times for maximum reach...</li>
        <li><strong>Monitoring & engagement:</strong> We engage with comments and messages...</li>
        <li><strong>Reports & optimization:</strong> Monthly reports with insights and improvements...</li>
      </ul>`,
    },
  },
  {
    title: { ar: "التصميمات والبوستات", en: "Designs & Posts" },
    colorClass: "service-color-2",
    icon: <CiImageOn size={40} />,
    description: {
      ar: "نحول أفكارك إلى محتوى بصري جذاب يعكس هوية علامتك التجارية ويخطف الأنظار.",
      en: "We turn your ideas into eye-catching visuals that reflect your brand identity.",
    },
    details: {
      ar: `<p class="mb-3">التصميم الجذاب هو أول نقطة اتصال...</p>
      <ul class="list-disc pr-5 mt-2 space-y-2">
        <li><strong>تحديد الهدف:</strong> نحدد الهدف من كل تصميم...</li>
        <li><strong>كتابة النصوص:</strong> نصيغ رسائل تسويقية مؤثرة...</li>
        <li><strong>التنفيذ الإبداعي:</strong> يقوم فريق التصميم بابتكار تصاميم...</li>
        <li><strong>المراجعة والتعديل:</strong> نتيح لك مراجعة العمل قبل النشر...</li>
        <li><strong>النشر والمتابعة:</strong> ننشر المحتوى ونتابع أداءه...</li>
      </ul>`,
      en: `<p class="mb-3">Attractive design is the first point of contact with your customer...</p>
      <ul class="list-disc pr-5 mt-2 space-y-2">
        <li><strong>Define the goal:</strong> Each design has a clear purpose...</li>
        <li><strong>Copywriting:</strong> We craft strong marketing messages...</li>
        <li><strong>Creative execution:</strong> Our designers produce high-quality visuals...</li>
        <li><strong>Review & revisions:</strong> You review before publishing...</li>
        <li><strong>Publishing & monitoring:</strong> We publish and track performance...</li>
      </ul>`,
    },
  },
  {
    title: { ar: "خدمة الرد والمتابعة", en: "Response & Follow-up Service" },
    colorClass: "service-color-3",
    icon: <AiOutlineMessage size={40} />,
    description: {
      ar: "نكون صوت علامتك التجارية الذي لا يهدأ، ونبني علاقات قوية مع عملائك.",
      en: "We become the active voice of your brand, building strong relationships with customers.",
    },
    details: {
      ar: `<p class="mb-3">نحول كل استفسار إلى فرصة بيع...</p>
      <ul class="list-disc pr-5 mt-2 space-y-2">
        <li><strong>إعداد دليل الردود:</strong> صياغة الأسئلة الشائعة...</li>
        <li><strong>التدريب على نبرة البراند:</strong> توحيد أسلوب الردود...</li>
        <li><strong>متابعة فورية:</strong> الرد السريع على الرسائل...</li>
        <li><strong>تصعيد الاستفسارات:</strong> إشعارك بما يتطلب تدخلك...</li>
        <li><strong>تقارير أسبوعية:</strong> متابعة الاستفسارات والنتائج...</li>
      </ul>`,
      en: `<p class="mb-3">We turn every inquiry into an opportunity...</p>
      <ul class="list-disc pr-5 mt-2 space-y-2">
        <li><strong>FAQ preparation:</strong> Collecting and refining responses...</li>
        <li><strong>Brand tone training:</strong> Ensuring consistent communication...</li>
        <li><strong>Instant follow-up:</strong> Responding quickly to messages...</li>
        <li><strong>Escalation:</strong> Notifying you about critical inquiries...</li>
        <li><strong>Weekly reports:</strong> Summarizing inquiries and conversions...</li>
      </ul>`,
    },
  },
  {
    title: { ar: "الحملات الإعلانية المدفوعة", en: "Paid Advertising Campaigns" },
    colorClass: "service-color-4",
    icon: <FaArrowTrendUp size={40} />,
    description: {
      ar: "نصل بإعلاناتك إلى الجمهور المناسب في الوقت المناسب لتحقيق أفضل عائد على الاستثمار.",
      en: "We deliver your ads to the right audience at the right time for maximum ROI.",
    },
    details: {
      ar: `<p class="mb-3">نحن لا ننفق ميزانيتك الإعلانية...</p>
      <ul class="list-disc pr-5 mt-2 space-y-2">
        <li><strong>تحديد هدف الحملة:</strong> مبيعات، عملاء جدد...</li>
        <li><strong>بناء الاستراتيجية:</strong> تحديد الجمهور والمنصة...</li>
        <li><strong>تصميم الإعلانات:</strong> ابتكار تصاميم ونصوص...</li>
        <li><strong>الإطلاق والمتابعة:</strong> مراقبة الأداء يوميًا...</li>
        <li><strong>التحسين المستمر:</strong> تعديلات لزيادة الأداء...</li>
        <li><strong>تقرير نهائي:</strong> قياس ROI والنتائج...</li>
      </ul>`,
      en: `<p class="mb-3">We invest your ad budget wisely...</p>
      <ul class="list-disc pr-5 mt-2 space-y-2">
        <li><strong>Campaign objectives:</strong> Sales, leads, traffic, or engagement...</li>
        <li><strong>Strategy:</strong> Define audience, platform, budget, and message...</li>
        <li><strong>Ad design:</strong> Create engaging visuals and copy...</li>
        <li><strong>Launch & monitoring:</strong> Daily performance checks...</li>
        <li><strong>Optimization:</strong> Continuous adjustments for best ROI...</li>
        <li><strong>Final report:</strong> Detailed ROI and insights...</li>
      </ul>`,
    },
  },
  {
    title: { ar: "إنتاج المحتوى المرئي", en: "Visual Content Production" },
    colorClass: "service-color-5",
    icon: <BsFillCameraVideoFill size={40} />,
    description: {
      ar: "ننتج محتوى مرئي احترافي يروي قصة علامتك التجارية ويجذب انتباه جمهورك.",
      en: "We produce professional visual content that tells your brand’s story.",
    },
    details: {
      ar: `<p class="mb-3">الفيديو هو الملك في عالم المحتوى...</p>
      <ul class="list-disc pr-5 mt-2 space-y-2">
        <li><strong>الفكرة والسيناريو:</strong> تحديد فكرة وكتابة سيناريو...</li>
        <li><strong>التحضير والتجهيز:</strong> اختيار الموقع والأدوات...</li>
        <li><strong>التصوير الاحترافي:</strong> تصوير بأعلى جودة...</li>
        <li><strong>المونتاج والإخراج:</strong> تحرير الفيديو...</li>
        <li><strong>النشر الاستراتيجي:</strong> نشر في الأوقات المثالية...</li>
      </ul>`,
      en: `<p class="mb-3">Video is king in digital marketing...</p>
      <ul class="list-disc pr-5 mt-2 space-y-2">
        <li><strong>Idea & script:</strong> Define a creative idea...</li>
        <li><strong>Preparation:</strong> Select location, props, equipment...</li>
        <li><strong>Professional shooting:</strong> High-quality production...</li>
        <li><strong>Editing:</strong> Polished video output...</li>
        <li><strong>Strategic publishing:</strong> Post at optimal times...</li>
      </ul>`,
    },
  },
  {
    title: { ar: "التسويق عبر المؤثرين", en: "Influencer Marketing" },
    colorClass: "service-color-6",
    icon: <FaRegStar size={40} />,
    description: {
      ar: "نصلك بالمؤثرين المناسبين لعلامتك التجارية لزيادة انتشارك ومصداقيتك.",
      en: "We connect you with the right influencers to grow your reach and credibility.",
    },
    details: {
      ar: `<p class="mb-3">نختار المؤثرين بعناية لتحقيق أهدافك...</p>
      <ul class="list-disc pr-5 mt-2 space-y-2">
        <li><strong>تحديد الهدف:</strong> مبيعات أو وعي بالعلامة...</li>
        <li><strong>اختيار المؤثرين:</strong> الأنسب لعلامتك وجمهورك...</li>
        <li><strong>التفاوض والاتفاق:</strong> إدارة الاتفاق بالكامل...</li>
        <li><strong>متابعة التنفيذ:</strong> ضمان الالتزام بالاتفاق...</li>
        <li><strong>تحليل النتائج:</strong> تقرير شفاف بالنتائج...</li>
      </ul>`,
      en: `<p class="mb-3">We carefully select and manage influencer partnerships...</p>
      <ul class="list-disc pr-5 mt-2 space-y-2">
        <li><strong>Define goals:</strong> Sales or brand awareness...</li>
        <li><strong>Influencer selection:</strong> Choosing the best fit...</li>
        <li><strong>Negotiation:</strong> Handling agreements...</li>
        <li><strong>Execution follow-up:</strong> Ensuring delivery...</li>
        <li><strong>Result analysis:</strong> Transparent reports...</li>
      </ul>`,
    },
  },
  {
    title: { ar: "تطوير المواقع والمتاجر", en: "Website & eCommerce Development" },
    colorClass: "service-color-7",
    icon: <IoCodeSlashSharp size={40} />,
    description: {
      ar: "نبني لك واجهة رقمية احترافية، سريعة، ومتجاوبة تمثل أساس وجودك على الإنترنت.",
      en: "We build professional, fast, and responsive websites and online stores.",
    },
    details: {
      ar: `<p class="mb-3">موقعك الإلكتروني هو بطاقتك...</p>
      <ul class="list-disc pr-5 mt-2 space-y-2">
        <li><strong>استلام المتطلبات:</strong> تحديد نوع الموقع...</li>
        <li><strong>الإعداد التقني:</strong> استضافة ونطاق مناسب...</li>
        <li><strong>التصميم والتطوير:</strong> تصميم عصري ومتجاوب...</li>
        <li><strong>إدخال المحتوى:</strong> رفع المنتجات والمحتوى...</li>
        <li><strong>اختبار UX:</strong> ضمان تجربة استخدام سهلة...</li>
        <li><strong>التسليم والتدريب:</strong> تدريب على لوحة التحكم...</li>
        <li><strong>دعم وصيانة:</strong> متابعة وصيانة دورية...</li>
      </ul>`,
      en: `<p class="mb-3">Your website is your digital business card...</p>
      <ul class="list-disc pr-5 mt-2 space-y-2">
        <li><strong>Requirements gathering:</strong> Define scope and features...</li>
        <li><strong>Technical setup:</strong> Hosting, domain, and platform...</li>
        <li><strong>Design & development:</strong> Modern and responsive design...</li>
        <li><strong>Content entry:</strong> Uploading products and initial content...</li>
        <li><strong>UX testing:</strong> Smooth and intuitive user experience...</li>
        <li><strong>Delivery & training:</strong> Handover with admin training...</li>
        <li><strong>Support & maintenance:</strong> Continuous updates and security...</li>
      </ul>`,
    },
  },
];
