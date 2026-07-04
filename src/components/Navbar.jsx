import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import SealMark from './SealMark.jsx';
import { NAV_LINKS, ORG } from '../data/content.js';

export default function Navbar({ onOpenAuth }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-cream/80 backdrop-blur-md border-b border-emerald-line' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#top" className="flex items-center gap-3 shrink-0">
            <SealMark size={38} tone="emerald" />
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="font-display font-semibold text-charcoal text-[15px]">
                {ORG.shortName}
              </span>
              <span className="eyebrow text-charcoal-soft text-[9px]">Regd. Society</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-charcoal-soft hover:text-emerald-deep transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <button
              onClick={onOpenAuth}
              className="inline-flex items-center gap-1.5 bg-rust hover:bg-rust-deep text-cream text-sm font-semibold px-5 py-2.5 rounded-sm transition-colors"
            >
              Invest / Partner Now
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </button>
          </div>

          <button
            className="md:hidden p-2 text-charcoal"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-cream-paper border-t border-emerald-line px-5 pb-6 pt-2">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-charcoal border-b border-emerald-line/60"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            onClick={() => {
              setOpen(false);
              onOpenAuth();
            }}
            className="mt-4 w-full inline-flex items-center justify-center gap-1.5 bg-rust text-cream text-sm font-semibold px-5 py-3 rounded-sm"
          >
            Invest / Partner Now
            <ArrowUpRight size={16} strokeWidth={2.5} />
          </button>
        </div>
      )}
    </header>
  );
}
