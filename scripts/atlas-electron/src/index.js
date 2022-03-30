require("dotenv").config();
const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    // frame: false,
    titleBarStyle: "hiddenInset",
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadURL(process.env.REACT_PATH);
}

app.whenReady().then(createWindow);
