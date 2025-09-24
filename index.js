const express = require('express');
const app = express();
const port = 3000;

// 定義首頁路由
app.get('/', (req, res) => {
  // --send String 
  // res.send('Hello Express!');

  // --send json
  res.send({
    name: 'John',
    age: 20,
    email: 'john@example.com',
  });
});

// 啟動伺服器
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
