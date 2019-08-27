.PHONY: build test docs

# Global variables
NODE_BIN=../../node_modules/.bin

# Build neutrine source
build:
	${NODE_BIN}/webpack --config webpack.config.js

# Build documentation
docs:
	@# TODO

# Run test service
test:
	@## Run test script for creating the testing server using express
	node test/server.js

