const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('🚀 Node.js app successfully deployed in localhost!');
});

// Change this line to bind to all interfaces (not just localhost)
app.listen(port, '0.0.0.0', () => {
  console.log(`App running on http://localhost:${port}`);
});

