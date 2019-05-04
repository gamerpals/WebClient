const { app, BrowserWindow } = require('electron')

let win

function createWindow () {
  win = new BrowserWindow({ width: 1280, height: 720, frame: false, backgroundColor: '#FFF',
    webPreferences: {nodeIntegration: true},
    icon:'dist/GamerPalsWebsite/favicon.ico'
  })

  win.loadFile('dist/GamerPalsWebsite/index.html')
  //win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})