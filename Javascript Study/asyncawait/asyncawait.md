# Async / Await

출처
https://github.com/JaeYeopHan/Interview_Question_for_Beginner/tree/master/JavaScript

비동기 코드를 작성하는 새로운 방법이다. Javascript 개발자들이 훌륭한 비동기 처리 방안이 Promise로 만족하지 못하고 더 훌륭한 방법을 고안 해낸 것이다(사실 async/await는 promise기반). 절차적 언어에서 작성하는 코드와 같이 사용법도 간단하고 이해하기도 쉽다. function 키워드 앞에 async를 붙여주면 되고 function 내부의 promise를 반환하는 비동기 처리 함수 앞에 await를 붙여주기만 하면 된다. async/await의 가장 큰 장점은 Promise보다 비동기 코드의 겉모습을 더 깔끔하게 한다는 것이다. 이 것은 es8의 공식 스펙이며 node8LTS에서 지원된다(바벨이 async/await를 지원해서 곧바로 쓸수 있다고 한다!).

- promise

```js
function makeRequest() {
    return getData()
        .then(data => {
            if(data && data.needMoreRequest) {
                return makeMoreRequest(data)
                  .then(moreData => {
                      console.log(moreData);
                      return moreData;
                  }).catch((error) => {
                      console.log('Error while makeMoreRequest', error);
                  });
            } else {
                console.log(data);
                return data;
            }
        }).catch((error) => {
          console.log('Error while getData', error);
        });
}
```

- async/await

```js
async function makeRequest() { 
    try {
      const data = await getData();
      if(data && data.needMoreRequest) {
          const moreData = await makeMoreRequest(data);
          console.log(moreData);
          return moreData;
      } else {
          console.log(data);
          return data;
      }
    } catch (error) {
        console.log('Error while getData', error);
    }
}
```