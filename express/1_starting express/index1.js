// express를 사용하여 서버를 띄워줌
const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    // url 추가. localhost:3000/
    // 더 추가하려면 express를 껐다가 다시 켜 줘야함
    // 이런 문제를 해결하기 위해 nodemon라이브러리 사용(node-monitoring)
    res.send('hello express');
});

app.listen( port , () => {
    console.log('Express listening on port' , port);
})