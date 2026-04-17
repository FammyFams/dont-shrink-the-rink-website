import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — Save Lloyd Ice Coalition",
  description:
    "Get in touch with the Save Lloyd Ice Coalition. Reach out with questions, stories, or to get involved.",
};

export default function ContactPage() {
  return (
    <>
      {/* HERO + FORM — two-column */}
      <section className="relative text-white px-6 py-16 max-md:py-12 max-md:px-4 overflow-hidden bg-primary-darker">
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            background:
              "radial-gradient(circle at 15% 25%, rgba(148,224,185,0.2) 0%, transparent 40%), radial-gradient(circle at 85% 20%, rgba(187,218,237,0.25) 0%, transparent 35%)",
            animation: "ice-sparkle 4s ease-in-out infinite",
          }}
        />
        <div className="relative z-[2] max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-12 lg:gap-16 items-center">
          {/* Left: hero copy */}
          <div className="lg:pr-4">
            <span className="inline-block px-4 py-1.5 rounded-full font-heading text-xs font-bold uppercase tracking-[2px] bg-mint/20 text-mint border border-mint/30 backdrop-blur-sm mb-5">
              Reach Out
            </span>
            <h1 className="font-heading text-[clamp(44px,6vw,80px)] font-extrabold uppercase tracking-wide mb-6 leading-[0.95] max-md:text-[40px]">
              Contact <span className="text-mint">Us</span>
            </h1>
            <p className="text-[clamp(17px,1.6vw,20px)] leading-relaxed text-white/85 max-md:text-base mb-8 max-w-[520px]">
              Have questions about our mission? Wondering how you can get involved? Want to share your story?
            </p>
            <div className="flex items-center gap-3 text-sm font-heading uppercase tracking-[2px] text-mint/80">
              <span className="w-10 h-px bg-mint/50" />
              <span>We read every message</span>
            </div>
          </div>

          {/* Right: form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* CONTACT INFO CARDS */}
      <section className="py-16 px-6 max-md:py-10 max-md:px-4">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-heading text-[clamp(26px,3vw,36px)] font-extrabold uppercase tracking-wide text-primary-darker">
              Other Ways to <span className="text-mint-dark">Reach Us</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email Card */}
            <div className="bg-white rounded-2xl p-8 border-2 border-ice-light/50 hover:border-mint hover:-translate-y-1 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-mint/20 flex items-center justify-center mb-5 text-2xl">
                &#9993;
              </div>
              <h3 className="font-heading text-xl font-extrabold uppercase tracking-wide mb-2 text-primary-darker">
                Email Us
              </h3>
              <p className="text-body-text mb-4 text-sm">
                Questions, press, partnerships &mdash; drop us a line anytime.
              </p>
              <a
                href="mailto:savelloydicecoalition@gmail.com"
                className="font-heading text-sm font-bold uppercase tracking-wider text-primary hover:text-mint-dark transition-colors break-all"
              >
                savelloydicecoalition@gmail.com
              </a>
            </div>

            {/* Social Card */}
            <div className="bg-white rounded-2xl p-8 border-2 border-ice-light/50 hover:border-mint hover:-translate-y-1 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-mint/20 flex items-center justify-center mb-5 text-2xl">
                &#9733;
              </div>
              <h3 className="font-heading text-xl font-extrabold uppercase tracking-wide mb-2 text-primary-darker">
                Follow the Fight
              </h3>
              <p className="text-body-text mb-4 text-sm">
                Live updates on the appeal, hearings, and community actions.
              </p>
              <div className="flex gap-2 flex-wrap">
                <a
                  href="https://instagram.com/savelloydice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading text-xs uppercase tracking-[1.5px] font-semibold px-3 py-1.5 rounded-lg border border-primary/20 text-primary hover:bg-mint/15 hover:border-mint transition-all"
                >
                  Instagram
                </a>
                <a
                  href="https://facebook.com/profile.php?id=61588089534640"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading text-xs uppercase tracking-[1.5px] font-semibold px-3 py-1.5 rounded-lg border border-primary/20 text-primary hover:bg-mint/15 hover:border-mint transition-all"
                >
                  Facebook
                </a>
                <a
                  href="https://bsky.app/profile/savelloydice.bsky.social"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading text-xs uppercase tracking-[1.5px] font-semibold px-3 py-1.5 rounded-lg border border-primary/20 text-primary hover:bg-mint/15 hover:border-mint transition-all"
                >
                  Bluesky
                </a>
              </div>
            </div>

            {/* Testify Card */}
            <div className="bg-gradient-to-br from-primary to-primary-darker text-white rounded-2xl p-8 border-2 border-transparent hover:-translate-y-1 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-mint/25 flex items-center justify-center mb-5 text-2xl">
                &#128226;
              </div>
              <h3 className="font-heading text-xl font-extrabold uppercase tracking-wide mb-2">
                Want to Testify?
              </h3>
              <p className="text-white/80 mb-4 text-sm">
                Share your rink story at the City Council hearing. We&apos;ll help you prep.
              </p>
              <Link
                href="/take-action"
                className="inline-flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-wider text-mint hover:text-white transition-colors"
              >
                Take Action <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
