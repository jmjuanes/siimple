.PHONY: build clean setup docs

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
	@echo "  make setup         Install all dependencies"
	@echo ""

# Build siimple
build: 
	@set -e
	@logger -s "Build started"
	@logger -s "Compiling SCSS and adding the license header" 
	mkdir -p ./dist
	${NODE_BIN}/sass scss/siimple.scss dist/siimple.css 
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
setup:
	@set -e
	@logger -s "Setup started"
	npm install 
	@logger -s "Setup finished"

# Build docs
docs: 
	@set -e
	@logger -s "Docs build started"
	@logger -s "Building documentation site with Jekyll"
	cd ./docs && jekyll build
	@logger -s "Copiyng assets files"
	cp ./dist/siimple.min.css ./docs/_site/assets/css/
	cp ./media/logo-colored.png ./docs/_site/assets/images/logo.png
	@logger -s "Docs build finished"

# Publish docs
docs-publish:
	@set -e
	@logger -s "Docs publish started"
	make docs-prepublish
	cd ./.deploy && gcloud app deploy docs.yaml --project siimple-documentation
	@logger -s "Docs publish finised"

# Prepublish docs
docs-prepublish:
	@set -e
	@logger -s "Docs prepublish started"
	make docs
	@logger -s "Creating folder .deploy/"
	rm -rf ./.deploy
	mkdir -p ./.deploy
	@logger -s "Copying documentation files"
	cp -r ./docs/_site ./.deploy/_docs
	cp docs.yaml ./.deploy/
	@logger -s "Docs prepublish finished"

# Serve documentation website
docs-serve:
	@set -e
	@logger -s "Docs serve started"
	make docs-prepublish
	dev_appserver.py .deploy/docs.yaml
	@logger -s "Docs serve finished"

