'use client';

import { useEffect, useState } from 'react';

// Aug 8, 2026: confirmed closing date per KKR / URG announcement.
const CLOSE_DATE = new Date('2026-08-08T00:00:00-07:00');

export default function DaysUntilClose({ className = '' }: { className?: string }) {
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    const calc = () => {
      const now = new Date();
      const ms = CLOSE_DATE.getTime() - now.getTime();
      setDays(Math.max(0, Math.ceil(ms / (1000 * 60 * 60 * 24))));
    };
    calc();
    const t = window.setInterval(calc, 1000 * 60 * 60); // refresh hourly
    return () => window.clearInterval(t);
  }, []);

  if (days === null) {
    // SSR/first paint: render fixed fallback to avoid layout jump
    return (
      <span className={className}>
        <span className='tabular-nums'>&hellip;</span> days
      </span>
    );
  }

  if (days === 0) {
    return <span className={className}>Closing today</span>;
  }

  return (
    <span className={className}>
      <span className='tabular-nums'>{days.toLocaleString()}</span>{' '}
      {days === 1 ? 'day' : 'days'}
    </span>
  );
}
