// window.ipcRenderer = require('electron').ipcRenderer

// import { contextBridge, ipcRenderer } from "electron";
// contextBridge.exposeInMainWorld("electron", {
//     ipcRenderer,
// })
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('versions', {
  ping1: () => ipcRenderer.invoke('run_todolist'),
  ping2: () => ipcRenderer.invoke('run_clock'),
  ping3: () => ipcRenderer.invoke('run_weather')
  // 能暴露的不仅仅是函数，我们还可以暴露变量
})
