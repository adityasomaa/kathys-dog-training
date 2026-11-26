import Image from "next/image";
import { promises, shop } from "@/lib/shop";
import { Reveal } from "../Reveal";

const steps = [
  { title: "Book a free chat", text: "Ten minutes on the phone to tell Kathy what's happening. She'll suggest the right session." },
  { title: "Your first session", text: "At Kathy's with her dogs, or at your home. Interactive, with every question welcome." },
  { title: "A plan for your dog", text: "Practical strategies that fit your dog's personality, explained so you feel confident." },
  { title: "Support after", text: "Kathy answers texts and emails promptly while you put it into practice." },
];

export function Process() {
  return (
    <section id="about" className="bg-coal px-4 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-5 lg:pr-8">
          <p className="eyebrow mb-5">Meet Kathy</p>
          <h2 className="heading">
            Perth&apos;s <span className="font-script font-normal tracking-normal text-gold-deep">dog whisperer.</span>
          </h2>
          <p className="mt-6 max-w-md text-[18px] leading-relaxed text-bone/75">
            {shop.owner} is a certified dog behaviour consultant who introduced Perth&apos;s first classes for reactive and aggressive dogs. She&apos;s a returning guest on Channel 9 News, and vets and other trainers call her about their own dogs.
          </p>
          <div className="mt-12 space-y-8">
            {promises.map((p) => (
              <div key={p.title} className="border-t border-rule pt-6">
                <h3 className="text-[21px] font-extrabold leading-snug">{p.title}</h3>
                <p className="mt-2 text-[16px] leading-relaxed text-bone/70">{p.text}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 self-start lg:sticky lg:top-28 lg:col-span-7 lg:gap-4">
          <Reveal className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-[28px]">
            <Image src="/images/sunset.jpg" alt="Kathy in the garden at sunset with three of her Siberian Huskies" fill sizes="(min-width: 1024px) 56vw, 100vw" className="object-cover" />
          </Reveal>
          <Reveal delay={0.08} className="relative aspect-square overflow-hidden rounded-[28px]">
            <Image src="/images/hug.jpg" alt="Kathy cheek to cheek with a smiling husky" fill sizes="(min-width: 1024px) 28vw, 50vw" className="object-cover" />
          </Reveal>
          <Reveal delay={0.14} className="relative aspect-square overflow-hidden rounded-[28px]">
            <Image src="/images/workshop.jpg" alt="A room full of dog owners at one of Kathy's seminars" fill sizes="(min-width: 1024px) 28vw, 50vw" className="object-cover" />
            <p className="absolute bottom-4 left-4 rounded-full bg-paper/90 px-4 py-2 text-[12px] font-extrabold uppercase tracking-[0.16em] text-bone backdrop-blur">Workshops & seminars</p>
          </Reveal>
        </div>

        <div className="lg:col-span-12">
          <Reveal className="mt-8 grid gap-px overflow-hidden rounded-[28px] bg-rule sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.title} className="bg-night p-6 lg:p-8">
                <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-ash">Step {i + 1}</p>
                <h3 className="mt-3 text-[22px] font-extrabold leading-tight text-gold-deep">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-bone/70">{s.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
