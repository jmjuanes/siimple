# Binaries paths
NODE_BIN=../node_modules/.bin

# Build the website
.PHONY: build
build:
	@# Build website pages
	cd ../ && ./node_modules/@siimple/press/cli.js --config ./website/config.js
	@# Build assets
	mkdir -p ./www/assets/css 
	#${NODE_BIN}/sass -I ../../node_modules ../press-theme-siimple/styles/index.scss ./www/assets/css/siimple-press.css
	cp ../node_modules/@siimple/css/dist/siimple.min.css ./www/assets/css/
	@# Copy images 
	#mkdir -p ./www/assets/images && cp ./images/*.svg ./www/assets/images/
	cp -R ./images ./www/assets/images
	cp ./header.svg ./www/assets/images/header.svg
	mkdir -p ./www/assets/images/toolkits/
	cp ../packages/siimple-css/header.svg ./www/assets/images/toolkits/css.svg
	cp ../packages/siimple-colors/header.svg ./www/assets/images/toolkits/colors.svg
	# Building website styles
	${NODE_BIN}/sass -I ../node_modules ./styles/index.scss ./www/assets/css/style.css

# Serve the site
.PHONY: test
test:
	${NODE_BIN}/stattic --port 5000 --folder ./www --cors

# Publish the website
.PHONY: publish
publish: 
	#make build
	#gsutil rsync -d -r ./_site gs://siimple-documentation.appspot.com/www

