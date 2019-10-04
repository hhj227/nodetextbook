# Promise

출처
https://github.com/JaeYeopHan/Interview_Question_for_Beginner/tree/master/JavaScript

Javascript 에서는 대부분의 작업들이 비동기로 이루어진다. 콜백 함수로 처리하면 되는 문제였지만 요즘에는 프론트엔드의 규모가 커지면서 코드의 복잡도가 높아지는 상황이 발생하였다. 이러면서 콜백이 중첩되는 경우가 따라서 발생하였고, 이를 해결할 방안으로 등장한 것이 Promise 패턴이다. Promise 패턴을 사용하면 비동기 작업들을 순차적으로 진행하거나, 병렬로 진행하는 등의 컨트롤이 보다 수월해진다. 또한 예외처리에 대한 구조가 존재하기 때문에 오류 처리 등에 대해 보다 가시적으로 관리할 수 있다. 이 Promise 패턴은 ECMAScript6 스펙에 정식으로 포함되었다.

```
promise 선언부 + promise 실행부
```

promise 상태
1. pending

resolve나 reject가 호출되기 전까지 상태

2. fulfilled

resolve 함수 호출

3. rejected

reject 함수 호출

4. settled

약속이 지켜졌던 안지켜졌던 일단 결론이 난 상태