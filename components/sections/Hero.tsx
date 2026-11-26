"use client";

import { motion, useScroll as useScrollProgress, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { shop } from "@/lib/shop";
import { useChat } from "../Chat";
import { Paw } from "../Mark";
import { TransitionLink, useTransition } from "../PageTransition";

const EASE = [0.22, 1, 0.36, 1] as const;
const lines = ["Reactive, anxious", "or aggressive?", "Kathy can help."];

export function Hero() {
  const { ready } = useTransition();
  const { openChat } = useChat();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScrollProgress({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <section ref={ref} className="relative flex min-h-[100svh] flex-col overflow-hidden bg-night lg:h-[100svh] lg:min-h-[640px] lg:flex-row">
      <Paw className="pointer-events-none absolute -left-28 -top-16 hidden w-[420px] -rotate-12 text-gold/[0.08] lg:block" />
      <div className="relative flex flex-col justify-end px-4 pb-8 pt-28 sm:px-8 lg:w-[52%] lg:justify-center lg:px-12 lg:pb-12 xl:px-16">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          className="eyebrow mb-5 lg:mb-6"
        >
          Certified dog behaviour consultant · Perth
        </motion.p>
        <h1 className="font-display text-[clamp(2.5rem,5.4vw,5.4rem)] font-extrabold leading-[1] tracking-[-0.035em] text-bone max-lg:[@media(max-height:700px)]:text-[2.2rem]">
          {lines.map((l, i) => (
            <span key={l} className="block overflow-hidden pb-[0.08em]">
              <motion.span
                className={`block ${i === 2 ? "pt-[0.1em] font-script text-[0.92em] font-normal tracking-normal text-gold-deep" : ""}`}
                initial={{ y: "115%" }}
                animate={ready ? { y: "0%" } : {}}
                transition={{ duration: 0.9, delay: 0.1 + i * 0.08, ease: [0.76, 0, 0.24, 1] }}
              >
                {l}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.35, ease: EASE }}>
          <p className="mt-6 hidden max-w-md text-[17px] leading-relaxed text-bone/75 sm:block lg:mt-8 [@media(max-height:760px)]:hidden">
            {shop.years} years of helping Perth dogs and their people. Kind, force-free methods, and Kathy&apos;s own calm dogs to help yours learn that other dogs are safe.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3 lg:mt-9">
            <button
              type="button"
              onClick={() => openChat("I'd like to book a free 10-minute chat with Kathy.")}
              className="group inline-flex items-center gap-3 rounded-full bg-brass px-6 py-3.5 text-[16px] font-medium text-night transition-colors hover:bg-gold-deep lg:px-7 lg:py-4"
            >
              Free 10-minute chat
              <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </button>
            <TransitionLink href="#help" className="rounded-full border border-bone/25 px-6 py-3.5 text-[16px] font-medium transition-colors hover:border-bone lg:py-4 max-lg:[@media(max-height:700px)]:hidden">
              How Kathy helps
            </TransitionLink>
          </div>
          <p className="mt-5 text-[15px] text-bone/65 lg:mt-8 max-lg:[@media(max-height:700px)]:hidden">
            <span className="text-gold">★★★★★</span> {shop.rating.toFixed(1)} on Google · {shop.reviewCount} reviews · Certified behaviour consultant
          </p>
        </motion.div>
      </div>

      <div className="relative flex min-h-0 flex-1 flex-col px-4 pb-4 sm:px-8 sm:pb-6 lg:px-0 lg:pb-6 lg:pr-6 lg:pt-[96px]">
        <motion.div
          style={{ y: imgY }}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={ready ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.4, ease: EASE }}
          className="relative min-h-[220px] flex-1 overflow-hidden rounded-[32px] bg-steel"
        >
          <Image src="/images/hero.jpg" alt="Kathy laughing as she hugs one of her Siberian Huskies in the garden" fill priority sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover object-[40%_50%]" />
        </motion.div>
      </div>
    </section>
  );
}
