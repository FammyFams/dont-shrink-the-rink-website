'use client';

import { useState, type FormEvent } from 'react';
import { sendGAEvent } from '@next/third-parties/google';

const GOOGLE_FORM_ACTION =
  'https://docs.google.com/forms/d/e/1FAIpQLSe6lboKTtuGXbDgXBMO05smR0e_-kWYnE7qR9_Og-52Pzehpg/formResponse';

const FIELDS = {
  name: 'entry.1785124719',
  email: 'entry.160370715',
  phone: 'entry.1632793780',
  message: 'entry.606679556',
} as const;

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [values, setValues] = useState({ name: '', email: '', phone: '', message: '' });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'submitting') return;

    // Honeypot: if filled, silently "succeed" without sending.
    const honey = (e.currentTarget.elements.namedItem('website') as HTMLInputElement | null)?.value;
    if (honey) {
      setStatus('success');
      return;
    }

    setStatus('submitting');

    const body = new FormData();
    body.append(FIELDS.name, values.name);
    body.append(FIELDS.email, values.email);
    body.append(FIELDS.phone, values.phone);
    body.append(FIELDS.message, values.message);

    try {
      await fetch(GOOGLE_FORM_ACTION, {
        method: 'POST',
        mode: 'no-cors',
        body,
      });
      sendGAEvent('event', 'email_signup', { method: 'contact_form' });
      setStatus('success');
      setValues({ name: '', email: '', phone: '', message: '' });
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className='relative p-[3px] rounded-[20px] bg-gradient-to-br from-mint via-primary to-ice-light shadow-[0_30px_80px_-25px_rgba(43,96,128,0.4)]'>
        <div className='rounded-[17px] bg-white p-14 text-center max-md:p-8'>
          <div className='inline-flex items-center justify-center w-20 h-20 rounded-full bg-mint/25 mb-6 text-5xl'>
            &#10003;
          </div>
          <h3 className='font-heading text-[clamp(26px,3vw,36px)] font-extrabold uppercase tracking-wide text-primary-darker mb-3'>
            Message <span className='text-mint-dark'>Sent</span>
          </h3>
          <p className='text-body-text max-w-[420px] mx-auto mb-7'>
            Thank you for speaking up. We read every message and will get back to you soon.
          </p>
          <button
            type='button'
            onClick={() => setStatus('idle')}
            className='font-heading text-sm font-bold uppercase tracking-wider text-primary hover:text-mint-dark transition-colors underline'
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  const inputClass =
    'peer w-full bg-transparent border-0 border-b-2 border-primary/30 pt-7 pb-2.5 px-0 text-[17px] text-primary-darker font-body placeholder-transparent focus:outline-none focus:border-mint-dark transition-colors';
  const labelClass =
    'absolute left-0 top-2 font-heading text-xs font-extrabold uppercase tracking-[2px] text-primary-darker transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:text-[15px] peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-primary-darker/70 peer-placeholder-shown:font-bold peer-focus:top-2 peer-focus:text-xs peer-focus:tracking-[2px] peer-focus:text-mint-dark peer-focus:font-extrabold';

  return (
    <div className='p-[3px] rounded-[20px] bg-gradient-to-br from-primary via-mint to-ice-light shadow-[0_30px_80px_-25px_rgba(43,96,128,0.4)]'>
      <form
        onSubmit={handleSubmit}
        className='rounded-[17px] bg-white p-10 max-md:p-6 relative overflow-hidden'
      >
        {/* Corner accent */}
        <div
          aria-hidden
          className='absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none opacity-60'
          style={{
            background:
              'radial-gradient(circle, rgba(148,224,185,0.25) 0%, transparent 70%)',
          }}
        />

        <div className='relative grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2'>
          {/* Name */}
          <div className='relative'>
            <input
              id='cf-name'
              name='cf-name'
              type='text'
              autoComplete='name'
              placeholder='Name'
              value={values.name}
              onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
              className={inputClass}
            />
            <label htmlFor='cf-name' className={labelClass}>
              Name
            </label>
          </div>

          {/* Email */}
          <div className='relative'>
            <input
              id='cf-email'
              name='cf-email'
              type='email'
              required
              autoComplete='email'
              placeholder='Email'
              value={values.email}
              onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
              className={inputClass}
            />
            <label htmlFor='cf-email' className={labelClass}>
              Email <span className='text-mint-dark'>*</span>
            </label>
          </div>

          {/* Phone */}
          <div className='relative md:col-span-2'>
            <input
              id='cf-phone'
              name='cf-phone'
              type='tel'
              autoComplete='tel'
              placeholder='Phone'
              value={values.phone}
              onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
              className={inputClass}
            />
            <label htmlFor='cf-phone' className={labelClass}>
              Phone <span className='text-primary-darker/60 font-semibold tracking-normal normal-case text-[11px] ml-1'>(optional)</span>
            </label>
          </div>

          {/* Message */}
          <div className='relative md:col-span-2 mt-2'>
            <textarea
              id='cf-message'
              name='cf-message'
              rows={5}
              placeholder='Message'
              value={values.message}
              onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
              className={`${inputClass} resize-y min-h-[120px]`}
            />
            <label htmlFor='cf-message' className={labelClass}>
              Your Message
            </label>
          </div>
        </div>

        {/* Honeypot */}
        <div aria-hidden className='absolute left-[-9999px] top-[-9999px]'>
          <label>
            Website
            <input type='text' name='website' tabIndex={-1} autoComplete='off' />
          </label>
        </div>

        <div className='relative mt-10 flex items-center justify-between flex-wrap gap-4'>
          <p className='text-xs text-primary-darker/80 font-heading font-bold uppercase tracking-[1.5px]'>
            <span className='text-mint-dark'>*</span> Required
          </p>

          <button
            type='submit'
            disabled={status === 'submitting'}
            className='group relative inline-flex items-center gap-3 px-9 py-4 rounded-xl text-[15px] font-bold font-heading uppercase tracking-wider bg-mint text-primary-darker hover:bg-mint-dark hover:-translate-y-[3px] hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0'
          >
            {status === 'submitting' ? (
              <>
                <span className='inline-block w-4 h-4 rounded-full border-2 border-primary-darker border-t-transparent animate-spin' />
                Sending&hellip;
              </>
            ) : (
              <>
                Send Message
                <span className='transition-transform group-hover:translate-x-1'>&rarr;</span>
              </>
            )}
          </button>
        </div>

        {status === 'error' && (
          <div className='relative mt-6 p-4 rounded-xl bg-urgent/10 border border-urgent/30 text-sm'>
            <strong className='font-heading uppercase tracking-wider text-urgent'>
              Something went wrong.
            </strong>{' '}
            <span className='text-body-text'>
              Please try again, or email us at{' '}
              <a
                href='mailto:savelloydicecoalition@gmail.com'
                className='text-primary font-semibold underline hover:text-mint-dark'
              >
                savelloydicecoalition@gmail.com
              </a>
              .
            </span>
          </div>
        )}
      </form>
    </div>
  );
}
