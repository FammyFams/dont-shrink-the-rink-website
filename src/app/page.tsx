import Link from "next/link";
import ParallaxHero from "@/components/ParallaxHero";
import DaysUntilClose from "@/components/DaysUntilClose";
import JoinEmailListButton from "@/components/JoinEmailListButton";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative text-white text-center py-[160px] px-6 overflow-hidden bg-primary-darker max-md:py-[110px]">
        {/* Background image with parallax */}
        <ParallaxHero imageUrl="https://i.redd.it/ewbwbbpph5eg1.jpeg" />
        {/* Darker, more dramatic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.7)] via-[rgba(13,42,58,0.75)] to-[rgba(21,53,72,0.95)]" />
        {/* Ice sparkle */}
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            background:
              "radial-gradient(circle at 15% 25%, rgba(148,224,185,0.15) 0%, transparent 40%), radial-gradient(circle at 85% 20%, rgba(187,218,237,0.2) 0%, transparent 35%)",
            animation: "ice-sparkle 4s ease-in-out infinite",
          }}
        />

        <div className="relative z-[2] max-w-[900px] mx-auto">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-heading text-xs font-bold uppercase tracking-[3px] bg-urgent/90 text-white mb-6 animate-[fadeUp_0.8s_ease-out]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/80 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            Breaking: Closing August 8, 2026
          </span>
          <h1 className="font-heading text-[clamp(44px,7vw,84px)] font-black uppercase tracking-wide mb-6 leading-[1.05] max-md:text-[36px] animate-[fadeUp_0.8s_ease-out]">
            They Want to
            <br />
            <span className="text-mint drop-shadow-[0_0_40px_rgba(148,224,185,0.4)]">
              Demolish Our Rink
            </span>
          </h1>
          {/* Temporarily hidden — restore if needed:
          <p className="text-[clamp(18px,2.2vw,24px)] max-w-[720px] mx-auto mb-6 leading-relaxed text-white/95 animate-[fadeUp_0.8s_ease-out_0.15s_both] max-md:text-lg font-medium">
            Mall owners KKR and URG set the final day: <strong className="text-mint">August 8, 2026</strong>. Then demolition begins. Rink included.
          </p>
          */}
          <p className="text-[clamp(16px,1.8vw,20px)] max-w-[600px] mx-auto mb-8 text-ice-light/85 animate-[fadeUp_0.8s_ease-out_0.2s_both] max-md:text-base">
            65 years of memories. Oregon&apos;s only year-round public ice rink.
            We&apos;re fighting back, and the clock is running.
          </p>

          {/* Countdown */}
          <div className="inline-flex items-center gap-4 mb-10 px-6 py-4 rounded-2xl bg-white/[0.07] border border-mint/25 backdrop-blur-sm animate-[fadeUp_0.8s_ease-out_0.25s_both]">
            <div className="text-left">
              <div className="text-[11px] font-heading uppercase tracking-[2px] text-mint/80 mb-1">
                Time to save the rink
              </div>
              <div className="font-heading text-[clamp(24px,3.5vw,36px)] font-black text-white leading-none">
                <DaysUntilClose />
              </div>
            </div>
            <div className="h-10 w-px bg-white/15" aria-hidden />
            <div className="text-left">
              <div className="text-[11px] font-heading uppercase tracking-[2px] text-ice-light/60 mb-1">
                Final day
              </div>
              <div className="font-heading text-[clamp(24px,3.5vw,36px)] font-black text-white leading-none">
                Aug 8
              </div>
            </div>
          </div>
          <div className="flex gap-4 justify-center flex-wrap animate-[fadeUp_0.8s_ease-out_0.3s_both] max-md:flex-col max-md:items-center">
            <a
              href="https://www.change.org/p/save-the-lloyd-center-ice-rink"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 rounded-xl text-base font-bold font-heading uppercase tracking-wider bg-mint text-primary-darker hover:bg-mint-dark hover:-translate-y-[3px] transition-all animate-[pulse-glow_2s_ease-in-out_infinite] max-md:w-full max-md:max-w-[340px] max-md:text-center"
            >
              Sign the Petition Now
            </a>
            <Link
              href="/donate"
              className="inline-block px-10 py-5 rounded-xl text-base font-bold font-heading uppercase tracking-wider bg-white/10 text-white border-2 border-white/80 hover:bg-white hover:text-primary-darker hover:-translate-y-[3px] hover:shadow-lg transition-all max-md:w-full max-md:max-w-[340px] max-md:text-center"
            >
              Fund the Fight
            </Link>
            <JoinEmailListButton className="inline-block px-10 py-5 rounded-xl text-base font-bold font-heading uppercase tracking-wider bg-white/10 text-white border-2 border-white/80 hover:bg-white hover:text-primary-darker hover:-translate-y-[3px] hover:shadow-lg transition-all max-md:w-full max-md:max-w-[340px] max-md:text-center">
              Join the Email List
            </JoinEmailListButton>
          </div>
        </div>
      </section>

      {/* WHAT'S AT STAKE */}
      <section className="bg-primary-darker text-white py-14 px-6 border-t-4 border-mint">
        <div className="max-w-[1140px] mx-auto text-center">
          <h2 className="font-heading text-[clamp(26px,3.5vw,40px)] font-extrabold uppercase tracking-wide mb-8 leading-tight">
            What We Lose If We Don&apos;t Act
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { number: "65", label: "Years of History", sub: "Since 1960" },
              { number: "1st", label: "Mall Rink in USA", sub: "A national landmark" },
              { number: "365", label: "Days a Year", sub: "Year-round access" },
              { number: "1000s", label: "Lives Shaped", sub: "Athletes & families" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="font-heading text-[clamp(36px,5vw,56px)] font-black text-mint leading-none block">
                  {stat.number}
                </span>
                <span className="text-sm uppercase tracking-[2px] font-bold mt-2 block text-white">
                  {stat.label}
                </span>
                <span className="text-xs text-ice-light/60 mt-1 block">
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY THIS MATTERS */}
      <section className="py-20 px-6 max-md:py-[50px] max-md:px-4">
        <div className="max-w-[900px] mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full font-heading text-xs font-bold uppercase tracking-[2px] bg-urgent/10 text-urgent mb-4">
            Why This Matters
          </span>
          <h2 className="font-heading text-[clamp(30px,4vw,48px)] font-extrabold uppercase tracking-wide mb-4 leading-[1.15] text-primary-darker">
            This Is More Than a Rink
          </h2>
          <hr className="w-[60px] h-1 bg-gradient-to-r from-urgent to-mint rounded mx-auto my-5 border-none" />
          <p className="text-lg max-w-[700px] mx-auto mb-6 leading-relaxed">
            The Lloyd Center Ice Rink is where <strong>Tonya Harding trained</strong>.
            Where families spend Christmas morning. Where kids lace up their first skates
            and <strong>Olympians are made</strong>. It&apos;s Portland&apos;s living room on ice.
          </p>
          <p className="text-lg max-w-[700px] mx-auto mb-8 leading-relaxed">
            Developers want to tear it down with <strong>no guaranteed replacement</strong>.
            We&apos;re not against development. We&apos;re against losing a 65-year
            community institution without a fight.
          </p>
          <div className="flex gap-4 justify-center flex-wrap max-md:flex-col max-md:items-center">
            <Link
              href="/mission"
              className="inline-block px-8 py-4 rounded-xl text-[15px] font-bold font-heading uppercase tracking-wider bg-primary-darker text-white hover:bg-primary hover:-translate-y-[3px] hover:shadow-lg transition-all"
            >
              Read Our Full Mission &rarr;
            </Link>
            <Link
              href="/testimonials"
              className="inline-block px-8 py-4 rounded-xl text-[15px] font-bold font-heading uppercase tracking-wider border-2 border-primary text-primary hover:bg-primary hover:text-white hover:-translate-y-[3px] transition-all"
            >
              Hear Real Stories
            </Link>
          </div>
        </div>
      </section>

      {/* WHO'S AFFECTED */}
      <section className="py-20 px-6 bg-gradient-to-b from-ice-lighter to-white max-md:py-[50px] max-md:px-4">
        <div className="max-w-[1140px] mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full font-heading text-xs font-bold uppercase tracking-[2px] bg-primary/[0.08] text-primary mb-4">
            Who&apos;s Affected
          </span>
          <h2 className="font-heading text-[clamp(30px,4vw,48px)] font-extrabold uppercase tracking-wide mb-4 leading-[1.15] text-primary-darker">
            Real People. Real Loss.
          </h2>
          <hr className="w-[60px] h-1 bg-gradient-to-r from-primary to-mint rounded mx-auto my-5 border-none" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-10">
            {[
              {
                title: "Young Athletes",
                desc: "Olympic & Team USA skaters trained here. Learn to Skate programs serve hundreds of kids each year. Where will they go?",
                accent: "bg-urgent/10 text-urgent",
              },
              {
                title: "Working Families",
                desc: "Affordable public skating, accessible by transit, welcoming to all income levels. The only rink many families can afford.",
                accent: "bg-primary/10 text-primary",
              },
              {
                title: "An Entire Community",
                desc: "Multi-generational. LGBTQ+ welcoming. Adaptive athletics. A space that belongs to everyone \u2014 and that can't be replaced.",
                accent: "bg-mint/20 text-primary-darker",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="group bg-white rounded-2xl p-9 shadow-[0_4px_20px_rgba(43,96,128,0.08)] border border-ice-light/30 hover:-translate-y-1.5 hover:shadow-[0_12px_35px_rgba(43,96,128,0.15)] transition-all relative overflow-hidden text-left"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-mint opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className={`inline-block px-3 py-1 rounded-full font-heading text-[11px] font-bold uppercase tracking-[2px] mb-4 ${card.accent}`}>
                  At Risk
                </span>
                <h3 className="font-heading text-2xl font-bold uppercase tracking-wide mb-3 text-primary-darker">
                  {card.title}
                </h3>
                <p className="text-body-text text-[15px] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 WAYS TO HELP */}
      <section className="py-20 px-6 max-md:py-[50px] max-md:px-4">
        <div className="max-w-[1140px] mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full font-heading text-xs font-bold uppercase tracking-[2px] bg-urgent/10 text-urgent mb-4">
            Take Action Today
          </span>
          <h2 className="font-heading text-[clamp(30px,4vw,48px)] font-extrabold uppercase tracking-wide mb-4 leading-[1.15] text-primary-darker">
            3 Ways to Help Right Now
          </h2>
          <hr className="w-[60px] h-1 bg-gradient-to-r from-urgent to-mint rounded mx-auto my-5 border-none" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-10">
            {/* Sign */}
            <div className="bg-gradient-to-br from-primary-darker to-primary-dark rounded-2xl p-9 text-center text-white relative overflow-hidden">
              <span className="font-heading text-[72px] font-black text-mint/20 absolute top-4 right-6 leading-none">1</span>
              <div className="relative">
                <h3 className="font-heading text-2xl font-bold uppercase tracking-wide mb-3 text-mint">
                  Sign
                </h3>
                <p className="text-light-text text-[15px] mb-6 leading-relaxed">
                  Add your name to the petition. It takes 30 seconds and sends a direct message to city leaders.
                </p>
                <a
                  href="https://www.change.org/p/save-the-lloyd-center-ice-rink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full px-6 py-4 rounded-xl text-[15px] font-bold font-heading uppercase tracking-wider bg-mint text-primary-darker hover:bg-mint-dark hover:-translate-y-[2px] transition-all"
                >
                  Sign the Petition &rarr;
                </a>
              </div>
            </div>

            {/* Donate */}
            <div className="bg-gradient-to-br from-primary-darker to-primary-dark rounded-2xl p-9 text-center text-white relative overflow-hidden">
              <span className="font-heading text-[72px] font-black text-mint/20 absolute top-4 right-6 leading-none">2</span>
              <div className="relative">
                <h3 className="font-heading text-2xl font-bold uppercase tracking-wide mb-3 text-mint">
                  Donate
                </h3>
                <p className="text-light-text text-[15px] mb-6 leading-relaxed">
                  Fund the legal appeal. Every dollar goes directly to legal defense, outreach, and advocacy.
                </p>
                <Link
                  href="/donate"
                  className="inline-block w-full px-6 py-4 rounded-xl text-[15px] font-bold font-heading uppercase tracking-wider bg-mint text-primary-darker hover:bg-mint-dark hover:-translate-y-[2px] transition-all"
                >
                  Donate Now &rarr;
                </Link>
              </div>
            </div>

            {/* Speak */}
            <div className="bg-gradient-to-br from-primary-darker to-primary-dark rounded-2xl p-9 text-center text-white relative overflow-hidden">
              <span className="font-heading text-[72px] font-black text-mint/20 absolute top-4 right-6 leading-none">3</span>
              <div className="relative">
                <h3 className="font-heading text-2xl font-bold uppercase tracking-wide mb-3 text-mint">
                  Speak Up
                </h3>
                <p className="text-light-text text-[15px] mb-6 leading-relaxed">
                  Testify before City Council. Share your story. Your voice is the most powerful tool we have.
                </p>
                <Link
                  href="/take-action"
                  className="inline-block w-full px-6 py-4 rounded-xl text-[15px] font-bold font-heading uppercase tracking-wider bg-mint text-primary-darker hover:bg-mint-dark hover:-translate-y-[2px] transition-all"
                >
                  Get Involved &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-br from-[#0a1e2a] to-primary-darker text-white py-24 px-6 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            background:
              "radial-gradient(circle at 20% 50%, rgba(148,224,185,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(232,93,74,0.15) 0%, transparent 50%)",
          }}
        />
        <div className="max-w-[800px] mx-auto relative">
          <h2 className="font-heading text-[clamp(32px,5vw,56px)] font-black uppercase tracking-wide mb-6 leading-[1.1]">
            August 8 <span className="text-mint">Is Coming.</span>
          </h2>
          <p className="text-xl max-w-[600px] mx-auto mb-6 text-ice-light/90 leading-relaxed">
            <DaysUntilClose className="text-mint font-bold" /> until the gates close. Once it&apos;s gone, it&apos;s gone forever.
          </p>
          <p className="text-lg max-w-[600px] mx-auto mb-10 text-ice-light/70 leading-relaxed">
            Stand with us before it&apos;s too late.
          </p>
          <div className="flex gap-4 justify-center flex-wrap max-md:flex-col max-md:items-center">
            <a
              href="https://www.change.org/p/save-the-lloyd-center-ice-rink"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-5 rounded-xl text-lg font-bold font-heading uppercase tracking-wider bg-mint text-primary-darker hover:bg-mint-dark hover:-translate-y-[3px] transition-all animate-[pulse-glow_2s_ease-in-out_infinite] max-md:w-full max-md:max-w-[340px]"
            >
              Sign the Petition
            </a>
            <a
              href="https://www.gofundme.com/f/save-lloyd-ice-rink"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-5 rounded-xl text-lg font-bold font-heading uppercase tracking-wider bg-white/10 text-white border-2 border-white/80 hover:bg-white hover:text-primary-darker hover:-translate-y-[3px] transition-all max-md:w-full max-md:max-w-[340px]"
            >
              Donate to the Cause
            </a>
          </div>
          <p className="mt-8 text-sm text-ice-light/50">
            Share this page with everyone you know. Every signature counts.
          </p>
        </div>
      </section>
    </>
  );
}
