export interface BrandItem {
  name: string
  logoUrl?: string
}

export interface ServiceItem {
  title: string
  description: string
}

export interface StatItem {
  value: string
  label: string
}

export interface NavItem {
  label: string
  href: string
}

export interface ContactFormConfig {
  enabled: boolean
  endpoint: string
}

export interface ContactConfig {
  email: string
  whatsapp: string
  form: ContactFormConfig
  placeholderMessage: string
}

export interface SiteConfig {
  name: string
  tagline: string
  description: string
  hero: {
    headline: string
    subtext: string
    primaryCta: { label: string; href: string }
    secondaryCta: { label: string; href: string }
  }
  intro: {
    text: string
  }
  stats: StatItem[]
  brands: {
    title: string
    items: BrandItem[]
  }
  services: {
    title: string
    items: ServiceItem[]
  }
  cta: {
    headline: string
    subtext: string
    button: { label: string; href: string }
  }
  contact: ContactConfig
  nav: NavItem[]
  footer: {
    copyright: string
  }
}

export const siteConfig: SiteConfig = {
  name: 'Loftsy',
  tagline: 'mikro influencer, makro etki.',
  description:
    'Loftsy, markaları doğru creator\'larla buluşturan yeni nesil mikro influencer ajansıdır.',
  hero: {
    headline: 'mikro influencer, makro etki.',
    subtext:
      'Loftsy, markaları doğru creator\'larla buluşturan yeni nesil mikro influencer ajansıdır.',
    primaryCta: { label: 'Markan için çalışalım', href: '#contact' },
    secondaryCta: { label: 'Creator ağına katıl', href: '#contact' },
  },
  intro: {
    text: 'Loftsy, 200\'den fazla mikro ve makro influencer\'dan oluşan ağıyla markalara hedefli, doğal ve ölçülebilir sosyal medya erişimi sağlar. Eğitimden FMCG\'ye, dijital ürünlerden perakendeye kadar farklı kategorilerde markalar için creator iş birlikleri tasarlar ve yönetir.',
  },
  stats: [
    { value: '200+', label: 'Influencer ağı' },
    { value: '300M+', label: 'Toplam erişim' },
    { value: 'Çoklu kategori', label: 'Eğitim, perakende, FMCG ve dijital markalar' },
    { value: 'Mikro + makro', label: 'Creator karması' },
  ],
  brands: {
    title: 'trusted by brands',
    items: [
      { name: 'Dimes' },
      { name: 'A101' },
      { name: 'Kopilot' },
      { name: 'En Uygun' },
      { name: 'KR Akademi' },
      { name: '3D' },
      { name: 'Makyajtrendi' },
      { name: 'Coffy' },
      { name: 'Indomietrendi' },
      { name: 'Coffy' },
      { name: 'Indomie' },
      { name: 'Tonguç' },
      { name: 'Toprak' },
      { name: 'Psh' },
      { name: 'Aydın' },
    ],
  },
  services: {
    title: 'Ne yapıyoruz?',
    items: [
      {
        title: 'Creator Matching',
        description: 'Markanın hedef kitlesine uygun influencer seçimi.',
      },
      {
        title: 'Campaign Management',
        description: 'Brief, içerik akışı, yayın takvibi ve operasyon yönetimi.',
      },
      {
        title: 'Performance Reporting',
        description: 'Erişim, etkileşim ve sonuçların sade raporlanması.',
      },
      {
        title: 'Brand Collaborations',
        description: 'Mikro ve makro influencer iş birlikleriyle marka görünürlüğü.',
      },
    ],
  },
  cta: {
    headline: 'let\'s build influence beautifully.',
    subtext: 'Markan için doğru creator ağını kuralım.',
    button: { label: 'İletişime geç', href: '#contact' },
  },
  contact: {
    email: 'info@loftsy.com.tr',
    whatsapp: '',
    form: {
      enabled: true,
      endpoint: '/api/contact',
    },
    placeholderMessage: 'İletişim kanalları yakında eklenecek.',
  },
  nav: [
    { label: 'Tanıtım', href: '#intro' },
    { label: 'Rakamlar', href: '#stats' },
    { label: 'Markalar', href: '#brands' },
    { label: 'Hizmetler', href: '#services' },
    { label: 'İletişim', href: '#contact' },
  ],
  footer: {
    copyright: `© ${new Date().getFullYear()} Loftsy. All rights reserved.`,
  },
}
