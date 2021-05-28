import React from "react";
import "../../styles/main.css";
import HeroVideo from "../../components/HeroVideo"
import HeroAbout from "../../components/HeroAbout";
import CommentSection from "../../components/CommentSection";
import CommentsPosted from "../../components/CommentsPosted";
import VideoList from "../../components/VideoList";
import axios from "axios"

const API_URL = "https://project-2-api.herokuapp.com";
const API_KEY = "9d207241-4afe-4442-be9c-7331ebf2ea3b"

class HomePage extends React.Component {
    state = {
        videos: [],
        heroVideo: {},
    };

    
    getHeroVideo(videoId) {
        axios
            .get(`${API_URL}/videos/${videoId}?api_key=${API_KEY}`)
            .then((response) => {
                this.setState({
                    heroVideo: response.data
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }
    

    componentDidMount() {
        this.getHeroVideo("1af0jruup5gu")
        //what if this heroVideo is deleted or removed,
        //maybe get list and then look for index 0
        axios
            .get(`${API_URL}/videos?api_key=${API_KEY}`)
            .then((response) => {

                this.setState({
                    videos: response.data
                })
            })
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            //if they are different, check if undefined
            //if undefined get default
            //if not undefined get new video
            this.getHeroVideo(this.props.match.params.id)
        }
    }

    // getNextVideo = (index) => {
    //     axios
    //     .get(`${API_URL}/videos?api_key=${API_KEY}`)
    //     .then((result) =>{
    //         this.setState({
    //             heroVideo: result.data[index] ++
    //         });
    //         console.log(result)
    //     });
    // };

    render() {
        return (
            <div class="homepage">
                <HeroVideo
                    heroVideo={this.state.heroVideo.video + `/?api_key=${API_KEY}`}
                    heroVideoThumbnail={this.state.heroVideo.image} />
                <div className="desktop-wrapper">
                    <div>
                        <HeroAbout heroAboutDetails={this.state.heroVideo} />
                        <CommentSection
                            commentSectionComments={this.state.heroVideo.comments}
                        />
                        <CommentsPosted
                            commentSectionComments={this.state.heroVideo.comments}
                        />
                    </div>
                    <VideoList
                        videos={this.state.videos}
                        currentVideo={this.state.heroVideo.id}
                    />
                </div>
            </div>
        )
    }
}

export default HomePage;