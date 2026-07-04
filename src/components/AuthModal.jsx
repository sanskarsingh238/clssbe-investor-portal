import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Loader2, CheckCircle2, Info } from 'lucide-react';
import { supabase, isMock } from '../lib/supabaseClient.js';

export default function AuthModal({ open, onClose }) {
  const [mode, setMode] = useState('login');
  const [form, setForm] = useState({ name: '', organization: '', email: '', password: '' });
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      setStatus('idle');
      setErrorMsg('');
    }
  }, [open, mode]);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    if (mode === 'register') {
      const { error } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
        options: { data: { organization: form.organization, name: form.name } }
      });
      if (error) {
        setStatus('error');
        setErrorMsg(error.message);
        return;
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email: form.email,
        password: form.password
      });
      if (error) {
        setStatus('error');
        setErrorMsg(error.message);
        return;
      }
    }
    setStatus('success');
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm z-[60]"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 h-full w-full sm:w-[440px] bg-cream-paper z-[70] shadow-2xl overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Partner and student login"
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <p className="eyebrow text-rust">Partner Portal</p>
                <button onClick={onClose} aria-label="Close" className="p-1.5 text-charcoal-soft hover:text-charcoal">
                  <X size={20} />
                </button>
              </div>

              <h2 className="mt-3 font-display font-semibold text-2xl text-charcoal">
                {mode === 'login' ? 'Welcome back' : 'Create your partner account'}
              </h2>
              <p className="mt-2 text-sm text-charcoal-soft">
                {mode === 'login'
                  ? 'Sign in to manage your CSR partnership and track programme impact.'
                  : 'Register as a corporate partner, foundation, or student contributor.'}
              </p>

              {isMock && (
                <div className="mt-4 flex gap-2 items-start text-xs text-emerald-deep bg-emerald-soft rounded-sm px-3 py-2.5">
                  <Info size={15} className="shrink-0 mt-0.5" />
                  <span>
                    Demo mode — this form runs against a local mock, not a live database. Add
                    <code className="font-mono"> VITE_SUPABASE_URL</code> and
                    <code className="font-mono"> VITE_SUPABASE_ANON_KEY</code> to connect a real
                    Supabase project.
                  </span>
                </div>
              )}

              <div className="mt-6 flex bg-emerald-soft rounded-sm p-1">
                {['login', 'register'].map((m) => (
                  <button
                    key={m}
                    onClick={() => setMode(m)}
                    className={`flex-1 py-2 text-sm font-semibold rounded-sm transition-colors capitalize ${
                      mode === m ? 'bg-emerald-deep text-cream' : 'text-emerald-deep'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>

              {status === 'success' ? (
                <div className="mt-8 flex flex-col items-center text-center py-10">
                  <CheckCircle2 size={40} className="text-emerald-mid" />
                  <p className="mt-4 font-display font-semibold text-lg text-charcoal">
                    {mode === 'login' ? 'Signed in successfully' : 'Account created'}
                  </p>
                  <p className="mt-1.5 text-sm text-charcoal-soft">
                    Our partnerships team will reach out with next steps within 2 working days.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-6 bg-rust hover:bg-rust-deep text-cream text-sm font-semibold px-6 py-2.5 rounded-sm"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} className="mt-6 flex flex-col gap-4">
                  {mode === 'register' && (
                    <>
                      <Field label="Full name" value={form.name} onChange={update('name')} required />
                      <Field
                        label="Organization"
                        value={form.organization}
                        onChange={update('organization')}
                        required
                      />
                    </>
                  )}
                  <Field
                    label="Email"
                    type="email"
                    value={form.email}
                    onChange={update('email')}
                    required
                  />
                  <Field
                    label="Password"
                    type="password"
                    value={form.password}
                    onChange={update('password')}
                    required
                    minLength={6}
                  />

                  {status === 'error' && (
                    <p className="text-sm text-rust-deep bg-rust-soft rounded-sm px-3 py-2">
                      {errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="mt-2 inline-flex items-center justify-center gap-2 bg-rust hover:bg-rust-deep disabled:opacity-70 text-cream font-semibold text-sm px-6 py-3 rounded-sm transition-colors"
                  >
                    {status === 'loading' && <Loader2 size={16} className="animate-spin" />}
                    {mode === 'login' ? 'Sign in' : 'Create account'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function Field({ label, type = 'text', value, onChange, required, minLength }) {
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
        minLength={minLength}
        className="mt-1.5 w-full border border-emerald-line rounded-sm px-3 py-2.5 text-sm bg-cream outline-none focus:border-rust"
      />
    </label>
  );
}
