# nodemon

- nodemon을 이용하면 서버를 내렸다 올리지 않아도, 변경시 자동으로 해당 작업을 수행해준다.
- 전역설치시 로컬 모듈에 없어도, 해당 명령어를 사용할 수 있다.
- 윈도우에서는 잘 작동 안할수도 있다고 한다.
- package.json의 scripts부분을 "npx nodemon index.js"와 같이 수정해줄 경우,
- 해당 모듈이 없어도 실행 가능하다. npx = Package Runner(실행), npm@5.2.0이상