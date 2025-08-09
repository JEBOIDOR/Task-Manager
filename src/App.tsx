import { General } from "./components/General";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { Sidebar } from "./components/Sidebar";
import { Wrapper } from "./ui/index";

export const App = () => {
  return (
    <Wrapper className="general-section flex max-h">
      <Sidebar />
      <General className="full-w">
        <Header />
        <div className="wrapper-1 flex">
          <Wrapper className="navbar-section b-right full-w">
            <Projects />
          </Wrapper>
          <div className="project-section  full-w ">project info</div>
        </div>
      </General>
    </Wrapper>
  );
};
