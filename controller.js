$(document).ready(function(){
  const {remote} = require('electron')
  const window = remote.BrowserWindow.getFocusedWindow();
  const app = require('electron').remote.app;

  $('#btnCancel').click(function(){
    console.log("Fechar!");
    window.close();
  });

  $('#btnPlus').click(function(){
    if(window.isMaximized()) {
      console.log("Restaurar!");
      window.restore();
    } else {
      console.log("Maximizar!");
      window.maximize();
    }
  });

  $('#btnMinus').click(function(){
    console.log("Minimizar!");
    window.minimize();
  });
});
