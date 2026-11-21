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
      className="divi-testimonials-bg relative w-full overflow-hidden pt-0 pb-[8vw]"
    >
      {/* Divi Row: column_structure="2_5,3_5" (36.7% + 5.5% gap + 57.8%) custom_padding="0px||||false|false" */}
      <div className="mx-auto flex w-[80%] max-w-[1080px] flex-col pt-0 pb-[27px] lg:flex-row lg:justify-between">
        {/* Left 2/5 empty spacer column so background building is visible */}
        <div className="hidden lg:block lg:w-[36.7%]" />

        {/* Right 3/5 White Box (.et_pb_column_8) containing Divi Slider (.et_pb_slider_0) */}
        <div className="w-full bg-white px-[6%] pt-[30px] pb-[60px] lg:w-[57.8%]">
          <div className="mx-auto w-[88%] pt-[16%] pb-[16%] text-left">
            <h6 className="font-baskervville pb-[10px] text-[16px] leading-[1.4em] font-medium text-[#000000] sm:text-[20px] lg:text-[28px]">
              {currentSlide.quote}
            </h6>
            <p className="font-worksans text-[14px] font-medium text-[#000000] sm:text-[15px] lg:text-[16px]">
              {currentSlide.author}
            </p>
          </div>

          {/* Divi dot_nav_custom_color="#000000" pagination dots */}
          <div className="mt-2 flex items-center justify-center gap-[10px]" role="tablist" aria-label="Testimonial slides">
            {slides.map((slide, idx) => (
              <button
                key={slide.author}
                type="button"
                role="tab"
                aria-selected={idx === activeIndex}
                aria-label={`Testimonial ${idx + 1}: ${slide.author}`}
                onClick={() => setActiveIndex(idx)}
                className={`h-[7px] w-[7px] cursor-pointer rounded-full bg-[#000000] transition-opacity duration-200 ${
                  idx === activeIndex ? 'opacity-100' : 'opacity-50 hover:opacity-80'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
