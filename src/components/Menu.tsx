import { useState } from "react";
import { Icon } from "../ui/Icon";

interface Project {
  title: string;
  date: string;
}
const projects = [
  {
    title: "Write an articke about design",
    status: "completed",
    date: "22 Feb, 2019",
  },
  {
    title: "Write an articke about design",
    status: "completed",
    date: "22 Feb, 2019",
  },
  {
    title: "Write an articke about design",
    status: "pending",
    date: "22 Feb, 2019",
  },
];

export const Menu = ({ opt }: { opt: string }) => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="dropdown">
      <div className="dropdown-crt-opt">
        <h4>{opt}</h4>
        {(toggle && <Icon icon="mingcute:down-fill" />) || (
          <Icon icon="mingcute:up-fill" />
        )}
      </div>
      <div className={toggle ? "dropdown-opts-container" : "collapsed"}>
        <MenuOpt opts={projects} />
      </div>
    </div>
  );
};

const MenuOpt = ({ opts }: { opts: Project[] }) => {
  return opts.map((opt) => (
    <div className="dropdown-opt">
      <p>{opt.title}</p>
      <p>{opt.date}</p>
    </div>
  ));
};
