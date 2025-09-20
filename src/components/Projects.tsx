import { useEffect } from "react";
import { useState } from "react";
import { type Project } from "../interfaces/interfaces";
import { getProjects } from "../api/endpoints/projects";
import { ToggleMenu } from "./";
import { Wrapper } from "../ui";

export const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    (async () => {
      const projects = await getProjects();
      setProjects(projects);
    })();
  }, []);

  return (
    <Wrapper className=" flex-1 b-right flex column">
      {projects.map((project: Project) => (
        <div id={crypto.randomUUID()}>
          <ToggleMenu project={project} />
        </div>
      ))}
    </Wrapper>
  );
};
