# SNS

```
npm init
```
package.json 만듬

테이블 간에 관계가 있을 것 같으면 mysql을 씀

mysql + sequelize

```
npm i -g sequelize-cli
npm i sequelize mysql2
sequelize init
npm i -D nodemon 
// 서버 코드 바뀌는걸 알아서 재시작
// nodemon 파일명
npm i -g nodemon
npm i express cookie-parser express-session morgan connect-flash pug
//body-parser는 안씀
npm i dotenv
npm i passport passport-local passport-kakao bcrypt
npm i multer
```

    데이터베이스-테이블-로우
    데이터베이스는 config.json에서
    
    nodemon은 개발할 때만 쓰고 배포때는 잘 안쓴다.
    배포때는 pm2나 forever 같은거 씀
    
    express-generator 쓰는거보다 스스로 짜는게 구조파악 쉬움
    
    dot(.)+env
    .env 파일에 키=값 형식으로 비밀번호를 저장하세요.
    보안 효과


라우터 기본    
```js
const express = require('express');
const router = espress.Router();

module.exports = router;
```
    
    provider: local vs kakao
    
    timestamps: 생성일, 수정일
    paranoid: 삭제일(복구용)
    
    다대다 관계는 belongsToMany(belongsTo가 아님)
    through에는 새로 생기는 모델 이름을 넣어준다.(매칭 테이블)
    
    strategy(전략): 누구를 로그인 시킬 것인가
    
    done(서버에러)
    done(null, 사용자정보)
    done(null, false, 실패 정보)
    
    done(에러, 성공, 실패)가 아래로 전달된다.
    (authErr, user, info) => {
    
    req.session.destroy()는 세션을 지웁니다.
    사실 로그아웃시에는 안해도 돼요. 다른 세션도 같이 지워져서요.
    
    req.login 시에 serializeUser 호출
    -> 유저 정보 중 아이디만 세션에 저장
    
    매 요청 시마다 passport.session()
    여기서 deserializeUser가 실행
    user.id를 DB 조회 후 req.user로
    
    deserializeUser는 모든 요청에 대해 실행되기 때문에
    DB조회를 캐싱해서 효율적이게 만들어야 한다.
    
    1. /auth/kakao
    2. 카카오 로그인
    3. /auth/kakao/callback으로 프로필 반환
    
    로그인은 카카오가 대신 처리해주지만
    저희 디비에도 사용자를 저장합니다.
    (snsId, provider 사용)
    
    profile 객체는 SNS 권한에 따라 내용물이 다르니 console.log로 확인 후 사용하기
    
    developers.kakao.com
    Redirect Path가 deprecated 되었습니다
    
    사용자 정보 수집할때는 왜 수집할건지 꼭 알려줘야 한다.
    
    이미지를 업로드하려면 폼을 multipart/form-data로,
    그리고 이것을 해석하려면 multer가 필요하다.
    
    