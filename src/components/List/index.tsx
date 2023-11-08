import style from "./list.module.scss";
import Item from "./Item";
import ITask from "../../types/ITask";

interface Props {
  tasks: ITask[];
  selectTask: (taskSelected: ITask) => void;
}

const List = ({ tasks, selectTask }: Props) => {
  return (
    <aside className={style.taskList}>
      <h2>Studies of the day</h2>
      <ul>
        {tasks.map((item) => (
          <Item selectTask={selectTask} {...item} key={item.id} />
        ))}
      </ul>
    </aside>
  );
};

export default List;
