#!/bin/sh

grunt staging
cp -R ./dist/* ../ZenQuery/src/main/webapp/WEB-INF/ui/
cp -R ./dist/bower_components/* ../ZenQuery/src/main/webapp/WEB-INF/bower_components/
