import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { COMPLIANCE_BADGES, IMPACT_ALLOCATION } from '../data/content.js';

const TAX_SLABS = [
  { value: 0.2, label: '20% slab' },
  { value: 0.3, label: '30% slab' },
  { value: 0.34, label: '34.94% (with surcharge & cess)' }
];

function formatINR(n) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(n);
}

export default function CSRCompliance() {
  const [amount, setAmount] = useState(200000);
  const [slab, setSlab] = useState(TAX_SLABS[1].value);

  const deduction80G = amount * 0.5;
  const estTaxSaved = useMemo(() => deduction80G * slab, [deduction80G, slab]);
  const netCost = amount - estTaxSaved;

  return (
    <section id="csr" className="bg-emerald-deep py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow text-gold-soft mb-3">CSR Partnership</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-cream text-balance">
            Registered, compliant, and ready to receive CSR capital
          </h2>
          <p className="mt-4 text-emerald-soft/80 text-base leading-relaxed">
            CLSSBE is structured as a fully compliant education society — every certification a
            corporate CSR desk checks before releasing funds is already in place.
          </p>
        </div>

        {/* Certificate-style compliance badges */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {COMPLIANCE_BADGES.map((b, i) => (
            <motion.div
              key={b.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="cert-border rounded-sm bg-emerald-deep/40 p-6"
            >
              <div className="flex items-center justify-between">
                <ShieldCheck size={22} className="text-gold" strokeWidth={1.75} />
                <span className="font-mono text-xs text-gold-soft tracking-wide">{b.code}</span>
              </div>
              <h3 className="mt-4 font-display font-semibold text-lg text-cream">{b.title}</h3>
              <p className="mt-2 text-sm text-emerald-soft/75 leading-relaxed">{b.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Impact + tax benefit calculator */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-8 bg-cream-paper rounded-sm p-6 sm:p-9">
          <div className="lg:col-span-2">
            <p className="eyebrow text-rust mb-2">Impact Calculator</p>
            <h3 className="font-display font-semibold text-2xl text-charcoal">
              See where your contribution goes
            </h3>
            <p className="mt-3 text-sm text-charcoal-soft leading-relaxed">
              Move the contribution amount to see the illustrative programme allocation and an
              estimated 80G tax benefit.
            </p>

            <label className="block mt-8">
              <span className="eyebrow text-charcoal-soft/70">Contribution amount</span>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="font-mono text-2xl text-emerald-deep">₹</span>
                <input
                  type="number"
                  min={5000}
                  step={5000}
                  value={amount}
                  onChange={(e) => setAmount(Math.max(0, Number(e.target.value) || 0))}
                  className="font-mono text-2xl text-emerald-deep bg-transparent border-b-2 border-emerald-line focus:border-rust outline-none w-full py-1"
                />
              </div>
              <input
                type="range"
                min={5000}
                max={2000000}
                step={5000}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="mt-4 w-full accent-rust"
              />
            </label>

            <label className="block mt-6">
              <span className="eyebrow text-charcoal-soft/70">Applicable tax slab</span>
              <select
                value={slab}
                onChange={(e) => setSlab(Number(e.target.value))}
                className="mt-2 w-full font-mono text-sm border border-emerald-line rounded-sm px-3 py-2.5 bg-cream text-charcoal outline-none focus:border-rust"
              >
                {TAX_SLABS.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            </label>

            <div className="mt-7 grid grid-cols-2 gap-4">
              <div>
                <p className="eyebrow text-charcoal-soft/60">80G deduction (50%)</p>
                <p className="font-mono text-lg text-emerald-deep mt-1">{formatINR(deduction80G)}</p>
              </div>
              <div>
                <p className="eyebrow text-charcoal-soft/60">Est. tax saved</p>
                <p className="font-mono text-lg text-emerald-deep mt-1">{formatINR(estTaxSaved)}</p>
              </div>
              <div className="col-span-2 pt-3 border-t border-emerald-line">
                <p className="eyebrow text-charcoal-soft/60">Effective net cost to you</p>
                <p className="font-mono text-2xl text-rust mt-1">{formatINR(netCost)}</p>
              </div>
            </div>
            <p className="mt-5 text-xs text-charcoal-soft/70 leading-relaxed">
              Illustrative only, based on the standard 50% deduction under Section 80G and the
              slab selected above. Actual eligibility and savings depend on your total income,
              applicable surcharge/cess, and prevailing Income Tax rules — please confirm with
              your tax advisor.
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="eyebrow text-charcoal-soft/70 mb-4">Programme allocation</p>
            <div className="space-y-5">
              {IMPACT_ALLOCATION.map((row) => (
                <div key={row.label}>
                  <div className="flex items-baseline justify-between text-sm">
                    <span className="font-medium text-charcoal">{row.label}</span>
                    <span className="font-mono text-emerald-deep">
                      {formatINR((amount * row.percent) / 100)}{' '}
                      <span className="text-charcoal-soft/60">· {row.percent}%</span>
                    </span>
                  </div>
                  <div className="mt-1.5 h-2 bg-emerald-soft rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-mid rounded-full transition-all duration-500"
                      style={{ width: `${row.percent}%` }}
                    />
                  </div>
                  <p className="mt-1.5 text-xs text-charcoal-soft/70">{row.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
