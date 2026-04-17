'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { usePathname } from 'next/navigation';

const GOOGLE_FORM_ACTION =
  'https://docs.google.com/forms/d/e/1FAIpQLSe6lboKTtuGXbDgXBMO05smR0e_-kWYnE7qR9_Og-52Pzehpg/formResponse';
const EMAIL_FIELD = 'entry.160370715';
const STORAGE_KEY = 'sli_email_modal_v1';
const SHOW_AFTER_MS = 3500;

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function EmailSignupModal() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [email, setEmail] = useState('');
  const pathname = usePathname();
  const inputRef = useRef<HTMLInputElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Skip on /contact — the whole page is already a form
  const suppressedRoute = pathname === '/contact';

  useEffect(() => {
    if (suppressedRoute) return;
    if (typeof window === 'undefined') return;
    try {
      if (localStorage.getItem(STORAGE_KEY)) return;
    } catch {
      // localStorage blocked; still show once per session
    }
    const t = window.setTimeout(() => setOpen(true), SHOW_AFTER_MS);
    return () => window.clearTimeout(t);
  }, [suppressedRoute]);

  // Focus, scroll lock, Esc to close
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const t = window.setTimeout(() => inputRef.current?.focus(), 50);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dismiss();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.clearTimeout(t);
      window.removeEventListener('keydown', onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function dismiss() {
    setOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, '1');
    } catch {
      // ignore
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'submitting') return;

    const honey = (e.currentTarget.elements.namedItem('website') as HTMLInputElement | null)?.value;
    if (honey) {
      setStatus('success');
      return;
    }

    setStatus('submitting');

    const body = new FormData();
    body.append(EMAIL_FIELD, email);

    try {
      await fetch(GOOGLE_FORM_ACTION, { method: 'POST', mode: 'no-cors', body });
      setStatus('success');
      try {
        localStorage.setItem(STORAGE_KEY, '1');
      } catch {
        // ignore
      }
    } catch {
      setStatus('error');
    }
  }

  if (!open) return null;

  return (
    <div
      role='dialog'
      aria-modal='true'
      aria-labelledby='signup-modal-title'
      className='fixed inset-0 z-[100] flex items-center justify-center px-4 py-8 bg-primary-darker/55 backdrop-blur-[2px] animate-[fadeUp_0.25s_ease-out]'
      onClick={dismiss}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className='relative w-full max-w-[500px] p-[3px] rounded-[22px] bg-gradient-to-br from-mint via-primary to-ice-light shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)]'
      >
        <div className='relative rounded-[19px] bg-white p-10 max-md:p-6 overflow-hidden'>
          {/* Corner glow */}
          <div
            aria-hidden
            className='absolute -top-24 -right-24 w-72 h-72 rounded-full pointer-events-none opacity-70'
            style={{
              background:
                'radial-gradient(circle, rgba(148,224,185,0.35) 0%, transparent 70%)',
            }}
          />

          {/* Close */}
          <button
            ref={closeBtnRef}
            type='button'
            onClick={dismiss}
            aria-label='Close signup'
            className='absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center text-primary-darker/60 hover:text-primary-darker hover:bg-ice-light/40 transition-all text-xl leading-none'
          >
            &times;
          </button>

          {status === 'success' ? (
            <div className='relative text-center py-4'>
              <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-mint/25 mb-5 text-3xl'>
                &#10003;
              </div>
              <h2
                id='signup-modal-title'
                className='font-heading text-[clamp(24px,3vw,32px)] font-extrabold uppercase tracking-wide text-primary-darker mb-2 leading-[1.1]'
              >
                You&apos;re <span className='text-mint-dark'>In</span>
              </h2>
              <p className='text-body-text mb-6 max-w-[380px] mx-auto'>
                Thanks for joining. Watch your inbox for updates on the appeal and upcoming hearings.
              </p>
              <button
                type='button'
                onClick={dismiss}
                className='inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-bold font-heading uppercase tracking-wider bg-mint text-primary-darker hover:bg-mint-dark transition-all'
              >
                Keep Reading <span>&rarr;</span>
              </button>
            </div>
          ) : (
            <div className='relative'>
              <h2
                id='signup-modal-title'
                className='font-heading text-[clamp(26px,3.5vw,40px)] font-extrabold uppercase tracking-wide text-primary-darker mb-3 leading-[0.95]'
              >
                Join the <span className='text-mint-dark'>Email List</span>
              </h2>
              <p className='text-body-text mb-6 text-[15px] leading-relaxed'>
                Get updates on the appeal, hearing dates, and the moments your voice matters most. No spam &mdash; just the calls to action that count.
              </p>

              <form onSubmit={handleSubmit} noValidate>
                <label htmlFor='signup-email' className='sr-only'>
                  Email address
                </label>
                <div className='flex gap-2 flex-col sm:flex-row'>
                  <input
                    ref={inputRef}
                    id='signup-email'
                    name='signup-email'
                    type='email'
                    required
                    autoComplete='email'
                    placeholder='you@example.com'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='flex-1 min-w-0 px-4 py-3.5 rounded-xl border-2 border-ice-light text-base font-body bg-white focus:outline-none focus:border-mint focus:shadow-[0_0_0_4px_rgba(148,224,185,0.2)] transition-all'
                  />
                  <button
                    type='submit'
                    disabled={status === 'submitting'}
                    className='inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold font-heading uppercase tracking-wider bg-mint text-primary-darker hover:bg-mint-dark hover:-translate-y-[2px] hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap'
                  >
                    {status === 'submitting' ? (
                      <>
                        <span className='inline-block w-4 h-4 rounded-full border-2 border-primary-darker border-t-transparent animate-spin' />
                        Joining
                      </>
                    ) : (
                      <>
                        Count Me In <span>&rarr;</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Honeypot */}
                <div aria-hidden className='absolute left-[-9999px] top-[-9999px]'>
                  <label>
                    Website
                    <input type='text' name='website' tabIndex={-1} autoComplete='off' />
                  </label>
                </div>

                {status === 'error' && (
                  <p className='mt-4 text-sm text-urgent'>
                    Couldn&apos;t send. Please try again or email{' '}
                    <a
                      href='mailto:savelloydicecoalition@gmail.com'
                      className='underline font-semibold'
                    >
                      savelloydicecoalition@gmail.com
                    </a>
                    .
                  </p>
                )}

                <button
                  type='button'
                  onClick={dismiss}
                  className='block mx-auto mt-5 text-xs font-heading uppercase tracking-[1.5px] text-gray hover:text-primary transition-colors'
                >
                  Maybe later
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
