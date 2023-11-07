import ITask from "../../../types/ITask";
import style from "../list.module.scss";

const Item = ({ task, time, selected, completed, id }: ITask) => {
  console.log("item atual:", { task, time, selected, completed, id });
  return (
    <li className={style.item}>
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  );
};

export default Item;
