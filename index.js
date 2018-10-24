require('./build/main.js');
const {join} = require('path');

require('electron-reload')(__dirname, {
    electron: join(__dirname, 'node_modules', '.bin', 'electron')
  });
