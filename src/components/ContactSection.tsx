import React, { useState } from 'react';
import { SITE_CONTENT, SITE_INFO, type Locale } from '../content/siteData';
import { submitContactForm } from '../lib/contactAdapter';

interface ContactSectionProps {
  locale: Locale;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ locale }) => {
  const c = SITE_CONTENT[locale].contact;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [feedbackMsg, setFeedbackMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    if (captcha.trim() !== '' && captcha.trim() !== '9') {
      setStatus('error');
      setFeedbackMsg(locale === 'es' ? 'Por favor verifica la suma (4 + 5 = 9).' : 'Please check the math captcha (4 + 5 = 9).');
      return;
    }

    setStatus('submitting');
    const res = await submitContactForm({
      name: name.trim(),
      email: email.trim(),
      phone: '',
      service: 'Marketing Strategy Inquiry',
      message: message.trim(),
      locale,
      website_hp: honeypot,
    });

    setFeedbackMsg(res.message);
    if (res.ok) {
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
      setCaptcha('');
    } else {
      setStatus('error');
    }
  };

  return (
    <section
      id="contactus"
      aria-label="Footer Contact"
      className="divi-contact-bg relative w-full py-[54px] text-white"
    >
      {/* Row 1: column_structure="2_3,1_3" border_width_bottom="1px" border_color_all="#FFFFFF" */}
      <div className="mx-auto flex w-[80%] max-w-[1080px] flex-col border-b border-white py-[27px] lg:flex-row">
        <div className="w-full lg:w-[64.833%]">
          <h2 className="font-baskervville pb-[10px] text-[20px] leading-[1.2em] font-medium text-white sm:text-[32px] lg:text-[60px]">
            {c.h2}
          </h2>
        </div>
        <div className="hidden lg:block lg:w-[29.666%]" />
      </div>

      {/* Row 2: column_structure="1_3,2_3" */}
      <div className="mx-auto flex w-[80%] max-w-[1080px] flex-col gap-10 py-[27px] lg:flex-row lg:gap-[5.5%]">
        {/* Left Column (1_3): Email & Phone in Merriweather 700 20px */}
        <div className="w-full lg:w-[29.666%]">
          <p className="font-worksans mb-[10px] text-[14px] leading-[1.6em] text-white">
            {c.emailLabel}
          </p>
          <h4 className="font-merriweather mb-[30px] pb-[10px] text-[15px] leading-[1.4em] font-bold break-words text-white sm:text-[16px] lg:text-[20px]">
            <a
              href={`mailto:${SITE_INFO.email}`}
              className="text-white transition-colors hover:text-[#957d3e]"
            >
              {c.emailValue}
            </a>
          </h4>

          <p className="font-worksans mb-[10px] text-[14px] leading-[1.6em] text-white">
            {c.phoneLabel}
          </p>
          <h4 className="font-merriweather mb-[30px] pb-[10px] text-[15px] leading-[1.4em] font-bold text-white sm:text-[16px] lg:text-[20px]">
            <a
              href={c.phoneHref}
              className="text-white transition-colors hover:text-[#957d3e]"
            >
              {c.phoneValue}
            </a>
          </h4>
        </div>

        {/* Right Column (2_3): Divi Minimalist Underlined Contact Form */}
        <div className="w-full lg:w-[64.833%]">
          <form onSubmit={handleSubmit} className="space-y-3" noValidate>
            {/* Anti-spam honeypot */}
            <input
              type="text"
              name="website_hp"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            {/* Row 1: Name (1/2) & Email Address (1/2) with 3% Divi field gap */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="avisky-name" className="sr-only">
                  {c.form.namePlaceholder}
                </label>
                <input
                  id="avisky-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={c.form.namePlaceholder}
                  className="font-worksans w-full border-0 border-b-2 border-white/30 bg-transparent px-0 py-[20px] text-[14px] leading-[1.6em] text-white/80 placeholder-white/50 focus:border-[#957d3e] focus:outline-none sm:text-[16px] lg:text-[20px]"
                />
              </div>

              <div>
                <label htmlFor="avisky-email" className="sr-only">
                  {c.form.emailPlaceholder}
                </label>
                <input
                  id="avisky-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={c.form.emailPlaceholder}
                  className="font-worksans w-full border-0 border-b-2 border-white/30 bg-transparent px-0 py-[20px] text-[14px] leading-[1.6em] text-white/80 placeholder-white/50 focus:border-[#957d3e] focus:outline-none sm:text-[16px] lg:text-[20px]"
                />
              </div>
            </div>

            {/* Row 2: Message (Fullwidth multi-line textarea matching live Divi contact form) */}
            <div className="pt-2">
              <label htmlFor="avisky-message" className="sr-only">
                {c.form.messagePlaceholder}
              </label>
              <textarea
                id="avisky-message"
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={c.form.messagePlaceholder}
                className="font-worksans min-h-[130px] w-full resize-y border-0 border-b-2 border-white/30 bg-transparent px-0 py-[20px] text-[14px] leading-[1.6em] text-white/80 placeholder-white/50 focus:border-[#957d3e] focus:outline-none sm:text-[16px] lg:text-[20px]"
              />
            </div>

            {/* Submit Row with Divi Math Captcha (4 + 5 =) & Gold Pill Submit Button */}
            <div className="flex flex-wrap items-center justify-end gap-4 pt-2">
              <div className="flex items-center gap-2 text-[14px] text-[#666666]">
                <label htmlFor="avisky-captcha" className="font-opensans text-[13px] text-[#666666]">
                  4 + 5 =
                </label>
                <input
                  id="avisky-captcha"
                  type="text"
                  inputMode="numeric"
                  value={captcha}
                  onChange={(e) => setCaptcha(e.target.value)}
                  aria-label="Math verification 4 + 5"
                  className="font-worksans w-[45px] border-0 border-b-2 border-white/30 bg-transparent py-2 text-center text-[16px] text-white/80 focus:border-[#957d3e] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="font-worksans cursor-pointer rounded-[59px] bg-[#957d3e] px-[24px] py-[12px] text-[14px] font-medium text-white transition-all duration-300 hover:bg-[#826c34] disabled:opacity-60"
              >
                {status === 'submitting' ? c.form.submittingText : c.form.submitButton}
              </button>
            </div>

            {/* US TCPA / Privacy Disclosure */}
            <p className="font-worksans pt-1 text-right text-[11px] leading-relaxed text-white/40">
              {c.form.tcpaNotice}
            </p>

            {status === 'success' && (
              <p className="font-worksans text-right text-[14px] text-[#c5a95a]" role="status">
                {feedbackMsg || c.form.successMessage}
              </p>
            )}
            {status === 'error' && (
              <p className="font-worksans text-right text-[14px] text-red-400" role="alert">
                {feedbackMsg || c.form.errorMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
