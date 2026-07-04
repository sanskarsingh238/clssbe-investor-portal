import { motion } from 'framer-motion';
import { VERTICALS } from '../data/content.js';

export default function Verticals() {
  return (
    <section id="verticals" className="bg-cream py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow text-rust mb-3">Why Invest</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-charcoal text-balance">
            Four operational verticals, one measurable outcome
          </h2>
          <p className="mt-4 text-charcoal-soft text-base leading-relaxed">
            Every rupee of CSR capital is routed through one of four active verticals — each
            already running, each producing evidence a partner can audit.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {VERTICALS.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-cream-paper border border-emerald-line rounded-sm p-7 shadow-card hover:border-emerald-mid/50 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="w-11 h-11 rounded-sm bg-emerald-soft flex items-center justify-center text-emerald-deep">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <span className="eyebrow text-charcoal-soft/70">{v.tag}</span>
                </div>

                <h3 className="mt-5 font-display font-semibold text-xl text-charcoal">
                  {v.title}
                </h3>
                <p className="mt-2.5 text-sm text-charcoal-soft leading-relaxed">
                  {v.description}
                </p>

                <div className="mt-6 pt-4 border-t border-emerald-line/70 flex flex-col gap-0.5">
                  <span className="eyebrow text-charcoal-soft/60">{v.metricLabel}</span>
                  <span className="font-mono text-sm text-emerald-deep">{v.metricValue}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
