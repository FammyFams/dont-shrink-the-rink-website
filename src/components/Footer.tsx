import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-darker text-light-text pt-16 pb-8 text-center">
      <div className="max-w-[1140px] mx-auto px-6">
        <h3 className="font-heading text-white text-[28px] font-extrabold uppercase tracking-wide mb-3">
          Stay Connected
        </h3>
        <p className="max-w-[480px] mx-auto mb-5">
          Sign up for the latest news and events as part of our effort to save the rink.
        </p>

        {/* Newsletter */}
        <div className="flex gap-3 max-w-[440px] mx-auto mb-6 flex-wrap justify-center">
          <input
            type="email"
            placeholder="Email Address"
            className="flex-1 min-w-[220px] px-[18px] py-4 border-2 border-ice-light/20 rounded-xl bg-white/5 text-white text-base font-body placeholder:text-gray focus:outline-none focus:border-mint transition-colors"
          />
          <button className="px-9 py-4 rounded-xl text-[15px] font-bold font-heading uppercase tracking-wider bg-mint text-primary-darker hover:bg-mint-dark hover:-translate-y-0.5 transition-all relative overflow-hidden">
            Subscribe
          </button>
        </div>
        <p className="text-[13px] text-gray mt-2">We respect your privacy.</p>

        <p className="mt-5">Follow us online and share with your friends near and far.</p>

        {/* Socials */}
        <div className="flex gap-6 justify-center mt-7 mb-7 flex-wrap">
          <a
            href="https://instagram.com/savelloydice"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light-text font-heading text-sm uppercase tracking-[1.5px] font-semibold px-4 py-2 rounded-lg border border-white/10 hover:text-white hover:bg-mint/15 hover:border-mint transition-all"
          >
            Instagram
          </a>
          <a
            href="https://facebook.com/profile.php?id=61588089534640"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light-text font-heading text-sm uppercase tracking-[1.5px] font-semibold px-4 py-2 rounded-lg border border-white/10 hover:text-white hover:bg-mint/15 hover:border-mint transition-all"
          >
            Facebook
          </a>
          <a
            href="https://bsky.app/profile/savelloydice.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light-text font-heading text-sm uppercase tracking-[1.5px] font-semibold px-4 py-2 rounded-lg border border-white/10 hover:text-white hover:bg-mint/15 hover:border-mint transition-all"
          >
            Bluesky
          </a>
        </div>

        {/* Email */}
        <div className="mt-5">
          <a href="mailto:savelloydicecoalition@gmail.com" className="text-mint font-medium">
            savelloydicecoalition@gmail.com
          </a>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-5 border-t border-white/[0.08] text-[13px] text-gray">
          &copy; 2026 Save Lloyd Ice Coalition
        </div>
      </div>
    </footer>
  );
}
