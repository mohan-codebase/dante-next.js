import { EXTERNAL_LINKS } from "@/app/data/site-data";

export default function Mission() {
  return (
    <section className="bg-white py-16 px-4 md:px-8 border-b border-border">
      <div className="mx-auto max-w-[var(--container-max)]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
            Mission
          </h2>
          <p className="mt-4 text-lg md:text-xl text-text-body font-medium leading-relaxed">
            Our mission is to advance the field of orthodontics and improve the quality of life for our patients and the communities in which they live.
          </p>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16">
          <div className="w-full max-w-xs text-center opacity-70 transition-opacity hover:opacity-100">
            <div className="text-2xl font-bold text-teal leading-tight">
              DANTE GONZALES
              <br />
              <span className="text-navy text-xl">ORTHODONTICS</span>
            </div>
          </div>
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-navy">
              Want to know if you’re a candidate for braces or Invisalign?
            </h3>
            <p className="mt-3 text-text-body">
              Take Our 30-Second Quiz Now To Find Out!
            </p>
            <div className="mt-6">
              <a
                href={EXTERNAL_LINKS.smileQuiz}
                className="inline-flex rounded-none bg-gold px-8 py-3.5 text-sm font-semibold text-navy transition-colors duration-200 hover:bg-gold-hover sm:text-base"
              >
                Take Quiz Now!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
