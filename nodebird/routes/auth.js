const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { User } = require('../models');

const router = express.Router();
// router.get(미들웨어1, 미들웨어2, 미들웨어3)
// POST /auth/join
// isNotLoggedIn에서 autheticate false면 next가 안되어서 뒤에 미들웨어는 걸러짐 -> 실행 안됨
router.post('/join', isNotLoggedIn, async (req, res, next) => {
    const { email, nick, password } = req.body;
    try {
        const exUser = await User.findOne({ where: { email } });
        if (exUser) {
            req.flash('joinError', '이미 가입된 이메일입니다.');
            return res.redirect('/join');
        }
        // 숫자가 커질수록 더 복잡해짐
        console.time('암호화시간');
        const hash = await bcrypt.hash(password, 12);
        console.timeEnd('암호화시간');
        await User.create({
            email,
            nick,
            password: hash,
        });
        return res.redirect('/');
    } catch (e) {
        console.error(e);
        next(e);
    }
});

// POST /auth/login
router.post('/login', (req, res, next) => { // req.body.email, req.body.password
    passport.authenticate('local', (authError, user, info) => { // localStrategy의 done에서 전달됨
        if (authError) {
            console.error(authError);
            return next(authError);
        }
        if (!user) {
            req.flash('loginError', info.message);
            return res.redirect('/');
        }
        return req.login(user, (loginError) => { // req.user
            if (loginError) {
                console.error(loginError);
                return next(loginError);
            }
            return res.redirect('/');
        });
    })(req, res, next);
});

router.get('/logout', isLoggedIn, (req, res) => {
    req.logout();
    req.session.destroy(); // req.user
    res.redirect('/');
});

router.get('/kakao', passport.authenticate('kakao'));

router.get('/kakao/callback', passport.authenticate('kakao', {
    failureRedirect: '/',
}), (req, res) => {
    res.redirect('/');
});

module.exports = router;