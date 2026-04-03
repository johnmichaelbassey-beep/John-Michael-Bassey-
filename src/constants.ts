import { LucideIcon } from 'lucide-react';

export interface Industry {
  id: string;
  name: string;
  icon: string;
  description: string;
  problem: string;
  whyStepIn: string;
  solution: string;
  vision: string;
  image: string;
  keyInitiatives: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export const INDUSTRIES: Industry[] = [
  {
    id: 'agriculture',
    name: 'Agriculture',
    icon: 'Sprout',
    description: 'Revolutionizing food security through tech-enabled precision farming.',
    problem: 'Africa possesses 60% of the world\'s uncultivated arable land, yet Nigeria spends billions annually on food imports. Smallholder farmers lack access to modern machinery, data-driven insights, and structured markets, leading to 40% post-harvest losses.',
    whyStepIn: 'I am stepping in because food security is the bedrock of national stability. I cannot build a future on an empty stomach.',
    solution: 'I am deploying a tech-enabled "Farm-to-Table" ecosystem that provides farmers with precision tools, automated irrigation, and direct access to global supply chains, eliminating middlemen and waste.',
    vision: 'To feed a billion people through sustainable, high-yield African ecosystems.',
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=1000',
    keyInitiatives: [
      'Precision Soil Mapping',
      'Automated Irrigation Systems',
      'Smallholder Credit Access'
    ]
  },
  {
    id: 'energy',
    name: 'Energy',
    icon: 'Zap',
    description: 'Powering the continent with a mix of renewable and traditional infrastructure.',
    problem: 'Over 600 million Africans lack access to reliable electricity. In Nigeria, the national grid is fragile, forcing businesses to rely on expensive, polluting diesel generators that eat up 40% of operational costs.',
    whyStepIn: 'Industrialization is impossible without power. I am stepping in to provide the literal current that will drive our factories and homes.',
    solution: 'I am building a hybrid energy infrastructure—combining large-scale solar farms with modular gas-to-power plants—to provide decentralized, reliable, and affordable energy for industrial clusters.',
    vision: 'Universal energy access as the bedrock of industrialization.',
    image: 'https://images.unsplash.com/photo-1466611653911-95282fc365d5?auto=format&fit=crop&q=80&w=1000',
    keyInitiatives: [
      'Utility-Scale Solar Farms',
      'Modular Gas-to-Power',
      'Smart Grid Distribution'
    ]
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    icon: 'Factory',
    description: 'Building the "Made in Africa" brand for global export.',
    problem: 'Nigeria remains a consumer nation, exporting raw materials and importing finished goods. This creates a massive trade deficit and exports jobs that our youth desperately need.',
    whyStepIn: 'I must stop being a "raw material" continent. I am stepping in to ensure I capture the full value chain of our resources.',
    solution: 'I am establishing Special Economic Zones (SEZs) focused on high-tech manufacturing, from electronics to textiles, utilizing local raw materials and creating thousands of skilled industrial jobs.',
    vision: 'Transforming raw materials into high-value global commodities.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000',
    keyInitiatives: [
      'Special Economic Zones',
      'Value-Added Processing',
      'Industrial Skill Centers'
    ]
  },
  {
    id: 'health',
    name: 'Health',
    icon: 'HeartPulse',
    description: 'Next-generation medical infrastructure and pharmaceutical self-sufficiency.',
    problem: 'Medical tourism costs Nigeria over $1 billion annually. Our healthcare system suffers from brain drain, lack of advanced diagnostic equipment, and a 70% dependence on imported essential medicines.',
    whyStepIn: 'A nation is only as strong as its people. I am stepping in to build a healthcare system that keeps our best minds at home and our citizens healthy.',
    solution: 'I am building a network of world-class diagnostic centers and a pharmaceutical manufacturing plant to produce essential drugs locally, combined with a digital health platform for remote consultations.',
    vision: 'A world-class healthcare system accessible to every African citizen.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000',
    keyInitiatives: [
      'Diagnostic Hub Network',
      'Pharma Manufacturing',
      'Telemedicine Platform'
    ]
  },
  {
    id: 'education',
    name: 'Education',
    icon: 'GraduationCap',
    description: 'Scaling elite knowledge through digital platforms and physical institutes.',
    problem: 'The African education system is often outdated, focusing on theory rather than the practical skills required for the 4th Industrial Revolution. There is a massive gap between graduation and employability.',
    whyStepIn: 'Our youth are our greatest asset, but only if they are skilled. I am stepping in to retool the African mind for global competition.',
    solution: 'I am launching "The Industrialist Academy"—a hybrid learning platform that combines vocational technical training with high-level entrepreneurship and AI-driven skill acquisition.',
    vision: 'Equipping the world’s largest workforce with future-ready skills.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000',
    keyInitiatives: [
      'The Industrialist Academy',
      'Vocational Tech Training',
      'AI Skill Acquisition'
    ]
  },
  {
    id: 'logistics',
    name: 'Logistics',
    icon: 'Truck',
    description: 'The circulatory system of African trade and global connectivity.',
    problem: 'Moving goods within Africa is often more expensive than shipping them to Europe. Poor road networks, port congestion, and fragmented tracking systems make logistics a nightmare for businesses.',
    whyStepIn: 'Trade is the lifeblood of the economy. I am stepping in to clear the blockages in our continental circulatory system.',
    solution: 'I am building an integrated logistics backbone—combining a fleet of smart-tracked trucks, modern warehousing hubs, and a digital clearing platform to ensure zero-friction movement of goods.',
    vision: 'Zero-friction movement of goods across borders and oceans.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000',
    keyInitiatives: [
      'Smart Tracking Fleet',
      'Regional Warehousing',
      'Digital Clearing Hub'
    ]
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    icon: 'Building2',
    description: 'Developing smart cities and sustainable urban habitats.',
    problem: 'Rapid urbanization in Nigeria has led to a housing deficit of over 20 million units. Our cities are often unplanned, congested, and lack the infrastructure needed for modern living and working.',
    whyStepIn: 'We need spaces that inspire and function. I am stepping in to redefine how Africans live, work, and build communities.',
    solution: 'I am developing "Smart Industrial Cities"—integrated urban hubs that combine affordable, sustainable housing with high-tech workspaces and reliable green infrastructure.',
    vision: 'Defining the skyline of the 22nd century.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000',
    keyInitiatives: [
      'Smart Industrial Cities',
      'Sustainable Urban Habitats',
      'Green Infrastructure'
    ]
  },
  {
    id: 'hospitality',
    name: 'Hospitality',
    icon: 'Hotel',
    description: 'Curating premium experiences that showcase African excellence.',
    problem: 'The global perception of Africa is often skewed. Our hospitality sector lacks a unified "Luxury African" brand that can compete with global chains while remaining authentically rooted in our culture.',
    whyStepIn: 'I want the world to see the Africa I see. I am stepping in to create the global standard for African luxury and service.',
    solution: 'I am building a chain of premium boutique hotels and resorts that blend world-class service with African architectural heritage and immersive cultural experiences.',
    vision: 'The global standard for luxury and cultural immersion.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000',
    keyInitiatives: [
      'Boutique Heritage Hotels',
      'Eco-Resort Development',
      'Cultural Experience Hubs'
    ]
  },
  {
    id: 'entertainment',
    name: 'Entertainment',
    icon: 'Play',
    description: 'Exporting African narrative and creativity to the global stage.',
    problem: 'African content is going viral, but the infrastructure for monetization and intellectual property protection is weak. Our creators often lose out on the value they generate globally.',
    whyStepIn: 'Culture is soft power. I am stepping in to ensure that African stories are told by Africans and that the value stays with our creators.',
    solution: 'I am establishing a multi-media production hub and a digital distribution platform that protects IP and ensures fair monetization for African musicians, filmmakers, and digital creators.',
    vision: 'Owning the global cultural conversation.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1000',
    keyInitiatives: [
      'Multi-Media Production Hub',
      'Digital Distribution',
      'IP Protection Systems'
    ]
  },
  {
    id: 'finance',
    name: 'Finance',
    icon: 'Coins',
    description: 'Democratizing capital and building the digital financial backbone.',
    problem: 'Traditional banking in Nigeria is often exclusionary, with high interest rates and rigid requirements that stifle SMEs. Capital is the missing ingredient for millions of ambitious entrepreneurs.',
    whyStepIn: 'Capital is the fuel of progress. I am stepping in to democratize access to the funding that will build the next generation of African giants.',
    solution: 'I am building a digital-first investment and credit platform that utilizes alternative data to provide flexible capital to high-growth SMEs and industrial projects.',
    vision: 'The engine of wealth creation for the next generation.',
    image: 'https://images.unsplash.com/photo-1611974717484-38818203adad?auto=format&fit=crop&q=80&w=1000',
    keyInitiatives: [
      'Digital Credit Platform',
      'SME Growth Capital',
      'Alternative Data Scoring'
    ]
  }
];
