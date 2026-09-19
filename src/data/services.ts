export interface ServiceData {
  name: string;
  slug: string;
  title: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCta: string;
  whatIsTitle: string;
  whatIsDescription: string;
  services: Array<{ title: string; description: string }>;
  image: string;
  icon: string;
}

export const services: ServiceData[] = [
  {
    name: 'General Dentistry',
    slug: 'general-dentistry',
    title: 'General Dentistry - Liberty Smile Center',
    description: 'Comprehensive general dentistry services including exams, cleanings, fillings, and preventive care for your oral health.',
    heroTitle: 'General Dentistry',
    heroSubtitle: 'Maintain your oral health with our comprehensive general dentistry services.',
    heroCta: 'Schedule Checkup',
    whatIsTitle: 'Why is General Dentistry Important?',
    whatIsDescription: 'General dentistry focuses on the prevention, diagnosis, and treatment of a wide variety of conditions, disorders, and diseases affecting the teeth, gums, and maxillofacial (jaw and face) region of the body.',
    services: [
      { title: 'Routine Exams & Cleanings', description: 'Regular check-ups are essential for detecting issues early and maintaining optimal oral health.' },
      { title: 'X-Rays', description: 'Advanced imaging to see what is happening beneath the surface.' },
      { title: 'Fillings', description: 'Tooth-colored fillings to restore teeth damaged by decay.' },
      { title: 'Root Canals', description: 'Save infected teeth and relieve pain with comfortable root canal therapy.' },
      { title: 'Extractions', description: 'Safe removal of problem teeth when necessary.' },
      { title: 'Crowns & Bridges', description: 'Restore damaged or missing teeth with natural-looking crowns and bridges.' },
      { title: 'Gum Disease Treatment', description: 'Diagnosis and treatment of periodontal disease to prevent tooth loss.' },
      { title: 'Oral Cancer Screenings', description: 'Early detection of oral cancer for better treatment outcomes.' },
      { title: 'Mouthguards & Nightguards', description: 'Custom protection for teeth grinding and sports activities.' },
    ],
    image: '/images/dental/main-office.webp',
    icon: '🦷',
  },
  {
    name: 'Dental Implants',
    slug: 'dental-implants',
    title: 'Dental Implants - Liberty Smile Center',
    description: 'Permanent tooth replacement with dental implants. Single implants, All-on-4, and full-arch restoration. 0% interest financing available.',
    heroTitle: 'Dental Implants',
    heroSubtitle: 'Replace missing teeth with durable dental implants that look and function like natural teeth.',
    heroCta: 'Schedule Consultation',
    whatIsTitle: 'What are Dental Implants?',
    whatIsDescription: 'Dental implants are artificial tooth roots made of titanium that provide a sturdy foundation for replacement teeth. They are the permanent solution for missing teeth, offering a natural look and feel that restores your confidence and smile.',
    services: [
      { title: 'Single Tooth Implants', description: 'Replace one missing tooth with a natural-looking implant.' },
      { title: 'Multiple Tooth Implants', description: 'Replace several missing teeth with implant-supported bridges.' },
      { title: 'All-on-4 Full Arch', description: 'Restore a full arch of teeth with just four implants.' },
      { title: 'Implant-Supported Dentures', description: 'Secure, stable dentures that snap onto implants.' },
      { title: 'Bone Grafting', description: 'Restore bone density to support dental implants.' },
      { title: 'Sinus Lifts', description: 'Add bone to the upper jaw for implant placement.' },
    ],
    image: '/images/dental/dentist-office-3.webp',
    icon: '⚙️',
  },
  {
    name: 'Orthodontics',
    slug: 'orthodontics',
    title: 'Orthodontics - Liberty Smile Center',
    description: 'Straighten your smile with modern braces and clear aligner solutions. Orthodontic treatment for children, teens, and adults.',
    heroTitle: 'Orthodontics',
    heroSubtitle: 'Straighten your smile with modern braces and clear aligner solutions.',
    heroCta: 'Schedule Consultation',
    whatIsTitle: 'What is Orthodontics?',
    whatIsDescription: 'Orthodontics is the branch of dentistry that corrects teeth and jaws that are positioned improperly. Through careful evaluation and personalized treatment plans, orthodontic care aims to create harmonious facial aesthetics and functional occlusion, resulting in a confident smile and better long-term dental health.',
    services: [
      { title: 'Traditional Braces', description: 'Time-tested metal braces for effective teeth straightening.' },
      { title: 'Ceramic Braces', description: 'Tooth-colored braces that are less visible than metal.' },
      { title: 'Clear Aligners', description: 'Removable, virtually invisible aligners for discreet treatment.' },
      { title: 'Retainers', description: 'Maintain your straightened smile with custom retainers.' },
      { title: 'Early Orthodontic Evaluation', description: 'Assess children age 7+ for early intervention needs.' },
      { title: 'Adult Orthodontics', description: 'It is never too late to achieve the smile you have always wanted.' },
    ],
    image: '/images/dental/office-illustration-02.webp',
    icon: '✨',
  },
  {
    name: 'Cosmetic Dentistry',
    slug: 'cosmetic',
    title: 'Cosmetic Dentistry - Liberty Smile Center',
    description: 'Transform your smile with our advanced cosmetic dental treatments including teeth whitening, veneers, bonding, and smile makeovers.',
    heroTitle: 'Cosmetic Dentistry',
    heroSubtitle: 'Transform your smile with our advanced cosmetic dental treatments for a brighter, more confident you.',
    heroCta: 'Schedule Consultation',
    whatIsTitle: 'What is Cosmetic Dentistry?',
    whatIsDescription: 'Cosmetic dentistry focuses on improving the appearance of your smile through various dental procedures. Our experienced cosmetic dentists use advanced techniques to enhance your smile while maintaining optimal oral health.',
    services: [
      { title: 'Teeth Whitening', description: 'Professional whitening treatments to remove stains and brighten your smile.' },
      { title: 'Veneers', description: 'Custom-made porcelain shells to cover imperfections and create a perfect smile.' },
      { title: 'Bonding', description: 'Tooth-colored resin to repair chips, cracks, and gaps in your teeth.' },
      { title: 'Smile Makeovers', description: 'Comprehensive treatment plans to transform your entire smile.' },
      { title: 'Inlays & Onlays', description: 'Custom restorations for damaged or decayed teeth.' },
    ],
    image: '/images/dental/office-illustration-03.webp',
    icon: '💎',
  },
  {
    name: 'Oral Surgery',
    slug: 'oral-surgery',
    title: 'Oral Surgery - Liberty Smile Center',
    description: 'Expert oral surgery services including extractions, wisdom teeth removal, bone grafting, and implant placement in a comfortable environment.',
    heroTitle: 'Oral Surgery',
    heroSubtitle: 'Expert oral surgery services for complex dental procedures in a comfortable environment.',
    heroCta: 'Schedule Consultation',
    whatIsTitle: 'What is Oral Surgery?',
    whatIsDescription: 'Oral surgery encompasses a range of surgical procedures to treat conditions affecting the mouth, jaw, and face. Our experienced oral surgeons use advanced techniques to ensure optimal outcomes with minimal discomfort.',
    services: [
      { title: 'Tooth Extractions', description: 'Safe and comfortable tooth removal, including complex extractions.' },
      { title: 'Wisdom Teeth Removal', description: 'Expert extraction of impacted and problematic wisdom teeth.' },
      { title: 'Bone Grafting', description: 'Restore bone density for dental implants or improve jaw structure.' },
      { title: 'Implant Placement', description: 'Surgical placement of dental implants for tooth replacement.' },
      { title: 'Crown Lengthening', description: 'Expose more tooth structure for restorations or improve gummy smile.' },
    ],
    image: '/images/dental/dentist-office-3.webp',
    icon: '🔬',
  },
];

export const servicesES: ServiceData[] = [
  {
    name: 'Odontología General',
    slug: 'general-dentistry',
    title: 'Odontología General - Liberty Smile Center',
    description: 'Servicios integrales de odontología general incluyendo exámenes, limpiezas, rellenos y atención preventiva para su salud oral.',
    heroTitle: 'Odontología General',
    heroSubtitle: 'Mantenga su salud oral con nuestros servicios integrales de odontología general.',
    heroCta: 'Programar Chequeo',
    whatIsTitle: '¿Por Qué es Importante la Odontología General?',
    whatIsDescription: 'La odontología general se enfoca en la prevención, diagnóstico y tratamiento de una amplia variedad de condiciones, trastornos y enfermedades que afectan los dientes, encías y la región maxilofacial (mandíbula y cara) del cuerpo.',
    services: [
      { title: 'Exámenes y Limpiezas de Rutina', description: 'Los chequeos regulares son esenciales para detectar problemas temprano.' },
      { title: 'Rayos X', description: 'Imágenes avanzadas para ver lo que está sucediendo debajo de la superficie.' },
      { title: 'Rellenos', description: 'Rellenos del color del diente para reparar dientes dañados por caries.' },
      { title: 'Conductos', description: 'Salve dientes infectados y alivie el dolor con terapia de conducto cómoda.' },
      { title: 'Extracciones', description: 'Extracción segura de dientes problemáticos cuando sea necesario.' },
      { title: 'Coronas y Puentes', description: 'Restaure dientes dañados o perdidos con coronas y puentes de apariencia natural.' },
      { title: 'Tratamiento de Enfermedad de Encías', description: 'Diagnóstico y tratamiento de enfermedad periodontal para prevenir pérdida de dientes.' },
      { title: 'Tamizajes de Cáncer Oral', description: 'Detección temprana de cáncer oral para mejores resultados.' },
      { title: 'Protectores Bucales', description: 'Protección personalizada para rechinar dientes y deportes.' },
    ],
    image: '/images/dental/main-office.webp',
    icon: '🦷',
  },
  {
    name: 'Implantes Dentales',
    slug: 'dental-implants',
    title: 'Implantes Dentales - Liberty Smile Center',
    description: 'Reemplazo permanente de dientes con implantes dentales. Implantes individuales, All-on-4 y restauración de arco completo. Financiamiento 0% interés.',
    heroTitle: 'Implantes Dentales',
    heroSubtitle: 'Reemplace dientes perdidos con implantes dentales duraderos que se ven y funcionan como dientes naturales.',
    heroCta: 'Programar Consulta',
    whatIsTitle: '¿Qué son los Implantes Dentales?',
    whatIsDescription: 'Los implantes dentales son raíces de dientes artificiales hechas de titanio que proporcionan una base sólida para dientes de reemplazo. Son la solución permanente para dientes perdidos, ofreciendo un aspecto y sensación natural que restaura su confianza y sonrisa.',
    services: [
      { title: 'Implantes de un Solo Diente', description: 'Reemplace un diente perdido con un implante de apariencia natural.' },
      { title: 'Implantes de Múltiples Dientes', description: 'Reemplace varios dientes perdidos con puentes soportados por implantes.' },
      { title: 'All-on-4 Arco Completo', description: 'Restaure un arco completo de dientes con solo cuatro implantes.' },
      { title: 'Dentaduras Soportadas por Implantes', description: 'Dentaduras seguras y estables que se ajustan a los implantes.' },
      { title: 'Injerto Óseo', description: 'Restaure la densidad ósea para soportar implantes dentales.' },
      { title: 'Elevación del Seno', description: 'Agregue hueso a la mandíbula superior para colocación de implantes.' },
    ],
    image: '/images/dental/dentist-office-3.webp',
    icon: '⚙️',
  },
  {
    name: 'Ortodoncia',
    slug: 'orthodontics',
    title: 'Ortodoncia - Liberty Smile Center',
    description: 'Enderece su sonrisa con brackets modernos y soluciones de alineadores transparentes. Tratamiento de ortodoncia para niños, adolescentes y adultos.',
    heroTitle: 'Ortodoncia',
    heroSubtitle: 'Enderece su sonrisa con brackets modernos y soluciones de alineadores transparentes.',
    heroCta: 'Programar Consulta',
    whatIsTitle: '¿Qué es la Ortodoncia?',
    whatIsDescription: 'La ortodoncia es la rama de la odontología que corrige los dientes y mandíbulas que están posicionados incorrectamente. A través de evaluación cuidadosa y planes de tratamiento personalizados, la ortodoncia tiene como objetivo crear estética facial armoniosa y oclusión funcional.',
    services: [
      { title: 'Brackets Tradicionales', description: 'Brackets de metal probados por el tiempo para enderezar dientes eficazmente.' },
      { title: 'Brackets de Cerámica', description: 'Brackets del color del diente que son menos visibles que el metal.' },
      { title: 'Alineadores Transparentes', description: 'Alineadores removibles, virtualmente invisibles para tratamiento discreto.' },
      { title: 'Retenedores', description: 'Mantenga su sonrisa enderezada con retenedores personalizados.' },
      { title: 'Evaluación Temprana', description: 'Evalúe niños de 7+ años para necesidades de intervención temprana.' },
      { title: 'Ortodoncia para Adultos', description: 'Nunca es demasiado tarde para lograr la sonrisa que siempre ha querido.' },
    ],
    image: '/images/dental/office-illustration-02.webp',
    icon: '✨',
  },
  {
    name: 'Odontología Cosmética',
    slug: 'cosmetic',
    title: 'Odontología Cosmética - Liberty Smile Center',
    description: 'Transforme su sonrisa con nuestros tratamientos dentales cosméticos avanzados incluyendo blanqueamiento, carillas, adherencia y transformación de sonrisa.',
    heroTitle: 'Odontología Cosmética',
    heroSubtitle: 'Transforme su sonrisa con nuestros tratamientos dentales cosméticos avanzados para una sonrisa más brillante y confiada.',
    heroCta: 'Programar Consulta',
    whatIsTitle: '¿Qué es la Odontología Cosmética?',
    whatIsDescription: 'La odontología cosmética se enfoca en mejorar la apariencia de su sonrisa a través de varios procedimientos dentales. Nuestros dentistas cosméticos experimentados utilizan técnicas avanzadas para mejorar su sonrisa mientras mantienen una salud oral óptima.',
    services: [
      { title: 'Blanqueamiento Dental', description: 'Tratamientos de blanqueamiento profesionales para eliminar manchas.' },
      { title: 'Carillas', description: 'Cubiertas de porcelana personalizadas para cubrir imperfecciones.' },
      { title: 'Adherencia', description: 'Resina del color del diente para reparar astillas, grietas y espacios.' },
      { title: 'Transformación de Sonrisa', description: 'Planes de tratamiento integrales para transformar su sonrisa.' },
      { title: 'Inlays y Onlays', description: 'Restauraciones personalizadas para dientes dañados o con caries.' },
    ],
    image: '/images/dental/office-illustration-03.webp',
    icon: '💎',
  },
  {
    name: 'Cirugía Oral',
    slug: 'oral-surgery',
    title: 'Cirugía Oral - Liberty Smile Center',
    description: 'Servicios expertos de cirugía oral incluyendo extracciones, muelas del juicio, injertos óseos y colocación de implantes en un ambiente cómodo.',
    heroTitle: 'Cirugía Oral',
    heroSubtitle: 'Servicios expertos de cirugía oral para procedimientos dentales complejos en un ambiente cómodo.',
    heroCta: 'Programar Consulta',
    whatIsTitle: '¿Qué es la Cirugía Oral?',
    whatIsDescription: 'La cirugía oral abarca una gama de procedimientos quirúrgicos para tratar condiciones que afectan la boca, la mandíbula y la cara. Nuestros cirujanos orales experimentados utilizan técnicas avanzadas para garantizar resultados óptimos con mínimo malestar.',
    services: [
      { title: 'Extracciones de Dientes', description: 'Extracción de dientes segura y cómoda, incluyendo extracciones complejas.' },
      { title: 'Extracción de Muelas del Juicio', description: 'Extracción experta de muelas del juicio impactadas y problemáticas.' },
      { title: 'Injerto Óseo', description: 'Restaure la densidad ósea para implantes dentales o mejore la estructura.' },
      { title: 'Colocación de Implantes', description: 'Colocación quirúrgica de implantes dentales para reemplazo de dientes.' },
      { title: 'Alargamiento de Corona', description: 'Exponga más estructura del diente para restauraciones.' },
    ],
    image: '/images/dental/dentist-office-3.webp',
    icon: '🔬',
  },
];

export function getServiceBySlug(slug: string, lang: string = 'en'): ServiceData | undefined {
  const serviceList = lang === 'es' ? servicesES : services;
  return serviceList.find((service) => service.slug === slug);
}

export const serviceSlugs = services.map((s) => s.slug);
