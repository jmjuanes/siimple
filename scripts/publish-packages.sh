#!/bin/bash
set -e

for dir in packages/*; do
  if [ -f "$dir/package.json" ]; then
    echo "Publishing $dir..."
    cd "$dir"
    npm publish
    cd - > /dev/null
  fi
done
