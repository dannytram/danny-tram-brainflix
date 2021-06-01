import React from 'react'
import views from '../../assets/images/Icon-views.svg'
import likes from '../../assets/images/Icon-likes.svg'
import "./HeroAbout.scss"

function HeroAbout(props) {
    return (
        <div className='heroabout'>
            <h2 className='heroabout__title'> {props.heroAboutDetails.title} </h2>
            <div className = "heroabout__about">
                <div className='heroabout__info'>
                    <h3 className='heroabout__channel'>By {props.heroAboutDetails.channel}</h3>
                    <h3 className='heroabout__timestamp'>{new Date(props.heroAboutDetails.timestamp).toLocaleDateString()}</h3>
                </div>
                <div className='heroabout__counters'>
                    <img className='heroabout__views-img' src={views} alt='Views'/>
                    <h3 className='heroabout__views-counter'>{props.heroAboutDetails.views}</h3>
                    <img className='heroabout__likes-img' src={likes} alt='Likes'/>
                    <h3 className='heroabout__likes-counter'>{props.heroAboutDetails.likes}</h3>
                </div>
            </div>
            <p className='heroabout__divider'> </p>
            <p className='heroabout__description'>{props.heroAboutDetails.description}</p>
        </div>
    )
}

export default HeroAbout