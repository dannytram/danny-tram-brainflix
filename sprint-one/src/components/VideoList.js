import React from 'react'

function VideoList(props) {
    return (
        <div className='video-list'>
            <h2 className='video-list__next'> NEXT VIDEO</h2>
            <ul className='video-list__results'>
                {props.videos
                    .filter((video) => video.id !== props.currentVideo)
                    .map((video) => {
                        return (
                            <li
                                className='video-list__list'
                                key={video.id}
                                onClick={() => {
                                    props.handleClick(video.id)
                                }}
                            >
                                <div className='video-list__thumbnail'>
                                    <img
                                        className='video-list__image'
                                        src={video.image}
                                        alt={video.title}
                                    ></img>
                                </div>
                                <div className='video-list__headers'>
                                    <h3 className='video-list__title'>{video.title}</h3>
                                    <h2 className='video-list__channel'>{video.channel}</h2>
                                </div>
                            </li>
                        )
                    })};
            </ul>
        </div>
    )
}

export default VideoList
