const express = require('express')
const app = express.Router()
const { v4: uuidv4 } = require('uuid')
const fs = require('fs')
const path = require('path')

const heroVideo = path.join(__dirname, '../data/video-details.json')

function readVideos() {
  const data = fs.readFileSync(heroVideo)
  return JSON.parse(data)
}

function writeVideos(body) {
  const newVideos = readVideos()
  const video = new Video(body.title, body.description)
  newVideos.push(video)
  fs.writeFileSync(heroVideo, JSON.stringify(newVideos))
  return newVideos
}

function Video(title, description) {
  this.id = uuidv4()
  this.title = title
  this.channel = 'The Greatest Channel Ever'
  this.image =
    'https://en.meming.world/images/en/thumb/2/2c/Surprised_Pikachu_HD.jpg/300px-Surprised_Pikachu_HD.jpg'
  this.views = '0'
  this.likes = '0'
  this.duration = '7:21'
  this.description = description
  this.timestamp = Date.now()
}

function filterVideos(id) {
  const newVideos = readVideos()
  let filteredVideos = newVideos.filter((video) => video.id === id)
  if (filteredVideos.length) {
    return filteredVideos.shift()
  } else {
    console.log('Video Not Found')
  }
}

module.exports = {
  readVideos,
  writeVideos,
  filterVideos,
}
