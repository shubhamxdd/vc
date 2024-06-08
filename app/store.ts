import create from "zustand";

type VoiceStore = {
  voiceInput: string;
  setVoiceInput: (input: string) => void;
};

export const useVoiceStore = create<VoiceStore>((set) => ({
  voiceInput: "What is love?",
  setVoiceInput: (input) => set({ voiceInput: input }),
}));
