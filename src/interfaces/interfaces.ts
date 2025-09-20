// interface Inbox {
//   createdAt: string,
//   from: string;
//   to: string;
//   comment: Comment
// }

export interface File {
  id: string;
  createdAt: string;
  file: string;
}

export interface Settings {
  theme: "light" | "dark";
}

export interface Notification {
  id: string;
  createdAt: string;
  message: string;
}

//NOT REPEATED COMMENTS IN PROJECTS
export interface Comment {
  author: string;
  message: string;
  createdAt: string;
}

export interface User {
  id: string;
  full_name: string;
  notifications: Notification[];
  settings: Settings;
  // inbox: Inbox[];
  projects: Project[];
  teams: Team[];
}

export interface Project {
  id: string;
  createdAt: string;
  name: string;
  teams: Team[];
  tasks: Task[];
  color: string;
}

export interface Team {
  id: string;
  name: string;
  members: [];
  assignedTasks: [];
}

export interface Task {
  id: string | `${string}-${string}-${string}-${string}-${string}`;
  date: string;
  state: "Doing" | "Completed" | "In Review";
  title: string;
  description: string;
  comments: Comment[];
  assignedUsers: [];
  files: File[];
}
