#!/usr/bin/env sh
set -e
npm run build
git add dist
git commit -m "Adding dist subtree"
git subtree push --prefix dist origin gh-pages
