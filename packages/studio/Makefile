.PHONY: build test publish

# Global variables
NODE_BIN=../../node_modules/.bin

# Build neutrine source
build:
	@#-rm -rf www
	${NODE_BIN}/webpack --config webpack.config.js
	cp ./public/index.html ./www/

# Run test service
test:
	${NODE_BIN}/stattic --folder www --port 5000

# Publish package
publish:
	#npm publish --access public

