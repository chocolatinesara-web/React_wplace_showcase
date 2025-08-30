import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <header>
      <h1>Asmoncord Photo Album | Wplace 2025</h1>
    
      <a href="https://discord.gg/asmongold " target="_blank" rel="noreferrer noopener">
        Discord
      </a>
    </header>
    <main>
      <App />
    </main>
  </React.StrictMode>,
);
