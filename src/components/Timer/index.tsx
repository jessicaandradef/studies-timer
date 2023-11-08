import { useEffect, useState } from "react";
import timeToSeconds from "../../common/utils/time";
import ITask from "../../types/ITask";
import Button from "../Button";
import Watch from "./Watch";
import style from "./timer.module.scss";

interface Props {
  selected: ITask | undefined;
}

const Timer = ({ selected }: Props) => {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);

  const decreaseTime = (counter: number = 0) => {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1);
        return decreaseTime(counter - 1);
      }
    }, 1000);
  };

  return (
    <div className={style.timer}>
      <p className={style.title}>Choose a card and start the timer</p>
      <div className={style.watchWrapper}>
        <Watch time={time} />
      </div>
      <Button onClick={() => decreaseTime(time)}>Start!</Button>
    </div>
  );
};

export default Timer;
