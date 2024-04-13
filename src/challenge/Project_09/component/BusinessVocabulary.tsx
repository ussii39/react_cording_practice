import React from "react";
import { FaVolumeUp } from "react-icons/fa";

interface EnglishWord {
  word: string;
  nextPage(): void;
}

const BusinessVocabulary: React.FC<EnglishWord> = (props) => {
  const synth = React.useRef<SpeechSynthesis | null>(null);

  React.useEffect(() => {
    synth.current = window.speechSynthesis;
  }, []);

  const playSound = (speech: string) => {
    if (synth.current) {
      const utterance = new SpeechSynthesisUtterance(speech);
      utterance.lang = "en-US";
      synth.current.speak(utterance);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mx-auto w-full">
      <div className="flex items-center justify-center border-b border-gray-200 relative">
        <h2 className="text-xl font-bold text-center mr-4">{props.word}</h2>
        <FaVolumeUp
          className="text-2xl text-blue-500 cursor-pointer"
          onClick={() => playSound(props.word)}
        />
      </div>
      <button
        onClick={() => props.nextPage()}
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded block mx-auto"
      >
        PASS &gt;&gt;
      </button>
    </div>
  );
};

export default BusinessVocabulary;
