import React from 'react'
import video from '../assets/videos/brainflix-sample-video.mp4'

function HeroVideo(props) {
  return (
    <div className='herovideo'>
      <video
        controls
        src={props.video}
        poster={props.heroVideoThumbnail}
        className='herovideo__video'
      >
      </video>
    </div>
  )
}

export default HeroVideo