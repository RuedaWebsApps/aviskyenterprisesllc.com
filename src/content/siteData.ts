export type Locale = 'en' | 'es';

export interface SolutionBlurb {
  lead: string;
  body: string;
}

export interface TestimonialSlide {
  quote: string;
  author: string;
}

export interface SiteContent {
  locale: Locale;
  seo: {
    title: string;
    description: string;
    canonical: string;
  };
  nav: {
    home: string;
    about: string;
    testimonies: string;
    contact: string;
    langSwitchLabel: string;
    langSwitchHref: string;
  };
  hero: {
    h1: string;
    paragraph: string;
    buttonText: string;
    buttonHref: string;
  };
  ctaAssessment: {
    h2: string;
    paragraph: string;
    leftImage: string;
    leftImageAlt: string;
    rightImage: string;
    rightImageAlt: string;
    rightOverlayImage: string;
  };
  aboutBanner: {
    h2: string;
    paragraph: string;
  };
  solutions: {
    h2: string;
    blurbs: SolutionBlurb[];
  };
  transformBanner: {
    h2: string;
    paragraph: string;
  };
  testimonials: {
    slides: TestimonialSlide[];
  };
  contact: {
    h2: string;
    emailLabel: string;
    emailValue: string;
    phoneLabel: string;
    phoneValue: string;
    phoneHref: string;
    form: {
      namePlaceholder: string;
      emailPlaceholder: string;
      messagePlaceholder: string;
      submitButton: string;
      submittingText: string;
      successMessage: string;
      errorMessage: string;
      tcpaNotice: string;
    };
  };
  footer: {
    credits: string;
  };
}

export const SITE_INFO = {
  name: 'Avi Sky Enterprises LLC',
  shortName: 'Avi Sky',
  domain: 'aviskyenterprisesllc.com',
  siteUrl: 'https://aviskyenterprisesllc.com',
  phoneDisplay: '(512) 243-6792',
  phoneHref: 'tel:+15122436792',
  whatsappHref: 'https://wa.me/15122436792',
  email: 'info@aviskyenterprisesllc.com',
  formTargetEmail: 'brandsbygeorge@gmail.com',
  logo: '/images/avi-logo.webp',
};

export const SITE_CONTENT: Record<Locale, SiteContent> = {
  en: {
    locale: 'en',
    seo: {
      title: 'Avi Sky | Enterprises LLC',
      description:
        "In today's competitive landscape, businesses need more than just good ideas; they need impactful execution and a clear path to growth. Partner with Avi Sky Enterprises LLC.",
      canonical: 'https://aviskyenterprisesllc.com/',
    },
    nav: {
      home: 'Home',
      about: 'About us',
      testimonies: 'Testimonies',
      contact: 'Contact us',
      langSwitchLabel: 'ES',
      langSwitchHref: '/es',
    },
    hero: {
      h1: 'Empower Your Business with Avi Sky Enterprises',
      paragraph:
        "In today's competitive landscape, businesses need more than just good ideas; they need impactful execution and a clear path to growth. By partnering with us, you gain access to a dedicated team of marketing experts who bring both cutting-edge creativity and data-driven strategy to your brand.",
      buttonText: 'Get Started with Avi Sky Enterprises LLC',
      buttonHref: 'https://wa.me/15122436792',
    },
    ctaAssessment: {
      h2: 'Claim Your Free Marketing Assessment Today!',
      paragraph:
        "We don't just produce campaigns; we deliver measurable results, offering a holistic approach that integrates every aspect of your marketing, from captivating storytelling to precise media targeting. This translates into increased brand awareness, stronger customer engagement, and a demonstrable return on your investment, allowing you to focus on your core business while we propel your growth.",
      leftImage: '/images/architect-12.webp',
      leftImageAlt: 'architect-12',
      rightImage: '/images/architect-3.webp',
      rightImageAlt: 'architect-3',
      rightOverlayImage: '/images/architect-3-overlay.webp',
    },
    aboutBanner: {
      h2: 'Professional\u00A0 Strategy Consulting',
      paragraph:
        "We strive to be an innovative marketing company that consistently drives exceptional performance, demonstrates unparalleled strategic prowess, and creates a significant, measurable impact on both our clients' success and the industry at large",
    },
    solutions: {
      h2: 'Our Solutions for Your Financial Success',
      blurbs: [
        {
          lead: 'We ignite with unwavering creativity and innovative storytelling.',
          body: "We don't just create ads; we craft compelling narratives that cut through the noise, surprise and delight audiences, and forge deep emotional connections. Our goal is to make our clients' brands unforgettable and inspire action.",
        },
        {
          lead: 'We build on strategic depth, driven by data and insights.',
          body: 'Every creative idea is underpinned by rigorous research and sophisticated data analysis. We delve into consumer behavior, market trends, and performance metrics to ensure our strategies are not just brilliant, but also precisely targeted and highly effective, delivering tangible ROI.',
        },
        {
          lead: 'We provide integrated capabilities and holistic solutions.',
          body: 'We understand that modern marketing demands a seamless, unified approach. From brand strategy and traditional advertising to cutting-edge digital, social media, and media planning, we offer a comprehensive suite of services that work in concert to engage audiences across every touchpoint.',
        },
        {
          lead: 'We prove our worth through a consistent track record and undeniable client success.',
          body: 'Our ultimate measure of success is the growth and prosperity of our clients. We are committed to delivering campaigns that don\'t just win awards, but also significantly increase market share, boost sales, and enhance brand loyalty, creating long-term value.',
        },
        {
          lead: 'We embody adaptability and future-forward thinking.',
          body: 'The marketing landscape is constantly shifting, and we thrive in this dynamic environment. We continuously monitor emerging technologies, consumer behaviors, and industry trends, proactively evolving our strategies and capabilities to ensure our clients always stay ahead of the curve and capitalize on new opportunities.',
        },
      ],
    },
    transformBanner: {
      h2: 'Ready to transform your marketing from a cost center into a powerful growth engine?',
      paragraph:
        "Don't settle for generic solutions or missed opportunities. Schedule a free strategy session with us today and discover how our innovative, data-driven approach can unlock your brand's full potential, connect with your ideal customers, and deliver the measurable results your business deserves.",
    },
    testimonials: {
      slides: [
        {
          quote:
            '"Avi Sky Enterprises\'s  team was incredibly proactive, always bringing fresh, data-backed ideas to the table, and their communication was transparent every step of the way. I feel confident about our growth trajectory, knowing we have a true partner committed to our success, not just running ads."',
          author: '— Charles L, Austin, TX',
        },
        {
          quote:
            '"Wow, that was a game-changer! Before, marketing felt like a constant guessing game – throwing money at campaigns and hoping something would stick. Now, I have a clear understanding of what\'s working, why it\'s working, and what\'s next. Our brand is stronger, resonating deeply with our audience, and we\'re seeing a tangible increase in leads and sales that directly impacts our bottom line."',
          author: '—  Paul R. Dallas, TX',
        },
        {
          quote:
            '"I can finally focus on running my business, not just chasing marketing trends. This partnership has freed up so much of my time and mental energy, allowing me to concentrate on product development, customer service, and scaling operations. I trust that our marketing is in expert hands, consistently generating high-quality leads and building our brand. It\'s an investment that\'s already paid for itself, and I\'m excited about the accelerated growth we\'re experiencing because of it."',
          author: '— Roger P, Houston, TX',
        },
      ],
    },
    contact: {
      h2: 'Ready to Transform Your Marketing? Let’s Talk!',
      emailLabel: 'Email',
      emailValue: 'info@aviskyenterprisesllc.com',
      phoneLabel: 'Phone',
      phoneValue: '(512) 243-6792',
      phoneHref: 'tel:+15122436792',
      form: {
        namePlaceholder: 'Name',
        emailPlaceholder: 'Email Address',
        messagePlaceholder: 'Message',
        submitButton: 'Submit',
        submittingText: 'Sending...',
        successMessage: 'Thank you! Your message has been sent to Avi Sky Enterprises LLC.',
        errorMessage: 'Unable to send right now. Please call or WhatsApp us at (512) 243-6792.',
        tcpaNotice:
          'By submitting this form, you agree to our Privacy Policy and Terms of Use and consent to allow Avi Sky Enterprises LLC to contact you via email, phone, or SMS regarding your inquiry. Reply STOP to opt out.',
      },
    },
    footer: {
      credits: 'Designed by Rueda La Rola Media | 2025 ®',
    },
  },
  es: {
    locale: 'es',
    seo: {
      title: 'Avi Sky – Impulsa Tu Negocio con Avi Sky Enterprises LLC',
      description:
        'Consultoría Estratégica Profesional y Soluciones de Marketing Basadas en Datos en Austin, Dallas y Houston, TX. Impulsa tu crecimiento con Avi Sky Enterprises LLC.',
      canonical: 'https://aviskyenterprisesllc.com/es',
    },
    nav: {
      home: 'Inicio',
      about: 'Nosotros',
      testimonies: 'Testimonios',
      contact: 'Contacto',
      langSwitchLabel: 'EN',
      langSwitchHref: '/',
    },
    hero: {
      h1: 'Impulsa Tu Negocio con Avi Sky Enterprises',
      paragraph:
        'En el competitivo panorama actual, las empresas necesitan más que buenas ideas; necesitan una ejecución de alto impacto y un camino claro hacia el crecimiento. Al asociarte con nosotros, obtienes acceso a un equipo dedicado de expertos en marketing que aportan creatividad de vanguardia y estrategia basada en datos a tu marca.',
      buttonText: 'Comienza con Avi Sky Enterprises LLC',
      buttonHref: 'https://wa.me/15122436792',
    },
    ctaAssessment: {
      h2: '¡Solicita Tu Evaluación de Marketing Gratuita Hoy!',
      paragraph:
        'No solo producimos campañas; entregamos resultados medibles, ofreciendo un enfoque integral que conecta cada aspecto de tu marketing, desde una narrativa cautivadora hasta una segmentación precisa de medios. Esto se traduce en mayor reconocimiento de marca, una conexión más sólida con tus clientes y un retorno de inversión demostrable, permitiéndote concentrarte en tu negocio principal mientras impulsamos tu crecimiento.',
      leftImage: '/images/architect-12.webp',
      leftImageAlt: 'architect-12',
      rightImage: '/images/architect-3.webp',
      rightImageAlt: 'architect-3',
      rightOverlayImage: '/images/architect-3-overlay.webp',
    },
    aboutBanner: {
      h2: 'Consultoría Estratégica Profesional',
      paragraph:
        'Nos esforzamos por ser una empresa de marketing innovadora que impulsa constantemente un desempeño excepcional, demuestra una destreza estratégica incomparable y crea un impacto significativo y medible tanto en el éxito de nuestros clientes como en la industria en general',
    },
    solutions: {
      h2: 'Nuestras Soluciones para Tu Éxito Financiero',
      blurbs: [
        {
          lead: 'Encendemos marcas con creatividad inquebrantable y narrativa innovadora.',
          body: 'No solo creamos anuncios; diseñamos historias convincentes que superan el ruido del mercado, sorprenden y cautivan a las audiencias, y forjan conexiones emocionales profundas. Nuestra meta es hacer que las marcas de nuestros clientes sean inolvidables e inspiren acción.',
        },
        {
          lead: 'Construimos sobre profundidad estratégica, impulsada por datos y análisis.',
          body: 'Cada idea creativa está respaldada por una investigación rigurosa y un análisis de datos sofisticado. Profundizamos en el comportamiento del consumidor, las tendencias del mercado y las métricas de rendimiento para garantizar que nuestras estrategias sean precisas, altamente efectivas y entreguen un ROI tangible.',
        },
        {
          lead: 'Ofrecemos capacidades integradas y soluciones holísticas.',
          body: 'Entendemos que el marketing moderno exige un enfoque unificado y fluido. Desde estrategia de marca y publicidad tradicional hasta medios digitales de vanguardia, redes sociales y planificación de medios, ofrecemos una suite integral de servicios que trabajan en conjunto en cada punto de contacto.',
        },
        {
          lead: 'Demostramos nuestro valor mediante una trayectoria sólida y el éxito innegable de nuestros clientes.',
          body: 'Nuestra máxima medida de éxito es el crecimiento y la prosperidad de nuestros clientes. Estamos comprometidos a entregar campañas que incrementen significativamente la participación de mercado, impulsen las ventas y fortalezcan la lealtad de marca a largo plazo.',
        },
        {
          lead: 'Encarnamos la adaptabilidad y el pensamiento orientado al futuro.',
          body: 'El panorama del marketing cambia constantemente y prosperamos en este entorno dinámico. Monitoreamos continuamente las tecnologías emergentes, los hábitos del consumidor y las tendencias de la industria, evolucionando nuestras estrategias de forma proactiva para que nuestros clientes siempre estén un paso adelante.',
        },
      ],
    },
    transformBanner: {
      h2: '¿Listo para transformar tu marketing de un centro de costos a un poderoso motor de crecimiento?',
      paragraph:
        'No te conformes con soluciones genéricas ni oportunidades perdidas. Agenda hoy una sesión estratégica gratuita con nosotros y descubre cómo nuestro enfoque innovador basado en datos puede desbloquear todo el potencial de tu marca, conectar con tus clientes ideales y entregar los resultados medibles que tu empresa merece.',
    },
    testimonials: {
      slides: [
        {
          quote:
            '"El equipo de Avi Sky Enterprises fue increíblemente proactivo, aportando siempre ideas frescas respaldadas por datos, y su comunicación fue transparente en cada paso del camino. Me siento seguro sobre nuestra trayectoria de crecimiento sabiendo que tenemos un verdadero socio comprometido con nuestro éxito."',
          author: '— Charles L, Austin, TX',
        },
        {
          quote:
            '"¡Fue un cambio total! Antes, el marketing parecía un juego constante de adivinanzas. Ahora tengo una comprensión clara de qué está funcionando, por qué funciona y qué sigue. Nuestra marca es más fuerte y estamos viendo un aumento tangible en prospectos y ventas que impacta directamente nuestros resultados."',
          author: '—  Paul R. Dallas, TX',
        },
        {
          quote:
            '"Finalmente puedo concentrarme en dirigir mi empresa en lugar de perseguir tendencias de marketing. Esta alianza ha liberado mi tiempo y energía mental para enfocarme en el desarrollo de productos, servicio al cliente y escalar operaciones. Es una inversión que ya se pagó sola."',
          author: '— Roger P, Houston, TX',
        },
      ],
    },
    contact: {
      h2: '¿Listo para Transformar Tu Marketing? ¡Hablemos!',
      emailLabel: 'Email',
      emailValue: 'info@aviskyenterprisesllc.com',
      phoneLabel: 'Phone',
      phoneValue: '(512) 243-6792',
      phoneHref: 'tel:+15122436792',
      form: {
        namePlaceholder: 'Nombre',
        emailPlaceholder: 'Correo Electrónico',
        messagePlaceholder: 'Mensaje',
        submitButton: 'Enviar',
        submittingText: 'Enviando...',
        successMessage: '¡Gracias! Tu mensaje ha sido enviado a Avi Sky Enterprises LLC.',
        errorMessage: 'No se pudo enviar en este momento. Llámanos o escríbenos por WhatsApp al (512) 243-6792.',
        tcpaNotice:
          'Al enviar este formulario, aceptas nuestra Política de Privacidad y Términos de Uso y autorizas a Avi Sky Enterprises LLC a contactarte por correo, teléfono o SMS respecto a tu solicitud. Responde STOP para cancelar.',
      },
    },
    footer: {
      credits: 'Designed by Rueda La Rola Media | 2025 ®',
    },
  },
};

export function getJsonLdSchema(locale: Locale) {
  const c = SITE_CONTENT[locale];
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['ProfessionalService', 'MarketingAgency'],
        '@id': `${SITE_INFO.siteUrl}/#organization`,
        name: SITE_INFO.name,
        alternateName: SITE_INFO.shortName,
        url: SITE_INFO.siteUrl,
        logo: `${SITE_INFO.siteUrl}/images/avi-logo.png`,
        image: `${SITE_INFO.siteUrl}/images/og-cover.jpg`,
        description: c.seo.description,
        telephone: '+1-512-243-6792',
        email: SITE_INFO.email,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Austin',
          addressRegion: 'TX',
          addressCountry: 'US',
        },
        areaServed: [
          { '@type': 'City', name: 'Austin' },
          { '@type': 'City', name: 'Dallas' },
          { '@type': 'City', name: 'Houston' },
          { '@type': 'State', name: 'Texas' },
        ],
        priceRange: '$$',
        review: c.testimonials.slides.map((s) => ({
          '@type': 'Review',
          reviewBody: s.quote.replace(/^"|"$/g, ''),
          author: {
            '@type': 'Person',
            name: s.author.replace(/^—\s*/, ''),
          },
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
          },
        })),
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_INFO.siteUrl}/#website`,
        url: SITE_INFO.siteUrl,
        name: SITE_INFO.name,
        inLanguage: ['en-US', 'es-US'],
        publisher: {
          '@id': `${SITE_INFO.siteUrl}/#organization`,
        },
      },
    ],
  };
}
