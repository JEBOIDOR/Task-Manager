import {
  Typography,
  Wrapper,
  Image,
  Indicator,
  Figure,
  Separator,
} from "../ui";
import { Icon } from "@iconify-icon/react";
import { userProfileActions } from "../constants/styles";
import { Progressbar } from "./Progressbar";
import { useState } from "react";

export const Sidebar = () => {
  const [tasks] = useState([
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

  const projects = [
    "Taskly",
    "Dashsbit",
    "Planwise",
    "FocusNest",
    "Mindtrail",
    "Neurobit",
  ];

  return (
    <aside
      className="b-right scroll"
      style={{ minWidth: "360px", maxWidth: "420px" }}
    >
      <div
        className="b-bottom flex align-center justify-center"
        style={{ minHeight: "80px" }}
      >
        <Typography tag="h3" variant="gray" weight="bd">
          TASK MANAGER
        </Typography>
      </div>

      <Wrapper className="flex column">
        <Wrapper className="p-4">
          <div className="flex column align-center">
            <Image
              src="/sandra_novak.webp"
              className="full-r"
              width="70px"
              height="70px"
            />
            <Typography tag="span" variant="black" size="md" className="py-1">
              Natalie Smith
            </Typography>
            <Typography tag="span" variant="gray" size="sm">
              natalieSmith@gmail.com
            </Typography>
          </div>

          <div className="p4 flex full-w justify-center gap-3 pt-2">
            {userProfileActions.map((action) => (
              <button className={action.styles} key={crypto.randomUUID()}>
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
        </Wrapper>
        <Separator />
        <Wrapper className="full-w p-4 flex column gap-1 ">
          <Typography tag="span" variant="black" align="left" weight="bd">
            PROJECTS
          </Typography>
          {projects.map(
            //FIX//
            (e, idx) =>
              idx <= 3 && (
                <>
                  <div className="flex align-center gap-2" key={idx}>
                    <Figure className="full-r sizing-1 bw-2" /*FIX*/ />
                    <Typography
                      variant="grey"
                      tag="span"
                      size="sm"
                      className="mr-2"
                    >
                      {e}
                    </Typography>
                  </div>
                </>
              )
          )}
          {projects.length > 3 && (
            <Typography
              variant="grey"
              tag="span"
              size="sm"
              align="right"
              className="pointer"
            >
              ...More
            </Typography>
          )}
        </Wrapper>
        <Separator />
        <Wrapper className="full-w p-4">
          <Typography tag="h2" variant="black" align="left" weight="bd">
            TEAM
          </Typography>
          <div className="flex wrap justify-center gap-2 mt-1">
            <Image
              src="/chloe_kim.avif"
              className="full-r"
              width="35px"
              height="35px"
            />
            <Image
              src="/elena_watson.avif"
              className="full-r"
              width="35px"
              height="35px"
            />
            <Image
              src="/marcela.avif"
              className="full-r"
              width="35px"
              height="35px"
            />
            <Image
              src="/jonathan_reyes.jpg"
              className="full-r"
              width="35px"
              height="35px"
            />
            <Image
              src="/marcus_lin.avif"
              className="full-r"
              width="35px"
              height="35px"
            />
          </div>
        </Wrapper>
      </Wrapper>
    </aside>
  );
};
