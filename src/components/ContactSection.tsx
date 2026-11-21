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
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [feedbackMsg, setFeedbackMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

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
        <div className="w-full lg:w-[66.666%]">
          <h2 className="font-baskervville text-[20px] leading-[1.2em] font-medium text-white sm:text-[32px] lg:text-[60px]">
            {c.h2}
          </h2>
        </div>
        <div className="hidden lg:block lg:w-[33.333%]" />
      </div>

      {/* Row 2: column_structure="1_3,2_3" */}
      <div className="mx-auto flex w-[80%] max-w-[1080px] flex-col gap-10 py-[27px] lg:flex-row lg:gap-[5.5%]">
        {/* Left Column (1_3): Email & Phone in Merriweather 700 20px */}
        <div className="w-full lg:w-[29.666%]">
          <p className="font-worksans mb-[10px] text-[14px] leading-[1.6em] text-white">
            {c.emailLabel}
          </p>
          <h4 className="font-merriweather mb-[30px] text-[15px] leading-[1.4em] font-bold text-white sm:text-[16px] lg:text-[20px] break-all sm:break-normal">
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
          <h4 className="font-merriweather mb-[30px] text-[15px] leading-[1.4em] font-bold text-white sm:text-[16px] lg:text-[20px]">
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
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
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

            {/* Row 1: Name (1/2) & Email Address (1/2) */}
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
                  className="font-worksans w-full border-0 border-b-2 border-white/30 bg-transparent px-0 py-[20px] text-[14px] leading-[1.6em] text-white placeholder-white/50 focus:border-[#957d3e] focus:outline-none sm:text-[16px] lg:text-[20px]"
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
                  className="font-worksans w-full border-0 border-b-2 border-white/30 bg-transparent px-0 py-[20px] text-[14px] leading-[1.6em] text-white placeholder-white/50 focus:border-[#957d3e] focus:outline-none sm:text-[16px] lg:text-[20px]"
                />
              </div>
            </div>

            {/* Row 2: Message (Fullwidth) */}
            <div>
              <label htmlFor="avisky-message" className="sr-only">
                {c.form.messagePlaceholder}
              </label>
              <input
                id="avisky-message"
                type="text"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={c.form.messagePlaceholder}
                className="font-worksans w-full border-0 border-b-2 border-white/30 bg-transparent px-0 py-[20px] text-[14px] leading-[1.6em] text-white placeholder-white/50 focus:border-[#957d3e] focus:outline-none sm:text-[16px] lg:text-[20px]"
              />
            </div>

            {/* US TCPA / Privacy Disclosure */}
            <p className="font-worksans pt-2 text-[11px] leading-relaxed text-white/45">
              {c.form.tcpaNotice}
            </p>

            {/* Submit Button aligned right like Divi et_pb_contact_submit */}
            <div className="flex flex-col items-end gap-3 pt-2">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="font-worksans cursor-pointer rounded-[59px] bg-[#957d3e] px-[24px] py-[12px] text-[14px] font-medium text-white transition-all duration-300 hover:bg-[#826c34] disabled:opacity-60"
              >
                {status === 'submitting' ? c.form.submittingText : c.form.submitButton}
              </button>

              {status === 'success' && (
                <p className="font-worksans text-[14px] text-[#c5a95a]" role="status">
                  {feedbackMsg || c.form.successMessage}
                </p>
              )}
              {status === 'error' && (
                <p className="font-worksans text-[14px] text-red-400" role="alert">
                  {feedbackMsg || c.form.errorMessage}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
