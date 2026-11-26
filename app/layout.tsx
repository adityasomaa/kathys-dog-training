import type { Metadata, Viewport } from "next";
import { Kaushan_Script, Nunito } from "next/font/google";
import { ChatProvider } from "@/components/Chat";
import { PageTransition } from "@/components/PageTransition";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

// Nunito matches the tagline of Kathy's logo; Kaushan Script is the closest brush script to its "Kathy's"
const nunito = Nunito({ variable: "--font-nunito", subsets: ["latin"] });
const kaushan = Kaushan_Script({ variable: "--font-kaushan", weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://kathys-dog-training.vercel.app"),
  title: "Kathy's Dog Training & Behaviour Consulting — Perth Dog Behaviour Consultant",
  description:
    "Certified dog behaviour consultant Kathy Kopellis McLeod helps Perth dogs with reactivity, aggression, separation anxiety and fear, using kind, force-free methods and her own calm dogs. 5.0 on Google from 230 reviews.",
  openGraph: {
    title: "Kathy's Dog Training & Behaviour Consulting, Perth",
    description: "Reactive, aggressive or anxious dog? Book a free 10-minute chat or a session with Kathy online.",
    images: [{ url: "/images/hero.jpg", width: 1800, height: 1200 }],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f5ee",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${nunito.variable} ${kaushan.variable} is-loading antialiased`} suppressHydrationWarning>
      <body className="min-h-dvh">
        <SmoothScroll>
          <PageTransition>
            <ChatProvider>{children}</ChatProvider>
          </PageTransition>
        </SmoothScroll>
      </body>
    </html>
  );
}
