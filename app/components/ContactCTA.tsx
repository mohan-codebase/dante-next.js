"use client";

import { LOCATIONS } from "@/app/data/site-data";

export default function ContactCTA() {
  const dublin = LOCATIONS.find((l) => l.id === "dublin")!;
  const tracy = LOCATIONS.find((l) => l.id === "tracy")!;

  return (
    <section
      id="contact"
      className="bg-white"
      style={{ padding: "var(--section-pad-y) var(--section-pad-x)" }}
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto grid max-w-[var(--container-max)] gap-12 lg:grid-cols-2">
        {/* Left: Info */}
        <div className="flex flex-col justify-center">
          <h2
            id="contact-heading"
            className="text-3xl font-bold tracking-tight text-navy md:text-4xl"
          >
            Ready for Your Best Smile?
          </h2>
          <p className="mt-4 text-lg text-text-body">
            Schedule your complimentary Gonzales Smile Assessment today.
          </p>

          <div className="mt-8 space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-teal">
                {dublin.name}
              </p>
              <a
                href={`tel:${dublin.phone}`}
                className="mt-1 block text-2xl font-semibold text-navy transition-colors hover:text-teal"
              >
                {dublin.phone}
              </a>
              <p className="mt-1 text-sm text-text-muted">
                {dublin.address}, {dublin.city}
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-teal">
                {tracy.name}
              </p>
              <a
                href={`tel:${tracy.phone}`}
                className="mt-1 block text-2xl font-semibold text-navy transition-colors hover:text-teal"
              >
                {tracy.phone}
              </a>
              <p className="mt-1 text-sm text-text-muted">
                {tracy.address}, {tracy.city}
              </p>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="rounded-none border border-border bg-offwhite p-8 shadow-sm">
          <form action="#" className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="fname" className="sr-only">First Name</label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="First Name"
                  required
                  className="w-full rounded-none border border-border bg-white px-4 py-3 text-sm focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/30"
                />
              </div>
              <div>
                <label htmlFor="lname" className="sr-only">Last Name</label>
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  placeholder="Last Name"
                  required
                  className="w-full rounded-none border border-border bg-white px-4 py-3 text-sm focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/30"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="w-full rounded-none border border-border bg-white px-4 py-3 text-sm focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/30"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full rounded-none border border-border bg-white px-4 py-3 text-sm focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/30"
                />
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-medium text-navy">Preferred Office</p>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 text-sm text-text-body cursor-pointer">
                  <input type="radio" name="office" value="Dublin" required className="text-teal focus:ring-teal" />
                  Dublin
                </label>
                <label className="flex items-center gap-2 text-sm text-text-body cursor-pointer">
                  <input type="radio" name="office" value="Tracy" required className="text-teal focus:ring-teal" />
                  Tracy
                </label>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us about your smile goals"
                required
                className="w-full resize-none rounded-none border border-border bg-white px-4 py-3 text-sm focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/30"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-none bg-gold py-3.5 text-sm font-semibold text-navy transition-colors duration-200 hover:bg-gold-hover"
            >
              Request Your Consultation
            </button>
            <p className="text-center text-xs text-text-muted mt-4">
              By submitting this form, you agree to our privacy policy.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
