function myReporter() {
	var specResults = [];
    var masterResults = Object.create(null);
    this.results = null

	this.suiteDone = function(suite) {
		suite.specs = specResults;
		masterResults[suite.id] = suite;
        specResults = [];
	};

	this.specDone = function(spec) {
		specResults.push(spec);
	};

	this.jasmineDone = function() {
        process.send(masterResults)
	};
};

module.exports = myReporter