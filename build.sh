#!/bin/sh

grunt staging
cp -R ./dist/* ../ZenQuery/src/main/webapp/WEB-INF/ui/