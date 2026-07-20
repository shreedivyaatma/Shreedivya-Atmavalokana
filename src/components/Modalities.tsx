import { useState } from "react";
import { Sparkles, Compass, BookOpen, Flame, Heart, Moon, ArrowUpRight, X } from "lucide-react";
import { MODALITIES } from "../data";
import { Modality } from "../types";

export default function Modalities() {
  const [selectedModality, setSelectedModality] = useState<Modality | null>(null);

  const getIcon = (id: string) => {
    switch (id) {
      case "tarot":
        return <Sparkles className="w-6 h-6 text-gold-muted animate-pulse" />;
      case "karmic-blueprint":
        return <Compass className="w-6 h-6 text-gold-muted animate-spin-slow" />;
      case "akashic-records":
        return <BookOpen className="w-6 h-6 text-gold-muted" />;
      case "energy-healing":
        return <Flame className="w-6 h-6 text-gold-muted" />;
      case "ancestral-inner-child":
        return <Heart className="w-6 h-6 text-gold-muted" />;
      case "regression-hypnotherapy":
        return <Moon className="w-6 h-6 text-gold-muted" />;
      default:
        return <Sparkles className="w-6 h-6 text-gold-muted" />;
    }
  };

  return (
    <section id="modalities" className="py-20 bg-violet-deep text-white relative overflow-hidden">
      {/* Background flare */}
      <div className="absolute -top-40 right-0 w-96 h-96 rounded-full bg-violet-royal/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 left-0 w-96 h-96 rounded-full bg-lavender-brand/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-violet-royal/40 border border-violet-royal/60 text-xs font-semibold text-gold-muted uppercase tracking-widest">
            <span>Our Sacred Toolset</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 leading-tight">
            Integrated Healing Modalities
          </h2>
          <p className="text-lavender-brand/80 text-sm sm:text-base font-light mt-4">
            We don&apos;t treat symptoms. We address the energetic, ancestral, and subconscious roots shaping your daily lifelines. Select a modality to read its deeper purpose.
          </p>
        </div>

        {/* Modalities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MODALITIES.map((mod) => (
            <div 
              key={mod.id}
              onClick={() => setSelectedModality(mod)}
              className="group relative rounded-3xl bg-indigo-950/40 hover:bg-indigo-950/80 border border-violet-royal/30 hover:border-gold-muted/40 p-6 sm:p-8 transition-all duration-300 shadow-xl cursor-pointer flex flex-col justify-between hover:-translate-y-1"
            >
              {/* Card top flare */}
              <div className="absolute top-0 right-0 w-16 h-16 rounded-bl-3xl bg-gradient-to-bl from-gold-muted/5 to-transparent group-hover:from-gold-muted/10 transition-colors" />

              <div className="space-y-4">
                <div className="inline-flex items-center justify-center p-3.5 rounded-2xl bg-violet-deep/60 border border-violet-royal/50">
                  {getIcon(mod.id)}
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-white group-hover:text-gold-muted transition-colors">
                    {mod.title}
                  </h3>
                  <p className="text-[10px] uppercase font-semibold text-lavender-brand/70 tracking-widest mt-1">
                    {mod.subtitle}
                  </p>
                </div>
                <p className="text-xs text-lavender-brand/80 font-light leading-relaxed">
                  {mod.description}
                </p>
              </div>

              <div className="pt-6 flex items-center justify-between border-t border-violet-royal/15 mt-6 text-xs text-gold-muted font-medium">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest text-[10px]">Explore philosophy</span>
                <span className="flex items-center space-x-1 font-mono text-[10px] uppercase text-lavender-brand/50 group-hover:text-gold-muted">
                  <span>View Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Details Modal (Overlay) */}
        {selectedModality && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-violet-deep/80 backdrop-blur-md">
            <div 
              className="relative w-full max-w-2xl bg-indigo-950/95 border border-gold-muted/30 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-y-auto max-h-[90vh] animate-float"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedModality(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-violet-deep border border-violet-royal/40 text-lavender-brand hover:text-gold-muted hover:border-gold-muted/40 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6 pt-2">
                <div className="inline-flex items-center justify-center p-4 rounded-3xl bg-violet-deep border border-violet-royal/60">
                  {getIcon(selectedModality.id)}
                </div>

                <div>
                  <span className="text-[10px] tracking-widest uppercase font-bold text-gold-muted block">
                    {selectedModality.subtitle}
                  </span>
                  <h3 className="font-display text-3xl font-bold text-white mt-1">
                    {selectedModality.title}
                  </h3>
                </div>

                <div className="p-4 bg-violet-deep/60 rounded-2xl border border-violet-royal/40">
                  <p className="text-xs text-lavender-brand uppercase tracking-widest font-bold mb-1">Our Core Approach</p>
                  <p className="text-sm italic text-white/95 leading-relaxed font-light">
                    &ldquo;{selectedModality.details}&rdquo;
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-lavender-brand/60">Full Description &amp; Healing Focus</h4>
                  <p className="text-sm text-lavender-brand/90 leading-relaxed font-light whitespace-pre-line">
                    {selectedModality.fullCopy}
                  </p>
                </div>

                <div className="pt-6 border-t border-violet-royal/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-left text-xs text-lavender-brand/60 font-light flex items-center space-x-2">
                    <span>🕉️</span>
                    <span>Confidential root-cause soul guidance.</span>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedModality(null);
                      const element = document.getElementById("booking");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-gold-muted to-yellow-600 text-violet-deep font-bold text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-transform cursor-pointer"
                  >
                    Select this for my 1:1 Session
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
