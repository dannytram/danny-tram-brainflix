import React from "react";
import "../../styles/main.css";
import HeroVideo from "../../components/HeroVideo"
import HeroAbout from "../../components/HeroAbout";
import CommentSection from "../../components/CommentSection";
import CommentsPosted from "../../components/CommentsPosted";
import VideoList from "../../components/VideoList";
import videos from "../../data/video-details.json";
import axios from "axios"

const API_URL = "https://project-2-api.herokuapp.com";
const API_KEY = "9d207241-4afe-4442-be9c-7331ebf2ea3b"

class HomePage extends React.Component {
    state = {
        videos,
        heroVideo: {},
    }

    componentDidMount(id) {
        axios
            .get(`${API_URL}/videos/${id}?api_key=" + ${API_KEY}`)
            .then(Response => {
                this.setState({
                    heroVideo: Response.data
                })
            })
    }

    updatedVideoHandler = (id) => {
        let updatedVideo = this.state.videos.find((video) => video.id === id);

        this.setState({
            heroVideo: updatedVideo,
        });
    };
    render() {
        return (
            <div>
                <div class="homepage">
                    <HeroVideo heroVideoThumbnail={this.state.heroVideo.image} />
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
                            handleClick={this.updatedVideoHandler}
                            currentVideo={this.state.heroVideo.id}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;

