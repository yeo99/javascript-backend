# NPM

- npm(Nodejs Package Manager)
누군가 만들어놓은 패키지를 가져다가 사용할 수 있고, 만들어서 올릴 수도 있다.



- npm init
커맨드라인에 입력하여서 package.json 생성이 가능하다.



- package.json
package.json에 기입된 버전 기호에 따라 라이브러리의 새로운 버젼이 나왔을 시
npm update를 치면 package.json의 정보에 따라 업데이트를 한다.
scripts부분을 수정하여서 명령어를 만들 수 있다.



- package-lock.json
ex. 만약에 express는 lodash3에 최적화 되어있고
uuid4는 lodash4에 최적화 되어있다면?
각 라이브러리의 하위에 참조하는 버전의 라이브러리들이 명시되어있다.