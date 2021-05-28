import React from 'react'
import { Link } from "react-router-dom"

function VideoListVideo(props) {
    return (
        <Link to={`/video/${props.id}`}>
            <li className='video-list__list' key={props.id}>
                <div className='video-list__thumbnail'>
                    <img className='video-list__image' src={props.image} alt={props.title}></img>
                </div>
                <div className='video-list__headers'>
                    <h3 className='video-list__title'>{props.title}</h3>
                    <h2 className='video-list__channel'>{props.channel}</h2>
                </div>
            </li>
        </Link>
    )
}

export default VideoListVideo;