import React from 'react';
import { SITE_CONTENT, type Locale } from '../content/siteData';

interface SolutionsSectionProps {
  locale: Locale;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ locale }) => {
  const { aboutBanner, solutions, transformBanner } = SITE_CONTENT[locale];

  return (
    <>
      {/* Divi Section 2: Gold Banner #Aboutus (max-width: 610px, row padding 27px 0) */}
      <section
        id="Aboutus"
        aria-label="Professional Strategy Consulting"
        className="w-full bg-[#957d3e] py-0"
      >
        <div className="mx-auto w-[80%] max-w-[610px] py-[27px] text-center text-white">
          <h2 className="font-baskervville mb-0 pb-[10px] text-[20px] leading-[1.2em] font-medium text-white sm:text-[32px] lg:text-[50px]">
            {aboutBanner.h2}
          </h2>
          <p className="font-worksans pb-[1em] text-[14px] leading-[1.8em] font-medium text-white sm:text-[15px] lg:text-[16px]">
            <span>{aboutBanner.paragraph}&nbsp;&nbsp;</span>
          </p>
        </div>
      </section>

      {/* Divi Section 3: Services / Our Solutions for Your Financial Success */}
      <section
        aria-label="Services"
        className="w-full bg-white pt-[54px] pb-[106px]"
      >
        {/* Row 1: Heading (max_width="870px", py 27px) */}
        <div className="mx-auto w-[80%] max-w-[870px] py-[27px] text-center">
          <h2 className="font-baskervville pb-[10px] text-[20px] leading-[1.2em] font-medium text-[#333333] sm:text-[32px] lg:text-[50px]">
            {solutions.h2}
          </h2>
        </div>

        {/* Row 2: Solutions Card (#f2f4f9, box-shadow 11px 12px 16px rgba(0,0,0,0.3), hover translate(-4px, -5px)) */}
        <div className="mx-auto w-[80%] max-w-[1080px] py-0">
          <div className="divi-solutions-card border-2 border-transparent px-[20px] py-[30px] sm:px-[30px] sm:py-[40px] lg:px-[30px] lg:py-[60px]">
            {solutions.blurbs.map((blurb, idx) => (
              <div
                key={idx}
                className={`font-opensans mx-auto mb-[20px] text-center text-[12px] leading-[1.8em] font-medium text-[#000000] last:mb-0 sm:text-[15px] lg:text-[16px] ${
                  idx === 1 ? 'min-h-[186.8px]' : ''
                } ${idx >= 2 ? 'pl-[6px]' : ''}`}
              >
                {idx === 1 || idx === 4 ? (
                  <>
                    <p className="pb-[1em]">
                      <strong className="font-bold">{blurb.lead}&nbsp;</strong>
                    </p>
                    <p>{blurb.body}</p>
                  </>
                ) : (
                  <p>
                    <strong className="font-bold">{blurb.lead}</strong>
                    <br />
                    <span>{idx === 2 ? blurb.body : `\u00A0${blurb.body}`}</span>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divi Section 4: Second Gold Banner (max-width: 610px) */}
      <section
        aria-label="Growth Engine Callout"
        className="w-full bg-[#957d3e] py-0"
      >
        <div className="mx-auto w-[80%] max-w-[610px] py-[27px] text-center text-white">
          <h2 className="font-baskervville mb-0 pb-[10px] text-[20px] leading-[1.2em] font-medium text-white sm:text-[32px] lg:text-[38px]">
            <span>{transformBanner.h2}</span>
          </h2>
          <p className="font-worksans pb-[1em] text-[14px] leading-[1.8em] font-medium text-white sm:text-[15px] lg:text-[16px]">
            <span>{transformBanner.paragraph}</span>
          </p>
        </div>
      </section>
    </>
  );
};
