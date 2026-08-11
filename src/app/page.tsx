import ParallaxHero from "@/components/ParallaxHero";

export default function HomePage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center text-white bg-primary-darker px-6 py-24 overflow-hidden">
      <ParallaxHero imageUrl="https://i.redd.it/ewbwbbpph5eg1.jpeg" />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.7)] via-[rgba(13,42,58,0.75)] to-[rgba(21,53,72,0.95)]" />
      <div className="relative z-[1] max-w-[720px] mx-auto">
        <h1 className="font-heading text-[clamp(40px,7vw,72px)] font-black uppercase tracking-wide leading-[1.05] mb-6">
          Thank You.
        </h1>
        <p className="text-[clamp(20px,2.6vw,28px)] text-ice-light mb-10 leading-snug">
          We fought hard, and the work is not over.
          <br />
          The spirit of Lloyd will live on.
        </p>
        <hr className="w-[60px] h-1 bg-mint rounded mx-auto mb-10 border-none" />
        <p className="text-lg text-white/85 leading-relaxed mb-10">
          Lloyd Center Ice Rink closed permanently on August 8, 2026. Check out our new link below.
        </p>
        <a
          href="https://www.bridgetowniceskatingcollective.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-5 rounded-xl text-base font-bold font-heading uppercase tracking-wider bg-mint text-primary-darker hover:bg-mint-dark hover:-translate-y-[3px] transition-all animate-[pulse-glow_2s_ease-in-out_infinite]"
        >
          Support Bridgetown Ice Skating Collective
        </a>
      </div>
    </section>
  );
}
