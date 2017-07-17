"use strict";

const electron = require('electron');

// application module to control life of application
const app = electron.app;

// module to create native browser window
const browserWindow = electron.BrowserWindow;

// we will keep global reference to window object 
// to avoid application crash issue when javascript
// object is garbage collected
var mainWindow = null;

// Quit application when all windows are closed
app.on("windows-all-closed", function () {
    // On OS X it is common for applications and their
    // menu barto stay active until the user quits
    // explicitly with Cmd + Q
    if (process.platform != 'darwin') {
        app.quit();
    }
});

// This method will be called when electron has finished
// initialization and its ready to create browser window
app.on("ready", function () {
    // create browser window
    mainWindow = new browserWindow({ width: 800, height: 600 });

    // load layout screen
    mainWindow.loadURL("file://" + __dirname + "/index.html");

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you
        // would store windows in an array if your
        // app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });

});