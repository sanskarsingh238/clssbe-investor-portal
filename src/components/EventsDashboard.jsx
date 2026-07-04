import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarClock, Newspaper } from 'lucide-react';
import { PAST_EVENTS, EVENT_CATEGORIES, UPCOMING_EVENTS } from '../data/content.js';

export default function EventsDashboard({ onSponsorClick }) {
  const [active, setActive] = useState('All');
  const filtered =
    active === 'All' ? PAST_EVENTS : PAST_EVENTS.filter((e) => e.category === active);

  return (
    <section id="events" className="bg-cream py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow text-rust mb-3">Events Portfolio</p>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl text-charcoal text-balance">
              A working record, not a highlight reel
            </h2>
            <p className="mt-4 text-charcoal-soft text-base leading-relaxed">
              Filter the register below by programme type — every entry ran, and most were
              covered independently by regional press.
            </p>
          </div>
        </div>

        <div className="mt-9 flex flex-wrap gap-2">
          {EVENT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                active === cat
                  ? 'bg-emerald-deep text-cream border-emerald-deep'
                  : 'bg-transparent text-charcoal-soft border-emerald-line hover:border-emerald-mid'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((e) => (
              <motion.article
                key={e.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="bg-cream-paper border border-emerald-line rounded-sm p-6 flex flex-col shadow-card"
              >
                <div className="flex items-center justify-between">
                  <span className="eyebrow text-emerald-mid">{e.category}</span>
                  <span className="font-mono text-xs text-charcoal-soft/60">{e.date}</span>
                </div>
                <h3 className="mt-3 font-display font-semibold text-lg text-charcoal leading-snug">
                  {e.title}
                </h3>
                <p className="mt-2 text-sm text-charcoal-soft leading-relaxed flex-1">
                  {e.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {e.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] px-2 py-1 bg-emerald-soft text-emerald-deep rounded-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Grassroots press note */}
        <div className="mt-6 flex items-start gap-3 text-sm text-charcoal-soft bg-emerald-soft/60 border border-emerald-line rounded-sm p-4">
          <Newspaper size={18} className="text-emerald-deep shrink-0 mt-0.5" />
          <p>
            On-ground workshops such as the one held at Government Middle School, Bijuri
            (G.M.S. Bijuri), have received coverage across regional Madhya Pradesh newspapers —
            press clippings available on request for partner due diligence.
          </p>
        </div>

        {/* Upcoming calendar */}
        <div className="mt-16">
          <p className="eyebrow text-rust mb-3">Upcoming Calendar</p>
          <h3 className="font-display font-semibold text-2xl text-charcoal mb-6">
            Open for corporate sponsorship
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {UPCOMING_EVENTS.map((u) => (
              <div
                key={u.id}
                className="cert-border rounded-sm p-6 bg-cream-paper flex flex-col"
              >
                <CalendarClock size={20} className="text-rust" strokeWidth={1.75} />
                <h4 className="mt-4 font-display font-semibold text-base text-charcoal">
                  {u.title}
                </h4>
                <p className="mt-2 text-sm text-charcoal-soft leading-relaxed flex-1">
                  {u.description}
                </p>
                <span className="mt-4 eyebrow text-emerald-mid">{u.window}</span>
                <button
                  onClick={onSponsorClick}
                  className="mt-4 text-sm font-semibold text-rust hover:text-rust-deep text-left"
                >
                  Sponsor this programme →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
