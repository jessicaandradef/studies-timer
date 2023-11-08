import style from "./watch.module.scss";

interface Props {
  time: number | undefined;
}

const Watch = ({ time = 0 }: Props) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [tenMinute, unitMinute] = String(minutes).padStart(2, "0");
  const [tenSecond, unitSecond] = String(seconds).padStart(2, "0");

  return (
    <>
      <span className={style.watchNumber}>{tenMinute}</span>
      <span className={style.watchNumber}>{unitMinute}</span>
      <span className={style.watchDivision}>:</span>
      <span className={style.watchNumber}>{tenSecond}</span>
      <span className={style.watchNumber}>{unitSecond}</span>
    </>
  );
};

export default Watch;
