import React, { useCallback, useEffect, useState } from "react";
import {
  getEnglishWords,
  getEnglishWordByPage,
} from "src/services/englishWord.service";
import BusinessVocabulary from "../component/BusinessVocabulary";
import { EnglishCard } from "../component/englishCard";
import { EnglishWord } from "entity/EnglishWord";
import { AnswerDialog } from "../ui/component/answerDailog";

export const EnglishPage: React.FC = () => {
  const [englishWords, setEnglishWords] = useState<EnglishWord[]>([]);
  const [answerEnglishWord, setAnswerEnglishWord] = useState<EnglishWord>();

  const [currentPage, setCurrentPage] = useState(1);
  const [showDialog, setShowDialog] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const fetchEnglishWordByPage = useCallback(async (page: number) => {
    const words = await getEnglishWordByPage(page);
    console.log(words);
    setAnswerEnglishWord(words[0]);
    setEnglishWords(shuffleArray(words));
  }, []);

  useEffect(() => {
    fetchEnglishWordByPage(currentPage);
  }, [currentPage, fetchEnglishWordByPage]);

  const fetchEnglishWordList = async () => {
    const querySnapshot = await getEnglishWords();
    const words = querySnapshot.docs.map((doc) => doc.data() as EnglishWord);

    setEnglishWords(words);
  };

  const handleDialogClose = () => {
    setShowDialog(false);
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleAnswerCheck = (id: number) => {
    if (answerEnglishWord?.id === id) {
      setShowDialog(true);
      setIsCorrect(true);
    } else {
      setShowDialog(true);
      setIsCorrect(false);
    }
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  // シャッフル関数
  const shuffleArray = (array: EnglishWord[]): EnglishWord[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  return (
    <>
      <div className="w-screen bg-gray-200 p-12">
        {/* <button onClick={() => nextPage()}>Next Page</button> */}

        {englishWords.length > 0 && (
          <BusinessVocabulary
            word={answerEnglishWord!.word}
            nextPage={nextPage}
          />
        )}
        {englishWords.map((word, i) => (
          <EnglishCard
            handleAnswerCheck={handleAnswerCheck}
            key={word.id}
            meaning_jp={word.meaning_jp}
            id={word.id}
          />
        ))}
      </div>
      {showDialog && (
        <AnswerDialog
          meaning_jp={answerEnglishWord!.meaning_jp}
          isCorrect={isCorrect}
          onClose={handleDialogClose}
        />
      )}
    </>
  );
};
