.PHONY: install build publish prepublish

# Binaries paths
NODE_BIN=./node_modules/.bin

# Innitial installation
install:
	bundle install
	npm install
	rm -rf bower_components && bower install

# Build the website
build:
	@# Building website with Jekyll
	bundle exec jekyll build
	# Creating assets folder
	mkdir -p ./_site/assets/css ./_site/assets/images
	# Copying styles
	cp bower_components/siimple/dist/siimple.min.css ./_site/assets/css/
	cp bower_components/siimple-colors/dist/siimple-colors.min.css ./_site/assets/css/
	# Building website styles
	${NODE_BIN}/sass --load-path="./bower_components/" ./_sass/main.scss ./_site/assets/css/main.css
	# Generating image sprites
	${NODE_BIN}/pngsprite --inputPNGFolder ./_images/ --outputPNGFile ./_site/assets/images/icons.png --cssIconSize 80 --cssOutput ./_site/assets/css/icons.css --debug --cssNamespace website-icons

# Serve the site
serve:
	${NODE_BIN}/stattic --folder ./_site --cors

# Publish the website
publish: 
	make build
	gsutil rsync -d -r ./_site gs://siimple-documentation.appspot.com/www

