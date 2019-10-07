const http = require('http');
const fs = require('fs');

const users = {

};

// middleware 형식으로 정리
// 나중에 express 쓰면 app.get 씀. swagger.json으로도 씀
const router = {
    get: {
        '/': (req, res) => {
            fs.readFile('./restFront.html', (err,data) => {
                if (err){
                    throw err;
                }
                res.end(data);
            });
        },
        '/users': (req, res) => {
            res.end(JSON.stringify(users));
        },
        //wild card
        '*': (req, res) => {
            fs.readFile(`.${req.url}`, (err, data) => {
                return res.end(data);
            });
        }
    },
    post: {
        '/users': (req, res) => {
            let body = '';
            req.on('data', (chunk) => {
                body += chunk;
            });
            req.on('end', () => {
                console.log('POST 본문(body)', body);
                const { name } = JSON.parse(body);
                const id = +new Date();
                users[id] = name;
                res.writeHead(201, { 'Content-Type': 'text/html; charset=utf-8'});
                res.end('사용자 등록 성공');
            });
        }
    },
    put: {
        '/users': (req, res) => {
            const id = req.url.split('/')[2];
            let body = '';
            req.on('data', (chunk) => {
                body += chunk;
            });
            return req.on('end', () => {
                console.log('put', body);
                users[id] = JSON.parse(body).name;
                return res.end(JSON.stringify(users));
            });
        }
    },
    patch: {

    },
    delete: {
        '/users': (req, res) => {
            const id = req.url.split('/')[2];
            let body = '';
            req.on('data', (chunk) => {
                body += chunk;
            });
            return req.on('end', () => {
                console.log('delete', body);
                delete users[id];
                return res.end(JSON.stringify(users));
            });
        }
    },
}

http.createServer((req,res) => {
    const matchedUrl = router[req.method.toLowerCase()][req.url]
        //matched url이 undefined가 되면 뒤에게 실행됨
    (matchedUrl || router[req.method.toLowerCase()]['*'])(req, res);
    router && router[req.method]
}).listen(8005, () => {
    console.log('server start');
});