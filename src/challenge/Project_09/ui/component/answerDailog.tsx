import React from "react";

interface AnswerDialogProps {
  isCorrect: boolean;
  meaning_jp: string;
  onClose: () => void;
}

export const AnswerDialog: React.FC<AnswerDialogProps> = (props) => {
  const { isCorrect, onClose, meaning_jp } = props;

  const dialogClassName = `fixed inset-0 flex items-center justify-center z-50 ${
    isCorrect ? "bg-green-500" : "bg-red-500"
  } bg-opacity-50`;

  const contentClassName = `bg-white p-8 rounded-lg shadow-lg text-center`;

  return (
    <div className={dialogClassName}>
      <div className={contentClassName}>
        <h2 className="text-2xl font-bold mb-4">
          {isCorrect ? "正解！" : "不正解"}
        </h2>
        <p className="mb-6">
          {isCorrect
            ? "おめでとうございます！正解です。"
            : `不正解です。正解は「${meaning_jp}」です。`}
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={onClose}
        >
          閉じる
        </button>
      </div>
    </div>
  );
};
