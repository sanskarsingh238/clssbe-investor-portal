import SealMark from './SealMark.jsx';
import { NAV_LINKS, ORG } from '../data/content.js';

export default function Footer() {
  return (
    <footer className="bg-charcoal py-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <SealMark size={32} tone="cream" />
          <div className="leading-tight">
            <p className="font-display font-semibold text-cream text-sm">{ORG.shortName}</p>
            <p className="eyebrow text-cream/50 text-[9px]">{ORG.regLine}</p>
          </div>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-cream/60 hover:text-cream transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-xs text-cream/40 font-mono">
          © {new Date().getFullYear()} {ORG.shortName}
        </p>
      </div>
    </footer>
  );
}
