// Executing Steam Games is Fun!
// P.S. this is a library so we can include it to launch steam games :D
const ex=require('/g7/shared/executor.js');
const { readdirSync } = require('fs') //File System needed
function exec_STEAM(game,arch){
  console.log('Checking Arch @ exec_STEAM...');
if(arch!='x86' && arch!='x86_64'){
throw 'Error: Invalid Architecture for game defined.';
 }
  console.log('Booting Game...');
  ex.execute('exec ~/.steam/steam/steamapps/common/'+game+'.'+arch); //This line does all the real magic
} // This runs steam games
module.exports = {exec_STEAM};
