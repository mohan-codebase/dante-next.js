import { LOCATIONS, EXTERNAL_LINKS } from "@/app/data/site-data";

export default function Locations() {
  return (
    <section
      id="locations"
      className="bg-white"
      style={{ padding: "var(--section-pad-y) var(--section-pad-x)" }}
      aria-labelledby="locations-heading"
    >
      <div className="mx-auto max-w-[var(--container-max)]">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
            Our Offices
          </p>
          <h2
            id="locations-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-navy md:text-4xl"
          >
            Visit Us
          </h2>
        </div>

        {/* Location Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {LOCATIONS.map((loc) => (
            <div
              key={loc.id}
              className="overflow-hidden rounded-none border border-border bg-offwhite"
            >
              {/* Map */}
              <div className="aspect-[16/9]">
                <iframe
                  src={loc.mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${loc.name}`}
                />
              </div>

              {/* Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-navy">{loc.name}</h3>
                <p className="mt-1 text-sm text-text-body">
                  {loc.address}, {loc.city}, {loc.state} {loc.zip}
                </p>
                <a
                  href={`tel:${loc.phone}`}
                  className="mt-1 inline-block text-sm font-medium text-teal"
                >
                  {loc.phone}
                </a>
                <span className="mx-2 text-text-muted">·</span>
                <a
                  href={`mailto:${loc.email}`}
                  className="text-sm text-text-body hover:text-teal"
                >
                  {loc.email}
                </a>

                {/* Hours */}
                <div className="mt-4 space-y-1">
                  {loc.hours.map((h) => (
                    <div key={h.day} className="flex justify-between text-xs text-text-body">
                      <span className="font-medium">{h.day}</span>
                      <span className={h.time === "Closed" ? "text-text-muted" : ""}>
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={loc.mapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-none border border-teal px-4 py-2 text-sm font-medium text-teal transition-colors hover:bg-teal hover:text-white"
                  >
                    Get Directions
                  </a>
                  <a
                    href={EXTERNAL_LINKS.appointment}
                    className="rounded-none bg-gold px-4 py-2 text-sm font-medium text-navy transition-colors hover:bg-gold-hover"
                  >
                    Book at This Location
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
