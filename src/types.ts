export interface Booking {
  id: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  occupation: string;
  area: string;
  concern: string;
  preferredDay: string;
  referral: string;
  bookingDate: string;
  status: string;
  whatsappMessage: string;
}

export interface Modality {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  details: string;
  fullCopy: string;
}

export interface ServiceOffer {
  id: string;
  title: string;
  status: 'active' | 'in-progress' | 'upcoming';
  description: string;
  extended: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface IntrospectionResult {
  reflection: string;
  questions: string[];
  practice: string;
}
