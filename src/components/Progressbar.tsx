import { Typography } from "../ui/Typography";

export const Progressbar = ({ tasks }: { tasks: any }) => {
  const completedTasks = tasks.filter((t: any) => t.completed === true).length;
  const progress = (completedTasks / tasks.length) * 100;

  return (
    <>
      <Typography tag="span" size="sm" variant="gray" className="text-left">
        {completedTasks} / {tasks.length}
      </Typography>
      <div className="full-w h-1 mt-1 br-2 bg-no-fill br-2 overflow-h">
        <div className="full-h icon-color" style={{ width: progress }}></div>
      </div>
    </>
  );
};
