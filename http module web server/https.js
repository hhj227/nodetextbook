const http = require('http');
const https = require('https');
const http2 = require('http2');

http.createServer((req, res) => {
    res.end('http server');
}).listen(80);

// https는 암호화를 하기 때문에 암호화가 제대로 되고 있다는 인증서가 필요함
// lets encrypt 무료 인증서를 발급받았다고 칩시다
https.createServer({
    cert: fs.readFileSync('도메인 인증서 경로'),
    key: fs.readFileSync('도메인 비밀키 경로'),
    ca: [
        fs.readFileSync('상위 인증서 경로'),
        fs.readFileSync('상위 인증서 경로'),
        fs.readFileSync('상위 인증서 경로'),
        fs.readFileSync('상위 인증서 경로'),
    ],
}, (req, res) => {
    res.end('https server');
}).listen(443);

//http2도 https 기반으로 동작하므로 인증서가 필요하다.
// 익스프레스랑 호환 문제가 있다. spdy를 대신 사용
http2.createSecureServer({
    cert: fs.readFileSync('도메인 인증서 경로'),
    key: fs.readFileSync('도메인 비밀키 경로'),
    ca: [
        fs.readFileSync('상위 인증서 경로'),
        fs.readFileSync('상위 인증서 경로'),
        fs.readFileSync('상위 인증서 경로'),
        fs.readFileSync('상위 인증서 경로'),
    ],
}, (req, res) => {
    res.end('https server');
}).listen(443);