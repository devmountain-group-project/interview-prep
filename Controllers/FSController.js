const fs = require('fs')

module.exports={
    write: (req, res, next) => {
        const {content} = req.body
        const fullContent = 'module.exports = ' + content 
            fs.writeFile('TempFiles/problemFile.js', fullContent, (err) => {
                if (err) throw err;

                console.log("The file was succesfully saved!", content);
                return res.status(200).send('it worked')
            })
            
    },
    delete: (req, res, next) => {
        fs.unlink('TempFiles/problemFile.js', (err) => {
            if (err) throw err;
            console.log('successfully deleted TempFiles/testFile.js');
          })
        fs.unlink('TempFiles/testFileFile.js', (err) => {
            if (err) throw err;
            console.log('successfully deleted TempFiles/testFile.js');
          })
    },

    writeTest: (req, res, next) => {
        const {content} = req.body
        const fullContent = 'const file = require("./problemFile.js")' + '\n' + content
            
            fs.writeFile('TempFiles/testFile.js', fullContent, (err) => {
                if (err) throw err;

                console.log("The file was succesfully saved!", fullContent);
                return res.status(200)
            })
    }
}
