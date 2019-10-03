싱글쓰레드인 노드에서는 예외처리가 정말 중요함



try catch 권장은 안함

하지만 async, await처럼 어쩔 수 없이 try/catch를 써야 하는 경우도 있다.


uncaughtException은 error catch를 한번에 해주는 애
모든 에러가 기록되긴 하는데 그 에러가 계속 남
uncaughtException에 의존하지 말고 근본적인 에러의 원인을 해결합시다.
