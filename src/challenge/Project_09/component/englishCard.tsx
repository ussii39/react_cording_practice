import React from "react";

interface EnglishWord {
  id: number;
  // word: string;
  // is_correct: number;
  // part_of_speech: string;
  meaning_jp: string;
  handleAnswerCheck(id: number): void;
}

export const EnglishCard: React.FC<EnglishWord> = ({
  meaning_jp,
  id,
  handleAnswerCheck,
}) => {
  return (
    <>
      <div
        onClick={() => handleAnswerCheck(id)}
        className="w-full bg-white my-5 h-16 flex items-center justify-start p-4 cursor-pointer"
      >
        <div>{meaning_jp}</div>
      </div>
    </>
  );
};
