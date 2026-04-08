import type { Metadata } from "next";
import Link from "next/link";
import InstagramEmbed from "@/components/InstagramEmbed";

export const metadata: Metadata = {
  title: "Testimonials — Save Lloyd Ice Coalition",
  description:
    "Hear from the skaters, families, and community members who cherish the Lloyd Center Ice Rink.",
};

const testimonials = [
  {
    name: "Nahomy",
    description: "Adult skater who found community in Portland through the rink.",
    reelId: "DUckXUpiu67",
  },
  {
    name: "Eli",
    description: "Young dreamer finding his voice on Lloyd's ice.",
    reelId: "DUaF_wqilw3",
  },
  {
    name: "Helin",
    description: "Sharing what the Lloyd Center Ice Rink means to her.",
    reelId: "DUhpbyJEbZj",
  },
  {
    name: "Emma",
    description: "Speaking up for the rink that shaped her skating journey.",
    reelId: "DUs2U9NinFQ",
  },
  {
    name: "Stella",
    description: "A young skater standing up for the place she loves.",
    reelId: "DUs8ddrEek2",
  },
  {
    name: "Stephanie",
    description: "A dedicated skating parent fighting for the rink's future.",
    reelId: "DUtBZ2kkW4_",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative text-white text-center py-[100px] px-6 overflow-hidden bg-primary-darker max-md:py-[80px]">
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
            Real Stories
          </span>
          <h1 className="font-heading text-[clamp(40px,6vw,72px)] font-extrabold uppercase tracking-wide mb-5 leading-[1.1] max-md:text-[32px]">
            One Purpose.
            <br />
            <span className="text-mint">Countless Voices.</span>
          </h1>
          <p className="text-[clamp(17px,2vw,21px)] max-w-[680px] mx-auto leading-relaxed text-white/90 max-md:text-base">
            Hear from the skaters, families, and community members who cherish this rink.
          </p>
        </div>
      </section>

      {/* INSTAGRAM VIDEO TESTIMONIALS */}
      <section className="py-20 px-6 bg-gradient-to-b from-ice-lighter to-white max-md:py-[50px] max-md:px-4">
        <div className="max-w-[1140px] mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full font-heading text-xs font-bold uppercase tracking-[2px] bg-primary/[0.08] text-primary mb-4">
            From Our Community
          </span>
          <h2 className="font-heading text-[clamp(30px,4vw,48px)] font-extrabold uppercase tracking-wide mb-4 leading-[1.15] text-primary-darker">
            Make a Skatement
          </h2>
          <hr className="w-[60px] h-1 bg-gradient-to-r from-primary to-mint rounded mx-auto my-5 border-none" />
          <p className="max-w-[700px] mx-auto mb-4">
            Watch real stories from the people who love this rink.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-[1100px]">
            {testimonials.map((t) => (
              <div
                key={t.reelId}
                className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(43,96,128,0.08)] border border-ice-light/30 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(43,96,128,0.15)] transition-all"
              >
                <div className="text-center p-5 pb-0">
                  <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-primary-darker mb-1">
                    {t.name}
                  </h3>
                  <p className="text-body-text text-[15px]">{t.description}</p>
                </div>
                <div className="p-4 min-h-[400px] flex items-center justify-center max-md:min-h-[350px]">
                  <InstagramEmbed reelId={t.reelId} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHARE YOUR STORY */}
      <section className="bg-gradient-to-br from-primary-darker to-primary-dark text-white py-20 px-6 text-center">
        <div className="max-w-[1140px] mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full font-heading text-xs font-bold uppercase tracking-[2px] bg-mint/20 text-mint border border-mint/30 mb-4">
            Your Turn
          </span>
          <h2 className="font-heading text-[clamp(30px,4vw,48px)] font-extrabold uppercase tracking-wide mb-4 leading-[1.15] text-white">
            Share Your Story
          </h2>
          <hr className="w-[60px] h-1 bg-gradient-to-r from-primary to-mint rounded mx-auto my-5 border-none" />
          <p className="max-w-[700px] mx-auto mb-4">
            Have a story about what the Lloyd Center Ice Rink means to you? We&apos;d love
            to hear it.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-10 px-9 py-4 rounded-xl text-[15px] font-bold font-heading uppercase tracking-wider bg-mint text-primary-darker hover:bg-mint-dark hover:-translate-y-[3px] hover:shadow-lg transition-all"
          >
            Contact Us &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
