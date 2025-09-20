import { useState } from "react";
import { useContext } from "react";
import { ContextProvider } from "../context/Provider";
import { Icon } from "../ui";
import type { Task } from "../interfaces/interfaces";

type Project = {
  name: string;
  color: string;
  tasks: Task[];
};

export const ToggleMenu = ({ project }: { project: Project }) => {
  const [toggle, setToggle] = useState(false);
  const icon = toggle ? (
    <Icon icon="mingcute:up-fill" />
  ) : (
    <Icon icon="mingcute:down-fill" />
  );
  return (
    <>
      <div
        className="flex align-center justify-between p-3 b-bottom pointer"
        onClick={() => setToggle((toggle) => !toggle)}
        style={{ borderLeft: `4px solid ${project.color}` }}
      >
        <h4>{project.name}</h4>
        {icon}
      </div>
      <div className={toggle ? "dropdown-opts-container" : "collapsed"}>
        <Tasks tasks={project.tasks} />
      </div>
    </>
  );
};

const Tasks = ({ tasks }: { tasks: Task[] }) => {
  const { setTask } = useContext(ContextProvider);

  return tasks.map((task: Task) => (
    <div
      className="p-3 b-bottom hover-uns pointer"
      key={crypto.randomUUID()}
      onClick={() => setTask(task)}
    >
      <p>{task.title}</p>
      <p>{`${task.date}`}</p>
    </div>
  ));
};
