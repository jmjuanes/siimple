.PHONY: build publish test docs
NODE_BIN=../../node_modules/.bin

# Build @siimple/css
build:
	mkdir -p ./dist
	@# Compile CSS
	${NODE_BIN}/sass index.scss dist/siimple.css 
	#node ./scripts/header.js > ./dist/header.txt
	#cat ./dist/header.txt ./dist/siimple.css > ./dist/siimple.temp.css
	#rm ./dist/header.txt ./dist/siimple.css
	#mv ./dist/siimple.temp.css ./dist/siimple.css
	@# Autoprefix and clean the generated CSS file
	${NODE_BIN}/postcss --use autoprefixer --config ./postcss.config.js --map false --output dist/siimple.css dist/siimple.css
	${NODE_BIN}/cleancss --compatibility "*" --level 2 --output dist/siimple.min.css dist/siimple.css
	@# Build finished

# Test package
test:
	#TODO

# Publish the package
publish:
	npm publish --access public

