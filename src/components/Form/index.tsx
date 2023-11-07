import { useState } from "react";
import Button from "../Button";
import style from "./form.module.scss";
import ITask from "../../types/ITask";
import { v4 as uuidv4 } from "uuid";

const Form: React.FC<{
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}> = ({ setTasks }) => {
  const [task, setTask] = useState<string>("");
  const [time, setTime] = useState<string>("00:00:00");

  const handleTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTime(event.target.value);
  };

  const addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTask: ITask = {
      task: task,
      time: time,
      selected: false,
      completed: false,
      id: uuidv4(),
    };
    setTasks((oldTasks) => [...oldTasks, newTask]);
    setTask("");
    setTime("00:00:00");
  };

  return (
    <>
      <form className={style.newTask} onSubmit={addTask}>
        <div className={style.inputContainer}>
          <label htmlFor={style.task}> Add new study </label>
          <input
            type="text"
            name="task"
            id="task"
            value={task}
            onChange={handleTask}
            placeholder="What do you want to study?"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="time"> Time </label>
          <input
            type="time"
            step="1"
            name="time"
            value={time}
            onChange={handleTimeChange}
            id="time"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Button type="submit"> Add</Button>
      </form>
    </>
  );
};

export default Form;
