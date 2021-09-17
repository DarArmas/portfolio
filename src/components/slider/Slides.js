import React from "react";
import "./Slider.css";

const slidesInfo = [
    {
        src: "https://cdn.pixabay.com/photo/2016/03/27/18/54/technology-1283624_960_720.jpg",
        url: "https://github.com/DarArmas",
        alt: "Project 1",
        desc: "Project 1"
    },
    {
        src: "https://cdn.pixabay.com/photo/2017/07/31/11/31/laptop-2557468_960_720.jpg",
        url: "https://www.youtube.com/",
        alt: "Project 2",
        desc: "Project 2"
    },
    {
        src: "https://cdn.pixabay.com/photo/2017/06/26/08/13/mockup-2443050_960_720.jpg",
        url: "https://www.reddit.com/r/interestingasfuck/comments/obm811/dodge_the_rolligon_off_roader_built_in_1953/",
        alt: "Project 3",
        desc: "Project 3"
    },
];
 
const slides = slidesInfo.map(slide => (
    
    <div className="slide-container">
            <img href={slide.url} src={slide.src} alt={slide.alt}  />
            <div className="slide-desc">
                <span><a style={{color:"white", textDecoration: "none"}} href={slide.url}>{slide.desc} - Click here to check it out</a></span>
            </div>
    </div>
));

export default slides;