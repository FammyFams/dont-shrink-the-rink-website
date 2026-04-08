import Link from "next/link";
import ParallaxHero from "@/components/ParallaxHero";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative text-white text-center py-[140px] px-6 overflow-hidden bg-primary-darker max-md:py-[100px]">
        {/* Background image with parallax */}
        <ParallaxHero imageUrl="https://i.redd.it/ewbwbbpph5eg1.jpeg" />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(13,42,58,0.85)] via-[rgba(43,96,128,0.7)] to-[rgba(21,53,72,0.9)]" />
        {/* Ice sparkle */}
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            background:
              "radial-gradient(circle at 15% 25%, rgba(148,224,185,0.2) 0%, transparent 40%), radial-gradient(circle at 85% 20%, rgba(187,218,237,0.25) 0%, transparent 35%), radial-gradient(circle at 50% 75%, rgba(255,255,255,0.1) 0%, transparent 30%)",
            animation: "ice-sparkle 4s ease-in-out infinite",
          }}
        />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-white to-transparent pointer-events-none z-[1]" />

        <div className="relative z-[2]">
          <span className="inline-block px-4 py-1.5 rounded-full font-heading text-xs font-bold uppercase tracking-[2px] bg-mint/20 text-mint border border-mint/30 backdrop-blur-sm mb-4 animate-[fadeUp_0.8s_ease-out]">
            Since 1960
          </span>
          <h1 className="font-heading text-[clamp(40px,6vw,72px)] font-extrabold uppercase tracking-wide mb-5 leading-[1.1] max-md:text-[32px]">
            Save Portland&apos;s
            <br />
            <span className="text-mint drop-shadow-[0_0_30px_rgba(148,224,185,0.3)]">
              Historic Ice Rink
            </span>
          </h1>
          <p className="text-[clamp(17px,2vw,21px)] max-w-[680px] mx-auto mb-9 leading-relaxed text-white/90 animate-[fadeUp_0.8s_ease-out_0.15s_both] max-md:text-base">
            A coalition of skaters, parents, and coaches fighting to preserve the Lloyd
            Center Ice Rink &mdash; Portland&apos;s only year-round public ice facility and a
            beloved community landmark for 65 years.
          </p>
          <div className="flex gap-4 justify-center flex-wrap animate-[fadeUp_0.8s_ease-out_0.3s_both] max-md:flex-col max-md:items-center">
            <a
              href="https://www.change.org/p/save-the-lloyd-center-ice-rink"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-9 py-4 rounded-xl text-[15px] font-bold font-heading uppercase tracking-wider bg-mint text-primary-darker hover:bg-mint-dark hover:-translate-y-[3px] hover:shadow-lg transition-all relative overflow-hidden max-md:w-full max-md:max-w-[300px] max-md:text-center"
            >
              Sign Our Petition
            </a>
            <Link
              href="/donate"
              className="inline-block px-9 py-4 rounded-xl text-[15px] font-bold font-heading uppercase tracking-wider bg-white/15 text-white border-2 border-white hover:bg-white hover:text-primary-darker hover:-translate-y-[3px] hover:shadow-lg transition-all max-md:w-full max-md:max-w-[300px] max-md:text-center"
            >
              Donate to the Cause
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-gradient-to-br from-primary-darker to-primary-dark text-white py-20 px-6 text-center">
        <div className="max-w-[1140px] mx-auto">
          <div className="flex justify-center gap-12 flex-wrap my-12 max-md:gap-6">
            {[
              { number: "65", label: "Years Open" },
              { number: "1st", label: "Mall Rink in America" },
              { number: "365", label: "Days a Year" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="font-heading text-[clamp(40px,5vw,64px)] font-extrabold text-mint leading-none block max-md:text-4xl">
                  {stat.number}
                </span>
                <span className="text-sm uppercase tracking-[2px] font-semibold mt-2 block opacity-80">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY WE'RE FIGHTING */}
      <section className="py-20 px-6 text-center max-md:py-[50px] max-md:px-4">
        <div className="max-w-[1140px] mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full font-heading text-xs font-bold uppercase tracking-[2px] bg-primary/[0.08] text-primary mb-4">
            Our Purpose
          </span>
          <h2 className="font-heading text-[clamp(30px,4vw,48px)] font-extrabold uppercase tracking-wide mb-4 leading-[1.15] text-primary-darker">
            Why We&apos;re Fighting
          </h2>
          <hr className="w-[60px] h-1 bg-gradient-to-r from-primary to-mint rounded mx-auto my-5 border-none" />
          <p className="max-w-[700px] mx-auto mb-4">
            Redeveloping a site as large and complex as Lloyd Center is no small task, and
            we recognize that change can bring opportunity. Our goal is to collaborate{" "}
            <em>with</em> developers to either preserve the existing ice rink or commit to
            a permanent, year-round, regulation-quality replacement rink embedded in the
            approved master plan.
          </p>
          <Link
            href="/mission"
            className="inline-block mt-10 px-9 py-4 rounded-xl text-[15px] font-bold font-heading uppercase tracking-wider bg-primary-darker text-white hover:bg-primary hover:-translate-y-[3px] hover:shadow-lg transition-all"
          >
            Our Full Mission &rarr;
          </Link>
        </div>
      </section>

      {/* COMMUNITY IMPACT */}
      <section className="py-20 px-6 bg-gradient-to-b from-ice-lighter to-white max-md:py-[50px] max-md:px-4">
        <div className="max-w-[1140px] mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full font-heading text-xs font-bold uppercase tracking-[2px] bg-primary/[0.08] text-primary mb-4">
            Community Impact
          </span>
          <h2 className="font-heading text-[clamp(30px,4vw,48px)] font-extrabold uppercase tracking-wide mb-4 leading-[1.15] text-primary-darker">
            More Than Just Ice
          </h2>
          <hr className="w-[60px] h-1 bg-gradient-to-r from-primary to-mint rounded mx-auto my-5 border-none" />
          <p className="max-w-[700px] mx-auto mb-4">
            The Lloyd Center Ice Rink has been a home for families, competitive athletes,
            and recreational skaters since 1960.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-10">
            {[
              {
                title: "Youth Sports",
                items: [
                  "Pipeline for competitive athletes",
                  "Olympic & Team USA skaters trained here",
                  "Learn to Skate programs for all ages",
                ],
              },
              {
                title: "Community Access",
                items: [
                  "Affordable public skating year-round",
                  "Accessible by public transit",
                  "Welcoming to all income levels",
                ],
              },
              {
                title: "Inclusivity",
                items: [
                  "Multi-generational gathering space",
                  "LGBTQ+ friendly environment",
                  "Adaptive athletics programs",
                ],
              },
            ].map((card) => (
              <div
                key={card.title}
                className="group bg-white rounded-2xl p-9 shadow-[0_4px_20px_rgba(43,96,128,0.08)] border border-ice-light/30 hover:-translate-y-1.5 hover:shadow-[0_12px_35px_rgba(43,96,128,0.15)] transition-all relative overflow-hidden text-left"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-mint opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="font-heading text-2xl font-bold uppercase tracking-wide mb-3 text-primary-darker">
                  {card.title}
                </h3>
                <ul className="space-y-2">
                  {card.items.map((item) => (
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

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary-darker to-primary-dark text-white py-20 px-6 text-center">
        <div className="max-w-[1140px] mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full font-heading text-xs font-bold uppercase tracking-[2px] bg-mint/20 text-mint border border-mint/30 mb-4">
            Get Involved
          </span>
          <h2 className="font-heading text-[clamp(30px,4vw,48px)] font-extrabold uppercase tracking-wide mb-4 leading-[1.15] text-white">
            Ready to Take Action?
          </h2>
          <hr className="w-[60px] h-1 bg-gradient-to-r from-primary to-mint rounded mx-auto my-5 border-none" />
          <p className="max-w-[700px] mx-auto mb-4">
            Your voice matters. Sign the petition, donate to the cause, or volunteer to
            testify before the City Council.
          </p>
          <div className="flex gap-4 justify-center flex-wrap mt-10 max-md:flex-col max-md:items-center">
            <Link
              href="/take-action"
              className="inline-block px-9 py-4 rounded-xl text-[15px] font-bold font-heading uppercase tracking-wider bg-mint text-primary-darker hover:bg-mint-dark hover:-translate-y-[3px] hover:shadow-lg transition-all max-md:w-full max-md:max-w-[300px] max-md:text-center"
            >
              Get Involved
            </Link>
            <a
              href="https://www.change.org/p/save-the-lloyd-center-ice-rink"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-9 py-4 rounded-xl text-[15px] font-bold font-heading uppercase tracking-wider bg-white/15 text-white border-2 border-white hover:bg-white hover:text-primary-darker hover:-translate-y-[3px] hover:shadow-lg transition-all max-md:w-full max-md:max-w-[300px] max-md:text-center"
            >
              Sign the Petition
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
