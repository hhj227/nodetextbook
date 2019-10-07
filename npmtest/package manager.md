# Package Manager

### npm

node package manager

```
npm init
```

모듈 다운 받을 때 package.json 열어서 확인해보기

```
npm install jest --save-dev
```

jest는 배표환경 말고 개발 환경에서만 설치하고 싶을 때

--save-dev -> -D

--global -> -g -> 명령어처럼 동작함

install -> i

npm update
```
npm i -g npm
```

### SemVer 버전 이해하기

package.json에서 engine은 이 패키지가 사용할 node와 npm 버전을 적는 곳

버전이 3자리 👉 Semantic Version (SemVer)

메이저 버전.마이너 버전.패치버전
major.minor.patch

patch 버그 수정
minor 신기능 추가
major 대규모 변화(고장 확률)


버그 고친 버전이 나오면 웬만하면 새로 깔아준다.
minor 새로운 기능 원한다면 업데이트
major 버전은 신중하게 올려야 한다.
버전 업그레이드 테스트 후에 올리기

^ : Minor, patch update
~ : patch update
부등호
X.X.X X는 모든 숫자를 의미

```
npm rm morgan
npm search express
npm ls express <- 내 패키지에서 express가 어떤 버전으로 설치되어 있는지
npm ls base <- base가 왜 설치되었는지 보여줌
```

package.json에서 버전 직접 올릴 수 있음
그런데 실수로 오타가 날 수도 있다.

```
npm version 1.0.8
npm version patch
npm version minor
npm version major
```


#### 패키지 배포하기

npm adduser
로그인해야 배포할 수 있다

package json의 main 부분을 보면 가장 중요한 파일이 뭔지 알 수 있다.


```
npm publish
npm info "패키지명"
```

24시간 안에 지워야 함
아니면 안지워짐
참조하는 경우도 생기기 때문에

npm unpublish npmtestbyhan --force

