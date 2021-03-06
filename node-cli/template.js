#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const readline = require('readline');

let rl;
let type = process.argv[2];
let name = process.argv[3];
let directory = process.argv[4] || '.';

const htmlTemplate = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Template</title>
</head>
<body>
    <h1>Hello</h1>
    <p>CLI</p>
</body>
</html>
`;

const routerTemplate = `
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    try {
        res.send('ok');
    } catch (e) {
        console.error(e);
        next(e);
    }
});

module.exports = router;
`;

const mkdirp = (dir) => {
    // 상대경로를 split으로 나눔
    // filter: 배열에 undefined 제거
    const dirname = path.relative('.', path.normalize(dir)).split(path.sep).filter(p=> !!p);
    dirname.forEach((d,idx) => {
        const pathBuilder = dirname.slice(0, idx+1).join(path.sep);
        if (!exist(pathBuilder)) {
            fs.mkdirSync(pathBuilder);
        }
    });
};

const exist = () => {
    try {
        fs.accessSync(dir, fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK);
    } catch (e) {
        return false;
    }
};

const makeTemplate = () => {
    mkdirp(directory);
    if (type === 'html') {
        const pathToFile = path.join(directory, `${name}.html`);
        if (exist(pathToFile)) {
            console.error('이미 해당 파일이 존재합니다');
        } else {
            // 한번만 실행되는 경우에는 sync 메서드를 써도 된다.
            // 여러번 동시에 호출될 것 같으면 쓰지 말기
            // 따른 요청을 블락하기 때문이다
            fs.writeFileSync(pathToFile, htmlTemplate);
            console.log(pathToFile, '생성 완료');
        }
    } else if (type === 'express-router') {
        const pathToFile = path.join(directory, `${name}.js`);
        if (exist(pathToFile)) {
            console.error('이미 해당 파일이 존재합니다');
        } else {
            fs.writeFileSync(pathToFile, routerTemplate);
            console.log(pathToFile, '생성 완료');
        }
    } else {
        console.error('html 또는 express-router 둘 중 하나를 입력하세요');
    }
};

const dirAnswer = (answer) => {
    directory = (answer && answer.trim()) || '.';
    rl.close();
    makeTemplate();
}

const nameAnswer = (answer) => {
    if (!answer||!answer.trim()) {
        console.clear();
        console.log('name을 반드시 입력하셔야 합니다.');
        return rl.question('파일명을 설정하세요.', nameAnswer);
    }
    name = answer;
    return rl.question('저장할 경로를 설정하세요.(설정하지 않으면 현재경로)', dirAnswer);
};

const typeAnswer = (answer) => {
    if (answer!=='html' && answer!=='express-router') {
        console.clear();
        console.log('html 또는 express-router만 지원합니다.');
        return rl.question('어떤 템플릿이 필요하십니까?', typeAnswer);
    }
    type = answer;
    return rl.question('파일명을 설정하세요. ', nameAnswer);
};

const program = () => {
    if (!type || !name){
        rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        console.clear();
        rl.question('어떤 템플릿이 필요하십니까?', typeAnswer);
        // // 대괄호 표시는 옵션이라는 뜻
        // console.error('사용방법: cli html|express-router 파일명 [생성 경로]');
    } else {
        makeTemplate();
    }
};
program();