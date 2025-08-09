import axios from "axios";
import type { Project } from "../../interfaces/interfaces";

export const getProjects = async () => {
  try {
    const res = await axios.get("/projects", {
      headers: {
        "Content-Type": "application/json",
        // Accept: "application/json"
      },
    });
    return res.data;
  } catch (err) {
    if (err instanceof Error) {
      console.error({
        name: err.name,
        message: err.message,
      });
    } else {
      throw new Error("Uknown error");
    }
  }
};

export const createProject = async (project: Project) => {
  try {
    const res = await axios.post(
      "/project",
      { project },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    return res.data;
  } catch (err) {}
};

export const updateProject = async (projectId: string) => {};

export const deleteProject = async (projectId: string) => {};
