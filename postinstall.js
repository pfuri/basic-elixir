var ncp = require('ncp').ncp;

var source = "resources";
var destination = "../../resources";
var options = { "clobber": false };
ncp(source, destination, options, function (err) {
	if (err) {
		return console.error(err);
	}
 	console.log("resources copied (noclobber) successfully!\n");
});

source = "elixir.example.json";
destination = "../../elixir.json";
ncp(source, destination, options, function (err) {
    if (err) {
        return console.error(err);
    }
    console.log("elixir.json copied (noclobber) successfully!\n");
});

source = "gulpfile.example.js";
destination = "../../gulpfile.js";
ncp(source, destination, options, function (err) {
    if (err) {
        return console.error(err);
    }
    console.log("gulpfile.js copied (noclobber) successfully!\n");
});

console.log("\nThank you for using Basic Elixir!\n");
console.log("Don't forget to copy 'ElixirHelper' to your app if you want to use versioning!\n");
console.log("Please report any issues, bugs or feature requests to:");
console.log("https://github.com/pfuri/basic-elixir/issues\n");
