import React from 'react'
import views from "../assets/images/Icon-views.svg"
import likes from "../assets/images/Icon-likes.svg"

function HeroAbout(props) {
    return (
        <div className="heroabout">
            <h2 className="heroabout__title"> {props.heroAboutDetails.title} </h2>
            <div className="heroabout__info">
                <h3 className="heroabout__channel"> By {props.heroAboutDetails.channel} </h3>
                <h3 className="heroabout__timestamp"> {props.heroAboutDetails.timestamp} </h3>
            </div>
            <div className="heroabout__counters">
                <img className= "heroabout__views-img" src = {views} alt = "Views"></img>
                <h3 className="heroabout__views-counter"> {props.heroAboutDetails.views} </h3>
                <img className= "heroabout__likes-img" src = {likes} alt = "Likes"></img>
                <h3 className="heroabout__likes-counter"> {props.heroAboutDetails.likes} </h3>
            </div>
            <p className="heroabout__divider"> </p>
            <p className="heroabout__description">{props.heroAboutDetails.description}</p>
        </div>
    )
}

export default HeroAbout;

/* state = {
    heroVideo: {
    id: "1af0jruup5gu",
    title: "BMX Rampage: 2018 Highlights",
    channel: "Red Cow",
    image: "https://i.imgur.com/l2Xfgpl.jpg",
    description: "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
    views: "1,001,023",
    likes: "110,985",
    duration: "4:01",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: 1545162149000,
    comments: [ */