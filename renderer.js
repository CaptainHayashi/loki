// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
'use strict'

const {ipcRenderer} = require('electron');

var connectBtn = document.querySelector('#studio-custom-connect');
var connectStatus = document.querySelector('#studio-custom-status');
var connectHost = document.querySelector('#studio-custom-host');
var connectPort = document.querySelector('#studio-custom-port');

ipcRenderer.on('studio-change',
  (event, arg) =>
    connectStatus.textContent = arg.host
);

connectBtn.addEventListener('click',
  function() {
    ipcRenderer.send('studio-connect',
      {
        "host": connectHost.value,
        "port": connectPort.valueAsNumber
      }
    );
  }
);