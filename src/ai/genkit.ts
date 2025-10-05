import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

// Prefer GEMINI_API_KEY, then GOOGLE_API_KEY, then GOOGLE_GENAI_API_KEY
const googleApiKey =
  process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || process.env.GOOGLE_GENAI_API_KEY;

if (!googleApiKey) {
  // Don't throw here; let individual flows validate and give user-friendly errors.
  console.warn('Google AI API key not found in environment variables (GEMINI_API_KEY / GOOGLE_API_KEY / GOOGLE_GENAI_API_KEY).');
} else {
  console.log('Google AI API key detected in environment variables.');
}

export const ai = genkit({
  plugins: [
    googleAI({
      apiKey: googleApiKey,
    }),
  ],
  model: 'googleai/gemini-2.0-flash',
});
