import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App";

if (!(window as any).__POWERED_BY_QIANKUN__) {
  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
}

export async function bootstrap() {
  console.log("bootstrap React");
}

export async function mount(props) {
  console.log("mount React");
  ReactDOM.createRoot(props.container.querySelector("#root")).render(<App />);
}

export async function unmount() {
  console.log("unmount React");
}

export async function update() {
  console.log("update React");
}
