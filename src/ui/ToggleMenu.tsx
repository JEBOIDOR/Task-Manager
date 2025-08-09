import React, { useState } from "react";
import { Icon } from "./Icon";
import type { Project, Task } from "../interfaces/interfaces";

export const ToggleMenu: React.FC<Project> = ({ name, tasks }) => {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <div className="flex align-center b-bottom">
        <h4>{name}</h4>
        {(toggle && (
          <Icon icon="mingcute:up-fill" onClick={() => setToggle(!toggle)} />
        )) || (
          <Icon icon="mingcute:down-fill" onClick={() => setToggle(!toggle)} />
        )}
      </div>
      <div className={toggle ? "dropdown-opts-container" : "collapsed"}>
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
};

const Tasks = ({ tasks }: { tasks: Task[] }) => {
  return tasks.map((task) => (
    <div className="dropdown-opt" key={crypto.randomUUID()}>
      <p>{task.title}</p>
      <p>{`${task.date}`}</p>
    </div>
  ));
};
