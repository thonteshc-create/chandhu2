import { SiteData } from './types';

export const INITIAL_DATA: SiteData = {
  fleet: [
    {
      id: 'f1',
      name: 'Sedan Cab 4+1',
      category: 'Sedan',
      description: 'Clean and well-maintained Sedan Vehicle. Starting From 10 rs per km. 400 Rs Driver Bata (Morning 6 Am To 10 pm). Per day 300 Km minimum. Toll and Parking Separate.',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1200',
      capacity: '4 + 1 Seater',
      features: ['₹10/km', '₹400 Driver Bata', '300km Min/Day', 'Clean Interior'],
      featured: true
    },
    {
      id: 'f4',
      name: 'Tempo Traveller 12 Seater',
      category: 'Coach',
      description: 'Spacious 12-seater Tempo Traveller. Starting From 17 rs per km Non Ac / 19 rs per km Ac. 500 Rs Driver Bata (Morning 6 Am To 10 pm). Per day 300 Km minimum.',
      image: 'https://images.unsplash.com/photo-1517616149156-f007e992161b?auto=format&fit=crop&q=80&w=1200',
      capacity: '12 Seater',
      features: ['₹17-19/km', '₹500 Driver Bata', '300km Min/Day', 'AC/Non-AC Options'],
      featured: true
    },
    {
      id: 'f2',
      name: 'Tempo Traveller 13 Seater',
      category: 'Coach',
      description: 'Modern 13-seater Tempo Traveller. Starting From 18 rs per km Non Ac / 20 rs per km Ac. 500 Rs Driver Bata (Morning 6 Am To 10 pm). Per day 300 Km minimum.',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200',
      capacity: '13 Seater',
      features: ['₹18-20/km', '₹500 Driver Bata', '300km Min/Day', 'Comfort Travel'],
      featured: false
    },
    {
      id: 'f3',
      name: '21+1 Seater Mini Bus',
      category: 'Coach',
      description: 'Professional 21-seater Mini Bus. Starting From 27 rs per km Non Ac / 30 rs per km Ac. 600 Rs Driver Bata (Morning 6 Am To 10 pm). Per day 300 Km minimum.',
      image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=1200',
      capacity: '21 + 1 Seater',
      features: ['₹27-30/km', '₹600 Driver Bata', 'Best for Groups', 'Air Suspension'],
      featured: false
    },
    {
      id: 'f5',
      name: '25+1 Seater Mini Bus',
      category: 'Coach',
      description: '25+1 Seater Mini Bus. Starting From 30 rs per km Non Ac / 34 rs per km Ac. 600 Rs Driver Bata (Morning 6 Am To 10 pm). Per day 300 Km minimum.',
      image: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?auto=format&fit=crop&q=80&w=1200',
      capacity: '25 + 1 Seater',
      features: ['₹30-34/km', '₹600 Driver Bata', 'Large Capacity', 'Corporate Choice'],
      featured: false
    },
    {
      id: 'f6',
      name: '33+1 Seater Bus',
      category: 'Coach',
      description: 'Premium 33-seater Bus. Starting From 37 rs per km Non Ac / 41 rs per km Ac. 700 Rs Driver Bata (Morning 6 Am To 10 pm). Per day 300 Km minimum.',
      image: 'https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?auto=format&fit=crop&q=80&w=1200',
      capacity: '33 + 1 Seater',
      features: ['₹37-41/km', '₹700 Driver Bata', 'Luxury Coach', 'Touring Standard'],
      featured: false
    }
  ],
  services: [
    {
      id: 's1',
      title: 'Corporate People Transport',
      description: 'Entire spectrum of vehicles for executive movement with routing and scheduling support.',
      icon: 'Plane'
    },
    {
      id: 's2',
      title: 'Fleet Management',
      description: 'Professional management of corporate fleets ensuring 24/7 availability and maintenance.',
      icon: 'Shield'
    },
    {
      id: 's3',
      title: 'Airport Taxi Service',
      description: 'Timely pick-up and drop services for Bangalore international airport with 24X7 support.',
      icon: 'Map'
    },
    {
      id: 's4',
      title: 'Off Site Activity Transport',
      description: 'Specialized transport solutions for corporate events, team building, and company trips.',
      icon: 'Bed'
    }
  ],
  blogPosts: [
    {
      id: 'b1',
      title: 'Ensuring Employee Safety in Corporate Transport',
      slug: 'employee-safety-transport',
      excerpt: 'How centralized tracking and driver training revolutionize corporate commutes.',
      content: 'Safety is the cornerstone of business transport solutions...',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800',
      author: 'Management Team',
      date: '2024-05-15',
      tags: ['Safety', 'Corporate']
    }
  ],
  clients: [
    { name: 'Goldman Sachs', logo: 'https://logo.clearbit.com/goldmansachs.com' },
    { name: 'ZEISS', logo: 'https://logo.clearbit.com/zeiss.com' },
    { name: 'Citi', logo: 'https://logo.clearbit.com/citi.com' },
    { name: 'Cardinal Health', logo: 'https://logo.clearbit.com/cardinalhealth.com' },
    { name: 'Commscope', logo: 'https://logo.clearbit.com/commscope.com' }
  ],
  settings: {
    primaryColor: '#0ea5e9',
    secondaryColor: '#f97316',
    companyName: 'Chandu Tours & Travels',
    tagline: 'Every journey begins with a single step',
    phone: '+91 9900413232',
    email: 'chandutourists@gmail.com',
    address: 'No 15, 3rd Floor, 4th Cross, Garudacharapalya, Mahadevapura, Whitefiled Main Road, Bangalore-560048',
    facebookUrl: '#',
    instagramUrl: '#',
    whatsappNumber: '+919900413232'
  }
};