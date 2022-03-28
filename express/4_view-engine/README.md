# View Engine - Nunjucks

뷰엔진? : 컨트롤러에서 DB의 정보를 가져온다 할 때(게시글, 회원가입 정보)
/products, /board와 같이 컨트롤러에서 DB의 정보를 긁어와서 html로 뿌려준다.
(템플릿이 상속이 있는 것도 있고,, etc 문법이 좀 다를수도)
- 컨트롤러 단에서 데이터를 감지한 다음, 프론트엔드로 뿌려줌

위 설명에 부합한것들을 view engine일고 한다.
- ex. jade, nunjucks, pug, hbs,,,
- express의 view engine들 마다 문법의 차이가 조금씩 있다. 


=> 계속 설치가 되지 않고, package.json에도 추가안됨
==> package.json에 직접 입력하고 npm update하자

=> 디렉토리 루트에 template폴더를 만들어 준다.
==> 기존 도메인이 /admin, /admin/products/, /contact, /contact/list
==> 이렇게 있는데, template폴더에도 위와 같이 똑같이 만들어준다. (=url구조랑 똑같이)

=> tamplate 이하가 수정되면 nodemon에서 감지하도록 package.json의 scripts를 변경
==> "npx nodemon -e js,html app.js"

