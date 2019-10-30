.PHONY: build publish test

# Binaries paths
NODE_BIN=../../node_modules/.bin

# Build the website
build:
	@# Build website pages
	cd ../../ && ./node_modules/@siimple/press/cli.js --config ./packages/website/config.js
	@# Build assets
	mkdir -p ./www/assets/css ./www/assets/images ./www/assets/js
	${NODE_BIN}/sass -I ../../node_modules ../press-theme-siimple/styles/index.scss ./www/assets/css/siimple-press.css
	cp ../../node_modules/@siimple/css/dist/siimple.min.css ./www/assets/css/
	@# Copy images 
	mkdir -p ./www/assets/images && cp ./images/*.svg ./www/assets/images/
	mkdir -p ./www/assets/images/headers/
	cp ./header.svg ./www/assets/images/headers/website.svg
	cp ../siimple-css/header.svg ./www/assets/images/headers/css.svg
	cp ../siimple-colors/header.svg ./www/assets/images/headers/colors.svg
	# Building website styles
	${NODE_BIN}/sass -I ../../node_modules ./styles/index.scss ./www/assets/css/siimple-website.css

# Serve the site
test:
	${NODE_BIN}/stattic --port 5000 --folder ./www --cors

# Publish the website
publish: 
	#make build
	#gsutil rsync -d -r ./_site gs://siimple-documentation.appspot.com/www

