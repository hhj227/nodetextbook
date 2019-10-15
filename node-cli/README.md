# 노드 CLI 프로그램 만들기

node는 서버가 아니다.
서버로 쓰는 사람들이 대다수지만, webpack을 돌리는데 쓰이기도 하고

서버보다 더 큰 개념

런타임

node, npm은 commnad line interface program

CLI 프로그램은 터미널에서 실행하는 프로그램이다.


`#!노드설치경로 node`
주석은 리눅스나 맥에서 유효하다


```
"bin": {
    "cli": "./index.js"
  }
```
bin에서 cli라는 명령어를 치면 index.js를 실행해라

```
npm i -g
```
현재 패키지 전역 설치
파일이 바뀌면 다시 설치해줘야 한다.

```
npm i -g express-generator
```
명령어는 express

명령어와 패키지명이 달라도 된다.


process.argv는 사용자가 입력한 내용을 배열로 출력

process.argv[0]: 노드 설치 경로
process.argv[1]: 파일 위치 경로

```
hanhyejeong-ui-MacBook-Pro:node-cli hanhyejeong$ cli
Hello CLI [ '/usr/local/bin/node', '/usr/local/bin/cli' ]
```

다만 노드 전역 모듈의 index.js를 가져온다.

process.argv는 사용자의 입력을 받아서 출력할 수도 있다.

```
hanhyejeong-ui-MacBook-Pro:node-cli hanhyejeong$ cli one two three
Hello CLI [ '/usr/local/bin/node', '/usr/local/bin/cli', 'one', 'two', 'three' ]
```

npm init 할때랑 비슷한 프로그램

패키지 삭제
```
npm rm -g node-cli
```

--옵션 -단축옵션
<필수> [선택]

