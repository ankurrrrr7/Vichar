const express = require("express");
const app = express()
const jwt = require("jsonwebtoken")
const jwtPassword = ("123456");

app.use(express.json());

const ALL_USERS = [
    {
      username: "harkirat@gmail.com",
      password: "123",
      name: "harkirat singh",
    }
  ];
app.post("/signin",(req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    var token = jwt.sign({username:username}, jwtPassword)
    return res.json({
        token
    });
})
app.get("/users",(req, res)=>{
    const token = req.body.authroization;
    const decoded = jwt.verify(token ,jwtPassword);
    const username = decoded.username;
    res.json({
        msg: ALL_USERS
    })
})
app.listen(3000);