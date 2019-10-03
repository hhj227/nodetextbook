const fs = require('fs');

const writeStream = fs.createWriteStream('./writeme.txt');
writeStream.on('finish', () => {
   console.log('파일쓰기 완료');
});

writeStream.write('writing\n');
writeStream.write('writing again');
writeStream.end();