import { EXTERNAL_LINKS } from "@/app/data/site-data";

export default function QuizCTA() {
  return (
    <section className="bg-navy py-20 px-4 md:px-8 text-center text-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal rounded-none blur-3xl mix-blend-screen"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold rounded-none blur-3xl mix-blend-screen"></div>
      </div>
      
      <div className="mx-auto max-w-3xl relative z-10 space-y-6">
        <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
          Is Dante Gonzales Orthodontics Right For You?
        </h4>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Answer These Questions To Find Out Now
        </h2>
        <div className="pt-6">
          <a
            href={EXTERNAL_LINKS.smileQuiz}
            className="inline-flex rounded-none bg-gold px-10 py-4 text-base font-semibold text-navy transition-colors duration-200 hover:bg-gold-hover shadow-lg"
          >
            Start Here
          </a>
        </div>
      </div>
    </section>
  );
}
