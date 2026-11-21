import React from 'react';
import { SITE_CONTENT, type Locale } from '../content/siteData';
import { LEGAL_KINDS, legalLabel, legalPath } from '../legal/legalDocs';

interface FooterProps {
  locale: Locale;
}

export const Footer: React.FC<FooterProps> = ({ locale }) => {
  const c = SITE_CONTENT[locale].footer;

  return (
    <footer id="main-footer" className="w-full bg-[#171717] text-[#666666]">
      <div id="footer-bottom" className="bg-black/32 py-[15px]">
        <div className="mx-auto flex w-[80%] max-w-[1080px] flex-col items-center justify-between gap-3 sm:flex-row">
          <div id="footer-info" className="font-worksans text-[14px] text-[#666666]">
            {c.credits}
          </div>

          <nav aria-label="Legal Policies" className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            {LEGAL_KINDS.map((kind) => (
              <a
                key={kind}
                href={legalPath(kind, locale)}
                className="font-worksans text-[12px] text-[#666666] transition-colors hover:text-[#957d3e]"
              >
                {legalLabel(kind, locale)}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
