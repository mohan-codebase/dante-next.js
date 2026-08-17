import { EXTERNAL_LINKS, LOCATIONS } from "@/app/data/site-data";

export default function Top10Things() {
  return (
    <section className="bg-offwhite py-16 px-4 md:px-8 border-t border-border">
      <div className="mx-auto max-w-[var(--container-max)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Info and Download CTA */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
              The Top 10 Things
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-navy leading-tight">
              You Should Know Before Choosing Your Dublin Or Tracy, CA Orthodontist
            </h2>
            <p className="text-text-body text-lg leading-relaxed">
              We want you to feel confident when you choose your Dublin or Tracy, CA orthodontist. To help you make an informed decision, Dr. Gonzales wrote this free report for you. If you are searching for the most qualified and caring Dublin or Tracy orthodontist for yourself or your loved ones, you are in the right place.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
              <div className="w-32 h-40 bg-white border border-border shadow-sm flex items-center justify-center p-4">
                {/* Book placeholder */}
                <div className="text-center font-bold text-teal text-xs">
                  TOP 10<br/>THINGS<br/>TO KNOW
                </div>
              </div>
              <a
                href="/404"
                className="inline-flex rounded-none border-2 border-teal bg-white px-8 py-3.5 text-sm font-semibold text-teal transition-colors duration-200 hover:bg-teal hover:text-white sm:text-base text-center"
              >
                Instantly Download Now
              </a>
            </div>
          </div>

          {/* Right Column: Info points (simplified from tabs) */}
          <div className="bg-white p-8 border border-border shadow-sm h-full flex flex-col justify-center space-y-6">
            <h3 className="text-2xl font-bold text-navy mb-4">Why you are here:</h3>
            
            <ul className="space-y-4 text-text-body font-medium">
              <li className="flex items-start gap-3">
                <span className="text-teal mt-1">➔</span>
                <span>You want to learn more about braces & orthodontics for yourself or your child.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal mt-1">➔</span>
                <span>You want to find out if you are a candidate for Invisalign.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal mt-1">➔</span>
                <span>You were referred to Dante Gonzales Orthodontics.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal mt-1">➔</span>
                <span>You are interested in a second opinion with a Dublin orthodontist.</span>
              </li>
            </ul>

            <div className="pt-6 mt-6 border-t border-border">
              <a
                href={EXTERNAL_LINKS.appointment}
                className="inline-flex rounded-none bg-gold px-8 py-3.5 text-sm font-semibold text-navy transition-colors duration-200 hover:bg-gold-hover sm:text-base"
              >
                Make Appointment
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
