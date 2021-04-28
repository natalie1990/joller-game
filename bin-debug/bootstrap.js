const { app, BrowserWindow } = require('electron')

function createWindow () {
    let win = new BrowserWindow({
        width: 1280,
        height: 720,
        useContentSize: true,
        resizable: false,
        webPreferences: {
            nodeIntegration: false
        }
    });

    win.setBackgroundColor("#FFFFFF");
    win.loadFile('./index.html');
    win.setFullScreen(false);
}

app.whenReady().then(createWindow)