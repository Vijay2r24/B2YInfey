// Mock data for B2B Software Technologies Ltd homepage

export const navItems = [
  { label: 'ERP', href: '#erp' },
  { label: 'Emerging Technologies', href: '#emerging' },
  { label: 'Healthcare', href: '#healthcare' },
  { label: 'Industries', href: '#industries' },
  { label: 'Careers', href: '#careers' },
  { label: 'Investors', href: '#investors' },
];

export const sideMenuItems = [
  { label: 'Home', href: '#', active: true },
  {
    label: 'About Us',
    children: [
      { label: 'About Us', href: '#' },
      { label: 'Leadership', href: '#' },
      { label: 'CSR', href: '#' },
    ],
  },
  {
    label: 'ERP Solutions',
    children: [
      { label: 'Microsoft Dynamics 365 - Business Central', href: '#' },
      { label: 'Microsoft Dynamics 365 - F&O (Finance & SCM)', href: '#' },
      { label: 'Microsoft Power BI', href: '#' },
      { label: 'Microsoft Power Apps', href: '#' },
    ],
  },
  {
    label: 'Emerging Technologies',
    children: [
      { label: 'AI & ML', href: '#' },
      { label: 'Agentic Chatbots', href: '#' },
      { label: 'Advanced Analytics', href: '#' },
      { label: 'Blockchain Technologies', href: '#' },
      { label: 'Cloud Migration', href: '#' },
      { label: 'Cybersecurity', href: '#' },
      { label: 'Data Mining and Data Warehousing', href: '#' },
      { label: 'Digital Workflow Transformation', href: '#' },
      { label: 'Low-code / No-code Development Tools', href: '#' },
      { label: 'Quantum Computing', href: '#' },
      { label: 'Robotic Process Automation (RPA)', href: '#' },
    ],
  },
  {
    label: 'Healthcare Solutions',
    children: [
      { label: 'GeniusDoc EMR', href: '#' },
      { label: 'GeniusDoc PM (Practice Management)', href: '#' },
      { label: 'GeniusDoc Portal', href: '#' },
      { label: 'GeniusDoc Mobile', href: '#' },
      { label: 'GeniusDoc RCM (Revenue Cycle Management)', href: '#' },
      { label: 'GeniusDoc Telehealth', href: '#' },
      { label: 'GeniusDoc Interfaces', href: '#' },
    ],
  },
  {
    label: 'B2B Products',
    children: [
      { label: 'B2B HR & Payroll', href: '#' },
      { label: 'B2B LIFT - Pharma Solution', href: '#' },
      { label: 'B2B Plant Maintenance', href: '#' },
      { label: 'B2B Quality Control', href: '#' },
    ],
  },
  {
    label: 'Industries',
    children: [
      { label: 'Engineering & IT', href: '#' },
      { label: 'Financial', href: '#' },
      { label: 'Healthcare', href: '#' },
      { label: 'Life Sciences', href: '#' },
      { label: 'Manufacturing', href: '#' },
      { label: 'Publishing & Royalties', href: '#' },
      { label: 'Retail', href: '#' },
    ],
  },
  { label: 'Clients & Testimonials', href: '#' },
  { label: 'Resellers', href: '#' },
  { label: 'Awards & Accolades', href: '#' },
  { label: 'Investors', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Contact', href: '#' },
];

export const heroSlides = [
  {
    heading: 'B2B Software Technologies Ltd',
    subtitle: 'Your end-to-end partner for Dynamics 365 ERP, emerging technologies, and healthcare solutions.',
    description: '25 Years of enabling digital transformation with Dynamics 365, ERP, Analytics & Healthcare',
  },
  {
    heading: 'Microsoft Dynamics 365 ERP',
    subtitle: 'Business Central & Finance & Operations implementation expertise across industries.',
    description: 'Trusted by 150+ clients across India and abroad for ERP solutions',
  },
  {
    heading: 'Emerging Technologies',
    subtitle: 'AI & ML, Agentic Chatbots, Advanced Analytics, RPA, Cloud Migration and more.',
    description: 'Driving innovation through cutting-edge technology solutions',
  },
  {
    heading: 'Healthcare Solutions',
    subtitle: 'GeniusDoc EMR, Practice Management, Patient Portal, Telehealth and Revenue Cycle Management.',
    description: 'Comprehensive healthcare IT solutions for modern practices',
  },
  {
    heading: 'Life Sciences & Pharma',
    subtitle: 'B2B LIFT - Lifescience Information @ Finger Tips for pharma and life science industries.',
    description: 'Specialized solutions for API, Formulations, Food Processing & Chemicals',
  },
];

export const heroData = {
  established: 'establised 2000',
  ctaText: 'Talk to B2B Software',
  ctaLink: '#contact',
};

export const aboutData = {
  yearsCount: 25,
  yearsLabel: 'Years',
  experienceLabel: 'Experience',
  heading: 'Trust Our Best IT Solution For Your Business',
  description: 'B2B Software Technologies Ltd, is a Microsoft-Gold Enterprise Resource Planning partner and listed in Bombay Stock Exchange, and is the leading Business Solution implementation company in the Microsoft Dynamics space for the last 16 years with a footprint of more than 150+ clients in INDIA & Abroad. B2B also Won the Best Regional Partner South Award for two consecutive years (2007 & 2008).',
  description2: 'B2B has expertise in Microsoft Dynamics ERP (BC/F&O). Major focus areas for implementation are discrete Manufacturing, Life-Science Industries like Pharma (API & Formulations), Food Processing, Chemicals, Telecom Industries etc.',
};

export const products = [
  {
    id: 1,
    title: 'B2B LIFT',
    description: 'B2B LIFT (Lifescience Information @ Finger Tips) helps life science industries streamline processes for maximum efficiency.',
    link: '#',
    borderColor: '#D17DFE',
  },
  {
    id: 2,
    title: 'B2B Plant Maintenance',
    description: 'Plant Maintenance Add-On supports engineering and process industries with real-time maintenance needs.',
    link: '#',
    borderColor: '#90D0FE',
  },
  {
    id: 3,
    title: 'B2B Quality Control',
    description: "B2B's Our Quality Control Add-On, built for Microsoft Dynamics 365 BC, helps businesses integrate quality checks",
    link: '#',
    borderColor: '#04E1CB',
  },
  {
    id: 4,
    title: 'B2B HR & Payroll',
    description: "B2B's HR & Payroll module streamlines HR functions, from recruitment and deployment to performance tracking.",
    link: '#',
    borderColor: '#FF538A',
  },
  {
    id: 5,
    title: 'GeniusDoc',
    description: 'GeniusDoc is a medical practice management system that automates office procedures and cuts operational costs.',
    link: '#',
    borderColor: '#FE9339',
  },
  {
    id: 6,
    title: 'Emerging Technologies',
    description: 'Emerging technologies include a variety of technologies such as artificial intelligence.',
    link: '#',
    borderColor: '#41B658',
  },
];

export const clientLogos = [
  { name: 'APMDC', img: 'https://avccpalmdale.com/B2B/img/APMDC.png' },
  { name: 'Caxton', img: 'https://avccpalmdale.com/B2B/img/caxton.png' },
  { name: 'Client 1', img: 'https://avccpalmdale.com/B2B/img/1.png' },
  { name: 'Client 2', img: 'https://avccpalmdale.com/B2B/img/2.png' },
  { name: 'Client 3', img: 'https://avccpalmdale.com/B2B/img/3.png' },
  { name: 'Client 4', img: 'https://avccpalmdale.com/B2B/img/4.png' },
  { name: 'Client 5', img: 'https://avccpalmdale.com/B2B/img/5.png' },
  { name: 'Client 6', img: 'https://avccpalmdale.com/B2B/img/6.png' },
  { name: 'Client 15', img: 'https://avccpalmdale.com/B2B/img/15.png' },
  { name: 'Client 16', img: 'https://avccpalmdale.com/B2B/img/16.png' },
  { name: 'Client 17', img: 'https://avccpalmdale.com/B2B/img/17.png' },
  { name: 'Client 18', img: 'https://avccpalmdale.com/B2B/img/18.png' },
];

export const testimonials = [
  {
    id: 1,
    quote: 'B2B Software has been a fantastic partner in our Dynamics 365 implementation. Their expertise in pharma industry processes is unmatched.',
    author: 'CTO, Leading Pharma Company',
  },
  {
    id: 2,
    quote: 'The quality control add-on has significantly improved our manufacturing process compliance and reporting across all our facilities.',
    author: 'VP Operations, Manufacturing Firm',
  },
  {
    id: 3,
    quote: 'GeniusDoc transformed our practice management with automated workflows and reduced costs substantially across our clinics.',
    author: 'Director, Healthcare Organization',
  },
  {
    id: 4,
    quote: 'Their plant maintenance solution helped us achieve near-zero downtime in our production lines. Excellent support team.',
    author: 'Plant Manager, Chemical Industry',
  },
];

export const investorData = {
  reportTitle: 'Annual Report 2025',
  reportLink: '#',
  sectionTitle: 'Investor Central',
  graphImage: 'https://avccpalmdale.com/B2B/img/graphs.jpg',
};

export const footerData = {
  companyName: 'B2B Software Technologies Ltd.',
  address: [
    '6-3-1112, 3rd and 4th Floor,',
    'AVR Towers, Behind Westside Show Room,',
    'Near Somajiguda Circle, Begumpet,',
    'Hyderabad \u2013 500 016.',
    'Telangana, INDIA',
  ],
  email: 'info@b2bsoftech.com',
  phone: '+91-40-2337 2522',
  mapImage: 'https://avccpalmdale.com/B2B/images/B2Bmap.jpg',
  mapLink: 'https://www.google.com/maps/place/B2B+Software+Technologies+Ltd/@17.4299576,78.4543875,879m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bcb90b455555555:0xf5c4168744901335!8m2!3d17.4299576!4d78.4569624!16s%2Fg%2F11f4qk4qyv?entry=ttu&g_ep=EgoyMDI1MDkwMi4wIKXMDSoASAFQAw%3D%3D',
  copyright: 'Copyright \u00a9 2026 b2bsoftech',
};
