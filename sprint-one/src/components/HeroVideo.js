import video from "../assets/videos/brainflix-sample-video.mp4";
import thumbnail from "../assets/images/brainflix-video-thumbnail.jpg";

function HeroVideo() {
  return (
    <div className="herovideo">
      <video controls poster = {thumbnail} className="herovideo__video">
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}

export default HeroVideo;
