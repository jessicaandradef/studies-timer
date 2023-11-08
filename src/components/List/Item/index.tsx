import ITask from "../../../types/ITask";
import style from "./item.module.scss";

interface Props extends ITask {
  selectTask: (taskSelected: ITask) => void;
}

const Item = ({ task, time, selected, completed, id, selectTask }: Props) => {
  return (
    <li
      className={`${style.item} ${selected ? style.selectedItem : ""} ${
        completed ? style.completedItem : ""
      }`}
      onClick={() =>
        !completed &&
        selectTask({
          task,
          time,
          selected,
          completed,
          id,
        })
      }
    >
      <h3>{task}</h3>
      <span>{time}</span>
      {completed && (
        <span className={style.finished} aria-label="task completed"></span>
      )}
    </li>
  );
};

export default Item;
