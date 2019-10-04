function foo() {
    a = 2;
    console.log(a);
    var a;
}
foo();

// '선언'만 hoisting, 초기화는 런타임 중