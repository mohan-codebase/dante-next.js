import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

export default function WelcomeLetter() {
  return (
    <section className="bg-white py-16 px-4 md:px-8 border-b border-border">
      <div className="mx-auto max-w-[var(--container-max)] flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide">
            <span className="text-navy">DANTE GONZALES </span>
            <span className="text-gold">ORTHODONTICS</span>
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="h-0.5 w-12 bg-gold"></div>
          </div>
          <p className="mt-6 text-sm md:text-base text-text-body max-w-4xl mx-auto leading-relaxed">
            Join The 12,000 Smiles Transformed With Invisalign & Braces In Dublin, Pleasanton, San Ramon, Danville, Livermore,
            <br className="hidden md:block" />
            Castro Valley, Tracy, San Leandro, Hayward & Fremont, California (CA), Manteca, Lathrop, Stockton, Patterson.
          </p>
        </div>

        {/* Letter */}
        <div className="max-w-4xl w-full text-text-body space-y-6 text-base md:text-lg leading-relaxed">
          <h3 className="text-xl md:text-2xl font-bold text-navy mb-4">Dear Friend,</h3>
          
          <p>
            When I talk about braces, not only do I speak from my years of experience, extensive training, and education, but also with the understanding that I gained from my own time spent in braces. I know firsthand how it feels to wear braces, because I wore them when I was younger. Seeing the confidence in someone&apos;s new smile reminds me of how I felt after I was done with my orthodontic treatment and it&apos;s incredibly rewarding.
          </p>
          
          <p>
            As the sole orthodontist and dentist on the advisory board of Sharecare.com, a company founded by Dr. Oz and Jeff Arnold (founder of WebMD), I get to help thousands of people get their dental and orthodontic questions answered with accurate information. As a board-certified orthodontist, I have had professional athletes put their trust in me to bring out their greatest smiles. Since 1998, I have transformed over 12,000 smiles, and I can&apos;t wait to show you what a beautiful smile can do for you.
          </p>
          
          <p>
            With same-day appointments available and the option to receive same-day braces after your initial consultation, you can be on your way to a stunning smile sooner than you think. Every time one of our patients walks out of our office for the last time, they leave with confidence because their smile is backed by the Gonzales Lifetime Guarantee. Not only are we going to transform your smile, but we can get you out of braces faster than ever with our accelerated treatments. We can&apos;t wait to meet you!
          </p>
          
          <p>
            Come experience the difference at Dante Gonzales Orthodontics. We use only top of the line braces, and Invisalign along with the best customer service possible. Orthodontics is our expertise, but customer service and helping people is our passion. We serve patient in and around Dublin, Pleasanton, San Ramon, Danville, Livermore, Castro Valley, Tracy, San Leandro, Hayward, and Fremont, California (CA), Manteca, Stockton, and Lathrop to the cities
          </p>
          
          <div className="mt-8 flex items-center gap-3">
            <p className="text-text-body">To your new smile,</p>
            <div className={`text-4xl md:text-5xl text-navy ${greatVibes.className}`}>
              Dr. Gonzales
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
