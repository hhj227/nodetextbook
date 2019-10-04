# Closure

출처: https://meetup.toast.com/posts/86

```
함수 + 함수를 둘러싼 환경(Lexical Environment)
```

Closure(클로저)는 **두 개의 함수로 만들어진 환경** 으로 이루어진 특별한 객체의 한 종류이다. 여기서 **환경** 이라 함은 클로저가 생성될 때 그 **범위** 에 있던 여러 지역 변수들이 포함된 `context`를 말한다. 이 클로저를 통해서 자바스크립트에는 없는 비공개(private) 속성/메소드, 공개 속성/메소드를 구현할 수 있는 방안을 마련할 수 있다.


## 클로저 생성하기

다음은 클로저가 생성되는 조건이다.

1. 내부 함수가 익명 함수로 되어 외부 함수의 반환값으로 사용된다.

2. 내부 함수는 외부 함수의 실행 환경(execution environment)에서 실행된다.

3. 내부 함수에서 사용되는 변수 x 는 외부 함수의 변수 스코프에 있다.


```js
function outer() {
  var name = `closure`;
  function inner() {
    console.log(name);
  }
  inner();
}
outer();
// console> closure
```
outer함수를 실행시키는 context에는 name이라는 변수가 존재하지 않는다는 것을 확인할 수 있다. 비슷한 맥락에서 코드를 조금 변경해볼 수 있다.

```js
var name = `Warning`;
function outer() {
  var name = `closure`;
  return function inner() {
    console.log(name);
  };
}

var callFunc = outer();
callFunc();
// console> closure
```
위 코드에서 callFunc를 클로저라고 한다. callFunc 호출에 의해 name이라는 값이 console 에 찍히는데, 찍히는 값은 Warning이 아니라 closure라는 값이다. 즉, outer 함수의 context 에 속해있는 변수를 참조하는 것이다. 여기서 outer함수의 지역변수로 존재하는 name변수를 free variable(자유변수)라고 한다.

이처럼 외부 함수 호출이 종료되더라도 외부 함수의 지역 변수 및 변수 스코프 객체의 체인 관계를 유지할 수 있는 구조를 클로저라고 한다. 보다 정확히는 외부 함수에 의해 반환되는 내부 함수를 가리키는 말이다.


# Scope

### 함수 레벨 스코프

`var`

```js
function foo() {
    if (true) {
        var color = 'blue';
    }
    console.log(color); // blue
}
foo();
```

### 블록 레벨 스코프

`const` `let`

```js
function foo() {
    if(true) {
        let color = 'blue';
        console.log(color); // blue
    }
    console.log(color); // ReferenceError: color is not defined
}
foo();
```


var는 혼란을 야기할 수 있기 때문에 ES6 코드는 대부분 let과 const를 쓴다.


## 렉시컬 스코프

동적 스코프는 프로그램의 런타임 도중의 실행 컨텍스트나 호출 컨텍스트에 의해 결정되고, 렉시컬 스코프에서는 소스코드가 작성된 그 문맥에서 결정된다. 현대 프로그래밍에서 대부분의 언어들은 렉시컬 스코프 규칙을 따르고 있다.

렉시컬 스코프 규칙을 따르는 자바스크립트의 함수는 호출 스택과 관계없이 각각의 (this를 제외한)대응표를 소스코드 기준으로 정의하고, 런타임에 그 대응표를 변경시키지 않는다. (사실 런타임에 렉시컬 스코프를 수정할 수 있는 방법들(eval, with)이 있지만, 권장하지 않는다.)

#### 렉시컬 환경과 환경 레코드

현재-렉시컬 환경의 대응표(환경 레코드)에서 변수를 찾아보고, 없다면 바깥 렉시컬 환경을 참조하여 찾아보는 식으로 중첩 스코프가 가능해진다. 이 중첩 스코프 탐색은 해당하는 이름을 찾거나 바깥 렉시컬 환경 참조가 null이 될 때 탐색을 멈춘다.