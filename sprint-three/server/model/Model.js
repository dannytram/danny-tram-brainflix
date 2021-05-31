const express = require("express");
const app = express.Router();
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const fs = require('fs')
const videos = require("../data/videos.json");
const heroVideo = require("../data/video-details.json");
const currentHeroVidero = require("../data/video-hero.json");
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

function writeVideos(data) {
    const readVideos = readVideos()
    const video = new Video(data.title, data.description)
    readVideos.push(video)
    fs.writeFileSync(heroVideo, JSON.stringify(readVideos))
    return readVideos
}

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

function filterVideos(id) {
    const readVideos = readVideos()
    let filteredVideos = readVideos.filter((video) => video.id === id)
    if (filteredVideos.length) {
        return filteredVideos.shift()
    } else {
        console.log("Video Not Found")
    }
}

module.exports = {
    readVideos,
    writeVideos,
    filterVideos,
}
