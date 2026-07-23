import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";

// Ensure any dotenv is loaded if running locally
import dotenv from "dotenv";
dotenv.config();

const PORT = 3000;

async function startServer() {
  const app = express();
  app.use(express.json());

  // In-memory array for bookings to simulate real database storage
  // synced with client side
  const bookings: any[] = [];

  // API Route: Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", time: new Date().toISOString() });
  });

  // API Route: Spiritual Introspection Guide powered by Gemini
  app.post("/api/introspection", async (req: express.Request, res: express.Response) => {
    const { area, concern } = req.body;

    if (!area || !concern) {
      res.status(400).json({ error: "Missing area or concern" });
      return;
    }

    const offlineResponses: Record<string, any> = {
      Relationship: {
        reflection: "In matters of connection, we often seek in others what our soul is learning to anchor within itself. Your current challenge indicates a tender space where old boundary patterns or ancestral expectations are ready to be aligned. Instead of seeing this as a curse or bad luck, let's understand this as a profound opportunity to rewire how you receive love.",
        questions: [
          "What unvoiced expectation do I carry from my childhood that I am currently projecting onto my relationships?",
          "How does this repeating dynamic feel familiar to my ancestral history?",
          "In what ways am I compromising my own truth to preserve a false sense of peace?"
        ],
        practice: "Daily Mirror Alignment: Sit in quiet contemplation for 5 minutes each morning. Place your right hand on your heart and repeat: 'I am safe in my own boundaries. I welcome relationships that reflect my wholeness, not my wounds.'"
      },
      Career: {
        reflection: "Your professional path is not merely a series of tasks, but a stage for your soul's outer expression. When blockages occur here, it's often an invitation to look at the relationship between your personal power and ancestral definitions of survival and success.",
        questions: [
          "Am I choosing my current professional goals out of genuine passion, or is it a subconscious desire to prove my worth to my family?",
          "What fear-based belief about scarcity is holding me back from speaking my truth in my workplace?",
          "If success was guaranteed and approval was irrelevant, what direction would my soul naturally walk?"
        ],
        practice: "Realignment Focus: Before starting your workday, visualize a soft violet flame at your throat chakra. Breathe in courage and release the need for external validation. Say: 'My purpose is mine to author.'"
      },
      Money: {
        reflection: "Abundance is an energetic flow, but our relationship with money is deeply wired by ancestral survival patterns and early emotional definitions of safety. Let's trace this concern not to bad karma, but to a repeating cycle of protection that has outlived its purpose.",
        questions: [
          "What was the emotional atmosphere around money in my childhood home? Was it a source of joy or tension?",
          "In what ways does holding onto financial anxiety serve as a familiar, albeit painful, security blanket?",
          "What would it look like to trust that my skills and wisdom are inherently worthy of sustainable exchange?"
        ],
        practice: "Karmic Flow Realignment: When making or receiving payments, take a deep, slow breath. Repeat silently: 'Money is a clean, flowing energy. I release the historical anxieties of my ancestors and stand in my present abundance.'"
      },
      Family: {
        reflection: "The family dynamic is our primary karmic school. The friction you feel is often the ancestral blueprint showing you where the lineage is waiting for someone to choose awareness over repetition. You are capable of carrying this light of awareness.",
        questions: [
          "What unspoken burden have I inherited from my parents that is not mine to carry?",
          "Can I see my family members as travelers on their own slow soul journeys, doing the best with the level of awareness they possess?",
          "What boundary can I implement today that is rooted in compassion for myself rather than resentment for them?"
        ],
        practice: "Ancestral Cord Healing: Light a candle in a safe space. Close your eyes and visualize your parents/ancestors standing before you. Silently say: 'I honor you for the life you passed down. I release the patterns that do not serve my growth, and I bless you as I walk my own path.'"
      },
      Health: {
        reflection: "The physical body is a wise messenger, constantly speaking the language of our subconscious mind and energetic fields. Let's listen to this current alignment issue not with frustration, but with patient curiosity, seeking what emotions or over-extended duties are asking for release.",
        questions: [
          "What emotional weight have I been swallowing instead of expressing?",
          "Where in my life am I over-functioning, carrying responsibilities that belong to others?",
          "How can I create a safe sanctuary within my own daily schedule to simply 'be' without performing?"
        ],
        practice: "Somatic Introspection: Lay down comfortably. Place one hand on your belly and another on your forehead. Breathe slowly, sending warm lavender light to the area of physical tension. Ask it: 'What truth are you trying to tell me?' Listen without judgment."
      },
      Purpose: {
        reflection: "Your soul's purpose is not a destination or a single job title—it is the state of alignment with which you meet each present moment. When you feel lost or disconnected, it is simply your inner self calling you back home to Atmavalokana (soul introspection).",
        questions: [
          "What activities or conversations make me forget about time and feel a deep sense of calm alignment?",
          "What fear is telling me that my quiet, natural self is not 'enough' to make a meaningful impact?",
          "What small, compassionate step can I take today to align my daily routine with my inner values?"
        ],
        practice: "Divine Connect Meditation: Sit comfortably with eyes closed. Visualize a golden lotus at your crown chakra, radiating calm clarity. Inhale deeply, repeating: 'I am here. I am ready. I trust the divine unfolding.'"
      }
    };

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
      // Graceful fallback when API Key is missing, so preview never crashes!
      // This provides a highly realistic, crafted placeholder that behaves like Shreedivya's voice.
      console.warn("GEMINI_API_KEY is not configured or placeholder. Using high-quality offline reflection engine.");
      const fallback = offlineResponses[area] || offlineResponses["Purpose"];
      res.json(fallback);
      return;
    }

    try {
      // Initialize GoogleGenAI SDK correctly with the API key and recommended header
      const ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          }
        }
      });

      // Construct a premium system instruction that strictly models Shreedivya's brand identity, voice and language guidelines!
      const systemInstruction = `You are the digital spiritual guidance advisor representing Shreedivya, a professional Spiritual Guide and teacher of the "Atmavalokana" (soul introspection) brand.
Your brand values are: Calm, honest, premium, hopeful, and compassionate.
Your tone of voice guidelines:
- You-centric, always. Focus on the reader's patterns, their clarity, and their next step.
- NEVER use fear-based content, predictions of the future, doomsday scenarios, curses, or negative forecasts.
- Do not speak as a "fortune teller" or "predictive tarot reader". You are a teacher and spiritual guide.
- Focus on root-cause understanding of karmic, ancestral, emotional, and energetic patterns.
- Example translation to follow: Instead of saying "Your karma is bad," say "Let's understand why this pattern keeps repeating."
- Use words like: Clarity, Healing, Awareness, Alignment, Growth, Inner Work, Purpose, Journey, Realignment.
- Strictly AVOID words like: Curse, Black Magic, Fear, Doom, Negative Predictions.
- Keep your answers highly practical, approachable, trustworthy, minimal, and elegant.

Your response must be returned in strict JSON format matching this schema:
{
  "reflection": "A 3-4 sentence warm, compassionate, and wise root-cause energetic/karmic analysis of their concern.",
  "questions": [
    "Three deep, non-judgmental, reflective self-inquiry questions specifically tailored to help them explore the root cause of this specific pattern.",
    "Question 2",
    "Question 3"
  ],
  "practice": "A practical, approachable, mindful daily exercise, mantra, or visualization designed to help realign their energy in this area."
}`;

      const prompt = `The user is seeking self-reflection regarding a concern in their life.
Life Area: ${area}
Concern/Pattern: "${concern}"

Analyze this pattern deeply, gently guide them to root-cause awareness, and provide practical introspection questions and alignment practices.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          systemInstruction: systemInstruction,
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              reflection: {
                type: Type.STRING,
                description: "A compassionate, insightful reflection guiding them to root causes."
              },
              questions: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: "3 highly tailored self-inquiry questions for soul introspection."
              },
              practice: {
                type: Type.STRING,
                description: "A highly practical daily ritual, mantra or exercise to assist alignment."
              }
            },
            required: ["reflection", "questions", "practice"]
          },
          temperature: 1.0,
        }
      });

      const responseText = response.text;
      if (!responseText) {
        throw new Error("Empty response from Gemini API");
      }

      res.setHeader("Content-Type", "application/json");
      res.send(responseText.trim());

    } catch (error: any) {
      console.error("Gemini API Error - falling back gracefully to high-quality offline reflection:", error);
      // Graceful error correction fallback to ensure excellent applet experience during API spikes/outages
      const fallback = offlineResponses[area] || offlineResponses["Purpose"];
      res.json(fallback);
    }
  });

  // API Route: Save a booking
  app.post("/api/bookings", (req, res) => {
    const { name, phone, email, city, occupation, area, concern, preferredDay, referral, agreed } = req.body;

    if (!name || !email || !area || !concern || !agreed) {
      res.status(400).json({ error: "Required fields are missing or agreement checkbox was not ticked." });
      return;
    }

    const newBooking = {
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

    bookings.push(newBooking);
    res.status(201).json({ success: true, booking: newBooking });
  });

  // API Route: Get all bookings (simulated backend fetch)
  app.get("/api/bookings", (req, res) => {
    res.json(bookings);
  });

  // Vite Integration: Serve assets / routes
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
