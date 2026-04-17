import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Take Action | Save Lloyd Ice Coalition",
  description:
    "Join the fight to save Lloyd Center Ice Rink. Testify before City Council, sign the petition, and make your voice heard.",
};

const categories = [
  {
    title: "Historical Significance",
    items: [
      "65 years of continuous operation",
      "First mall ice rink in the country",
      "Iconic Lloyd District landmark",
    ],
  },
  {
    title: "Competitive Skating",
    items: [
      "Pipeline for competitive athletes",
      "Olympic & Team USA skaters",
      "Coaching access & development",
    ],
  },
  {
    title: "Mental & Physical Health",
    items: [
      "Thousands of annual visitors",
      "Public skate & Learn to Skate",
      "Holiday events & free performances",
    ],
  },
  {
    title: "Recreation & Tourism",
    items: [
      "Transit accessible location",
      "Affordable compared to alternatives",
      "Draws regional visitors",
    ],
  },
  {
    title: "Economic Impact",
    items: [
      "Rink staff employment",
      "Coaches & skating professionals",
      "Tourism revenue for the area",
    ],
  },
  {
    title: "Inclusivity",
    items: [
      "Multi-generational community use",
      "Accessible to all income levels",
      "LGBTQ+, disability, POC welcoming",
    ],
  },
  {
    title: "Access & Preservation",
    items: [
      "Rink staff & coaching ecosystem",
      "Facility reuse requirements",
      "Preservation of civic infrastructure",
    ],
  },
  {
    title: "Portland Core Values",
    items: [
      "Anti-racism & equity",
      "Transparency & communication",
      "Collaboration & fiscal responsibility",
    ],
  },
];

export default function TakeActionPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative text-white text-center py-[140px] px-6 overflow-hidden bg-primary-darker max-md:py-[100px]">
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
            Appeal in Progress
          </span>
          <h1 className="font-heading text-[clamp(40px,6vw,72px)] font-extrabold uppercase tracking-wide mb-5 leading-[1.1] max-md:text-[32px]">
            We&apos;re Continuing
            <br />
            <span className="text-mint">The Fight</span>
          </h1>
          <p className="text-[clamp(17px,2vw,21px)] max-w-[680px] mx-auto leading-relaxed text-white/90 max-md:text-base">
            Following guidance from legal counsel and city officials, we have opted to
            appeal the Design Commission&apos;s decision. This is the most effective way to
            protect accessible and affordable ice skating in Portland.
          </p>
        </div>
      </section>

      {/* HEARING INFO */}
      <section className="py-20 px-6 text-center max-md:py-[50px] max-md:px-4">
        <div className="max-w-[1140px] mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full font-heading text-xs font-bold uppercase tracking-[2px] bg-primary/[0.08] text-primary mb-4">
            City Council Hearing
          </span>
          <h2 className="font-heading text-[clamp(30px,4vw,48px)] font-extrabold uppercase tracking-wide mb-4 leading-[1.15] text-primary-darker">
            Your Voice Matters
          </h2>
          <hr className="w-[60px] h-1 bg-gradient-to-r from-primary to-mint rounded mx-auto my-5 border-none" />
          <p className="max-w-[700px] mx-auto mb-4">
            The appeal grants us a hearing with the City Council, a vital
            opportunity to make the needs of the community understood. If you are available
            to testify, please take a look at the suggested categories below and let us
            know if you want to make your voice heard.
          </p>
        </div>
      </section>

      {/* TESTIMONY CATEGORIES */}
      <section className="py-20 px-6 bg-gradient-to-b from-ice-lighter to-white border-t-4 border-mint max-md:py-[50px] max-md:px-4">
        <div className="max-w-[1140px] mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full font-heading text-xs font-bold uppercase tracking-[2px] bg-primary/[0.08] text-primary mb-4">
            Testimony Categories
          </span>
          <h2 className="font-heading text-[clamp(30px,4vw,48px)] font-extrabold uppercase tracking-wide mb-4 leading-[1.15] text-primary-darker">
            Choose Your Category
          </h2>
          <hr className="w-[60px] h-1 bg-gradient-to-r from-primary to-mint rounded mx-auto my-5 border-none" />
          <p className="max-w-[700px] mx-auto mb-4">
            Pick the topic that speaks to your experience. We&apos;ll help you prepare your
            testimony.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-10">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="group bg-white rounded-2xl p-9 shadow-[0_4px_20px_rgba(43,96,128,0.08)] border border-ice-light/30 hover:-translate-y-1.5 hover:shadow-[0_12px_35px_rgba(43,96,128,0.15)] transition-all relative overflow-hidden text-left"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-mint opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="font-heading text-xl font-bold uppercase tracking-wide mb-3 text-primary-darker">
                  {cat.title}
                </h3>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="pl-6 relative text-body-text text-[15px] before:content-['~'] before:absolute before:left-0 before:text-mint before:font-extrabold before:text-xl before:font-heading"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA: TESTIMONY FORM */}
      <section className="bg-gradient-to-br from-primary-darker to-primary-dark text-white py-20 px-6 text-center">
        <div className="max-w-[1140px] mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full font-heading text-xs font-bold uppercase tracking-[2px] bg-mint/20 text-mint border border-mint/30 mb-4">
            Take the Next Step
          </span>
          <h2 className="font-heading text-[clamp(30px,4vw,48px)] font-extrabold uppercase tracking-wide mb-4 leading-[1.15] text-white">
            Ready to Make Your
            <br />
            <span className="text-mint">Voice Heard?</span>
          </h2>
          <hr className="w-[60px] h-1 bg-gradient-to-r from-primary to-mint rounded mx-auto my-5 border-none" />
          <p className="max-w-[700px] mx-auto mb-4">
            Fill out our form and let us know if you intend to testify, what category
            speaks to you, and how we can help you prepare.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-10 px-9 py-4 rounded-xl text-[15px] font-bold font-heading uppercase tracking-wider bg-mint text-primary-darker hover:bg-mint-dark hover:-translate-y-[3px] hover:shadow-lg transition-all"
          >
            Testimony Interest Form &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
