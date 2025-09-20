import { General, Header, Projects, Sidebar, Task } from "./components";
import { Wrapper } from "./ui";

export const App = () => {
  return (
    <Wrapper className="general-section flex min-h">
      <Sidebar />
      <General className="full-w">
        <Header />
        <Wrapper className="flex h-calc">
          <Wrapper className="one-hdrd-fv-max scroll max-h-90">
            <Projects />
            <div className="flex justify-center p-2 b-bottom">
              <button
                className="semi-r pointer create-task"
                onClick={(e) => console.log(e)}
              >
                Add task
              </button>
            </div>
          </Wrapper>
          <Task />
        </Wrapper>
      </General>
    </Wrapper>
  );
};
