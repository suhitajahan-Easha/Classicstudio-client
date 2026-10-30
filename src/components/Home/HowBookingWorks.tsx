import { Search, Clock, CalendarCheck, Camera } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover Spaces",
    description:
      "Explore creative studios and find the perfect space for your project.",
  },
  {
    number: "02",
    icon: Clock,
    title: "Select Shoot Hours",
    description:
      "Choose your preferred date and time that fits your creative schedule.",
  },
  {
    number: "03",
    icon: CalendarCheck,
    title: "Book Instantly",
    description:
      "Reserve your studio and get ready for a smooth booking experience.",
  },
  {
    number: "04",
    icon: Camera,
    title: "Create & Produce",
    description:
      "Bring your ideas to life in a space made for creativity.",
  },
];

export default function HowBookingWorks() {
  return (
    <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
            Simple & Easy
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            How Booking Works
          </h2>

          <p className="mt-4 leading-7 text-neutral-500">
            From finding your perfect studio to creating something amazing,
            your next project starts with four simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group rounded-2xl border border-neutral-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex size-14 items-center justify-center rounded-xl bg-red-50 text-red-600 transition group-hover:bg-red-600 group-hover:text-white">
                    <Icon className="size-7" />
                  </div>

                  <span className="text-3xl font-bold text-neutral-200">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-neutral-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-neutral-500">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}