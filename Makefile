node_bin=./node_modules/.bin
pkgs_folder=./packages
website_folder=./website

# Initialize the env
.PHONY: install
install:
	@# Install node dependencies
	-rm -rf node_modules
	npm install
	rm package-lock.json
	${MAKE} bootstrap

# Create a symlink in node_modules to packages
.PHONY: bootstrap
bootstrap:
	-rm -r ./node_modules/\@siimple
	node ./scripts/bootstrap.js

# Update dependencies
.PHONY: update
update:
	-rm -r ./node_modules/\@siimple
	npm install
	rm package-lock.json
	${MAKE} bootstrap

# Upgrade all package.json files
.PHONY: upgrade
upgrade:
	node ./scripts/upgrade.js

# Run sass-lint
.PHONY: lint
lint: 
	${node_bin}/sass-lint -v

# Build the provided package or application
# Example: make build pkg="siimple-css"
.PHONY: build
build: 
	cd ${pkgs_folder}/${pkg}/ && ${MAKE} build

# Build siimple website and documentation
.PHONY: build-website
build-website:
	cd ${website_folder} && ${MAKE} build

# Run tests of the provided package or application
# Example: make test pkg="siimple-css"
.PHONY: test
test:
	cd ${pkgs_folder}/${pkg}/ && ${MAKE} test

# Test siimple documentation and website
.PHONY: test-website
test-website:
	cd ${website_folder} && ${MAKE} test

# Publish the provided package or application
# Example: make publish pkg="siimple-css"
.PHONY: publish
publish:
	cd ${pkgs_folder}/${pkg}/ && ${MAKE} publish

# Build and serve siimple website
# Sortcut for 'make build-website && make test-website'
.PHONY: docs website
website:
	${MAKE} build-website
	${MAKE} test-website
docs:
	# [WARNING] The docs command is deprecated --> documentation has been merged with website
	# [WARNING] Run $ make website instead
	${MAKE} website

