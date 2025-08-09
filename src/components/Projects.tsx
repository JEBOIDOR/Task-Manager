import { useEffect } from "react";
import { useState } from "react";
import { getProjects } from "../api/endpoints/projects";
import { ToggleMenu } from "../ui/ToggleMenu";
import type { Project } from "../interfaces/interfaces";

export const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    (async () => {
      const projects = await getProjects();
      setProjects(projects);
      console.log(projects);
    })();
  }, []);

  return projects.map((project: Project) => (
    <ToggleMenu
      name={project.name}
      tasks={project.tasks}
      id={""}
      createdAt={""}
      teams={[]}
      color={""}
    />
  ));
};
