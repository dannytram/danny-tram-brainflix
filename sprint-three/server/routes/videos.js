const express = require("express");
const router = express.Router();
const cors = require('cors');
const { v4: uuidv4 } = require("uuid");
const videos = require('../data/videos.json')

// Middleware
app.use(express.json());
app.use(cors());

router
    .route("/")
    .get((_req, res) => {
        res.send(videos);
    })
    .post((_req, res)=>{
        videos.push(req.body);
        return res.status(200).send(videos);
    })
    

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});