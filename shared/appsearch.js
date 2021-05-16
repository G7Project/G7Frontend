const exe=require('executor.js'); // So we can launch bash scripts and launch games :P
const path = require('path');
const fs=require('fs');
let commands=[]; // This is the whole command list
let command_length=0;
let installed=[]; // List of installed apps that work with g7os
let installed_length=0;
function fromDir(startPath,filter){

    //console.log('Starting from dir '+startPath+'/');

    if (!fs.existsSync(startPath)){
        console.log("no dir ",startPath);
        return;
    }

    var files=fs.readdirSync(startPath);
    for(var i=0;i<files.length;i++){
        var filename=path.join(startPath,files[i]);
        var stat = fs.lstatSync(filename);
        if (stat.isDirectory()){
            fromDir(filename,filter); //recurse
        }
        else if (filename.indexOf(filter)>=0) {
            // List
           commands[command_length]=filename;
           command_length+=1;
        };
    };
}; // Adopted from here (https://stackoverflow.com/questions/25460574/find-files-by-extension-html-under-a-folder-in-nodejs)
function genConfig(){
let i001 = commands.indexOf("dolphin-emu"); // Dolphin Emulator!
let i002 = commands.indexOf("multimc5"); // MultiMC5!
let i003 = commands.indexOf("retroarch"); // RetroArch!
  if(i001!=-1){
  installed[installed_length]='dolphin-emu';
  installed_length+=1;
  }
    if(i002!=-1){
  installed[installed_length]='multimc5';
  installed_length+=1;
  }
    if(i003!=-1){
  installed[installed_length]='retroarch';
  installed_length+=1;
  }
}
fromDir('/usr/bin/',''); // List all files (This takes a bit)
// Time for the main event! The config generator! (Generates a list of all apps/emulators that integrate with g7os!) (This list is found in /g7/apps.cfg)
