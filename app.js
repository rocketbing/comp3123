const express = require('express');
const app = express();
const port = 3000;
// GET/hello - Returns "Hello Express JS"
app.get('/hello',(req,res) => {
    res.send('Hello Express JS');
});

// GET /user - With query parameters (firstname, lastname)
app.get('/user', (req,res) => {
    const firstname = req.query.firstname || 'Huanbing';
    const lastname = req.query.lastname || 'Zhang';
    res.json({firstname,lastname});
});

//POST /user/firsname/:lastname - With path parameters
app.post('/user/:firstname/:lastname',(req,res) => {
    const {firstname,lastname} = req.params;
});

app.listen(port,() => {
    console.log(`Server running on port ${port}`);
});