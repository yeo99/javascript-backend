// express를 사용하지 않고 서버를 여는법
// http 내장 모듈을 받음
const http = require('http');

http.createServer( (request, response) => {
    // 헤드에 상태 코드와, 문서 타입을 지정
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.write('Hello Server');
    response.end();
    // 3000번에서 서버를 엶
}).listen(3000);

/**
 * http 상태코드
 *  - 1xx : 조건부 응답
 *  - 2xx : 응답 성공
 *  - 3xx : 리다이렉션
 *  - 4xx : 요청 오류
 *  - 5xx : 서버 오류
 */