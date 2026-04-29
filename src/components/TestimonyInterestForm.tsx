'use client';

import { useState, type FormEvent } from 'react';
import { sendGAEvent } from '@next/third-parties/google';

const GOOGLE_FORM_ACTION =
  'https://docs.google.com/forms/d/e/1FAIpQLSeSkoxJPzTsgrEQMBMSJQEAMlhYw8rlkh1lJLhm7Y-a6n-aVg/formResponse';

const FIELDS = {
  name: 'entry.1881312385',
  email: 'entry.2038678962',
  willTestify: 'entry.762558926',
  helpWanted: 'entry.186392329',
  topic: 'entry.2010872506',
  questions: 'entry.2069348358',
} as const;

const WILL_TESTIFY_OPTIONS = ['Yes', 'No', 'Maybe/ Unsure'] as const;

const HELP_OPTIONS = [
  'Practice Buddy',
  'Testimony Training',
  'Proof Reading',
  'None of these',
] as const;

const TOPIC_OPTIONS = [
  'Historical Significance of Rink',
  'Community Rec and Tourism',
  'Access: Transportation, Affordability, Ability',
  'Inclusivity',
  'Youth Mental and Physical Health',
  'Adult Mental and Physical Health',
  'Competitive Skating',
  'Economic Impact',
  'Fulfil City of Portland Core Values',
] as const;

type Status = 'idle' | 'submitting' | 'success' | 'error';

type Values = {
  name: string;
  email: string;
  willTestify: string;
  helpWanted: string[];
  topic: string;
  questions: string;
};

const EMPTY: Values = {
  name: '',
  email: '',
  willTestify: '',
  helpWanted: [],
  topic: '',
  questions: '',
};

export default function TestimonyInterestForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [values, setValues] = useState<Values>(EMPTY);

  function toggleHelp(option: string) {
    setValues((v) => ({
      ...v,
      helpWanted: v.helpWanted.includes(option)
        ? v.helpWanted.filter((o) => o !== option)
        : [...v.helpWanted, option],
    }));
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
    body.append(FIELDS.name, values.name);
    body.append(FIELDS.email, values.email);
    body.append(FIELDS.willTestify, values.willTestify);
    for (const opt of values.helpWanted) body.append(FIELDS.helpWanted, opt);
    body.append(FIELDS.topic, values.topic);
    body.append(FIELDS.questions, values.questions);

    try {
      await fetch(GOOGLE_FORM_ACTION, { method: 'POST', mode: 'no-cors', body });
      sendGAEvent('event', 'email_signup', { method: 'testimony_interest_form' });
      setStatus('success');
      setValues(EMPTY);
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
            You&apos;re <span className='text-mint-dark'>In</span>
          </h3>
          <p className='text-body-text max-w-[460px] mx-auto mb-7'>
            Thanks for stepping up. We&apos;ll be in touch about coordinating
            speakers and helping you prepare.
          </p>
          <button
            type='button'
            onClick={() => setStatus('idle')}
            className='font-heading text-sm font-bold uppercase tracking-wider text-primary hover:text-mint-dark transition-colors underline'
          >
            Submit another response
          </button>
        </div>
      </div>
    );
  }

  const inputClass =
    'peer w-full bg-transparent border-0 border-b-2 border-primary/30 pt-7 pb-2.5 px-0 text-[17px] text-primary-darker font-body placeholder-transparent focus:outline-none focus:border-mint-dark transition-colors';
  const labelClass =
    'absolute left-0 top-2 font-heading text-xs font-extrabold uppercase tracking-[2px] text-primary-darker transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:text-[15px] peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-primary-darker/70 peer-placeholder-shown:font-bold peer-focus:top-2 peer-focus:text-xs peer-focus:tracking-[2px] peer-focus:text-mint-dark peer-focus:font-extrabold';
  const groupLegendClass =
    'block font-heading text-xs font-extrabold uppercase tracking-[2px] text-primary-darker mb-3';
  const optionClass =
    'flex items-start gap-3 cursor-pointer rounded-lg border border-primary/15 bg-white px-4 py-3 hover:border-mint-dark hover:bg-ice-lighter/40 transition-colors has-[:checked]:border-mint-dark has-[:checked]:bg-mint/10';
  const optionTextClass = 'text-[15px] text-primary-darker font-body leading-snug';

  return (
    <div className='p-[3px] rounded-[20px] bg-gradient-to-br from-primary via-mint to-ice-light shadow-[0_30px_80px_-25px_rgba(43,96,128,0.4)]'>
      <form
        onSubmit={handleSubmit}
        className='rounded-[17px] bg-white p-10 max-md:p-6 relative overflow-hidden'
      >
        <div
          aria-hidden
          className='absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none opacity-60'
          style={{
            background:
              'radial-gradient(circle, rgba(148,224,185,0.25) 0%, transparent 70%)',
          }}
        />

        <div className='relative grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2'>
          <div className='relative'>
            <input
              id='tif-name'
              name='tif-name'
              type='text'
              autoComplete='name'
              placeholder='Name'
              value={values.name}
              onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
              className={inputClass}
            />
            <label htmlFor='tif-name' className={labelClass}>
              Name
            </label>
          </div>

          <div className='relative'>
            <input
              id='tif-email'
              name='tif-email'
              type='email'
              required
              autoComplete='email'
              placeholder='Email'
              value={values.email}
              onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
              className={inputClass}
            />
            <label htmlFor='tif-email' className={labelClass}>
              Email <span className='text-mint-dark'>*</span>
            </label>
          </div>
        </div>

        <fieldset className='relative mt-10'>
          <legend className={groupLegendClass}>
            Would you testify at the appeal hearing?
          </legend>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
            {WILL_TESTIFY_OPTIONS.map((opt) => (
              <label key={opt} className={optionClass}>
                <input
                  type='radio'
                  name='willTestify'
                  value={opt}
                  checked={values.willTestify === opt}
                  onChange={() => setValues((v) => ({ ...v, willTestify: opt }))}
                  className='mt-0.5 accent-mint-dark'
                />
                <span className={optionTextClass}>{opt}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className='relative mt-8'>
          <legend className={groupLegendClass}>
            Want help preparing testimony?{' '}
            <span className='text-primary-darker/60 font-semibold tracking-normal normal-case text-[11px] ml-1'>
              (select all that apply)
            </span>
          </legend>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
            {HELP_OPTIONS.map((opt) => (
              <label key={opt} className={optionClass}>
                <input
                  type='checkbox'
                  name='helpWanted'
                  value={opt}
                  checked={values.helpWanted.includes(opt)}
                  onChange={() => toggleHelp(opt)}
                  className='mt-0.5 accent-mint-dark'
                />
                <span className={optionTextClass}>{opt}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className='relative mt-8'>
          <legend className={groupLegendClass}>
            What topic would you focus your testimony on?
          </legend>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
            {TOPIC_OPTIONS.map((opt) => (
              <label key={opt} className={optionClass}>
                <input
                  type='radio'
                  name='topic'
                  value={opt}
                  checked={values.topic === opt}
                  onChange={() => setValues((v) => ({ ...v, topic: opt }))}
                  className='mt-0.5 accent-mint-dark'
                />
                <span className={optionTextClass}>{opt}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className='relative mt-8'>
          <textarea
            id='tif-questions'
            name='tif-questions'
            rows={4}
            placeholder='Questions'
            value={values.questions}
            onChange={(e) =>
              setValues((v) => ({ ...v, questions: e.target.value }))
            }
            className={`${inputClass} resize-y min-h-[110px]`}
          />
          <label htmlFor='tif-questions' className={labelClass}>
            Questions about the hearing?
          </label>
        </div>

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
                Submit Interest
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
