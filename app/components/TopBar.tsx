import React from "react";
import { EXTERNAL_LINKS } from "@/app/data/site-data";

export default function TopBar() {
  return (
    <div className="hidden xl:flex w-full bg-white border-b border-gray-100 text-sm relative z-50">
      <div className="mx-auto flex w-full max-w-[var(--container-max)] items-center justify-between px-[var(--section-pad-x)]">
        
        {/* Left Side: Contact Info (Single Line) */}
        <div className="flex items-center text-[12px] font-medium text-navy/80">
          
          <a href="mailto:info@drdantegonzales.com" className="flex items-center gap-2 hover:text-gold transition-colors py-3">
            <svg className="w-3.5 h-3.5 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            info@drdantegonzales.com
          </a>
          
          <span className="mx-4 h-4 w-px bg-gray-300"></span>
          
          <a href="mailto:tracyInfo@drdantegonzales.com" className="flex items-center gap-2 hover:text-gold transition-colors py-3">
            <svg className="w-3.5 h-3.5 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            tracyInfo@drdantegonzales.com
          </a>

          <span className="mx-4 h-4 w-px bg-gray-300"></span>

          <a href="tel:9258282244" className="flex items-center gap-2 hover:text-gold transition-colors py-3">
            <svg className="w-3.5 h-3.5 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Dublin – 925-828-2244
          </a>

          <span className="mx-4 h-4 w-px bg-gray-300"></span>

          <a href="tel:2098350977" className="flex items-center gap-2 hover:text-gold transition-colors py-3">
            <svg className="w-3.5 h-3.5 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Tracy – 209-835-0977
          </a>
          
      </div>

        {/* Right Side: Action Links */}
        <div className="flex items-center gap-6 text-[11px] font-bold text-gold uppercase tracking-wider">
          <a
            href={EXTERNAL_LINKS?.appointment || "/404"}
            className="group flex items-center gap-1.5 hover:text-navy transition-colors py-3"
          >
            Request Consultation
            <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="/404"
            className="group flex items-center gap-1.5 hover:text-navy transition-colors py-3"
          >
            Video Appointment
            <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
