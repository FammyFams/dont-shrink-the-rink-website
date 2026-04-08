"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/take-action", label: "Take Action" },
  { href: "/mission", label: "Mission" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/donate", label: "Donate" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#0d2a3a] sticky top-0 z-50 backdrop-blur-[10px] border-b-2 border-mint/20">
      <div className="max-w-[1140px] mx-auto flex items-center justify-between h-[72px] px-6">
        <Link
          href="/"
          className="text-white font-heading font-extrabold text-[22px] uppercase tracking-[1.5px] hover:text-mint transition-colors"
        >
          Save Lloyd Ice
        </Link>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white text-3xl p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? "\u2715" : "\u2630"}
        </button>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium font-heading uppercase tracking-wider transition-all hover:bg-ice-light/15 hover:text-white hover:-translate-y-0.5 ${
                  pathname === link.href
                    ? "text-white bg-ice-light/15"
                    : "text-light-text"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://www.change.org/p/save-the-lloyd-center-ice-rink"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-sm font-bold font-heading uppercase tracking-wider bg-mint text-primary-darker hover:bg-mint-dark hover:-translate-y-0.5 transition-all"
            >
              Sign Petition
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#0d2a3a] border-b-2 border-mint px-6 pb-6">
          <ul className="flex flex-col gap-0.5">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3.5 rounded-lg text-[15px] font-medium font-heading uppercase tracking-wider transition-all hover:bg-ice-light/15 hover:text-white ${
                    pathname === link.href
                      ? "text-white bg-ice-light/15"
                      : "text-light-text"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://www.change.org/p/save-the-lloyd-center-ice-rink"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3.5 rounded-lg text-[15px] font-bold font-heading uppercase tracking-wider bg-mint text-primary-darker text-center mt-2"
              >
                Sign Petition
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
