var Jasmine = require('jasmine');
var jasmine = new Jasmine();
var JSONReporter = require('jasmine-json-test-reporter');

module.exports = {
    runTest: (req, res) => {
        const { indexTest } = req.body;
        jasmine.loadConfig({
            spec_dir: 'Controllers/Jasmine/spec',
            spec_files: [
                indexTest

            ],
            helpers: [
                'helpers/**/*.js'
            ]
        });
        jasmine.addReporter(new JSONReporter({
            file: 'jasmine-test-results.json',
            beautify: true,
            indentationLevel: 4 // used if beautify === true
        }));

        jasmine.execute();
    },
}
