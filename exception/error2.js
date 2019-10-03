process.on('uncaughtException', (err) => {
    console.error('예기치못한 에러', err);
    //서버 복구하는 코드를 넣을 수도 있지만 권장되지는 않는다. 실행 보장이 되지 않기 때문
});

setInterval(() => {
    throw new Error('imma ruin your server');
},1000);

setTimeout(() => {
    console.log('실행됩니다');
},2000);