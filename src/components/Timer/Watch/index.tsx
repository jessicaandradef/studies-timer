import style from "./watch.module.scss";

const Watch = () => {
  return (
    <>
      <span className={style.watchNumber}>0</span>
      <span className={style.watchNumber}>0</span>
      <span className={style.watchDivision}>:</span>
      <span className={style.watchNumber}>0</span>
      <span className={style.watchNumber}>0</span>
    </>
  );
};

export default Watch;
