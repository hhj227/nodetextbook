# Arrow Function

화살표 함수 표현식은 기존의 function 표현방식보다 간결하게 함수를 표현할 수 있다. 화살표 함수는 항상 익명이며, 자신의 this, arguments, super 그리고 new.target을 바인딩하지 않는다. 그래서 생성자로는 사용할 수 없다.

화살표 함수 도입 영향: 짧은 함수, 상위 스코프 this


```js
var materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

console.log(materials.map(material => material.length));
// expected output: Array [8, 6, 7, 9]
```