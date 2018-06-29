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
        Jasmine.prototype.exitCodeCompletion = () => {}
        jasmine.addReporter(new JSONReporter({
            file: 'jasmine-test-results.json',
            beautify: true,
            indentationLevel: 4, // used if beautify === true
        }), res);

        jasmine.execute()
        // for(var key in jasmine) {
        //     if(key === 'reporter'){
        //         console.log(jasmine[key])
        //     }
        //     console.log('I am a key in the jas obj', key)
        // }
        var counter = 0
        var intervalId = setInterval(function(){ 
            for(var key in jasmine) {
                counter ++
                if(key === 'completionReporter' && jasmine[key].results !== undefined){
                    console.log(11111111111111, counter)
                    clearInterval(intervalId);
                    return res.status(200).send(jasmine[key].results)
                }
                if(counter === 10){
                    console.log('getting in here yooooo')
                    clearInterval(intervalId);
                    return res.status(404).send('not found')
                }
        }
        }, 1000);
    },
}