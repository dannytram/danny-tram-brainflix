import React from 'react'
import '../../styles/main.css'
import HeroVideo from '../../components/HeroVideo/HeroVideo'
import HeroAbout from '../../components/HeroAbout/HeroAbout'
import CommentSection from '../../components/CommentSection/CommentSection'
import CommentsPosted from '../../components/CommentsPosted/CommentsPosted'
import VideoList from '../../components/VideoList/VideoList'
import axios from 'axios'

const API_KEY = '9d207241-4afe-4442-be9c-7331ebf2ea3b'
const URL = 'http://localhost:8080'

class HomePage extends React.Component {
    state = {
        videos: [],
        heroVideo: {},
    }

    getHeroVideo(videoId) {
        axios
            .get(`${URL}/videos/${videoId}`)
            .then((response) => {
                this.setState({
                    heroVideo: response.data,
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    componentDidMount() {
        this.getHeroVideo('1af0jruup5gu')
        axios.get(`${URL}/videos`).then((response) => {
            this.setState({
                videos: response.data,
            })
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.getHeroVideo(this.props.match.params.id)
        }
    }

    render() {
        return (
            <div className='homepage'>
                <HeroVideo
                    heroVideo={this.state.heroVideo.video + `/?api_key=${API_KEY}`}
                    heroVideoThumbnail={this.state.heroVideo.image}
                />
                <div className='desktop-wrapper'>
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

export default HomePage
