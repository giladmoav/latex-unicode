var unicodeit = require('unicodeit');
window.addEventListener('mouseup', wordSelected);

  // "background": {
  //   "scripts": ["background.js"]
  // },
function wordSelected() {
  let selectedText = window
    .getSelection()
    .toString()
    .trim();
  
  if (selectedText.length > 0 && selectedText.slice(0,2)=="$$" && selectedText.slice(-2)=="$$") {
    f1(selectedText);
  }
}


function f1(text) {
  msg_box= document.querySelectorAll("[contenteditable='true']")[1];
  unicode= unicodeit.replace(text.slice(2,-2));
  // console.log(unicode);
  current_message= msg_box.innerHTML;
  // console.log(current_message);
  msg_box.innerHTML = current_message.replace(text,unicode);
}