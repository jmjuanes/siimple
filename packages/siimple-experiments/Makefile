.PHONY: build test publish
NODE_BIN=../../node_modules/.bin

# Build @siimple/experiments package
build:
	mkdir -p ./dist
	@# Compile CSS
	${NODE_BIN}/sass -I ../../node_modules index.scss dist/siimple-experiments.css 
	#node ./scripts/header.js > ./dist/header.txt
	#cat ./dist/header.txt ./dist/siimple.css > ./dist/siimple.temp.css
	#rm ./dist/header.txt ./dist/siimple.css
	#mv ./dist/siimple.temp.css ./dist/siimple.css
	@# Autoprefix and clean the generated CSS file
	${NODE_BIN}/postcss --use autoprefixer --config ./postcss.config.js --map false --output dist/siimple-experiments.css dist/siimple-experiments.css
	${NODE_BIN}/cleancss --compatibility "*" --level 2 --output dist/siimple-experiments.min.css dist/siimple-experiments.css
	@# Build finished

# Test @siimple/experiments package
test:
	@# TODO

# Publish the @siimple/experiments package
publish:
	npm publish --access public

