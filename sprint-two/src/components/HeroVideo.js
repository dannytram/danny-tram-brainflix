import video from '../assets/videos/brainflix-sample-video.mp4'

function HeroVideo(props) {
  return (
    <div className='herovideo'>
      <video
        controls
        poster={props.heroVideoThumbnail}
        className='herovideo__video'
      >
        <source src={video} type='video/mp4' />
      </video>
    </div>
  )
}

export default HeroVideo