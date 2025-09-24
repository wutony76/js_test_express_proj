# js_test_express_proj

start test express

npm init -y
npm install express
npm install dotenv morgan cors cookie-parser jsonwebtoken helmet bcryptjs multer

---

1. dotenv #用來管理環境變數 (.env 檔案)
   安裝：npm install dotenv
2. morgan #請求紀錄 middleware（方便 debug）
   安裝：npm install morgan
3. cors #處理跨來源資源共享（跨域請求 CORS）
   安裝：npm install cors
4. body-parser
5. cookie-parser #讀取/設定 cookie
   安裝：npm install cookie-parser
6. express-validator #表單驗證（字串長度、email 格式等）
   安裝：npm install express-validator
7. jsonwebtoken (JWT) #JSON Web Token，常用於登入驗證
   安裝：npm install jsonwebtoken
8. helmet #加強 HTTP Header 安全性，避免常見攻擊
   安裝：npm install helmet
9. bcrypt / bcryptjs #密碼加密（hash）
   安裝：npm install bcryptjs
10. multer #處理檔案上傳 (圖片 / 文件)
    安裝：npm install multer

---

11. nodemon（開發環境必裝） #自動重啟伺服器
    安裝：npm install --save-dev nodemon
12. concurrently #同時跑多個指令（如前端 + 後端）
    安裝：npm install --save-dev concurrently
