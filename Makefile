.PHONY: build publish test docs website bootstrap install update upgrade

NODE_BIN=./node_modules/.bin

# Print help
help: 
	@echo "Available commands: "
	@echo ""
	@echo "  make install                  Install all dependencies"
	@echo "  make upgrade                  Upgrade the package.json file of all packages"
	@echo "  make build pkg=<PKG>          Run the build command of the provided package"
	@echo "  make test pkg=<PKG>           Run the test command of the provided package"
	@echo "  make publish pkg=<PKG>        Run the publish command of the provided package"
	@echo "  make website                  Build and serve the siimple website"
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

# Build and serve siimple website
# Sortcut for 'make build pkg="website" && make test pkg="website"'
website:
	${MAKE} build pkg="website"
	${MAKE} test pkg="website"

