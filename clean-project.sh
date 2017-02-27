#!/bin/sh
rm -r ./node_modules
echo 'trashed old node_modules'
rm -r ./bower_components
echo 'trashed old bower_components'
rm -r ./typings
echo 'trashed old typings'
find ./app -type f -name '*.js' -exec rm -f {} \;
find ./app -type f -name '*.js.map' -exec rm -f {} \;
echo 'trashed old compiled .js and .js.map files'
