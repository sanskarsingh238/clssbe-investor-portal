import { MapPin, Phone, Mail, Globe, Linkedin, Instagram } from 'lucide-react';
import { ORG } from '../data/content.js';

const CHANNELS = [
  { icon: MapPin, label: 'Office', value: ORG.address, href: null },
  { icon: Phone, label: 'Telephone', value: ORG.phone, href: `tel:${ORG.phone.replace(/\s+/g, '')}` },
  { icon: Mail, label: 'Email', value: ORG.email, href: `mailto:${ORG.email}` },
  { icon: Globe, label: 'Website', value: 'clssbe.org', href: ORG.website },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Canis Lupus Society Of Skill Based Education',
    href: ORG.linkedin
  },
  { icon: Instagram, label: 'Instagram', value: ORG.instagramHandle, href: ORG.instagram }
];

export default function Contact() {
  return (
    <section id="contact" className="bg-emerald-deep py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow text-gold-soft mb-3">Help & Corporate Contact Center</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-cream text-balance">
            Speak directly with the partnerships desk
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CHANNELS.map((c) => {
            const Icon = c.icon;
            const content = (
              <>
                <Icon size={20} className="text-gold" strokeWidth={1.75} />
                <div className="mt-4">
                  <p className="eyebrow text-emerald-soft/60">{c.label}</p>
                  <p className="mt-1 text-cream text-sm leading-relaxed">{c.value}</p>
                </div>
              </>
            );
            const baseClass =
              'block bg-emerald-deep/40 cert-border rounded-sm p-6 hover:bg-emerald-deep/60 transition-colors';
            return c.href ? (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={baseClass}
              >
                {content}
              </a>
            ) : (
              <div key={c.label} className={baseClass}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
