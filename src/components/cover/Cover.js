import React from 'react'
import "./Cover.css";
import coverVideo from "../../media/video_portada.mp4";

const Cover = () => {
    return (
        <div className = "cover-container">
            <video className = "video" src={coverVideo} autoPlay loop muted />
            <h1>Darnell Armas</h1>
            <p>Developer | IT Student  | Freelancer</p>
            <a
                href="assets/CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary mt-2"
                >
                Download CV
            </a>
            
        </div>
    
    );
}

export default Cover
