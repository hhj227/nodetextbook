# What is JS? 🕵️‍

자바스크립트는 객체 기반의 스크립트 프로그래밍 언어이다.
이 언어는 웹 브라우저 내에서 주로 사용하며, 다른 응용 프로그램의 내장 객체에도 접근할 수 있는 기능을 가지고 있다.
또한 Node.js와 같은 런타임 환경과 같이 서버 사이드 네트워크 프로그래밍에도 사용되고 있다. 


> 싱글스레드 기반으로 동작
이벤트 루프를 기반으로 하는 싱글 스레드 Node.js


> Javascript가 동시에 단 하나의 작업만을 한다는데 어떻게 여러가지 작업을 비동기로 작업할 수 있을까?
> 👉 Event Loop & Queue
>
> 직접적인 작업은 Web API에서 처리되고, 그 작업들이 완료되면 요청시 등록했던 callback이 queue에 등록된다.
> 
> 1. 비동기 작업으로 등록되는 작업은 task와 microtask, animationFrame 작업으로 구분된다
> 2. microtask는 task보다 먼저 작업이 처리된다.
> 3. microtask가 처리된 이후 requestAnimationFrame이 호출되고 이후 브라우저 랜더링이 발생한다.


### Javascript Engine

> 출처: [https://asfirstalways.tistory.com/362](https://asfirstalways.tistory.com/362)

Javascript로 작성한 코드를 해석하고 실행하는 인터프리터

- Call Stack
    단 하나의 호출 스택
    Run to Completion: 하나의 함수가 실행되면 이 함수의 실행이 끝날 때까지 다른 어떤 task도 수행될 수 없다.
    요청이 들어올 때마다 순차적으로 호출 스택에 담아 처리
    
- Task Queue(Event Queue)
    자바스크립트의 런타임 환경에서 처리해야 하는 Task들을 임시저장하는 대기 큐가 존재한다.
    대기 큐를 Task Queue or Event Queue라고 한다.
    Call Stack이 **비어졌을 때** 먼저 대기열에 들어온 순서대로 수행된다.
    자바스크립트에서 비동기로 호출되는 함수들은 call stack에 쌓이지 않고 Task Queue에 enqueue된다.
    이벤트에 의해 실행되는 함수(핸들러)들이 비동기로 실행된다.
    자바스크립트 엔진이 아닌 Web API 영역에 따로 정의되어 있는 함수들은 비동기로 실행된다.
    
    
- Heap
    동적으로 생성된 객체(인스턴스)는 힙에 할당된다.
    대부분 구조화되지 않는 더미같은 메모리 영역을 힙이라 표현한다.

+ Event Loop

```js
while(queue.waitForMessage()){
    queue.processNextMessage();
}
```

현재 실행 중인 태스크가 없는지와 태스크 큐에 태스크가 있는지를 반복적으로 확인한다.
queue에 처리해야할 이벤트가 존재하면 while loop 안으로 들어가서 해당하는 이벤트를 처리하거나 작업을 수행한다.
그리고 다시 queue로 돌아와 새로운 이벤트가 존재하는지 파악한다.
Event Queue에서 대기하고 있는 Event들은 한번에 하나씩 Call Stack으로 호출되어 처리된다.
