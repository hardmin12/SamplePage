const jwt = require('jsonwebtoken');

app.post('/login', (req, res) => {
    const {email, password} =req.body;

    //check user database
    if (email == "user@example.com" && password === "password123") {
        //make JWT tocken 
        const token = jwt.sign({email}, 'secretKey', { expiresIn: '1h'});
        res.json({token});
    } else {
        res.status(401).json({message: 'Invalid credentials'});
    }
});