// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
'use strict'

var connectBtn = document.querySelector('#custom-studio-connect');
var connectStatus = document.querySelector('#custom-studio-status');

connectBtn.addEventListener('click',
    function() {
        connectStatus.textContent = "woot!";
    }
);