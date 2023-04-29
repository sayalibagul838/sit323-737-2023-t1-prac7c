const express= require("express");

const app= express();

app.get ('/' , (req, res) => res.send("hello world11"))
app.listen(3000, ()=> console.log('server ready'))

