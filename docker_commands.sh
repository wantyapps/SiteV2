#!/bin/bash

npm install --no-dev
npm rebuild node-sass
npm run build
node server.cjs
