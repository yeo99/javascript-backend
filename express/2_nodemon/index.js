const http = require('http');

http.createServer( (request, response) => {
    // 헤드에 상태 코드와, 문서 타입을 지정
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.write('Hello Server1111');
    response.end();
    // 3000번에서 서버를 엶
}).listen(3000);