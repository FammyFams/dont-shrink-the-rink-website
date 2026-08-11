import ParallaxHero from "@/components/ParallaxHero";

export default function HomePage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center text-white bg-primary-darker px-6 py-24 overflow-hidden">
      <ParallaxHero imageUrl="https://i.redd.it/ewbwbbpph5eg1.jpeg" />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.7)] via-[rgba(13,42,58,0.75)] to-[rgba(21,53,72,0.95)]" />
      <div className="relative z-[1] max-w-[720px] mx-auto">
        <h1 className="font-heading text-[clamp(40px,7vw,72px)] font-black uppercase tracking-wide leading-[1.05] mb-6">
          Too Late.
        </h1>
        <p className="text-[clamp(20px,2.6vw,28px)] text-ice-light mb-10 leading-snug">
          We tried, and we failed.
          <br />
          Lloyd Center Ice Rink is permanently closed.
        </p>
        <hr className="w-[60px] h-1 bg-mint rounded mx-auto mb-10 border-none" />
        <p className="text-lg text-white/85 leading-relaxed mb-4">
          Sixty-five years of memories, gone. Thank you to everyone who signed the
          petition, donated, testified before City Council, and showed up for a rink
          that gave so much to this city.
        </p>
        <p className="text-lg text-white/85 leading-relaxed">
          We couldn&apos;t save it, but we&apos;re grateful we didn&apos;t let it go
          without a fight. Thank you, Save Lloyd Ice Coalition.
        </p>
      </div>
    </section>
  );
}
