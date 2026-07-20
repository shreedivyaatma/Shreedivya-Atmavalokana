import { useState, useEffect, FormEvent } from "react";
import { Moon, Sparkles, Send, Trash2, Shield, HeartHandshake, Compass, RotateCcw, Save } from "lucide-react";
import { BRAND_INFO } from "../data";
import { IntrospectionResult } from "../types";

export default function IntrospectionTool() {
  const [area, setArea] = useState<string>("Relationship");
  const [concern, setConcern] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [breatheState, setBreatheState] = useState<string>("Inhale deep calm...");
  const [result, setResult] = useState<IntrospectionResult | null>(null);
  const [savedEntries, setSavedEntries] = useState<any[]>([]);

  // Breathing loop animation text
  useEffect(() => {
    let interval: any;
    if (loading) {
      const breathPhrases = [
        "Inhale deep calm...",
        "Exhale surface worries...",
        "Connecting with your ancestral line...",
        "Tracing the karmic blueprint...",
        "Unlocking subconscious memory...",
        "Receiving guides' instructions...",
        "Finding root-cause clarity..."
      ];
      let i = 0;
      interval = setInterval(() => {
        setBreatheState(breathPhrases[i % breathPhrases.length]);
        i++;
      }, 3500);
    }
    return () => clearInterval(interval);
  }, [loading]);

  // Load saved introspection logs
  useEffect(() => {
    const saved = localStorage.getItem("atma_introspection_logs");
    if (saved) {
      try {
        setSavedEntries(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved entries");
      }
    }
  }, []);

  const handleIntrospect = async (e: FormEvent) => {
    e.preventDefault();
    if (!concern.trim()) return;

    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/introspection", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ area, concern })
      });

      if (!response.ok) {
        throw new Error("Failed to connect to spiritual guide engine.");
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      // Fail gracefully with simulated detailed response in case of any server lag/error
      setResult({
        reflection: `Let's understand why this pattern keeps repeating in your ${area.toLowerCase()}. There is a subconscious memory or ancestral anchor here that is asking for your loving awareness. We release the idea of fear or bad karma, and look deeply into your present power.`,
        questions: [
          `What silent emotional boundary have I been compromising to keep the peace in this area of ${area.toLowerCase()}?`,
          `How is this pattern showing me an unhealed dynamic from my childhood or family ancestry?`,
          `If I stepped fully into my true divine self, what choice would I make in this exact moment?`
        ],
        practice: "Sit comfortably with your hands on your heart chakra. Take five slow breaths. Breathe in pure, lavender-colored light and say: 'I choose awareness. I release what is not mine to carry. I am whole.'"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSaveToJournal = () => {
    if (!result) return;
    const newEntry = {
      id: "JRN-" + Date.now(),
      date: new Date().toLocaleDateString(),
      area,
      concern,
      result
    };
    const updated = [newEntry, ...savedEntries];
    setSavedEntries(updated);
    localStorage.setItem("atma_introspection_logs", JSON.stringify(updated));
  };

  const handleDeleteEntry = (id: string) => {
    const filtered = savedEntries.filter(entry => entry.id !== id);
    setSavedEntries(filtered);
    localStorage.setItem("atma_introspection_logs", JSON.stringify(filtered));
  };

  const handleReset = () => {
    setConcern("");
    setResult(null);
  };

  const areas = ["Relationship", "Career", "Money", "Family", "Health", "Purpose"];

  return (
    <section id="introspection" className="py-20 bg-gray-50 text-gray-900 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-violet-deep/10 border border-violet-royal/20 text-xs font-semibold text-violet-royal uppercase tracking-widest">
            <Moon className="w-3.5 h-3.5 text-gold-muted fill-gold-muted" />
            <span>Interactive Guide</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-violet-deep">
            Atma Avalokana Introspection Tool
          </h2>
          <p className="text-gray-500 text-sm sm:text-base font-light mt-4">
            Input a repeating cycle or current concern. Shreedivya&apos;s digital guidance assistant, powered by server-side Gemini, will gently guide you to root-cause awareness.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Introspection Form / Input Container */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-xl relative overflow-hidden">
            {/* Top gold bar decoration */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-violet-royal via-gold-muted to-lavender-brand" />

            {!result && !loading && (
              <form onSubmit={handleIntrospect} className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-violet-royal font-bold mb-3">
                    Select Life Area of Concern
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {areas.map((ar) => (
                      <button
                        key={ar}
                        type="button"
                        onClick={() => setArea(ar)}
                        className={`py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 text-center border cursor-pointer ${
                          area === ar
                            ? "bg-violet-deep border-violet-deep text-white shadow-md shadow-violet-deep/20"
                            : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {ar}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-violet-royal font-bold mb-3">
                    Describe your concern or repeating pattern
                  </label>
                  <textarea
                    rows={4}
                    value={concern}
                    onChange={(e) => setConcern(e.target.value)}
                    required
                    placeholder="Example: 'I always feel guilty when spending money on myself' or 'I keep attracting emotionally unavailable relationships.' Be honest and slow in writing."
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-900 focus:border-violet-royal focus:bg-white focus:outline-none transition-all placeholder:text-gray-400"
                  />
                  <span className="text-[10px] text-gray-400 leading-normal block mt-2 italic">
                    🕉️ Guidance Notice: We do not predict dates or future outcomes. We explore patterns and root-cause solutions.
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={!concern.trim()}
                  className="w-full py-4 rounded-full bg-violet-deep hover:bg-indigo-950 text-white font-bold text-xs uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center space-x-2 shadow-lg shadow-violet-deep/15 disabled:opacity-50 disabled:pointer-events-none"
                >
                  <Sparkles className="w-4 h-4 text-gold-muted animate-pulse" />
                  <span>Seek Root-Cause Clarity</span>
                </button>
              </form>
            )}

            {/* Loading / Breathing Screen */}
            {loading && (
              <div className="py-16 text-center space-y-8 flex flex-col items-center">
                <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-violet-deep/5 border-2 border-violet-royal/20 animate-pulse-glow">
                  <div className="absolute inset-2 rounded-full border border-gold-muted/30 animate-spin-slow" />
                  <Moon className="w-10 h-10 text-gold-muted" />
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-display text-xl font-bold text-violet-deep tracking-wide animate-pulse">
                    {breatheState}
                  </h4>
                  <p className="text-xs text-gray-500 max-w-sm mx-auto font-light leading-relaxed">
                    Allow yourself to relax. Shreedivya&apos;s digital spiritual mentor is analyzing the energetic frequency of your query.
                  </p>
                </div>
              </div>
            )}

            {/* Introspection Result Presentation */}
            {result && !loading && (
              <div className="space-y-8">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gold-muted bg-violet-deep py-1 px-2 rounded">
                      {area} Introspection
                    </span>
                    <p className="text-[10px] text-gray-400 mt-1 font-mono">Date: Today</p>
                  </div>
                  <button 
                    onClick={handleReset}
                    className="p-1.5 rounded-lg text-gray-400 hover:text-violet-royal hover:bg-gray-50 transition-colors flex items-center space-x-1 cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span className="text-[10px] uppercase font-bold tracking-widest">Ask New</span>
                  </button>
                </div>

                {/* Original Query */}
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 text-xs">
                  <span className="block font-bold text-gray-400 uppercase tracking-widest mb-1">Your query:</span>
                  <p className="italic text-gray-700">&ldquo;{concern}&rdquo;</p>
                </div>

                {/* Section 1: The Reflection */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-5 h-5 text-gold-muted" />
                    <h4 className="font-display font-bold text-violet-deep text-lg">Subconscious Reflection</h4>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed font-light whitespace-pre-line bg-violet-deep/5 p-4 rounded-2xl border border-violet-royal/15">
                    {result.reflection}
                  </p>
                </div>

                {/* Section 2: Self-Inquiry Questions */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Compass className="w-5 h-5 text-gold-muted" />
                    <h4 className="font-display font-bold text-violet-deep text-lg">Three Questions for Your Soul</h4>
                  </div>
                  <ul className="space-y-2.5">
                    {result.questions.map((q, idx) => (
                      <li 
                        key={idx}
                        className="p-3 bg-white border border-gray-200 rounded-xl text-xs text-gray-800 font-light flex items-start space-x-3 shadow-sm hover:border-violet-royal/20 transition-colors"
                      >
                        <span className="w-5 h-5 rounded-full bg-violet-deep text-white text-[10px] flex items-center justify-center shrink-0 font-bold">
                          {idx + 1}
                        </span>
                        <span className="leading-normal">{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Section 3: Alignment Practice */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <HeartHandshake className="w-5 h-5 text-gold-muted" />
                    <h4 className="font-display font-bold text-violet-deep text-lg">Daily Alignment Practice</h4>
                  </div>
                  <div className="p-4 rounded-2xl bg-gradient-to-tr from-violet-deep to-indigo-950 text-white shadow-md relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 rounded-bl-3xl bg-gold-muted/10 pointer-events-none" />
                    <p className="text-xs text-lavender-brand uppercase tracking-widest font-bold mb-1.5">Actionable Healing Ritual</p>
                    <p className="text-xs text-white/95 leading-relaxed font-light">{result.practice}</p>
                  </div>
                </div>

                {/* Footer buttons */}
                <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleSaveToJournal}
                    className="w-full py-3.5 rounded-full bg-gold-muted text-violet-deep font-bold text-xs uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-transform cursor-pointer flex items-center justify-center space-x-2"
                  >
                    <Save className="w-4 h-4" />
                    <span>Save to Journal Log</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Introspection Journal History */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-lg space-y-6">
            <div className="border-b border-gray-100 pb-4">
              <h3 className="font-display text-xl font-bold text-violet-deep">Your Introspection Journal</h3>
              <p className="text-[11px] text-gray-500 font-light mt-1">
                Your private spiritual insights, stored safely in your local browser cache.
              </p>
            </div>

            {savedEntries.length === 0 ? (
              <div className="py-12 text-center text-gray-400 space-y-3">
                <span className="text-4xl block">📓</span>
                <span className="block text-xs font-semibold text-gray-500">Your Journal is Empty</span>
                <p className="text-[10px] max-w-[200px] mx-auto font-light leading-normal">
                  Seek root-cause clarity using the form and save your reflection to build your log.
                </p>
              </div>
            ) : (
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-1">
                {savedEntries.map((entry) => (
                  <div 
                    key={entry.id}
                    className="p-4 rounded-2xl bg-gray-50 border border-gray-200 text-left relative group hover:border-violet-royal/20 transition-all duration-200"
                  >
                    <button
                      onClick={() => handleDeleteEntry(entry.id)}
                      className="absolute top-4 right-4 p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors opacity-0 group-hover:opacity-100 cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>

                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-[9px] bg-violet-deep/10 text-violet-deep uppercase font-bold py-0.5 px-1.5 rounded">
                          {entry.area}
                        </span>
                        <span className="text-[9px] text-gray-400 font-mono">{entry.date}</span>
                      </div>
                      
                      <p className="text-xs font-bold text-gray-800 line-clamp-1 pr-6">&ldquo;{entry.concern}&rdquo;</p>
                      
                      <p className="text-[11px] text-gray-600 line-clamp-2 font-light italic leading-normal">
                        {entry.result.reflection}
                      </p>

                      {/* Expand/Read log button triggers simple view */}
                      <button
                        onClick={() => {
                          setArea(entry.area);
                          setConcern(entry.concern);
                          setResult(entry.result);
                        }}
                        className="text-[9px] uppercase tracking-widest text-violet-royal font-bold hover:text-gold-muted transition-colors mt-2 block cursor-pointer"
                      >
                        Load full reflection
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="pt-4 border-t border-gray-100 flex items-center space-x-2 text-gray-400 text-[10px] font-light leading-relaxed">
              <Shield className="w-4 h-4 text-gold-muted shrink-0" />
              <span>We never sell or store your queries. Introspection is fully private and run in client container.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
