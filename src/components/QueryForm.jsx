import { useState } from 'react';
import { Loader2, CheckCircle2, Info, SendHorizontal } from 'lucide-react';
import { supabase, isMock } from '../lib/supabaseClient.js';
import { INVESTMENT_TIERS } from '../data/content.js';

const initialForm = {
  name: '',
  organization: '',
  email: '',
  investment_tier: INVESTMENT_TIERS[0].value,
  message: ''
};

export default function QueryForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const { error } = await supabase.from('client_queries').insert([form]);

    if (error) {
      setStatus('error');
      setErrorMsg(error.message);
      return;
    }
    setStatus('success');
    setForm(initialForm);
  };

  return (
    <section className="bg-cream py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-center">
          <p className="eyebrow text-rust mb-3">Partnership Query</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-charcoal text-balance">
            Tell us about your CSR mandate
          </h2>
          <p className="mt-4 text-charcoal-soft text-base leading-relaxed">
            Submit a query and our partnerships desk will respond with a tailored proposal
            matched to your investment tier.
          </p>
        </div>

        {isMock && (
          <div className="mt-8 flex gap-2 items-start text-xs text-emerald-deep bg-emerald-soft rounded-sm px-4 py-3">
            <Info size={15} className="shrink-0 mt-0.5" />
            <span>
              Demo mode — submissions are held in memory for this session only. Connect a real
              Supabase project (<code className="font-mono">client_queries</code> table) to
              persist enquiries.
            </span>
          </div>
        )}

        {status === 'success' ? (
          <div className="mt-8 flex flex-col items-center text-center py-14 bg-cream-paper border border-emerald-line rounded-sm">
            <CheckCircle2 size={40} className="text-emerald-mid" />
            <p className="mt-4 font-display font-semibold text-lg text-charcoal">
              Query received
            </p>
            <p className="mt-1.5 text-sm text-charcoal-soft max-w-sm">
              Thank you — a member of the CLSSBE partnerships team will get back to you shortly.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-6 text-sm font-semibold text-rust hover:text-rust-deep"
            >
              Submit another query
            </button>
          </div>
        ) : (
          <form
            onSubmit={submit}
            className="mt-8 bg-cream-paper border border-emerald-line rounded-sm p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            <Field label="Full name" value={form.name} onChange={update('name')} required />
            <Field
              label="Organization"
              value={form.organization}
              onChange={update('organization')}
              required
            />
            <Field
              label="Email"
              type="email"
              value={form.email}
              onChange={update('email')}
              required
            />
            <label className="block">
              <span className="text-xs font-semibold text-charcoal-soft uppercase tracking-wide">
                Investment tier
              </span>
              <select
                value={form.investment_tier}
                onChange={update('investment_tier')}
                className="mt-1.5 w-full border border-emerald-line rounded-sm px-3 py-2.5 text-sm bg-cream outline-none focus:border-rust"
              >
                {INVESTMENT_TIERS.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="block sm:col-span-2">
              <span className="text-xs font-semibold text-charcoal-soft uppercase tracking-wide">
                Message
              </span>
              <textarea
                value={form.message}
                onChange={update('message')}
                rows={4}
                placeholder="Tell us about your CSR focus areas, timelines, or specific programmes you'd like to support."
                className="mt-1.5 w-full border border-emerald-line rounded-sm px-3 py-2.5 text-sm bg-cream outline-none focus:border-rust resize-none"
              />
            </label>

            {status === 'error' && (
              <p className="sm:col-span-2 text-sm text-rust-deep bg-rust-soft rounded-sm px-3 py-2">
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="sm:col-span-2 mt-1 inline-flex items-center justify-center gap-2 bg-emerald-deep hover:bg-emerald-mid disabled:opacity-70 text-cream font-semibold text-sm px-6 py-3.5 rounded-sm transition-colors"
            >
              {status === 'loading' ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <SendHorizontal size={16} />
              )}
              Submit query
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({ label, type = 'text', value, onChange, required }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-charcoal-soft uppercase tracking-wide">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-1.5 w-full border border-emerald-line rounded-sm px-3 py-2.5 text-sm bg-cream outline-none focus:border-rust"
      />
    </label>
  );
}
