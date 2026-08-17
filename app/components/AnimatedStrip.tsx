import React from 'react';

const STRIP_ITEMS = [
  "Award-Winning Orthodontics",
  "Braces & Invisalign®",
  "0% Financing Available",
  "Dublin & Tracy Locations",
  "Free Smile Assessment",
  "Top 1% Invisalign Provider",
];

export default function AnimatedStrip() {
  return (
    <div className="relative flex overflow-hidden bg-gold py-2 text-white font-bold text-[10px] sm:text-xs tracking-widest uppercase border-y border-white/20 whitespace-nowrap group">
      <div className="flex w-max animate-marquee items-center">
        {/* Render the items twice to create a seamless infinite loop */}
        {[...Array(2)].map((_, loopIndex) => (
          <div key={loopIndex} className="flex items-center">
            {STRIP_ITEMS.map((item, index) => (
              <React.Fragment key={`${loopIndex}-${index}`}>
                <span className="mx-6 flex items-center gap-2">
                  {/* Small star icon for extra flair */}
                  <svg className="w-3.5 h-3.5 text-white/70" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {item}
                </span>
                <span className="mx-2 opacity-50 text-white">•</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
