#!/bin/bash
# This script justs kills NodeJS and runs it again with safe mode
echo 'Booting to INT_SAFEMODE...'
pkill node # TO-DO: Make this more clean
node /g7/g7safemode.js # Boot em' Up!
echo 'Done!'
