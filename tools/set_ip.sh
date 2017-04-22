#!/bin/sh

PROJECT=$1
echo $PROJECT

IP_ADDRESS=`cat /home/eth/IP_ADDRESS`
echo $IP_ADDRESS

/usr/bin/perl -i.bak -pe "s/host: \".*\"/host: \"${IP_ADDRESS}\"/" /home/eth/${PROJECT}/truffle.js
