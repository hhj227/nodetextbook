http 기본 포트 80
https 기본 포트 443

포트가 다르면 호스트가 같더라도 다른 사이트처럼 동작할 수 있다.

1024 아래 포트는 다른 프로그램이 사용 중일 확률이 높다.
또 리눅스나 맥에서는 관리자 권한이 필요함.

요청이 왔을 때 거절할 수도 있다.

http 완벽 가이드 책 보기

쿠키는 사용자를 추적한다.

노드가 한글을 잘 처리하지 못한다는 단점이 있다.

path가 /면 /아래 모든 경로에서도 유효하다

yj's lec

자바스크립트는 함수형 언어를 지원
. . . 닷으로 연결
```js
const parseCookies = (cookie = '') =>
    cookie
        .split(';')
        .map(v => v.split('='))
        .reduce((acc, [k, v]) => {
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        }, {});
```
split 하면 배열 생성
acc는 객체 이름, k,v는 key, value
reduce 같은 경우 차원을 하나 줄여줌 -> 시간효율성 빨라짐
게다가 멀티스레드 작업처럼 백그라운드로 돌리기 때문에 사용자 효율성 좋아지고 빠름


쿠키랑 세션은 밀접한 관계가 있음

지금 구조의 세션도 브라우저의 쿠키(세션아이디)가 노출되면 서버 정보가 유출될 수 있다.


## REST API

REST API 요청 예시
GET /users
DELETE /users/5
메서드 자원

GET
POST

PUT(전체 수정, 통째로 대체)
PATCH(부분 수정)
DELETE

REST API의 규칙으로 자원은 명사형이어야 한다
하지만 실무에서도 철저히 지키기 힘듬. 융통성 있게 할수도 있음.

POST는 보통 201을 쓴다. 생성되었다는 뜻 강조하기 위함

200이거나 201일때


ajax를 통해서 post 요청
