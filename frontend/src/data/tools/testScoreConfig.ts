export interface SkillFeedback {
  skill: string;
  advice: string[];
}

export const ieltsSkillAdvice: Record<string, string[]> = {
  Listening: [
    "Practice with varied English accents (British, Australian, American).",
    "Focus on predictive listening and keyword spotting before recordings play.",
    "Pay close attention to plural nouns and spelling conventions.",
  ],
  Reading: [
    "Master skimming for the main idea and scanning for specific names/numbers.",
    "Practice True / False / Not Given strategies systematically.",
    "Strictly manage time: limit passage 1 to 15 mins, passage 2 to 20 mins, passage 3 to 25 mins.",
  ],
  Writing: [
    "Task 2 accounts for 66% of your writing score — allocate 40 minutes to it.",
    "Structure essays with clear topic sentences and distinct supporting evidence.",
    "Check for grammatical range, collocations, and avoid informal vocabulary.",
  ],
  Speaking: [
    "Answer in full sentences; extend answers with reasons, examples, and concessions.",
    "Work on natural discourse markers (e.g., 'To be fair', 'On the other hand').",
    "Record mock interviews to eliminate hesitation and filler words.",
  ],
};

export const pteSkillAdvice: Record<string, string[]> = {
  Speaking: [
    "Focus on oral fluency and pronunciation — maintain a steady, natural pace without pausing.",
    "In 'Read Aloud', emphasize key content words with natural intonation.",
    "Avoid self-correction as the AI scoring penalizes restarts.",
  ],
  Writing: [
    "For 'Summarize Written Text', ensure a single complex sentence of 5–75 words.",
    "For 'Write Essay', follow a clear 4-paragraph structure with zero typos.",
    "Use academic connectors and maintain concise topic coherence.",
  ],
  Reading: [
    "Build academic collocation vocabulary for 'Fill in the Blanks'.",
    "Identify grammatical cues (part of speech, verb tenses) around blank fields.",
    "Practice 'Re-order Paragraphs' by identifying independent topic sentences first.",
  ],
  Listening: [
    "For 'Write from Dictation', transcribe immediately and verify noun plurals.",
    "Take quick shorthand notes during 'Summarize Spoken Text'.",
    "Be careful of negative marking in 'Highlight Incorrect Words'.",
  ],
};

export const ieltsBandInterpretations: { min: number; title: string; description: string; tag: string }[] = [
  { min: 8.5, title: "Expert User", description: "Fully fluent and authoritative command. Eligible for prestigious Ivy League, Oxbridge, and clinical medical programmes globally.", tag: "Exceptional" },
  { min: 7.5, title: "Very Good User", description: "Handles complex language effortlessly. Meets or exceeds requirements for top 50 global universities and competitive STEM / MBA programmes.", tag: "Strong Match" },
  { min: 6.5, title: "Good User", description: "Generally effective command with occasional inaccuracies. Meets direct admission standards for 85%+ of undergraduate and postgraduate programmes.", tag: "Competitive" },
  { min: 6.0, title: "Competent User", description: "Effective command in familiar contexts. Qualifies for many universities worldwide; may require pre-sessional language for select programmes.", tag: "Eligible" },
  { min: 0.0, title: "Needs Improvement", description: "Score is below typical university entry criteria (typically 6.0–6.5 min). Structured prep or pathway programmes recommended.", tag: "Foundation Level" },
];

export const pteInterpretations: { min: number; title: string; description: string; ieltsEquivalent: string }[] = [
  { min: 84, title: "Expert Level", description: "Exceeds all global postgraduate admissions benchmarks including top-tier research fellowships.", ieltsEquivalent: "IELTS 8.5–9.0" },
  { min: 76, title: "Very Good Level", description: "Meets criteria for Tier-1 universities in the UK, USA, Australia, and Canada.", ieltsEquivalent: "IELTS 7.5–8.0" },
  { min: 65, title: "Good Level", description: "Strong baseline score accepted across 90%+ of English-medium universities.", ieltsEquivalent: "IELTS 7.0" },
  { min: 58, title: "Competent Level", description: "Meets direct entry requirements for standard undergraduate and taught postgraduate courses.", ieltsEquivalent: "IELTS 6.5" },
  { min: 50, title: "Modest Level", description: "Eligible for diploma and select undergraduate courses or pathway pre-sessional study.", ieltsEquivalent: "IELTS 6.0" },
  { min: 10, title: "Needs Improvement", description: "Below standard international matriculation threshold. Focused coaching advised.", ieltsEquivalent: "< IELTS 6.0" },
];
