var Jasmine = require('jasmine');
var jasmine = new Jasmine();
var JSONReporter = require('jasmine-json-test-reporter');

module.exports = {
    runTest: (req, res) => {
        // const { indexTest } = req.body;
        jasmine.loadConfig({
            spec_dir: 'TempFiles',
            spec_files: [
                "testFile.js"

            ],
            helpers: [
                'helpers/**/*.js'
            ]
        });
        jasmine.clearReporters()
        jasmine.addReporter(new JSONReporter({
            file: 'jasmine-test-results.json',
            beautify: true,
            indentationLevel: 4 // used if beautify === true
        }), res);

        jasmine.execute();
        console.log('this is in the controller', res.data)
        return res.status(200).send(res)
    },
}