import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a1e2a] text-light-text pt-16 pb-8">
      <div className="max-w-[1140px] mx-auto px-6">
        {/* Top: Action + Newsletter side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 pb-12 border-b border-white/10">
          {/* Quick actions */}
          <div>
            <h3 className="font-heading text-white text-2xl font-extrabold uppercase tracking-wide mb-4">
              Don&apos;t Wait. Act.
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.change.org/p/save-the-lloyd-center-ice-rink"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-5 py-3.5 rounded-xl bg-mint/10 border border-mint/20 hover:bg-mint/20 transition-all group"
              >
                <span className="font-heading text-sm font-bold uppercase tracking-wider text-mint">
                  Sign the Petition
                </span>
                <span className="text-mint group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>
              <a
                href="https://www.gofundme.com/f/save-lloyd-ice-rink"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
              >
                <span className="font-heading text-sm font-bold uppercase tracking-wider text-white">
                  Donate on GoFundMe
                </span>
                <span className="text-white group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>
              <Link
                href="/take-action"
                className="flex items-center justify-between px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
              >
                <span className="font-heading text-sm font-bold uppercase tracking-wider text-white">
                  Volunteer to Testify
                </span>
                <span className="text-white group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-heading text-white text-2xl font-extrabold uppercase tracking-wide mb-2">
              Stay in the Fight
            </h3>
            <p className="mb-5 text-light-text/80">
              Get updates on the appeal, upcoming hearings, and ways to help.
            </p>
            <div className="flex gap-3 max-w-[440px] flex-wrap">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 min-w-[220px] px-[18px] py-4 border-2 border-ice-light/20 rounded-xl bg-white/5 text-white text-base font-body placeholder:text-gray focus:outline-none focus:border-mint transition-colors"
              />
              <button className="px-8 py-4 rounded-xl text-[15px] font-bold font-heading uppercase tracking-wider bg-mint text-primary-darker hover:bg-mint-dark hover:-translate-y-0.5 transition-all">
                Join
              </button>
            </div>
            <p className="text-[13px] text-gray mt-3">No spam. Only updates that matter.</p>
          </div>
        </div>

        {/* Socials + Contact */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex gap-4 flex-wrap justify-center">
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
          <a href="mailto:savelloydicecoalition@gmail.com" className="text-mint font-medium">
            savelloydicecoalition@gmail.com
          </a>
        </div>

        {/* Bottom */}
        <div className="pt-5 border-t border-white/[0.08] text-[13px] text-gray text-center">
          &copy; 2026 Save Lloyd Ice Coalition &mdash; Don&apos;t Shrink the Rink
        </div>
      </div>
    </footer>
  );
}
