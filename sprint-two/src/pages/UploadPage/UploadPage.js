import React from 'react'
import "../../styles/main.css";
import preview from "../../assets/images/Upload-video-preview.jpg";
import history from "../../components/Utility/history";
import PopUp from "../../components/Utility/PopUp";


class UploadPage extends React.Component {
    state = {
        seen: false
    };

    successNotification = () => {
        this.setState({
            seen: !this.state.seen
        });
    };


    render() {
        return (
            <div className="upload-page">
                <h2 className="upload-page__title"> Upload Video</h2>
                <div className="upload-page__divider"></div>
                <div className="upload-page__desktop-wrapper">
                    <div className="upload-page__thumbnail">
                        <h3 className="upload-page__thumbnail-title">VIDEO THUMBNAIL</h3>
                        <img
                            className="upload-page__thumbnail-img"
                            src={preview}
                            alt="Upload Your Video"
                        />
                    </div>
                    <div className="upload-page__form">
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
                    <div onClick={this.successNotification}>
                        <div onClick={() => history.push('/')} >
                            <button className="upload-page__publish-btn">PUBLISH</button>
                            {this.state.seen ? <PopUp toggle={this.successNotification} /> : null}
                        </div>
                    </div>
                    <button className="upload-page__cancel-btn">CANCEL</button>
                </div>
            </div>
        )
    }
}

export default UploadPage
