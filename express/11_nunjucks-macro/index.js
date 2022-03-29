const express = require('express');
// index.js(진입점)에 nunjucks를 추가해줌
const nunjucks = require('nunjucks');
const logger = require('morgan');
// npm install 안해도됨. express 내장모듈이여서
const bodyParser = require('body-parser');

// exports된 routes/admin.js를 불러옴
const admin = require('./routes/admin');
const contact = require('./routes/contact');

const app = express();
const port = 3000;

// 인자에 폴더(=template)
nunjucks.configure('template', {
    // false일 경우 html태그를 허용하게되어 Driven-By-Download공격이 가능하다.
    autoescape : true,
    // 위의 const app = express()
    express : app
});

// 미들웨어 셋팅. 새로고침 걸면 요청 방식과 http상태코드가 뜬다
app.use( logger('dev') );
// 바디파서 설정(미들웨어로)
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended : false }) );

// uploads 파일에 있는 사진들을 보여주는것이 목적
// 아래와 같이 작성할 경우, url의 파일 이름을 통해 사진을 보여 줄 수 있다.
// 이런 방식을 통해 css나 이미지를 서빙할 수 있다.
// 앞의 '/uploads'가 url, 뒤의 '..'이 폴더명
app.use ( '/uploads' , express.static('uploads') );
// app.use( (req, res, next) => {
//     req.body = {

//     }
// })

// 로그인 되어있는지 물어보는 미들웨어 추가(Global View Variable 이용)
app.use( (req, res, next) => {
    // isLogin은 전역
    app.locals.isLogin = true;
    // req_path는 express에서 현재 url을 보내주는 변수
    app.locals.req_path = req.path;
    next();
})

app.get('/', (req, res) => {
    res.send('express start');
});

function vipMiddleware(req, res, next) {
    console.log('최우선 미들웨어');
    // next()잊지말기
    next()
}

// 아래처럼 하나하나 다 지정해주는건 가독성 측면에서도 좋지 않다.
// 폴더를 분리하여 admin 뒤의 주소들을 다 admin.js에 넣어주자.
// app.get('/admin', (req, res) => {
//     res.send('express start');
// });

// app.use = 미들웨어 작성가능 + vipMiddleware가 admin이하 모든 url에 적용된다
app.use('/admin', vipMiddleware, admin);
app.use('/contact', contact);

// 사용하지 않는 인자들은 언더바(_) 처리해줄 수 있다.
app.use( (req, res, _) => {
    // status code가 400번인경우 common/404.html로 렌더링
    res.status(400).render('common/404.html');
});

app.use( (req, res, _) => {
    // status code가 400번인경우 common/404.html로 렌더링
    res.status(500).render('common/500.html');
});

app.listen( port, () => {
    console.log('Express listening on port', port);
});