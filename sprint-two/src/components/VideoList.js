import React from "react";
import { Link } from "react-router-dom"

function VideoList({ videos }) {
    return (
        <div className="video-list">
            <h2 className="video-list__next"> NEXT VIDEO</h2>
            <ul className="video-list__results">
                {videos.map((video) => {
                    return (
                        <Link to={`/video/${video.id}`}>
                            <li key={video.id} className='video-list__list'>
                                <div className='video-list__thumbnail'>
                                    <img className='video-list__image' src={videos.image} alt={videos.title}></img>
                                </div>
                                <div className='video-list__headers'>
                                    <h3 className='video-list__title'>{videos.title}</h3>
                                    <h2 className='video-list__channel'>{videos.channel}</h2>
                                </div>
                            </li>
                        </Link>
                    );
                })}
            </ul>
        </div >
    );
}

export default VideoList;
