#!/usr/bin/env sh

# abort on errors
set -e

cd example

yarn build

cd dist

git init

git add -A 

git commit -m 'deploy'

git push --force --quiet "https://github.com/Kuaizi-co/vue-cli-plugin-auto-router.git" master:gh-pages