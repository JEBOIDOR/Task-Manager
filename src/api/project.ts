// import type { Project } from "../interfaces/interfaces";
import { projects } from "../constants/mocks";
import type { AxiosRequestConfig } from "axios";

export const createProject = (req: AxiosRequestConfig) => {
  const { data } = req.data;

  if (projects.some((name) => name === data.name))
    throw new Error("Duplicated project");

  const newProject = {
    id: crypto.randomUUID(),
    createdAt: Date.now(),
    ...data,
  };

  projects.push(newProject);

  return newProject;
};
