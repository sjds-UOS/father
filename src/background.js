'use strict'

import { app, protocol, BrowserWindow, Menu, ipcMain } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
import { exec } from 'child_process'
import path from "path"


const log = require('electron-log');
// const path = require("path")
log.transports.console.level = 'debug';
log.transports.file.resolvePath = () => '/home/wufang/Desktop/father/father1/log1.log'


const isDevelopment = process.env.NODE_ENV !== 'production'
// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

let ppath_todolist = '/home/wufang/Desktop/father/father1/public/todolist/xhznl-todo-list-0.2.3.AppImage'
let ppath_clock = '/home/wufang/Desktop/father/father1/public/clock/Clock-1.0.0.AppImage'
let ppath_weather = '/home/wufang/Desktop/father/father1/public/weather/weather-0.7.0.AppImage'
// log.error(path.join(__static,"../../"))
// let ppath_todolist = path.join(__static,'todolist/xhznl-todo-list-0.2.3.AppImage')
function runExec_todolist() {
  exec(ppath_todolist, {})
}

function runExec_clock(){
  exec(ppath_clock,{})
}

function runExec_weather(){
  exec(ppath_weather,{})
}
// const Menu = electron.Menu
async function createWindow() {
  // Create the browser window.
  Menu.setApplicationMenu(null)
  log.error(__static)
  log.error(path.join(__static,"preload.js"))
  const win = new BrowserWindow({
    width: 400,
    height: 600,
    title: "桌面小部件",
    // menuBarVisibility:false,
    transparent: true,
    // backgroundColor:'#0000000',
    webPreferences: {
      preload: path.join(__static, 'preload.js')
    }
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

app.on('ready', async () => {


  createWindow()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}
ipcMain.handle("run_todolist", () => {
  runExec_todolist();
})
ipcMain.handle("run_clock", () => {
  runExec_clock();
})
ipcMain.handle("run_weather", () => {
  runExec_weather();
})