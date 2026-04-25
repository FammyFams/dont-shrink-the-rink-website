import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Save Lloyd Ice Coalition",
  description:
    "Answers to common questions about the Save Lloyd Ice Coalition, the Lloyd Center redevelopment, and our plan to keep skating accessible in Portland.",
};

const faqs = [
  {
    q: "What is SLIC's mission?",
    a: (
      <p>
        SLIC&apos;s mission is to secure affordable and equitable access to ice
        sports and recreation for people of all ages, identities, and abilities
        in Portland, Oregon.
      </p>
    ),
  },
  {
    q: "Does SLIC want to stop the remodel of the Lloyd Center?",
    a: (
      <p>
        No. We support meaningful development, including more housing. Our goal
        is to ensure that redevelopment occurs thoughtfully, in collaboration,
        and with an eye toward community use.
      </p>
    ),
  },
  {
    q: "Why not just go to one of the surrounding rinks?",
    a: (
      <>
        <p className="mb-4">
          Other rinks in the metro area are more difficult to access for a
          variety of reasons.
        </p>
        <ul className="list-disc pl-6 space-y-3 marker:text-primary">
          <li>
            They are not centrally located or served by transit, so skaters and
            skating families need access to private transportation.
          </li>
          <li>
            All three surrounding rinks charge more for ice time than the Lloyd
            rink, putting skating out of reach for low-income families.
          </li>
          <li>
            There is limited ice time for public skating and for other types of
            skating practice.
          </li>
        </ul>
      </>
    ),
  },
  {
    q: "The closure date is set. Isn't it too late?",
    a: (
      <p>
        We have filed an appeal with the city because we believe the master plan
        as approved overlooks key details that form the basis of our legal
        argument. Our hope is that it is not too late to work with the city and
        developers to identify a solution that keeps skating accessible in the
        Lloyd district, or at least within the city of Portland.
      </p>
    ),
  },
  {
    q: "Why not just build a new rink?",
    a: (
      <p>
        We might! It depends on a lot of factors, including the funding we are
        able to identify, the partnerships we are able to build, and the
        connections we&apos;re able to make with those interested in keeping a
        rink in Portland. But rinks are expensive to operate, and it will take
        a lot of effort to stand a new one up.
      </p>
    ),
  },
  {
    q: "Who's going to pay for a new rink?",
    a: (
      <p>
        We are in the process of starting up a new 501(c)(3) nonprofit
        organization called the{" "}
        <strong>Bridgetown Ice Skating Collective</strong>. Our funding model
        will allow us to pursue a variety of funding sources. Funders have
        begun to express interest, and we will also need your help to raise
        the funds for our next Portland rink.
      </p>
    ),
  },
];

export default function FAQPage() {
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
            Frequently Asked
          </span>
          <h1 className="font-heading text-[clamp(40px,6vw,72px)] font-extrabold uppercase tracking-wide mb-5 leading-[1.1]">
            Questions &amp;
            <br />
            <span className="text-mint">Answers</span>
          </h1>
          <p className="text-[clamp(17px,2vw,21px)] max-w-[680px] mx-auto leading-relaxed text-white/90">
            Straight answers about the coalition, the appeal, and what comes
            next for skating in Portland.
          </p>
        </div>
      </section>

      {/* Q&A LIST */}
      <section className="py-20 px-6">
        <div className="max-w-[820px] mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full font-heading text-xs font-bold uppercase tracking-[2px] bg-primary/[0.08] text-primary mb-4">
            The Basics
          </span>
          <h2 className="font-heading text-[clamp(30px,4vw,48px)] font-extrabold uppercase tracking-wide mb-4 leading-[1.15] text-primary-darker">
            What People Are Asking
          </h2>
          <hr className="w-[60px] h-1 bg-gradient-to-r from-primary to-mint rounded my-5 border-none" />
          <p className="mb-10 text-[17px] leading-[1.75]">
            Click any question to expand the answer. Still curious? Reach us at{" "}
            <a
              href="mailto:savelloydicecoalition@gmail.com"
              className="text-primary font-semibold underline decoration-mint decoration-2 underline-offset-4 hover:text-primary-darker transition-colors"
            >
              savelloydicecoalition@gmail.com
            </a>
            .
          </p>

          <div className="space-y-4">
            {faqs.map((item, i) => (
              <details
                key={i}
                className="group bg-white rounded-2xl border border-ice-light/50 shadow-[0_2px_12px_rgba(43,96,128,0.06)] open:shadow-[0_8px_28px_rgba(43,96,128,0.12)] open:border-mint/40 transition-shadow overflow-hidden"
              >
                <summary className="list-none cursor-pointer flex items-start gap-4 p-6 md:p-7 font-heading font-bold text-primary-darker text-[20px] md:text-[22px] leading-[1.35] uppercase tracking-wide hover:bg-ice-lighter/40 transition-colors">
                  <span
                    aria-hidden="true"
                    className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl font-black leading-none transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                  <span className="flex-1">{item.q}</span>
                </summary>
                <div className="px-6 md:px-7 pb-7 pl-[60px] md:pl-[68px] text-body-text text-[17px] leading-[1.8] font-body">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary-darker to-primary-dark text-white py-20 px-6 text-center">
        <div className="max-w-[1140px] mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full font-heading text-xs font-bold uppercase tracking-[2px] bg-mint/20 text-mint border border-mint/30 mb-4">
            Still with us?
          </span>
          <h2 className="font-heading text-[clamp(30px,4vw,48px)] font-extrabold uppercase tracking-wide mb-4 leading-[1.15] text-white">
            Join the Fight
          </h2>
          <hr className="w-[60px] h-1 bg-gradient-to-r from-primary to-mint rounded mx-auto my-5 border-none" />
          <p className="max-w-[700px] mx-auto mb-4 text-white/90 text-[17px] leading-[1.75]">
            Answers are good. Action is better. Sign the petition, send a note
            to the coalition, or find another way to pitch in.
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
