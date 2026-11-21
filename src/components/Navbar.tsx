import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { SITE_CONTENT, SITE_INFO, type Locale } from '../content/siteData';

interface NavbarProps {
  locale: Locale;
}

export const Navbar: React.FC<NavbarProps> = ({ locale }) => {
  const c = SITE_CONTENT[locale];
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('#');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Exact live Divi menu order: Home -> Testimonies -> About us -> Contact us
  const navItems = [
    { label: c.nav.home, href: '#' },
    { label: c.nav.testimonies, href: '#Testimonies' },
    { label: c.nav.about, href: '#Aboutus' },
    { label: c.nav.contact, href: '#contactus' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled
          ? 'h-[54px] shadow-[0_0_7px_rgba(0,0,0,0.1)]'
          : 'h-[80px] shadow-[0_1px_0_rgba(0,0,0,0.1)]'
      }`}
    >
      <div className="mx-auto flex h-full w-[80%] max-w-[1080px] items-center justify-between">
        {/* Brand Logo (Divi #logo max-height: 54% -> 43.2px at 80px header, 29.2px at 54px header) */}
        <a
          href={locale === 'es' ? '/es' : '/'}
          className="flex items-center focus:outline-none"
          aria-label={SITE_INFO.name}
        >
          <img
            src={SITE_INFO.logo}
            alt={SITE_INFO.name}
            width={130}
            height={43}
            className={`w-auto object-contain transition-all duration-300 ${
              scrolled ? 'max-h-[29px]' : 'max-h-[43px]'
            }`}
          />
        </a>

        {/* Desktop Divi Primary Navigation (#top-menu: Open Sans 14px, 600 weight, 22px spacing) */}
        <nav aria-label="Primary Navigation" className="hidden items-center gap-[22px] md:flex">
          {navItems.map((item) => {
            const isActive = activeHash === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setActiveHash(item.href)}
                className={`font-opensans text-[14px] font-semibold transition-colors duration-200 ${
                  isActive
                    ? 'text-[#a07a19]'
                    : 'text-black/60 hover:text-black/80'
                }`}
              >
                {item.label}
              </a>
            );
          })}

          <a
            href={c.nav.langSwitchHref}
            className="font-opensans ml-1 rounded border border-[#957d3e]/35 px-2 py-0.5 text-[11px] font-semibold tracking-wider text-[#957d3e] transition-colors hover:bg-[#957d3e] hover:text-white"
            aria-label={`Switch language to ${c.nav.langSwitchLabel}`}
          >
            {c.nav.langSwitchLabel}
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href={c.nav.langSwitchHref}
            className="font-opensans rounded border border-[#957d3e]/40 px-2 py-0.5 text-[11px] font-semibold text-[#957d3e]"
          >
            {c.nav.langSwitchLabel}
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex items-center justify-center p-2 text-[#957d3e] focus:outline-none"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu (Divi .et_mobile_menu style) */}
      {mobileOpen && (
        <div className="border-t-[3px] border-[#957d3e] bg-white px-6 py-5 shadow-lg md:hidden">
          <ul className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => {
                    setActiveHash(item.href);
                    setMobileOpen(false);
                  }}
                  className="font-opensans block border-b border-black/5 py-2 text-[14px] font-semibold text-black/70 hover:text-[#a07a19]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};
