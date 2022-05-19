const express = require('express')
const app = express()
const path = require('path')
const router = express.Router()

app.use(express.static('public'))
router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'))
});
router.get('/movie',function(req,res){
    res.sendFile(path.join(__dirname+'/movie.html'))
});
app.listen(process.env.PORT || 3000, () => console.log("server is now running."))