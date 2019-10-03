console.log("script start");

setTimeout(function() {
    console.log("setTimeout");
}, 0);

Promise.resolve().then(function() {
    console.log("promise1");
}).then(function() {
    console.log("promise2");
});

requestAnimationFrame(function() {
    console.log("requestAnimationFrame");
})
console.log("script end");

/*
script start
script end
promise1
promise2
requestAnimationFrame
setTimeout
*/