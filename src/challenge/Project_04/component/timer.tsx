import { Button, Card, CardContent } from "@mui/material";
import { FC } from "react";

interface TimerProps {
  count: number;
  clickCount: () => void;
  resetCount: () => void;
  pauseCount: () => void;
  minusCount: () => void;
  plusCount: () => void;
  countUp: number;
  countUpfunc: () => void;
}

export const TimerComponent: FC<TimerProps> = ({
  count,
  clickCount,
  pauseCount,
  resetCount,
  plusCount,
  minusCount,
  countUp,
  countUpfunc,
}) => {
  return (
    <div>
      <Card className="w-full max-w-sm mx-auto grid gap-4">
        <CardContent className="p-4 flex flex-col items-center space-y-4">
          <div className="text-center space-y-2">
            <h2 className="text-lg font-bold" data-testid="timer-title">
              Circular Interface
            </h2>
            <p
              className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400"
              data-testid="timer-description"
            >
              Experience the interactive circle interface
            </p>
          </div>
          <div data-testid="countUp">{countUp}</div>
          <button onClick={() => countUpfunc()} data-testid="countupbutton">
            countUp
          </button>
          <div className="w-full flex flex-col items-center space-y-2">
            <div className="h-32 w-32 rounded-full bg-[#F59E0B] dark:bg-[#FDE047] flex items-center justify-center">
              <span
                className="text-4xl font-bold leading-none text-white dark:text-gray-900"
                data-testid="timer-count"
              >
                {count}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                size="small"
                onClick={() => clickCount()}
                data-testid="timer-begin-button"
              >
                Begin
              </Button>
              <Button
                onClick={() => pauseCount()}
                size="small"
                variant="outlined"
                data-testid="timer-pause-button"
              >
                Pause
              </Button>
              <Button
                onClick={() => resetCount()}
                size="small"
                data-testid="timer-reset-button"
              >
                Reset
              </Button>
            </div>
          </div>
          <div className="grid w-full gap-1.5">
            <div className="flex justify-between">
              <Button
                onClick={() => plusCount()}
                className="flex-1"
                size="small"
                data-testid="timer-plus-button"
              >
                +1 Minute
              </Button>
              <Button
                onClick={() => minusCount()}
                className="flex-1"
                size="small"
                variant="outlined"
                data-testid="timer-minus-button"
              >
                -1 Minute
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
