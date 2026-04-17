'use client';

import { useState, type FormEvent } from 'react';

const GOOGLE_FORM_ACTION =
  'https://docs.google.com/forms/d/e/1FAIpQLSe6lboKTtuGXbDgXBMO05smR0e_-kWYnE7qR9_Og-52Pzehpg/formResponse';
const EMAIL_FIELD = 'entry.160370715';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function FooterEmailSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');

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
      setEmail('');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className='flex items-center gap-3 px-4 py-3.5 rounded-xl bg-mint/15 border border-mint/30'>
        <span className='inline-flex items-center justify-center w-7 h-7 rounded-full bg-mint/30 text-mint text-sm'>
          &#10003;
        </span>
        <p className='text-sm text-light-text'>
          You&apos;re in. Watch your inbox for updates.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label htmlFor='footer-email' className='sr-only'>
        Email address
      </label>
      <div className='flex flex-col sm:flex-row gap-2'>
        <input
          id='footer-email'
          name='footer-email'
          type='email'
          required
          autoComplete='email'
          placeholder='you@example.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='flex-1 min-w-0 px-4 py-3.5 rounded-xl bg-white/5 border-2 border-white/10 text-light-text placeholder:text-light-text/40 text-[15px] font-body focus:outline-none focus:border-mint focus:bg-white/10 focus:shadow-[0_0_0_4px_rgba(148,224,185,0.15)] transition-all'
        />
        <button
          type='submit'
          disabled={status === 'submitting'}
          className='inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-[13px] font-bold font-heading uppercase tracking-wider bg-mint text-primary-darker hover:bg-mint-dark hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap'
        >
          {status === 'submitting' ? (
            <>
              <span className='inline-block w-4 h-4 rounded-full border-2 border-primary-darker border-t-transparent animate-spin' />
              Joining
            </>
          ) : (
            <>
              Join <span>&rarr;</span>
            </>
          )}
        </button>
      </div>

      <div aria-hidden className='absolute left-[-9999px] top-[-9999px]'>
        <label>
          Website
          <input type='text' name='website' tabIndex={-1} autoComplete='off' />
        </label>
      </div>

      {status === 'error' && (
        <p className='mt-3 text-sm text-urgent'>
          Couldn&apos;t send. Try again or email{' '}
          <a
            href='mailto:savelloydicecoalition@gmail.com'
            className='underline font-semibold'
          >
            savelloydicecoalition@gmail.com
          </a>
          .
        </p>
      )}
    </form>
  );
}
