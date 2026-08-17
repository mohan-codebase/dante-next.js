import { EXTERNAL_LINKS, PRACTICE } from "@/app/data/site-data";

export default function BookSection() {
  return (
    <section className="bg-white py-20 px-4 md:px-8">
      <div className="mx-auto max-w-[var(--container-max)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Book Image */}
          <div className="flex justify-center lg:justify-end pr-0 lg:pr-8">
            <img 
              src="https://drdantegonzales.com/assets/img/dante-confident-book-new.png" 
              alt="Setting Them Straight Book" 
              className="max-w-full h-auto drop-shadow-2xl hover:-translate-y-2 transition-transform duration-500"
              style={{ maxHeight: "600px" }}
            />
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold text-text-muted mb-2">
                Setting Them Straight:
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy leading-tight uppercase">
                The Fact-Based Guide to a Spectacular Smile Through Orthodontics
              </h2>
            </div>
            
            <p className="text-text-body text-base leading-relaxed">
              Dr. Gonzales's book, "Setting Them Straight: The Fact-Based Guide to a Spectacular Smile through Orthodontics", dives straight into the world of orthodontics, explaining what these specialists can and can't do to help solve your problems. In this book, you'll learn about many things, including:
            </p>

            <ul className="space-y-4 pt-2">
              {[
                "The difference between a general dentist and an orthodontist",
                "The history behind orthodontics",
                "Types of appliances used to treat common teeth and jaw issues",
                "How orthodontic procedures can treat seemingly unrelated issues, such as sleep apnea."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4 text-text-body">
                  <span className="text-gold mt-1 shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <a
                href={PRACTICE.bookAmazonUrl || "https://www.amazon.com/Setting-Them-Straight-Spectacular-Orthodontics/dp/1599328305"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-gold text-navy font-bold text-sm tracking-wider uppercase px-8 py-4 transition-colors hover:bg-gold hover:text-white"
              >
                Review It On Amazon
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
