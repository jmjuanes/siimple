.PHONY: build clean install docs
NODE_BIN=./node_modules/.bin

# Print help
help: 
	@echo "Available commands: "
	@echo ""
	@echo "  make install                  Install all dependencies"
	@echo "  make upgrade                  Upgrade the package.json file of all packages"
	@echo "  make build pkg=<PKG>          Build siimple"
	@echo "  make docs-build pkg=<PKG>     Build documentation website"
	@echo "  make docs-serve pkg=<PKG>     Serve documentation website"
	@echo "  make docs-publish pkg=<PKG>   Publish documentation website"
	@echo "  make lint                     Run sass-lint"
	@echo ""

# Initialize the env
install:
	@# Install node dependencies
	rm -rf node_modules
	npm install
	@# Create a symlink in node_modules to packages
	node ./scripts/bootstrap.js

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

# Build docs of the provided package
# Example: make docs-build pkg="siimple-css"
docs-build: 
	cd ./packages/${pkg} && ${MAKE} docs

# Publish docs
docs-publish:
	#gsutil rsync -d -r ./docs/_site gs://siimple-documentation.appspot.com/docs

# Serve documentation website
docs-serve:
	${NODE_BIN}/stattic --folder ./packages/${pkg}/site --port 5000 --cors

