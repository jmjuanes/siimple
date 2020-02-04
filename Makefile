node_bin=./node_modules/.bin
pkgs_folder=./packages
apps_folder=./apps
docs_folder=./docs
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
ifdef pkg
	cd ${pkgs_folder}/${pkg}/ && ${MAKE} build
else ifdef app
	cd ${apps_folder}/${app} && ${MAKE} build 
endif

# Build siimple website and documentation
.PHONY: build-docs build-website
build-docs:
	cd ./docs/ && ${MAKE} build
build-website:
	cd ./website/ && ${MAKE} build

# Run tests of the provided package or application
# Example: make test pkg="siimple-css"
.PHONY: test
test:
ifdef pkg
	cd ${pkgs_folder}/${pkg}/ && ${MAKE} test
else ifdef app
	cd ${apps_folder}/${app} && ${MAKE} test
endif

# Test siimple documentation and website
.PHONY: test-docs test-website
test-docs:
	cd ./docs/ && ${MAKE} test
test-website:
	cd ./website/ && ${MAKE} test

# Publish the provided package or application
# Example: make publish pkg="siimple-css"
.PHONY: publish
publish:
ifdef pkg
	cd ${pkgs_folder}/${pkg}/ && ${MAKE} publish
else ifdef app
	cd ${apps_folder}/${app} && ${MAKE} publish
endif

# Build and serve siimple documentation site
# Sortcut for 'make build-website && make test-website'
.PHONY: docs
docs:
	${MAKE} build-docs
	${MAKE} test-docs

# Build and serve siimple website
# Sortcut for 'make build-website && make test-website'
.PHONY: website
website:
	${MAKE} build-website
	${MAKE} test-website

