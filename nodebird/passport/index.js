const local = require('./localStrategy');
const kakao = require('./kakaoStrategy');
const { User } = require('../models');

module.exports = (passport) => {
    // { id:1, name: zero, age:25 } -> 1
    // 한번만 저장
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
    // 1 -> { id:1, name: zero, age:25 } -> req.user
    // 메모리에 1번만 저장
    // 요청이 올때마다 호출됨

    // passport.deserializeUser((id, done) => {
    //     // caching해서 db 요청 횟수 줄이기
    //     if (user[id]) {
    //         done(user[id]);
    //     } else {
    //         User.findOne({ where: { id } })
    //             .then(user => done(null, user))
    //             .catch(err => done(err));
    //     }
    // });
    passport.deserializeUser((id, done) => {
        User.findOne({ where: { id } })
            .then(user => done(null, user))
            .catch(err => done(err));
    });

    local(passport);
    kakao(passport);
}