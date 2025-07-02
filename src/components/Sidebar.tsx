import { Typography } from "../ui/Typography";
import { Wrapper } from "../ui/Wrapper";
import { Image } from "../ui/Image";
import { Icon } from "@iconify-icon/react";
import { Indicator } from "../ui/Indicator";
import { userProfileActions } from "../constants/constants";
import { Progressbar } from "./Progressbar";
import { useState } from "react";
import { Figure } from "../ui/Figure";

export const Sidebar = ({ className }: { className?: string }) => {
  const [tasks, setTasks] = useState([
    { completed: false },
    { completed: false },
    { completed: false },
    { completed: false },
    { completed: true },
    { completed: true },
    { completed: true },
    { completed: true },
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
    { completed: false },
    { completed: true },
  ]);

  return (
    <aside className={`border-gray quarter-screen scroll ${className || ""}`}>
      <div className="p-3 b-bottom sticky">
        <Typography tag="h3" variant="gray" weight="bd" align="center">
          TASK MANAGER
        </Typography>
      </div>
      <Wrapper className="p-4 flex column align-center">
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
                width="24"
                height="16"
                style={{ marginTop: "2px" }}
                className="p-1"
              />
              <Indicator className={action.indicator!}>
                {action.indicator && "1" /*FIX*/}
              </Indicator>
            </button>
          ))}
        </div>
        <Progressbar tasks={tasks} />
        <Wrapper className="flex justify-between full-w">
          <div className="flex column align-center mt-1">
            <Typography tag="p" variant="black" size="md">
              12
            </Typography>
            <Typography tag="p" variant="grey" size="sm">
              completed
            </Typography>
            <Typography tag="p" variant="gray" size="smr">
              tasks
            </Typography>
          </div>
          <div className="flex column align-center mt-1">
            <Typography tag="p" variant="black" size="md">
              22
            </Typography>
            <Typography tag="p" variant="grey" size="sm">
              To do
            </Typography>
            <Typography tag="p" variant="gray" size="smr">
              tasks
            </Typography>
          </div>
          <div className="flex column align-center mt-1">
            <Typography tag="p" variant="black" size="md">
              243
            </Typography>
            <Typography tag="p" variant="grey" size="sm">
              all
            </Typography>
            <Typography tag="p" variant="gray" size="smr">
              completed
            </Typography>
          </div>
        </Wrapper>
        <Wrapper className="full-w mb-2 mt-2 flex column gap-1">
          <Typography tag="span" variant="black" align="left" weight="nm">
            PROJECTS
          </Typography>

          {[["Marketing"], ["Design"], ["Development"], ["Managment"]].map(
            (e) => (
              <div className="flex align-center gap-2">
                <Figure className="r-full sizing-1 bw-2" /*FIX*/ />
                <Typography
                  variant="grey"
                  tag="span"
                  size="sm"
                  className="mr-2"
                >
                  {e}
                </Typography>
              </div>
            )
          )}
        </Wrapper>
        <Wrapper className="full-w">
          <Typography tag="h2" variant="black" align="left">
            TEAM
          </Typography>
          <div className="flex wrap gap-2 mt-1">
            <Image
              src="/antonia.avif"
              className="r-full"
              width="45px"
              height="45px"
            />
            <Image
              src="/carla.avif"
              className="r-full"
              width="45px"
              height="45px"
            />
            <Image
              src="/marcela.avif"
              className="r-full"
              width="45px"
              height="45px"
            />
            <Image
              src="/marcos.avif"
              className="r-full"
              width="45px"
              height="45px"
            />
            <Image
              src="/richie.avif"
              className="r-full"
              width="45px"
              height="45px"
            />
          </div>
        </Wrapper>
      </Wrapper>
    </aside>
  );
};
