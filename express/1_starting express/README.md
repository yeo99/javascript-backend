# Starting Express

왜 express를 사용하는가?
- 웹서비스 관점: 많이 사용해서, 인력 충원이 쉽다.
- 레퍼런스 많음.



사용자는 요청하고(Request, URL 접속 + form전송.. etc)
서버는 응답한다(Response, 텍스트 + 이미지.. etc).


json파일들은 주석을 사용하지 않는것이 좋다.
정말 써야겠다면 가능은 하지만, 호환성을 고려하여 사용하지 않는듯
package.json파일의 scripts부분에 "dev" 명령어를 추가할 시 구동시 명령어에 run을 붙여줘야한다.