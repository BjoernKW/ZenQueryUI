#!/bin/sh

grunt build
cp -R ./dist/* ../ZenQuery/src/main/webapp/WEB-INF/ui/
