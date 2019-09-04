.PHONY: build publish test docs docs-build docs-test docs-publish

NODE_BIN=./node_modules/.bin
PRESS_BIN=./node_modules/@siimple/press/cli.js

# Print help
help: 
	@echo "Available commands: "
	@echo ""
	@echo "  make install                  Install all dependencies"
	@echo "  make upgrade                  Upgrade the package.json file of all packages"
	@echo "  make build pkg=<PKG>          Run the build command of the provided package"
	@echo "  make test pkg=<PKG>           Run the test command of the provided package"
	@echo "  make publish pkg=<PKG>        Run the publish command of the provided package"
	@echo "  make docs                     Run docs-build and docs-test commands"
	@echo "  make docs-build               Build documentation website"
	@echo "  make docs-test                Test documentation website"
	@echo "  make docs-publish             Publish documentation website"
	@echo "  make lint                     Run sass-lint"
	@echo ""

# Initialize the env
install:
	@# Install node dependencies
	-rm -rf node_modules
	npm install
	rm package-lock.json
	${MAKE} bootstrap

# Create a symlink in node_modules to packages
bootstrap:
	-rm -r ./node_modules/\@siimple
	node ./scripts/bootstrap.js

# Update dependencies
update:
	-rm -r ./node_modules/\@siimple
	npm install
	rm package-lock.json
	${MAKE} bootstrap

# Upgrade all package.json files
upgrade:
	node ./scripts/upgrade.js

# Run sass-lint
lint: 
	${NODE_BIN}/sass-lint -v

# Build the provided package
# Example: make build pkg="siimple-css"
build: 
	cd ./packages/${pkg}/ && ${MAKE} build

# Run tests of the provided package
# Example: make test pkg="siimple-css"
test:
	cd ./packages/${pkg}/ && ${MAKE} test

# Publish the provided package
# Example: make publish pkg="siimple-css"
publish:
	cd ./packages/${pkg}/ && ${MAKE} publish

# Build and serve documentation
docs:
	${MAKE} docs-build
	${MAKE} docs-serve

# Build docs of the provided package
docs-build: 
	@# Build documentation home
	${PRESS_BIN} --config ./docs/config.js
	@# Build documentation assets
	mkdir -p ./docs/public/assets/css
	mkdir -p ./docs/public/assets/js
	mkdir -p ./docs/public/assets/images
	${NODE_BIN}/sass -I ./node_modules packages/press-theme-siimple/styles/index.scss ./docs/public/assets/css/siimple-press.css
	cp ./packages/siimple-css/dist/siimple.min.css ./docs/public/assets/css/
	@# Build packages documentation
	@# Build documentation of @siimple/css package
	${PRESS_BIN} --config ./packages/siimple-css/docs/config.js
	${NODE_BIN}/sass -I ./node_modules packages/siimple-css/docs/styles/index.scss ./docs/public/assets/css/siimple-docs-css.css
	mkdir -p ./docs/public/assets/images/css && cp ./packages/siimple-css/docs/images/*.png ./docs/public/assets/images/css/
	@# Build finished

# Publish docs
docs-publish:
	#gsutil rsync -d -r ./docs/_site gs://siimple-documentation.appspot.com/docs

# Serve documentation website
docs-serve:
	#${NODE_BIN}/stattic --folder ./packages/${pkg}/docs/public --port 5000 --cors
	${NODE_BIN}/stattic --folder ./docs/public --port 5000 --cors

