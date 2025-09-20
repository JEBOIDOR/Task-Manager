import { useContext } from "react";
import { ContextProvider } from "../context/Provider";
import { Icon, Wrapper, Separator } from "../ui";

export const Task = () => {
  //IMPROVE IMPROVE !!!
  const { task } = useContext(ContextProvider);
  console.log(task);

  if (Object.keys(task).length == 0)
    return (
      <Wrapper className="p-4 bg-tab full-w flex align-center justify-center">
        <h3 className="text-gray text-bold f-28 float">No Task Selected Yet</h3>
      </Wrapper>
    );

  return (
    <Wrapper className="p-4 flex column b-left full-w gap-2">
      <h3>{task.title}</h3>
      <div>
        <Icon icon="mdi:clock-outline" />
        date
      </div>
      <p> {task.description} </p>
      <Separator />
      <>
        {/**COMENTS */}
        {task.comments.map((comment) => (
          <div className="flex gap-2">
            <p className="f-smaller text-normal text-light-grey">
              {comment.author}
            </p>
            <p>{comment.message}</p>
            <span>{comment.createdAt}</span>
          </div>
        ))}
      </>
      <Separator />
      <>{/**MEMBERS */}</>
      <>{/**DOCS */}</>
    </Wrapper>
  );
};
