# Sequelize and MySQL

CRUD
Create
Read
Update
Delete

npm i sequelize mysql2
npm i -g sequelize-cli

sequelize init
-> config, models, seeders 폴더 생김

models 폴더의 index.js 중요

create new connection in mysql workbench

port 3306: 유명하니까 다른걸로 바꾸는것도 좋다

id node pw nodejsbook

데이터베이스(스키마)
    테이블(사용자)
        로우(사용자1)
        로우(사용자2)
    테이블(댓글)
        로우(댓글1)
        로우(댓글2)
        
        
☠️에러

sequelize db:create 명령어 에러

ERROR: Client does not support authentication protocol requested by server; consider upgrading MySQL client

alter user 'node'@'localhost' identified with mysql_native_password by 'nodejsbook';

해결: config.json 안고쳤었음



models 폴더에 js 파일들 만들어서 데이터 저장할 공간 미리 만들기


1대1(hasOne, belongsTo)
1대다(hasMany, belongsTo)
다대다(belongsToMany)

/comments/:id처럼 :파라미터로 주소에서 변하는 부분을 가져올 수 있다.
(req.params.파라미터)

/comments/hello
/comments/:id
두 라우터가 있다면, 와일드카드 라우터가 더 뒤에 있어야 한다.
왤까


create 생성, findall 모두 찾기, find 하나만 찾기 모두 Promise 지원 메서드



# 에러났을 때 대처법

network tab을 열고 Header - request payload 확인
preview로 미리보기도 가능
정적파일 가져오면 그대로 보임


findAll
update
destroy
create

