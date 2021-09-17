import React, {useState, useEffect} from 'react';
import './App.css';
import Cover from "./components/cover/Cover";
import Navbar from "./components/navbar/Navbar";
import About from './components/about/About';
import Slider from './components/slider/Slider';
import Info from "./components/info/Info";
import Footer from "./components/footer/Footer";


function App() {
  const [scrollHeight, setScrollHeight] = useState(0); //cuando la pagina carga el scroll está en 0

  //funcion para controlar scroll
  const handeScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handeScroll);
  }, [scrollHeight]);

  return (
    <div className="App">
      <Navbar isScrolling={scrollHeight}/>
      <Cover/>
      <About/>
      <Slider/>
      <Info/>
      <Footer/>
    </div>
  );
}

export default App;
