import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import EmailSignupModal from "@/components/EmailSignupModal";

export const metadata: Metadata = {
  title: "Save Lloyd Ice Coalition | Don't Shrink the Rink",
  description:
    "A coalition of skaters, parents, and coaches fighting to preserve the Lloyd Center Ice Rink, Portland's only year-round public ice facility and a beloved community landmark for 65 years.",
  openGraph: {
    title: "Save Lloyd Ice Coalition",
    description:
      "Help us preserve Portland's historic Lloyd Center Ice Rink, Oregon's only year-round public ice facility since 1960.",
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
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <EmailSignupModal />
      </body>
    </html>
  );
}
