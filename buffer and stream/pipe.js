const fs = require('fs');
const zlib = require('zlib');

// const readStream = fs.createReadStream('readme2.txt');
// const writeStream = fs.createWriteStream('writeme2.txt');
//
// //복사
// readStream.pipe(writeStream);

// const readStream = fs.copyFile('./readme3.txt', './writeme3.txt', (err) => {
//     console.log(err);
// });



//스트림 간 파이프 계속 사용 가능
const zlibStream = zlib.createGzip();
const readStream = fs.createReadStream('readme4.txt');
const writeStream = fs.createWriteStream('writeme4.txt');
readStream.pipe(zlibStream).pipe(writeStream);