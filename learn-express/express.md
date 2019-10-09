# Express

npm i -g express-generator

express learn-express --view=pug
👉 폴더가 만들어짐

package.json의 dependency들이 한번에 설치됨
`npm i`

어디 올릴 때는 node_modules 없애고 다운받는 사람이 'npm i' 쳐서 따로 받는다.


서버 시작
npm start
기본 포트가 3000(bin/www)

npm run start
run 지우고 npm start도 됨
npm run dev

bin/www가 서버 실행부
핵심 로직은 app.js에 들어있음

```js
app.get('/', (req, res) => {
    res.send('hello');
});

app.post('/', (req, res) => {

});

app.delete('/users', (req, res) => {

});
```
send 객체 추가


pug가 html 대체

app.set
익스프레스 설정 또는 값 저장
(값 저장은 나중에 사용)
app.use
미들웨어 장착


요청(req) -> 
미들웨어들(app.use) ->
응답(res)

app.use 안의 req, res로 요청과 응답 조작할 수 있다.
next로 다음 미들웨어로 넘어간다.

app.get app.post 등은 GET, POST 요청들에만 걸리는 미들웨어를 장착
주소가 붙으면 그 주소와 일치하는 요청만 걸린다

app.options
CORS

```js
const logger = require('morgan');

const logger = () => (req, res, next) => {
    next();
}
```

use는 공통 미들웨어
get, post, put, patch, delete 등은 라우팅 미들웨어를 장착
(일치하는 경우에만 실행)

```
npm i install express-session connect-flash
```


### 라우팅 미들웨어

라우터도 미들웨어다

```js
app.use(middle, middle, middle, ...);
app.get(middle, middle, middle, ...);
app.post(middle, middle, middle, ...);
app.put(middle, middle, middle, ...);
```

```
app.use('/abc') + router.get('/df') = GET /abc/df
app.use('/') + router.post('/') = POST /
```

### 404와 에러처리 미들웨어

next도 하지 않고 res 메서드도 사용하지 않으면 클라이언트는 계속 기다리게 된다.(무한로딩)
실제로는 timeout 될때까지


### pug

html 파일 보낼때 fs.readfile
express에서 res.sendfile

html에서 반복문을 쓸 수 없기 때문에 template engine 씀

pug and ejs

pug는 들여쓰기로 부모 자식 태그를 구분한다.
들여쓰기는 탭이든 스페이스든 상관없지만 하나로 통일해야 한다.

- 뒤에 변수를 선언하고
= 뒤에 변수를 사용

속성은 () 안에, div는 생략가능
내용은 태그 한 칸 띄고 작성
아이디는 #, 클래스는 .
|로 여러 줄, 태그.으로 여러줄


웹 페이지에서 중복되는 부분은 include나 layout으로 해결

https://pugjs.org/api/getting-started.html

