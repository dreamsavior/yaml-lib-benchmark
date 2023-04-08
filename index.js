const YAML = require("yaml");
const fs = require("fs");
const yamlFile = "./sample/Map002.yaml";
var yamlFileContent 
var yamlData;

var yamlInfo = async function() {
    var yamlPack = (await fs.promises.readFile("./node_modules/yaml/package.json")).toString();
    var yamlJSON = JSON.parse(yamlPack);
    console.log("Testing YAML version "+yamlJSON.version+"\n");
}

var benchmark = async function(process, ...args) {
	if (typeof process !== "function") return console.warn("Arguments[0] must be a function");
	var t0 = performance.now()

	await process(args)   // <---- measured code goes between t0 and t1
	
	var t1 = performance.now()
	console.log("Process took " + (t1 - t0) + " ms.\n")
	return t1 - t0;
}

var runParseDocument = function(times=1000) {
    console.log("Test 1: parseDocument() x ", times);
    for (var i=0; i<times; i++) {
        yamlData = YAML.parseDocument(yamlFileContent);
    }
}

var runParseDocument = function(times=1000) {
    console.log("Test 1: parseDocument() x ", times);
    for (var i=0; i<times; i++) {
        yamlData = YAML.parseDocument(yamlFileContent);
    }
}

var runGetIn = function(times=10000) {
    console.log("Test 2: getIn() x ", times);
    for (var i=0; i<times; i++) {
        yamlData.getIn(["events", 49, "pages", 0, "list"]);
    }
}

var runSetIn = function(times=10000) {
    console.log("Test 3: setIn() x ", times);
    for (var i=0; i<times; i++) {
        yamlData.setIn(["events", 49, "pages", 0, "list", 0, "c"], 500);
    }
}

var runToString = function(times=1000) {
    console.log("Test 4: runToString() x ", times);
    for (var i=0; i<times; i++) {
        yamlData.toString();
    }
}

void async function() {
    await yamlInfo();
    yamlFileContent =  (await fs.promises.readFile(yamlFile)).toString();
    var totalExecution = 0;
    totalExecution += await benchmark(runParseDocument, 200);
    totalExecution += await benchmark(runGetIn, 5000);
    totalExecution += await benchmark(runSetIn, 5000);
    totalExecution += await benchmark(runToString, 1000);

    console.log("Total execution:", totalExecution, "ms");
}()

