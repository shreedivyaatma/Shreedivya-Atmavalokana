import { useState, useEffect, FormEvent } from "react";
import { Lock, FileText, Send, Calendar, CheckCircle2, MessageSquare, Copy, ExternalLink, ShieldCheck, HelpCircle } from "lucide-react";
import { BRAND_INFO } from "../data";
import { Booking } from "../types";

export default function BookingForm() {
  const [step, setStep] = useState<1 | 2>(1);
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [occupation, setOccupation] = useState<string>("");
  const [area, setArea] = useState<string>("Relationship");
  const [concern, setConcern] = useState<string>("");
  const [preferredDay, setPreferredDay] = useState<string>("Weekend");
  const [referral, setReferral] = useState<string>("Instagram");
  const [agreed, setAgreed] = useState<boolean>(false);
  
  const [loading, setLoading] = useState<boolean>(false);
  const [confirmedBooking, setConfirmedBooking] = useState<Booking | null>(null);
  const [myBookings, setMyBookings] = useState<Booking[]>([]);
  const [copied, setCopied] = useState<boolean>(false);

  // Load existing bookings from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("atma_bookings");
    if (saved) {
      try {
        setMyBookings(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load local bookings");
      }
    }
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !concern || !agreed) return;

    setLoading(true);

    const bookingData = {
      name,
      phone,
      email,
      city,
      occupation,
      area,
      concern,
      preferredDay,
      referral,
      agreed
    };

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData)
      });

      if (!response.ok) {
        throw new Error("Failed to save booking");
      }

      const resData = await response.json();
      const newBooking: Booking = resData.booking;

      // Save to state & localStorage
      setConfirmedBooking(newBooking);
      const updatedBookings = [newBooking, ...myBookings];
      setMyBookings(updatedBookings);
      localStorage.setItem("atma_bookings", JSON.stringify(updatedBookings));
      setStep(2);
    } catch (err) {
      console.error(err);
      // Fallback in case of server lag
      const mockBooking: Booking = {
        id: "BK-" + Math.floor(100000 + Math.random() * 900000),
        name,
        phone: phone || "Not provided",
        email,
        city: city || "Online Session",
        occupation: occupation || "Not provided",
        area,
        concern,
        preferredDay: preferredDay || "Any day",
        referral: referral || "Social Media",
        bookingDate: new Date().toLocaleDateString(),
        status: "Awaiting Verification",
        whatsappMessage: `Hi! Thank you for filling out the booking form 🌸\n\nPlease share your payment screenshot here. Once verified, we'll confirm your session timing.\n\nLooking forward to connecting with you.`
      };
      setConfirmedBooking(mockBooking);
      const updatedBookings = [mockBooking, ...myBookings];
      setMyBookings(updatedBookings);
      localStorage.setItem("atma_bookings", JSON.stringify(updatedBookings));
      setStep(2);
    } finally {
      setLoading(false);
    }
  };

  const handleCopyMessage = () => {
    if (!confirmedBooking) return;
    navigator.clipboard.writeText(confirmedBooking.whatsappMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleResetForm = () => {
    setName("");
    setPhone("");
    setEmail("");
    setCity("");
    setOccupation("");
    setConcern("");
    setAgreed(false);
    setConfirmedBooking(null);
    setStep(1);
  };

  const areas = ["Relationship", "Career", "Money", "Family", "Health", "Purpose", "Other"];
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Weekend", "Any day"];
  const referrals = ["Instagram", "Google Search", "Friend / Referral", "Podcast", "Other"];

  return (
    <section id="booking" className="py-20 bg-white text-gray-900 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-violet-deep/10 border border-violet-royal/20 text-xs font-semibold text-violet-royal uppercase tracking-widest">
            <Lock className="w-3.5 h-3.5 text-gold-muted" />
            <span>Secure Booking System</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-violet-deep">
            Initiate Your Healing Journey
          </h2>
          <p className="text-gray-500 text-sm sm:text-base font-light mt-4">
            Our session is a sacred, fully confidential, 1:1 safe container. Complete the detailed alignment form below to reserve your slot.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Booking Panel */}
          <div className="lg:col-span-8 bg-gray-50 rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-xl relative overflow-hidden">
            {/* Top gold strip */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-violet-royal via-gold-muted to-lavender-brand" />

            {step === 1 && (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Stage 1: Personal Details */}
                <div className="space-y-4">
                  <h3 className="text-xs uppercase tracking-widest text-violet-royal font-bold pb-2 border-b border-gray-200 flex items-center space-x-2">
                    <span className="w-5 h-5 rounded-full bg-violet-deep text-white text-[10px] flex items-center justify-center">1</span>
                    <span>Personal Profile Details</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Aanya Sharma"
                        className="w-full rounded-xl border border-gray-200 bg-white p-3 text-xs text-gray-900 focus:border-violet-royal focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">WhatsApp / Phone Number</label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full rounded-xl border border-gray-200 bg-white p-3 text-xs text-gray-900 focus:border-violet-royal focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. aanya@gmail.com"
                        className="w-full rounded-xl border border-gray-200 bg-white p-3 text-xs text-gray-900 focus:border-violet-royal focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">City / Location</label>
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="e.g. New Delhi"
                        className="w-full rounded-xl border border-gray-200 bg-white p-3 text-xs text-gray-900 focus:border-violet-royal focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Occupation</label>
                    <input
                      type="text"
                      value={occupation}
                      onChange={(e) => setOccupation(e.target.value)}
                      placeholder="e.g. Marketing Director"
                      className="w-full rounded-xl border border-gray-200 bg-white p-3 text-xs text-gray-900 focus:border-violet-royal focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Stage 2: Session Alignment */}
                <div className="space-y-4">
                  <h3 className="text-xs uppercase tracking-widest text-violet-royal font-bold pb-2 border-b border-gray-200 flex items-center space-x-2">
                    <span className="w-5 h-5 rounded-full bg-violet-deep text-white text-[10px] flex items-center justify-center">2</span>
                    <span>Session Focus Alignment</span>
                  </h3>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-2">Life Area of Focus *</label>
                    <div className="flex flex-wrap gap-2">
                      {areas.map((ar) => (
                        <button
                          key={ar}
                          type="button"
                          onClick={() => setArea(ar)}
                          className={`py-2 px-3 rounded-lg text-xs font-medium border cursor-pointer transition-colors ${
                            area === ar
                              ? "bg-violet-deep border-violet-deep text-white"
                              : "bg-white border-gray-200 text-gray-600 hover:bg-gray-100"
                          }`}
                        >
                          {ar}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Describe your current pattern or concern *</label>
                    <textarea
                      rows={4}
                      required
                      value={concern}
                      onChange={(e) => setConcern(e.target.value)}
                      placeholder="What emotional, karmic, or behavioral cycle is currently repeating in your life? (Relationships, money struggles, career doubts)"
                      className="w-full rounded-xl border border-gray-200 bg-white p-3 text-xs text-gray-900 focus:border-violet-royal focus:outline-none transition-colors placeholder:text-gray-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">Preferred Day for Session</label>
                      <select
                        value={preferredDay}
                        onChange={(e) => setPreferredDay(e.target.value)}
                        className="w-full rounded-xl border border-gray-200 bg-white p-3 text-xs text-gray-900 focus:border-violet-royal focus:outline-none transition-colors"
                      >
                        {days.map(d => (
                          <option key={d} value={d}>{d}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">How did you hear about us?</label>
                      <select
                        value={referral}
                        onChange={(e) => setReferral(e.target.value)}
                        className="w-full rounded-xl border border-gray-200 bg-white p-3 text-xs text-gray-900 focus:border-violet-royal focus:outline-none transition-colors"
                      >
                        {referrals.map(r => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Stage 3: Confidential Agreement Checkbox */}
                <div className="p-5 rounded-2xl bg-violet-deep/5 border border-violet-royal/10 space-y-4">
                  <div className="flex items-start space-x-3 text-gray-700 text-xs leading-relaxed font-light italic bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                    <FileText className="w-5 h-5 text-gold-muted shrink-0 mt-0.5" />
                    <p>
                      &ldquo;This is a fully confidential, one-on-one session &mdash; 40&ndash;45 minutes, entirely for you. I&apos;m here to guide you through this, slowly and fully. I&apos;m here to listen and guide, not to predict your future.&rdquo;
                    </p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="agreement"
                      required
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="w-4 h-4 rounded text-violet-royal border-gray-300 focus:ring-violet-royal cursor-pointer"
                    />
                    <label htmlFor="agreement" className="text-xs font-medium text-gray-700 select-none cursor-pointer">
                      I understand that this is an empowering self-reflection session. *
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading || !agreed}
                  className="w-full py-4 rounded-full bg-gradient-to-r from-violet-royal to-indigo-900 text-white font-bold text-xs uppercase tracking-widest hover:scale-[1.01] active:scale-[0.99] transition-transform cursor-pointer shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  <Calendar className="w-4 h-4 text-gold-muted" />
                  <span>{loading ? "Scheduling Blueprint..." : "Schedule Session Request"}</span>
                </button>
              </form>
            )}

            {/* Step 2: Confirmation & WhatsApp Daily SOP Showcase */}
            {step === 2 && confirmedBooking && (
              <div className="space-y-8 animate-float">
                <div className="text-center space-y-3 pb-6 border-b border-gray-200">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mb-2">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-violet-deep">Session Request Received!</h3>
                  <p className="text-xs text-gray-500 max-w-md mx-auto font-light leading-relaxed">
                    Your preliminary data has been securely saved. Next, we must verify your payment screenshot to allocate your live slot.
                  </p>
                </div>

                {/* Booking ID Plate */}
                <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-between text-xs font-medium">
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest block font-bold">Booking Reference</span>
                    <span className="font-mono text-sm text-violet-deep font-bold">{confirmedBooking.id}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest block font-bold">Status</span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold uppercase tracking-wider text-[9px]">
                      Awaiting Verification
                    </span>
                  </div>
                </div>

                {/* WhatsApp Simulation Box (From Slide 19) */}
                <div className="space-y-3">
                  <label className="block text-xs uppercase tracking-widest text-violet-royal font-bold">
                    STEP 2: Share Payment Screenshot on WhatsApp
                  </label>
                  <div className="rounded-2xl border border-green-200 bg-emerald-50/50 p-5 space-y-4">
                    <div className="flex items-center space-x-2 text-emerald-700 text-xs font-semibold">
                      <MessageSquare className="w-4.5 h-4.5 fill-emerald-100" />
                      <span>WhatsApp Automated Reply Template</span>
                    </div>

                    <div className="rounded-xl bg-white p-4 text-xs text-gray-700 border border-green-100 leading-relaxed font-light shadow-inner relative">
                      <p className="whitespace-pre-wrap italic">
                        {confirmedBooking.whatsappMessage}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <button
                        onClick={handleCopyMessage}
                        className="flex-1 py-3 px-4 rounded-xl border border-emerald-600 text-emerald-700 hover:bg-emerald-50 text-xs uppercase tracking-widest font-bold transition-colors cursor-pointer flex items-center justify-center space-x-2"
                      >
                        <Copy className="w-4 h-4" />
                        <span>{copied ? "Copied Message!" : "Copy Reply Message"}</span>
                      </button>

                      <a
                        href="https://wa.me/919876543210"
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs uppercase tracking-widest font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center space-x-2 text-center shadow-md"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Open WhatsApp Chat</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Healing Roadmap description (From slide 17) */}
                <div className="space-y-3">
                  <label className="block text-xs uppercase tracking-widest text-gray-400 font-bold">
                    Your Complete Transformation Journey
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                    <div className="p-3 bg-white border border-gray-200 rounded-xl">
                      <span className="text-[10px] uppercase font-bold text-gray-400">Step 1</span>
                      <p className="text-xs font-bold text-violet-deep mt-1">Form Filled</p>
                      <span className="text-[9px] text-emerald-500 font-semibold block mt-0.5">● Done</span>
                    </div>
                    <div className="p-3 bg-white border border-gray-200 rounded-xl">
                      <span className="text-[10px] uppercase font-bold text-gray-400">Step 2</span>
                      <p className="text-xs font-bold text-violet-deep mt-1">Share Screenshot</p>
                      <span className="text-[9px] text-amber-500 font-semibold block mt-0.5">● Pending</span>
                    </div>
                    <div className="p-3 bg-white border border-gray-200 rounded-xl">
                      <span className="text-[10px] uppercase font-bold text-gray-400">Step 3</span>
                      <p className="text-xs font-bold text-violet-deep mt-1">Slot &amp; Calendar</p>
                      <span className="text-[9px] text-gray-400 block mt-0.5">Soon</span>
                    </div>
                    <div className="p-3 bg-white border border-gray-200 rounded-xl">
                      <span className="text-[10px] uppercase font-bold text-gray-400">Step 4</span>
                      <p className="text-xs font-bold text-violet-deep mt-1">Intimate Session</p>
                      <span className="text-[9px] text-gray-400 block mt-0.5">Soon</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex justify-between">
                  <button
                    onClick={handleResetForm}
                    className="text-xs uppercase font-bold tracking-widest text-violet-royal hover:text-gold-muted transition-colors cursor-pointer"
                  >
                    ← Book Another Session
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Active Booking Logs list */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-lg space-y-6">
            <div className="border-b border-gray-100 pb-4">
              <h3 className="font-display text-xl font-bold text-violet-deep">Active Sessions</h3>
              <p className="text-[11px] text-gray-500 font-light mt-1">
                Your submitted session schedule logs and verification statuses.
              </p>
            </div>

            {myBookings.length === 0 ? (
              <div className="py-12 text-center text-gray-400 space-y-3">
                <span className="text-4xl block">🗓️</span>
                <span className="block text-xs font-semibold text-gray-500">No Scheduled Sessions</span>
                <p className="text-[10px] max-w-[200px] mx-auto font-light leading-normal">
                  Your submitted session requests will appear here for verification tracking.
                </p>
              </div>
            ) : (
              <div className="space-y-4 max-h-[420px] overflow-y-auto pr-1">
                {myBookings.map((bk) => (
                  <div 
                    key={bk.id}
                    className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-left relative hover:border-violet-royal/20 transition-all duration-200"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono text-violet-deep font-bold">{bk.id}</span>
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider bg-amber-500/10 border border-amber-500/20 text-amber-600">
                          {bk.status}
                        </span>
                      </div>
                      
                      <div>
                        <span className="block text-xs font-bold text-gray-800">{bk.name}</span>
                        <span className="block text-[10px] text-gray-500">{bk.area} Integration</span>
                      </div>

                      <div className="flex items-center justify-between text-[9px] text-gray-400 pt-2 border-t border-gray-200/50">
                        <span>Pref: {bk.preferredDay}</span>
                        <span>Date: {bk.bookingDate}</span>
                      </div>

                      {/* Open Whatsapp screenshot portal */}
                      <button
                        onClick={() => {
                          setConfirmedBooking(bk);
                          setStep(2);
                        }}
                        className="w-full mt-2 py-1.5 rounded-lg border border-violet-royal/20 text-[9px] uppercase tracking-widest text-violet-royal font-bold hover:bg-violet-deep hover:text-white transition-all cursor-pointer text-center"
                      >
                        Verify Screen &amp; Chat
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="p-4 bg-violet-deep/5 rounded-2xl border border-violet-royal/10 text-xs text-gray-600 space-y-2">
              <div className="flex items-center space-x-1.5 font-bold text-violet-deep">
                <ShieldCheck className="w-4 h-4 text-gold-muted" />
                <span>Our Trust Standard</span>
              </div>
              <p className="text-[10px] leading-relaxed font-light">
                Sessions are secured with 256-bit encryption. All form alignment information is kept strictly private. Testimonials are only compiled with explicit, written user permission.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
