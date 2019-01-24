.PHONY: build clean install docs

# Node binaries folder
NODE_BIN=./node_modules/.bin

# Print help
help: 
	@echo "Available commands: "
	@echo ""
	@echo "  make build         Build siimple"
	@echo "  make clean         Clean the generated folders"
	@echo "  make docs          Build documentation website"
	@echo "  make docs-serve    Serve documentation website"
	@echo "  make lint          Run sass-lint"
	@echo "  make install       Install all dependencies"
	@echo ""

# Build siimple
build: 
	@set -e
	@logger -s "Build started"
	@logger -s "Compiling SCSS and adding the license header" 
	mkdir -p ./dist
	${NODE_BIN}/sass index.scss dist/siimple.css 
	node ./scripts/header.js > ./dist/header.txt
	cat ./dist/header.txt ./dist/siimple.css > ./dist/siimple.temp.css
	rm ./dist/header.txt ./dist/siimple.css
	mv ./dist/siimple.temp.css ./dist/siimple.css
	@logger -s "Autoprefix and clean the generated CSS file"
	${NODE_BIN}/postcss --use autoprefixer --config ./postcss.config.js --map false --output dist/siimple.css dist/siimple.css
	${NODE_BIN}/cleancss --compatibility "*" --level 2 --output dist/siimple.min.css dist/siimple.css
	@logger -s "Build finished"

# Clean the dist folder
clean: 
	@logger -s "Clean started"
	rm -rf ./dist
	rm -rf ./.deploy
	@logger -s "Clean finished"

# Install all dependencies
install:
	@set -e
	@logger -s "Setup started"
	npm install 
	@# Install documentation dependencies
	bower install
	cd ./docs && bundle install
	@# Hack to ensure that sass finds the siimple source code
	ln -s ${PWD} ./bower_components/siimple 
	@logger -s "Setup finished"

# Run sass-lint
lint: 
	${NODE_BIN}/sass-lint -v

# Build docs
docs: 
	@logger -s "Docs build started"
	@logger -s "Building documentation site with Jekyll"
	cd ./docs && bundle exec jekyll build
	@logger -s "Building assets"
	mkdir -p ./docs/_site/assets/css ./docs/_site/assets/js ./docs/_site/assets/images
	${NODE_BIN}/sass ./docs/_sass/main.scss ./docs/_site/assets/css/main.css --load-path=./bower_components/
	cp ./dist/siimple.min.css ./docs/_site/assets/css/
	${NODE_BIN}/pngsprite --inputPNGFolder ./docs/_images/categories/ --outputPNGFile ./docs/_site/assets/images/categories.png --cssIconSize 45 --cssOutput ./docs/_site/assets/css/icons-categories.css --debug --cssNamespace docs-icons-categories
	@logger -s "Docs build finished"

# Publish docs
docs-publish:
	@logger -s "Docs publish started"
	make docs
	gsutil rsync -d -r ./docs/_site gs://siimple-documentation.appspot.com/docs
	@logger -s "Docs publish finised"

# Serve documentation website
docs-serve:
	${NODE_BIN}/stattic --folder ./docs/_site/ --port 5000 --cors

