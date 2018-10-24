import { ipcMain } from "electron"
import { autoUpdater } from "electron-updater"


  function send(mainWindow, event, text = "") {
    mainWindow && mainWindow.webContents.send(event, text);
  }
  
  export default function updater(mainWindow) {
    autoUpdater.on("checking-for-update", () => {
      send(mainWindow,"info", "Checking for update...");
    });
  
    autoUpdater.on("update-available", () => {
      send(mainWindow,"info", "Update available");
    });
  
    autoUpdater.on("update-not-available", () => {
      send(mainWindow,"info", "Update not available");
    });
  
    autoUpdater.on("error", e => {
      send(mainWindow,"info", "Error in auto-updater" + e);
    });
  
    autoUpdater.on("download-progress", () => {
      send(mainWindow,"info", "Download in progress...");
    });
  
    autoUpdater.on("update-downloaded", () => {
      send(mainWindow,"info", "Update downloaded");
      send(mainWindow,"update-downloaded");
    });
  
    ipcMain.on("restart", () => {
      autoUpdater.quitAndInstall();
    });
  
    autoUpdater.checkForUpdatesAndNotify();
  }
  