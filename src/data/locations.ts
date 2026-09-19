export interface LocationData {
  name: string;
  slug: string;
  title: string;
  description: string;
  address: string;
  streetAddress: string;
  city: string;
  state: string;
  postalCode: string;
  phone: string;
  phoneDisplay: string;
  mapUrl: string;
  geo: {
    latitude: string;
    longitude: string;
  };
  areaServed: string[];
  hours: { day: string; time: string }[];
  services: string[];
  faqs: { question: string; answer: string }[];
}

export const locations: LocationData[] = [
  {
    name: 'South Gate',
    slug: 'south-gate',
    title: 'Dentist South Gate CA | Liberty Smile Center',
    description:
      'Top-rated dentist in South Gate, CA. Dental Implants, Braces, Cosmetic & Oral Surgery. Accepts Medi-Cal and PPO. 0% Interest Financing. Call (323) 564-9400.',
    address: '8330 Long Beach Blvd #107, South Gate, CA 90280',
    streetAddress: '8330 Long Beach Blvd #107',
    city: 'South Gate',
    state: 'CA',
    postalCode: '90280',
    phone: '3235649400',
    phoneDisplay: '(323) 564-9400',
    mapUrl:
      'https://www.google.com/maps?q=Liberty+Smile+Center+8330+Long+Beach+Blvd+South+Gate+CA+90280&output=embed',
    geo: { latitude: '33.966953', longitude: '-118.212711' },
    areaServed: ['South Gate', 'Lynwood', 'Huntington Park', 'Bell Gardens', 'Commerce'],
    hours: [
      { day: 'Monday', time: '9:00 AM – 6:00 PM' },
      { day: 'Tuesday', time: '9:00 AM – 6:00 PM' },
      { day: 'Wednesday', time: '9:00 AM – 6:00 PM' },
      { day: 'Thursday', time: '9:00 AM – 6:00 PM' },
      { day: 'Friday', time: '9:00 AM – 6:00 PM' },
      { day: 'Saturday', time: '9:00 AM – 3:00 PM' },
      { day: 'Sunday', time: 'Closed' },
    ],
    services: ['General Dentistry', 'Dental Implants', 'Orthodontics', 'Cosmetic Dentistry', 'Oral Surgery', 'Emergency Dentistry'],
    faqs: [
      { question: 'Does Liberty Smile Center in South Gate accept Medi-Cal?', answer: 'Yes, we accept Medi-Cal and most PPO insurance plans. Contact our South Gate office at (323) 564-9400 to verify your coverage.' },
      { question: 'Do you offer dental implants in South Gate?', answer: 'Yes. Our South Gate office provides full dental implant services, from single-tooth implants to full-arch restoration. We also offer 0% interest financing.' },
      { question: 'How do I schedule an appointment at the South Gate location?', answer: 'You can call us directly at (323) 564-9400 or use our online contact form to request an appointment. We offer flexible scheduling, including Saturdays.' },
    ],
  },
  {
    name: 'Van Nuys',
    slug: 'van-nuys',
    title: 'Dentist Van Nuys CA | Liberty Smile Center',
    description:
      'Expert dentist in Van Nuys, CA. Dental Implants, Braces, Cosmetic Dentistry & Oral Surgery. 0% Interest Financing. Accepts Medi-Cal & PPO. Call (818) 786-8803.',
    address: '6736 Sepulveda Blvd, Van Nuys, CA 91411',
    streetAddress: '6736 Sepulveda Blvd',
    city: 'Van Nuys',
    state: 'CA',
    postalCode: '91411',
    phone: '8187868803',
    phoneDisplay: '(818) 786-8803',
    mapUrl:
      'https://www.google.com/maps?q=Liberty+Smile+Center+6736+Sepulveda+Blvd+Van+Nuys+CA+91411&output=embed',
    geo: { latitude: '34.201', longitude: '-118.465' },
    areaServed: ['Van Nuys', 'Sherman Oaks', 'North Hollywood', 'Panorama City', 'Valley Glen'],
    hours: [
      { day: 'Monday', time: '9:00 AM – 6:00 PM' },
      { day: 'Tuesday', time: '9:00 AM – 6:00 PM' },
      { day: 'Wednesday', time: '9:00 AM – 6:00 PM' },
      { day: 'Thursday', time: '9:00 AM – 6:00 PM' },
      { day: 'Friday', time: '9:00 AM – 6:00 PM' },
      { day: 'Saturday', time: '9:00 AM – 3:00 PM' },
      { day: 'Sunday', time: 'Closed' },
    ],
    services: ['General Dentistry', 'Dental Implants', 'Orthodontics', 'Cosmetic Dentistry', 'Oral Surgery', 'Emergency Dentistry'],
    faqs: [
      { question: 'Does Liberty Smile Center in Van Nuys accept Medi-Cal?', answer: 'Yes, we accept Medi-Cal and most PPO insurance plans. Contact our Van Nuys office at (818) 786-8803 to verify your coverage.' },
      { question: 'Do you offer braces and Invisalign in Van Nuys?', answer: 'Yes. Our Van Nuys office provides traditional braces and clear aligner orthodontic treatment for patients of all ages. Free consultations are available.' },
      { question: 'Is there parking at the Van Nuys dental office?', answer: 'Yes, our Van Nuys location on Sepulveda Blvd offers convenient on-site parking for all patients.' },
    ],
  },
  {
    name: 'Whittier',
    slug: 'whittier',
    title: 'Dentist Whittier CA | Liberty Smile Center',
    description:
      'Top-rated dentist in Whittier, CA. Dental Implants, Braces, Cosmetic & Oral Surgery. Accepts Medi-Cal and PPO. 0% Interest Financing. Call (562) 903-9342.',
    address: '13345 Telegraph Rd #L, Whittier, CA 90605',
    streetAddress: '13345 Telegraph Rd #L',
    city: 'Whittier',
    state: 'CA',
    postalCode: '90605',
    phone: '5629039342',
    phoneDisplay: '(562) 903-9342',
    mapUrl:
      'https://www.google.com/maps?q=Liberty+Smile+Center+13345+Telegraph+Rd+Whittier+CA+90605&output=embed',
    geo: { latitude: '33.9292', longitude: '-118.0336' },
    areaServed: ['Whittier', 'La Mirada', 'Norwalk', 'Pico Rivera', 'Santa Fe Springs'],
    hours: [
      { day: 'Monday', time: '9:00 AM – 6:00 PM' },
      { day: 'Tuesday', time: '9:00 AM – 6:00 PM' },
      { day: 'Wednesday', time: '9:00 AM – 6:00 PM' },
      { day: 'Thursday', time: '9:00 AM – 6:00 PM' },
      { day: 'Friday', time: '9:00 AM – 6:00 PM' },
      { day: 'Saturday', time: '9:00 AM – 3:00 PM' },
      { day: 'Sunday', time: 'Closed' },
    ],
    services: ['General Dentistry', 'Dental Implants', 'Orthodontics', 'Cosmetic Dentistry', 'Oral Surgery', 'Emergency Dentistry'],
    faqs: [
      { question: 'Does Liberty Smile Center in Whittier accept Medi-Cal?', answer: 'Yes, we accept Medi-Cal and most PPO insurance plans. Contact our Whittier office at (562) 903-9342 to verify your coverage.' },
      { question: 'Do you offer emergency dental care in Whittier?', answer: 'Yes. Our Whittier office accepts emergency dental appointments. Call (562) 903-9342 and we will do our best to see you the same day.' },
      { question: 'Where is the Whittier dental office located?', answer: 'Our Whittier office is located at 13345 Telegraph Rd #L, Whittier, CA 90605, on the corner of Telegraph Rd with convenient parking available.' },
    ],
  },
  {
    name: 'La Habra',
    slug: 'la-habra',
    title: 'Dentist La Habra CA | Liberty Smile Center',
    description:
      'Top-rated dentist in La Habra, CA. Dental Implants, Braces, Cosmetic & Oral Surgery. Accepts Medi-Cal and PPO. 0% Interest Financing. Call (562) 691-0738.',
    address: '744 W La Habra Blvd, La Habra, CA 90631',
    streetAddress: '744 W La Habra Blvd',
    city: 'La Habra',
    state: 'CA',
    postalCode: '90631',
    phone: '5626910738',
    phoneDisplay: '(562) 691-0738',
    mapUrl:
      'https://www.google.com/maps?q=Liberty+Smile+Center+744+W+La+Habra+Blvd+La+Habra+CA+90631&output=embed',
    geo: { latitude: '33.9395', longitude: '-117.9466' },
    areaServed: ['La Habra', 'Fullerton', 'Brea', 'Buena Park', 'La Mirada'],
    hours: [
      { day: 'Monday', time: '9:00 AM – 6:00 PM' },
      { day: 'Tuesday', time: '9:00 AM – 6:00 PM' },
      { day: 'Wednesday', time: '9:00 AM – 6:00 PM' },
      { day: 'Thursday', time: '9:00 AM – 6:00 PM' },
      { day: 'Friday', time: '9:00 AM – 6:00 PM' },
      { day: 'Saturday', time: '9:00 AM – 3:00 PM' },
      { day: 'Sunday', time: 'Closed' },
    ],
    services: ['General Dentistry', 'Dental Implants', 'Orthodontics', 'Cosmetic Dentistry', 'Oral Surgery', 'Emergency Dentistry'],
    faqs: [
      { question: 'Does Liberty Smile Center in La Habra accept Medi-Cal?', answer: 'Yes, we accept Medi-Cal and most PPO insurance plans. Contact our La Habra office at (562) 691-0738 to verify your coverage.' },
      { question: 'Do you offer cosmetic dentistry in La Habra?', answer: 'Yes. Our La Habra office offers a full range of cosmetic dentistry services including veneers, teeth whitening, and smile makeovers.' },
      { question: 'How do I book an appointment at the La Habra location?', answer: 'Call us at (562) 691-0738 or use our online contact form. We offer flexible scheduling and accept walk-in emergencies when available.' },
    ],
  },
  {
    name: 'Downey',
    slug: 'downey',
    title: 'Dentist Downey CA | Liberty Smile Center',
    description:
      'Top-rated dentist in Downey, CA. Dental Implants, Braces, Cosmetic & Oral Surgery. Accepts Medi-Cal and PPO. 0% Interest Financing. Call (562) 334-8990.',
    address: '9944 Lakewood Blvd, Downey, CA 90240',
    streetAddress: '9944 Lakewood Blvd',
    city: 'Downey',
    state: 'CA',
    postalCode: '90240',
    phone: '5623348990',
    phoneDisplay: '(562) 334-8990',
    mapUrl:
      'https://www.google.com/maps?q=Liberty+Smile+Center+9944+Lakewood+Blvd+Downey+CA+90240&output=embed',
    geo: { latitude: '33.9387', longitude: '-118.132' },
    areaServed: ['Downey', 'Bellflower', 'Lakewood', 'Paramount', 'Norwalk'],
    hours: [
      { day: 'Monday', time: '9:00 AM – 6:00 PM' },
      { day: 'Tuesday', time: '9:00 AM – 6:00 PM' },
      { day: 'Wednesday', time: '9:00 AM – 6:00 PM' },
      { day: 'Thursday', time: '9:00 AM – 6:00 PM' },
      { day: 'Friday', time: '9:00 AM – 6:00 PM' },
      { day: 'Saturday', time: '9:00 AM – 3:00 PM' },
      { day: 'Sunday', time: 'Closed' },
    ],
    services: ['General Dentistry', 'Dental Implants', 'Orthodontics', 'Cosmetic Dentistry', 'Oral Surgery', 'Emergency Dentistry'],
    faqs: [
      { question: 'Does Liberty Smile Center in Downey accept Medi-Cal?', answer: 'Yes, we accept Medi-Cal and most PPO insurance plans. Contact our Downey office at (562) 334-8990 to verify your coverage.' },
      { question: 'Do you offer dental implants in Downey?', answer: 'Yes. Our Downey office provides complete dental implant services, including single implants, multiple implants, and All-on-4 full-arch restoration with financing options.' },
      { question: 'Where is the Downey dental office located?', answer: 'Our Downey office is at 9944 Lakewood Blvd, Downey, CA 90240, easily accessible from the 5 and 605 freeways with ample parking.' },
    ],
  },
];

export function getLocationBySlug(slug: string): LocationData | undefined {
  return locations.find((loc) => loc.slug === slug);
}

export const locationSlugs = locations.map((l) => l.slug);
