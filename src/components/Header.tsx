import { useState } from "react";
import { Sparkles, Moon, Menu, X, Calendar, MessageCircle } from "lucide-react";
import { BRAND_INFO } from "../data";

interface HeaderProps {
  onBookClick: () => void;
  onIntrospectClick: () => void;
}

export default function Header({ onBookClick, onIntrospectClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-violet-deep/90 backdrop-blur-md border-b border-violet-royal/30 text-white transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand Name */}
          <div 
            onClick={() => scrollToSection("home")}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gold-muted/10 border border-gold-muted/30 group-hover:border-gold-muted transition-colors">
              <Sparkles className="w-5 h-5 text-gold-muted animate-pulse" />
              <div className="absolute inset-0 rounded-full border border-gold-muted/10 scale-125 animate-ping opacity-30" />
            </div>
            <div>
              <span className="font-display text-xl font-semibold tracking-wider text-white group-hover:text-gold-muted transition-colors">
                {BRAND_INFO.name}
              </span>
              <p className="text-[10px] tracking-widest text-lavender-brand/70 uppercase">
                {BRAND_INFO.tagline}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <button 
              onClick={() => scrollToSection("journey")}
              className="text-lavender-brand/80 hover:text-gold-muted transition-colors cursor-pointer"
            >
              Our Story
            </button>
            <button 
              onClick={() => scrollToSection("modalities")}
              className="text-lavender-brand/80 hover:text-gold-muted transition-colors cursor-pointer"
            >
              Modalities
            </button>
            <button 
              onClick={() => scrollToSection("services")}
              className="text-lavender-brand/80 hover:text-gold-muted transition-colors cursor-pointer"
            >
              Offers
            </button>
            <button 
              onClick={onIntrospectClick}
              className="text-lavender-brand/80 hover:text-gold-muted transition-colors cursor-pointer flex items-center space-x-1"
            >
              <Moon className="w-3.5 h-3.5 text-gold-muted" />
              <span>Self-Introspection</span>
            </button>
            <button 
              onClick={() => scrollToSection("faq")}
              className="text-lavender-brand/80 hover:text-gold-muted transition-colors cursor-pointer"
            >
              FAQs
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://instagram.com/divya.atmavalokana" 
              target="_blank" 
              rel="noreferrer"
              className="text-xs text-lavender-brand/70 hover:text-gold-muted flex items-center space-x-1 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>{BRAND_INFO.bioHeader}</span>
            </a>
            <button
              onClick={onBookClick}
              className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-gold-muted to-yellow-600 text-violet-deep font-semibold text-xs uppercase tracking-wider hover:shadow-lg hover:shadow-gold-muted/20 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer border border-gold-muted/30"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book 1:1 Session</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-lavender-brand hover:text-gold-muted focus:outline-none transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-violet-deep border-b border-violet-royal/30 px-4 pt-2 pb-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3">
            <button
              onClick={() => scrollToSection("journey")}
              className="text-left text-sm font-medium text-lavender-brand/90 hover:text-gold-muted py-2 transition-colors border-b border-violet-royal/10"
            >
              Our Story
            </button>
            <button
              onClick={() => scrollToSection("modalities")}
              className="text-left text-sm font-medium text-lavender-brand/90 hover:text-gold-muted py-2 transition-colors border-b border-violet-royal/10"
            >
              Modalities
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-left text-sm font-medium text-lavender-brand/90 hover:text-gold-muted py-2 transition-colors border-b border-violet-royal/10"
            >
              Offers
            </button>
            <button
              onClick={() => {
                onIntrospectClick();
                setIsOpen(false);
              }}
              className="text-left text-sm font-medium text-lavender-brand/90 hover:text-gold-muted py-2 flex items-center space-x-2 transition-colors border-b border-violet-royal/10"
            >
              <Moon className="w-4 h-4 text-gold-muted" />
              <span>Atma Introspection Guide</span>
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-left text-sm font-medium text-lavender-brand/90 hover:text-gold-muted py-2 transition-colors border-b border-violet-royal/10"
            >
              FAQs
            </button>
          </nav>
          
          <div className="pt-2 flex flex-col space-y-3">
            <a 
              href="https://instagram.com/divya.atmavalokana" 
              target="_blank" 
              rel="noreferrer"
              className="text-xs text-lavender-brand/70 hover:text-gold-muted flex items-center space-x-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-gold-muted" />
              <span>Follow {BRAND_INFO.bioHeader}</span>
            </a>
            <button
              onClick={() => {
                onBookClick();
                setIsOpen(false);
              }}
              className="w-full flex items-center justify-center space-x-2 px-5 py-3 rounded-full bg-gradient-to-r from-gold-muted to-yellow-600 text-violet-deep font-semibold text-xs uppercase tracking-wider hover:shadow-lg transition-all active:scale-95 duration-200"
            >
              <Calendar className="w-4 h-4" />
              <span>Book 1:1 Session</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
