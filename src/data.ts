import { Modality, ServiceOffer, Testimonial } from "./types";

export const BRAND_INFO = {
  name: "Atma Avalokana",
  tagline: "Divine Self & Soul Introspection",
  subtitle: "Practical Spirituality. Root-Cause Healing. Uncompromising Clarity.",
  guideName: "Shreedivya",
  bioHeader: "@divya.atmavalokana",
  shortBio: "Atma Avalokana — divine self / soul introspection. Helping you find clarity through Tarot, Karmic Blueprint, Hypnotherapy, Past Life Regression, and Inner Child & Ancestral Healing.",
  vision: "To help people find clarity, healing and purpose — while making spirituality practical, approachable and trustworthy.",
  mission: "Make spirituality practical and approachable, guiding people to root-cause clarity, not predictions.",
  quote: "I am nothing. It is the divine working through me.",
  coreValues: [
    { name: "Calm", desc: "No fear-based content, always grounding and steady" },
    { name: "Wise", desc: "Acting as a teacher, facilitator, and guide, not a predictor of fates" },
    { name: "Authentic", desc: "Honest, direct, and completely relatable" },
    { name: "Hopeful", desc: "Deeply focused on empowering solutions and transformation" },
    { name: "Premium", desc: "Minimal, elegant, and of high luxury aesthetic standard" },
    { name: "Compassionate", desc: "A safe, completely welcoming, and non-judgmental space" }
  ],
  usps: [
    { title: "500–700 Lives Guided", desc: "Centuries of combined wisdom backed by rich real-world offline impact guiding seekers through life transitions." },
    { title: "Personalized Sessions", desc: "No copy-paste readings. Every session is custom tailored to your exact energetic signature." },
    { title: "7+ Integrated Modalities", desc: "From Tarot to Hypnotherapy and Karmic Blueprints, bridging multiple tools for comprehensive care." },
    { title: "Root-Cause Focus", desc: "We look beyond surface-level symptoms to address ancestral, karmic, and subconscious root patterns." },
    { title: "Ancient Indian Wisdom", desc: "Deeply traditional spiritual principles combined with compassionate modern psychological understanding." }
  ],
  journey: {
    title: "My Journey",
    content: "Began through a deep quest to understand the unseen forces that shape human experience. Years of study and practice evolved into a holistic approach bridging intuitive guidance with profound healing.",
    whyItStarted: "To help people move beyond surface-level solutions and discover the root cause of recurring challenges — healing that reaches the subconscious, karmic, ancestral and energetic dimensions.",
    impact: "500–700 individuals guided through transformative sessions — clarity, released patterns, healed emotional and ancestral wounds, stronger relationships, and greater confidence through life's transitions.",
    philosophy: "True healing begins with the root, not the symptom. The goal is not to predict the future, but to empower people to consciously create it."
  },
  personalNote: "There was a time in my life when I needed healing. As I healed myself, I gradually learned modalities that I began using to help family and friends — and slowly, it became a calling. Along the way I realised this wasn't new to me. My soul remembered it. Much of what I practice today isn't something I only learned in this life — it's knowledge my soul carried in from before, and the teachers who came into my life simply reignited that memory. I always felt that after 40, I'd begin my second innings — first clearing what I owed my own family, and then turning to serve others. Healing isn't just physical; mind, body and soul all have to align. I've been blessed with that knowledge, and I want to help others find that same shift."
};

export const MODALITIES: Modality[] = [
  {
    id: "tarot",
    title: "Tarot Reading",
    subtitle: "Root-Cause Insight, Not Predictions",
    description: "An intuitive gateway to your subconscious. We use the cards to identify hidden energetic patterns, self-sabotaging blocks, and your next clear action steps.",
    details: "Focuses on your personal empowerment and understanding your patterns, not fear-based future predictions.",
    fullCopy: "We view Tarot as a mirror of your current energetic field. Rather than telling you 'what will happen' (which strips you of your agency), we explore 'why this is happening' and 'how you can consciously redirect this energy' to align with your highest truth."
  },
  {
    id: "karmic-blueprint",
    title: "Karmic Blueprint Analysis",
    subtitle: "Identify & Clear Repeating Lifeline Cycles",
    description: "Discover the deep-seated spiritual blueprints, lessons, and contracts you brought into this lifetime, allowing you to dissolve heavy patterns around relationships or money.",
    details: "Calculates the core numbers and lessons of your soul to address why certain experiences keep cycling.",
    fullCopy: "By looking into your karmic blueprints (using ancient Indian systems and intuitive readings), we expose the repeating themes your soul signed up to master. Recognizing these patterns is the first step to dissolving them forever."
  },
  {
    id: "akashic-records",
    title: "Akashic Records Reading",
    subtitle: "Your Soul's Cosmic Library",
    description: "Step into the energetic archive of your soul's entire journey across timelines. Access profound wisdom and instructions directly from your spiritual guides.",
    details: "Unlocks the library of all choices, lessons, and soul contracts across past, present, and future potentials.",
    fullCopy: "The Akashic Records hold the vibrational record of every soul's journey. Accessing them with Shreedivya allows you to answer the heavy, existential questions: What is my contract with this person? Why did my soul choose this path?"
  },
  {
    id: "energy-healing",
    title: "Pranic & Aura Healing",
    subtitle: "Vibrational Alignment & auric clearance",
    description: "Clear dense blockages in your energy field, revitalize tired chakras, and restore a deep, tangible state of calm and protective light around you.",
    details: "Non-invasive, fully safe energetic adjustments that bring immediate physical and emotional relief.",
    fullCopy: "When mind and body are tired, the energetic field is often congested with old emotional debris. We gently clean and recharge your aura, helping you feel centered, grounded, and dynamically protected from external emotional noise."
  },
  {
    id: "ancestral-inner-child",
    title: "Ancestral & Inner Child Healing",
    subtitle: "Healing across Generational Timelines",
    description: "Gently trace emotional wounds back to childhood or ancestral lines. Hand back burdens that aren't yours to carry, and restore your inner core of joy.",
    details: "Combines parts-work and lineage blessing to release long-held family grief, anxiety, and guilt.",
    fullCopy: "We carry the unhealed grief and survival mechanics of our parents and ancestors in our cellular memory. Inner child and ancestral work creates a loving bridge to return these emotional debts, freeing your children and yourself."
  },
  {
    id: "regression-hypnotherapy",
    title: "Past Life Regression & Hypnotherapy",
    subtitle: "Subconscious Re-programming & Integration",
    description: "Safe, guided journeys into your deep subconscious state to find the root cause of phobias, unexplainable physical symptoms, or repeating relationship blocks.",
    details: "Uses light, relaxing hypnotherapy to access soul memories and safely dismantle self-limiting core beliefs.",
    fullCopy: "Our subconscious holds 95% of our patterns. By taking you into a state of light, conscious relaxation, we locate the original event—whether in childhood or a past lifetime—and safely release the trauma or oath holding you back."
  }
];

export const SERVICE_OFFERS: ServiceOffer[] = [
  {
    id: "sessions",
    title: "1:1 Private Sessions",
    status: "active",
    description: "Intimate, highly confidential sessions focusing on life purpose, karmic clearing, and root-cause trauma healing. Run over private video call (40–45 minutes).",
    extended: "Includes a preliminary analysis, live intuitive guidance, custom emotional integration practices, and ongoing support via WhatsApp.",
    iconName: "User"
  },
  {
    id: "workshops",
    title: "Workshops: 'Rewire Your Life Patterns'",
    status: "active",
    description: "Immersive group therapeutic sessions. Combining systemic family constellations, inner child dialoguing, and integrated therapy to break recurring family cycles.",
    extended: "Includes interactive exercises, collective energy clearing, workbook material, and lifetime access to a private group of pure, healing souls.",
    iconName: "Users"
  },
  {
    id: "book",
    title: "The Soul's Journey (Book)",
    status: "in-progress",
    description: "An upcoming book authored by Shreedivya detailing the mechanics of karma, root-cause healing, and practical steps to navigate your soul's blueprint.",
    extended: "Currently in progress. Subscribers to the newsletter will receive early access chapters, behind-the-scenes insights, and invitations to the launch.",
    iconName: "BookOpen"
  },
  {
    id: "courses",
    title: "Interactive Courses",
    status: "upcoming",
    description: "Upcoming curriculum-style courses teaching Tarot reading from an intuitive root-cause perspective, self-hypnotherapy, and energetic self-alignment.",
    extended: "Self-paced modules with interactive video lectures, guided meditative sessions, and live group Q&A cohorts with Shreedivya.",
    iconName: "GraduationCap"
  },
  {
    id: "podcast",
    title: "The Divine Connect Podcast",
    status: "upcoming",
    description: "A series of soul-stirring conversations focusing on spiritual curiosity, overcoming life's transitions, and stories of deep root-cause healing.",
    extended: "Featuring guests from diverse therapeutic and spiritual modalities, exploring topics like karmic nodes, synchronicity, and somatic integration.",
    iconName: "Mic"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Aanya S.",
    role: "Marketing Director (Age 34)",
    text: "Before my session with Shreedivya, I kept attracting toxic, emotionally unavailable partners. I thought I had 'bad luck.' She helped me see how I was carrying my mother's ancestral burden of survival. The session was practical, non-judgmental, and profoundly liberating. My entire life pattern has shifted.",
    rating: 5
  },
  {
    id: "t2",
    name: "Vikram R.",
    role: "Tech Founder (Age 41)",
    text: "I was highly skeptical of Tarot. Shreedivya completely blew me away. She didn't make weird predictions; instead, she explained the exact psychological and energetic block in my relationship with money. She works like a spiritual surgeon—identifying the root cause and giving very practical exercises.",
    rating: 5
  },
  {
    id: "t3",
    name: "Meera K.",
    role: "Designer & Artist (Age 28)",
    text: "The Akashic Records session gave me a clarity that years of traditional therapy couldn't. I finally understood why I had this unexplainable fear of standing out. Shreedivya has this incredibly calm, safe, and premium energy. I left feeling hopeful and fully empowered to create my future.",
    rating: 5
  }
];

export const FAQS = [
  {
    question: "What should I expect from a 1:1 session with Shreedivya?",
    answer: "Each session lasts 40–45 minutes and is fully confidential. Shreedivya does not focus on scary future predictions. Instead, she connects to your current energy field, analyzes your karmic blueprint, and listens with compassion. You will receive a clear understanding of why certain patterns are repeating in your relationships, career, or health, along with practical, actionable integration tools."
  },
  {
    question: "Is this session confidential?",
    answer: "Absolutely. Confidentiality is our highest priority. All information shared, concerns discussed, and energetic blueprints analyzed during your session are completely private and kept in strict confidence between you and Shreedivya."
  },
  {
    question: "How are the sessions conducted? Can I attend online?",
    answer: "Yes, all sessions are conducted online via private video calls (Zoom or Google Meet), making them accessible from anywhere in the world. Once your booking is verified, we will coordinate your preferred time and send you the private link."
  },
  {
    question: "What is your approach to 'predictions' and 'karma'?",
    answer: "As Shreedivya says: 'I'm here to guide you — not here to predict your future.' We do not believe in curses or doomsday predictions. Karma is not a punishment; it is simply a reflection of patterns waiting for the light of your awareness. Our approach is entirely focused on empowering you with root-cause solutions so you can consciously write your own destiny."
  },
  {
    question: "How does the booking system work?",
    answer: "First, you fill out our detailed Booking Form on this website. Then, you will be redirected to connect with us on WhatsApp to share your payment screenshot. Once verified, we will instantly book your slot on Calendly and send you the calendar invite. It is a highly streamlined, trust-based process."
  }
];
