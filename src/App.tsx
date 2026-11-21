import React, { useEffect } from 'react';
import { SITE_CONTENT, type Locale } from './content/siteData';
import { resolveLegalRoute } from './legal/legalDocs';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CtaAssessmentSection } from './components/CtaAssessmentSection';
import { SolutionsSection } from './components/SolutionsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LegalPage } from './components/LegalPage';
import { CookieBanner } from './components/CookieBanner';

interface AppProps {
  initialLocale?: Locale;
  initialPath?: string;
}

export const App: React.FC<AppProps> = ({ initialLocale, initialPath }) => {
  const currentPath =
    initialPath ?? (typeof window !== 'undefined' ? window.location.pathname : '/');

  const legalMatch = resolveLegalRoute(currentPath);
  const locale: Locale =
    legalMatch?.locale ??
    initialLocale ??
    (currentPath === '/es' || currentPath.startsWith('/es/') ? 'es' : 'en');

  const content = SITE_CONTENT[locale];

  useEffect(() => {
    if (typeof document !== 'undefined' && !legalMatch) {
      document.documentElement.lang = locale;
      document.title = content.seo.title;
    }
  }, [locale, content.seo.title, legalMatch]);

  return (
    <div className="min-h-screen bg-white text-[#666666]">
      <Navbar locale={locale} />

      {legalMatch ? (
        <main className="pt-[80px]">
          <LegalPage locale={legalMatch.locale} kind={legalMatch.kind} />
        </main>
      ) : (
        <main id="et-main-area">
          <HeroSection locale={locale} />
          <CtaAssessmentSection locale={locale} />
          <SolutionsSection locale={locale} />
          <TestimonialsSection locale={locale} />
          <ContactSection locale={locale} />
        </main>
      )}

      <Footer locale={locale} />
      <CookieBanner locale={locale} />
    </div>
  );
};

export default App;
