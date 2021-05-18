// This is a preload.js but for safe mode where it will read the INT_SAFEMODE.txt and
// launch the app with the given title, "G7Frontend" = null!!!
let contents='';
fetch('file:///g7/INT_SAFEMODE.txt')
  .then(response => response.text())
  .then(text => contents=text)
// We set contents to text, now to launch it!
if(contents=='G7Frontend'||contents=='g7frontend'){
console.log('INT_SAFEMODE is null! Halting...');
throw 'Halted Execution.';
}
else{
// We can't execute anything yet. How am I going to do this with Preload safe?
}
