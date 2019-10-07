// express 4.1.6부터 bodyparser 내장되어 있어서 안깔아도 됨. express로 대체
const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');
const path = require('path');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 미들웨어 순서도 중요하다
// session은 cookieParser 아래에, passport는 session 아래에
// static은 next를 안하기 때문에 맨 위로 올린다
app.use(logger('dev'));
// static 미들웨어는 정적파일용 라우터 역할을 한다. 못찾으면 next를 한다.
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('secret code'));
app.use(session({
    resave: false,// 세션 객체에 수정 사항이 없더라도 저장을 할지
    saveUninitialized: false, // 처음의 빈 세션 객체라도 저장을 할지
    secret: 'secret code',
    cookie: {
        httpOnly: true,
        secure: false,
    },
}));
app.use(flash()); // 1회성 메시지

app.use((req, res, next) => {
   console.log('first middleware');
   // if (+new Date() % 2 === 0) {
   //     next();
   // } else {
   //     res.send('50% 당첨');
   // }
   next();
}, (req, res, next) => {
    console.log('second middleware');
    next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

// 404 NOT FOUND
// express에서는 writeHEad(404) 대신 status(404)를 쓴다
app.use((req, res, next) => {
    res.status(404).send('NOT FOUND');
});

// 500 ERROR
// db에 요청을 보냈는데 응답이 없다 <- 서버 잘못
app.use(function (err, req, res, next) {
    console.log(err);
    res.status(500).send('SERVER ERROR');
});

module.exports = app;