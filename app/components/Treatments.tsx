import Image from "next/image";
import { TREATMENTS } from "@/app/data/site-data";

export default function Treatments() {
  return (
    <section
      id="treatments"
      className="bg-white"
      style={{ padding: "var(--section-pad-y) var(--section-pad-x)" }}
      aria-labelledby="treatments-heading"
    >
      <div className="mx-auto max-w-[var(--container-max)]">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
            Our Treatments
          </p>
          <h2
            id="treatments-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-navy md:text-4xl"
          >
            Smile Solutions for Every Age
          </h2>
          <p className="mt-3 text-text-body">
            From first-time braces to adult Invisalign, we tailor every plan to
            your unique needs and goals.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {TREATMENTS.map((tx) => (
            <div
              key={tx.title}
              className="group overflow-hidden rounded-none border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={tx.image}
                  alt={tx.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-navy">{tx.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-body">
                  {tx.description}
                </p>
                <a
                  href={tx.href}
                  className="mt-4 inline-block text-sm font-medium text-teal transition-colors hover:underline"
                >
                  Learn more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
