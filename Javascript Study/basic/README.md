# 기초 문법
출처: www.poiemaweb.com

---

## 변수란?

    변수란 값이 위치하고 있는 메모리 주소(Memory address)에 접근하기 위해 사람이 이해할 수 있는 언어로 명명한 식별자(identifier)
    식별자는 어떤 대상을 유일하게 식별할 수 있는 이름을 말한다. 식별자에는 변수명, 함수명, 프로퍼티명, 클래스명 등이 있다.
    
    `var`, `let`, `const` 키워드(수행할 동작 규정)
    
    1byte(8bit): 256개 : ASCII 표현 가능
    4byte(2^32): -2,147,483,648 ~ 2,147,483,647의 정수: 42억 정도
    
    선언, 할당, 참조
    
    var 빼면 암묵적 전역 변수 <- 권장하지 않음
    

#### 동적 타이핑

dynamic/weak type 언어

type inference

#### 변수 호이스팅

    모든 선언문은 호이스팅된다.
    선언문이 Scope의 선두로 옮겨진 것처럼 동작

```js
console.log(foo); // ① undefined
var foo = 123;
console.log(foo); // ② 123
{
  var foo = 456;
}
console.log(foo); // ③ 456
```

    선언
    초기화: undefined
    할당

    var: function-level scope
    let, const: block-level scope

#### var 키워드로 선언된 변수의 문제점

- 전역변수 남발
- var 키워드 생략 허용
- 중복 선언 허용
- 변수 호이스팅

    변수의 유효 범위(scope)는 좁을수록 좋다.
    ES6는 이러한 var의 단점을 보완하기 위해 let과 const 키워드를 도입하였다.


### 자바스크립트의 메모리 관리

    C: malloc(), free()
    java: garbage collection으로 자동 free
    
메모리 생존 주기
1. 필요할 때 할당
2. 사용
3. 해제

- 값 초기화
```js
var n = 123; // 정수를 담기 위한 메모리 할당
var s = "azerty"; // 문자열을 담기 위한 메모리 할당

var o = {
  a: 1,
  b: null
}; // 오브젝트와 그 오브젝트에 포함된 값들을 담기 위한 메모리 할당

var a = [1, null, "abra"]; // (오브젝트 처럼) 배열과 배열에 담긴 값들을 위한 메모리 할당

function f(a){
  return a + 2;
} // 함수를 위한 할당(함수는 '호출가능한' 오브젝트이다)

// 함수식 또한 오브젝트를 담기위한 메모리를 할당한다. 
someElement.addEventListener('click', function(){
  someElement.style.backgroundColor = 'blue';
}, false);
```

- 함수 호출을 통한 할당
```js
var d = new Date(); // Date 개체를 위해 메모리를 할당
var e = document.createElement('div'); // DOM 엘리먼트를 위해 메모리를 할당한다.
```

```js
var s = "azerty";
var s2 = s.substr(0, 3); // s2는 새로운 문자열
// 자바스크립트에서 문자열은 immutable 값이기 때문에 메모리를 새로 할당하지 않고 단순히 [0, 3] 이라는 범위만 저장한다. 

var a = ["ouais ouais", "nan nan"];
var a2 = ["generation", "nan nan"];
var a3 = a.concat(a2); // 4개의 원소를 가진 새로운 배열
```

- 할당된 메모리가 더 이상 필요없을 때 해제하기

세상에 존재하는 모든 가비지 콜렉터는 안전하지만 완전하지 않다. 가비지 콜렉터는 항상 필요없어진 메모리만을 해제하지만 모든 필요없어진 메모리를 해제하는건 아니다

#### 가비지 콜렉션

- 참조

 A라는 메모리를 통해 (명시적이든 암시적이든) B라는 메모리에 접근할 수 있다면 "B는 A에 참조된다" 라고 한다

- 참조-세기 가비지 콜렉션

어떤 오브젝트를 참조하는 다른 오브젝트가 하나도 없다면 그 오브젝트에 대해 가비지 콜렉션을 수행한다.

```js
var o = { 
  a: {
    b:2
  }
}; // 2개의 오브젝트가 생성되었다. 하나의 오브젝트는 다른 오브젝트의 속성으로 참조된다.
// 나머지 하나는 'o' 변수에 할당되었다.
// 명백하게 가비지 콜렉션 수행될 메모리는 하나도 없다.


var o2 = o; // 'o2' 변수는 위의 오브젝트를 참조하는 두 번째 변수이다.
o = 1; // 이제 'o2' 변수가 위의 오브젝트를 참조하는 유일한 변수가 되었다.

var oa = o2.a; // 위의 오브젝트의 'a' 속성을 참조했다.
// 이제 'o2.a'는 두 개의 참조를 가진다. 'o2'가 속성으로 참조하고 'oa'라는 변수가 참조한다.

o2 = "yo"; // 이제 맨 처음 'o' 변수가 참조했던 오브젝트를 참조하는 오브젝트는 없다(역자: 참조하는 유일한 변수였던 o2에 다른 값을 대입했다)
// 이제 오브젝트에 가비지 콜렉션이 수행될 수 있을까?
// 아니다. 오브젝트의 'a' 속성이 여전히 'oa' 변수에 의해 참조되므로 메모리를 해제할 수 없다.

oa = null; // 'oa' 변수에 다른 값을 할당했다. 이제 맨 처음 'o' 변수가 참조했던 오브젝트를 참조하는 다른 변수는 없으므로 가비지 콜렉션이 수행된다.
```

한계: 순환
    
이 알고리즘은 두 오브젝트가 서로를 참조하면 문제가 발생한다. 두 오브젝트 모두 필요 없어졌더라도 가비지 콜렉션을 수행할 수 없다.

```js
var div = document.createElement("div");
div.onclick = function(){
  doSomething();
}; // div 오브젝트는 이벤트 핸들러를 'onclick' 속성을 통해 참조한다.
// 이벤트 핸들러의 스코프에도 div 오브젝트가 있으므로 div 오브젝트에 접근할 수 있다. 따라서 이벤트 핸들러도 div 오브젝트를 참조한다.
// 순환이 발생했고 메모리 누수가 일어난다.
```

- 표시하고 쓸기(mark-and-sweep) 알고리즘

 "더 이상 필요없는 오브젝트"를 "닿을 수 없는 오브젝트"로 정의
 
 순환 참조의 경우도 가비지 콜렉션이 일어난다.
 

---

## 데이터 타입

C family lanugage like C, Java | 정적 타입 언어, 사전에 타입 지정
--- | ---
JavaScript | 동적 타입 언어, 값이 할당되는 과정에서 타입 추론

1. 원시타입

    immutable value, pass-by-value(값에 의한 전달)

1.1. number

    정수만을 위한 타입이 없고 모든 수를 실수로 처리, Infinity, -Infinity, NaN

1.2. string

    immutable(변경 불가능), UTF-16
```js
var str = 'Hello';
str = 'world';
```
    이때 문자열 ‘Hello’와 ‘world’는 모두 메모리에 존재하고 있다.
    변수 str은 문자열 ‘Hello’를 가리키고 있다가 문자열 ‘world’를 가리키도록 변경되었을 뿐이다.
    한번 생성된 문자열은 read only로서 변경할 수 없다. 이것을 변경 불가능(immutable)이라 한다.
    그러나 새로운 문자열을 재할당하는 것은 물론 가능하다.
    이는 기존 문자열을 변경하는 것이 아니라 새로운 문자열을 새롭게 할당하는 것이기 때문이다.

1.3. boolean

1.4. undefined

    undefined는 개발자가 의도적으로 할당한 값이 아니라 자바스크립트 엔진에 의해 초기화된 값이다.
    변수의 값이 없다는 것을 명시하고 싶은 경우 어떻게 하면 좋을까? 그런 경우는 undefined를 할당하는 것이 아니라 null을 할당한다.
    
    ReferenceError: 선언하지 않은 변수에 접근

1.5. null

    변수가 기억하는 메모리 어드레스의 참조 정보를 제거하는 것을 의미하며 자바스크립트 엔진은 누구도 참조하지 않는 메모리 영역에 대해 가비지 콜렉션을 수행할 것이다.
    또는 함수가 호출되었으나 유효한 값을 반환할 수 없는 경우, 명시적으로 null을 반환하기도 한다.

```js
var foo = null;
console.log(typeof foo); // object
```
    JS 설계상의 오류
    따라서 null 타입 확인할 때 === 사용

1.6. symbol

    심볼은 주로 이름의 충돌 위험이 없는 유일한 객체의 프로퍼티 키(property key)를 만들기 위해 사용한다.
    심볼은 Symbol 함수를 호출해 생성한다.
    이때 생성된 심볼 값은 다른 심볼 값들과 다른 유일한 심볼 값이다.

```js
// 심볼 key는 이름의 충돌 위험이 없는 유일한 객체의 프로퍼티 키
var key = Symbol('key');
console.log(typeof key); // symbol

var obj = {};
obj[key] = 'value';
console.log(obj[key]); // value
```

2. 객체 타입(Object type, Reference type)

    데이터와 그 데이터에 관련한 동작(절차, 방법, 기능)을 모두 포함할 수 있는 개념적 존재
    이름과 값을 가지는 데이터를 의미하는 프로퍼티(property)와 동작을 의미하는 메소드(method)를 포함할 수 있는 독립적 주체이다
    pass-by-reference(참조에 의한 전달)

#### 값이란?

프로그램에 의해 조작될 수 있는 대상

리터럴: 소스코드 안에서 직접 만들어 낸 상수 값 자체를 말하며 값을 구성하는 최소 단위

primitive data type | object data type
---|---
number, string, boolean, null, undefined, symbol|object


암묵적 타입 강제 변환

## 표현식

표현식은 하나의 값으로 평가된다.

```js
// 리터럴 표현식
10

// 식별자 표현식
sum

// 연산자 표현식
10 + 20

// 함수/메소드 호출 표현식
square()
```

표현식은 평가되어 결국 하나의 값이 되므로 표현식과 값은 동등한 관계, 즉 동치(Equivalent)다. 다시 말해 표현식은 값처럼 사용할 수 있다. 이것은 값이 위치할 수 있는 자리에는 표현식도 위치할 수 있다는 의미다.

```js
// 선언문(Declaration statement)
var x = 5 * 10; // 표현식 x = 5 * 10를 포함하는 문이다.

// 할당문(Assignment statement)
x = 100; // 이 자체가 표현식이지만 완전한 문이기도 하다.
```

할당문은 그 자체가 표현식이다. 다시 말해 할당문은 표현식인 문이다.

크롬 DevTools에서 표현식이 아닌 문은 언제나 undefined를 반환하고, 표현식인 문은 언제나 값을 반환한다.

할당문은 표현식인 문이기 때문에 값처럼 사용할 수 있다.

```js
var foo = x = 100;
```

#### 비교 연산자

== 동등 비교: 값이 같음

=== 일치 비교: 값과 타입이 같음

```js
isNaN(NaN) // true

0 === -0     // true

// 암묵적 타입 변환
!0 // true
```
주의해야 할 것은 typeof 연산자로 null 값을 연산해 보면 null이 아닌 “object”를 반환한다는 것이다. 이것은 자바스크립트의 첫 번째 버전에서 이렇게 설계된 것을 현재의 버전에 반영하지 못하고 있기 때문이다.
null 타입을 확인할 때는 typeof 연산자를 사용하지 말고 일치 연산자(===)를 사용하도록한다.


## 객체

```
출처: https://gmlwjd9405.github.io/2018/09/17/class-object-instance.html

객체: 소프트웨어 세계에 구현할 대상
클래스: 객체를 만들어 내기 위한 설계도 혹은 틀
인스턴스: 설계도를 바탕으로 소프트웨어 세계에 구현된 구체적인 실체
```

JS에서 원시타입을 제외한 모든 나머지 값들(함수, 배열, 정규표현식 등)은 모두 객체

키와 값으로 구성된 프로퍼티와 메소드의 집합

```js
var person = {
  name: 'Lee',
  gender: 'male',
  sayHello: function () {
    console.log('Hi! My name is ' + this.name);
  }
};
```

프로토타입 객체


## 제어문

레이블 문

중첩된 for 문을 외부로 탈출할 때 레이블 문은 유용하지만 그 외의 경우 레이블 문은 일반적으로 권장하지 않는다. 레이블 문을 사용하면 프로그램의 흐름이 복잡해져서 가독성이 나빠지고 오류를 발생시킬 가능성이 높아지기 때문이다.
```js
// foo라는 레이블 식별자가 붙은 레이블 문
foo: console.log('foo');

// foo라는 식별자가 붙은 레이블 블록문
foo: {
  console.log(1);
  break foo; // foo 레이블 블록문을 탈출한다.
  console.log(2);
}

console.log('Done!');

// outer라는 식별자가 붙은 레이블 for 문
outer: for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    // i + j === 3이면 외부 for 문을 탈출한다.
    if (i + j === 3) break outer;
  }
}

console.log('Done!');
```


## 타입 변환(Type coercion)과 단축 평가

1. 명시적 타입 변환(Explicit coercion) 또는 타입 캐스팅(Type casting)

    개발자에 의해 의도적으로 값의 타입을 변환하는 것
    
```js
var x = 10;

// 명시적 타입 변환
var str = x.toString(); // 숫자를 문자열로 타입 캐스팅한다.
console.log(typeof str); // string
```

1.1. 문자열 타입으로 변환

    1. String 생성자 함수를 new 연산자 없이 호출하는 방법
    2. Object.prototype.toString 메소드를 사용하는 방법
    3. 문자열 연결 연산자를 이용하는 방법

```js
// 1. String 생성자 함수를 new 연산자 없이 호출하는 방법
// 숫자 타입 => 문자열 타입
console.log(String(1));        // "1"
console.log(String(NaN));      // "NaN"
console.log(String(Infinity)); // "Infinity"
// 불리언 타입 => 문자열 타입
console.log(String(true));     // "true"
console.log(String(false));    // "false"

// 2. Object.prototype.toString 메소드를 사용하는 방법
// 숫자 타입 => 문자열 타입
console.log((1).toString());        // "1"
console.log((NaN).toString());      // "NaN"
console.log((Infinity).toString()); // "Infinity"
// 불리언 타입 => 문자열 타입
console.log((true).toString());     // "true"
console.log((false).toString());    // "false"

// 3. 문자열 연결 연산자를 이용하는 방법
// 숫자 타입 => 문자열 타입
console.log(1 + '');        // "1"
console.log(NaN + '');      // "NaN"
console.log(Infinity + ''); // "Infinity"
// 불리언 타입 => 문자열 타입
console.log(true + '');     // "true"
console.log(false + '');    // "false"
```

1.2. 숫자 타입으로 변환

    1. Number 생성자 함수를 new 연산자 없이 호출하는 방법
    2. parseInt, parseFloat 함수를 사용하는 방법(문자열만 변환 가능)
    3. 단항 연결 연산자를 이용하는 방법
    4. 산술 연산자를 이용하는 방법

```js
// 1. Number 생성자 함수를 new 연산자 없이 호출하는 방법
// 문자열 타입 => 숫자 타입
console.log(Number('0'));     // 0
console.log(Number('-1'));    // -1
console.log(Number('10.53')); // 10.53
// 불리언 타입 => 숫자 타입
console.log(Number(true));    // 1
console.log(Number(false));   // 0

// 2. parseInt, parseFloat 함수를 사용하는 방법(문자열만 변환 가능)
// 문자열 타입 => 숫자 타입
console.log(parseInt('0'));       // 0
console.log(parseInt('-1'));      // -1
console.log(parseFloat('10.53')); // 10.53

// 3. + 단항 연결 연산자를 이용하는 방법
// 문자열 타입 => 숫자 타입
console.log(+'0');     // 0
console.log(+'-1');    // -1
console.log(+'10.53'); // 10.53
// 불리언 타입 => 숫자 타입
console.log(+true);    // 1
console.log(+false);   // 0

// 4. * 산술 연산자를 이용하는 방법
// 문자열 타입 => 숫자 타입
console.log('0' * 1);     // 0
console.log('-1' * 1);    // -1
console.log('10.53' * 1); // 10.53
// 불리언 타입 => 숫자 타입
console.log(true * 1);    // 1
console.log(false * 1);   // 0
```

1.3. 불리언 타입으로 변환

    1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
    2. ! 부정 논리 연산자를 두번 사용하는 방법

```js
// 1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
// 문자열 타입 => 불리언 타입
console.log(Boolean('x'));       // true
console.log(Boolean(''));        // false
console.log(Boolean('false'));   // true
// 숫자 타입 => 불리언 타입
console.log(Boolean(0));         // false
console.log(Boolean(1));         // true
console.log(Boolean(NaN));       // false
console.log(Boolean(Infinity));  // true
// null 타입 => 불리언 타입
console.log(Boolean(null));      // false
// undefined 타입 => 불리언 타 입
console.log(Boolean(undefined)); // false
// 객체 타입 => 불리언 타입
console.log(Boolean({}));        // true
console.log(Boolean([]));        // true

// 2. ! 부정 논리 연산자를 두번 사용하는 방법
// 문자열 타입 => 불리언 타입
console.log(!!'x');       // true
console.log(!!'');        // false
console.log(!!'false');   // true
// 숫자 타입 => 불리언 타입
console.log(!!0);         // false
console.log(!!1);         // true
console.log(!!NaN);       // false
console.log(!!Infinity);  // true
// null 타입 => 불리언 타입
console.log(!!null);      // false
// undefined 타입 => 불리언 타입
console.log(!!undefined); // false
// 객체 타입 => 불리언 타입
console.log(!!{});        // true
console.log(!![]);        // true
```

2. 암묵적 타입 변환(Implicit coercion) 또는 타입 강제 변환(Type coercion)

    개발자의 의도와는 상관없이 자바스크립트 엔진에 의해 암묵적으로 타입이 자동 변환

```js
var x = 10;

// 암묵적 타입 변환
// 숫자 타입 x의 값을 바탕으로 새로운 문자열 타입의 값을 생성해 표현식을 평가한다.
var str = x + '';

console.log(typeof str, str); // string 10

// 변수 x의 값이 변경된 것은 아니다.
console.log(x); // 10
```

    명시적 타입 변환도 마찬가지지만, 암묵적 타입 변환이 기존 값(위 예제의 경우, 변수 x의 값)을 직접 변경하는 것은 아니다. “변수”에서 살펴보았듯이 변수 값이 원시 타입의 값인 경우, 변수 값을 변경하려면 재할당을 통해 새로운 메모리 공간을 확보하고 그 곳에 원시 값을 저장한 후 변수명이 재할당된 원시 값이 저장된 메모리 공간의 주소를 기억하도록 해야 한다.
    
    암묵적 타입 변환은 변수 값을 재할당해서 변경하는 것이 아니라 자바스크립트 엔진이 표현식을 에러없이 평가하기 위해 기존 값을 바탕으로 새로운 타입의 값을 만들어 단 한번 사용하고 버린다. 위 예제의 경우, 자바스크립트 엔진은 표현식 x + ‘‘을 평가하기 위해 변수 x의 숫자 값을 바탕으로 새로운 문자열 값 ‘10’을 생성하고 이것으로 표현식 ‘10’ + ‘‘를 평가한다. 이때 자동 생성된 문자열 ‘10’은 표현식의 평가가 끝나면 아무도 참조하지 않으므로 가비지 컬렉터에 의해 메모리에서 제거된다.

```js
// 표현식이 모두 문자열 타입이여야 하는 컨텍스트
'10' + 2               // '102'
`1 * 10 = ${ 1 * 10 }` // "1 * 10 = 10"

// 표현식이 모두 숫자 타입이여야 하는 컨텍스트
5 * '10' // 50

// 표현식이 불리언 타입이여야 하는 컨텍스트
!0 // true
if (1) { }
```


#### 단축 평가

```js
// 논리합(||) 연산자
'Cat' || 'Dog'  // 'Cat'
false || 'Dog'  // 'Dog'
'Cat' || false  // 'Cat'

// 논리곱(&&) 연산자
'Cat' && 'Dog'  // Dog
false && 'Dog'  // false
'Cat' && false  // false
```


**활용법**

- 객체가 null인지 확인하고 프로퍼티를 참조할 때

```js
var elem = null;

console.log(elem.value); // TypeError: Cannot read property 'value' of null
console.log(elem && elem.value); // null
```

- 함수의 인수(argument)를 초기화할 때

```js
// 단축 평가를 사용한 매개변수의 기본값 설정
function getStringLength(str) {
  str = str || '';
  return str.length;
}

getStringLength();     // 0
getStringLength('hi'); // 2

// ES6의 매개변수의 기본값 설정
function getStringLength(str = '') {
  return str.length;
}

getStringLength();     // 0
getStringLength('hi'); // 2
```

