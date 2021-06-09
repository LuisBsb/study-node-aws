const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/', function (req, res){
    res.sendFile(path.join(__dirname+'/index.html')); 
});

router.get('/sobre', function (req, res){
    res.sendFile(path.join(__dirname+'/sobre.html')); 
});

app.get('/', function(request, response){
    return response.sendStatus(200);
});

app.use('/', router);
app.listen(process.env.port || 3000);

console.log("Rodando serve!");
