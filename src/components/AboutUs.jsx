import { motion } from 'framer-motion';
import { PILLARS } from '../data/content.js';

export default function AboutUs() {
  return (
    <section id="about" className="bg-cream py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
        <p className="eyebrow text-rust mb-4">About CLSSBE</p>
        <h2 className="font-display font-semibold text-3xl sm:text-[2.75rem] leading-tight text-charcoal text-balance">
          A world where we appreciate skill-based learning.
        </h2>
        <p className="mt-6 text-charcoal-soft text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
          CLSSBE aims to deliver practical, high-quality legal skill training, operate with full
          transparency and integrity, and create meaningful opportunities for learning,
          collaboration, research, and professional growth.
        </p>
      </div>

      <div className="mt-14 mx-auto max-w-6xl px-5 sm:px-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
        {PILLARS.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`${p.color} ${p.text} rounded-sm p-8 min-h-[180px] flex flex-col justify-between`}
          >
            <span className="eyebrow opacity-70">Pillar 0{i + 1}</span>
            <p className="mt-6 font-display font-semibold text-xl leading-snug text-balance">
              {p.title}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
