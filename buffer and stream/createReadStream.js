const fs = require("fs");

const readStream = fs.createReadStream('./readme.txt', {highWaterMark:16});
const data = [];

//스트림은 이벤트 기반으로 동작한다. data, end, error...
//버퍼(청크)들이 들어올때마다 data 이벤트가 발생한다.
readStream.on('data', (chunk) => {
    data.push(chunk);
    console.log('data', chunk, chunk.length);
});

readStream.on('end', () => {
   console.log('end', Buffer.concat(data).toString());
});

readStream.on('error', (err) => {
    console.log('error', err);
});