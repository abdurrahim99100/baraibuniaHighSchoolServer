const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middle were;
app.use(express.json());
app.use(cors());

// by default get operations;
app.get('/', (req, res) => {
    res.send('SYSTEM IS RUNNING.................VUMMMMMMMMMMMMM');
});

// LISTEN;
app.listen(port, () => {
    console.log(`SYSTEM IS RUNNING ON PORT ${port}`);
});