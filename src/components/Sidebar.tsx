import { Typography } from "../ui/Typography";
import { Wrapper } from "../ui/Wrapper";
import { Image } from "../ui/Image";
import { Icon } from "@iconify-icon/react";
import { Float } from "../ui/Float";
import { userProfileActions } from "../constants/constants";
import { Progressbar } from "./Progressbar";
import { useState } from "react";

export const Sidebar = ({ className }: { className?: string }) => {
  const [tasks, setTasks] = useState([
    { completed: false },
    { completed: false },
    { completed: false },
    { completed: false },
    { completed: true },
    { completed: false },
    { completed: false },
    { completed: false },
    { completed: false },
    { completed: false },
    { completed: true },
    { completed: false },
    { completed: true },
    { completed: false },
    { completed: true },
    { completed: false },
    { completed: true },
    { completed: false },
    { completed: true },
    { completed: false },
    { completed: true },
  ]);

  return (
    <aside className={`border-gray quarter-screen ${className || ""}`}>
      <div className="p-4 b-bottom">
        <Typography tag="h3" variant="gray" weight="bd" align="center">
          TASK MANAGER
        </Typography>
      </div>
      <Wrapper className="p-3 flex column align-center">
        <Image src="/sara.webp" className="r-full" width="70px" height="70px" />
        <Typography tag="span" variant="black" size="md" className="py-1">
          Natalie Smith
        </Typography>
        <Typography tag="span" variant="gray" size="sm">
          natalieSmith@gmail.com
        </Typography>
        <div className="flex full-w justify-center gap-3 pt-2">
          {userProfileActions.map((action) => (
            <button className={action.styles}>
              <Icon
                icon={action.icon}
                width="26"
                height="18"
                style={{ marginTop: "2px" }}
                className="p-1"
              />
              <Float className={action.indicator!}>
                {action.indicator && "1" /*FIX*/}
              </Float>
            </button>
          ))}
        </div>

        <Progressbar tasks={tasks} />
      </Wrapper>
    </aside>
  );
};
