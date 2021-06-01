const model = require('../model/Model')

function findVideo(_req, res) {
  res.status(200).json(model.readVideos())
}

function uploadVideo(req, res) {
  if (!req.body.title || !req.body.description) {
    res.status(406).json({
      message: 'Please fill out all required fields',
    })
  }

  const uploadedVideo = {
    title: req.body.title,
    description: req.body.description,
  }
  res.status(202).json(model.writeVideos(uploadedVideo))
}

function getVideoID(req, res) {
  res.json(model.filterVideos(req.params.id))
}

module.exports = {
  findVideo,
  uploadVideo,
  getVideoID,
}
