import React from 'react';
import { products } from '../data/mock';
import { Beaker, Settings, ShieldCheck, Users, Heart, Cpu } from 'lucide-react';

const iconMap = {
  Flask: Beaker,
  Settings: Settings,
  ShieldCheck: ShieldCheck,
  Users: Users,
  Heart: Heart,
  Cpu: Cpu,
};

const ProductCard = ({ product, index }) => {
  const IconComponent = iconMap[product.icon];

  return (
    <div
      className="group relative bg-[#111f22] border border-[#1a3535] rounded-lg p-8 hover:border-[#4ecdc4]/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#4ecdc4]/5"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="w-14 h-14 rounded-lg bg-[#1a3535] flex items-center justify-center mb-6 group-hover:bg-[#4ecdc4]/10 transition-colors duration-500">
        {IconComponent && (
          <IconComponent className="w-7 h-7 text-[#4ecdc4] group-hover:scale-110 transition-transform duration-300" />
        )}
      </div>

      <h3
        className="text-white text-lg font-semibold mb-4 group-hover:text-[#4ecdc4] transition-colors duration-300"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        {product.title}
      </h3>

      <p
        className="text-gray-400 text-sm leading-relaxed mb-6"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        {product.description}
      </p>

      <a
        href={product.link}
        className="text-[#4ecdc4] text-sm font-medium hover:text-white transition-colors duration-300 inline-flex items-center gap-2"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        Read More
        <svg
          className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  );
};

const ProductsSection = () => {
  return (
    <section className="relative bg-[#0a1517] py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
        <div className="mb-16">
          <p
            className="text-[#4ecdc4] text-sm tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Products and add-on's
          </p>
          <div className="w-16 h-0.5 bg-[#4ecdc4]/40"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
