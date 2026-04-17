'use client';

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export default function JoinEmailListButton({
  className = '',
  children = 'Join the Email List',
}: Props) {
  return (
    <button
      type='button'
      onClick={() => window.dispatchEvent(new CustomEvent('open-email-modal'))}
      className={className}
    >
      {children}
    </button>
  );
}
