const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const { User } = require('../models');

// urlencoded 미들웨어가 해석한 req.body의 값들을 usernameField, passwordField에 연결
module.exports = (passport) => {
    passport.use(new LocalStrategy({
        usernameField: 'email', //req.body.email
        passwordField: 'password', //req.body.password
    }, async (email, password, done) => { // done(에러, 성공, 실패)
        try {
            const exUser = await User.findOne({ where: { email }});
            if (exUser) {
                //비밀번호 검사
                const result = await bcrypt.compare(password, exUser.password);
                if (result) {
                    done(null, exUser);
                } else {
                    // message를 이메일-비밀번호 조합이 맞지 않습니다로 통일하면 보안에 좀 더 좋음
                    done(null, false, { message: '비밀번호가 일치하지 않습니다.' });
                }
            } else {
                done(null, false, { message: '가입되지 않은 회원입니다.' });
            }
        } catch (e) {
            console.error(e);
            done(e);
        }
    }));
}