var Jasmine = require('jasmine');
var jasmine = new Jasmine();
var myReporter = require('./CustomReporter')

// SETS UP JASMINE CONFIG
jasmine.loadConfig({
    spec_dir: 'TempFiles',
    spec_files: [
        "testFile.js"

    ],
    helpers: [
        'helpers/**/*.js'
    ]
});
// STOPS JASMINE FROM TERMINATING PROCESS 
Jasmine.prototype.exitCodeCompletion = () => {}

jasmine.addReporter(new myReporter())
jasmine.execute()
