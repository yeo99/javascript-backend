const express = require('express');
const router = express.Router();

router.get('/' , (req, res) => {
    res.send('admin 이후 url');
});

// ..admin/products를 의미.
router.get('/products' , (req, res) => {
    // res.send('admin/products');
    // 템플릿에 뿌려줌 = render, res.render()에 들어갈 경로는 template폴더 이후이다.
    res.render('admin/products.html', {
        message : 'hello!!!!!!!22',
        online : 'express'
    })
});



// router export
module.exports = router;