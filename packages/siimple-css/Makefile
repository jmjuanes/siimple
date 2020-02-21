node_modules=../../node_modules/
node_bin=../../node_modules/.bin

# Build @siimple/css
.PHONY: build
build:
	mkdir -p ./dist
	@# Compile CSS
	${node_bin}/sass --load-path=${node_modules} index.scss dist/siimple.css 
	#node ./scripts/header.js > ./dist/header.txt
	#cat ./dist/header.txt ./dist/siimple.css > ./dist/siimple.temp.css
	#rm ./dist/header.txt ./dist/siimple.css
	#mv ./dist/siimple.temp.css ./dist/siimple.css
	@# Autoprefix and clean the generated CSS file
	${node_bin}/postcss --use autoprefixer --config ./postcss.config.js --map false --output dist/siimple.css dist/siimple.css
	${node_bin}/cleancss --compatibility "*" --level 2 --output dist/siimple.min.css dist/siimple.css
	@# Build finished

# Test package
.PHONY: test
test:
	#TODO

# Publish the package
.PHONY: publish
publish:
	npm publish --access public

