import { app, BrowserWindow, ipcMain, Tray, dialog } from "electron";
import path, { join } from "path";
import installExtension, {
  REACT_DEVELOPER_TOOLS
} from "electron-devtools-installer";

import createWindow from "./createWindow";
import autoUpdator from "./autoUpdator";
import createStore from "./createStore";

if (process.env.NODE_ENV === "development") {
  require("electron-debug")();
}

process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";

let mainWindow;

global.envVariables = {
  rendererDom: "electron"
};

function start() {
  installExtension(REACT_DEVELOPER_TOOLS)
    .then(name => console.log(`Added Extension: ${name}`))
    .catch(err => console.log("An error occurred: ", err));

  createStore();

  if (!mainWindow) {
    mainWindow = createWindow();
  }
  autoUpdator(mainWindow);

  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
  });
}

app.on("ready", start);
