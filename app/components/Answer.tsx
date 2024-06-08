"use client";

import { useEffect, useState } from "react";
import { generate } from "../answerAction";
import { readStreamableValue } from "ai/rsc";
import { Button } from "@/components/ui/button";
import { useVoiceStore } from "../store";

export const dynamic = "force-dynamic";
export const maxDuration = 30;

export default function Answer() {
  const [generation, setGeneration] = useState<string>("");
  const [query, setQuery] = useState<string>("");

  const { voiceInput } = useVoiceStore();

  useEffect(() => {
    setQuery(voiceInput);
  }, [voiceInput]);

  return (
    <div>
      <Button
        className="mt-2"
        onClick={async () => {
          const { output } = await generate(query);

          for await (const delta of readStreamableValue(output)) {
            setGeneration(
              (currentGeneration) => `${currentGeneration}${delta}`,
            );
          }
        }}
      >
        Ask chatgpt
      </Button>

      <div
        className={`mt-2 rounded-lg bg-zinc-300 px-2 py-1 text-black shadow-md`}
      >
        {generation}
      </div>
    </div>
  );
}
