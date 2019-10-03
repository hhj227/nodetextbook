function test1() {
    console.log("test1");
    test2();
}

function test2() {
    let timer = setTimeout(function () {
        console.log("test2");
    },0);
    test3();
}

function test3() {
    console.log("test3");
}

test1();
// test1 test3 test2
// 이벤트 루프의 콜스택이 비어있게 되면 queue의 head에서 하나의 event를 가져와서 call stack으로 넣는다.
// 이벤트에 걸려있는 핸들러는 절대 먼저 실행될 수 없다