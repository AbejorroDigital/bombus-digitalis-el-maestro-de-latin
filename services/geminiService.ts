
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getGeminiExplanation = async (
  question: string,
  userAnswer: string,
  correctAnswer: string,
  context: string = ""
) => {
  if (!API_KEY) return null;

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Actúa como un profesor de Latín clásico. 
      El usuario respondió a la siguiente pregunta: "${question}"
      Su respuesta fue: "${userAnswer}"
      La respuesta correcta es: "${correctAnswer}"
      Contexto adicional: ${context}
      
      Explica de forma didáctica, alentadora y rigurosa por qué la respuesta correcta es esa. 
      Usa terminología filológica (casos, declinaciones, raíces). 
      Si el usuario falló, explica su error gentilmente. Si acertó, refuerza el concepto.
      Mantén la explicación breve (máximo 4 párrafos).`,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return null;
  }
};
