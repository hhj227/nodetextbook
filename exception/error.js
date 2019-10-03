const fs = require('fs');

setInterval(() => {
    console.log('start');
    fs.unlink('./asdfasdf.js', (err) => {
        if (err) {
            console.log('start');
            console.log(err);
            console.log('end');
        }
    })
    // try{
    //     throw new Error('imma ruin your server');
    // } catch (e) {
    //     console.error(e);
    // }
}, 1000);