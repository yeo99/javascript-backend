# Global View Variable

- ex. 로그인 한 사람에게는 로그아웃 버튼을 보여주고 싶고, 로그인을 하지 않은 사람이라면 회원가입 버튼과 로그인 버튼을 띄워주고 싶다면?

```javascript
router.get('/products/write' , (req, res) => {
    res.render('admin.write.html' , {islogin : true});
});
```
매번 위와 같이 작성할 순 없다.


```javascript
// 로그인 되어있는지 물어보는 미들웨어 추가(Global View Variable 이용)
app.use( (req, res, next) => {
    // isLogin은 전역
    app.locals.isLogin = true;
    next();
})
```
을 추가하고 재사용되는 base.html템플릿에서 if분기로 로그인 여부를 띄워준다.