import {
  ShieldCheck,
  BadgeCheck,
  Wrench,
  Headset,
} from "lucide-react";

const guarantees = [
  {
    icon: ShieldCheck,
    title: "Liability Protection",
    description:
      "Clear booking guidelines help hosts and creators understand their responsibilities.",
  },
  {
    icon: BadgeCheck,
    title: "Verified Profiles",
    description:
      "Build trust through profile verification and more confident connections.",
  },
  {
    icon: Wrench,
    title: "Equipment Safety",
    description:
      "Help protect creative equipment by following studio rules and safety guidelines.",
  },
  {
    icon: Headset,
    title: "24/7 Host Support",
    description:
      "Get help with booking questions and hosting concerns whenever support is available.",
  },
];

export default function HostGuarantee() {
  return (
    <section className="bg-neutral-950 px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl  lg:px-4">
        {/* Section heading */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
            Your Space, Our Priority
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Creativity Deserves
            <span className="text-red-500"> Peace of Mind.</span>
          </h2>

          <p className="mt-5 leading-7 text-neutral-400">
            A better creative experience starts with trust, safety, and
            reliable support for both studio hosts and creators.
          </p>
        </div>

        {/* Guarantee cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {guarantees.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:border-red-500/50 hover:bg-white/[0.07]"
              >
                <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-red-600/10 text-red-500">
                  <Icon className="size-6" />
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-neutral-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom message */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-7 text-center sm:px-10">
          <h3 className="text-xl font-semibold text-white">
            Focus on your creativity. We’re here to help.
          </h3>

          <p className="mt-3 text-sm leading-6 text-neutral-400">
            A welcoming creative community starts with clear expectations
            and support for everyone.
          </p>
        </div>
      </div>
    </section>
  );
}