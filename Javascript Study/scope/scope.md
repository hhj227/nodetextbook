# Scope

var: function
let: block

immutable: 불변의

let, const 변수 재선언 불가능

let, const가 hoisting이 발생하지 않는건 아니다.

var가 function-scoped로 hoisting이 되었다면

let, const는 block-scoped단위로 hoisting이 일어나는데

```js
c = 'test' // ReferenceError: c is not defined
let c
```

위에 코드에서 ReferenceError가 발생한 이유는 `tdz(temporal dead zone)`때문이다.

let은 값을 할당하기전에 변수가 선언 되어있어야 하는데 그렇지 않기 때문에 에러가 난다.

이건 const도 마찬가지인데 좀 더 엄격하다.

```js
// let은 선언하고 나중에 값을 할당이 가능하지만
let dd
dd = 'test'
```

// const 선언과 동시에 값을 할당 해야한다.
const aa // Missing initializer in const declaration
이렇게 javascript에 tdz가 필요한 이유는 동적언어이다 보니깐 runtime type check 가 필요해서이다.


### Temporal Dead Zone

