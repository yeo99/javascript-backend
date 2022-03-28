const express = require('express');
const router = express.Router();

router.get('/' , (req, res) => {
    res.send('admin 이후 url');
});

// ..admin/products를 의미.
router.get('/products' , (req, res) => {
    res.send('admin/products');
});



// router export
module.exports = router;