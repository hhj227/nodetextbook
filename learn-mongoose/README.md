# MongoDB

express "폴더명" --view=pug
npm i

mongodb는 id앞에 언더스코어(_)가 붙는다


router 생성할 때 제일 먼저 할 것
express 생성
```js
const express = require('express');
```
라우터 생성
```js
const router = express.Router();
```
라우터 모듈 등록
```js
module.exports = router;
```


```
mongod
```

mongodb 기본 포트는 27017
해커 공격당하기 쉬우므로 포트 번호 바꾸는거 추천

```
mongod --auth
```

속성 안에 객체를 넣을 수도 있다.

고정된 길이의 배열이면 속성 안에 넣고, 계속 늘어날 것 같다면(like 댓글) 컬렉션을 별도로 둡니다.

빅데이터같이 각 사용자마다 다른 속성이 필요할 때 유용함

자유로워서 에러가 날 확률이 높음

자유도의 함정. Javascript처럼

웹 개발에서는 MySQL로 충분하다

몽구스는 몽고디비에 제약을 두지만 편의성과 안정성을 추가한다.

