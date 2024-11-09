const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app=express();
app.use(cors());
app.use(bodyParser.json());

const users=[{
    username:'admin',
    password:'admin123'
},];

app.post('/api/login', (req,res)=> {
    const {username,password}=req.body;
    const user=user.find((u)=> u.username===username && u.password===password);

});

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=> {
    console.log(`Server is running on http://localhost:${PORT}`);
});