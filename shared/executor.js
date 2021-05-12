var cp = require('child_process');
function execute(shell){
cp.exec(shell, function(err, stdout, stderr) {
  // handle err, stdout, stderr
});}