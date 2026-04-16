import React from 'react';
import { products } from '../data/mock';
import useScrollReveal from '../hooks/useScrollReveal';

const ProductCard = ({ product, index }) => {
  return (
    <article
      className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div
        className="h-full rounded-2xl p-6 md:p-8 flex flex-col"
        style={{
          borderTop: `8px solid ${product.borderColor}`,
          backgroundColor: 'rgba(18, 18, 18, 0.7)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        <h3 className="text-white text-[17px] font-medium mb-4">
          <a href={product.link} className="hover:text-gray-300 transition-colors duration-300">
            {product.title}
          </a>
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
          {product.description}
        </p>
        <div>
          <a
            href={product.link}
            className="text-gray-300 text-[15px] hover:text-white transition-colors duration-300 inline-flex items-center gap-1"
          >
            Read More
          </a>
        </div>
      </div>
    </article>
  );
};

const ProductsSection = () => {
  const [titleRef, titleVisible] = useScrollReveal({ threshold: 0.2 });
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      id="products"
      className="relative min-h-screen flex items-center py-20 lg:py-28"
      style={{
        background: 'linear-gradient(to top, #24243e, #302b63, #0f0c29)',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 w-full">
        <div
          ref={titleRef}
          className={`mb-10 reveal-slide-top ${titleVisible ? 'revealed' : ''}`}
        >
          <p className="text-gray-300 text-sm tracking-wider" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Products and add-on's
          </p>
        </div>

        <div
          ref={gridRef}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-5 reveal-slide-top reveal-delay-2 ${gridVisible ? 'revealed' : ''}`}
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
