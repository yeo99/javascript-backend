# Express 권장구조

- admin 폴더의 index.js는 url과 미들웨어만 보는 역할
- admin 폴더의 index.ctrl.js는 실제 라우팅만



- controllers/index 대분류url + 현재 위치
- controllers/admin/index.js ( admin url + 미들웨어 )
- controllers/admin/index.ctrl.js ( admin url + 미들웨어 )



- server.js는 서버가 뜨는 역할만
- app.js는 express 관련 세팅만
- controllers/ 에서는 위 내용을 다룸