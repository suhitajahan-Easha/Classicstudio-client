import { Compass, CalendarClock, BadgeCheck, Clapperboard, ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
  { number: "01", icon: Compass, title: "Discover Spaces", description: "Explore creative studios and find the ideal space that matches your vision and project needs." },
  { number: "02", icon: CalendarClock, title: "Select Shoot Hours", description: "Check availability and choose your preferred date and shooting hours." },
  { number: "03", icon: BadgeCheck, title: "Book Instantly", description: "Confirm your reservation and secure your chosen creative space in just a few steps." },
  { number: "04", icon: Clapperboard, title: "Create & Produce", description: "Step into your studio, bring your ideas to life, and create something memorable." },
];

export default function HowBookingWorks() {
  return (
    <section id="how-it-works" className="bg-[#f8f8f8] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-7xl lg:px-4">

        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-red-600">The Booking Process</p>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">From your vision to your <span className="text-red-600">creative space.</span></h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-neutral-500 sm:text-base">Booking the right studio shouldn't be complicated. Follow four simple steps and get ready to bring your creative ideas to life.</p>
        </div>

        {/* Booking Steps */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="group rounded-2xl border border-neutral-200/80 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl hover:shadow-neutral-200/50 sm:p-7">
                <div className="mb-7 flex items-center justify-between">
                  <div className="flex size-14 items-center justify-center rounded-xl bg-neutral-900 text-white transition duration-300 group-hover:bg-red-600">
                    <Icon className="size-7" strokeWidth={1.8} />
                  </div>
                  <span className="text-4xl font-extrabold tracking-tight text-neutral-200 transition group-hover:text-red-100">{step.number}</span>
                </div>
                <h3 className="text-lg font-bold text-neutral-900 sm:text-xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-500">{step.description}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom Highlight */}
        <div className="relative mt-16 overflow-hidden rounded-2xl bg-neutral-950 px-7 py-10 sm:px-10 lg:px-14 lg:py-12">
          <div className="absolute -right-16 -top-24 size-72 rounded-full bg-red-600/10 blur-3xl" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-red-500">Your Creativity Starts Here</p>
              <h3 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">The perfect space is just a <span className="text-red-500">booking away.</span></h3>
            </div>
            <div className="max-w-sm">
              <p className="mb-5 text-sm leading-7 text-neutral-400">Find a space that inspires you and make your next creative project happen.</p>
              <Link href="/studios" className="inline-flex h-12 items-center justify-center gap-3 rounded-lg bg-red-600 px-6 text-sm font-semibold text-white transition hover:bg-red-700">Explore Studios <ArrowRight className="size-4" /></Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}