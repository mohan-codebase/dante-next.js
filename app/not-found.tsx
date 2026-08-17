import Link from 'next/link';
import { type Metadata } from 'next';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Footer from './components/Footer';
import AnimatedStrip from './components/AnimatedStrip';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <>
      <TopBar />
      <Header />
      
      <main className="flex-1 flex flex-col bg-offwhite relative overflow-hidden py-12 md:py-24 min-h-[80vh]">
        
        {/* Decorative Structural Grid Lines (Swiss Modernism Style) */}
        <div className="absolute inset-0 pointer-events-none flex justify-center z-0">
          <div className="w-full max-w-[var(--container-max)] px-[var(--section-pad-x)] h-full grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="border-l border-navy/[0.04] h-full" />
            <div className="border-l border-navy/[0.04] h-full" />
            <div className="border-l border-navy/[0.04] h-full hidden md:block" />
            <div className="border-x border-navy/[0.04] h-full hidden md:block" />
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center items-start max-w-[var(--container-max)] mx-auto w-full px-[var(--section-pad-x)] relative z-10">
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 w-full items-start md:items-end">
            
            {/* Massive Typography */}
            <h1 className="text-[9rem] sm:text-[12rem] md:text-[16rem] lg:text-[22rem] font-bold text-navy leading-none tracking-tighter font-poppins -ml-2 md:-ml-4">
              404
            </h1>
            
            {/* Content Block */}
            <div className="pb-4 md:pb-12 lg:pb-16 max-w-lg">
              <div className="h-1.5 w-16 bg-gold mb-8"></div>
              <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6 font-poppins leading-tight">
                Looks like you're lost.
              </h2>
              <p className="text-lg md:text-xl text-text-muted mb-10 font-medium leading-relaxed">
                The page you are looking for has been moved, renamed, or doesn't exist anymore. Let's get you back on track.
              </p>
              
              <Link 
                href="/" 
                className="inline-flex items-center justify-between group px-8 py-4 bg-gold text-navy font-bold text-sm tracking-widest uppercase transition-colors duration-300 hover:bg-gold-hover rounded-none w-full sm:w-auto"
              >
                <span>Return to Homepage</span>
                <svg className="w-5 h-5 ml-8 transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            
          </div>
        </div>
      </main>
      
      <AnimatedStrip />
      
      <Footer />
    </>
  );
}
