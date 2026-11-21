import { getLegalDoc, legalPath, legalLabel, LEGAL_KINDS, type LegalKind, type Locale } from '../legal/legalDocs';
import { LEGAL_BIZ } from '../legal/legalConfig';

interface LegalPageProps {
  kind: LegalKind;
  locale: Locale;
}

export function LegalPage({ kind, locale }: LegalPageProps) {
  const doc = getLegalDoc(kind, locale, LEGAL_BIZ);
  const isEs = locale === 'es';

  return (
    <div className="bg-white py-12 text-[#222222] sm:py-16">
      <article className="mx-auto max-w-3xl px-4 sm:px-6">
        <nav aria-label={isEs ? 'Documentos legales' : 'Legal documents'} className="mb-8 flex flex-wrap gap-2">
          {LEGAL_KINDS.map((k) => (
            <a
              key={k}
              href={legalPath(k, locale)}
              aria-current={k === kind ? 'page' : undefined}
              className={`font-worksans rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors sm:text-sm ${
                k === kind
                  ? 'border-[#957d3e] bg-[#957d3e] text-white'
                  : 'border-[#957d3e]/35 bg-white text-[#957d3e] hover:bg-[#957d3e]/10'
              }`}
            >
              {legalLabel(k, locale)}
            </a>
          ))}
        </nav>

        <h1 className="font-baskervville text-3xl font-normal text-black sm:text-4xl">{doc.title}</h1>
        <p className="font-worksans mt-2 text-sm text-[#666666]">
          {doc.updatedLabel}: {doc.updated}
        </p>

        <div className="font-worksans mt-8 space-y-4 text-[15px] leading-relaxed text-[#333333]">
          {doc.sections.map((s, i) => (
            <section key={i} className={s.h ? 'pt-4' : ''}>
              {s.h && <h2 className="font-baskervville mb-2 text-2xl font-normal text-[#957d3e]">{s.h}</h2>}
              {s.p?.map((para, j) => (
                <p key={j} className="mb-3">
                  {para}
                </p>
              ))}
              {s.ul && (
                <ul className="mb-3 list-disc space-y-1.5 pl-6">
                  {s.ul.map((li, j) => (
                    <li key={j}>{li}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </article>
    </div>
  );
}
