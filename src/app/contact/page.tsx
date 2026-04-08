import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us — Save Lloyd Ice Coalition",
  description:
    "Get in touch with the Save Lloyd Ice Coalition. Reach out with questions, stories, or to get involved.",
};

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative text-white text-center py-[80px] px-6 overflow-hidden bg-primary-darker">
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
            Reach Out
          </span>
          <h1 className="font-heading text-[clamp(40px,6vw,72px)] font-extrabold uppercase tracking-wide mb-5 leading-[1.1] max-md:text-[32px]">
            Contact <span className="text-mint">Us</span>
          </h1>
          <p className="text-[clamp(17px,2vw,21px)] max-w-[680px] mx-auto leading-relaxed text-white/90 max-md:text-base">
            Have questions about our mission? Wondering how you can get involved?
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="py-20 px-6 max-md:py-[50px] max-md:px-4">
        <div className="max-w-[1140px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[60px] items-start">
          {/* LEFT: Contact Details */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full font-heading text-xs font-bold uppercase tracking-[2px] bg-primary/[0.08] text-primary mb-4">
              Get in Touch
            </span>
            <h2 className="font-heading text-[clamp(30px,4vw,48px)] font-extrabold uppercase tracking-wide mb-4 leading-[1.15] text-primary-darker">
              Let&apos;s Connect
            </h2>
            <hr className="w-[60px] h-1 bg-gradient-to-r from-primary to-mint rounded my-5 border-none" />

            <h3 className="font-heading text-2xl font-bold uppercase tracking-wide mt-10 mb-2 text-primary">
              Email Us
            </h3>
            <p>
              <a
                href="mailto:savelloydicecoalition@gmail.com"
                className="text-primary hover:text-mint-dark transition-colors"
              >
                savelloydicecoalition@gmail.com
              </a>
            </p>

            <h3 className="font-heading text-2xl font-bold uppercase tracking-wide mt-10 mb-3 text-primary">
              Follow Us
            </h3>
            <div className="flex gap-6 flex-wrap">
              <a
                href="https://instagram.com/savelloydice"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-text font-heading text-sm uppercase tracking-[1.5px] font-semibold px-4 py-2 rounded-lg border border-primary/20 text-primary hover:bg-mint/15 hover:border-mint transition-all"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com/profile.php?id=61588089534640"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-text font-heading text-sm uppercase tracking-[1.5px] font-semibold px-4 py-2 rounded-lg border border-primary/20 text-primary hover:bg-mint/15 hover:border-mint transition-all"
              >
                Facebook
              </a>
              <a
                href="https://bsky.app/profile/savelloydice.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-text font-heading text-sm uppercase tracking-[1.5px] font-semibold px-4 py-2 rounded-lg border border-primary/20 text-primary hover:bg-mint/15 hover:border-mint transition-all"
              >
                Bluesky
              </a>
            </div>

            <h3 className="font-heading text-2xl font-bold uppercase tracking-wide mt-10 mb-2 text-primary">
              Want to Testify?
            </h3>
            <p>
              If you want to share your story at the City Council hearing, head to our{" "}
              <Link href="/take-action" className="text-primary font-semibold hover:text-mint-dark transition-colors underline">
                Take Action
              </Link>{" "}
              page.
            </p>
          </div>

          {/* RIGHT: Contact Form */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full font-heading text-xs font-bold uppercase tracking-[2px] bg-primary/[0.08] text-primary mb-4">
              Send a Message
            </span>
            <h2 className="font-heading text-[clamp(30px,4vw,48px)] font-extrabold uppercase tracking-wide mb-4 leading-[1.15] text-primary-darker">
              Drop Us a Line
            </h2>
            <hr className="w-[60px] h-1 bg-gradient-to-r from-primary to-mint rounded my-5 border-none" />

            <form className="max-w-[560px] mt-6" action="#" method="POST">
              <label
                htmlFor="contact-name"
                className="block font-heading font-semibold uppercase tracking-wide text-[13px] mb-2 mt-6 text-primary"
              >
                Name *
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                required
                placeholder="Your full name"
                className="w-full px-[18px] py-4 border-2 border-ice-light rounded-xl text-base font-body bg-white focus:outline-none focus:border-primary focus:shadow-[0_0_0_4px_rgba(43,96,128,0.1)] transition-all"
              />

              <label
                htmlFor="contact-email"
                className="block font-heading font-semibold uppercase tracking-wide text-[13px] mb-2 mt-6 text-primary"
              >
                Email *
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                required
                placeholder="your@email.com"
                className="w-full px-[18px] py-4 border-2 border-ice-light rounded-xl text-base font-body bg-white focus:outline-none focus:border-primary focus:shadow-[0_0_0_4px_rgba(43,96,128,0.1)] transition-all"
              />

              <label
                htmlFor="contact-phone"
                className="block font-heading font-semibold uppercase tracking-wide text-[13px] mb-2 mt-6 text-primary"
              >
                Phone (optional)
              </label>
              <input
                type="tel"
                id="contact-phone"
                name="phone"
                placeholder="(503) 555-0123"
                className="w-full px-[18px] py-4 border-2 border-ice-light rounded-xl text-base font-body bg-white focus:outline-none focus:border-primary focus:shadow-[0_0_0_4px_rgba(43,96,128,0.1)] transition-all"
              />

              <label
                htmlFor="contact-message"
                className="block font-heading font-semibold uppercase tracking-wide text-[13px] mb-2 mt-6 text-primary"
              >
                Message *
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                placeholder="How can we help?"
                className="w-full px-[18px] py-4 border-2 border-ice-light rounded-xl text-base font-body bg-white min-h-[160px] resize-y focus:outline-none focus:border-primary focus:shadow-[0_0_0_4px_rgba(43,96,128,0.1)] transition-all"
              />

              <button
                type="submit"
                className="w-full mt-7 px-9 py-4 rounded-xl text-[15px] font-bold font-heading uppercase tracking-wider bg-mint text-primary-darker hover:bg-mint-dark hover:-translate-y-[3px] hover:shadow-lg transition-all relative overflow-hidden"
              >
                Send Away!
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
