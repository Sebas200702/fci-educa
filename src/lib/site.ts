// Site-wide constants: brand, SEO defaults and the Organization node.

export const siteName = 'Colombia Incluyente Educa';
export const siteLocale = 'es_CO';
export const ogImagePath = '/og.jpg';
export const ogImageAlt = 'Colombia Incluyente Educa, plataforma de formación de la Fundación Colombia Incluyente';

export const ORG_URL = 'https://fundacioncolombiaincluyente.org';

export const socialLinks = {
  instagram: 'https://www.instagram.com/fundacioncolombiaincluyentefci/',
  facebook: 'https://www.facebook.com/people/Fundaci%C3%B3n-Colombia-Incluyente/100080111835819/',
  linkedin: 'https://www.linkedin.com/company/fundaci%C3%B3n-colombia-incluyente',
  youtube: 'https://www.youtube.com/channel/UCGW-ruRzzetsK11D7oL2m1Q',
} as const;

export const organization = {
  '@type': 'NGO',
  '@id': `${ORG_URL}/#organization`,
  name: 'Fundación Colombia Incluyente',
  url: ORG_URL,
  sameAs: Object.values(socialLinks),
};
