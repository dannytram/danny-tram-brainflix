import React from "react";
import VideoListVideo from "../VideoListVideo"
import "./VideoList.scss"


function VideoList(props) {
    return (
        <div className="video-list">
            <h2 className="video-list__next"> NEXT VIDEO</h2>
            <ul className="video-list__results">
                {props.videos
                    .filter((video) => video.id !== props.currentVideo)
                    .map((video) => (
                        <VideoListVideo
                            key={video.id}
                            id={video.id}
                            title={video.title}
                            channel={video.channel}
                            image={video.image}
                    />
                ))}
            </ul>
        </div>
    )
}

export default VideoList;