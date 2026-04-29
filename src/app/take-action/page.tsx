import type { Metadata } from "next";
import Link from "next/link";
import TestimonyInterestForm from "@/components/TestimonyInterestForm";

export const metadata: Metadata = {
  title: "Take Action | Save Lloyd Ice Coalition",
  description:
    "Join the fight to save Lloyd Center Ice Rink. Testify before City Council, sign the petition, and make your voice heard.",
};

const appealFaqs = [
  {
    q: "Are we appealing the Design Commission's decision?",
    a: (
      <p>
        Yes. We are appealing the City of Portland&apos;s Design Commission
        decision to approve the developer&apos;s master plan even though it
        does not include permanent ice rink. The next step is a hearing in
        front of the Portland City Council.
      </p>
    ),
  },
  {
    q: "What are our goals for appealing?",
    a: (
      <>
        <p className="mb-4">There are two main goals of appealing:</p>
        <ol className="list-decimal pl-6 space-y-3 marker:text-primary marker:font-bold">
          <li>
            For City Council to either reject the master plan or remand it
            back to the Design Commission with instructions to require a
            permanent ice rink.
          </li>
          <li>
            If City Council will not require a permanent ice be included in
            the master plan, we are asking the City to help establish a
            permanent ice rink in another way.
          </li>
        </ol>
      </>
    ),
  },
  {
    q: "When and where is the hearing?",
    a: (
      <p>
        The hearing is <strong>Wednesday, June 24, at 9:45 AM</strong>. The
        hearing will be held in City Council Chambers in the Second Floor
        Auditorium at City Hall, 1221 SW Fourth Avenue, Portland, OR 97204.
        You can also attend remotely online.
      </p>
    ),
  },
  {
    q: "Can I testify?",
    a: (
      <p>
        Yes! The hearing is open to the public and we want City Council to
        hear from the whole community about how the loss of a permanent ice
        rink in Portland will affect you and people you care about. There
        will be options to testify live and submit written testimony (or
        both!).
      </p>
    ),
  },
  {
    q: "How do I sign up to testify?",
    a: (
      <p>
        For instructions and to register to testify in person or remotely,
        please review the City Council agenda at{" "}
        <a
          href="https://www.portland.gov/council/agenda"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-semibold underline decoration-mint decoration-2 underline-offset-4 hover:text-primary-darker transition-colors"
        >
          portland.gov/council/agenda
        </a>
        . The agenda will be available at 9 AM the Friday, June 19.
      </p>
    ),
  },
  {
    q: "Should I testify live or in writing?",
    a: (
      <p>
        It&apos;s up to you! Live testimony is especially compelling. If you
        are planning to testify live, we recommend you also submit written
        testimony because there will likely be a limit on how long you can
        speak live. (Commonly 2 minutes but could even be 90 seconds.) There
        is no limit to the length of written testimony.
      </p>
    ),
  },
  {
    q: "What can I testify about?",
    a: (
      <p>
        Whatever you feel the City Council needs to hear. If you are
        testifying live, you will have only a short time to speak (90 seconds
        to 2 minutes) so focus on 1-2 themes that are most important to you.
        Remember to include what you want City Council to do.
      </p>
    ),
  },
];

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

      {/* APPEAL FAQ */}
      <section className="py-20 px-6 bg-white max-md:py-[50px] max-md:px-4">
        <div className="max-w-[820px] mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full font-heading text-xs font-bold uppercase tracking-[2px] bg-primary/[0.08] text-primary mb-4">
            About the Appeal
          </span>
          <h2 className="font-heading text-[clamp(30px,4vw,48px)] font-extrabold uppercase tracking-wide mb-4 leading-[1.15] text-primary-darker">
            Appeal &amp; Testimony FAQ
          </h2>
          <hr className="w-[60px] h-1 bg-gradient-to-r from-primary to-mint rounded my-5 border-none" />
          <p className="mb-10 text-[17px] leading-[1.75]">
            Practical answers about the hearing, signing up, and how to make
            your testimony count.
          </p>

          <div className="space-y-4">
            {appealFaqs.map((item, i) => (
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

      {/* TESTIMONY INTEREST FORM */}
      <section className="py-20 px-6 bg-white max-md:py-[50px] max-md:px-4">
        <div className="max-w-[920px] mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full font-heading text-xs font-bold uppercase tracking-[2px] bg-mint/15 text-primary-darker border border-mint/30 mb-4">
              Testimony Interest Form
            </span>
            <h2 className="font-heading text-[clamp(30px,4vw,48px)] font-extrabold uppercase tracking-wide mb-4 leading-[1.15] text-primary-darker">
              Tell Us You&apos;re <span className="text-mint-dark">In</span>
            </h2>
            <hr className="w-[60px] h-1 bg-gradient-to-r from-primary to-mint rounded mx-auto my-5 border-none" />
            <p className="max-w-[680px] mx-auto text-[17px] leading-[1.7]">
              SLIC is asking who plans to testify so we can coordinate speakers,
              ensure all key topics are covered, and group similar testimonies
              back-to-back during the hearing.
            </p>
          </div>
          <TestimonyInterestForm />
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
