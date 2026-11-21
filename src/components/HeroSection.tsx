import React from 'react';
import { SITE_CONTENT, type Locale } from '../content/siteData';

interface HeroSectionProps {
  locale: Locale;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ locale }) => {
  const c = SITE_CONTENT[locale].hero;

  return (
    <section
      aria-label="Header"
      className="divi-hero-bg relative w-full pt-[calc(80px+8vw)] pb-[8vw]"
    >
      <div className="mx-auto w-[80%] max-w-[1080px] py-[27px]">
        <div className="w-full">
          {/* Divi et_pb_text_0: Baskervville 53px desktop / 40px tablet / 24px phone, max-w 900px */}
          <h1 className="font-baskervville max-w-[900px] text-[24px] leading-[1.2em] font-normal text-[#000000] sm:text-[40px] lg:text-[53px] mb-[27px]">
            {c.h1}
          </h1>

          {/* Divi et_pb_text_1: Work Sans 20px desktop / 16px tablet / 14px phone, line-height 1.6em */}
          <p className="font-worksans mb-[27px] text-[14px] leading-[1.6em] text-[#666666] sm:text-[16px] lg:text-[20px]">
            <span>&nbsp; {c.paragraph}&nbsp;&nbsp;</span>
          </p>

          {/* Divi et_pb_button_0: #957d3e pill button, rounded 69px, 14px Work Sans, 12px 24px padding */}
          <div>
            <a
              href={c.buttonHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-worksans inline-block rounded-[69px] bg-[#957d3e] px-[24px] py-[12px] text-[14px] font-medium text-white transition-all duration-300 hover:bg-[#826c34]"
            >
              {c.buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
