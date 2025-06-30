import { setupMocks } from "./api/AxiosMockProvider.ts";
import "./styles/variables.css";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";

setupMocks();
createRoot(document.getElementById("root")!).render(<App />);
