const application = require('app'),
      BrowserWindow = require('browser-window');

application.on('ready', () => {
  let mainWindow = new BrowserWindow({window: 600, height: 300});
  mainWindow.loadUrl(`file://${__dirname}/main.html`);
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
