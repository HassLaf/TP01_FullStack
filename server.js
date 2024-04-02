const express = require('express')
const helmet = require("helmet")
const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(helmet());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    const mongoose = require('mongoose');mongoose.connect(process.env.DATA_BASE_URL);db = mongoose.connection;db.on('error', console.error.bind(console, 'connection error:'));db.once('open', function() {  console.log("connecté à Mongoose")});
    console.log(`Example app listening on port ${port}`);
});