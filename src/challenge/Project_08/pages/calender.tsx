import React, { useEffect, useState } from "react";
import { CalenderComponent } from "../component/calenderComponent";

export const CalenderPage = () => {
  const [dateArray, setDateArray] = useState<Date[]>([]);
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear()
  );
  const [currentMonth, setCurrentMonth] = useState<number>(
    new Date().getMonth()
  );

  useEffect(() => {
    const dates = getDatesInMonth(currentYear, currentMonth);
    setDateArray(dates);
  }, [currentYear, currentMonth]);

  const getDatesInMonth = (year: number, month: number) => {
    const dates: Date[] = [];
    const lastDay = new Date(year, month + 1, 0).getDate();
    for (let day = 1; day <= lastDay; day++) {
      const date = new Date(year, month, day);
      dates.push(date);
    }
    return dates;
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    } else {
      setCurrentMonth((prevMonth) => prevMonth - 1);
    }
  };

  const handleNextMonth = () => {
    console.log(currentMonth);
    if (currentMonth === 11) {
      setCurrentYear((prev) => prev + 1);
      setCurrentMonth(0);
    } else {
      setCurrentMonth((prevMonth) => prevMonth + 1);
    }
  };

  const daysOfWeek = ["日", "月", "火", "水", "木", "金", "土"];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{`${currentYear}年${
        currentMonth + 1
      }月`}</h1>
      <div className="mt-4 flex justify-between mb-6">
        <button
          className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handlePrevMonth}
        >
          前の月
        </button>
        <button
          className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleNextMonth}
        >
          次の月
        </button>
      </div>
      <div className="grid grid-cols-7 gap-4">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-center font-bold">
            {day}
          </div>
        ))}
        {dateArray.map((date, index) => (
          <CalenderComponent
            key={index}
            date={date}
            isFirstWeek={index === 0}
          />
        ))}
      </div>
    </div>
  );
};
