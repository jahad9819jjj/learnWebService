// src/test.js
const http = require('http');
const fs = require('fs');
const path = require('path');

// const hostname = '0.0.0.0';
// const port = 8080;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

const server = http.createServer((req, res) => {
    // リクエストされたURLに基づいてファイル名を設定
    let filePath = path.join(__dirname, req.url === '/' ? 'node_js_index.html' : req.url);
  
    // 適切なContent-Typeを取得
    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeTypes = {
      '.html': 'text/html',
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      // 他のMIMEタイプもここに追加
    };
  
    const contentType = mimeTypes[extname] || 'application/octet-stream';
  
    // ファイルの読み込みと送信
    fs.readFile(filePath, (error, content) => {
      if (error) {
        if(error.code == 'ENOENT') {
          // ファイルが見つからない場合の処理
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end('404: File Not Found');
        } else {
          // その他のサーバーエラー
          res.writeHead(500);
          res.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
        }
      } else {
        // 成功した場合、ファイルを送信
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content, 'utf-8');
      }
    });
  });
  
  const PORT = process.env.PORT || 8080;
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });