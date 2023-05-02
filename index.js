const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

const chefData = require('./data/chef-data.json');

app.use(cors());
app.get('/', (req, res) => {
    res.send(chefData);
});

app.listen(port, ()=>{
    console.log(`Chef Recipe API is running on port: ${port}`);
})