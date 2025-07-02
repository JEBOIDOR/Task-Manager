import { General } from "./components/General";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Wrapper } from "./ui/Wrapper";

export const App = () => {
  return (
    <Wrapper className="general-section flex border-gray max-h">
      <Sidebar />
      <General>
        <Header />
        <div className="wrapper-1">
          <div className="navbar-section border-gray">projects navbar</div>
          <div className="project-section border-gray">project info</div>
        </div>
      </General>
    </Wrapper>
  );
};
