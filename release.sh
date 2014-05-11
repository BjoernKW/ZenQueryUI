#!/bin/sh

grunt release
cp -R ./dist/* ../ZenQuery/src/main/webapp/WEB-INF/ui/
