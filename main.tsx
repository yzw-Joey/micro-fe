import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { registerMicroApps, start } from "qiankun";

const apps = [
  {
    name: "vueApp",
    entry: "//localhost:7001",
    container: "#vue",
    activeRule: "/vue",
  },
  {
    name: "reactApp",
    entry: "//localhost:7002",
    container: "#react",
    activeRule: "/react",
  },
];
registerMicroApps(apps);
start();

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);
