import React from 'react'

function HeroVideo(props) {
  return (
    <div className='herovideo'>
      <video
        controls
        src={props.heroVideo}
        poster={props.heroVideoThumbnail}
        className='herovideo__video'
      >
      </video>
    </div>
  )
}

export default HeroVideo