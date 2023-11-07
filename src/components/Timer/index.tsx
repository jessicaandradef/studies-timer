import Button from "../Button";
import Watch from "./Watch";
import style from "./timer.module.scss";

const Timer = () => {
  return (
    <div className={style.timer}>
      <p className={style.title}>Choose a card and start the timer</p>
      <div className={style.watchWrapper}>
        <Watch />
      </div>
      <Button>Start!</Button>
    </div>
  );
};

export default Timer;
