.PHONY: build clean setup

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
	@set -e
	# Compile the scss file and generate the output css file
	${NODE_BIN}/node-sass --include-path ./node_modules/ scss/siimple.scss dist/siimple.css 
	# Add the header to the compiled css file
	@node ./scripts/header.js > ./dist/header.txt
	@cat ./dist/header.txt ./dist/siimple.css > ./dist/siimple.temp.css
	@rm ./dist/header.txt ./dist/siimple.css
	@mv ./dist/siimple.temp.css ./dist/siimple.css
	# Autoprefix and clean the compiled css file
	${NODE_BIN}/postcss --use autoprefixer --config ./postcss.config.js --map false --output dist/siimple.css dist/siimple.css
	${NODE_BIN}/cleancss --compatibility "*" --level 2 --output dist/siimple.min.css dist/siimple.css

# Clean the dist folder
clean: 
	@rm -rf ./dist
	@mkdir -p ./dist

# Install all dependencies
setup:
	@set -e
	npm install 

