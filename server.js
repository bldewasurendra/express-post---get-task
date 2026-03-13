const express = require('express');
const app = express();

// Static files (CSS) සදහා folder එක හඳුන්වා දීම
app.use(express.static('public')); 
app.use(express.urlencoded({ extended: true }));

// 1. Input Page
app.get('/', (req, res) => {
    res.send(`
        <link rel="stylesheet" href="/style.css">
        <div class="card">
            <h2>Welcome</h2>
            <p>Please enter your name to receive a greeting.</p>
            <form action="/greet" method="POST">
                <input type="text" name="userName" placeholder="Enter your name" required>
                <button type="submit">Get Greeting</button>
            </form>
        </div>
    `);
});

// 2. Redirect Logic
app.post('/greet', (req, res) => {
    res.redirect(`/hello?name=${req.body.userName}`);
});

// 3. Result Page
app.get('/hello', (req, res) => {
    const name = req.query.name;
    res.send(`
        <link rel="stylesheet" href="/style.css">
        <div class="card">
            <h1>Hello, ${name}!</h1>
            <a href="/">Go Back</a>
        </div>
    `);
});

app.listen(3000, () => console.log("Server started on port 3000"));