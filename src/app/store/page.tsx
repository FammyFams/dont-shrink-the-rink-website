import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Store | Save Lloyd Ice Coalition",
  description:
    "Shop Save Lloyd Ice Coalition merch on Bonfire. Every purchase supports the fight to preserve Portland's Lloyd Center Ice Rink.",
};

const BONFIRE_URL = "https://www.bonfire.com/store/save-lloyd-ice-coalition/";

const PRODUCTS: {
  title: string;
  startingPrice: string;
  url: string;
  image: string;
}[] = [
  {
    title: "SLIC Colorful Tee",
    startingPrice: "$27.99",
    url: "https://www.bonfire.com/save-lloyd-ice-coalition/",
    image:
      "https://c.bonfireassets.com/thumb/design-image/ac059149-ec38-4022-846d-17d9b0768433/7b489af5-8343-4ffe-8c9a-9af756785c8b/900/",
  },
  {
    title: "SLIC White Tee",
    startingPrice: "$27.99",
    url: "https://www.bonfire.com/slic-white-tees/",
    image:
      "https://c.bonfireassets.com/thumb/design-image/ef59a727-d4a3-473a-92c3-cc5abce34892/e4213c53-8052-4c44-ad64-9d06f2cda5e3/900/",
  },
  {
    title: "Keep Skating Weird Tee",
    startingPrice: "$24.99",
    url: "https://www.bonfire.com/keep-skating-weird-tee/",
    image:
      "https://c.bonfireassets.com/thumb/design-image/5ab93a87-2132-426a-873a-346e09791f96/b2b20823-8669-43b2-ab74-7eab5a447081/900/",
  },
  {
    title: "SLIC Hoodie Navy",
    startingPrice: "$39.99",
    url: "https://www.bonfire.com/slic-hoodie-navy/",
    image:
      "https://c.bonfireassets.com/thumb/design-image/fabd3278-9994-43f2-84f6-cde93d800758/65b7e74e-e7d0-4f9f-86bb-7121d341a450/900/",
  },
  {
    title: "SLIC Hoodie Light",
    startingPrice: "$39.99",
    url: "https://www.bonfire.com/slic-hoodie-light/",
    image:
      "https://c.bonfireassets.com/thumb/design-image/0644e47a-e829-4687-85a1-6f4c8348c187/e3c67090-1516-4e66-91be-0012bd4a5e2d/900/",
  },
  {
    title: "SLIC Zip Up",
    startingPrice: "$49.99",
    url: "https://www.bonfire.com/slic-zip-up/",
    image:
      "https://c.bonfireassets.com/thumb/design-image/114b5898-5088-42a9-9b8f-4bcc85bab8f3/d566df04-4839-4baa-bb88-63d30870fd0b/900/",
  },
  {
    title: "SLIC Water Bottle",
    startingPrice: "$30.99",
    url: "https://www.bonfire.com/slic-water-bottle/",
    image:
      "https://c.bonfireassets.com/thumb/design-image/31e55bb3-84b9-485d-8dae-d1ad1bf8cbdf/7b6b68e9-16c5-489e-864f-2c379ca795a9/900/",
  },
  {
    title: "SLIC Tote",
    startingPrice: "$25.99",
    url: "https://www.bonfire.com/slic-tote/",
    image:
      "https://c.bonfireassets.com/thumb/design-image/a55543b6-348d-464c-a6aa-fe2286a857ae/9e660e8c-5be8-4ece-8122-870cb348573e/900/",
  },
];

export default function StorePage() {
  return (
    <>
      {/* HERO + PRODUCT GRID */}
      <section className="relative text-white px-6 pt-[60px] pb-20 overflow-hidden bg-gradient-to-br from-primary-darker via-primary-dark to-primary-darker max-md:pt-10 max-md:pb-[50px] max-md:px-4">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 30% 70%, rgba(148,224,185,0.1), transparent 60%), radial-gradient(ellipse at 70% 20%, rgba(187,218,237,0.1), transparent 50%)",
          }}
        />
        <div className="relative max-w-[1140px] mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full font-heading text-xs font-bold uppercase tracking-[2px] bg-mint/20 text-mint border border-mint/30 backdrop-blur-sm mb-4">
              Support the Cause
            </span>
            <h1 className="font-heading text-[clamp(36px,5vw,60px)] font-extrabold uppercase tracking-wide mb-4 leading-[1.1] max-md:text-[30px]">
              Wear the Fight.
              <br />
              <span className="text-mint">Save the Rink.</span>
            </h1>
            <p className="text-xl max-w-[580px] mx-auto max-md:text-base">
              Every purchase helps fund legal defense and advocacy for Portland&apos;s
              only year-round ice rink.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {PRODUCTS.map((product) => (
              <a
                key={product.url}
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:-translate-y-1.5 hover:shadow-[0_12px_35px_rgba(0,0,0,0.3)] transition-all flex flex-col"
              >
                <div className="relative aspect-square bg-ice-light/30 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-primary-darker leading-tight mb-2">
                    {product.title}
                  </h3>
                  <div className="mt-auto flex items-baseline justify-between gap-2">
                    <span className="text-body-text text-sm">
                      From{" "}
                      <span className="font-bold text-primary-darker">
                        {product.startingPrice}
                      </span>
                    </span>
                    <span className="font-heading text-xs font-bold uppercase tracking-wider text-primary group-hover:text-mint-dark transition-colors">
                      Shop &rarr;
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href={BONFIRE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-heading text-sm font-bold uppercase tracking-wider text-mint hover:text-mint-dark underline underline-offset-4 decoration-mint/50 hover:decoration-mint-dark transition-colors"
            >
              Browse the full store on Bonfire &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* WHAT YOU'RE SUPPORTING */}
      <section className="py-20 px-6 text-center max-md:py-[50px] max-md:px-4">
        <div className="max-w-[1140px] mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full font-heading text-xs font-bold uppercase tracking-[2px] bg-primary/[0.08] text-primary mb-4">
            Your Dollars at Work
          </span>
          <h2 className="font-heading text-[clamp(30px,4vw,48px)] font-extrabold uppercase tracking-wide mb-4 leading-[1.15] text-primary-darker">
            Every Shirt Funds the Fight
          </h2>
          <hr className="w-[60px] h-1 bg-gradient-to-r from-primary to-mint rounded mx-auto my-5 border-none" />
          <p className="max-w-[700px] mx-auto mb-4">
            Proceeds from every item go straight into the campaign to save
            Portland&apos;s only year-round public ice rink.
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
            href={BONFIRE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-15 px-9 py-4 rounded-xl text-[15px] font-bold font-heading uppercase tracking-wider bg-mint text-primary-darker hover:bg-mint-dark hover:-translate-y-[3px] hover:shadow-lg transition-all"
          >
            Shop on Bonfire &rarr;
          </a>
        </div>
      </section>

      {/* OTHER WAYS TO HELP */}
      <section className="bg-gradient-to-br from-primary-darker to-primary-dark text-white py-20 px-6 text-center">
        <div className="max-w-[1140px] mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full font-heading text-xs font-bold uppercase tracking-[2px] bg-mint/20 text-mint border border-mint/30 mb-4">
            Every Bit Helps
          </span>
          <h2 className="font-heading text-[clamp(30px,4vw,48px)] font-extrabold uppercase tracking-wide mb-4 leading-[1.15] text-white">
            Not Your Size?
            <br />
            <span className="text-mint">Still Help.</span>
          </h2>
          <hr className="w-[60px] h-1 bg-gradient-to-r from-primary to-mint rounded mx-auto my-5 border-none" />
          <p className="max-w-[700px] mx-auto mb-4">
            Signing and sharing is just as powerful as buying. Every action moves
            the fight forward.
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
              href="/donate"
              className="inline-block px-9 py-4 rounded-xl text-[15px] font-bold font-heading uppercase tracking-wider bg-white/15 text-white border-2 border-white hover:bg-white hover:text-primary-darker hover:-translate-y-[3px] hover:shadow-lg transition-all max-md:w-full max-md:max-w-[300px] max-md:text-center"
            >
              Donate
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
