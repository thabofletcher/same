#!/usr/bin/env node
if (process.argv.length != 4) {
	console.log("Usage: same baseline compare");
	return;
}

var lazy = require("lazy");
var fs = require("fs");

var lineIndex = {};
var lineNumber = 0;
new lazy(fs.createReadStream(process.argv[3])).lines.forEach(function(line) {
	lineNumber++;
	lineIndex[line]=lineNumber;
});

new lazy(fs.createReadStream(process.argv[2])).lines.forEach(function(line) {
	if(lineIndex[line]) {
		if (line.length==1 && line[0] == 48) {
			console.log();
		}
		else console.log(line.toString('utf-8'));
	}
});