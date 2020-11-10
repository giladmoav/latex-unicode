var unicodeit = require('unicodeit');

text=window.getSelection().toString()
// console.log(text)

msg_box= document.activeElement;
unicode= unicodeit.replace(text);
// console.log(unicode);
current_message= msg_box.innerHTML;
// console.log(current_message);
msg_box.innerHTML = current_message.replace(text,unicode);
