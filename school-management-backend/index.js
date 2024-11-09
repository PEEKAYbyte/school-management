const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app=express();
app.use(cors());
app.use(bodyParser.json());

const users=[{
    username:'admin',
    password:'admin123'
}];

app.post('/api/login', (req,res)=> {
    const {username,password}=req.body;
    const foundUser=user.find((u)=> u.username===username && u.password===password);

    if (foundUser) {
        return res.status(200).json({ message: 'Login successful' });
      } else {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
});
// Add a root route handler
app.get('/', (req, res) => {
    res.send('Welcome to the School Management API');
  });
  app.post('/api/login', (req, res) => {
    // Handle login logic here
});


// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=> {
    console.log(`Server is running on http://localhost:${PORT}`);
});