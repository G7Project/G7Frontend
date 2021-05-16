#!/bin/bash
# This just installs G7Frontend to your computer
# P.S. you need sudo
echo 'G7Frontend 1.0 Installer'
echo '(C) 2021 Microlemur, Licensed under the MIT License'
echo '====================================================='
echo 'Ensuring Base Packages are installed....'
sudo pacman -S base-devel nodejs npm electron --noconfirm # We need this
echo 'Creating Syslink in /usr/bin...'
sudo mv shared/g7frontend.sh /usr/bin/
echo 'Done!'
