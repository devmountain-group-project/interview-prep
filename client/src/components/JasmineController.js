var Jasmine = require('jasmine');
var jasmine = new Jasmine();
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
    jasmine.execute();
  }
}
