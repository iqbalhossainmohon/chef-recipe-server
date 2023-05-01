const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('chef recipe server side is running ')
})

app.listen(port, ()=>{
    console.log(`Chef Recipe API is running on port: ${port}`);
})