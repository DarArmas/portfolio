import React from "react";
import "./Slider.css";

const slidesInfo = [
    {
        src: "portfolio/assets/images/Laravellum.jpg",
        url: "http://laravellum2.darnellarmasweb.com/public/",
        alt: "Laravellum",
        desc: "LARAVELLUM (SOCIAL NETWORK)"
    },
    {
        src: "portfolio/assets/images/Tienda-videojuegos.jpg",
        url: "http://gamer-x.darnellarmasweb.com/",
        alt: "Videogames store",
        desc: "VIDEOGAMES STORE"
    },
    {
        src: "portfolio/assets/images/moviezone.jpg",
        url: "http://moviezone.darnellarmasweb.com/",
        alt: "Moviezone",
        desc: "Moviezone (Blog in Laravel + Admin panel)"
    },
    {
        src: "portfolio/assets/images/ToDo-list.jpg",
        url: "http://ToDo.darnellarmasweb.com/todoportafolio.mp4",
        alt: "ToDo",
        desc: "TO-DO LIST"
    },
    {
        src: "portfolio/assets/images/albumtracker.jpg",
        url: "http://albumtracker.darnellarmasweb.com/",
        alt: "Albumtracker",
        desc: "Albumtracker - PHP/MYSQL/JS"
    },
];
 
const slides = slidesInfo.map(slide => (
    
    <div className="slide-container">
            <img href={slide.url} src={slide.src} alt={slide.alt}  />
            <div className="slide-desc">
                <span>{slide.desc} - <a style={{color:"white", textDecoration: "none", fontWeight:"bold"}} href={slide.url} target="_blank" rel="noreferrer">Click here to check it out</a></span>
            </div>
    </div>
));

export default slides;