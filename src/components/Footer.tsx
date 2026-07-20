import { ShieldAlert, Compass, Mail, Globe, MessageCircle, Heart } from "lucide-react";
import { BRAND_INFO } from "../data";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-violet-deep border-t border-violet-royal/30 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-violet-royal/20">
          
          {/* Logo Brand column */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection("home")}>
              <div className="w-9 h-9 rounded-full bg-gold-muted/10 border border-gold-muted/30 flex items-center justify-center text-gold-muted text-sm font-bold">
                🔱
              </div>
              <div>
                <span className="font-display text-lg font-bold tracking-wider">{BRAND_INFO.name}</span>
                <p className="text-[9px] tracking-widest text-lavender-brand/70 uppercase">{BRAND_INFO.tagline}</p>
              </div>
            </div>
            
            <p className="text-xs text-lavender-brand/80 leading-relaxed font-light">
              Making spirituality practical, approachable, and trustworthy. We guide you to the root energetic, karmic, and subconscious causes of repeating life cycles to assist lasting soul transformation.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a 
                href="https://instagram.com/divya.atmavalokana" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-violet-royal/30 border border-violet-royal/40 hover:border-gold-muted/30 flex items-center justify-center text-lavender-brand hover:text-gold-muted transition-colors cursor-pointer"
                title="Instagram Link"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a 
                href="mailto:shreedivya.atma@gmail.com" 
                className="w-8 h-8 rounded-full bg-violet-royal/30 border border-violet-royal/40 hover:border-gold-muted/30 flex items-center justify-center text-lavender-brand hover:text-gold-muted transition-colors cursor-pointer"
                title="Email Link"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Useful Navigation Links */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h4 className="text-xs uppercase tracking-widest text-gold-muted font-bold font-mono">Quick Navigation</h4>
            <ul className="space-y-2.5 text-xs text-lavender-brand/80">
              <li>
                <button onClick={() => scrollToSection("journey")} className="hover:text-gold-muted cursor-pointer">
                  The Spiritual Journey
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("modalities")} className="hover:text-gold-muted cursor-pointer">
                  Healing Modalities
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("introspection")} className="hover:text-gold-muted cursor-pointer">
                  Interactive Introspection
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="hover:text-gold-muted cursor-pointer">
                  Offerings &amp; Structures
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("booking")} className="hover:text-gold-muted cursor-pointer">
                  Session Booking
                </button>
              </li>
            </ul>
          </div>

          {/* Modalities Fastlinks */}
          <div className="md:col-span-4 space-y-4 text-left">
            <h4 className="text-xs uppercase tracking-widest text-gold-muted font-bold font-mono">Therapies &amp; Focus</h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-lavender-brand/70 font-light">
              <span className="flex items-center space-x-1.5 hover:text-white cursor-pointer" onClick={() => scrollToSection("modalities")}>
                <span>✨</span><span>Tarot Mirrors</span>
              </span>
              <span className="flex items-center space-x-1.5 hover:text-white cursor-pointer" onClick={() => scrollToSection("modalities")}>
                <span>🔱</span><span>Karmic Blueprint</span>
              </span>
              <span className="flex items-center space-x-1.5 hover:text-white cursor-pointer" onClick={() => scrollToSection("modalities")}>
                <span>🕉️</span><span>Akashic Archives</span>
              </span>
              <span className="flex items-center space-x-1.5 hover:text-white cursor-pointer" onClick={() => scrollToSection("modalities")}>
                <span>🧘‍♀️</span><span>Aura Revitalization</span>
              </span>
              <span className="flex items-center space-x-1.5 hover:text-white cursor-pointer" onClick={() => scrollToSection("modalities")}>
                <span>🌸</span><span>Ancestral Blessing</span>
              </span>
              <span className="flex items-center space-x-1.5 hover:text-white cursor-pointer" onClick={() => scrollToSection("modalities")}>
                <span>🌙</span><span>Hypnotic Regression</span>
              </span>
            </div>
          </div>

        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="pt-8 text-left space-y-6">
          {/* Disclaimer (Slide 18 reference / legal disclaimer for wellness brands) */}
          <div className="p-4 rounded-xl bg-violet-deep border border-violet-royal/20 flex items-start space-x-3 text-[10px] text-lavender-brand/60 leading-relaxed font-light">
            <ShieldAlert className="w-5 h-5 text-gold-muted shrink-0 mt-0.5" />
            <p>
              <strong>Healing Disclaimer:</strong> Atma Avalokana spiritual consultations, tarot readings, ancestral healing sessions, and hypnotherapy exercises are designed for therapeutic and spiritual self-discovery purposes. They are supportive in nature and do not claim to replace expert medical diagnoses, psychiatric counsel, or physical healthcare regimes. We do not predict timelines or make absolute destiny promises.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-lavender-brand/50 font-light">
            <p>© 2026 {BRAND_INFO.name}. All rights reserved.</p>
            <p className="flex items-center space-x-1">
              <span>Prepared by Shreya (Brand Manager)</span>
              <span className="text-gold-muted font-bold">•</span>
              <span>Atma Avalokana Brand Guide 2026</span>
              <span className="text-gold-muted font-bold">•</span>
              <Heart className="w-3 h-3 text-gold-muted fill-gold-muted shrink-0" />
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
