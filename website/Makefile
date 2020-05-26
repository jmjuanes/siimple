# Binaries paths
node_bin=../node_modules/.bin

# Build the website
.PHONY: build
build:
	mkdir -p ./www
	@# Build website pages
	node ./scripts/build.js
	@# Build assets
	mkdir -p ./www/assets
	${node_bin}/sass -I ../node_modules ./styles/index.scss ./www/assets/style.css
	cp ../packages/siimple-css/dist/siimple.min.css ./www/assets/
	cp ../packages/siimple-icons/dist/siimple-icons.min.css ./www/assets/
	cp -R ../packages/siimple-icons/dist/fonts ./www/assets/
	@# Copy images 
	mkdir -p ./www/assets/brand && cp -R ../art/brand/. ./www/assets/brand/
	mkdir -p ./www/assets/icons && cp -R ../art/icons/. ./www/assets/icons/

# Serve the site
.PHONY: test
test:
	${node_bin}/stattic --port 5000 --folder ./www --cors

# Publish the website
.PHONY: publish
publish: 
	#make build
	#gsutil rsync -d -r ./_site gs://siimple-documentation.appspot.com/www

