.PHONY: build docs publish 

# Node binaries path
NODE_BIN=../../node_modules/.bin

# Build input and output files
OUTPUT_CSS=./dist/siimple-colors.css
OUTPUT_MIN=./dist/siimple-colors.min.css

# Build siimple colors package
build:
	@# Compile templates
	#node ./scripts/templates.js --source scss
	#node ./scripts/templates.js --source test
	@# Compile scss files
	${NODE_BIN}/sass ./index.scss ${OUTPUT_CSS}
	@# Add the header
	#node ./scripts/header.js > ./dist/header.txt
	#cat ./dist/header.txt ${OUTPUT_CSS} > ${OUTPUT_CSS}.temp
	#rm ./dist/header.txt ${OUTPUT_CSS}
	#mv ${OUTPUT_CSS}.temp ${OUTPUT_CSS}
	@# Autoprefix and clean generated css file
	${NODE_BIN}/postcss --use autoprefixer --config ./postcss.config.js --map false --output ${OUTPUT_CSS} ${OUTPUT_CSS}
	${NODE_BIN}/cleancss --compatibility "*" --level 2 --output ${OUTPUT_MIN} ${OUTPUT_CSS}

# Build docs
docs:
	@# Building documentation site
	mkdir -p ./docs/data && cp ./colors.json ./docs/data/
	cd ../../ && ./node_modules/@siimple/press/cli.js --config ./packages/siimple-colors/docs/config.js
	@# Copying assets files
	#mkdir -p ./docs/_site/assets/css
	#${NODE_BIN}/sass ./docs/_sass/main.scss ./docs/_site/assets/css/main.css --load-path=./bower_components/
	#cp ./bower_components/siimple/dist/siimple.min.css ./docs/_site/assets/css/
	cp ${OUTPUT_MIN} ./docs/public/css/
	cp -R ./docs/images ./docs/public/
	cp header.svg ./docs/public/images/hero.svg

