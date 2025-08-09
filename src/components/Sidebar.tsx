import { Typography, Wrapper, Image, Indicator, Figure } from "../ui/index";
import { Icon } from "@iconify-icon/react";
import { userProfileActions } from "../constants/styles";
import { Progressbar } from "./Progressbar";
import { useState } from "react";

export const Sidebar = () => {
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
    <aside
      className="border-gray quarter-screen scroll"
      style={{ minWidth: "270px" }}
    >
      <div className="b-bottom" style={{ minHeight: "80px" }}>
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
          {userProfileActions.map((action, idx) => (
            <button className={action.styles} key={idx}>
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
        <Wrapper className="full-w mb-2 mt-2 flex column gap-1 ">
          <Typography tag="span" variant="black" align="left" weight="nm">
            PROJECTS
          </Typography>

          {[["Marketing"], ["Design"], ["Development"], ["Managment"]].map(
            //FIX//
            (e, idx) => (
              <div className="flex align-center gap-2" key={idx}>
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
          <div className="flex wrap justify-center gap-2 mt-1">
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
