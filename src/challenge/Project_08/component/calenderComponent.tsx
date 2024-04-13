import React from "react";

interface DateProps {
  date: Date;
  isFirstWeek: boolean;
}

export const CalenderComponent = ({ date, isFirstWeek }: DateProps) => {
  const formatDate = (date: Date): number => {
    return date.getDate();
  };

  const isToday = (date: Date): boolean => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const isWeekend = (date: Date): boolean => {
    const dayOfWeek = date.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6;
  };

  const isHoliday = (date: Date): boolean => {
    // ここで祝日の判定ロジックを実装する
    // 例えば、固定の祝日や計算で求める祝日の判定を行う
    // 今回は簡単のため、常にfalseを返すようにしています
    return false;
  };

  const getDayOfWeek = (date: Date): string => {
    const dayOfWeek = date.getDay();
    const days = ["日", "月", "火", "水", "木", "金", "土"];
    return days[dayOfWeek];
  };

  const renderBlankCells = (date: Date): JSX.Element[] => {
    const blankCells = [];
    const firstDayOfWeek = new Date(
      date.getFullYear(),
      date.getMonth(),
      1
    ).getDay();

    for (let i = 0; i < firstDayOfWeek; i++) {
      blankCells.push(
        <div key={`blank-${i}`} className="text-center p-4"></div>
      );
    }

    return blankCells;
  };

  return (
    <>
      {isFirstWeek && renderBlankCells(date)}
      <div className="flex flex-col items-center">
        <div
          className={`text-center p-4 rounded ${
            isWeekend(date) || isHoliday(date)
              ? "text-red-500 bg-white border"
              : isToday(date)
              ? "bg-blue-500 text-white"
              : "bg-white border"
          }`}
        >
          {formatDate(date)}
        </div>
      </div>
    </>
  );
};
