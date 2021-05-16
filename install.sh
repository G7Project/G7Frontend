#!/bin/bash
# This just installs G7Frontend to your computer
# P.S. you need sudo
echo 'G7Frontend 1.0 Installer'
echo '(C) 2021 Microlemur, Licensed under the MIT License'
echo '====================================================='
echo 'Ensuring Base Packages are installed....'
sudo pacman -S base-devel nodejs npm --noconfirm # We need this
npm install "https://github.com/castlabs/electron-releases#11.4.6-wvvmp" --save-dev
echo 'Installing NodeJS App...'
npm install
echo 'Done!'
