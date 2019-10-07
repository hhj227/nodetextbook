//cluster로 멀티프로세싱
const cluster = require('cluster');
const os = require('os');
const http = require('http');
const numCPUs = os.cpus().length;

// cluster에는 master(관리자) 프로세스와 worker(일꾼) 프로세스가 있다.
// cluster.fork()가 워커를 만든다.
// process.pid로 현재 프로세스(마스터든 워커든)의 아이디를 가져올 수 있다.
if (cluster.isMaster) {
    console.log('마스터 프로세스 아이디', process.pid);
    for (let i =0;i<numCPUs;i+=1){
        cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(worker.process.pid, '워커가 종료되었습니다.');
        cluster.fork();
    });
} else {
    // 워커 수만큼 리로드하면 죽는다.
    http.createServer((req, res) => {
        res.end('http server');
        setTimeout(() => {
            process.exit(1);
        }, 1000);
    }).listen(8080);
    console.log(process.pid, '워커 실행');
}
