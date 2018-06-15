const fs = require('fs')

module.exports={
    write: (req, res, next) => {
        const {content} = req.body
            fs.writeFile('TempFiles/testFile.js', content, (err) => {
                if (err) throw err;
                
                console.log("The file was succesfully saved!", content);
                return res.status(200)
            })
    },
    delete: (req, res, next) => {
        fs.unlink('TempFiles/testFile.js', (err) => {
            if (err) throw err;
            console.log('successfully deleted TempFiles/testFile.js');
          })
    },
}