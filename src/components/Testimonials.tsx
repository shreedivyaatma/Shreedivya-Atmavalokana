import { Star, MessageCircle, Quote } from "lucide-react";
import { TESTIMONIALS, BRAND_INFO } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-violet-deep text-white relative overflow-hidden">
      {/* Background radial soft light */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-royal/10 blur-3xl pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-violet-royal/40 border border-violet-royal/60 text-xs font-semibold text-gold-muted uppercase tracking-widest">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Seekers&apos; Journeys</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 leading-tight">
            Transformative Soul Experiences
          </h2>
          <p className="text-lavender-brand/80 text-sm sm:text-base font-light mt-4">
            Hear from a few of the 500&ndash;700 pure souls guided through their lifelines, relationships, and karmic realignments.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {TESTIMONIALS.map((test) => (
            <div 
              key={test.id}
              className="bg-indigo-950/40 border border-violet-royal/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative shadow-xl hover:border-gold-muted/30 transition-all duration-300"
            >
              {/* Giant quote decoration in bg */}
              <Quote className="absolute right-6 top-6 w-12 h-12 text-violet-royal/20 pointer-events-none" />

              <div className="space-y-4">
                {/* Stars */}
                <div className="flex items-center space-x-1">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold-muted fill-gold-muted" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-xs sm:text-sm text-lavender-brand/90 leading-relaxed font-light italic">
                  &ldquo;{test.text}&rdquo;
                </p>
              </div>

              {/* Seeker Author details */}
              <div className="pt-6 border-t border-violet-royal/20 mt-6 flex items-center space-x-3 text-xs">
                <div className="w-9 h-9 rounded-full bg-violet-royal border border-gold-muted/20 flex items-center justify-center font-bold text-gold-muted text-sm uppercase">
                  {test.name[0]}
                </div>
                <div>
                  <span className="block font-bold text-white">{test.name}</span>
                  <span className="block text-[10px] text-lavender-brand/70 uppercase tracking-widest mt-0.5">{test.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact numbers highlight */}
        <div className="mt-16 text-center border-t border-violet-royal/20 pt-12">
          <p className="text-xs uppercase tracking-widest text-gold-muted font-bold mb-2">Our Cumulative Impact</p>
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-16">
            <div>
              <span className="block font-display text-4xl sm:text-5xl font-extrabold text-white">500+</span>
              <span className="block text-[10px] uppercase text-lavender-brand/50 mt-1">Seekers Guided Offline</span>
            </div>
            <div className="hidden sm:block w-px h-10 bg-violet-royal/30" />
            <div>
              <span className="block font-display text-4xl sm:text-5xl font-extrabold text-white">7+</span>
              <span className="block text-[10px] uppercase text-lavender-brand/50 mt-1">Integrated Modalities</span>
            </div>
            <div className="hidden sm:block w-px h-10 bg-violet-royal/30" />
            <div>
              <span className="block font-display text-4xl sm:text-5xl font-extrabold text-white">100%</span>
              <span className="block text-[10px] uppercase text-lavender-brand/50 mt-1">Confidential &amp; Secure</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
