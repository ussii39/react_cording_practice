import React from "react";

interface CalcCardProps {
  text: string;
  isOperator?: boolean;
  clickCard: (text: string, isOperator: boolean) => void;
}

export const CalcCardComponent = ({
  text,
  isOperator = false,
  clickCard,
}: CalcCardProps) => {
  const bgColor = isOperator
    ? "bg-gray-600 hover:bg-gray-500"
    : "bg-gray-700 hover:bg-gray-600";

  return (
    <div
      className={`${bgColor} text-white rounded-lg flex items-center justify-center h-16 text-2xl font-bold cursor-pointer`}
      onClick={() => clickCard(text, isOperator)}
    >
      {text}
    </div>
  );
};
