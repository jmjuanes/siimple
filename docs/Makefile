# Binaries paths
NODE_BIN=../node_modules/.bin

# Build the documentation site
.PHONY: build
build:
	${NODE_BIN}/webpack --config webpack.config.js
	cp ./src/index.html ./www/
	mkdir -p ./www/pages
	node ./scripts/build.js

# Serve the documentation site
.PHONY: test
test:
	${NODE_BIN}/stattic --port 5000 --folder ./www --cors

# Publish the documentation website
.PHONY: publish
publish: 
	#make build
	#gsutil rsync -d -r ./_site gs://siimple-documentation.appspot.com/www

