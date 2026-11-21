import React, { useEffect, useState } from 'react';
import { SITE_CONTENT, type Locale } from '../content/siteData';

interface TestimonialsSectionProps {
  locale: Locale;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ locale }) => {
  const slides = SITE_CONTENT[locale].testimonials.slides;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  const currentSlide = slides[activeIndex] || slides[0];

  return (
    <section
      id="Testimonies"
      aria-label="Testimonials"
      className="divi-testimonials-bg relative w-full pt-0 pb-[8vw]"
    >
      {/* Divi Row: column_structure="2_5,3_5" custom_padding="0px||||false|false" */}
      <div className="mx-auto flex w-[80%] max-w-[1080px] flex-col pt-0 lg:flex-row">
        {/* Left 2/5 empty spacer column so background building is visible */}
        <div className="hidden lg:block lg:w-[40%]" />

        {/* Right 3/5 White Box containing Divi Slider */}
        <div className="w-full bg-white px-[24px] pt-[30px] pb-[50px] sm:px-[8%] sm:pt-[40px] sm:pb-[60px] lg:w-[60%]">
          <div className="relative min-h-[260px] text-left">
            <h6 className="font-baskervville mb-4 text-[16px] leading-[1.4em] font-medium text-[#000000] sm:text-[20px] lg:text-[28px]">
              {currentSlide.quote}
            </h6>
            <p className="font-worksans text-[14px] font-medium text-[#000000] sm:text-[15px] lg:text-[16px]">
              {currentSlide.author}
            </p>
          </div>

          {/* Divi dot_nav_custom_color="#000000" pagination dots */}
          <div className="mt-6 flex items-center justify-center gap-2.5" role="tablist" aria-label="Testimonial slides">
            {slides.map((slide, idx) => (
              <button
                key={slide.author}
                type="button"
                role="tab"
                aria-selected={idx === activeIndex}
                aria-label={`Testimonial ${idx + 1}: ${slide.author}`}
                onClick={() => setActiveIndex(idx)}
                className={`h-[10px] w-[10px] rounded-full bg-[#000000] transition-opacity duration-200 ${
                  idx === activeIndex ? 'opacity-100' : 'opacity-30 hover:opacity-60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
