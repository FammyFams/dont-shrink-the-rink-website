import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Donate — Save Lloyd Ice Coalition",
  description:
    "Support the fight to save Portland's Lloyd Center Ice Rink. Every contribution helps fund legal defense, community outreach, and advocacy.",
};

export default function DonatePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative text-white text-center py-[120px] px-6 overflow-hidden bg-gradient-to-br from-primary-darker via-primary-dark to-primary-darker max-md:py-[80px]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 30% 70%, rgba(148,224,185,0.1), transparent 60%), radial-gradient(ellipse at 70% 20%, rgba(187,218,237,0.1), transparent 50%)",
          }}
        />
        <div className="relative">
          <span className="inline-block px-4 py-1.5 rounded-full font-heading text-xs font-bold uppercase tracking-[2px] bg-mint/20 text-mint border border-mint/30 backdrop-blur-sm mb-4">
            Support the Cause
          </span>
          <h1 className="font-heading text-[clamp(36px,5vw,60px)] font-extrabold uppercase tracking-wide mb-4 leading-[1.1] max-md:text-[30px]">
            Make an Impact
            <br />
            <span className="text-mint">Today</span>
          </h1>
          <p className="text-xl max-w-[580px] mx-auto mb-8">
            Every contribution helps us slow down the process and urge the city to{" "}
            <strong>do the right thing.</strong>
          </p>
          <a
            href="https://www.gofundme.com/f/save-lloyd-ice-rink"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-9 py-4 rounded-xl text-[15px] font-bold font-heading uppercase tracking-wider bg-mint text-primary-darker hover:bg-mint-dark hover:-translate-y-[3px] hover:shadow-lg transition-all relative overflow-hidden"
          >
            Donate Here &rarr;
          </a>
        </div>
      </section>

      {/* WHERE MONEY GOES */}
      <section className="py-20 px-6 text-center max-md:py-[50px] max-md:px-4">
        <div className="max-w-[1140px] mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full font-heading text-xs font-bold uppercase tracking-[2px] bg-primary/[0.08] text-primary mb-4">
            Your Dollars at Work
          </span>
          <h2 className="font-heading text-[clamp(30px,4vw,48px)] font-extrabold uppercase tracking-wide mb-4 leading-[1.15] text-primary-darker">
            No Contribution Is Too Small
          </h2>
          <hr className="w-[60px] h-1 bg-gradient-to-r from-primary to-mint rounded mx-auto my-5 border-none" />
          <p className="max-w-[700px] mx-auto mb-4">
            We appreciate support for this fight at every level. Your donations go toward
            legal fees, community outreach, and advocacy efforts to preserve Portland&apos;s
            only year-round ice rink.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-10">
            {[
              {
                title: "Legal Defense",
                desc: "Funding the appeal process and legal counsel to protect the rink through city channels.",
              },
              {
                title: "Community Outreach",
                desc: "Events, signage, and materials to grow awareness and rally public support.",
              },
              {
                title: "Advocacy",
                desc: "Working with city officials and media to ensure our community's voice is heard.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="group bg-white rounded-2xl p-9 shadow-[0_4px_20px_rgba(43,96,128,0.08)] border border-ice-light/30 hover:-translate-y-1.5 hover:shadow-[0_12px_35px_rgba(43,96,128,0.15)] transition-all relative overflow-hidden text-center"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-mint opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="font-heading text-2xl font-bold uppercase tracking-wide mb-3 text-primary-darker">
                  {card.title}
                </h3>
                <p className="text-body-text text-[15px]">{card.desc}</p>
              </div>
            ))}
          </div>

          <a
            href="https://www.gofundme.com/f/save-lloyd-ice-rink"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-15 px-9 py-4 rounded-xl text-[15px] font-bold font-heading uppercase tracking-wider bg-mint text-primary-darker hover:bg-mint-dark hover:-translate-y-[3px] hover:shadow-lg transition-all"
          >
            Donate on GoFundMe &rarr;
          </a>
        </div>
      </section>

      {/* SPREAD THE WORD */}
      <section className="bg-gradient-to-br from-primary-darker to-primary-dark text-white py-20 px-6 text-center">
        <div className="max-w-[1140px] mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full font-heading text-xs font-bold uppercase tracking-[2px] bg-mint/20 text-mint border border-mint/30 mb-4">
            Every Bit Helps
          </span>
          <h2 className="font-heading text-[clamp(30px,4vw,48px)] font-extrabold uppercase tracking-wide mb-4 leading-[1.15] text-white">
            Can&apos;t Donate?
            <br />
            <span className="text-mint">Spread the Word</span>
          </h2>
          <hr className="w-[60px] h-1 bg-gradient-to-r from-primary to-mint rounded mx-auto my-5 border-none" />
          <p className="max-w-[700px] mx-auto mb-4">
            Sharing our mission with friends and family is just as powerful. Follow us and
            help us reach more people.
          </p>
          <div className="flex gap-4 justify-center flex-wrap mt-10 max-md:flex-col max-md:items-center">
            <a
              href="https://www.change.org/p/save-the-lloyd-center-ice-rink"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-9 py-4 rounded-xl text-[15px] font-bold font-heading uppercase tracking-wider bg-mint text-primary-darker hover:bg-mint-dark hover:-translate-y-[3px] hover:shadow-lg transition-all max-md:w-full max-md:max-w-[300px] max-md:text-center"
            >
              Sign the Petition
            </a>
            <Link
              href="/take-action"
              className="inline-block px-9 py-4 rounded-xl text-[15px] font-bold font-heading uppercase tracking-wider bg-white/15 text-white border-2 border-white hover:bg-white hover:text-primary-darker hover:-translate-y-[3px] hover:shadow-lg transition-all max-md:w-full max-md:max-w-[300px] max-md:text-center"
            >
              Take Action
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
