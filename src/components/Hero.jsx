import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FileDown, TrendingUp } from 'lucide-react';
import SealMark from './SealMark.jsx';
import { HERO_SUMMARY, ORG } from '../data/content.js';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export default function Hero() {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 50, y: 40 });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  };

  const pitchDeckHref = `mailto:${ORG.email}?subject=${encodeURIComponent(
    'Request: CLSSBE Investment / CSR Pitch Deck'
  )}&body=${encodeURIComponent(
    'Hello CLSSBE team,\n\nPlease share the Investment / CSR Pitch Deck along with the latest impact report.\n\nOrganisation:\nContact person:\nIntended CSR / investment tier:\n\nThank you.'
  )}`;

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={handleMove}
      className="relative overflow-hidden bg-emerald-deep pt-32 pb-24 sm:pt-40 sm:pb-32"
    >
      {/* Registry grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(rgba(247,243,233,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(247,243,233,0.08) 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      />
      {/* Cursor-reactive glow */}
      <div
        className="pointer-events-none absolute inset-0 transition-[background] duration-150 ease-out"
        style={{
          background: `radial-gradient(480px circle at ${pos.x}% ${pos.y}%, rgba(184,144,46,0.28), transparent 60%)`
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -right-32 opacity-[0.06]"
        aria-hidden="true"
      >
        <SealMark size={420} tone="cream" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-5xl px-5 sm:px-8 text-center"
      >
        <motion.div variants={item} className="flex justify-center mb-8">
          <SealMark size={72} tone="cream" />
        </motion.div>

        <motion.p variants={item} className="eyebrow text-gold-soft mb-5">
          {ORG.regLine}
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display font-semibold text-cream text-4xl sm:text-6xl leading-[1.08] text-balance"
        >
          {ORG.name}
        </motion.h1>

        <motion.p variants={item} className="mt-6 text-emerald-soft/90 text-base sm:text-lg max-w-2xl mx-auto">
          A premier society for skill-based education — built for corporate CSR partners and
          philanthropic foundations investing in Madhya Pradesh&rsquo;s next workforce.
        </motion.p>

        <motion.p
          variants={item}
          className="mt-8 text-emerald-soft/80 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto text-left sm:text-center border-l-2 sm:border-l-0 border-gold/60 pl-4 sm:pl-0"
        >
          {HERO_SUMMARY}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={pitchDeckHref}
            className="inline-flex items-center justify-center gap-2 bg-rust hover:bg-rust-deep text-cream font-semibold text-sm px-6 py-3.5 rounded-sm transition-colors"
          >
            <FileDown size={17} />
            Download Investment / CSR Pitch Deck
          </a>
          <a
            href="#csr"
            className="inline-flex items-center justify-center gap-2 bg-transparent border border-cream/30 hover:border-cream/60 text-cream font-semibold text-sm px-6 py-3.5 rounded-sm transition-colors"
          >
            <TrendingUp size={17} />
            Explore Impact Metrics
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
