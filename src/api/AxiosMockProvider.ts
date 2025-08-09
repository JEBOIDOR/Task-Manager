import { mock } from "./AxiosMockAdapter";
import { projects } from "../constants/mocks";
import { createProject } from "./project";
import type { AxiosRequestConfig } from "axios";
// import type { AxiosRequestConfig } from "axios";

export const setupMocks = () => {
  mock.onGet("/projects").reply((/*config: AxiosRequestConfig*/) => {
    return [200, projects];
  });

  mock.onPost("/projects").reply((config: AxiosRequestConfig) => {
    const { data } = config;

    const project = createProject(JSON.parse(data));
    return [200, project];
  });
};
