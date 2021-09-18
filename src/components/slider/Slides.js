import React from "react";
import "./Slider.css";

const slidesInfo = [
    {
        src: "assets/images/Laravellum.jpg",
        url: "http://laravellum.darnellarmasweb.com/public/",
        alt: "Laravellum",
        desc: "LARAVELLUM (SOCIAL NETWORK)"
    },
    {
        src: "assets/images/Tienda-videojuegos.jpg",
        url: "http://gamer-x.darnellarmasweb.com/",
        alt: "Videogames store",
        desc: "VIDEOGAMES STORE"
    },
    {
        src: "assets/images/MyAnimals.jpg",
        url: "http://mianimal.darnellarmasweb.com/public/",
        alt: "My Animals",
        desc: "MY ANIMALS (CRUD)"
    },
    {
        src: "assets/images/ToDo-list.jpg",
        url: "http://ToDo.darnellarmasweb.com/todoportafolio.mp4",
        alt: "ToDo",
        desc: "TO-DO LIST"
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