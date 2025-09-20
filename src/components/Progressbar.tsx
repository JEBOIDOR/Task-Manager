import { Typography } from "../ui/";

export const Progressbar = ({ tasks }: { tasks: any }) => {
  const completedTasks = tasks.filter((t: any) => t.completed === true).length;
  const progress = (completedTasks / tasks.length) * 100;

  return (
    <>
      <Typography
        tag="p"
        size="smr"
        variant="gray"
        align="right"
        className="mt-3 full-w"
      >
        {completedTasks} / {tasks.length}
      </Typography>
      <div className="full-w h-1 br-2 bg-no-fill overflow-h">
        <div
          className="full-h br-2"
          style={{ width: `${progress}%`, backgroundColor: "black" }}
        ></div>
      </div>
    </>
  );
};
