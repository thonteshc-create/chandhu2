
export interface FleetItem {
  id: string;
  name: string;
  category: 'Sedan' | 'Luxury' | 'SUV' | 'Coach';
  description: string;
  image: string;
  capacity: string;
  features: string[];
  featured: boolean;
  regNumber?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  tags: string[];
}

export interface SiteSettings {
  primaryColor: string;
  secondaryColor: string;
  companyName: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  facebookUrl: string;
  instagramUrl: string;
  whatsappNumber: string;
}

export interface SiteData {
  fleet: FleetItem[];
  services: Service[];
  blogPosts: BlogPost[];
  settings: SiteSettings;
  clients: { name: string; logo: string }[];
}

export type PageType = 'home' | 'about' | 'fleet' | 'services' | 'blog' | 'contact' | 'admin';
