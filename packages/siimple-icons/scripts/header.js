let pkg = require("../package.json");
let endl = "\n";
process.stdout.write("/*!" + endl);
process.stdout.write(" * @name         " + pkg.name + " " + pkg.version + "" + endl);
process.stdout.write(" * @description  " + pkg.description + "" + endl);
process.stdout.write(" * @homepage     " + pkg.homepage + "" + endl);
process.stdout.write(" * @repository   " + pkg.repository + "" + endl);
process.stdout.write(" * @bugs         " + pkg.bugs + "" + endl);
process.stdout.write(" * @license      " + pkg.license + "" + endl);
process.stdout.write("**/" + endl);
process.stdout.write("" + endl);
process.exit(0);

