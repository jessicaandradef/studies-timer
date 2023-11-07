import style from "./list.module.scss";
import Item from "./Item";
import ITask from "../../types/ITask";

const List = ({ tasks }: { tasks: ITask[] }) => {
  return (
    <aside className={style.taskList}>
      <h2>Studies of the day</h2>
      <ul>
        {tasks.map((item, index) => (
          <Item
            task={item.task}
            time={item.time}
            completed={item.completed}
            selected={item.selected}
            id={item.id}
            key={index}
          />
        ))}
      </ul>
    </aside>
  );
};

export default List;
