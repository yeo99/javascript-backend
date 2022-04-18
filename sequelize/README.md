# sequelize crud

### Sequelize란?
Sequelize는 ORM(Object-Relational Mapping)
Nodejs로 mysql 또는 postgresql을 제어할 수 있게 해줌



### 목차
1. 프로젝트 설정
2. dotenv 설정
3. database 생성
4. DB 접속(mysql)
5. 모델 작성
6. DB 입력(insert)
7. DB 조회
8. moment.js 적용
9. 상세페이지 보기
10. DB 수정
11. DB 삭제






### dotenv 설정
환경변수 설정
```bash
npm install dotenv
```
.env.sample과 같은 파일을 작성하여. 미리 어떤 내용이 들어가야하는지 명시
환경변수로 선언한 변수에는 process.env.[환경변수명]으로 접근할 수 있다.
```js
ex)
process.env.DB_PASSWORD
```






### Database 생성
exercise db에 products라는 테이블을 만든 후 CRUD 연습
```bash
mysql -u root -p
```
입력 후 패스워드 입력

```mysql
create database exercise
```






### DB 접속
```
npm install mysql2
npm install sequelizer
```
.env 파일에 공백이 없도록 주의하자.






### 모델 작성
models/products.js에 모델 작성
```
return db.sequelize.sync();
```
를 app.js에 입력하여 DB와 sync