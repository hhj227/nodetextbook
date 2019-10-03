const EventEmmiter = require('events');

const myEvent = new EventEmmiter();

myEvent.addListener('방문', () => {
    console.log('방문해주셔서 감사합니다.');
});
myEvent.on('종료', () => {
    console.log('good bye');
});
myEvent.on('종료', () => {
    console.log('please go');
});
//once: 한번만 실행
myEvent.once('특별이벤트', () => {
    console.log('한번만 실행됩니다');
});
// myEvent.emit('방문');
// myEvent.emit('종료');
myEvent.emit('특별이벤트');
myEvent.emit('특별이벤트');
myEvent.on('계속', () => {
   console.log('계속 리스닝');
});
myEvent.removeAllListeners('계속');
myEvent.emit('계속');

const callback = () => {
    console.log('please go');
};
myEvent.on('종료1', () => {
    console.log('good bye');
});
myEvent.on('종료1', callback);

myEvent.removeListener('종료1', callback);
myEvent.emit('종료1');
