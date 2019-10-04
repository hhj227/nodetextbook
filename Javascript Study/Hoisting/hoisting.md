# Hoisting

출처: https://github.com/JaeYeopHan/Interview_Question_for_Beginner/tree/master/JavaScript#hoisting

`hoist: 끌어올리기`

var keyword로 선언된 모든 변수 선언은 호이스트된다.
호이스트란 변수의 정의가 그 범위에 따라 선언과 할당으로 분리되는 것을 의미한다.
즉, 변수가 함수 내에서 정의되었을 경우, 선언이 함수의 최상위로, 함수 바깥에서 정의되었을 경우, 전역 컨텍스트의 최상위로 변경이 된다.

끌어올려지는 것은 `선언`

선언문은 항시 자바스크립트 엔진 구동시 가장 최우선으로 해석하므로 호이스팅 되고, **할당 구문은 런타임 과정에서 이루어지기 때문에** 호이스팅 되지 않는다.

함수가 자신이 위치한 코드에 상관없이 함수 선언문 형태로 정의한 함수의 유효범위는 전체 코드의 맨 처음부터 시작한다. 함수 선언이 함수 실행 부분보다 뒤에 있더라도 자바스크립트 엔진이 함수 선언을 끌어올리는 것을 의미한다. 함수 호이스팅은 함수를 끌어올리지만 변수의 값은 끌어올리지 않는다.


```js
foo( );
function foo( ){
  console.log(‘hello’);
};
// console> hello

foo( );
var foo = function( ) {
  console.log(‘hello’);
};
// console> Uncaught TypeError: foo is not a function
```

