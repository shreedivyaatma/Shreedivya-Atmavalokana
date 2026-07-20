import { Sparkles, ArrowRight, ShieldCheck, HeartHandshake, Compass, Users } from "lucide-react";
import { BRAND_INFO } from "../data";

interface HeroProps {
  onBookClick: () => void;
  onIntrospectClick: () => void;
}

export default function Hero({ onBookClick, onIntrospectClick }: HeroProps) {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center bg-violet-deep text-white overflow-hidden py-16 sm:py-24">
      {/* Background Soft Ambient Gradients & Rotating Sacred Geometry */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-violet-royal/20 blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-lavender-brand/10 blur-3xl animate-pulse-glow" />
        
        {/* Sacred Geometry SVG Mandala in background rotating slowly */}
        <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-15 pointer-events-none animate-spin-slow">
          <svg viewBox="0 0 100 100" fill="none" stroke="#cfa853" strokeWidth="0.5" className="w-full h-full">
            <circle cx="50" cy="50" r="45" />
            <circle cx="50" cy="50" r="35" />
            <circle cx="50" cy="50" r="25" />
            <path d="M50,5 L50,95 M5,50 L95,50" />
            <path d="M18.2,18.2 L81.8,81.8 M18.2,81.8 L81.8,18.2" />
            {/* Elegant petal loops */}
            {[...Array(12)].map((_, i) => {
              const angle = (i * 30 * Math.PI) / 180;
              const x1 = 50 + 25 * Math.cos(angle);
              const y1 = 50 + 25 * Math.sin(angle);
              return (
                <circle key={i} cx={x1} cy={y1} r="15" />
              );
            })}
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Text and Actions */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-gold-muted/10 border border-gold-muted/20 text-gold-muted text-xs font-semibold uppercase tracking-widest animate-float">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Divine Introspection & Healing</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Uncover the <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-muted via-lavender-brand to-white">Root Cause</span> of Your Life Patterns
            </h1>
            
            <p className="text-base sm:text-lg text-lavender-brand/85 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              &ldquo;I am here to guide you &mdash; not here to predict your future.&rdquo; Experience practical, trustworthy spirituality through Tarot, Karmic Blueprints, and Deep Ancestral Realignment.
            </p>

            {/* Quick USP Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 text-left max-w-md mx-auto lg:mx-0">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-gold-muted shrink-0" />
                <span className="text-xs text-lavender-brand/90 font-medium">100% Confidential</span>
              </div>
              <div className="flex items-center space-x-2">
                <HeartHandshake className="w-4 h-4 text-gold-muted shrink-0" />
                <span className="text-xs text-lavender-brand/90 font-medium">Personalized 1:1</span>
              </div>
              <div className="flex items-center space-x-2 col-span-2 sm:col-span-1">
                <Compass className="w-4 h-4 text-gold-muted shrink-0" />
                <span className="text-xs text-lavender-brand/90 font-medium">Root-Cause Focus</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onIntrospectClick}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-violet-royal to-indigo-900 border border-violet-royal text-white font-semibold text-sm uppercase tracking-wider shadow-lg hover:shadow-violet-royal/30 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center space-x-2"
              >
                <span>Try Introspection Tool</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={onBookClick}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-gold-muted to-yellow-600 text-violet-deep font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-gold-muted/30 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center space-x-2"
              >
                <span>Book 1:1 Session</span>
              </button>
            </div>

            {/* USP Stat Overlay */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 pt-4 text-lavender-brand/80 border-t border-violet-royal/20">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-violet-royal border border-gold-muted/30 flex items-center justify-center text-[10px] font-bold">✨</div>
                <div className="w-8 h-8 rounded-full bg-indigo-950 border border-gold-muted/30 flex items-center justify-center text-[10px] font-bold">🔱</div>
                <div className="w-8 h-8 rounded-full bg-gold-muted/30 border border-gold-muted/30 flex items-center justify-center text-[10px] font-bold text-white">🕉️</div>
              </div>
              <div className="text-xs text-left">
                <span className="block font-bold text-white text-sm">500–700 Seekers Guided</span>
                <span className="text-[10px] uppercase tracking-widest text-gold-muted font-semibold">Transforming Lives Offline</span>
              </div>
            </div>
          </div>

          {/* Social Bio Profile Highlight Widget */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-3xl bg-gradient-to-b from-indigo-950/90 to-violet-deep/95 p-6 border border-violet-royal/40 shadow-2xl overflow-hidden group">
              {/* Inner ambient flare */}
              <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gold-muted/10 blur-2xl group-hover:bg-gold-muted/15 transition-colors" />
              
              {/* Profile Card Header */}
              <div className="flex items-center space-x-4 pb-6 border-b border-violet-royal/30">
                <div className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-gold-muted via-violet-royal to-lavender-brand p-1 shadow-lg">
                  <div className="w-full h-full rounded-full bg-violet-deep overflow-hidden flex items-center justify-center text-2xl">
                    🧘‍♀️
                  </div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-violet-deep" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white">Shreedivya</h4>
                  <p className="text-xs text-gold-muted font-mono">{BRAND_INFO.bioHeader}</p>
                  <p className="text-[10px] text-lavender-brand/70 uppercase tracking-widest">Spiritual Guide</p>
                </div>
              </div>

              {/* Bio copy and highlights */}
              <div className="py-6 space-y-4">
                <div className="text-sm italic text-lavender-brand leading-relaxed font-light bg-violet-deep/40 p-3 rounded-xl border border-violet-royal/20">
                  &ldquo;Atma Avalokana&rdquo; &mdash; divine self / soul introspection. Guides individuals through profound root-cause healing.
                </div>

                <div className="space-y-2.5">
                  <p className="text-xs text-gold-muted uppercase tracking-widest font-semibold">Guiding you to clarity through:</p>
                  <ul className="grid grid-cols-1 gap-2 text-xs">
                    <li className="flex items-center space-x-2 text-white/90">
                      <span className="text-gold-muted">✨</span>
                      <span>Tarot &amp; Karmic Blueprint</span>
                    </li>
                    <li className="flex items-center space-x-2 text-white/90">
                      <span className="text-gold-muted">✨</span>
                      <span>Hypnotherapy &amp; Regression</span>
                    </li>
                    <li className="flex items-center space-x-2 text-white/90">
                      <span className="text-gold-muted">✨</span>
                      <span>Inner Child &amp; Ancestral Healing</span>
                    </li>
                    <li className="flex items-center space-x-2 text-white/90">
                      <span className="text-gold-muted">📍</span>
                      <span className="text-lavender-brand font-medium">Online Sessions Globally</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Action Button mock */}
              <div className="pt-2">
                <button 
                  onClick={onBookClick}
                  className="w-full py-3 rounded-xl bg-violet-royal/40 hover:bg-violet-royal/60 border border-violet-royal/50 hover:border-gold-muted/40 text-xs text-white uppercase font-bold tracking-widest transition-all cursor-pointer flex items-center justify-center space-x-2"
                >
                  <span>👇 Book Your Session</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
