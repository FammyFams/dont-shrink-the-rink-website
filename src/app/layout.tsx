import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Save Lloyd Ice Coalition",
  description:
    "The fight to save Portland's Lloyd Center Ice Rink is over. Thank you to everyone who signed, donated, testified, and showed up.",
  openGraph: {
    title: "Save Lloyd Ice Coalition",
    description:
      "The fight to save Portland's Lloyd Center Ice Rink is over. Thank you to everyone who signed, donated, testified, and showed up.",
    type: "website",
    url: "https://www.savelloydicerink.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-body text-body-text">
        <main className="flex-1">{children}</main>
      </body>
      <GoogleAnalytics gaId="G-QE326BSY3K" />
    </html>
  );
}
