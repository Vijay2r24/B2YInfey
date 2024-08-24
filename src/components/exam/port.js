import React from 'react';

const services = [
  {
    title: 'Web Development',
    description: ['Web Designing', 'e-Commerce website', 'Dynamic website'],
    icon: '🌐',
    bgColor: 'bg-blue-600',
    textColor: 'text-white',
  },
  {
    title: 'CMS Development',
    description: ['e-Commerce website', 'Content management system', 'Customer relationship management'],
    icon: '📱',
    bgColor: 'bg-gray-900',
    textColor: 'text-white',
  },
  {
    title: 'App Development',
    description: ['Android App\'s', 'Hybrid App\'s', 'Progressive Web App\'s'],
    icon: '📱',
    bgColor: 'bg-blue-600',
    textColor: 'text-white',
  },
  {
    title: 'Digital Marketing',
    description: ['SEO (Search Engine Optimization)', 'SMM (Social media marketing)', 'Branding'],
    icon: '📊',
    bgColor: 'bg-white',
    textColor: 'text-black',
  },
  {
    title: 'UI/UX',
    description: ['Mobile App & Web UI/UX Design', 'User Research', 'UX Enhancements'],
    icon: '🎨',
    bgColor: 'bg-blue-600',
    textColor: 'text-white',
  },
  {
    title: 'Graphic Designing',
    description: ['Logo Designing', 'Social Media Post Designing', 'Web Banners, Visual Designing'],
    icon: '🖼️',
    bgColor: 'bg-white',
    textColor: 'text-black',
  },
];

const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {services.map((service, index) => (
        <div
          key={index}
          className={`p-6 rounded-xl shadow-md ${service.bgColor} ${service.textColor}`}
        >
          <div className="text-4xl mb-4">{service.icon}</div>
          <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
          <ul className="space-y-2">
            {service.description.map((item, idx) => (
              <li key={idx} className="flex items-center">
                <span className="mr-2">›</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Services;
