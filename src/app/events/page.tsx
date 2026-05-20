import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Events | Save Lloyd Ice Coalition",
  description:
    "Upcoming SLIC events, ice shows, testimony prep meetings, and the Portland City Council appeal hearing for Lloyd Center Ice Rink.",
};

type EventItem = {
  title: string;
  date: string;
  dateLabel: { month: string; day: string; weekday: string };
  time: string;
  location: string;
  address?: string;
  host?: string;
  category: "slic" | "community";
  featured?: boolean;
  description?: string;
};

const events: EventItem[] = [
  {
    title: "Stars on Ice",
    date: "2026-05-24",
    dateLabel: { month: "May", day: "24", weekday: "Sun" },
    time: "4:00 PM",
    location: "Veterans Memorial Coliseum",
    category: "community",
  },
  {
    title: "Lloyd's Story Ice Show",
    date: "2026-05-31",
    dateLabel: { month: "May", day: "31", weekday: "Sun" },
    time: "12:00 PM",
    location: "Lloyd Center Ice Rink",
    host: "Lloyd Center Ice Rink",
    category: "community",
  },
  {
    title: "SLIC Appeal Testimony Prep Meeting",
    date: "2026-06-06",
    dateLabel: { month: "Jun", day: "06", weekday: "Sat" },
    time: "1:00 PM – 3:00 PM",
    location: "McMenamins Broadway",
    address: "Gladstone Room",
    category: "slic",
    description:
      "Workshop your testimony with the coalition before the City Council hearing. Bring notes or just yourself.",
  },
  {
    title: "Last Learn to Skate Session (D26)",
    date: "2026-06-07",
    dateLabel: { month: "Jun", day: "07", weekday: "Sun" },
    time: "Sun, Jun 7 – Sat, Jul 25",
    location: "Lloyd Center Ice Rink",
    category: "community",
    description:
      "The final Learn to Skate session at Lloyd Center Ice Rink. Sign up while you still can.",
  },
  {
    title: "SLIC Appeal Public Hearing",
    date: "2026-06-24",
    dateLabel: { month: "Jun", day: "24", weekday: "Wed" },
    time: "9:00 AM",
    location: "Portland City Council Chambers",
    address: "1221 SW Fourth Avenue, Second Floor Auditorium",
    category: "slic",
    featured: true,
    description:
      "The hearing on our appeal of the Design Commission's decision. Open to the public. Live and written testimony welcome.",
  },
  {
    title: "Curtain Call: A Figure Skating Gala",
    date: "2026-06-26",
    dateLabel: { month: "Jun", day: "26", weekday: "Fri" },
    time: "5:00 PM",
    location: "Lloyd Center Ice Rink",
    host: "Carousel FSC and Pacific Ice Academy",
    category: "community",
  },
  {
    title: "Pacific Ice Challenge 2026",
    date: "2026-06-28",
    dateLabel: { month: "Jun", day: "28", weekday: "Sun" },
    time: "Sunday morning",
    location: "Lloyd Center Ice Rink",
    host: "Carousel FSC",
    category: "community",
  },
];

const sortedEvents = [...events].sort((a, b) =>
  a.date < b.date ? -1 : a.date > b.date ? 1 : 0
);

const featured = events.find((e) => e.featured)!;

function CategoryPill({ category }: { category: EventItem["category"] }) {
  if (category === "slic") {
    return (
      <span className="inline-block px-3 py-1 rounded-full font-heading text-[11px] font-bold uppercase tracking-[2px] bg-urgent/10 text-urgent">
        SLIC Event
      </span>
    );
  }
  return (
    <span className="inline-block px-3 py-1 rounded-full font-heading text-[11px] font-bold uppercase tracking-[2px] bg-primary/[0.08] text-primary">
      Community
    </span>
  );
}

export default function EventsPage() {
  return (
    <>
      {/* COMPACT HEADER */}
      <section className="bg-primary-darker text-white text-center py-10 px-6 border-b-2 border-mint/30">
        <div className="max-w-[920px] mx-auto">
          <span className="inline-block px-3 py-1 rounded-full font-heading text-[11px] font-bold uppercase tracking-[2px] bg-mint/20 text-mint border border-mint/30 mb-3">
            What&apos;s Coming Up
          </span>
          <h1 className="font-heading text-[clamp(28px,4vw,40px)] font-extrabold uppercase tracking-wide leading-[1.1] mb-2">
            Events &amp; <span className="text-mint">Calendar</span>
          </h1>
          <p className="text-[15px] text-ice-light/85 max-w-[600px] mx-auto">
            Coalition meetings, ice shows, and the moments that matter most.
          </p>
        </div>
      </section>

      {/* FEATURED EVENT */}
      <section className="py-16 px-6 bg-gradient-to-b from-ice-lighter to-white max-md:py-[40px] max-md:px-4">
        <div className="max-w-[920px] mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full font-heading text-xs font-bold uppercase tracking-[2px] bg-urgent/10 text-urgent mb-4">
              The Big One
            </span>
            <h2 className="font-heading text-[clamp(30px,4vw,48px)] font-extrabold uppercase tracking-wide mb-4 leading-[1.15] text-primary-darker">
              Mark Your Calendar
            </h2>
            <hr className="w-[60px] h-1 bg-gradient-to-r from-urgent to-mint rounded mx-auto my-5 border-none" />
          </div>

          <div className="bg-gradient-to-br from-primary-darker to-primary-dark rounded-2xl p-8 md:p-12 text-white shadow-[0_12px_40px_rgba(43,96,128,0.25)] relative overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none opacity-40"
              style={{
                background:
                  "radial-gradient(circle at 80% 20%, rgba(148,224,185,0.2) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(232,93,74,0.12) 0%, transparent 50%)",
              }}
            />
            <div className="relative grid md:grid-cols-[auto_1fr] gap-8 items-start">
              {/* Date block */}
              <div className="bg-mint text-primary-darker rounded-2xl px-6 py-5 text-center min-w-[120px] shadow-lg">
                <div className="font-heading text-sm font-bold uppercase tracking-[3px]">
                  {featured.dateLabel.month}
                </div>
                <div className="font-heading text-[64px] font-black leading-none my-1">
                  {featured.dateLabel.day}
                </div>
                <div className="font-heading text-xs font-bold uppercase tracking-[2px] opacity-80">
                  {featured.dateLabel.weekday}
                </div>
              </div>
              {/* Details */}
              <div>
                <span className="inline-block px-3 py-1 rounded-full font-heading text-[11px] font-bold uppercase tracking-[2px] bg-urgent/30 text-white mb-3">
                  SLIC Event &middot; Public Hearing
                </span>
                <h3 className="font-heading text-[clamp(26px,3vw,34px)] font-black uppercase tracking-wide mb-3 leading-tight text-white">
                  {featured.title}
                </h3>
                <p className="text-ice-light/90 text-[16px] leading-relaxed mb-5">
                  {featured.description}
                </p>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <dt className="font-heading text-[11px] font-bold uppercase tracking-[2px] text-mint/80 mb-1">
                      Time
                    </dt>
                    <dd className="text-white font-semibold">{featured.time}</dd>
                  </div>
                  <div>
                    <dt className="font-heading text-[11px] font-bold uppercase tracking-[2px] text-mint/80 mb-1">
                      Location
                    </dt>
                    <dd className="text-white font-semibold">
                      {featured.location}
                      {featured.address && (
                        <span className="block text-ice-light/70 font-normal text-sm mt-0.5">
                          {featured.address}
                        </span>
                      )}
                    </dd>
                  </div>
                </dl>
                <div className="flex gap-3 flex-wrap">
                  <Link
                    href="/take-action"
                    className="inline-block px-6 py-3 rounded-xl text-[14px] font-bold font-heading uppercase tracking-wider bg-mint text-primary-darker hover:bg-mint-dark hover:-translate-y-[2px] transition-all"
                  >
                    Plan to Testify &rarr;
                  </Link>
                  <a
                    href="https://www.portland.gov/council/agenda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 rounded-xl text-[14px] font-bold font-heading uppercase tracking-wider bg-white/10 text-white border-2 border-white/60 hover:bg-white hover:text-primary-darker hover:-translate-y-[2px] transition-all"
                  >
                    Council Agenda
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ALL EVENTS LIST */}
      <section className="py-20 px-6 max-md:py-[50px] max-md:px-4">
        <div className="max-w-[920px] mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full font-heading text-xs font-bold uppercase tracking-[2px] bg-primary/[0.08] text-primary mb-4">
            Full Schedule
          </span>
          <h2 className="font-heading text-[clamp(30px,4vw,48px)] font-extrabold uppercase tracking-wide mb-4 leading-[1.15] text-primary-darker">
            Upcoming Events
          </h2>
          <hr className="w-[60px] h-1 bg-gradient-to-r from-primary to-mint rounded my-5 border-none" />
          <p className="mb-10 text-[17px] leading-[1.75]">
            Ice shows, coalition meetings, the hearing, the last Learn to Skate
            session, and more. We&apos;ll keep this updated.
          </p>

          <ul className="space-y-4">
            {sortedEvents.map((event) => (
              <li
                key={event.title}
                className={`group bg-white rounded-2xl border shadow-[0_2px_12px_rgba(43,96,128,0.06)] hover:shadow-[0_8px_28px_rgba(43,96,128,0.12)] hover:-translate-y-0.5 transition-all overflow-hidden ${
                  event.featured
                    ? "border-mint/60 ring-1 ring-mint/30"
                    : "border-ice-light/50"
                }`}
              >
                <div className="grid grid-cols-[auto_1fr] gap-5 md:gap-7 p-5 md:p-7 items-start">
                  {/* Date block */}
                  <div
                    className={`rounded-xl px-4 py-3 text-center min-w-[78px] md:min-w-[92px] ${
                      event.category === "slic"
                        ? "bg-urgent/10 text-urgent"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    <div className="font-heading text-[11px] font-bold uppercase tracking-[2px]">
                      {event.dateLabel.month}
                    </div>
                    <div className="font-heading text-[34px] md:text-[40px] font-black leading-none my-0.5 text-primary-darker">
                      {event.dateLabel.day}
                    </div>
                    <div className="font-heading text-[10px] font-bold uppercase tracking-[2px] opacity-80">
                      {event.dateLabel.weekday}
                    </div>
                  </div>
                  {/* Details */}
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-2">
                      <CategoryPill category={event.category} />
                      {event.featured && (
                        <span className="inline-block px-3 py-1 rounded-full font-heading text-[11px] font-bold uppercase tracking-[2px] bg-mint/25 text-primary-darker">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="font-heading text-[20px] md:text-[24px] font-bold uppercase tracking-wide text-primary-darker leading-tight mb-2">
                      {event.title}
                    </h3>
                    {event.host && (
                      <p className="text-body-text/70 text-sm italic mb-2">
                        Hosted by {event.host}
                      </p>
                    )}
                    {event.description && (
                      <p className="text-body-text text-[15px] leading-relaxed mb-3">
                        {event.description}
                      </p>
                    )}
                    <dl className="flex gap-x-6 gap-y-1 flex-wrap text-[14px] text-body-text">
                      <div className="flex items-baseline gap-2">
                        <dt className="font-heading text-[11px] font-bold uppercase tracking-[2px] text-primary">
                          When
                        </dt>
                        <dd>{event.time}</dd>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <dt className="font-heading text-[11px] font-bold uppercase tracking-[2px] text-primary">
                          Where
                        </dt>
                        <dd>
                          {event.location}
                          {event.address && (
                            <span className="block text-body-text/70 text-[13px]">
                              {event.address}
                            </span>
                          )}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary-darker to-primary-dark text-white py-20 px-6 text-center">
        <div className="max-w-[1140px] mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full font-heading text-xs font-bold uppercase tracking-[2px] bg-mint/20 text-mint border border-mint/30 mb-4">
            Stay in the Loop
          </span>
          <h2 className="font-heading text-[clamp(30px,4vw,48px)] font-extrabold uppercase tracking-wide mb-4 leading-[1.15] text-white">
            Don&apos;t Miss the Next One
          </h2>
          <hr className="w-[60px] h-1 bg-gradient-to-r from-primary to-mint rounded mx-auto my-5 border-none" />
          <p className="max-w-[700px] mx-auto mb-4 text-white/90 text-[17px] leading-[1.75]">
            Events get added as the coalition books them. The fastest way to
            hear about them is the email list.
          </p>
          <div className="flex gap-4 justify-center flex-wrap mt-10">
            <Link
              href="/take-action"
              className="inline-block px-9 py-4 rounded-xl text-[15px] font-bold font-heading uppercase tracking-wider bg-mint text-primary-darker hover:bg-mint-dark hover:-translate-y-[3px] hover:shadow-lg transition-all"
            >
              Plan to Testify
            </Link>
            <Link
              href="/donate"
              className="inline-block px-9 py-4 rounded-xl text-[15px] font-bold font-heading uppercase tracking-wider bg-white/15 text-white border-2 border-white hover:bg-white hover:text-primary-darker hover:-translate-y-[3px] hover:shadow-lg transition-all"
            >
              Fund the Fight
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
