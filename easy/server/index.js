const fs = require('fs');

const content = "Topcoder is awesome";
function createfile(content) {
    fs.writeFile('easy.txt', content, (err) => {
        if (err) {
            console.log(err);
        }
    });
}

createfile(content);