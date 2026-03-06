
// Fixed to follow latest @google/genai guidelines
import { GoogleGenAI, GenerateContentResponse, Chat } from "@google/genai";
import { getMentorSystemPrompt } from "../constants";
import { Language } from "../types";

export const getGeminiChat = (lang: Language) => {
  // Use named parameter for apiKey
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  return ai.chats.create({
    model: 'gemini-3-pro-preview',
    config: {
      systemInstruction: getMentorSystemPrompt(lang),
      temperature: 0.7,
      topK: 40,
      topP: 0.95,
    },
  });
};

export async function* streamGeminiResponse(chat: Chat, message: string) {
  try {
    // sendMessageStream only accepts message parameter
    const stream = await chat.sendMessageStream({ message });
    for await (const chunk of stream) {
      // Access .text property directly (not a method)
      const c = chunk as GenerateContentResponse;
      yield c.text || "";
    }
  } catch (error) {
    console.error("Gemini API Error:", error);
    yield "I'm sorry, I'm having trouble connecting to my brain right now. Please try again in a moment.";
  }
}
