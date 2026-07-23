import { useState } from "react";
import { Compass, Eye, Heart, BookOpen, Quote, Shield } from "lucide-react";
import { BRAND_INFO } from "../data";

export default function AboutJourney() {
  const [activeTab, setActiveTab] = useState<"story" | "philosophy">("story");

  return (
    <section id="journey" className="py-20 bg-white text-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Three Words defining Brand Banner */}
        <div className="mb-16 rounded-3xl bg-violet-deep text-white p-8 sm:p-12 border border-violet-royal/20 shadow-xl relative overflow-hidden text-center">
          <div className="absolute -left-20 -top-20 w-48 h-48 rounded-full bg-violet-royal/30 blur-2xl pointer-events-none" />
          <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gold-muted/10 blur-2xl pointer-events-none" />
          
          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-gold-muted font-bold block mb-2">Three Words That Define This Brand</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide">
            Divine <span className="text-gold-muted">•</span> Clarity <span className="text-gold-muted">•</span> Transformation
          </h2>
          
          {/* Central quote */}
          <div className="mt-8 max-w-2xl mx-auto border-t border-violet-royal/30 pt-8 flex flex-col items-center">
            <Quote className="w-8 h-8 text-gold-muted opacity-40 mb-3" />
            <p className="font-display text-lg sm:text-xl italic font-light text-lavender-brand">
              &ldquo;{BRAND_INFO.quote}&rdquo;
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Navigation and Interactive tabs */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-violet-royal font-bold">The Spiritual Guide</span>
              <h3 className="font-display text-3xl font-bold text-violet-deep mt-1">Meet Shreedivya</h3>
              <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                A compassionate mentor bridging ancient Indian wisdom with modern psychological understanding. Guided by root causes, not predictions.
              </p>
            </div>

            {/* Selector Buttons */}
            <div className="flex flex-col gap-3">
              <button
                onClick={() => setActiveTab("story")}
                className={`w-full p-4 rounded-xl text-left transition-all duration-300 border flex items-center space-x-3 cursor-pointer ${
                  activeTab === "story"
                    ? "bg-violet-deep border-violet-deep text-white shadow-lg shadow-violet-deep/10"
                    : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
                }`}
              >
                <BookOpen className={`w-5 h-5 ${activeTab === "story" ? "text-gold-muted" : "text-violet-royal"}`} />
                <div>
                  <span className="block font-semibold text-sm">My Sacred Calling</span>
                  <span className="block text-[10px] opacity-70">The journey of learning &amp; healing</span>
                </div>
              </button>

              <button
                onClick={() => setActiveTab("philosophy")}
                className={`w-full p-4 rounded-xl text-left transition-all duration-300 border flex items-center space-x-3 cursor-pointer ${
                  activeTab === "philosophy"
                    ? "bg-violet-deep border-violet-deep text-white shadow-lg shadow-violet-deep/10"
                    : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Compass className={`w-5 h-5 ${activeTab === "philosophy" ? "text-gold-muted" : "text-violet-royal"}`} />
                <div>
                  <span className="block font-semibold text-sm">Vision &amp; Philosophy</span>
                  <span className="block text-[10px] opacity-70">Why and how we guide others</span>
                </div>
              </button>
            </div>

            {/* Quick Profile Bio Highlight */}
            <div className="p-5 rounded-2xl bg-gradient-to-tr from-violet-royal/5 to-gold-muted/5 border border-violet-royal/10 text-center">
              <span className="text-2xl block mb-2">🕉️</span>
              <span className="text-xs font-bold text-violet-deep block">Atmavalokana</span>
              <p className="text-[10px] text-gray-500 font-mono italic mt-1">&ldquo;Divine self / soul introspection&rdquo;</p>
            </div>
          </div>

          {/* Right Column: Tab Content */}
          <div className="lg:col-span-8 bg-gray-50 rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm min-h-[420px] transition-all duration-300">
            {activeTab === "story" ? (
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-violet-royal font-bold">Why I Started This Journey</h4>
                  <h5 className="font-display text-2xl font-bold text-violet-deep mt-1">A Call to Serve Others</h5>
                </div>
                
                <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line font-light">
                  {BRAND_INFO.personalNote}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                  <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                    <span className="text-xs font-bold text-violet-royal block mb-1">My Journey</span>
                    <p className="text-xs text-gray-600 leading-relaxed font-light">{BRAND_INFO.journey.content}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                    <span className="text-xs font-bold text-violet-royal block mb-1">Impact</span>
                    <p className="text-xs text-gray-600 leading-relaxed font-light">{BRAND_INFO.journey.impact}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-violet-royal font-bold">Vision &amp; Values</h4>
                  <h5 className="font-display text-2xl font-bold text-violet-deep mt-1">Practical, Trustworthy Guidance</h5>
                </div>

                <div className="p-5 rounded-xl bg-violet-deep text-white border border-violet-royal/20">
                  <p className="text-sm font-light leading-relaxed">
                    <strong className="text-gold-muted block text-xs uppercase tracking-wider mb-1">Core Vision</strong>
                    &ldquo;{BRAND_INFO.vision}&rdquo;
                  </p>
                </div>

                {/* Core Values grid */}
                <div className="space-y-3">
                  <h6 className="text-xs uppercase tracking-widest text-gray-400 font-bold">Our Core Brand Personality</h6>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {BRAND_INFO.coreValues.map((val) => (
                      <div 
                        key={val.name}
                        className="p-3 bg-white border border-gray-200 rounded-xl hover:border-violet-royal/30 transition-colors"
                      >
                        <span className="block font-semibold text-xs text-violet-deep">{val.name}</span>
                        <span className="block text-[10px] text-gray-500 mt-1 leading-normal font-light">{val.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Philosophy and target */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-gold-muted shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs font-bold text-violet-deep">Who This Is For</span>
                      <p className="text-[11px] text-gray-600 leading-normal mt-1 font-light italic">
                        &ldquo;Anyone who's ready for transformation &mdash; I'm ready to guide them. I can't change anyone's life, but I can always guide someone who's ready.&rdquo;
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Eye className="w-5 h-5 text-gold-muted shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs font-bold text-violet-deep">Root Philosophy</span>
                      <p className="text-[11px] text-gray-600 leading-normal mt-1 font-light">
                        {BRAND_INFO.journey.philosophy}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
