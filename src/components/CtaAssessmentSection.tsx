import React from 'react';
import { SITE_CONTENT, type Locale } from '../content/siteData';

interface CtaAssessmentSectionProps {
  locale: Locale;
}

export const CtaAssessmentSection: React.FC<CtaAssessmentSectionProps> = ({ locale }) => {
  const c = SITE_CONTENT[locale].ctaAssessment;

  return (
    <section
      aria-label="Call to Action"
      className="relative w-full overflow-hidden bg-white py-0"
    >
      <div className="mx-auto flex w-[80%] max-w-[1080px] flex-col lg:flex-row lg:items-start lg:gap-[5.5%]">
        {/* Left Column (1_2): custom_padding="8%||8%||true|false" */}
        <div className="w-full py-[8%] lg:w-[47.25%]">
          <h2 className="font-baskervville mb-[27px] text-[20px] leading-[1.2em] font-medium text-[#000000] sm:text-[32px] lg:text-[50px]">
            {c.h2}
          </h2>

          <div className="mb-[27px]">
            <img
              src={c.leftImage}
              alt={c.leftImageAlt}
              width={800}
              height={552}
              loading="lazy"
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="font-worksans text-[14px] leading-[1.6em] text-[#666666] sm:text-[16px] lg:text-[20px]">
            {c.paragraph}
          </div>
        </div>

        {/* Right Column (1_2): architect-3.jpg with custom_margin="|-30vw|||false|false" + bottom-left absolute architect-3.png */}
        <div className="relative w-full lg:w-[47.25%]">
          <div className="lg:mr-[-30vw]">
            <img
              src={c.rightImage}
              alt={c.rightImageAlt}
              width={800}
              height={882}
              loading="lazy"
              className="block h-auto w-full object-cover"
            />
          </div>
          <img
            src={c.rightOverlayImage}
            alt=""
            aria-hidden="true"
            width={632}
            height={632}
            loading="lazy"
            className="pointer-events-none absolute bottom-0 left-0 h-auto w-[70%] max-w-[460px] lg:w-auto"
          />
        </div>
      </div>
    </section>
  );
};
