import Link from "next/link";
import { SOCIAL_LINKS } from "@/app/data/site-data";

export default function Footer() {
  return (
    <footer className="bg-[#f9f9f9] text-navy border-t border-border" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--section-pad-x)] pb-8 pt-16 lg:pt-24">
        {/* Top Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Column 1: About */}
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-navy">
                ABOUT
              </h3>
              <div className="mt-2 h-0.5 w-8 bg-gold"></div>
            </div>
            
            <p className="text-sm leading-relaxed text-navy/80 font-medium">
              We want you to feel confident when you choose your Dublin or Tracy, CA orthodontist. To help you make an informed decision, Dr. Gonzales wrote this free report for you.
            </p>
            
            <div className="pt-2">
              <h4 className="text-sm font-bold uppercase tracking-wider text-navy mb-4">
                OPENING HOURS
              </h4>
              <ul className="space-y-3 text-sm text-navy/80 font-medium">
                <li className="flex justify-between border-b border-navy/10 pb-2">
                  <span>Mon and Thur :</span>
                  <span>8.30 am - 6.00 pm</span>
                </li>
                <li className="flex justify-between border-b border-navy/10 pb-2">
                  <span>Tues - Wed :</span>
                  <span>7.30 am - 5.30 pm</span>
                </li>
                <li className="flex justify-between border-b border-navy/10 pb-2">
                  <span>Friday :</span>
                  <span>8.00 am - 4.00 pm</span>
                </li>
                <li className="flex justify-between border-b border-navy/10 pb-2">
                  <span>Saturday :</span>
                  <span>8.30 am - 1.30 pm</span>
                </li>
                <li className="flex justify-between pt-1 items-center">
                  <span>Sun :</span>
                  <span className="bg-gold text-white px-3 py-0.5 rounded-full text-xs font-semibold">Closed</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-navy">
                QUICK LINKS
              </h3>
              <div className="mt-2 h-0.5 w-8 bg-gold"></div>
            </div>
            
            <ul className="space-y-4">
              {[
                { label: "Home", href: "/" },
                { label: "Meet Our Orthodontists", href: "/404" },
                { label: "Braces & Invisalign", href: "/404" },
                { label: "Why Dante Gonzales Orthodontics?", href: "/404" },
                { label: "Before & Afters", href: "/404" },
                { label: "Blogs", href: "/404" },
                { label: "Contact Us", href: "/404" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-sm font-bold text-navy transition-colors hover:text-navy/70"
                  >
                    <svg className="mr-3 h-4 w-4 text-navy transition-colors group-hover:text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-navy">
                CONTACT
              </h3>
              <div className="mt-2 h-0.5 w-8 bg-gold"></div>
            </div>
            
            <ul className="space-y-6">
              {/* Phone */}
              <li className="flex gap-4">
                <div className="shrink-0 mt-1">
                  <svg className="h-5 w-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.4-1.2-.6-2.4-.6-3.6 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM19 12h2a9 9 0 00-9-9v2c3.9 0 7.1 3.1 7.1 7.1zM15 12h2c0-2.8-2.2-5-5-5v2c1.7 0 3 .1 3 3z" />
                  </svg>
                </div>
                <div className="w-full">
                  <h4 className="text-sm font-bold text-navy">PHONE</h4>
                  <div className="mt-2 space-y-3 text-sm font-medium text-navy/80">
                    <p><a href="tel:9258282244" className="hover:text-navy hover:underline">Dublin - 925-828-2244</a></p>
                    <p className="border-b border-navy/10 pb-5"><a href="tel:2098350977" className="hover:text-navy hover:underline">Tracy - 209-835-0977</a></p>
                  </div>
                </div>
              </li>
              
              {/* Email */}
              <li className="flex gap-4 pt-1">
                <div className="shrink-0 mt-1">
                  <svg className="h-5 w-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div className="w-full">
                  <h4 className="text-sm font-bold text-navy">EMAIL</h4>
                  <div className="mt-2 space-y-3 text-sm font-medium text-navy/80 border-b border-navy/10 pb-5">
                    <p><a href="mailto:info@drdantegonzales.com" className="hover:text-navy hover:underline">info@drdantegonzales.com</a></p>
                    <p><a href="mailto:TracyInfo@drdantegonzales.com" className="hover:text-navy hover:underline">TracyInfo@drdantegonzales.com</a></p>
                  </div>
                </div>
              </li>
              
              {/* Map Dublin */}
              <li className="flex gap-4 pt-1">
                <div className="shrink-0 mt-1">
                  <svg className="h-5 w-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div className="w-full">
                  <p className="text-sm font-bold text-navy border-b border-navy/10 pb-5 leading-relaxed">
                    DANTE GONZALES ORTHODONTICS DR. DANTE A. GONZALES 4532 DUBLIN BLVD, DUBLIN, CA 94568
                  </p>
                </div>
              </li>
              
              {/* Map Tracy */}
              <li className="flex gap-4 pt-1">
                <div className="shrink-0 mt-1">
                  <svg className="h-5 w-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div className="w-full">
                  <p className="text-sm font-bold text-navy leading-relaxed">
                    DANTE GONZALES ORTHODONTICS DR. DANTE A. GONZALES 1417 N TRACY BLVD, TRACY, CA 95376
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Logos */}
          <div className="space-y-6 flex flex-col items-start lg:items-end">
             <div className="flex flex-col gap-6 w-full max-w-[220px]">
                <a href="/404">
                  <img src="https://drdantegonzales.com/assets/img/logos/footer1.png" alt="AAO" className="w-full h-auto" />
                </a>
                <a href="/404">
                  <img src="https://drdantegonzales.com/assets/img/logos/footer2.png" alt="ADA" className="w-full h-auto" />
                </a>
                <a href="/404">
                  <img src="https://drdantegonzales.com/assets/img/logos/footer3.png" alt="ABO" className="w-full h-auto" />
                </a>
                <a href="/404">
                  <img src="https://drdantegonzales.com/assets/img/logos/footer4.png" alt="Smiles Change Lives" className="w-full h-auto" />
                </a>
                <a href="/404">
                  <img src="https://drdantegonzales.com/assets/img/logos/footer5.png" alt="Sharecare" className="w-full h-auto" />
                </a>
             </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-20 text-center">
          <h4 className="text-sm font-bold text-navy mb-6">Social Links</h4>
          <div className="flex justify-center gap-6">
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform hover:scale-110"
              aria-label="Instagram"
            >
              <img src="https://drdantegonzales.com/assets/img/insta-logo.png" alt="Instagram" className="w-14 h-14 object-contain rounded-xl overflow-hidden" />
            </a>
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform hover:scale-110"
              aria-label="Facebook"
            >
              <img src="https://drdantegonzales.com/assets/img/Facebook-logo.png" alt="Facebook" className="w-14 h-14 object-contain rounded-xl overflow-hidden" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-navy/10 pt-8 sm:flex-row">
          <p className="text-sm text-navy/80 font-medium">
            &copy; 2024 Dante Gonzales Orthodontics
          </p>
          <div className="flex gap-6 text-sm text-navy font-bold">
            <a href="/404" className="transition-colors hover:text-navy/70">Terms of user</a>
            <a href="/404" className="transition-colors hover:text-navy/70">Site Map</a>
            <a href="/404" className="transition-colors hover:text-navy/70">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
