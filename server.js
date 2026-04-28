const express = require('express');
const app = express();

const PORT = 3000;

// Route
app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html>
<head>
  <title>Happy Birthday 💖</title>

  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap" rel="stylesheet">

  <style>
    body {
      margin: 0;
      font-family: 'Poppins', sans-serif;
      overflow: hidden;
      color: white;
      text-align: center;
      background: black;
    }

    video {
      position: fixed;
      right: 0;
      bottom: 0;
      min-width: 100%;
      min-height: 100%;
      z-index: -1;
      filter: brightness(0.5);
    }

    .container {
      margin-top: 120px;
      animation: fadeIn 2s ease-in-out;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(40px); }
      to { opacity: 1; transform: translateY(0); }
    }

    h1 {
      font-size: 55px;
    }

    .typing {
      font-size: 24px;
      margin-top: 20px;
      min-height: 40px;
    }

    .btn {
      margin-top: 30px;
      padding: 15px 30px;
      font-size: 18px;
      border-radius: 30px;
      border: none;
      background: #ff6f91;
      color: white;
      cursor: pointer;
      transition: 0.3s;
    }

    .btn:hover {
      transform: scale(1.1);
    }

    .message {
      margin-top: 30px;
      font-size: 26px;
      display: none;
    }
  </style>
</head>

<body>

  <video autoplay muted loop>
    <source src="https://cdn.coverr.co/videos/coverr-mountain-landscape-1606/1080p.mp4" type="video/mp4" type="video/mp4">
  </video>

  <div class="container">
    <h1>🎉 Happy Birthday Spandana 💖</h1>

    <div class="typing" id="typing"></div>

    <button class="btn" onclick="showMessage()">Open Your Surprise 🎁</button>

    <div class="message" id="msg">
      You are one of the most special people in my life 💖<br/>
      Your smile means everything 😊<br/><br/>
      I made this just to see you smile today 🎉
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>

  <script>
    const text = "Today is all about you 💖✨";
    let i = 0;

    function typeWriter() {
      if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 60);
      }
    }

    typeWriter();

    function showMessage() {
      document.getElementById('msg').style.display = 'block';

      confetti({
        particleCount: 200,
        spread: 120
      });
    }
  </script>

</body>
</html>
  `);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});