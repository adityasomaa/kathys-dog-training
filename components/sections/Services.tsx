"use client";

import { issues, services } from "@/lib/shop";
import { useChat } from "../Chat";
import { Reveal } from "../Reveal";

const asks: Record<string, string> = {
  call: "I'd like to book a free 10-minute chat with Kathy.",
  "with-my-dogs": "My dog reacts to other dogs. Can we book a session with Kathy's dogs?",
  home: "Can Kathy come to our home for a behaviour session?",
};

export function Services() {
  const { openChat } = useChat();
  return (
    <section id="help" className="px-4 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-14 grid gap-6 lg:mb-20 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-5">How Kathy helps</p>
            <h2 className="heading">
              Every dog is different. <span className="font-script font-normal tracking-normal text-gold-deep">So is every plan.</span>
            </h2>
          </div>
          <p className="max-w-md text-[17px] leading-relaxed text-bone/70 lg:col-span-5">
            Most of Kathy&apos;s clients come from vets, vet behaviourists and other happy owners. Here&apos;s what she works with every week.
          </p>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-[28px] bg-rule sm:grid-cols-2 lg:grid-cols-3">
          {issues.map((it, i) => (
            <Reveal key={it.title} delay={(i % 3) * 0.06} className="bg-night p-7 lg:p-9">
              <p className="font-script text-[22px] text-gold">0{i + 1}</p>
              <h3 className="mt-2 text-[22px] font-extrabold leading-tight">{it.title}</h3>
              <p className="mt-2 text-[16px] leading-relaxed text-bone/70">{it.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 lg:mt-28">
          <p className="eyebrow mb-6">Ways to start</p>
          <div className="grid gap-5 lg:grid-cols-3">
            {services.map((s, i) => {
              const dark = i === 0;
              return (
                <div key={s.id} className={`flex flex-col justify-between rounded-[28px] p-7 sm:p-9 ${dark ? "bg-brass text-paper" : "bg-coal"}`}>
                  <div>
                    <p className={`text-[12px] font-extrabold uppercase tracking-[0.2em] ${dark ? "text-gold" : "text-gold-deep"}`}>{s.free ? "Free · 10 minutes" : `About ${s.minutes} minutes`}</p>
                    <h3 className="mt-4 text-[28px] font-extrabold leading-tight tracking-[-0.02em]">{s.name}</h3>
                    <p className={`mt-3 text-[16px] leading-relaxed ${dark ? "text-paper/80" : "text-bone/70"}`}>{s.text}</p>
                    <p className={`mt-5 text-[14px] font-semibold ${dark ? "text-paper/60" : "text-ash"}`}>{s.where}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => openChat(asks[s.id])}
                    className={`mt-8 inline-flex w-fit items-center gap-3 rounded-full px-6 py-3.5 text-[15px] font-bold transition-colors ${dark ? "bg-gold text-ink hover:bg-paper" : "bg-brass text-paper hover:bg-ink"}`}
                  >
                    {s.free ? "Book the free chat" : "Find a time"} →
                  </button>
                </div>
              );
            })}
          </div>
          <p className="mt-6 text-[15px] text-ash">Kathy confirms the session fee by text when she confirms your booking.</p>
        </Reveal>
      </div>
    </section>
  );
}
