const express = require('express');
const router = express.Router();

// 미들웨어. 인자 3개(req, res, next)
function testMiddleware( req, res, next ) {
    console.log('첫번째 미들웨어');
    next();
}

function testMiddleware2( req, res, next ) {
    console.log('두번째 미들웨어');
    next();
}

// function loginRequired(req, res, next){
//     if(로그인이 되어있지 않으면) {
//         res.redirect(로그인창으로);
//     }else{
//         제어권 넘김 = 다음 페이지로
//         next()
//     }
// }

// 미들웨어 추가
router.get('/' , testMiddleware, testMiddleware2, (req, res) => {
    res.send('admin 이후 url');
});

// ..admin/products를 의미.
router.get('/products' , (req, res) => {
    // if(로그인이 안되어있으면) {res.redirect}

    // res.send('admin/products');
    // 템플릿에 뿌려줌 = render, res.render()에 들어갈 경로는 template폴더 이후이다.
    res.render('admin/products.html', {
        message : 'hello!!!!!!!22',
        online : 'express'
    })
});

// get을 이용하여 ../products/write에서 ../admin/write.html을 보여줌
router.get('/products/write' , (req, res) => {
    // 템플릿 지정
    res.render('admin/write.html')
})

// POST를 이용하여 write.html 폼에 작성된 내용을 서버로 보내줌
// '작성하기' 버튼 클릭 시 화면에 123출력
router.post('/products/write', (req, res) => {
    // res.send(req.body.name);        req의 body에서 name=name인풋을 POST
    // res.send(req.body.price);    req의 body에서 name=price인풋을 POST
    res.send(req.body);
});


// router export
module.exports = router;