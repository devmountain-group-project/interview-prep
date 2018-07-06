
var Jasmine = require('jasmine');
var jasmine = new Jasmine();
const { fork } = require('child_process');



module.exports = {
    runTest: (req, res) => {
        // CREATES CHILD PROCESS THAT RUNS JASMINE UNIT TESTS
        const child = fork('JasmineRun.js')


        // LISTENS FOR RESPONSE FROM CHILD AND SENDS IT BACK TO CLIENT
        child.on('message', (msg) => {
            
            console.log(`child stdout:\n${msg}`)
            res.send(msg)
            child.kill('SIGINT')
          })
    },
}