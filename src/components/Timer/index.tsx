import { useState } from "react";
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

  if (selected?.time) {
    setTime(timeToSeconds(selected.time));
  }

  return (
    <div className={style.timer}>
      <p className={style.title}>Choose a card and start the timer</p>
      Time: {time}
      <div className={style.watchWrapper}>
        <Watch />
      </div>
      <Button>Start!</Button>
    </div>
  );
};

export default Timer;
