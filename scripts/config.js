//Import dependencies
var utily = require('utily');

//Import the package
var pkg = require('../package.json');

//Output directory
module.exports.dist = './dist';

//Generate the banner
var banner = [];
banner.push('/**');
banner.push(' * @name         {{ name }} v{{ version }}');
banner.push(' * @description  {{ description }}');
banner.push(' * @docs         {{ homepage }}');
banner.push(' * @license      {{ license }}');
banner.push('**/');
banner.push(' ');
banner.push(' ');

//Compile and export the banner
module.exports.banner = utily.string.format(banner.join('\n'), pkg);
