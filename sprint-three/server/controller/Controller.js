const model = require ("../model/Model")

function findVideo(_req, res){
    res
    .status(200)
    .json(model.readVideos())
}

function uploadVideo(req, res){
    if (!req.data.title || !req.data.description) {
        response.status(406).json({
            message: "Please fill out all reequired fields"
        })
    }

    const uploadedVideo = {
        title: req.data.title,
        description: req.data.description,
    }
    res
    .status(202)
    .json(model.writeVideos(uploadedVideo))
}

function getVideoID(req, res){
    res.json(model.filterVideos(req.parmas.id))
}

module.exports = {
    findVideo,
    uploadVideo,
    getVideoID
}