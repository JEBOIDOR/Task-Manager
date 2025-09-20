import { setupMocks } from "./api/AxiosMockProvider.ts";
import { createRoot } from "react-dom/client";
import { AppContext } from "./context/Provider.tsx";
import { App } from "./App.tsx";
import "./index.css";
import "./styles/variables.css";
import "./styles/animations.css";

setupMocks();
createRoot(document.getElementById("root")!).render(
  <AppContext>
    <App />
  </AppContext>
);
