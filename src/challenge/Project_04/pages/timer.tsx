import React, { useState } from "react";
import { TimerComponent } from "../component/timer";

export const Timer = () => {
  const [count, setCount] = useState(0);
  const [countUp, setCountUp] = useState(0);
  const [intervalId, setIntervalId] = useState<number | null>(null); // 明示的に型を指定

  const clickCount = () => {
    // すでにタイマーがセットされている場合はそれ以上処理しない
    if (intervalId !== null) return;

    // setIntervalの戻り値を明示的にnumber型にキャスト
    const id: number = window.setInterval(() => {
      setCount((currentCount) => currentCount + 1);
    }, 1000);
    setIntervalId(id);
  };

  const countUpfunc = () => {
    setCountUp((countUp) => countUp + 1);
  };

  const resetCount = () => {
    if (intervalId !== null) {
      clearInterval(intervalId); // タイマーを停止
      setIntervalId(null); // タイマーIDをリセット
    }
    setCount(0); // カウントをリセット
  };

  // カウントを一時停止するロジックが必要であれば、実装する
  const pauseCount = () => {
    // 一時停止のロジックを実装
    if (intervalId !== null) {
      clearInterval(intervalId); // タイマーを停止
      setIntervalId(null); // タイマーIDをリセット
    }
  };

  const minusCount = () => {
    setCount((currentCount) => Math.max(0, currentCount - 1));
  };

  const plusCount = () => {
    setCount((currentCount) => currentCount + 1);
  };

  return (
    <div>
      <TimerComponent
        count={count}
        countUp={countUp}
        countUpfunc={countUpfunc}
        clickCount={clickCount}
        pauseCount={pauseCount}
        resetCount={resetCount}
        minusCount={minusCount}
        plusCount={plusCount}
      />
    </div>
  );
};
