#!/bin/bash
export PATH=$PATH:/root/.nvm/versions/node/v12.0.0/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin

node -v
npm install
npm run build
npm run pm2:stg