.PHONY: build publish test

# Binaries paths
NODE_BIN=../../node_modules/.bin

# Build the website
build:
	@# Build website
	cd ../../ && ./node_modules/@siimple/press/cli.js --config ./packages/website/config.js
	@# Build assets
	mkdir -p ./public/assets/css ./public/assets/images ./public/assets/js
	cp ../../node_modules/@siimple/css/dist/siimple.min.css ./public/assets/css/
	# Building website styles
	${NODE_BIN}/sass -I ../../node_modules ./styles/index.scss ./public/assets/css/siimple-website.css

# Serve the site
test:
	${NODE_BIN}/stattic --port 5000 --folder ./public --cors

# Publish the website
publish: 
	#make build
	#gsutil rsync -d -r ./_site gs://siimple-documentation.appspot.com/www

