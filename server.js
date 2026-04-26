const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
    <title>Happy Birthday 🎉</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        text-align: center;
        font-family: Arial, sans-serif;
        background: linear-gradient(135deg, #ff9a9e, #fad0c4);
        color: white;
        overflow: hidden;
      }

      h1 {
        font-size: 50px;
        margin-top: 80px;
      }

      p {
        font-size: 22px;
      }

      .balloons {
        font-size: 40px;
        margin-top: 20px;
        animation: float 3s infinite ease-in-out;
      }

      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-25px); }
        100% { transform: translateY(0px); }
      }

      .btn {
        margin-top: 30px;
        padding: 15px 25px;
        font-size: 18px;
        background: white;
        color: #ff6f91;
        border: none;
        border-radius: 25px;
        cursor: pointer;
      }

      .message {
        margin-top: 20px;
        font-size: 24px;
        display: none;
      }
    </style>
  </head>

  <body>
    <h1>🎉 Happy Birthday Spandana 🎂</h1>

    <p>
      Wishing you a day full of happiness and a year full of joy ❤️
    </p>

    <div class="balloons">🎈🎈🎈🎈🎈</div>

    <button class="btn" onclick="showMessage()">Click for Surprise 🎁</button>

    <div class="message" id="msg">
      You are truly special 💖<br/>
      Keep smiling always 😊
    </div>

    <!-- Music -->
    <audio autoplay loop>
      <source src="https://www.bensound.com/bensound-music/bensound-happyrock.mp3" type="audio/mpeg">
    </audio>

    <script>
      function showMessage() {
        document.getElementById('msg').style.display = 'block';
      }
    </script>

  </body>
  </html>
  `);
});

app.listen(port, '0.0.0.0', () => {
  console.log(\`App running on http://localhost:\${port}\`);
});