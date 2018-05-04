.PHONY: build clean

# Node binaries folder
NODE_BIN=./node_modules/.bin

# Print help
help: 
	@echo "Available commands: "
	@echo ""
	@echo "  make build   Generate the compiled CSS files of siimple"
	@echo "  make clean   Clean the generated folders"
	@echo "  make setup   Install all dependencies"
	@echo ""

# Build siimple
build: 
	@set -e ;\
	rm -rf ./dist ;\
	mkdir -p ./dist ;\
	${NODE_BIN}/node-sass --include-path ./node_modules/ scss/siimple.scss dist/siimple.css ;\
	${NODE_BIN}/postcss --use autoprefixer --map false --output dist/siimple.css dist/siimple.css ;\
	${NODE_BIN}/cleancss --compatibility "*" --level 2 --output dist/siimple.min.css dist/siimple.css

# Install all dependencies
setup:
	@set -e ;\
	npm install 

