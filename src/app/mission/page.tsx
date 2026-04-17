import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Mission | Save Lloyd Ice Coalition",
  description:
    "We seek to preserve the Lloyd Center Ice Rink or secure a permanent, year-round replacement facility of equal quality.",
};

export default function MissionPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative text-white text-center py-[140px] px-6 overflow-hidden bg-primary-darker">
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
            Our Mission
          </span>
          <h1 className="font-heading text-[clamp(40px,6vw,72px)] font-extrabold uppercase tracking-wide mb-5 leading-[1.1]">
            A Home for
            <br />
            <span className="text-mint">Civic Recreation</span>
          </h1>
          <p className="text-[clamp(17px,2vw,21px)] max-w-[680px] mx-auto leading-relaxed text-white/90">
            A home for civic recreation and youth sports in the heart of Portland.
          </p>
        </div>
      </section>

      {/* THE ASK */}
      <section className="py-20 px-6">
        <div className="max-w-[1140px] mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full font-heading text-xs font-bold uppercase tracking-[2px] bg-primary/[0.08] text-primary mb-4">
            The Ask
          </span>
          <h2 className="font-heading text-[clamp(30px,4vw,48px)] font-extrabold uppercase tracking-wide mb-4 leading-[1.15] text-primary-darker">
            What We&apos;re Asking For
          </h2>
          <hr className="w-[60px] h-1 bg-gradient-to-r from-primary to-mint rounded my-5 border-none" />
          <p className="max-w-[700px] mb-4">
            We seek to pause approval of the Lloyd Center redevelopment plan and require
            the preservation of the ice rink, or a binding, permanent, year-round
            replacement facility of equal or greater quality.
          </p>
        </div>
      </section>

      {/* LEGACY */}
      <section className="py-20 px-6 bg-gradient-to-b from-ice-lighter to-white">
        <div className="max-w-[1140px] mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full font-heading text-xs font-bold uppercase tracking-[2px] bg-primary/[0.08] text-primary mb-4">
            65 Years Strong
          </span>
          <h2 className="font-heading text-[clamp(30px,4vw,48px)] font-extrabold uppercase tracking-wide mb-4 leading-[1.15] text-primary-darker">
            A Legacy Worth Preserving
          </h2>
          <hr className="w-[60px] h-1 bg-gradient-to-r from-primary to-mint rounded my-5 border-none" />
          <p className="max-w-[700px] mb-4">
            Opened in 1960, the Lloyd Center Ice Rink has served generations of
            Portlanders as a rare, centrally located, year-round public facility. It serves
            youth sports, family recreation, adaptive athletics, and community gathering.
          </p>
          <p className="max-w-[700px] mb-4">
            This isn&apos;t just a rink. It&apos;s a piece of Portland&apos;s
            identity. It&apos;s where Tonya Harding trained. Where families spend Christmas
            morning. Where first dates happen and friendships are forged on the ice.
          </p>
        </div>
      </section>

      {/* NOT AGAINST DEVELOPMENT */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#e8f8f0] to-[#f0faf5]">
        <div className="max-w-[1140px] mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full font-heading text-xs font-bold uppercase tracking-[2px] bg-primary/[0.08] text-primary mb-4">
            Our Position
          </span>
          <h2 className="font-heading text-[clamp(30px,4vw,48px)] font-extrabold uppercase tracking-wide mb-4 leading-[1.15] text-primary-darker">
            We&apos;re Not Against Development
          </h2>
          <hr className="w-[60px] h-1 bg-gradient-to-r from-primary to-mint rounded my-5 border-none" />
          <p className="max-w-[700px] mb-4">
            We are not opposed to housing or redevelopment. We advocate for responsible,
            evidence-based planning that does not permanently eliminate a long-standing
            public asset.
          </p>
          <p className="max-w-[700px] mb-4">
            <strong>
              Housing, economic development, and preservation of civic infrastructure can
              coexist.
            </strong>{" "}
            We believe redevelopment should strengthen community life rather than erase it.
          </p>
        </div>
      </section>

      {/* GUIDING PRINCIPLES */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-[1140px] mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full font-heading text-xs font-bold uppercase tracking-[2px] bg-primary/[0.08] text-primary mb-4">
            How We Work
          </span>
          <h2 className="font-heading text-[clamp(30px,4vw,48px)] font-extrabold uppercase tracking-wide mb-4 leading-[1.15] text-primary-darker">
            Guiding Principles
          </h2>
          <hr className="w-[60px] h-1 bg-gradient-to-r from-primary to-mint rounded mx-auto my-5 border-none" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-10">
            {[
              {
                title: "Preservation",
                desc: "Protect the existing rink or secure an equal-quality permanent replacement within the redevelopment plan.",
              },
              {
                title: "Collaboration",
                desc: "Work with developers and city officials to find solutions that serve both progress and community needs.",
              },
              {
                title: "Accountability",
                desc: "Ensure any commitments to replace the rink are binding, funded, and built to regulation quality.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="group bg-white rounded-2xl p-9 shadow-[0_4px_20px_rgba(43,96,128,0.08)] border border-ice-light/30 hover:-translate-y-1.5 hover:shadow-[0_12px_35px_rgba(43,96,128,0.15)] transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-mint opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="font-heading text-2xl font-bold uppercase tracking-wide mb-3 text-primary-darker">
                  {card.title}
                </h3>
                <p className="text-body-text text-[15px]">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary-darker to-primary-dark text-white py-20 px-6 text-center">
        <div className="max-w-[1140px] mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full font-heading text-xs font-bold uppercase tracking-[2px] bg-mint/20 text-mint border border-mint/30 mb-4">
            Join Us
          </span>
          <h2 className="font-heading text-[clamp(30px,4vw,48px)] font-extrabold uppercase tracking-wide mb-4 leading-[1.15] text-white">
            Join the Coalition
          </h2>
          <hr className="w-[60px] h-1 bg-gradient-to-r from-primary to-mint rounded mx-auto my-5 border-none" />
          <p className="max-w-[700px] mx-auto mb-4">
            Whether you&apos;re a skater, a parent, a coach, or simply a Portlander who
            values community spaces, we need you.
          </p>
          <div className="flex gap-4 justify-center flex-wrap mt-10">
            <a
              href="https://www.change.org/p/save-the-lloyd-center-ice-rink"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-9 py-4 rounded-xl text-[15px] font-bold font-heading uppercase tracking-wider bg-mint text-primary-darker hover:bg-mint-dark hover:-translate-y-[3px] hover:shadow-lg transition-all"
            >
              Sign the Petition
            </a>
            <Link
              href="/take-action"
              className="inline-block px-9 py-4 rounded-xl text-[15px] font-bold font-heading uppercase tracking-wider bg-white/15 text-white border-2 border-white hover:bg-white hover:text-primary-darker hover:-translate-y-[3px] hover:shadow-lg transition-all"
            >
              Take Action
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
