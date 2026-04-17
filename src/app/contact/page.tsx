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
      {/* HERO */}
      <section className="relative text-white text-center py-[80px] px-6 overflow-hidden bg-primary-darker">
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            background:
              "radial-gradient(circle at 15% 25%, rgba(148,224,185,0.2) 0%, transparent 40%), radial-gradient(circle at 85% 20%, rgba(187,218,237,0.25) 0%, transparent 35%)",
            animation: "ice-sparkle 4s ease-in-out infinite",
          }}
        />
        <div className="relative z-[2]">
          <span className="inline-block px-4 py-1.5 rounded-full font-heading text-xs font-bold uppercase tracking-[2px] bg-mint/20 text-mint border border-mint/30 backdrop-blur-sm mb-4">
            Reach Out
          </span>
          <h1 className="font-heading text-[clamp(40px,6vw,72px)] font-extrabold uppercase tracking-wide mb-5 leading-[1.1] max-md:text-[32px]">
            Contact <span className="text-mint">Us</span>
          </h1>
          <p className="text-[clamp(17px,2vw,21px)] max-w-[680px] mx-auto leading-relaxed text-white/90 max-md:text-base">
            Have questions about our mission? Wondering how you can get involved? Want to share your story?
          </p>
        </div>
      </section>

      {/* MESSAGE FORM */}
      <section className="relative py-12 px-6 max-md:py-8 max-md:px-4 bg-ice-light/15 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 80% 0%, rgba(148,224,185,0.18) 0%, transparent 45%), radial-gradient(circle at 10% 100%, rgba(187,218,237,0.35) 0%, transparent 50%)",
          }}
        />
        <div className="relative max-w-[820px] mx-auto">
          <ContactForm />
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
