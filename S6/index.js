const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req,res)=> {
    res.redirect('/example.html');
})
app.get('/getData', (req, res) => {
    let data = {
        name: "Benoit",
        age: 21
    };
    res.send(data);
})

app.get('/randomtext', (req,res) => {
    let randomtext = "Patat";
    res.send(randomtext);
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })