const electron = require("electron");
const app = electron.app;

const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;

const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    resizable: false,
    webPreferences: {
      webSecurity: false
    }
  });

  mainWindow.loadURL(
    isDev
      ? `file://${path.join(__dirname, "./build/index.html")}`
      : `file://${path.join(__dirname, "./build/index.html")}`
  );

  mainWindow.webContents.on('did-finish-load', function() {

  });

  var menu = Menu.buildFromTemplate([
      {
          label: 'Rumpus',
          submenu: [
              {label:'New Game / New Code',
                click() {mainWindow.webContents.executeJavaScript('restart()');}
              },
              {label:'Play Again (same players)',
                click() {mainWindow.webContents.executeJavaScript('again()');}
              },
              {type:'separator'},
              {label:'Exit',
                click() {
                    app.quit()
                }
              }
          ]
      }
  ])
  Menu.setApplicationMenu(menu);

  mainWindow.on("closed", () => (mainWindow = null));
}



app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
