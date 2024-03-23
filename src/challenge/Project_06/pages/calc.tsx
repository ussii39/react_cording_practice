import React, { useState } from "react";
import { CalcCardComponent } from "../component/card";

export const CalcPage = () => {
  const texts = [
    "7",
    "8",
    "9",
    "+",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "*",
    "0",
    "/",
    "=",
  ];
  const [currentNumber, setcurrentNumber] = useState("");
  const [prevNumber, setPrevNumber] = useState(0);
  const [total, setTotal] = useState(0);
  const [selectedOperator, setSelectedOperator] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const clickCard = (text: string, isOperator: boolean) => {
    if (isOperator) {
      if (text === "=") {
        calculate();
      } else {
        setSelectedOperator(text);
        setPrevNumber(total);
        setcurrentNumber("");
      }
    } else {
      const newNumber = currentNumber + text;
      setcurrentNumber(newNumber);
      setTotal(Number(newNumber));
    }
  };

  const calculate = () => {
    try {
      let result = 0;
      switch (selectedOperator) {
        case "+":
          result = prevNumber + Number(currentNumber);
          break;
        case "-":
          result = prevNumber - Number(currentNumber);
          break;
        case "*":
          result = prevNumber * Number(currentNumber);
          break;
        case "/":
          if (currentNumber === "0") {
            throw new Error("0で割ることはできません");
          }
          result = prevNumber / Number(currentNumber);
          break;
        default:
          break;
      }
      setPrevNumber(total);
      setTotal(result);
      setcurrentNumber("");
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  };

  const clear = () => {
    setcurrentNumber("");
    setPrevNumber(0); // <-- ここで prevNumber を更新
    setTotal(0);
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <div className="container xl bg-gray-900 p-4 rounded-lg">
          {errorMessage && (
            <div data-testid="error-message">{errorMessage}</div>
          )}

          <div className="mb-4">
            <input
              className="bg-gray-800 text-white rounded-lg py-2 px-4 text-right text-3xl font-semibold w-full"
              type="text"
              value={total}
              readOnly
              data-testid="total"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {texts.map((text) => (
              <CalcCardComponent
                key={text}
                text={text}
                clickCard={clickCard}
                isOperator={["+", "-", "*", "/", "="].includes(text)}
              />
            ))}
          </div>
          <button
            onClick={() => clear()}
            className="mt-4 bg-gray-600 hover:bg-gray-500 text-white rounded-lg py-2 px-4 text-lg font-semibold w-full"
          >
            Clear
          </button>
        </div>
      </div>
    </>
  );
};
