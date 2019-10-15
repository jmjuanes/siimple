.PHONY: build publish test

# Binaries paths
NODE_BIN=../../node_modules/.bin
PRESS_BIN=./node_modules/@siimple/press/cli.js

# Build the website
build:
	@# Build documentation home
	cd ../../ && ${PRESS_BIN} --config ./packages/docs/config.js
	@# Build documentation assets
	mkdir -p public/assets/css public/assets/js public/assets/images
	${NODE_BIN}/sass -I ../../node_modules ../press-theme-siimple/styles/index.scss ./public/assets/css/siimple-press.css
	cp ../siimple-css/dist/siimple.min.css ./public/assets/css/
	@# Build packages documentation
	@# Build documentation of @siimple/css package
	cd ../../ && ${PRESS_BIN} --config ./packages/siimple-css/docs/config.js
	${NODE_BIN}/sass -I ../../node_modules ../siimple-css/docs/styles/index.scss ./public/assets/css/siimple-docs-css.css
	mkdir -p ./public/assets/images/css && cp ../siimple-css/docs/images/*.png ./public/assets/images/css/
	@# Build finished

# Serve the documentation site
test:
	${NODE_BIN}/stattic --port 5000 --folder ./public --cors

# Publish the documentation website
publish: 
	#make build
	#gsutil rsync -d -r ./_site gs://siimple-documentation.appspot.com/www

