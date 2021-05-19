import React from 'react'

function UploadPage() {
    return (
        <div className="upload-page">
            <h2 className = "upload-page__title"> Upload Video</h2>
            <div className = "upload-page__thumbnail">
                <h3 className = "upload-page__thumbnail-title"></h3>
                <img className = "upload-page__thumbnail-img"></img>
            </div>
            <div className = "upload-page__form">
                <h3 className = "upload-page__video-title"></h3>
                <textarea className = "upload-page__video-title-form"></textarea>
                <h3 className = "upload-page__video-description"></h3>
                <textarea className = "upload-page__video-description-form"></textarea>
            </div>
            <button>PUBLISH</button>
            <button>CANCEL</button>
        </div>
    )
}

export default UploadPage
