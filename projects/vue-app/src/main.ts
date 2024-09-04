import { createApp } from "vue";

import {
  renderWithQiankun,
  qiankunWindow,
  QiankunProps,
} from "vite-plugin-qiankun/dist/helper";
import App from "./App.vue";

const initQianKun = () => {
  renderWithQiankun({
    bootstrap() {},
    mount(_props: any) {
      console.log("mount Vue");
      render(_props.container);
    },
    unmount(_props: any) {
      console.log("unmount Vue");
    },
    update: function (props: QiankunProps): void | Promise<void> {
      console.log("update Vue");
    },
  });
};

const render = (container?: string) => {
  const appDom = container ? container : "#app";
  createApp(App).mount(appDom);
};

qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render();
