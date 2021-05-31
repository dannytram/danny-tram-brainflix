import React from 'react'
import "../../styles/main.css";
import preview from "../../assets/images/Upload-video-preview.jpg";
import history from "../../components/Utility/history";
import uploadVideoPreview from "../../assets/images/Upload-video-preview.jpg"
import axios from "axios"


function UploadPage() {

    const uploadVideo = (event) => {
        event.preventDefault();
        const newVideo = {
            "title": event.target.title.value,
            "channel": "The Greatest Channel Ever",
            "image": uploadVideoPreview,
            "description": event.target.description.value,
        }

        axios
            .post("http://localhost:8080/videos", newVideo)
            .then(event.target.reset(), alert("Video Published"))
            .catch((error) => {
                console.log(error)
            })
    }



    return (
        <div className="upload-page">
            <h2 className="upload-page__title"> Upload Video</h2>
            <div className="upload-page__divider"></div>
            <form className = "upload-page__form" onsubmit = {uploadVideo}>
                <div className="upload-page__desktop-wrapper">
                    <div className="upload-page__thumbnail">
                        <h3 className="upload-page__thumbnail-title">VIDEO THUMBNAIL</h3>
                        <img
                            className="upload-page__thumbnail-img"
                            src={preview}
                            alt="Upload Your Video"
                        />
                    </div>
                    <div className="upload-page__input">
                        <h3 className="upload-page__video-title">TITLE YOUR VIDEO</h3>
                        <textarea
                            className="upload-page__video-title-form"
                            placeholder="Add a title to your video"
                        ></textarea>
                        <h3 className="upload-page__video-description">ADD A VIDEO DESCRIPTION</h3>
                        <textarea
                            className="upload-page__video-description-form"
                            placeholder="Add a description of your video"
                        ></textarea>
                    </div>
                </div>
                <div className="upload-page__divider"></div>
                <div className="upload-page__btn-wrapper">
                    <div>
                        <button className="upload-page__publish-btn" onClick={() => {
                            setTimeout(function () { history.push('/') }, 2000);
                        }}>
                            PUBLISH</button>
                    </div>
                    <button className="upload-page__cancel-btn">CANCEL</button>
                </div>
            </form>
        </div>
    )
}

export default UploadPage
