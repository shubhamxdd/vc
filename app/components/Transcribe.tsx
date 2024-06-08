"use client";

import { Button } from "@/components/ui/button";
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useVoiceStore } from "../store";

declare global {
  interface Window {
    webkitSpeechRecognition: any;
  }
}
const Transcribe = () => {
  // const [result, setResult] = useState("What is love?");
  let recognition: any;

  const { setVoiceInput, voiceInput } = useVoiceStore();

  useEffect(() => {
    if (typeof window === "undefined") return;

    recognition = new window.webkitSpeechRecognition();

    if (recognition) {
      recognition.continuous = true;
      recognition.interimResults = false;
      recognition.lang = "en-US";

      recognition.onstart = () => {
        console.log("started recording");
      };

      recognition.onresult = (event: any) => {
        let res = "";

        for (let i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i].isFinal) {
            res += event.results[i][0].transcript + " ";
          } else {
            res += event.results[i][0].transcript;
          }
        }

        setVoiceInput(res);

        if (res.toLowerCase().includes("stop")) {
          recognition.stop();
        }
      };

      recognition.onerror = (event: any) => {
        alert("An error occured");
        console.log(event.error);
      };

      recognition.onend = () => {
        console.log("ended");
      };
    } else {
      console.log("Speech Recognition not supported");
    }
  }, []);

  const startRecording = () => {
    if (recognition) {
      recognition.start();
    }
  };

  const stopRecording = () => {
    if (recognition) {
      recognition.stop();
    }
  };

  return (
    <div>
      <div className="flex gap-4">
        <Button
          className="flex items-center justify-center"
          onClick={startRecording}
        >
          Start <FaMicrophone size={20} className="ml-1" />
        </Button>
        <Button
          className="flex items-center justify-center"
          onClick={stopRecording}
        >
          Stop <FaMicrophoneSlash size={20} className="ml-1" />
        </Button>
      </div>
      <div
        id="result"
        className={`${voiceInput.length === 0 ? "hidden" : "mt-2 rounded-lg bg-zinc-300 px-2 py-1 text-black shadow-md"}`}
      >
        {voiceInput}
      </div>
    </div>
  );
};

export default Transcribe;
