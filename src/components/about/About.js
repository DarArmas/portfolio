import React from 'react'
import "./About.css";
import aboutVideo from "../../media/video_portafolio.mp4";


const About = () => {
    return (
        <div className="about-container">
            <div className="about-desc">
                <h3>About me</h3>
                <p>Hello there! My name is Darnell, I am an aspiring full-stack developer and IT student, based in Durango, Mexico.
                    Welcome to my portfolio here you can see some of my projects</p>
            </div>
            <div className = "about-img">
                <video className = "video-about" src={aboutVideo} autoPlay loop muted />
            </div>
        </div>
    )
}

export default About
