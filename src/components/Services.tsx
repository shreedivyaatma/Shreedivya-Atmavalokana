import { User, Users, BookOpen, GraduationCap, Mic, Sparkles, Check } from "lucide-react";
import { SERVICE_OFFERS } from "../data";

interface ServicesProps {
  onBookClick: () => void;
}

export default function Services({ onBookClick }: ServicesProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case "User":
        return <User className="w-5 h-5 text-gold-muted" />;
      case "Users":
        return <Users className="w-5 h-5 text-gold-muted" />;
      case "BookOpen":
        return <BookOpen className="w-5 h-5 text-gold-muted" />;
      case "GraduationCap":
        return <GraduationCap className="w-5 h-5 text-gold-muted" />;
      case "Mic":
        return <Mic className="w-5 h-5 text-gold-muted" />;
      default:
        return <Sparkles className="w-5 h-5 text-gold-muted" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            Available Now
          </span>
        );
      case "in-progress":
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 text-amber-400">
            In Progress
          </span>
        );
      case "upcoming":
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-violet-royal/40 border border-violet-royal/60 text-lavender-brand">
            Upcoming
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section id="services" className="py-20 bg-indigo-950 text-white relative overflow-hidden">
      {/* Background flare */}
      <div className="absolute top-20 left-20 w-80 h-80 rounded-full bg-violet-royal/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-gold-muted/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-violet-deep/60 border border-violet-royal/40 text-xs font-semibold text-gold-muted uppercase tracking-widest">
            <span>What We Offer</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 leading-tight">
            Healing Structures &amp; Offerings
          </h2>
          <p className="text-lavender-brand/80 text-sm sm:text-base font-light mt-4">
            Discover our tailored private consultations, experiential workshops, and educational resources designed for deep, permanent pattern realignment.
          </p>
        </div>

        {/* Bento/Grid Offerings layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main 1:1 Offering (The absolute star) */}
          <div className="lg:col-span-7 bg-violet-deep border border-gold-muted/30 rounded-3xl p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden shadow-2xl">
            {/* Top gold line */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-gold-muted to-yellow-600" />
            <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-gold-muted/10 blur-xl pointer-events-none" />

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center justify-center p-3.5 rounded-2xl bg-indigo-950 border border-violet-royal/50">
                  <User className="w-6 h-6 text-gold-muted" />
                </div>
                {getStatusBadge("active")}
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-3xl font-bold text-white">1:1 Deep Dive Introspection Session</h3>
                <p className="text-sm font-semibold text-gold-muted uppercase tracking-widest font-mono">
                  Life Purpose, Karma, &amp; Root-Cause Clearance
                </p>
              </div>

              <p className="text-sm text-lavender-brand/90 font-light leading-relaxed">
                Our core experience. A dedicated 40&ndash;45 minute private video consultation focusing on your ancestral line, karmic blueprint, and deep root-cause integration. Shreedivya connects with your aura to dismantle patterns slowly and fully.
              </p>

              <div className="space-y-3 pt-4 border-t border-violet-royal/20">
                <p className="text-xs uppercase font-bold text-lavender-brand/50 tracking-wider">What&apos;s Included:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-lavender-brand/90">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Confidential Zoom Video Call</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Tarot &amp; Ancestral Mapping</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Custom Integration Practices</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>WhatsApp Check-in Support</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-violet-royal/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="block text-[10px] uppercase font-bold text-lavender-brand/50">Confidential Session</span>
                <span className="block font-display text-xl font-bold text-white">40&ndash;45 Minutes</span>
              </div>
              <button
                onClick={onBookClick}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-gold-muted to-yellow-600 text-violet-deep font-bold text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-transform cursor-pointer"
              >
                Initiate Booking Journey
              </button>
            </div>
          </div>

          {/* Secondary Bento Items (Scroll list/Cards) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {SERVICE_OFFERS.filter(item => item.id !== "sessions").map((item) => (
              <div 
                key={item.id}
                className="bg-indigo-950/60 border border-violet-royal/30 rounded-2xl p-6 hover:border-gold-muted/30 transition-all duration-200 flex items-start space-x-4 relative overflow-hidden shadow-lg group"
              >
                <div className="inline-flex items-center justify-center p-3 rounded-xl bg-violet-deep border border-violet-royal/40 shrink-0 mt-1 group-hover:border-gold-muted/40 transition-colors">
                  {getIcon(item.iconName)}
                </div>

                <div className="space-y-2 flex-1">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h4 className="font-display font-bold text-white text-base group-hover:text-gold-muted transition-colors">
                      {item.title}
                    </h4>
                    {getStatusBadge(item.status)}
                  </div>
                  <p className="text-xs text-lavender-brand/80 font-light leading-relaxed">
                    {item.description}
                  </p>
                  <p className="text-[11px] text-lavender-brand/50 font-light leading-normal italic">
                    {item.extended}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
