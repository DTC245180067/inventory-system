cat << 'EOF' > app/app.js
const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

const db = mysql.createPool({
  host: process.env.DB_HOST || 'mysql_db',
  user: process.env.DB_USER || 'inventory_user',
  password: process.env.DB_PASSWORD || 'StrongPass_2026!Secured',
  database: process.env.DB_NAME || 'inventory_db'
});

app.get('/', (req, res) => {
  db.query('SELECT 1 + 1 AS solution', (error, results) => {
    if (error) {
      console.error('Loi ket noi CSDL:', error);
      return res.status(500).send('Ket noi CSDL that bai!');
    }
    console.log('HTTP GET / - Truy cap thanh cong');
    res.send('<h1> HE THONG QUAN LI KHO HANG (Inventory)</h1><p>Trang thai CSDL: Ket noi CSDL thanh cong</p>');
  });
});

app.get('/metrics', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('# HELP app_up Metric simple\n# TYPE app_up gauge\napp_up 1\n');
});

app.listen(port, () => {
  console.log(`Inventory App đang chay tai port ${port}`);
});
EOF
