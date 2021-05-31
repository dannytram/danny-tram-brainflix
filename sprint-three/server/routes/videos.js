const express = require("express");
const router = express.Router();
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const fs = require('fs')
const heroVideo = require("../data/video-details.json");
const { response } = require("express");

// Configuration
require('dotenv').config();
const port = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(cors());

function readVideos() {
    const data = fs.readFileSync(heroVideo)
    return JSON.parse(data)
}

router.get("/", (_req, res) => {
    res.json(readVideos())
})

function filterVideos(id) {
    const readVideos = readVideos()
    let filteredVideos = readVideos.filter((video) => video.id === id)
    if (filteredVideos.length) {
        return filteredVideos.shift()
    } else {
        console.log("Video Not Found")
    }
}

router.get("/:id", (req, res) => {
    res.json(filterVideos(req.params.id))
})


function Video(title, description) {
    this.id = uuidv4()
    this.title = title
    this.channel = ""
    this.image = ""
    this.views = "0"
    this.likes = "0"
    this.duration = "0:00"
    this.description = description
    this.timestamp = Date.now()
}

function writeVideos(data) {
    const readVideos = readVideos()
    const video = new Video(data.title, data.description)
    readVideos.push(video)
    fs.writeFileSync(heroVideo, JSON.stringify(readVideos))
    return video
}


router.post("/:id", (req, res) => {
    if (!req.data.title || !req.data.description) {
        response.status(406).json({
            message: "Please fill out all reequired fields"
        })
    }
    res.jason(writeVideos(req.data))
})

router.listen(port, () => {
    console.log(`App is running on port ${port}`);
});

module.exports = router;