import { BrowserWindow } from "electron"
import path from 'path'
const mainHtml = path.join(__dirname, '../build/index.html');

export default function createWindow() {
  console.log("Creating Window...");
  
    let mainWindow = new BrowserWindow({
      width: 1000,
      height: 600,
      minWidth: 800,
      minHeight: 600,
      frame: false,
      titleBarStyle: "hidden"
    });
  
    mainWindow.loadURL(`file://${mainHtml}`);
  
    mainWindow.on("closed", () => {
      mainWindow = null;
    });

    return mainWindow;
  }